export type SourceLink = {
  label: string;
  url: string;
};

export type ArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  sources?: SourceLink[];
};

export type MythCard = {
  myth: string;
  fact: string;
  whyItMatters: string;
  sources: SourceLink[];
};

export const homeLead = {
  eyebrow: 'Source-backed fuel context for Malaysia',
  title: 'WhatTheFuel keeps the panic out and the citations in.',
  subtitle:
    'Use this site to read the latest verified fuel prices, recent fuel-related news, a compact timeline, and plain-language explainers on why global oil shocks still reach Malaysia.',
  disclaimer:
    'This is an educational site, not an official policy channel. Where a figure is still being reviewed, the page should say so instead of guessing.',
};

export const globalSections: ArticleSection[] = [
  {
    title: 'Oil is priced globally, not street by street',
    paragraphs: [
      'Crude and refined fuel prices move because traders, refiners, shipping firms, and governments react to the same underlying signal: how tight the global market is right now, and how risky the next few weeks look.',
      'EIA groups the main drivers into spot prices, OPEC and non-OPEC supply, inventories, financial markets, and demand in OECD and non-OECD economies. That matters because a shock in one region can change pricing everywhere else within hours.',
    ],
    sources: [
      { label: 'EIA overview', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
      { label: 'EIA demand in non-OECD economies', url: 'https://www.eia.gov/finance/markets/crudeoil/demand-nonoecd.php' },
    ],
  },
  {
    title: 'Chokepoints turn tension into shipping cost',
    paragraphs: [
      'The Strait of Hormuz is the cleanest example of why fuel news becomes a local issue. EIA says about 20 million barrels per day moved through the strait in 2024, roughly one-fifth of global petroleum liquids consumption.',
      'When a chokepoint looks threatened, the market does not wait for an actual blockade. Insurance, freight, refinery replacement cost, and speculative hedging all reprice before a driver sees the change at the pump.',
    ],
    sources: [
      { label: 'EIA Hormuz analysis', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' },
    ],
  },
  {
    title: 'Spot prices, futures, and inventories do not move in lockstep',
    paragraphs: [
      'EIA’s market analysis explains that current prices and futures prices respond differently to a shock. When traders expect tighter supply later, futures move first; when physical supply is interrupted now, spot prices can jump immediately.',
      'Inventories are the buffer between those two worlds. Low stocks, weaker refining slack, or disrupted shipping all make the market more sensitive to headlines.',
    ],
    sources: [
      { label: 'EIA financial markets', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
      { label: 'EIA demand in OECD economies', url: 'https://www.eia.gov/finance/markets/crudeoil/demand-oecd.php' },
    ],
  },
  {
    title: 'Malaysia feels global oil because it buys into the same market',
    paragraphs: [
      'Malaysia is an oil and gas producer, but that does not make the domestic pump isolated from global pricing. The country still trades crude, refined products, shipping capacity, and replacement barrels in a global market.',
      'That is why a conflict or shipping disruption far away can still show up in domestic price calculations, subsidy pressure, and the timing of weekly retail updates.',
    ],
    bullets: [
      'Global benchmark movements feed into domestic replacement cost.',
      'Shipping and insurance costs can move even if the crude headline price pauses.',
      'Refiners and distributors still need to buy or replace product at market prices.',
    ],
  },
];

export const malaysiaSections: ArticleSection[] = [
  {
    title: 'Malaysia is not just an oil country',
    paragraphs: [
      'DOSM’s latest sector release shows services remain the largest share of the economy, while manufacturing is also a major contributor. That is the first reason the “Malaysia produces oil, so fuel should always be cheap” argument is too simple.',
      'The economy is broad, and fuel policy has to balance consumers, fiscal exposure, and industrial demand at the same time.',
    ],
    sources: [
      { label: 'DOSM GDP by state 2024', url: 'https://v2.dosm.gov.my/portal-main/release-content/gross-domestic-product-gdp-by-state-2024' },
    ],
  },
  {
    title: 'Malaysia exports crude, imports crude, and imports refined products',
    paragraphs: [
      'DOSM’s petroleum statistics show Malaysia exports crude oil and condensate, but it also imports crude petroleum, condensates, and refined petroleum products. That is normal for a refinery-linked trading economy.',
      'The important point is not whether Malaysia produces oil in the abstract. The important point is whether the exact grade, product, and timing needed by the domestic market are available at a tolerable cost.',
    ],
    sources: [
      { label: 'DOSM petroleum statistics Q1 2025', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-first-quarter-2025' },
      { label: 'DOSM petroleum statistics Q4 2025', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-q42025' },
    ],
  },
  {
    title: 'Subsidies are targeted, not infinite',
    paragraphs: [
      'MOF’s April 2026 updates keep subsidised RON95 at RM1.99 per litre under BUDI95, maintain the temporary 200-litre monthly limit, and keep special support rules for approved use cases such as e-hailing.',
      'That is the policy reality the site should explain clearly: the public price is subsidised, but the government still tracks the cost of each litre through a targeted support system.',
    ],
    bullets: [
      'General BUDI95 limit: 200 litres per month.',
      'E-hailing tier: up to 800 litres per month for qualifying drivers.',
      'Diesel support remains differentiated by region and eligibility.',
    ],
    sources: [
      { label: 'MOF April 8 citation', url: 'https://www.mof.gov.my/portal/en/news/press-citations/govt-maintains-subsidised-prices-amid-global-oil-market-volatility' },
      { label: 'MOF BUDI95 eligibility update', url: 'https://www.mof.gov.my/portal/en/news/press-citations/claims-of-additional-budi95-subsidy-application-untrue-200-litre-monthly-limit-remains-mof' },
      { label: 'MOF e-hailing tier update', url: 'https://mof.gov.my/portal/en/news/press-citations/budi95-tiered-eligibility-for-e-hailing-drivers-to-be-activated-mid-month-mof' },
    ],
  },
  {
    title: 'Why the site shows citations first',
    paragraphs: [
      'If a figure is not directly backed by an official release or a clearly attributable report, it should stay out of the hero cards and explainers.',
      'That keeps the project useful instead of loud. A blank slot is better than a confident number that cannot be defended.',
    ],
  },
];

export const mythCards: MythCard[] = [
  {
    myth: '“Malaysia produces oil, so petrol should always be cheap.”',
    fact:
      'Malaysia still participates in global crude and refined product trade, and domestic pricing is exposed to replacement cost, refining margins, logistics, and subsidy policy.',
    whyItMatters:
      'This is the most common shortcut behind angry fuel takes. It sounds intuitive, but it ignores how physical product and market pricing actually work.',
    sources: [
      { label: 'DOSM petroleum statistics', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-fourth-quarter-2025' },
      { label: 'EIA spot prices', url: 'https://www.eia.gov/finance/markets/crudeoil/spot_prices.php/spot_prices.php' },
    ],
  },
  {
    myth: '“Pump price equals today’s crude oil price.”',
    fact:
      'MOF says Malaysia’s retail pump prices are based on the previous week’s average costs, so today’s market move is not reflected instantly.',
    whyItMatters:
      'This is why people often see a global oil drop on the news and assume the government is hiding cheaper fuel.',
    sources: [
      { label: 'MOF pump price lag explanation', url: 'https://www.mof.gov.my/portal/en/news/press-citations/mof-pump-fuel-prices-reflect-last-weeks-costs-despite-global-drop' },
    ],
  },
  {
    myth: '“Subsidies mean the government can absorb anything forever.”',
    fact:
      'The current system is targeted. MOF has temporarily tightened BUDI95 limits and keeps special quotas for specific categories instead of offering unlimited blanket support.',
    whyItMatters:
      'If subsidy discussions ignore fiscal limits, the debate becomes fantasy instead of policy.',
    sources: [
      { label: 'MOF April 8 citation', url: 'https://www.mof.gov.my/portal/en/news/press-citations/govt-maintains-subsidised-prices-amid-global-oil-market-volatility' },
      { label: 'MOF 200-litre limit update', url: 'https://www.mof.gov.my/portal/en/news/press-citations/claims-of-additional-budi95-subsidy-application-untrue-200-litre-monthly-limit-remains-mof' },
    ],
  },
  {
    myth: '“A producer country is insulated from global shocks.”',
    fact:
      'EIA’s Hormuz analysis shows that even a chokepoint far from Malaysia can move global prices, insurance, and freight costs almost immediately.',
    whyItMatters:
      'Malaysia is in the same commodity system as everyone else. Geography changes the degree of impact, not the fact of impact.',
    sources: [
      { label: 'EIA Hormuz analysis', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' },
    ],
  },
];
