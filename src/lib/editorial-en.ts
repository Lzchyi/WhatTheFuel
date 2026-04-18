import type { EditorialCopy } from './editorial';

export const en: EditorialCopy = {
  home: {
    eyebrow: 'Fuel context with sources',
    title: 'WhatTheFuel keeps the panic out and the citations in.',
    subtitle: 'Verified fuel prices, a compact timeline, and plain-language explainers on the global energy market.',
    disclaimer: 'Independent public education project. We organize verified prices, explainers, and source links; we do not publish official prices or original reporting.',
    latestTitle: 'Latest fuel snapshot',
    latestSubtitle: 'Current prices and subsidy lines tied to official sources.',
    pricesLabel: 'Fuel prices',
    newsLabel: 'Live news',
    loadingPrices: 'Loading verified price data.',
    emptyNews: 'No live items yet for this tab.',
  },
  understanding: {
    title: 'Understanding the numbers',
    intro: 'A brief guide to fuel pricing labels and regional differences.',
    cards: [
      { title: 'Why RON95 is fixed', body: 'The government sets a subsidised retail price to ensure stability for the public, regardless of market volatility.' },
      { title: 'Why RON97 changes weekly', body: 'RON97 is market-linked and follows a weekly pricing cycle based on global crude movements.' },
      { title: 'Why diesel differs by region', body: 'Peninsular and East Malaysia operate under separate managed pricing frameworks and support structures.' },
      { title: 'What "unsubsidised" means', body: 'This is the reference market price before any government support is applied, showing the true cost of fuel.' },
      { title: 'Why labels matter', body: 'One pump can show multiple price points (public, reference, regional). Understanding them prevents inaccurate comparisons.' },
    ],
  },
  global: {
    title: 'Oil 101: How Crude Oil Works',
    intro: 'A look at how crude oil forms, how it is graded, and how it transforms into the fuel in your tank.',
    footnote: 'This page explains global mechanisms. Local price timings depend on domestic policy and logistics.',
    noteTitle: 'Note',
    sections: [
      {
        title: 'How crude oil forms — a 300-million-year story',
        paragraphs: [
          'Crude oil is a fossil fuel formed from the remains of microscopic marine organisms (plankton) that lived hundreds of millions of years ago. When these organisms died, they were buried under layers of sediment on ancient ocean floors.',
          'Over millions of years, intense heat and pressure transformed this organic matter into a waxy substance called kerogen, which eventually "cracked" into liquid oil and gas. This slow geological process makes oil a non-renewable resource.',
        ],
        sources: [
          { label: 'Penn State EARTH 104', url: 'https://www.e-education.psu.edu/earth104/node/2215' },
          { label: 'EnergyEducation.ca', url: 'https://energyeducation.ca/encyclopedia/Petroleum_formation' },
        ],
      },
      {
        title: 'Crude oil quality — sweet vs sour, light vs heavy',
        paragraphs: [
          'Crude oil is graded by density (API Gravity) and sulphur content. Light crude flows easily and yields more high-value products like gasoline. "Sweet" crude has low sulphur, making it cheaper and cleaner to refine.',
          "Malaysia's Tapis crude is ultra-light and ultra-sweet, making it one of the world's most valuable benchmarks. While Brent and WTI are global standards, Tapis often trades at a premium due to its superior quality for refining petrol.",
        ],
        bullets: [
          'Light & Sweet: Highest value, lowest refining cost (e.g., Tapis, WTI, Brent).',
          'Medium & Sour: Moderate refining cost (e.g., Dubai crude).',
          'Heavy: Lowest value, most intensive refining required (e.g., Venezuelan heavy).',
        ],
        sources: [
          { label: 'EIA: Crude Oil Grades', url: 'https://www.eia.gov/todayinenergy/detail.php?id=31372' },
          { label: 'S&P Global: Global Benchmarks', url: 'https://www.spglobal.com/commodityinsights/en/market-insights/videos/market-movers-asia/041425-middle-east-iran-us-tensions-china-india-oil-steel-agriculture' },
        ],
      },
      {
        title: 'How crude oil is refined — the distillation tower',
        paragraphs: [
          'Refining separates crude oil into usable components through fractional distillation. The oil is heated and fed into a tower where different molecules condense at different heights based on their boiling points.',
          'Lighter molecules rise to the top as petrol and gas, while heavier ones settle at the bottom as fuel oil or bitumen. One barrel of crude produces multiple products simultaneously, from cooking gas to road asphalt.',
        ],
        bullets: [
          'Top: LPG and Petrol (RON95/97).',
          'Middle: Kerosene (Jet Fuel) and Diesel.',
          'Bottom: Fuel Oil and Bitumen (Asphalt).',
        ],
        sources: [
          { label: 'EIA: Refining Explained', url: 'https://www.eia.gov/energyexplained/oil-and-petroleum-products/refining-crude-oil-fractions.php' },
          { label: 'Crown Oil: Refining Process', url: 'https://www.crownoil.co.uk/guides/oil-refining-process-guide/' },
        ],
      },
      {
        title: 'Who produces the most oil — global rankings',
        paragraphs: [
          'Global production is dominated by the USA, Saudi Arabia, and Russia. These top producers, along with OPEC members, manage output levels to influence global prices. The US "shale revolution" recently made it the world\'s largest producer.',
          'Malaysia ranks roughly 29th globally. While a significant regional producer, its output is small relative to world totals. This is why Malaysian fuel prices remain linked to global benchmarks rather than moving independently.',
        ],
        bullets: [
          '🇺🇸 USA: ~22 mb/d (World largest).',
          '🇸🇦 Saudi Arabia: ~11 mb/d (OPEC anchor).',
          '🇷🇺 Russia: ~11 mb/d (OPEC+ leader).',
          '🇲🇾 Malaysia: ~0.6 mb/d (Regional player).',
        ],
        sources: [
          { label: 'EIA Production Data 2023', url: 'https://www.eia.gov/international/data/world/petroleum-and-other-liquids/annual-petroleum-and-other-liquids-production' },
        ],
      },
      {
        title: 'Oil is priced globally, not street by street',
        paragraphs: [
          'Crude prices respond to global supply tightness and geopolitical risks. Traders and refiners react to market signals across spot prices, inventory levels, and financial markets simultaneously.',
        ],
        sources: [{ label: 'EIA Market Overview', url: 'https://www.eia.gov/finance/markets/crudeoil/reports_and_analysis.php' }],
      },
      {
        title: 'Chokepoints turn tension into shipping cost',
        paragraphs: [
          'Critical shipping routes like the Strait of Hormuz handle 20% of global oil. Any perceived threat to these chokepoints causes freight and insurance costs to rise immediately, even before an actual disruption occurs.',
        ],
        sources: [{ label: 'EIA Chokepoint Analysis', url: 'https://www.eia.gov/international/analysis/special-topics/World_Oil_Transit_Chokepoints' }],
      },
      {
        title: 'Spot prices, futures, and inventories',
        paragraphs: [
          'The market balances current physical supply (spot prices) with future expectations (futures). Low inventories act as a vanishing buffer, making prices more sensitive to global news.',
        ],
        sources: [{ label: 'EIA Financial Markets', url: 'https://www.eia.gov/finance/markets/crudeoil/reports_and_analysis.php' }],
      },
      {
        title: 'Malaysia still feels the same market',
        paragraphs: [
          'Despite being a producer, Malaysia is not isolated. We trade crude, refined products, and shipping capacity within the global system. Conflict or disruptions elsewhere still impact domestic costs and subsidy pressure.',
        ],
        bullets: [
          'Global benchmark moves dictate replacement costs.',
          'Shipping and insurance costs are globally linked.',
          'Refiners operate within international pricing structures.',
        ],
      },
    ],
  },
  malaysia: {
    title: 'Malaysia & Oil — The Full Picture',
    intro: "Malaysia produces and exports premium crude but remains a participant in the global market. Here is how our oil industry operates.",
    footnote: 'Local pricing is a balance of global supply, domestic policy, and the cost of replacement barrels.',
    noteTitle: 'Core Point',
    sections: [
      {
        title: "Malaysia's production story — peak and decline",
        paragraphs: [
          'Production peaked in 2004 at roughly 862,000 barrels per day. Output has since declined to around 600,000 barrels per day as mature shallow-water fields off the Peninsular east coast reach their later stages.',
          'Investment has shifted to technically complex deepwater fields in Sabah and Sarawak. These projects sustain production but involve higher costs and longer development cycles than traditional fields.',
        ],
        sources: [{ label: 'EIA Malaysia Profile', url: 'https://www.eia.gov/international/analysis/country/MYS' }],
      },
      {
        title: "Where Malaysia's oil comes from — key fields",
        paragraphs: [
          "All of Malaysia's significant production is offshore. The industry operates in three main regions: the South China Sea off Terengganu, and the deeper waters off Sabah and Sarawak.",
          'While the Peninsula fields are mature and declining, Sabah serves as the growth frontier with major deepwater projects like Gumusut-Kakap.',
        ],
        bullets: [
          'Offshore Terengganu: Mature, light sweet crude (Tapis).',
          'Offshore Sabah: Deepwater growth projects (Kikeh, Malikai).',
          'Offshore Sarawak: Major natural gas and oil production.',
        ],
        sources: [{ label: 'Petronas Portfolio', url: 'https://www.petronas.com/what-we-do/upstream' }],
      },
      {
        title: 'Tapis crude — Malaysia\'s premium benchmark',
        paragraphs: [
          'Tapis crude is ultra-light and ultra-sweet, making it one of the highest-quality crudes in Asia. Because it yields more petrol and jet fuel than heavier grades, it often trades at a premium over Brent.',
          'Economic Insight: Malaysia exports its premium Tapis crude for higher revenue while importing cheaper, heavier sour crude for domestic refineries. This means the petrol at our pumps is often refined from imported Middle Eastern oil.',
        ],
        bullets: [
          'High Quality: Very low sulphur (0.04%) and very light (45° API).',
          'Strategic Export: Sold as a premium benchmark for Asia-Pacific.',
          'Refinery Reality: Domestic refineries are often optimized for imported heavier grades.',
        ],
        sources: [{ label: 'EIA Crude Benchmarks', url: 'https://www.eia.gov/finance/markets/crudeoil/reports_and_analysis.php' }],
      },
      {
        title: 'Petronas — The National Oil Company',
        paragraphs: [
          "Established in 1974, Petronas owns all of Malaysia's petroleum resources. International companies operate here under Production Sharing Contracts (PSCs), sharing expertise and capital in exchange for a portion of the output.",
          'Petronas is a critical fiscal pillar, typically contributing 20% to 30% of total federal government revenue through dividends and taxes, depending on global oil prices.',
        ],
        bullets: [
          'Role: Resource owner and national fiscal anchor.',
          'Revenue: RM 40B+ annual dividend to the government (2023).',
          'Global Reach: Operates in over 30 countries and owns world-class LNG facilities.',
        ],
        sources: [{ label: 'Petronas Financial Reports', url: 'https://www.petronas.com/investor-relations/reports-results' }],
      },
      {
        title: "Malaysia's refineries — Domestic capacity",
        paragraphs: [
          'Malaysia operates four major refineries, including the massive RAPID complex in Pengerang (a JV with Saudi Aramco). Total capacity is roughly 530,000 barrels per day.',
          'Despite this capacity, Malaysia remains a net importer of refined products because domestic demand (~600k+ bbl/d) exceeds refinery output. Our refineries are also specialized to process imported Middle Eastern grades rather than local premium crude.',
        ],
        bullets: [
          'RAPID Pengerang: 300,000 bbl/d capacity (Petronas + Aramco).',
          'Net Importer: Domestic consumption exceeds total refining output.',
          'Price Link: Refinery costs and margins remain tied to global markets.',
        ],
        sources: [{ label: 'Petronas Downstream', url: 'https://www.petronas.com/what-we-do/downstream' }],
      },
      {
        title: 'Subsidies are targeted, not infinite',
        paragraphs: [
          'The government manages retail prices through targeted support systems like BUDI95. This balances public affordability with fiscal responsibility, ensuring support reaches those who need it most.',
          'Current policy maintains a fixed price for RON95 within specified usage limits, with separate support structures for diesel and East Malaysia.',
        ],
        bullets: [
          'BUDI95: Targeted RON95 subsidy system.',
          'Quota Management: Monthly limits to manage fiscal exposure.',
          'Regional Support: Differentiated frameworks for Sabah and Sarawak.',
        ],
        sources: [{ label: 'Ministry of Finance Updates', url: 'https://www.mof.gov.my/portal/en/news/press-citations/' }],
      },
    ],
  },
  myths: {
    title: 'Myth vs Fact',
    intro: 'Direct answers to common fuel misconceptions.',
    cards: [
      {
        myth: '"Malaysia produces oil, so petrol should always be cheap."',
        fact: 'We trade in a global system. We export premium crude and import cheaper oil to refine. Domestic prices are still exposed to global replacement costs and refinery margins.',
        whyItMatters: 'Ignoring the global trade reality leads to unrealistic expectations of pump price isolation.',
        sources: [{ label: 'DOSM Statistics', url: 'https://www.dosm.gov.my/portal-main/' }],
      },
      {
        myth: '"Pump price equals today\'s crude oil price."',
        fact: 'Retail prices reflect the previous week\'s average costs, not a real-time reaction to today\'s market news.',
        whyItMatters: 'Lagged pricing explains why a sudden global oil drop isn\'t reflected at the pump the same afternoon.',
        sources: [{ label: 'MOF Pricing Updates', url: 'https://www.mof.gov.my/portal/en/news/press-citations/' }],
      },
      {
        myth: '"Subsidies mean the government can absorb any cost indefinitely."',
        fact: 'Subsidies have a direct fiscal impact. Systems like BUDI95 use limits and targeting to ensure the government can sustain support without overextending the national budget.',
        whyItMatters: 'Unlimited subsidies create fiscal risks that can impact other public services over time.',
        sources: [{ label: 'MOF Pressroom', url: 'https://www.mof.gov.my/portal/en/news/press-citations/' }],
      },
      {
        myth: '"A producer country is insulated from global shocks."',
        fact: 'Global chokepoints and conflicts impact shipping, insurance, and the price of the "replacement barrels" we need to keep pumps running.',
        whyItMatters: 'Being a producer helps, but geography doesn\'t stop global commodity markets from dictating value.',
        sources: [{ label: 'EIA Hormuz Analysis', url: 'https://www.eia.gov/international/analysis/special-topics/World_Oil_Transit_Chokepoints' }],
      },
    ],
  },
  sources: {
    title: 'Sources and methodology',
    intro: 'WhatTheFuel uses verified data from official government and global energy organizations.',
    updateTitle: 'How updates work',
    updateBody: 'Live news is refreshed from approved feeds. Analysis and explainers are updated only when supported by new source data.',
    sourceTitle: 'Information sources',
    sourceBody: 'We combine Malaysia policy data, official statistics, and global market analysis into one readable site.',
    noteTitle: 'Commitment',
    noteBody: 'No unsourced claims, no filler content, and no tracking-free pricing.',
    sourceGroups: [
      { name: 'Ministry of Finance Malaysia', purpose: 'Pricing policy, subsidies, and quotas', url: 'https://www.mof.gov.my/portal/en/news/press-citations/' },
      { name: 'Department of Statistics Malaysia', purpose: 'Economic and petroleum trade data', url: 'https://www.dosm.gov.my/portal-main/' },
      { name: 'U.S. Energy Information Administration', purpose: 'Global market structure and mechanics', url: 'https://www.eia.gov/' },
      { name: 'Petronas', purpose: 'Operations and national resource ownership', url: 'https://www.petronas.com/' },
      { name: 'BP Statistical Review', purpose: 'Global production and energy data', url: 'https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy.html' },
    ],
  },
};
