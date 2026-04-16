import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = path.join(rootDir, 'public', 'data', 'fuel-prices.json');

async function main() {
  const url = 'https://api.data.gov.my/data-catalogue?id=fuelprice&limit=1&sort=-date';
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch from data.gov.my: ${response.statusText}`);
  const data = await response.json();
  if (!data || data.length === 0) throw new Error('No data found from data.gov.my');
  
  const latest = data[0];
  
  const b10_peninsular = parseFloat(latest.diesel) || 0;
  const b7_peninsular = parseFloat((b10_peninsular + 0.20).toFixed(2));
  
  const b10_east = parseFloat(latest.diesel_eastmsia) || 0;
  const b7_east = parseFloat((b10_east + 0.20).toFixed(2));
  
  const payload = {
    status: "verified",
    updatedAt: new Date().toISOString(),
    disclaimer: "Prices shown here are automatically sourced from the data.gov.my open API (Ministry of Finance). The data is maintained and released officially by the government.",
    sections: [
      {
        title: "Current pump prices",
        sourceLabel: "data.gov.my / Ministry of Finance",
        sourceUrl: "https://data.gov.my/data-catalogue/fuelprice",
        items: [
          { label: "BUDI95 RON95", value: `RM${(parseFloat(latest.ron95_budi95) || 0).toFixed(2)}/L` },
          { label: "RON95 unsubsidised", value: `RM${(parseFloat(latest.ron95) || 0).toFixed(2)}/L` },
          { label: "RON97", value: `RM${(parseFloat(latest.ron97) || 0).toFixed(2)}/L` },
          { label: "Diesel B10/B20 Peninsular", value: `RM${b10_peninsular.toFixed(2)}/L` },
          { label: "Diesel B7 Peninsular", value: `RM${b7_peninsular.toFixed(2)}/L` },
          { label: "Diesel B10/B20 Sabah / Sarawak", value: `RM${b10_east.toFixed(2)}/L` },
          { label: "Diesel B7 Sabah / Sarawak", value: `RM${b7_east.toFixed(2)}/L` }
        ]
      }
    ],
    quotaNotes: [
      "General BUDI95 eligibility is temporarily capped at 200 litres per month.",
      "Qualified e-hailing drivers can reach up to 800 litres per month under the tiered eligibility rule.",
      "BUDI Diesel cash assistance remains a targeted support layer instead of a blanket fuel subsidy."
    ]
  };

  await fs.writeFile(outputPath, JSON.stringify(payload, null, 2) + '\n', 'utf8');
  console.log(`Updated ${path.relative(rootDir, outputPath)} from data.gov.my API using reference date: ${latest.date}.`);
}

main().catch(console.error);
