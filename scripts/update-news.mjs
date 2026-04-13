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

function isRelevant(item) {
  const haystack = `${item.title} ${item.summary}`.toLowerCase();
  return includePatterns.some((pattern) => pattern.test(haystack));
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
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.text();
}

async function loadRssFeed(url, region, source) {
  const xml = await fetchText(url);
  const blocks = xml.match(/<item\b[\s\S]*?<\/item>/gi) ?? [];
  const items = [];
  for (const block of blocks) {
    try {
      const title = extractTag(block, 'title');
      const summary = extractTag(block, 'description') || extractTag(block, 'content:encoded');
      const link = extractTag(block, 'link');
      const pubDate = extractTag(block, 'pubDate') || extractTag(block, 'dc:date');
      const publishedAt = pubDate && !Number.isNaN(Date.parse(pubDate)) ? new Date(pubDate).toISOString() : new Date().toISOString();
      const item = {
        id: `${source.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 72)}`.replace(/-+/g, '-').replace(/^-|-$/g, ''),
        region,
        title,
        summary,
        source,
        url: link,
        publishedAt,
        language: 'en',
      };
      if (item.title && item.url && isRelevant(item)) items.push(item);
    } catch {
      // Skip malformed feed rows and keep the rest of the feed.
    }
  }
  return items;
}

async function main() {
  const [todayInEnergy, pressReleases, gasDiesel] = await Promise.all([
    loadRssFeed('https://www.eia.gov/rss/todayinenergy.xml', 'global', 'U.S. EIA'),
    loadRssFeed('https://www.eia.gov/rss/press_rss.xml', 'global', 'U.S. EIA'),
    loadRssFeed('https://www.eia.gov/petroleum/gasdiesel/includes/gas_diesel_rss.xml', 'global', 'U.S. EIA'),
  ]);

  const existing = JSON.parse(await readFile(outputPath, 'utf8'));
  const currentItems = Array.isArray(existing.items) ? existing.items : [];
  const merged = dedupe([
    ...todayInEnergy,
    ...pressReleases,
    ...gasDiesel,
    ...currentItems,
  ]).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const payload = {
    updatedAt: new Date().toISOString(),
    items: merged.slice(0, 20),
  };

  await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`);
  console.log(`Updated ${path.relative(rootDir, outputPath)} with ${payload.items.length} items.`);
}

main().catch(async (error) => {
  console.error(error instanceof Error ? error.message : error);
  console.error('Keeping the checked-in news.json fallback.');
});
