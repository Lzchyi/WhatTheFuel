import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = path.join(rootDir, 'public', 'data', 'global-prices.json');

const API_KEY = process.env.OILPRICE_API_KEY || "1408f85679ef607f767551e6fd1b60a071453002f6bbfd00dea5b81ee1f2aa68";

const TARGET_START_DATE = '2026-02-01';

async function fetchPrices(code) {
  let allPrices = [];
  let page = 1;
  let reachedTargetDate = false;

  while (!reachedTargetDate) {
    const url = `https://api.oilpriceapi.com/v1/prices/historical?by_code=${code}&start_date=${TARGET_START_DATE}&page=${page}`;
    const response = await fetch(url, { headers: { 'Authorization': `Token ${API_KEY}` } });
    if (!response.ok) throw new Error(`Failed to fetch ${code} page ${page}: ${response.statusText}`);
    
    const json = await response.json();
    const prices = json.data.prices || [];
    
    if (prices.length === 0) break;

    allPrices = allPrices.concat(prices);
    
    // Check if the last item in this page (oldest) is older than or equal to our target start date
    // Note: API returns data in descending order (newest first)
    const oldestInPage = prices[prices.length - 1].created_at.split('T')[0];
    if (oldestInPage <= TARGET_START_DATE) {
      reachedTargetDate = true;
    } else {
      page++;
    }
    
    // Safety break
    if (page > 10) break;
  }
  
  return allPrices;
}

async function main() {
  const brentReq = await fetchPrices('BRENT_CRUDE_USD');
  const wtiReq = await fetchPrices('WTI_USD');

  // Group by day to get daily prices (takes the latest value for each day)
  const mapByDate = {};

  for (const item of wtiReq) {
    const date = item.created_at.split('T')[0];
    if (!mapByDate[date]) mapByDate[date] = { date };
    if (!mapByDate[date].wti) mapByDate[date].wti = item.price;
  }

  for (const item of brentReq) {
    const date = item.created_at.split('T')[0];
    if (!mapByDate[date]) mapByDate[date] = { date };
    if (!mapByDate[date].brent) mapByDate[date].brent = item.price;
  }

  // Convert to array and sort ascending
  const chartData = Object.values(mapByDate)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const payload = {
    updatedAt: new Date().toISOString(),
    chartData
  };

  await fs.writeFile(outputPath, JSON.stringify(payload, null, 2) + '\n', 'utf8');
  console.log(`Updated global-prices.json using oilpriceapi.com`);
}

main().catch(console.error);
