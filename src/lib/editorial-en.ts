import type { EditorialCopy } from './editorial';

export const en: EditorialCopy = {
  home: {
    eyebrow: 'Fuel context with sources',
    title: 'WhatTheFuel keeps the panic out and the citations in.',
    subtitle: 'See verified fuel prices, a compact timeline, and plain-language explainers on why the same fuel line can mean different things.',
    disclaimer: 'Independent public education project. We organize verified prices, explainers, timelines, and source links; we do not publish official prices or original reporting.',
    latestTitle: 'Latest fuel snapshot',
    latestSubtitle: 'Current prices and subsidy lines tied to official source pages.',
    pricesLabel: 'Fuel prices',
    newsLabel: 'Live news',
    loadingPrices: 'Loading verified price data.',
    emptyNews: 'No live items yet for this tab.',
  },
  understanding: {
    title: 'Understanding the numbers',
    intro: 'A plain-language guide to why each fuel line is priced differently and what the labels actually mean.',
    cards: [
      { title: 'Why RON95 is fixed', body: 'RON95 subsidised retail pricing is set by the government so the public pays a stable amount instead of a fully market-linked figure.' },
      { title: 'Why RON97 changes weekly', body: 'RON97 is market-linked, so it follows the weekly pricing cycle rather than the fixed subsidised rate used for RON95.' },
      { title: 'Why diesel differs by region', body: 'Peninsular Malaysia and East Malaysia use separate managed pricing because the support structure and retail treatment are not identical.' },
      { title: 'What "unsubsidised" means', body: 'The unsubsidised line is the reference market price before support is applied. It helps show the gap subsidy policy closes.' },
      { title: 'Why the labels matter', body: 'The same pump can show a public price, a reference price, and a regional price at once. Reading them correctly prevents bad comparisons.' },
    ],
  },
  global: {
    title: 'Oil 101: How Crude Oil Works',
    intro: 'From microscopic sea creatures 300 million years ago to the fuel in your tank — here is everything you need to understand crude oil: how it forms, how it is graded, how it is refined, and who produces the most.',
    footnote: 'This page explains the mechanism. It does not claim every global move hits Malaysia at the same speed or in the same way.',
    noteTitle: 'What the page does not claim',
    sections: [
      // ── Origins ────────────────────────────────────────────────────────────
      {
        title: 'How crude oil forms — a 300-million-year story',
        paragraphs: [
          'Crude oil is not a liquid that has always existed underground. It is the compressed and cooked remains of microscopic marine organisms — mostly phytoplankton and zooplankton — that lived in ancient oceans during the Mesozoic era, roughly 66 to 252 million years ago.',
          'When these organisms died, they sank to oxygen-poor ocean floors where they could not decompose fully. Over millions of years, sediment layers — mud, clay, and sand — buried them deeper and deeper.',
          'Heat and pressure from burial depth (typically 2–4 km, 60–160 °C) triggered a process called catagenesis: the organic matter first became a waxy solid called kerogen, then "cracked" into liquid crude oil and natural gas. This temperature range is called the "oil window".',
          'Because oil is less dense than the surrounding rock water, it migrated upward through porous rock layers until it was trapped beneath an impermeable cap rock — forming the petroleum reservoirs that are drilled today.',
          'This is why oil is called a fossil fuel: it is literally made from ancient life. It also explains why it is non-renewable — it takes tens of millions of years to form.',
        ],
        sources: [
          { label: 'Penn State EARTH 104: Origin of Oil', url: 'https://www.e-education.psu.edu/earth104/node/1382' },
          { label: 'EnergyEducation.ca: Petroleum Formation', url: 'https://energyeducation.ca/encyclopedia/Petroleum_formation' },
          { label: 'Stanford Earth: Fossil Fuels', url: 'https://earth.stanford.edu/news/fossil-fuels' },
        ],
      },
      // ── Quality ────────────────────────────────────────────────────────────
      {
        title: 'Crude oil quality — sweet vs sour, light vs heavy',
        paragraphs: [
          'Not all crude oil is equal. It is classified on two axes that directly affect how valuable it is and how expensive it is to refine.',
          'API Gravity measures density. Light crude (>31° API) is less dense, flows more easily, and yields more high-value products like gasoline and jet fuel per barrel. Heavy crude (<22° API) requires more intensive refining. "Sweet" means low sulphur content (below 0.5%) — easier and cheaper to refine to meet emissions standards. "Sour" crude has higher sulphur, which must be removed at extra cost.',
          "Malaysia\u2019s Tapis crude \u2014 produced off the coast of Terengganu \u2014 is among the lightest and sweetest in the world at 45\u00b0 API and just 0.04% sulphur. That is why it commands a price premium as the Asia-Pacific benchmark for light sweet crude.",
          "The global benchmarks are Brent (North Sea, 38\u00b0 API, 0.37% S), WTI (USA, 39.6\u00b0 API, 0.24% S), and Dubai (Middle East, 31\u00b0 API, 2.0% S \u2014 medium sour). The fact that Tapis is lighter and sweeter than all three explains why Malaysian crude historically trades at a premium above Brent.",
        ],
        bullets: [
          'Light (>31° API) + Sweet (<0.5% S) → highest value, cheapest to refine → Tapis, WTI, Brent',
          'Medium (~31° API) + Sour (>0.5% S) → moderate refining cost → Dubai crude',
          'Heavy (<22° API) + Sour → lowest value, most intensive refining → Venezuelan heavy',
          'Higher API + lower sulphur = more pump fuel per barrel = higher market price',
        ],
        sources: [
          { label: 'EIA: What Drives Crude Oil Prices — Grades', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php' },
          { label: 'Stanford Energy: Crude Oil Classification', url: 'https://earth.stanford.edu/news/fossil-fuels' },
          { label: 'OilPriceAPI: Benchmark Comparison', url: 'https://oilpriceapi.com/blog/crude-oil-benchmarks' },
        ],
      },
      // ── Refining ───────────────────────────────────────────────────────────
      {
        title: 'How crude oil is refined — the distillation tower',
        paragraphs: [
          'Crude oil straight from the ground is useless — it must be separated into its components. The primary process is atmospheric fractional distillation: crude is heated to about 400 °C and fed into a tall column. Because different hydrocarbon molecules have different boiling points, they separate at different heights of the column.',
          'The column runs hottest at the bottom and coolest at the top. Lighter molecules (shorter carbon chains, lower boiling points) rise higher before condensing. Heavier molecules condense lower down.',
          'Each "fraction" that collects at a different height becomes a different product. This is why one barrel of crude oil produces fuel gas, petrol, jet fuel, diesel, and road asphalt all at once — they were always in there, just mixed together.',
          'Light sweet crude like Tapis yields more high-value upper fractions (petrol, jet fuel) per barrel than heavy sour crude — this is why API gravity and sulphur content translate directly into price.',
        ],
        bullets: [
          'LPG / Refinery Gas — below 25 °C — C1–C4 — cooking gas, petrochemical feedstock',
          'Petrol (Gasoline) — 40–150 °C — C5–C10 — RON95, RON97 at the pump',
          'Naphtha — 70–200 °C — C5–C12 — plastics, chemicals, solvents',
          'Kerosene / Jet Fuel — 150–300 °C — C10–C16 — aviation, heating',
          'Diesel / Gas Oil — 220–350 °C — C14–C20 — trucks, trains, generators',
          'Fuel Oil — 250–500 °C — C20–C70 — ships, industrial furnaces',
          'Bitumen / Asphalt — above 500 °C — C70+ — road surfaces',
        ],
        sources: [
          { label: 'Busch Vacuum: Fractional Distillation Explained', url: 'https://www.buschvacuum.com/en/knowledge/fractional-distillation' },
          { label: 'Crown Oil: Oil Refining Process', url: 'https://www.crownoil.co.uk/news/oil-refining-process/' },
          { label: 'GCSE Science: Crude Oil Fractions', url: 'https://www.gcsescience.com/o1.htm' },
        ],
      },
      // ── World Producers ────────────────────────────────────────────────────
      {
        title: 'Who produces the most oil — global rankings',
        paragraphs: [
          'According to the U.S. Energy Information Administration (EIA), total global petroleum and liquids production in 2023 was approximately 101 million barrels per day. The United States is by far the largest producer, followed by Saudi Arabia and Russia.',
          'The top 10 producers account for roughly 70% of all global output. OPEC (Organisation of the Petroleum Exporting Countries) members collectively manage their production to influence global prices — but non-OPEC producers like the USA, Canada, and Brazil increasingly shape the market.',
          'Malaysia ranks approximately 29th globally at around 0.6 million barrels per day — a significant producer in Southeast Asia, but a small fraction of world output. This is why Malaysian fuel prices still largely track global crude benchmarks rather than moving independently.',
          "The 2010s shale revolution transformed the USA from a major importer to the world's largest producer — demonstrating how technology and investment can rapidly change the production landscape.",
        ],
        bullets: [
          '🇺🇸 United States — 21.9 mb/d — world\'s largest, driven by shale/tight oil',
          '🇸🇦 Saudi Arabia — 11.1 mb/d — OPEC\'s largest producer, anchor of Gulf production',
          '🇷🇺 Russia — 10.8 mb/d — OPEC+ member, largest non-OPEC producer after USA',
          '🇨🇦 Canada — 5.8 mb/d — mainly oil sands (Alberta), heavy crude',
          '🇨🇳 China — 5.3 mb/d — large but still a major importer net',
          '🇮🇶 Iraq — 4.4 mb/d — OPEC, huge conventional reserves',
          '🇧🇷 Brazil — 4.3 mb/d — deepwater pre-salt fields (Petrobras)',
          '🇦🇪 UAE — 4.2 mb/d — OPEC, Abu Dhabi dominant',
          '🇮🇷 Iran — 4.0 mb/d — OPEC, under sanctions limiting export',
          '🇰🇼 Kuwait — 2.9 mb/d — OPEC, small country, huge reserves per capita',
          '🇲🇾 Malaysia — 0.6 mb/d — ranked ~29th, Southeast Asia\'s key producer',
        ],
        sources: [
          { label: 'EIA: World Petroleum Production 2023', url: 'https://www.eia.gov/international/data/world/petroleum-and-other-liquids/annual-petroleum-and-other-liquids-production' },
          { label: 'EIA: Country Energy Profiles', url: 'https://www.eia.gov/international/overview/world' },
        ],
      },
      // ── Existing market sections ───────────────────────────────────────────
      {
        title: 'Oil is priced globally, not street by street',
        paragraphs: [
          'Crude and refined fuel prices move because traders, refiners, shipping firms, and governments react to the same signal: how tight the global market is right now, and how risky the next few weeks look.',
          'EIA groups the main drivers into spot prices, OPEC and non-OPEC supply, inventories, financial markets, and demand in OECD and non-OECD economies.',
        ],
        sources: [
          { label: 'EIA overview', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
          { label: 'EIA demand outside OECD', url: 'https://www.eia.gov/finance/markets/crudeoil/demand-nonoecd.php' },
        ],
      },
      {
        title: 'Chokepoints turn tension into shipping cost',
        paragraphs: [
          'The Strait of Hormuz is the clearest example of why fuel news becomes a local issue. EIA says about 20 million barrels per day moved through the strait in 2024, roughly one-fifth of global petroleum liquids consumption.',
          'When a chokepoint looks threatened, the market does not wait for an actual blockade. Insurance, freight, refinery replacement cost, and speculative hedging all reprice before a driver sees the change at the pump.',
        ],
        sources: [{ label: 'EIA Hormuz analysis', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' }],
      },
      {
        title: 'Spot prices, futures, and inventories do not move together',
        paragraphs: [
          'EIA\'s market analysis explains that current prices and futures prices respond differently to a shock. When traders expect tighter supply later, futures move first; when physical supply is interrupted now, spot prices can jump immediately.',
          'Inventories are the buffer between those two worlds. Low stocks, weaker refining slack, or disrupted shipping all make the market more sensitive to headlines.',
        ],
        sources: [
          { label: 'EIA financial markets', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
          { label: 'EIA OECD demand', url: 'https://www.eia.gov/finance/markets/crudeoil/demand-oecd.php' },
        ],
      },
      {
        title: 'Malaysia still feels the same market',
        paragraphs: [
          'Malaysia is an oil and gas producer, but that does not make the domestic pump isolated from global pricing. The country still trades crude, refined products, shipping capacity, and replacement barrels in a global market.',
          'That is why a conflict or shipping disruption far away can still show up in domestic price calculations, subsidy pressure, and the timing of weekly retail updates.',
        ],
        bullets: [
          'Global benchmark moves feed into domestic replacement cost.',
          'Shipping and insurance costs can rise even when the crude headline pauses.',
          'Refiners and distributors still need product priced inside the same global system.',
        ],
      },
    ],
  },
  malaysia: {
    title: 'Malaysia & Oil — The Full Picture',
    intro: "Malaysia produces oil, exports premium crude, and still participates in the same global fuel market. Here is what Malaysia's oil story really looks like — fields, Petronas, Tapis, refineries, and why prices still fluctuate.",
    footnote: 'The point is not that Malaysia is helpless. The point is that local pricing still depends on global supply, domestic policy, and the cost of replacement barrels.',
    noteTitle: 'Core point',
    sections: [
      // ── Production story ───────────────────────────────────────────────────
      {
        title: 'Malaysia\'s oil production story — peak and decline',
        paragraphs: [
          'Malaysia reached peak oil production of approximately 862,000 barrels per day (bbl/d) in 2004, driven largely by shallow-water fields off Peninsular Malaysia\'s east coast — primarily around Terengganu.',
          'Since then, output has declined steadily to around 597,000 bbl/d in 2023 — a 31% fall from peak. The Peninsula\'s mature fields have been the primary driver of decline; production there dropped by roughly half over the past decade.',
          'The industry has shifted focus to deeper, more technically challenging fields offshore Sabah and Sarawak. These deepwater projects (like Gumusut-Kakap and Kikeh in Sabah) sustain production but at higher cost and slower pace than the old shallow-water developments.',
          'At current production rates and proven reserve levels, Malaysia has an estimated oil reserve life of around 13 years — making reserve replacement and new deepwater exploration a strategic priority for Petronas.',
        ],
        sources: [
          { label: 'EIA: Malaysia Country Analysis', url: 'https://www.eia.gov/international/analysis/country/MYS' },
          { label: 'IndexMundi: Malaysia Oil Production', url: 'https://www.indexmundi.com/energy/?country=my&product=oil&graph=production' },
          { label: 'DOSM: Petroleum Statistics Q1 2025', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-first-quarter-2025' },
        ],
      },
      // ── Oil fields ─────────────────────────────────────────────────────────
      {
        title: 'Where Malaysia\'s oil comes from — the key fields',
        paragraphs: [
          'All of Malaysia\'s commercially significant oil production is offshore. There is no meaningful onshore production. The fields are concentrated in three main areas of the South China Sea and Sulu Sea.',
          'Off Terengganu (Peninsular East Coast): the oldest and most mature producing region. The Tapis field — Malaysia\'s most famous crude — is located here, along with Dulang, Bekok, and Angsi. These fields are declining but still producing.',
          'Off Sabah: the growth frontier. Deepwater fields like Kikeh (Murphy Oil, Malaysia\'s first deepwater project) and Gumusut-Kakap (Shell/Petronas) produce significant volumes. More complex and expensive to develop but hold substantial reserves.',
          'Off Sarawak: dominated by natural gas (Bintulu LNG complex is one of the world\'s largest), but also has oil production from fields like Dulang and Jintan. The Cakerawala gas field straddles the Malaysia-Thailand border.',
        ],
        bullets: [
          'Offshore Terengganu — Tapis, Dulang, Bekok, Angsi — mature, light sweet crude, declining',
          'Offshore Sabah — Kikeh, Gumusut-Kakap, Malikai — deepwater, growth area',
          'Offshore Sarawak — Jintan, Cakerawala (gas), Karig — mixed oil and gas',
          'No significant onshore oil fields — Malaysia is entirely offshore',
        ],
        sources: [
          { label: 'EIA: Malaysia Country Analysis', url: 'https://www.eia.gov/international/analysis/country/MYS' },
          { label: 'Petronas: Operations Overview', url: 'https://www.petronas.com/what-we-do' },
        ],
      },
      // ── Tapis ──────────────────────────────────────────────────────────────
      {
        title: 'Tapis crude — Malaysia\'s premium benchmark grade',
        paragraphs: [
          'Tapis crude, produced from the Tapis field off Terengganu, is one of the most valuable crude grades in the Asia-Pacific. With an API gravity of around 45° and sulphur content of just 0.04%, it is classified as very light and ultra-sweet — lighter and sweeter than Brent, WTI, or Dubai.',
          'Because of its quality, Tapis has historically served as the light sweet crude benchmark for Asia-Pacific pricing — similar to the role Brent plays globally. Refineries in Japan, South Korea, Singapore, and Australia have long competed to buy Tapis because it yields more gasoline, jet fuel, and diesel per barrel than heavier grades.',
          'The irony for Malaysian consumers: Malaysia exports Tapis at premium prices and simultaneously imports heavier, cheaper sour crude (often from the Middle East) for its domestic refineries. This is a deliberate economic decision — selling your premium product at the best price while refining the cheaper grade for the domestic market. It makes financial sense but means the fuel at Malaysian pumps was not refined from Malaysian premium crude.',
        ],
        bullets: [
          'API Gravity: 45° — very light (WTI: 39.6°, Brent: 38.0°)',
          'Sulphur: 0.04% — ultra-sweet (WTI: 0.24%, Brent: 0.37%)',
          'Role: Asia-Pacific light sweet benchmark price reference',
          'Destination: Japan, South Korea, Singapore, Australia refineries',
          'Irony: Exported at premium; domestic refineries use cheaper imported crude',
        ],
        sources: [
          { label: 'OilPriceAPI: Tapis Crude Profile', url: 'https://oilpriceapi.com/blog/crude-oil-benchmarks' },
          { label: 'EIA: Asia-Pacific Crude Oil Benchmarks', url: 'https://www.eia.gov/finance/markets/crudeoil/' },
        ],
      },
      // ── Petronas ───────────────────────────────────────────────────────────
      {
        title: 'Petronas — Malaysia\'s national oil company',
        paragraphs: [
          'Petronas (Petroliam Nasional Berhad) was established in 1974 under the Petroleum Development Act, which granted the national corporation ownership of all of Malaysia\'s petroleum resources. This means every barrel of oil or cubic foot of gas extracted in Malaysia is legally Petronas\'s resource — international companies like Shell, ExxonMobil, and Murphy Oil operate as Production Sharing Contract (PSC) partners, investing capital and expertise in exchange for a share of production, while Petronas retains resource ownership.',
          'Petronas is Malaysia\'s single largest contributor to federal government revenue. In 2023, it paid RM 40 billion in dividends to the government — approximately 19–20% of total federal revenue. In 2022, that figure was RM 50 billion (28–31% of federal revenue), reflecting higher global oil prices that year.',
          'Beyond upstream production, Petronas operates Malaysia\'s largest LNG export facility at Bintulu, Sarawak (one of the world\'s biggest), runs domestic retail through Petronas Dagangan, owns MISC (a global shipping company), and operates internationally in over 30 countries.',
        ],
        bullets: [
          'Founded: 1974 (Petroleum Development Act — Tun Abdul Razak)',
          'Legal status: Owns 100% of all Malaysian petroleum resources',
          'Dividends: RM 40B (2023) = ~20% of federal revenue; RM 50B (2022) = ~31%',
          'Bintulu LNG: One of the world\'s largest LNG export complexes',
          'International: Operations in 30+ countries',
          'PSC model: IOCs invest and operate; Petronas retains resource ownership',
        ],
        sources: [
          { label: 'PETRONAS Integrated Report 2023', url: 'https://www.petronas.com/investor-relations/annual-report' },
          { label: 'MOF Malaysia: Federal Revenue 2023', url: 'https://www.mof.gov.my/portal/en/' },
          { label: 'Enerdata: PETRONAS 2023 Production', url: 'https://www.enerdata.net' },
        ],
      },
      // ── Refineries ─────────────────────────────────────────────────────────
      {
        title: 'Malaysia\'s refineries — do we refine our own oil?',
        paragraphs: [
          'Malaysia has four significant refineries with a combined distillation capacity of roughly 530,000 bbl/d. The largest and newest is the RAPID complex in Pengerang, Johor — a massive integrated refinery and petrochemicals complex developed as a joint venture between Petronas and Saudi Aramco, designed to handle 300,000 bbl/d.',
          'Malaysia\'s domestic fuel consumption is around 600,000–650,000 bbl/d of petroleum products, which means the country is a net importer of refined products — refineries do not cover full domestic demand.',
          'Crucially, Malaysian refineries primarily process medium and heavy sour crude from the Middle East, not Tapis. This is because refinery equipment is designed and optimised for a specific crude type — the RAPID refinery, for instance, was designed to handle Arabian grades in partnership with Aramco. Importing heavier crude at a discount while exporting premium Tapis makes economic sense for Petronas\'s balance sheet, but it means domestic fuel supply is still globally linked.',
        ],
        bullets: [
          'RAPID Pengerang (Johor): 300,000 bbl/d — Petronas + Aramco JV — processes Middle East grades',
          'Melaka Refinery: ~100,000 bbl/d — Petronas — oldest major refinery',
          'Port Dickson (Negeri Sembilan): ~88,000 bbl/d — Petronas PRPC',
          'Kerteh (Terengganu): ~40,000 bbl/d — gas condensate, specialty products',
          'Total capacity: ~530,000 bbl/d vs demand of ~630,000 bbl/d → net importer',
          'Key insight: RON95 at the pump is likely refined from imported Middle East crude, not Malaysian Tapis',
        ],
        sources: [
          { label: 'EIA: Malaysia Country Analysis', url: 'https://www.eia.gov/international/analysis/country/MYS' },
          { label: 'PETRONAS: RAPID Pengerang', url: 'https://www.petronas.com/what-we-do/downstream' },
        ],
      },
      // ── Existing sections ──────────────────────────────────────────────────
      {
        title: 'Malaysia is not just an oil country',
        paragraphs: [
          'DOSM\'s GDP releases show services and manufacturing are the biggest pillars of the economy. That is the first reason the "Malaysia produces oil, so fuel should always be cheap" argument is too simple.',
          'The economy is broad, and fuel policy has to balance consumers, fiscal exposure, and industrial demand at the same time.',
        ],
        sources: [{ label: 'DOSM GDP release', url: 'https://v2.dosm.gov.my/portal-main/release-content/gross-domestic-product-gdp-by-state-2024' }],
      },
      {
        title: 'Malaysia exports crude, imports crude, and imports refined products',
        paragraphs: [
          'DOSM\'s petroleum statistics show Malaysia exports crude oil and condensate, but it also imports crude petroleum, condensates, and refined petroleum products. That is normal for a refinery-linked trading economy.',
          'The important point is not whether Malaysia produces oil in the abstract. The important point is whether the exact grade, product, and timing needed by the domestic market are available at a tolerable cost.',
        ],
        sources: [
          { label: 'DOSM petroleum Q1 2025', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-first-quarter-2025' },
          { label: 'DOSM petroleum Q4 2025', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-q42025' },
        ],
      },
      {
        title: 'Subsidies are targeted, not infinite',
        paragraphs: [
          'MOF\'s April 2026 updates keep subsidised RON95 at RM1.99 per litre under BUDI95, maintain the temporary 200-litre monthly limit, and keep special support rules for approved use cases such as e-hailing.',
          'That is the policy reality the site should explain clearly: the public price is subsidised, but the government still tracks the cost of each litre through a targeted support system.',
        ],
        bullets: [
          'General BUDI95 limit: 200 litres per month.',
          'E-hailing tier: up to 800 litres per month for qualifying drivers.',
          'Diesel support remains differentiated by region and eligibility.',
        ],
        sources: [
          { label: 'MOF April 8 citation', url: 'https://www.mof.gov.my/portal/en/news/press-citations/govt-maintains-subsidised-prices-amid-global-oil-market-volatility' },
          { label: 'MOF BUDI95 limit', url: 'https://www.mof.gov.my/portal/en/news/press-citations/claims-of-additional-budi95-subsidy-application-untrue-200-litre-monthly-limit-remains-mof' },
          { label: 'MOF e-hailing tier', url: 'https://mof.gov.my/portal/en/news/press-citations/budi95-tiered-eligibility-for-e-hailing-drivers-to-be-activated-mid-month-mof' },
        ],
      },
    ],
  },
  myths: {
    title: 'Myth vs fact',
    intro: 'Short cards with a source trail. Calm, direct, and easy to share.',
    cards: [
      {
        myth: '"Malaysia produces oil, so petrol should always be cheap."',
        fact: 'Malaysia still participates in global crude and refined product trade, and domestic pricing is exposed to replacement cost, refining margins, logistics, and subsidy policy.',
        whyItMatters: 'This is the most common shortcut behind angry fuel takes. It sounds intuitive, but it ignores how physical product and market pricing actually work.',
        sources: [
          { label: 'DOSM petroleum statistics', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-first-quarter-2025' },
          { label: 'EIA financial markets', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
        ],
      },
      {
        myth: '"Pump price equals today\'s crude oil price."',
        fact: 'MOF says Malaysia\'s retail pump prices are based on the previous week\'s average costs, so today\'s market move is not reflected instantly.',
        whyItMatters: 'This is why people often see a global oil drop on the news and assume the government is hiding cheaper fuel.',
        sources: [{ label: 'MOF pump price lag explanation', url: 'https://www.mof.gov.my/portal/en/news/press-citations/mof-pump-fuel-prices-reflect-last-weeks-costs-despite-global-drop' }],
      },
      {
        myth: '"Subsidies mean the government can absorb anything forever."',
        fact: 'The current system is targeted. MOF has temporarily tightened BUDI95 limits and keeps special quotas for specific categories instead of offering unlimited blanket support.',
        whyItMatters: 'If subsidy discussions ignore fiscal limits, the debate becomes fantasy instead of policy.',
        sources: [
          { label: 'MOF April 8 citation', url: 'https://www.mof.gov.my/portal/en/news/press-citations/govt-maintains-subsidised-prices-amid-global-oil-market-volatility' },
          { label: 'MOF 200-litre limit update', url: 'https://www.mof.gov.my/portal/en/news/press-citations/claims-of-additional-budi95-subsidy-application-untrue-200-litre-monthly-limit-remains-mof' },
        ],
      },
      {
        myth: '"A producer country is insulated from global shocks."',
        fact: 'EIA\'s Hormuz analysis shows that even a chokepoint far from Malaysia can move global prices, insurance, and freight costs almost immediately.',
        whyItMatters: 'Malaysia is in the same commodity system as everyone else. Geography changes the degree of impact, not the fact of impact.',
        sources: [{ label: 'EIA Hormuz analysis', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' }],
      },
      {
        myth: '"We\'ll run out of oil by [year X] — civilisation will collapse."',
        fact: 'Global proven oil reserves are higher today than they were in 1980, despite 45 years of heavy consumption. Geologist M. King Hubbert\'s 1956 "peak oil" model predicted US production would peak by 1970 — it did, but the US fracking revolution reversed it by 2018. Depletion date forecasts have been pushed back by decades as exploration technology, higher prices reclassifying reserves, and demand shifts continuously change the picture.',
        whyItMatters: 'The real issue is not a sudden cliff — oil production will plateau and become progressively more expensive to extract. Alternatives will fill the gap gradually through price signals. The risk to focus on is climate and energy transition, not a sudden empty-pump scenario.',
        sources: [
          { label: 'Britannica: Peak Oil', url: 'https://www.britannica.com/science/peak-oil' },
          { label: 'EIA: US Oil Production History', url: 'https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?n=PET&s=MCRFPUS2&f=A' },
          { label: 'BP Statistical Review of World Energy', url: 'https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy.html' },
        ],
      },
      {
        myth: '"Big Western oil companies own and control all the world\'s oil."',
        fact: 'Approximately 70–75% of proven global oil reserves are controlled by state-owned National Oil Companies (NOCs) — Saudi Aramco, ADNOC (UAE), NIOC (Iran), Petronas (Malaysia), PDVSA (Venezuela), and others. Western International Oil Companies (IOCs) like Shell, ExxonMobil, and BP collectively hold less than 15% of global reserves. Their role has shifted to technology provider and minority joint-venture partner.',
        whyItMatters: 'In Malaysia, Petronas owns 100% of petroleum resources by law. When RON95 prices rise, it is not because Shell decided to — it is because the government\'s subsidy policy changed against a global crude price backdrop. Knowing who actually owns the oil clarifies who actually controls fuel pricing decisions.',
        sources: [
          { label: 'BP Statistical Review: Reserve Ownership', url: 'https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy.html' },
          { label: 'Council on Foreign Relations: NOCs vs IOCs', url: 'https://www.cfr.org/backgrounder/national-oil-companies' },
          { label: 'Petroleum Development Act 1974 (Petronas)', url: 'https://www.petronas.com/about/company-profile' },
        ],
      },
    ],
  },
  sources: {
    title: 'Sources and methodology',
    intro: 'WhatTheFuel uses a small set of approved sources and publishes only what it can trace.',
    updateTitle: 'How updates work',
    updateBody: 'Live news is refreshed from approved feeds. Timeline entries and explainers are curated and only update when there is a source to stand on.',
    sourceTitle: 'Where information comes from',
    sourceBody: 'Malaysia policy pages, official statistics, global energy data, and selected news outlets are combined into one readable site.',
    noteTitle: 'What we do not publish',
    noteBody: 'No unsourced price cards, no filler entries, and no claim that looks neat but cannot be traced.',
    sourceGroups: [
      { name: 'Ministry of Finance Malaysia', purpose: 'Fuel pricing, subsidy policy, quota rules, and official statements', url: 'https://www.mof.gov.my/portal/en/' },
      { name: 'Department of Statistics Malaysia', purpose: 'Economic and petroleum trade data used in explainers', url: 'https://www.dosm.gov.my/portal-main/' },
      { name: 'Free Malaysia Today', purpose: 'Malaysia national, business, and world coverage used for live fuel-related reporting', url: 'https://www.freemalaysiatoday.com/' },
      { name: 'Malay Mail', purpose: 'Malaysia and world reporting used for live fuel-related coverage', url: 'https://www.malaymail.com/' },
      { name: 'Berita RTM', purpose: 'Malay-language national coverage used for live fuel-related reporting', url: 'https://berita.rtm.gov.my/' },
      { name: 'Sin Chew Daily', purpose: 'Chinese-language Malaysia and world reporting used for live fuel-related coverage', url: 'https://www.sinchew.com.my/' },
      { name: 'Sinar Premium', purpose: 'Malay-language coverage used for live fuel-related reporting', url: 'https://premium.sinarharian.com.my/' },
      { name: 'U.S. Energy Information Administration', purpose: 'Global oil-market structure, chokepoints, prices, and market mechanics', url: 'https://www.eia.gov/' },
      { name: 'Penn State EARTH 104', purpose: 'Geological formation of petroleum — origin and formation process', url: 'https://www.e-education.psu.edu/earth104/' },
      { name: 'BP Statistical Review of World Energy', purpose: 'Global reserve ownership, production rankings, and energy transition data', url: 'https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy.html' },
      { name: 'BBC News, Reuters, and other reviewed outlets', purpose: 'Live fuel, oil, shipping, and energy reporting when a newsroom source is needed' },
    ],
  },
};
