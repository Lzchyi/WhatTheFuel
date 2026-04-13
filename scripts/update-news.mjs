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
  /minyak/i,
  /harga minyak/i,
  /bahan api/i,
  /subsidi/i,
  /petroleum/i,
  /汽油/i,
  /柴油/i,
  /燃油/i,
  /油价/i,
  /原油/i,
  /补贴/i,
  /石油/i,
  /炼油/i,
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
  { kind: 'rss', region: 'malaysia', source: 'FMT', url: 'https://www.freemalaysiatoday.com/category/nation/feed/', weight: 4 },
  { kind: 'rss', region: 'malaysia', source: 'FMT', url: 'https://www.freemalaysiatoday.com/category/business/feed/', weight: 4 },
  { kind: 'rss', region: 'global', source: 'FMT', url: 'https://www.freemalaysiatoday.com/category/world/feed/', weight: 3 },
  { kind: 'html-list', region: 'malaysia', source: 'Malay Mail', url: 'https://www.malaymail.com/news/malaysia/feed/', weight: 4, maxItems: 20, linkPattern: /https:\/\/www\.malaymail\.com\/news\// },
  { kind: 'html-list', region: 'global', source: 'Malay Mail', url: 'https://www.malaymail.com/news/world/feed/', weight: 3, maxItems: 20, linkPattern: /https:\/\/www\.malaymail\.com\/news\// },
  { kind: 'html-list', region: 'global', source: 'Malay Mail', url: 'https://www.malaymail.com/news/money/feed/', weight: 3, maxItems: 20, linkPattern: /https:\/\/www\.malaymail\.com\/news\// },
  { kind: 'html-list', region: 'malaysia', source: 'Sin Chew Daily', url: 'https://www.sinchew.com.my/?feed=rss2', weight: 4, maxItems: 20, linkPattern: /https:\/\/(?:[a-z0-9-]+\.)?sinchew\.com\.my\/news\//i },
  { kind: 'html-list', region: 'global', source: 'Sin Chew Daily', url: 'https://www.sinchew.com.my/latest', weight: 3, maxItems: 20, linkPattern: /https:\/\/(?:[a-z0-9-]+\.)?sinchew\.com\.my\/news\//i },
  { kind: 'rss', region: 'malaysia', source: 'Berita RTM', url: 'https://berita.rtm.gov.my/feed/', weight: 4 },
  { kind: 'rss', region: 'malaysia', source: 'Berita RTM', url: 'https://berita.rtm.gov.my/category/niaga/feed/', weight: 4 },
  { kind: 'rss', region: 'malaysia', source: 'Sinar Premium', url: 'https://premium.sinarharian.com.my/rssFeed/15', weight: 4 },
  { kind: 'rss', region: 'malaysia', source: 'Sinar Premium', url: 'https://premium.sinarharian.com.my/rssFeed/300', weight: 4 },
  { kind: 'rss', region: 'malaysia', source: 'Sinar Premium', url: 'https://premium.sinarharian.com.my/rssFeed/305', weight: 4 },
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

function extractMetaContent(html, names) {
  for (const name of names) {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const patterns = [
      new RegExp(`<meta[^>]+name=["']${escaped}["'][^>]+content=["']([^"']+)["'][^>]*>`, 'i'),
      new RegExp(`<meta[^>]+property=["']${escaped}["'][^>]+content=["']([^"']+)["'][^>]*>`, 'i'),
    ];
    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match) return decodeEntities(match[1]).trim();
    }
  }
  return '';
}

function inferPublishedAtFromUrl(url) {
  const match = url.match(/\/news\/(\d{4})\/(\d{2})\/(\d{2})\//i);
  if (match) return new Date(`${match[1]}-${match[2]}-${match[3]}T00:00:00Z`).toISOString();
  const compactMatch = url.match(/\/news\/(\d{8})\//i);
  if (compactMatch) {
    const value = compactMatch[1];
    return new Date(`${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}T00:00:00Z`).toISOString();
  }
  return new Date().toISOString();
}

function parseArticleLinks(html, baseUrl, linkPattern) {
  const anchors = [...html.matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)];
  const items = [];
  for (const [, href, inner] of anchors) {
    const title = stripTags(decodeEntities(inner));
    const url = resolveUrl(baseUrl, href);
    if (!title || !url) continue;
    if (linkPattern && !linkPattern.test(url)) continue;
    if (/next|prev|back to top|share|subscribe|newsletter|advertise|login|sign in|rss/i.test(title)) continue;
    items.push({ title, url });
  }
  return dedupe(items);
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

async function loadHtmlListingFeed(feed) {
  const html = await fetchText(feed.url);
  const articleLinks = parseArticleLinks(html, feed.url, feed.linkPattern).slice(0, feed.maxItems ?? 8);
  const items = [];
  for (const article of articleLinks) {
    try {
      const articleHtml = await fetchText(article.url);
      const title = article.title;
      const summary = extractMetaContent(articleHtml, ['description', 'og:description']) || firstMeaningfulParagraph(articleHtml, title);
      const publishedAt = inferPublishedAtFromUrl(article.url);
      const item = {
        id: `${feed.source.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 72)}`.replace(/-+/g, '-').replace(/^-|-$/g, ''),
        region: feed.region,
        title,
        summary,
        source: feed.source,
        url: article.url,
        publishedAt,
        language: 'en',
        score: 0,
      };
      const score = relevanceScore(item, feed.weight);
      if (score >= 5) items.push({ ...item, score });
    } catch {
      // Keep processing the rest of the listing if one article fails.
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
  if (feed.kind === 'html-list') return loadHtmlListingFeed(feed);
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
