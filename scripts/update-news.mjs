import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = path.join(rootDir, 'public', 'data', 'news.json');

const includePatterns = [
  /fuel/i,
  /petrol/i,
  /diesel/i,
  /ron95/i,
  /ron97/i,
  /budi95/i,
  /subsid/i,
  /crude oil/i,
  /oil price/i,
  /opec/i,
  /hormuz/i,
  /refinery/i,
  /shipping/i,
  /energy/i,
];

const rejectPatterns = [
  /sports?/i,
  /lifestyle/i,
  /entertainment/i,
  /education/i,
  /football/i,
  /tennis/i,
  /cricket/i,
  /health/i,
  /travel/i,
  /technology/i,
];

const feeds = [
  { kind: 'rss', region: 'global', source: 'U.S. EIA', url: 'https://www.eia.gov/rss/todayinenergy.xml', weight: 4 },
  { kind: 'rss', region: 'global', source: 'U.S. EIA', url: 'https://www.eia.gov/rss/press_rss.xml', weight: 4 },
  { kind: 'rss', region: 'global', source: 'BBC News', url: 'https://newsrss.bbc.co.uk/rss/newsonline_world_edition/front_page/rss.xml', weight: 3 },
  { kind: 'rss', region: 'global', source: 'BBC News', url: 'https://newsrss.bbc.co.uk/rss/newsonline_uk_edition/business/rss.xml', weight: 3 },
  { kind: 'html', region: 'malaysia', source: 'MOF / Bernama', url: 'https://www.mof.gov.my/portal/en/news/press-citations?start=2', weight: 5 },
  { kind: 'html', region: 'malaysia', source: 'MOF / Bernama', url: 'https://www.mof.gov.my/portal/en/news/press-citations?start=3', weight: 5 },
];

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function stripTags(value) {
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function extractTag(block, tag) {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\/${tag}>`, 'i'));
  return match ? decodeEntities(stripTags(match[1])) : '';
}

function resolveUrl(baseUrl, href) {
  try {
    return new URL(href, baseUrl).toString();
  } catch {
    return href;
  }
}

function looksRelevant(text) {
  if (rejectPatterns.some((pattern) => pattern.test(text))) return false;
  return includePatterns.some((pattern) => pattern.test(text));
}

function relevanceScore(item, weight = 0) {
  const haystack = `${item.title} ${item.summary}`.toLowerCase();
  if (!looksRelevant(haystack)) return -1;
  let score = weight;
  for (const pattern of includePatterns) {
    if (pattern.test(haystack)) score += 1;
  }
  if (item.summary && item.summary.length > 120) score += 1;
  return score;
}

function dedupe(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = `${item.title}|${item.url}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'WhatTheFuel/1.0 (+https://github.com/Lzchyi/WhatTheFuel)',
      'Cache-Control': 'no-cache',
    },
  });
  if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status}`);
  return response.text();
}

async function loadRssFeed(feed) {
  const xml = await fetchText(feed.url);
  const blocks = xml.match(/<item\b[\s\S]*?<\/item>/gi) ?? [];
  const items = [];
  for (const block of blocks) {
    const title = extractTag(block, 'title');
    const summary = extractTag(block, 'description') || extractTag(block, 'content:encoded');
    const link = extractTag(block, 'link');
    const pubDate = extractTag(block, 'pubDate') || extractTag(block, 'dc:date');
    const item = {
      id: `${feed.source.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 72)}`.replace(/-+/g, '-').replace(/^-|-$/g, ''),
      region: feed.region,
      title,
      summary,
      source: feed.source,
      url: link,
      publishedAt: pubDate && !Number.isNaN(Date.parse(pubDate)) ? new Date(pubDate).toISOString() : new Date().toISOString(),
      language: 'en',
      score: 0,
    };
    const score = relevanceScore(item, feed.weight);
    if (item.title && item.url && score >= 5) {
      items.push({ ...item, score });
    }
  }
  return items;
}

function firstMeaningfulParagraph(text, title) {
  const clean = stripTags(text).replace(/\s+/g, ' ');
  const index = title ? clean.toLowerCase().indexOf(title.toLowerCase()) : -1;
  const slice = index >= 0 ? clean.slice(index + title.length) : clean;
  const sentences = slice.split(/(?<=[.!?])\s+/).filter(Boolean);
  return sentences.slice(0, 2).join(' ').trim();
}

function parseMofArticles(html, baseUrl) {
  const anchors = [...html.matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)];
  const items = [];
  for (const [, href, inner] of anchors) {
    const title = stripTags(decodeEntities(inner));
    const url = resolveUrl(baseUrl, href);
    if (!title || !url.includes('/portal/en/news/press-citations/')) continue;
    if (/next|prev|back to top|press citations archive/i.test(title)) continue;
    items.push({ title, url });
  }
  return dedupe(items);
}

async function loadMofFeed(feed) {
  const listingHtml = await fetchText(feed.url);
  const articleLinks = parseMofArticles(listingHtml, feed.url).slice(0, 6);
  const items = [];
  for (const article of articleLinks) {
    try {
      const html = await fetchText(article.url);
      const text = stripTags(html);
      const dateMatch = text.match(/Press Citations\s+(\d{1,2}\s+[A-Za-z]+\s+\d{4})/i);
      const publishedAt = dateMatch && !Number.isNaN(Date.parse(dateMatch[1]))
        ? new Date(dateMatch[1]).toISOString()
        : new Date().toISOString();
      const summary = firstMeaningfulParagraph(text, article.title);
      const item = {
        id: `${feed.source.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 72)}`.replace(/-+/g, '-').replace(/^-|-$/g, ''),
        region: feed.region,
        title: article.title,
        summary,
        source: feed.source,
        url: article.url,
        publishedAt,
        language: 'en',
        score: 0,
      };
      const score = relevanceScore(item, feed.weight);
      if (score >= 6) items.push({ ...item, score });
    } catch {
      // Keep processing the rest of the listing if one article fails.
    }
  }
  return items;
}

async function fetchFeed(feed) {
  if (feed.kind === 'rss') return loadRssFeed(feed);
  return loadMofFeed(feed);
}

async function main() {
  const fetched = await Promise.all(feeds.map((feed) => fetchFeed(feed).catch(() => [])));
  const merged = dedupe(fetched.flat())
    .sort((a, b) => b.score - a.score || new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 20)
    .map(({ score, ...item }) => item);

  const existing = JSON.parse(await readFile(outputPath, 'utf8'));
  const fallback = Array.isArray(existing.items) ? existing.items : [];
  const payload = {
    updatedAt: new Date().toISOString(),
    items: merged.length ? merged : fallback,
  };

  await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`);
  console.log(`Updated ${path.relative(rootDir, outputPath)} with ${payload.items.length} items.`);
}

main().catch(async (error) => {
  console.error(error instanceof Error ? error.message : error);
  console.error('Keeping the checked-in news.json fallback.');
});
