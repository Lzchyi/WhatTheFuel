import type { Language } from './i18n';

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

export type EditorialCopy = {
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    disclaimer: string;
    latestTitle: string;
    latestSubtitle: string;
    pricesLabel: string;
    newsLabel: string;
    loadingPrices: string;
    emptyNews: string;
  };
  global: {
    title: string;
    intro: string;
    footnote: string;
    noteTitle: string;
    sections: ArticleSection[];
  };
  malaysia: {
    title: string;
    intro: string;
    footnote: string;
    noteTitle: string;
    sections: ArticleSection[];
  };
  myths: {
    title: string;
    intro: string;
    cards: MythCard[];
  };
  sources: {
    title: string;
    intro: string;
    updateTitle: string;
    updateBody: string;
    sourceTitle: string;
    sourceBody: string;
    noteTitle: string;
    noteBody: string;
    sourceGroups: { name: string; purpose: string; url?: string }[];
  };
};

const en: EditorialCopy = {
  home: {
    eyebrow: 'Fuel context with sources',
    title: 'WhatTheFuel keeps the panic out and the citations in.',
    subtitle: 'Read the latest verified fuel prices, current fuel-related news, a compact timeline, and plain-language explainers on why global oil shocks still reach Malaysia.',
    disclaimer: 'Educational site only. If a figure is still under review, it stays out of the card until the source is ready.',
    latestTitle: 'Latest fuel snapshot',
    latestSubtitle: 'Current prices and subsidy lines tied to official source pages.',
    pricesLabel: 'Fuel prices',
    newsLabel: 'Live news',
    loadingPrices: 'Loading verified price data.',
    emptyNews: 'No live items yet for this tab.',
  },
  global: {
    title: 'Why petrol gets expensive',
    intro: 'Global oil shocks move through shipping, inventories, futures, and refining margins before they show up in a domestic pump price.',
    footnote: 'This page explains the mechanism. It does not claim every global move hits Malaysia at the same speed or in the same way.',
    noteTitle: 'What the page does not claim',
    sections: [
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
          'EIA’s market analysis explains that current prices and futures prices respond differently to a shock. When traders expect tighter supply later, futures move first; when physical supply is interrupted now, spot prices can jump immediately.',
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
    title: 'Why Malaysia still gets hit',
    intro: 'Malaysia produces oil, but it still trades in the same global fuel system, imports product grades it needs, and uses targeted subsidies to soften the shock.',
    footnote: 'The point is not that Malaysia is helpless. The point is that local pricing still depends on global supply, domestic policy, and the cost of replacement barrels.',
    noteTitle: 'Core point',
    sections: [
      {
        title: 'Malaysia is not just an oil country',
        paragraphs: [
          'DOSM’s GDP releases show services and manufacturing are the biggest pillars of the economy. That is the first reason the “Malaysia produces oil, so fuel should always be cheap” argument is too simple.',
          'The economy is broad, and fuel policy has to balance consumers, fiscal exposure, and industrial demand at the same time.',
        ],
        sources: [{ label: 'DOSM GDP release', url: 'https://v2.dosm.gov.my/portal-main/release-content/gross-domestic-product-gdp-by-state-2024' }],
      },
      {
        title: 'Malaysia exports crude, imports crude, and imports refined products',
        paragraphs: [
          'DOSM’s petroleum statistics show Malaysia exports crude oil and condensate, but it also imports crude petroleum, condensates, and refined petroleum products. That is normal for a refinery-linked trading economy.',
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
          { label: 'MOF BUDI95 limit', url: 'https://www.mof.gov.my/portal/en/news/press-citations/claims-of-additional-budi95-subsidy-application-untrue-200-litre-monthly-limit-remains-mof' },
          { label: 'MOF e-hailing tier', url: 'https://mof.gov.my/portal/en/news/press-citations/budi95-tiered-eligibility-for-e-hailing-drivers-to-be-activated-mid-month-mof' },
        ],
      },
      {
        title: 'Why the site shows citations first',
        paragraphs: [
          'If a figure is not directly backed by an official release or a clearly attributable report, it should stay out of the hero cards and explainers.',
          'That keeps the project useful instead of loud. A blank slot is better than a confident number that cannot be defended.',
        ],
      },
    ],
  },
  myths: {
    title: 'Myth vs fact',
    intro: 'Short cards with a source trail. Calm, direct, and easy to share.',
    cards: [
      {
        myth: '“Malaysia produces oil, so petrol should always be cheap.”',
        fact: 'Malaysia still participates in global crude and refined product trade, and domestic pricing is exposed to replacement cost, refining margins, logistics, and subsidy policy.',
        whyItMatters: 'This is the most common shortcut behind angry fuel takes. It sounds intuitive, but it ignores how physical product and market pricing actually work.',
        sources: [
          { label: 'DOSM petroleum statistics', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-first-quarter-2025' },
          { label: 'EIA financial markets', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
        ],
      },
      {
        myth: '“Pump price equals today’s crude oil price.”',
        fact: 'MOF says Malaysia’s retail pump prices are based on the previous week’s average costs, so today’s market move is not reflected instantly.',
        whyItMatters: 'This is why people often see a global oil drop on the news and assume the government is hiding cheaper fuel.',
        sources: [{ label: 'MOF pump price lag explanation', url: 'https://www.mof.gov.my/portal/en/news/press-citations/mof-pump-fuel-prices-reflect-last-weeks-costs-despite-global-drop' }],
      },
      {
        myth: '“Subsidies mean the government can absorb anything forever.”',
        fact: 'The current system is targeted. MOF has temporarily tightened BUDI95 limits and keeps special quotas for specific categories instead of offering unlimited blanket support.',
        whyItMatters: 'If subsidy discussions ignore fiscal limits, the debate becomes fantasy instead of policy.',
        sources: [
          { label: 'MOF April 8 citation', url: 'https://www.mof.gov.my/portal/en/news/press-citations/govt-maintains-subsidised-prices-amid-global-oil-market-volatility' },
          { label: 'MOF 200-litre limit update', url: 'https://www.mof.gov.my/portal/en/news/press-citations/claims-of-additional-budi95-subsidy-application-untrue-200-litre-monthly-limit-remains-mof' },
        ],
      },
      {
        myth: '“A producer country is insulated from global shocks.”',
        fact: 'EIA’s Hormuz analysis shows that even a chokepoint far from Malaysia can move global prices, insurance, and freight costs almost immediately.',
        whyItMatters: 'Malaysia is in the same commodity system as everyone else. Geography changes the degree of impact, not the fact of impact.',
        sources: [{ label: 'EIA Hormuz analysis', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' }],
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
      { name: 'BBC News, Reuters, and other reviewed outlets', purpose: 'Live fuel, oil, shipping, and energy reporting when a newsroom source is needed' },
    ],
  },
};

const ms: EditorialCopy = {
  home: {
    eyebrow: 'Konteks bahan api bersumber',
    title: 'WhatTheFuel buang panik, kekalkan rujukan.',
    subtitle: 'Baca harga bahan api yang disahkan, berita bahan api terkini, garis masa ringkas, dan penerangan mudah tentang kenapa kejutan minyak global masih sampai ke Malaysia.',
    disclaimer: 'Laman pendidikan sahaja. Jika sesuatu angka masih disemak, ia tidak akan dipaparkan sehingga sumbernya siap.',
    latestTitle: 'Ringkasan bahan api terkini',
    latestSubtitle: 'Harga semasa dan garis subsidi berpaut pada halaman sumber rasmi.',
    pricesLabel: 'Harga bahan api',
    newsLabel: 'Berita langsung',
    loadingPrices: 'Memuatkan data harga yang disahkan.',
    emptyNews: 'Tiada item langsung lagi untuk tab ini.',
  },
  global: {
    title: 'Kenapa petrol jadi mahal',
    intro: 'Kejutan minyak global bergerak melalui perkapalan, inventori, niaga hadapan, dan margin penapisan sebelum sampai ke harga pam tempatan.',
    footnote: 'Halaman ini menerangkan mekanisme. Ia tidak mendakwa setiap pergerakan global sampai ke Malaysia dengan kadar atau kesan yang sama.',
    noteTitle: 'Apa yang halaman ini tidak dakwa',
    sections: [
      {
        title: 'Minyak ditetapkan secara global, bukan ikut stesen semata-mata',
        paragraphs: [
          'Harga minyak mentah dan bahan api ditentukan oleh reaksi pedagang, penapis, syarikat perkapalan, dan kerajaan terhadap satu isyarat yang sama: sejauh mana pasaran dunia ketat sekarang dan betapa berisikonya minggu-minggu akan datang.',
          'EIA menghimpunkan pemacu utama kepada harga spot, bekalan OPEC dan bukan OPEC, inventori, pasaran kewangan, dan permintaan dalam ekonomi OECD serta bukan OECD.',
        ],
        sources: [
          { label: 'Gambaran EIA', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
          { label: 'Permintaan luar OECD', url: 'https://www.eia.gov/finance/markets/crudeoil/demand-nonoecd.php' },
        ],
      },
      {
        title: 'Titik sempit perkapalan tukar ketegangan jadi kos',
        paragraphs: [
          'Selat Hormuz ialah contoh paling jelas kenapa berita bahan api menjadi isu tempatan. EIA mengatakan kira-kira 20 juta tong sehari melalui selat itu pada 2024, hampir satu perlima penggunaan cecair petroleum dunia.',
          'Apabila laluan itu kelihatan terancam, pasaran tidak menunggu sekatan sebenar. Insurans, tambang, kos ganti bekalan, dan lindung nilai akan berubah lebih awal.',
        ],
        sources: [{ label: 'Analisis Hormuz EIA', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' }],
      },
      {
        title: 'Harga spot, niaga hadapan, dan inventori tidak bergerak serentak',
        paragraphs: [
          'Analisis pasaran EIA menerangkan bahawa harga semasa dan harga niaga hadapan bertindak balas berbeza terhadap kejutan. Bila pedagang jangka bekalan akan makin ketat, niaga hadapan bergerak dahulu; bila bekalan fizikal terganggu sekarang, harga spot boleh melonjak serta-merta.',
          'Inventori ialah penampan antara dua dunia itu. Stok rendah, ruang penapisan yang sempit, atau gangguan perkapalan menjadikan pasaran lebih sensitif kepada berita.',
        ],
        sources: [
          { label: 'Pasaran kewangan EIA', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
          { label: 'Permintaan OECD EIA', url: 'https://www.eia.gov/finance/markets/crudeoil/demand-oecd.php' },
        ],
      },
      {
        title: 'Malaysia tetap rasa pasaran yang sama',
        paragraphs: [
          'Malaysia ialah pengeluar minyak dan gas, tetapi itu tidak menjadikan pam tempatan terasing daripada harga global. Negara masih berdagang minyak mentah, produk ditapis, kapasiti perkapalan, dan bekalan ganti dalam pasaran dunia.',
          'Sebab itu konflik atau gangguan perkapalan di tempat jauh masih boleh muncul dalam pengiraan harga tempatan, tekanan subsidi, dan masa semakan harga mingguan.',
        ],
        bullets: [
          'Pergerakan penanda aras global masuk ke kos ganti tempatan.',
          'Kos perkapalan dan insurans boleh naik walaupun tajuk harga mentah berhenti seketika.',
          'Penapis dan pengedar masih perlu membeli produk dalam sistem global yang sama.',
        ],
      },
    ],
  },
  malaysia: {
    title: 'Kenapa Malaysia masih kena kesan',
    intro: 'Malaysia memang pengeluar minyak, tetapi ia tetap berdagang dalam sistem bahan api global, mengimport gred produk yang diperlukan, dan menggunakan subsidi bersasar untuk meredakan kejutan.',
    footnote: 'Intinya bukan Malaysia lemah. Intinya ialah harga tempatan masih bergantung pada bekalan global, dasar tempatan, dan kos bekalan ganti.',
    noteTitle: 'Inti utama',
    sections: [
      {
        title: 'Malaysia bukan sekadar negara minyak',
        paragraphs: [
          'Laporan KDNK DOSM menunjukkan perkhidmatan dan pembuatan ialah tunjang utama ekonomi. Sebab itu hujah “Malaysia ada minyak, jadi petrol mesti murah” terlalu mudah.',
          'Ekonomi kita luas, dan dasar bahan api perlu menimbang pengguna, risiko fiskal, dan keperluan industri serentak.',
        ],
        sources: [{ label: 'Laporan KDNK DOSM', url: 'https://v2.dosm.gov.my/portal-main/release-content/gross-domestic-product-gdp-by-state-2024' }],
      },
      {
        title: 'Malaysia eksport mentah, import mentah, dan import produk ditapis',
        paragraphs: [
          'Statistik petroleum DOSM menunjukkan Malaysia mengeksport minyak mentah dan kondensat, tetapi turut mengimport minyak mentah, kondensat, dan produk petroleum ditapis. Itu normal bagi ekonomi yang berkait rapat dengan penapisan dan perdagangan.',
          'Perkara penting bukan sama ada Malaysia menghasilkan minyak secara umum. Perkara penting ialah sama ada gred, produk, dan masa bekalan yang diperlukan pasaran tempatan boleh diperoleh pada kos yang munasabah.',
        ],
        sources: [
          { label: 'Petroleum DOSM suku 1 2025', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-first-quarter-2025' },
          { label: 'Petroleum DOSM suku 4 2025', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-q42025' },
        ],
      },
      {
        title: 'Subsidi bersasar, bukan tanpa had',
        paragraphs: [
          'Kemas kini MOF pada April 2026 mengekalkan RON95 bersubsidi pada RM1.99 seliter di bawah BUDI95, mengekalkan had sementara 200 liter sebulan, dan mengekalkan peraturan khas untuk kes yang diluluskan seperti e-hailing.',
          'Itulah realiti dasar yang perlu diterangkan dengan jelas: harga awam disubsidi, tetapi kerajaan masih menanggung kos setiap liter melalui sistem bantuan bersasar.',
        ],
        bullets: [
          'Had umum BUDI95: 200 liter sebulan.',
          'Kategori e-hailing: sehingga 800 liter sebulan untuk pemandu yang layak.',
          'Bantuan diesel kekal berbeza ikut kawasan dan kelayakan.',
        ],
        sources: [
          { label: 'Kenyataan MOF 8 April', url: 'https://www.mof.gov.my/portal/en/news/press-citations/govt-maintains-subsidised-prices-amid-global-oil-market-volatility' },
          { label: 'Had BUDI95 MOF', url: 'https://www.mof.gov.my/portal/en/news/press-citations/claims-of-additional-budi95-subsidy-application-untrue-200-litre-monthly-limit-remains-mof' },
          { label: 'Tier e-hailing MOF', url: 'https://mof.gov.my/portal/en/news/press-citations/budi95-tiered-eligibility-for-e-hailing-drivers-to-be-activated-mid-month-mof' },
        ],
      },
      {
        title: 'Kenapa laman ini dahulukan sitasi',
        paragraphs: [
          'Jika sesuatu angka tidak disokong terus oleh kenyataan rasmi atau laporan yang jelas, ia tidak patut masuk ke kad utama atau penerangan.',
          'Itu menjadikan projek ini berguna, bukan bising. Ruang kosong lebih baik daripada nombor yakin yang tidak boleh dibuktikan.',
        ],
      },
    ],
  },
  myths: {
    title: 'Mitos vs fakta',
    intro: 'Kad ringkas dengan jejak sumber. Tenang, terus, dan mudah dikongsi.',
    cards: [
      {
        myth: '“Malaysia ada minyak, jadi petrol mesti murah.”',
        fact: 'Malaysia masih berdagang minyak mentah dan produk ditapis dalam pasaran global, dan harga tempatan masih terdedah kepada kos ganti, margin penapisan, logistik, dan dasar subsidi.',
        whyItMatters: 'Ini jalan pintas paling biasa bila orang marah tentang harga bahan api. Nampak logik, tetapi ia abaikan cara sebenar produk fizikal dan pasaran berfungsi.',
        sources: [
          { label: 'Statistik petroleum DOSM', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-first-quarter-2025' },
          { label: 'Pasaran kewangan EIA', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
        ],
      },
      {
        myth: '“Harga pam sama dengan harga minyak mentah hari ini.”',
        fact: 'MOF menyatakan harga pam Malaysia dikira berdasarkan purata kos minggu sebelumnya, jadi pergerakan pasaran hari ini tidak terus masuk ke pam.',
        whyItMatters: 'Sebab itu orang nampak harga minyak dunia jatuh dalam berita, lalu terus sangka kerajaan sorok harga murah.',
        sources: [{ label: 'Penjelasan lag harga MOF', url: 'https://www.mof.gov.my/portal/en/news/press-citations/mof-pump-fuel-prices-reflect-last-weeks-costs-despite-global-drop' }],
      },
      {
        myth: '“Subsidi bermaksud kerajaan boleh tanggung apa sahaja selamanya.”',
        fact: 'Sistem semasa bersasar. MOF mengehadkan BUDI95 buat sementara waktu dan menyimpan kuota khas untuk kategori tertentu, bukannya subsidi tanpa had.',
        whyItMatters: 'Kalau perbincangan subsidi tak ambil kira had fiskal, ia bertukar jadi fantasi, bukan dasar.',
        sources: [
          { label: 'Kenyataan MOF 8 April', url: 'https://www.mof.gov.my/portal/en/news/press-citations/govt-maintains-subsidised-prices-amid-global-oil-market-volatility' },
          { label: 'Had 200 liter MOF', url: 'https://www.mof.gov.my/portal/en/news/press-citations/claims-of-additional-budi95-subsidy-application-untrue-200-litre-monthly-limit-remains-mof' },
        ],
      },
      {
        myth: '“Negara pengeluar tak akan terkesan oleh kejutan global.”',
        fact: 'Analisis Hormuz EIA menunjukkan titik sempit perkapalan yang jauh dari Malaysia pun boleh mengubah harga dunia, insurans, dan tambang dengan cepat.',
        whyItMatters: 'Malaysia berada dalam sistem komoditi yang sama seperti semua orang. Geografi ubah tahap kesan, bukan kewujudan kesannya.',
        sources: [{ label: 'Analisis Hormuz EIA', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' }],
      },
    ],
  },
  sources: {
    title: 'Sumber dan metodologi',
    intro: 'WhatTheFuel menggunakan set sumber yang kecil tetapi diluluskan, dan hanya memaparkan perkara yang boleh dijejak.',
    updateTitle: 'Cara kemas kini berjalan',
    updateBody: 'Berita langsung disegar semula daripada suapan yang diluluskan. Garis masa dan penerangan dikurasi dan hanya berubah apabila ada sumber yang jelas.',
    sourceTitle: 'Dari mana maklumat datang',
    sourceBody: 'Halaman dasar Malaysia, statistik rasmi, data tenaga global, dan beberapa outlet berita terpilih digabungkan dalam satu laman yang mudah dibaca.',
    noteTitle: 'Apa yang tidak kami siarkan',
    noteBody: 'Tiada kad harga tanpa sumber, tiada entri pengisi, dan tiada dakwaan yang nampak kemas tetapi tidak boleh dijejak.',
    sourceGroups: [
      { name: 'Kementerian Kewangan Malaysia', purpose: 'Harga bahan api, dasar subsidi, kuota, dan kenyataan rasmi', url: 'https://www.mof.gov.my/portal/en/' },
      { name: 'Jabatan Perangkaan Malaysia', purpose: 'Data ekonomi dan perdagangan petroleum untuk penerangan', url: 'https://www.dosm.gov.my/portal-main/' },
      { name: 'Free Malaysia Today', purpose: 'Liputan nasional, perniagaan, dan dunia untuk berita langsung berkaitan bahan api', url: 'https://www.freemalaysiatoday.com/' },
      { name: 'Malay Mail', purpose: 'Liputan Malaysia dan dunia untuk berita langsung berkaitan bahan api', url: 'https://www.malaymail.com/' },
      { name: 'Berita RTM', purpose: 'Liputan nasional berbahasa Melayu untuk berita langsung berkaitan bahan api', url: 'https://berita.rtm.gov.my/' },
      { name: 'Sin Chew Daily', purpose: 'Liputan Malaysia dan dunia berbahasa Cina untuk berita langsung berkaitan bahan api', url: 'https://www.sinchew.com.my/' },
      { name: 'Sinar Premium', purpose: 'Liputan berbahasa Melayu untuk berita langsung berkaitan bahan api', url: 'https://premium.sinarharian.com.my/' },
      { name: 'U.S. Energy Information Administration', purpose: 'Struktur pasaran minyak global, titik sempit, harga, dan mekanik pasaran', url: 'https://www.eia.gov/' },
      { name: 'BBC News, Reuters, dan outlet lain yang disemak', purpose: 'Laporan langsung tentang bahan api, minyak, perkapalan, dan tenaga apabila sumber newsroom diperlukan' },
    ],
  },
};

const zh: EditorialCopy = {
  home: {
    eyebrow: '有来源的燃油背景',
    title: 'WhatTheFuel 只保留事实，不放大恐慌。',
    subtitle: '这里有已核实的燃油价格、最新燃油新闻、简洁时间线，以及为什么全球油价冲击仍会传到马来西亚的浅白说明。',
    disclaimer: '仅供公众阅读与理解。若某个数字仍在核查中，它不会先放上去。',
    latestTitle: '最新燃油快照',
    latestSubtitle: '价格和补贴信息都连接到官方来源页面。',
    pricesLabel: '燃油价格',
    newsLabel: '实时新闻',
    loadingPrices: '正在加载已核实的价格数据。',
    emptyNews: '此分类目前还没有实时条目。',
  },
  global: {
    title: '为什么汽油会变贵',
    intro: '全球油价冲击会先经过航运、库存、期货和炼油利润，再传到本地油站价格。',
    footnote: '本页解释的是机制，不是要说每一次全球波动都会以同样速度、同样方式影响马来西亚。',
    noteTitle: '本页不主张什么',
    sections: [
      {
        title: '油价是全球定价，不是单个油站定价',
        paragraphs: [
          '原油和成品油价格会因为交易员、炼厂、航运公司和政府对同一个信号做出反应而变化：当前全球市场有多紧、接下来几周有多风险。',
          'EIA 将关键驱动因素归纳为现货价格、OPEC 与非 OPEC 供给、库存、金融市场，以及 OECD 和非 OECD 需求。',
        ],
        sources: [
          { label: 'EIA 总览', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
          { label: '非 OECD 需求', url: 'https://www.eia.gov/finance/markets/crudeoil/demand-nonoecd.php' },
        ],
      },
      {
        title: '航运咽喉点会把紧张变成运输成本',
        paragraphs: [
          '霍尔木兹海峡是最清楚的例子。EIA 说，2024 年约有每天 2,000 万桶石油液体经过这里，接近全球消费量的五分之一。',
          '当这种通道看起来可能受威胁时，市场不会等到真正封锁才反应。保险、运费、替代供给成本和投机对冲都会先改价。',
        ],
        sources: [{ label: 'EIA 霍尔木兹分析', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' }],
      },
      {
        title: '现货、期货和库存不会同步移动',
        paragraphs: [
          'EIA 的市场分析指出，当前价格和期货价格面对冲击时反应不同。若交易员预期未来供给更紧，期货先动；若现实供给现在就被打断，现货会立刻跳升。',
          '库存就是两者之间的缓冲。库存少、炼油余量紧，或者航运受扰，都会让市场更容易被新闻推高。',
        ],
        sources: [
          { label: 'EIA 金融市场', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
          { label: 'EIA OECD 需求', url: 'https://www.eia.gov/finance/markets/crudeoil/demand-oecd.php' },
        ],
      },
      {
        title: '马来西亚仍在同一个市场里',
        paragraphs: [
          '马来西亚是产油国，但这并不代表本地油价和全球价格脱钩。国家仍在全球市场里交易原油、成品油、航运能力和替代供给。',
          '所以，远方的冲突或航运受阻，仍然可能出现在本地定价、补贴压力和每周零售价调整里。',
        ],
        bullets: [
          '全球基准价格会反映到本地替代成本。',
          '即使原油标题暂时停住，运费和保险也可能上涨。',
          '炼厂和分销商仍要在同一个全球体系里买货。',
        ],
      },
    ],
  },
  malaysia: {
    title: '为什么马来西亚仍会受影响',
    intro: '马来西亚虽然产油，但仍处在全球燃油体系里，仍需要进口所需油品等级，并使用定向补贴来减缓冲击。',
    footnote: '重点不是马来西亚无力，而是本地价格仍受全球供给、本地政策和替代供给成本影响。',
    noteTitle: '核心重点',
    sections: [
      {
        title: '马来西亚不只是石油国家',
        paragraphs: [
          'DOSM 的 GDP 报告显示，服务业和制造业才是经济的主要支柱。因此“马来西亚有石油，所以汽油一定便宜”这个说法太简单。',
          '国家经济很宽，燃油政策必须同时兼顾消费者、财政压力和工业需求。',
        ],
        sources: [{ label: 'DOSM GDP 报告', url: 'https://v2.dosm.gov.my/portal-main/release-content/gross-domestic-product-gdp-by-state-2024' }],
      },
      {
        title: '马来西亚出口原油，也进口原油和成品油',
        paragraphs: [
          'DOSM 的石油统计显示，马来西亚会出口原油和凝析油，也会进口原油、凝析油和成品油。这对于一个与炼油和贸易紧密相连的经济体很正常。',
          '真正关键的不是“有没有产油”，而是国内需要的油种、油品和时间点，能否以合理成本及时获得。',
        ],
        sources: [
          { label: 'DOSM 2025 Q1', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-first-quarter-2025' },
          { label: 'DOSM 2025 Q4', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-q42025' },
        ],
      },
      {
        title: '补贴是定向的，不是无限的',
        paragraphs: [
          'MOF 在 2026 年 4 月的更新中，把 BUDI95 下的补贴 RON95 维持在每公升 RM1.99，临时维持每月 200 公升上限，并继续保留 e-hailing 等特定用途的规则。',
          '这就是网站要讲清楚的现实：民众看到的是补贴价，但政府仍在通过定向制度承担每一公升的成本。',
        ],
        bullets: [
          'BUDI95 一般上限：每月 200 公升。',
          'e-hailing 资格：合资格司机最高每月 800 公升。',
          '柴油援助仍按地区和资格区分。',
        ],
        sources: [
          { label: 'MOF 4 月 8 日', url: 'https://www.mof.gov.my/portal/en/news/press-citations/govt-maintains-subsidised-prices-amid-global-oil-market-volatility' },
          { label: 'MOF BUDI95 上限', url: 'https://www.mof.gov.my/portal/en/news/press-citations/claims-of-additional-budi95-subsidy-application-untrue-200-litre-monthly-limit-remains-mof' },
          { label: 'MOF e-hailing 级别', url: 'https://mof.gov.my/portal/en/news/press-citations/budi95-tiered-eligibility-for-e-hailing-drivers-to-be-activated-mid-month-mof' },
        ],
      },
      {
        title: '为什么页面先给出引文',
        paragraphs: [
          '如果某个数字不能直接用官方发布或明确可追溯的报道支撑，它就不该出现在主卡片或解释页里。',
          '这样做让项目更有用，而不是更吵。一个空位，总比一个无法证明的漂亮数字更好。',
        ],
      },
    ],
  },
  myths: {
    title: '迷思与事实',
    intro: '短卡片，附来源。语气平静，直接，方便转发。',
    cards: [
      {
        myth: '“马来西亚产油，所以汽油一定便宜。”',
        fact: '马来西亚仍在全球原油和成品油市场里交易，本地价格仍受替代成本、炼油利润、物流和补贴政策影响。',
        whyItMatters: '这是最常见的简化说法。听起来合理，但忽略了实物油品和市场定价的真实运作方式。',
        sources: [
          { label: 'DOSM 石油统计', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-first-quarter-2025' },
          { label: 'EIA 金融市场', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
        ],
      },
      {
        myth: '“油站价格就是今天的原油价格。”',
        fact: 'MOF 说明马来西亚油价依据前一周平均成本，所以今天的市场变动不会立刻反映到油站。',
        whyItMatters: '所以人们看到国际油价下跌，就常以为政府在隐瞒更便宜的价格。',
        sources: [{ label: 'MOF 油价滞后说明', url: 'https://www.mof.gov.my/portal/en/news/press-citations/mof-pump-fuel-prices-reflect-last-weeks-costs-despite-global-drop' }],
      },
      {
        myth: '“补贴代表政府可以永远吸收一切。”',
        fact: '当前制度是定向补贴。MOF 暂时收紧 BUDI95 上限，并保留特定类别的配额，而不是无限制的全民补贴。',
        whyItMatters: '如果讨论补贴时不考虑财政限制，讨论就会变成幻想，而不是政策。',
        sources: [
          { label: 'MOF 4 月 8 日', url: 'https://www.mof.gov.my/portal/en/news/press-citations/govt-maintains-subsidised-prices-amid-global-oil-market-volatility' },
          { label: 'MOF 200 公升上限', url: 'https://www.mof.gov.my/portal/en/news/press-citations/claims-of-additional-budi95-subsidy-application-untrue-200-litre-monthly-limit-remains-mof' },
        ],
      },
      {
        myth: '“产油国不会被全球冲击波及。”',
        fact: 'EIA 对霍尔木兹海峡的分析显示，远离马来西亚的航运咽喉点，也能迅速推高全球价格、保险和运费。',
        whyItMatters: '马来西亚和所有国家都在同一个商品体系里。地理位置会影响冲击程度，但不会让冲击消失。',
        sources: [{ label: 'EIA 霍尔木兹分析', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' }],
      },
    ],
  },
  sources: {
    title: '来源与方法',
    intro: 'WhatTheFuel 只使用少量批准来源，只发布能被追溯的内容。',
    updateTitle: '更新方式',
    updateBody: '实时新闻会从批准的来源自动刷新。时间线和解释页由人工整理，只在有清楚来源时更新。',
    sourceTitle: '信息来自哪里',
    sourceBody: '马来西亚政策页面、官方统计、全球能源数据，以及少量审过的新闻媒体会一起组成这个网站。',
    noteTitle: '我们不会发布什么',
    noteBody: '没有来源的价格卡、没有内容的填充条目，以及看起来漂亮却追不到出处的说法。',
    sourceGroups: [
      { name: '马来西亚财政部', purpose: '燃油价格、补贴政策、配额规则和官方声明', url: 'https://www.mof.gov.my/portal/en/' },
      { name: '马来西亚统计局', purpose: '解释页需要的经济与石油贸易数据', url: 'https://www.dosm.gov.my/portal-main/' },
      { name: 'Free Malaysia Today', purpose: '用于燃油相关实时报道的马来西亚本地、商业与国际新闻', url: 'https://www.freemalaysiatoday.com/' },
      { name: 'Malay Mail', purpose: '用于燃油相关实时报道的马来西亚与国际新闻', url: 'https://www.malaymail.com/' },
      { name: 'Berita RTM', purpose: '用于燃油相关实时报道的马来语全国新闻', url: 'https://berita.rtm.gov.my/' },
      { name: 'Sin Chew Daily', purpose: '用于燃油相关实时报道的中文马来西亚与国际新闻', url: 'https://www.sinchew.com.my/' },
      { name: 'Sinar Premium', purpose: '用于燃油相关实时报道的马来语新闻', url: 'https://premium.sinarharian.com.my/' },
      { name: '美国能源信息署', purpose: '全球油市结构、咽喉点、价格与市场机制', url: 'https://www.eia.gov/' },
      { name: 'BBC 新闻、路透社及其他审过的媒体', purpose: '需要新闻室来源时，用于燃油、石油、航运与能源的实时报道' },
    ],
  },
};

export function editorial(lang: Language): EditorialCopy {
  return { en, ms, zh }[lang] ?? en;
}
