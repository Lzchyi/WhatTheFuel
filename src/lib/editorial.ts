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
  understanding: {
    title: string;
    intro: string;
    cards: { title: string; body: string }[];
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
      { title: 'What “unsubsidised” means', body: 'The unsubsidised line is the reference market price before support is applied. It helps show the gap subsidy policy closes.' },
      { title: 'Why the labels matter', body: 'The same pump can show a public price, a reference price, and a regional price at once. Reading them correctly prevents bad comparisons.' },
    ],
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
    eyebrow: 'Sorotan Pasaran Bahan Api Bersumber',
    title: 'WhatTheFuel mendokumentasikan fakta, bukan sentimen.',
    subtitle: 'Rujukan harga bahan api mutakhir, kronologi konflik serta penerangan berstruktur tentang dinamik pasaran runcit bahan api negara.',
    disclaimer: 'Projek platform analitik bebas. Laman ini mengkompilasi indikator harga, penjelasan ekonomi dan garisan masa yang disahkan. Tiada pelepasan harga rasmi atau laporan eksklusif terbitan peribadi.',
    latestTitle: 'Indeks Bahan Api Semasa',
    latestSubtitle: 'Bancian harga pasaran berserta rekod tanggungan subsidi terus dari sumber rasmi kerajaan.',
    pricesLabel: 'Ruangan Harga',
    newsLabel: 'Liputan Media',
    loadingPrices: 'Pengekstrakan data berdaftar sedang dijalankan.',
    emptyNews: 'Tiada notis berita dicatatkan buat masa ini.',
  },
  understanding: {
    title: 'Pemahaman Data',
    intro: 'Panduan teknikal bagi meneliti metrik perbezaan pengkelasan harga bahan api berpandukan mekanisme penetapan dalam negara.',
    cards: [
      { title: 'Faktor Pengekalan Harga RON95', body: 'Harga runcit bersubsidi bagi gred RON95 adalah dikawal selia kerajaan untuk melindungi kapasiti perbelanjaan pengguna, sekaligus mengasingkannya dari turun-naik ketara pasaran.' },
      { title: 'Asas Penyelarasan Mingguan RON97', body: 'Gred RON97 diklasifikan sebagai indikator bebas apungan yang tidak menerima bantuan subsidi, menjadikannya responsif kepada purata kos rujukan serantau setiap kitaran minggu.' },
      { title: 'Pembezaan Serantau Harga Diesel', body: 'Pengkelasan harga bagi Semenanjung dan prospek Malaysia Timur bergerak di bawah pelarasan berbeza bagi mematuhi landskap sokongan kos dan mekanisme logistik rantau masing-masing.' },
      { title: 'Takrifan Terma “Tanpa Subsidi”', body: 'Paparan harga tanpa subsidi adalah tanda aras harga pasaran bebas sebelum sebarang pengecil kos bantuan diserap sepenuhnya oleh tampungan kerajaan.' },
      { title: 'Kepentingan Verifikasi Label Pasaran', body: 'Nilai pam mempamerkan paparan rujukan berbeza mengikut polisi negara—pembacaan metrik ini menghalang penyebaran sentimen tidak tepat melibatkan struktur harga di peringkat awam.' },
    ],
  },
  global: {
    title: 'Faktor Kenaikan Harga Minyak Global',
    intro: 'Siri rentetan krisis global berkembang menerusi sektor perkapalan, manipulasi inventori syarikat pengeluar dan margin penyulingan luar pesisir sebelum diterjemah ke dalam harga lantai runcit.',
    footnote: 'Panduan ini membentangkan sistem mekanikal kitaran pasaran dan bukanlah tafsiran mutlak bahawa kesemua insiden luar negara akan terus merebak di sepanjang pasaran domestik kita.',
    noteTitle: 'Inti Penting Global',
    sections: [
      {
        title: 'Penetapan Nilai Pasaran Adalah Berpusat Secara Antarabangsa',
        paragraphs: [
          'Ayunan graf instrumen tenaga—baik minyak mentah atau produk penyulingan termaju—adalah refleks pasaran pedagang global, firma infrastruktur petroleum dan perkapalan bagi menilai kedudukan penawaran ketat serta unjuran risiko bekalan pada minggu-minggu genting.',
          'Pentadbiran Maklumat Tenaga AS (EIA) mengasingkan pengaruh pasaran besar melalui terma harga tunai, penyertaan kuota pengeksportan OPEC dan keluk permintaan pelbagai sektor merentasi negara pakatan OECD.',
        ],
        sources: [
          { label: 'Tinjauan Indeks EIA', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
          { label: 'Analisis Permintaan (Bukan-OECD)', url: 'https://www.eia.gov/finance/markets/crudeoil/demand-nonoecd.php' },
        ],
      },
      {
        title: 'Halangan Titik Sempit Perkapalan Memburukkan Lagi Inflasi Logistik',
        paragraphs: [
          'Krisis logistik menerusi laluan Selat Hormuz menjadi indikator penting kepada perubahan drastik. Menurut ulasan EIA, kira-kira 20 juta tong cecair mentah dialirkan melalui lokasi tersebut pada 2024—merangkumi separuh daripada agregasi bekalan antarabangsa.',
          'Halangan maritim tidak semestinya perlu menunggu pengisytiharan sekatan rasmi. Kos jaminan pelayaran (insurans), penyewaan kontena tangki kargo serta pembaharuan polisi ganti aset boleh dilonjak serta-merta tanpa disedari pemilik pam luar wilayah.',
        ],
        sources: [{ label: 'Analisis Kemelut Hormuz (EIA)', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' }],
      },
      {
        title: 'Aliran Harga Aset Hadapan Mengambil Tempoh Berbeza',
        paragraphs: [
          'Keputusan semakan dari penilai memaparkan jurang interaksi instrumen derivatif (hadapan) berbanding kontrak jualan pukal semasa. Ketika insiden gangguan fizikal direkodkan, impak spekulator merangsang pemindahan pesat terhadap instrumen aset semasa dengan serta-merta berbanding aliran aset pertukaran lewat.',
          'Penyusutan rizab balutan yang mengimbangi krisis—termasuk inventori gudang mahupun ketersediaan tangki tambahan—mendadak melonjakkan kerentanan harga runcit yang perlu dibayar.'
        ],
        sources: [
          { label: 'Rangkuman Kewangan (EIA)', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
          { label: 'Pengamatan Sektoral OECD', url: 'https://www.eia.gov/finance/markets/crudeoil/demand-oecd.php' },
        ],
      },
      {
        title: 'Interaksi Domestik: Mengapa Kita Masih Terheret Sama?',
        paragraphs: [
          'Sebagai pengeksport industri berskala antarabangsa, kita tidak terlindung dari pengitaran rantaian bekalan luar rantau. Pemindahan minyak berstruktur kita juga berdepan unjuran kerentanan sama memandangkan rujukan jualan bersangkut pada formula pasaran yang seragam.',
          'Hal inilah yang menyebabkan peningkatan paras tanggungan perbendaharaan negara serta merangsang pindaan unjuran harga rujukan apungan kita sekiranya penamatan rantaian antarabangsa terganggu.'
        ],
        bullets: [
          'Indeks antarabangsa merupakan panduan rasmi formula penetapan harga (APM) secara realiti.',
          'Kos tambahan insurans serta kargo sewaan akan terapung walaupun tiada manipulasi fizikal di atas lautan.',
          'Pengedar serta rangkaian syarikat gergasi kekal terdedah dengan struktur caj rujukan sama yang menunjangi operasi luar margin tempatan.'
        ],
      },
    ],
  },
  malaysia: {
    title: 'Kesan ke atas Pasaran Malaysia',
    intro: 'Kedudukan sebagai wilayah penstabil pasaran petroleum tidak meleraikan kaitan kita dari sistem rujukan apungan global; apatah kelangsungan moden pasaran bergantung pada penyerapan gred cecair impor pelengkap selain mengekalkan insentif bersasar di tengah pergolakan dunia luar.',
    footnote: 'Perhatian utama adalah menjurus kepada dinamika serapan krisis, bukannya pembawaan naratif kepincangan ekonomi. Malaysia terus dilindungi subsidi serap-pukal tatkala instrumen luaran cuba dipertahankan serendah mungkin.',
    noteTitle: 'Inti Penting Domestik',
    sections: [
      {
        title: 'Potensi Industri Laksana Lebih Luas Berbanding Ekstraksi Semata',
        paragraphs: [
          'Selari dengan rekod pengumpulan ekonomi (KDNK) dari sudut Jabatan Perangkaan Malaysia (DOSM), pemacu pelaburan lebih terkandung pada segmen utiliti dan kelengkapan operasi—menyangkal spekulasi yang menekankan “Kita mengeluarkan komoditi, lantas kita mesti menjual lebih murah sepanjang masa”.',
          'Kepenggunaan dalam corak harian merangkumi elemen penjagaan polisi kos fiskal mahupun imbangan produktiviti awam yang menuntut tadbir urus strategik pada peringkat Kementerian Kewangan (MOF).'
        ],
        sources: [{ label: 'Statistik Sektoral DOSM 2024', url: 'https://v2.dosm.gov.my/portal-main/release-content/gross-domestic-product-gdp-by-state-2024' }],
      },
      {
        title: 'Ekologi Perdagangan Campuran – Ekspor & Impor Mentah',
        paragraphs: [
          'Analitik komersil merentasi pengkelasan antarabangsa meletakkan posisi yang ideal di mana Malaysia membekalkan petroleum mentah kondensat tinggi merentasi benua. Sebagai ganti pemprosesan lebih optimum untuk pengeluaran kenderaan (runcit), kita turut berdagang varian gred produk penapis tersasar yang jauh berbeza dari janaan domestik luar pesisir kita.',
          'Persoalan penentu kelangsungan harga terletak pada rincian tempahan yang dihantar kepada pangkalan stesen syarikat yang diunjur dari kos pengimportan tepat, pada kadar tepat, selain kelengkapan tempoh rujukan (lag-pricing).'
        ],
        sources: [
          { label: 'Indikator Tenaga DOSM Q1', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-first-quarter-2025' },
          { label: 'Indikator Tenaga DOSM Q4', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-q42025' },
        ],
      },
      {
        title: 'Perlindungan Kumpulan Sasar Yang Terkawal',
        paragraphs: [
          'MOF mengumumkan pengekalan status intervensi di mana BUDI95 direkodkan mencerap harga lantai RM1.99 di bawah liputan rasmi kelayakan siling sementara berkapasiti serendah 200-liter demi mengekang ketirisan.',
          'Huraian mekanikal di laman analitik berpandukan satu fakta kukuh—kerajaan mengekalkan tampungan pampasan kepada syarikat pengedar dengan peruntukan luar belanjawan (ekstra-fiskal) khusus ke arah golongan rentan yang layak.'
        ],
        bullets: [
          'Fasa Umum: Kapasiti 200 liter rujukan sebulan.',
          'Fasa Pengangkutan: Penawaran ditingkat sehingga 800 liter di bawah takrifan pengurusan E-Hailing berdaftar.',
          'Talian Budi Diesel menyantuni pengkhususan kenderaan sektor berskala logistik serantau.'
        ],
        sources: [
          { label: 'Komitmen Pengekalan (MOF)', url: 'https://www.mof.gov.my/portal/en/news/press-citations/govt-maintains-subsidised-prices-amid-global-oil-market-volatility' },
          { label: 'Rasional Had Silinder MOF', url: 'https://www.mof.gov.my/portal/en/news/press-citations/claims-of-additional-budi95-subsidy-application-untrue-200-litre-monthly-limit-remains-mof' },
          { label: 'Rangkuman Kapasiti Pengangkutan', url: 'https://mof.gov.my/portal/en/news/press-citations/budi95-tiered-eligibility-for-e-hailing-drivers-to-be-activated-mid-month-mof' },
        ],
      },
    ],
  },
  myths: {
    title: 'Mitos & Fakta',
    intro: 'Rumusan pautan rujukan berdaftar bagi menyangkal desas-desus tular di luar pemahaman teknikal awam.',
    cards: [
      {
        myth: '"Kita adalah pelopor minyak luar pesisir, maka pengguna tidak patut merada kerisauan penyusutan daya beli."',
        fact: 'Kapasiti negara terus diangkat menjadi elemen rantaian dagang komersil bebas di mana penanda aras akhir tertakluk pada pengkelasan logistik pelayaran yang membekalkan produk penapis masuk gred serasi dari negara pembekal asing secara kitaran apungan.',
        whyItMatters: 'Rujukan dangkal berterusan merencatkan pemahaman sebenar yang wajar diberikan sewaktu meneliti impak sebenar ekosistem rantaian produk mentah luar sempadan kepada ekonomi tempatan.',
        sources: [
          { label: 'Rekod Import-Eksport Sektor Minyak', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-first-quarter-2025' },
          { label: 'Tinjauan Indeks Semasa', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
        ],
      },
      {
        myth: '"Penyusutan harga dagangan tong antarabangsa perlu diturunkan serempak pada malam itu juga."',
        fact: 'Laporan kementerian mencerap metodologi apungan terhad di mana MOF merefleksikan pengiraan purata tujuh-hari lepas bagi membentuk kesimpulan harga syor pasaran secara berjadual dengan adil.',
        whyItMatters: 'Anggapan impulsif ini membangkitkan fitnah dan ketidakpercayaan umum tatkala laporan dagangan luar negara melaporkan penurunan semalaman yang dipengaruhi intervensi pasaran yang pendek.',
        sources: [{ label: 'Formula Mekanisme Penetapan', url: 'https://www.mof.gov.my/portal/en/news/press-citations/mof-pump-fuel-prices-reflect-last-weeks-costs-despite-global-drop' }],
      },
      {
        myth: '"Kelenturan hasil cukai melayakkan kerajaan menangguh pelarasan di mana-mana harga subsidi apungan di bawah sistem lama."',
        fact: 'Pemantauan pengeluaran semasa mengetatkan kelayakan BUDI95 khusus ke angka kapasiti runcit yang rasional bagi mengekang manipulasi pengaliran subsidi secara komersial kepada komuniti perindustrian berskala mega.',
        whyItMatters: 'Meninggalkan pengurusan beban fiskal tidak memberi pelan penyelesaian kukuh tetapi semata-mata menolak ketumbukan bebanan tersebut terus melangkau bajet perbelanjaan pembinaan kemudahan yang mendesak.',
        sources: [
          { label: 'Kenyataan Tampungan Fiskal', url: 'https://www.mof.gov.my/portal/en/news/press-citations/govt-maintains-subsidised-prices-amid-global-oil-market-volatility' },
          { label: 'Rasional Had Siling 200L', url: 'https://www.mof.gov.my/portal/en/news/press-citations/claims-of-additional-budi95-subsidy-application-untrue-200-litre-monthly-limit-remains-mof' },
        ],
      },
      {
        myth: '"Kudrat sebuah negara pelopor minyak kalis krisis geopolitik serantau mahupun Eropah."',
        fact: 'Walaupun pada jarak jauh 6,800KM nautika sekalipun, analisis sekatan di Teluk Parsi menyalakan panik kos perlindungan insurans gergasi syarikat pembekalan serta kerisauan gangguan tempoh pengumpulan tangki ganti di platform maritim kita serta-merta.',
        whyItMatters: 'Rantaian perdagangan komoditi saling bersilang tanpa perbezaan sempadan status. Kedudukan serantau sekadar menentukan takat penguncupan awal dan bukan menidakkan kerugian akhir krisis tersebut sepenuhnya.',
        sources: [{ label: 'Analisis Kemelut Hormuz (EIA)', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' }],
      },
    ],
  },
  sources: {
    title: 'Sumber Maklumat dan Kaedah Kajian',
    intro: 'Platform ini hanya bergantung secara esklusif di atas pengamatan yang disandarkan menerusi gerbang penerbitan sahih tanpa ulasan sensasi luar parameter teknikal.',
    updateTitle: 'Kaedah Pemprosesan Data',
    updateBody: 'Berita dipaparkan secara langsung berteraskan aliran RSS badan pemantauan. Penyusunan teks analitikal dan unjuran rujukan akan direvisi secara teliti bersama pautan fakta sokongan.',
    sourceTitle: 'Infrastruktur Analisis Data Rujukan',
    sourceBody: 'Pautan dokumen polisi perbendaharaan, analisis petunjuk makroekonomi (DOSM), petikan tinjauan pasaran luar (EIA), berserta agensi media pengumpulan rujukan bebas saling disatukan berpandukan standard kompilasi kewartawanan moden.',
    noteTitle: 'Panduan Pembendungan Isu Subversif',
    noteBody: 'Sebarang penyesuaian angka secara semborono tanpa rujukan pengesahan kementerian yang jelas tidak akan direkodkan. Begitu juga bagi penyertaan maklumat sensasi pengisi tanpa jejak pemulangan.',
    sourceGroups: [
      { name: 'Kementerian Kewangan Malaysia (MOF)', purpose: 'Sumber pengumuman mutlak harga di pasaran stesen runcit tempatan, pematuhan kuota pelarasan serta kenyataan amaran kewangan rasmi.', url: 'https://www.mof.gov.my/portal/en/' },
      { name: 'Jabatan Perangkaan Malaysia (DOSM)', purpose: 'Menarik kesimpulan pasaran keupayaan hasil bumi mentah, kedominasian pelaburan industri serta impak unjuran kewangan makro bersumber.', url: 'https://www.dosm.gov.my/portal-main/' },
      { name: 'Free Malaysia Today (FMT)', purpose: 'Dimanfaatkan bagi saluran liputan berfokus merangkumi insiden komersil negara berserta perkembangan luar pesisir.', url: 'https://www.freemalaysiatoday.com/' },
      { name: 'Malay Mail', purpose: 'Diserap merangkumi segmen pengelasan penyampaian analitikal berserta penyalur maklumat ekonomi secara am.', url: 'https://www.malaymail.com/' },
      { name: 'Berita RTM', purpose: 'Badan siaran kebangsaan berbahasa Melayu rasmi bagi mencerakin pelaporan dasar penstabilan krisis secara langsung.', url: 'https://berita.rtm.gov.my/' },
      { name: 'Sin Chew Daily', purpose: 'Rancangan liputan analitis rentas-bahasa dari platform editorial utama penunjuk hala pasaran ekonomi awam.', url: 'https://www.sinchew.com.my/' },
      { name: 'Sinar Premium', purpose: 'Laporan penyiasatan dan pemantauan mendalam terhadap krisis kenaikan tanggungan logistik pengguna domestik.', url: 'https://premium.sinarharian.com.my/' },
      { name: 'U.S. Energy Information Administration (EIA)', purpose: 'Entiti autoriti bagi pencerakin maklumat pangkalan harga mentah pasaran bebas sedia ada disamping corak ketegangan selat perkapalan gergasi.', url: 'https://www.eia.gov/' },
      { name: 'BBC News, Reuters dan Agensi-Agensi Antarabangsa Berkaitan', purpose: 'Liputan global bersiaran secara agresif ketika wujudnya sebarang ketumbukan insiden blokade ketenteraan mahupun manipulasi aset pelabur runcit.' },
    ],
  },
};

const zh: EditorialCopy = {
  home: {
    eyebrow: '附官方来源的数据追踪',
    title: 'WhatTheFuel：聚焦事实，剥离市场恐慌。',
    subtitle: '本平台汇编实时的官方燃油零售标价、国际争端演进表，辅以客观浅白的数据解析，理清油市与宏观经济变量的关联。',
    disclaimer: '独立的公共信息解析智库。本平台悉心梳理且收录官方公告、剖析文件与具有出处佐证的资料；并非官方油价监管单位或私营财经新闻机构。',
    latestTitle: '最新油价快照',
    latestSubtitle: '燃油基准价及现行补贴机制参考，所有出处均附有直接可核验的官方链接。',
    pricesLabel: '最新行市',
    newsLabel: '财经动向',
    loadingPrices: '系统正于官方开放接口调取权威报价数据。',
    emptyNews: '现阶段未拦截到与本列表相关的即时简报。',
  },
  understanding: {
    title: '数据解析',
    intro: '深度解构本地燃油多轨制标价体系，客观检视国家补贴政策如何缓冲外部油市带来的波幅与冲击。',
    cards: [
      { title: 'RON95 零售价受控于浮动顶限', body: '在政策保驾护航之下，受限的 RON95 受补贴标价长期冻结于可控水平框架，作为抵御全球汇市和产油国博弈等外界波动的缓震主力工具。' },
      { title: 'RON97 从属市价调节机制', body: '因其非管制属性，RON97 作为自由落体商品彻底挂钩国际走势基准框架，随着官方既定的每周价格核算节点而上修抑或回退。' },
      { title: '特许区域（东马）针对性政策结构', body: '考量到海事物流成本差异和基本基建补贴结构的特殊需求，我国半岛及东海岸长期施行分离且受控的特许分区报价指南政策。' },
      { title: '“非受补贴零售指导价”之含义', body: '此挂牌数额剥离了行政扶持成本及相关溢价减免；透过此数值公众方能直观量化国家储备金库每月承受的实质补贴额度缺口。' },
      { title: '各级价签并行所呈现的公信力', body: '同个添油泵上多签并存——分别标识民用特惠价、自由市价及地域参考。洞悉价格差矩将消除了舆情中不负责任的跨国报价误解与对冲炒作。' },
    ],
  },
  global: {
    title: '国际油价波动原因',
    intro: '国际原油市场的“打喷嚏”效应，往往透过海路集装箱拥堵、交割库存告急、场外期货做空及炼厂利润承压，继而蔓延至民间的零售链终端。',
    footnote: '本分析旨在描摹上述连锁传递机制的宏观运作路线，并无意定论每一个境外事件的推演皆能以同等烈度重创马来西亚民生领域。',
    noteTitle: '国际环境之核心要义',
    sections: [
      {
        title: '宏观大盘定价并非一国一站之所能左右',
        paragraphs: [
          '原油与石化提炼品结算价，实际上是一场多方博弈的结果，各方皆紧盯着诸如眼下现货市场枯竭度与来周潜在风险系数这等重磅指标——连带操纵了买办寡头和船东之间的神经中枢。',
          '根据美国联邦能源信息部（EIA）的市场研报，影响走势的风向标囊括：现货与现货溢价数据流、欧佩克及其同盟的放水配额、商业周转库存量、华尔街做多对冲、以及经合组织（OECD）对冲新型国家的需求拐点。',
        ],
        sources: [
          { label: 'EIA 全球金融汇市指标分析', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
          { label: '新兴经济体外部原油储备需求走势', url: 'https://www.eia.gov/finance/markets/crudeoil/demand-nonoecd.php' },
        ],
      },
      {
        title: '战略咽喉点堵塞会立竿见影转化成物流阻滞成本',
        paragraphs: [
          '波斯湾霍尔木兹海峡便是最显性的标杆案例。EIA披露，2024年日均流量逼近两千万桶，该数值等同于全球消耗端石化液体的五成乃至两成份额。',
          '当生命线遭逢制裁疑云覆盖，市场决不会干坐等待围堵落实。风险溢价会先行反应——体现在海事保险费骤增、船只租赁炒卖、以及买手疯狂买入期指看涨合约；最终皆层层转嫁在添油泵终端的数字跳动之上。',
        ],
        sources: [{ label: 'EIA 霍尔木兹海峡地缘政治深剖', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' }],
      },
      {
        title: '现货、期货交易合约与大宗库存并无对等联动性',
        paragraphs: [
          'EIA 前瞻剖析点出，当前报价（现货仓位）和延迟合约（期指操作）面对外力干扰常表现出异质化弹射反应。若盘面传出远期供应脱轨的流言，投机者则推高远洋报价；若实体炼铁厂发生急停停摆，现货行情则会在转圈间飙空。',
          '作为供需两端唯一的蓄水池，战略库存充当了“缓冲减震器”。倘若官方库存骤跌、炼油瓶颈吃紧以及海路黑天鹅降临，将导致大盘如同惊弓之鸟般极易受小道新闻煽动暴走。',
        ],
        sources: [
          { label: 'EIA 投资级盘面联动概览', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
          { label: 'OECD内部用度核算', url: 'https://www.eia.gov/finance/markets/crudeoil/demand-oecd.php' },
        ],
      },
      {
        title: '大马并未绝缘于上述全球连锁效应的侵袭',
        paragraphs: [
          '诚然马来西亚冠有轻质原油出口国头衔，但这并未使其民间市场免役于“世界统一市价”的震荡辐射。国家经贸巨轮依旧高度融合并仰赖海外重油采购、高等级成品加工引渡、以及环球游轮载重的自由浮动行情。',
          '由此可鉴，纵然战端远在中东或是航运突发禁令远在天边，最终的代价均不可避免地具象化在国内的精算成本核对、国库补贴预算压力以及政府每周公布牌价调涨时机的博弈之中。',
        ],
        bullets: [
          '当纽约期油及布伦特原油标杆出现攀爬，直接蚕食国家财政对换重油回国炼造的替代经费预算。',
          '在原油头版新闻表现克制期间，航船安保合约费用的叠加依旧是不可控制的膨胀因子。',
          '纵贯全盘物流与分销业者，他们所进购的油槽原料皆按死统一全球体系中的硬性报价标签执行。',
        ],
      },
    ],
  },
  malaysia: {
    title: '大马国内影响',
    intro: '作为拥有产油头衔的国家仍被拉扯入该浑水之中，其底层的运作逻辑不脱：自身仍处在跨国统筹的互换体系里，需引进匹配我国炼油机制的进阶品种油；随后再透过宏观定向补贴，充当吸收民怨及物价涨击的海绵。',
    footnote: '核心关窍并不在乎“我国是否有产油”，亦非将本国置于弱势。国家行政层级调度的挂牌价依然仰承海外大盘产能、当地财政拨款框架以及重新回购货真价实的替代炼油之实际成本走向。',
    noteTitle: '国内环境之核心要义',
    sections: [
      {
        title: '我国经济结构多元并立，未受石油红利绝对捆绑',
        paragraphs: [
          '综合国家统计局（DOSM）出台的国内生产总值（GDP）季报表现查核：支撑我国长盛命脉的两极枢纽为进阶服务业以及高度代工组装产业。从而推翻“凭借国家具有地底储备优势，民生用油便天经地义当廉价出售”此类以偏概全的过度简读。',
          '正因涉猎的工业面辽阔无垠，拟定油供方针必须周旋在国民生存水平、严峻的财赤悬崖以及高耗能工业界嗷嗷待哺的供电基建之中寻得黄金三角。',
        ],
        sources: [{ label: 'DOSM 2024 年官方核算报告发布', url: 'https://v2.dosm.gov.my/portal-main/release-content/gross-domestic-product-gdp-by-state-2024' }],
      },
      {
        title: '交叉式经贸国度：涵盖原装出口，重型进口引渡再深加工',
        paragraphs: [
          '据DOSM提呈的重要开采业与矿产清单指明：马来西亚大量输出高品质轻质凝析油博取外汇之余，同步大手笔输入更符合本土旧有引擎规格与炼厂技术的非本国重级石油产品。对于身具双面性枢纽特质及进出口炼造代工性质浓厚的国家而言，这等配置为国际常态。',
          '是以，能否在油井挖出液态金银仅停留在资源层级；真正决定老百姓口袋深浅的核心要口是：市场对味的那款特定分级燃油，能否在该当下以国内能够负担的合规均价适时抵港支援。',
        ],
        sources: [
          { label: 'DOSM 2025 年首度原油数据报告精编', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-first-quarter-2025' },
          { label: 'DOSM 2025 第四度尾端盘点总署', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-q42025' },
        ],
      },
      {
        title: '定点式社会辅助拨款之额度并非无穷匮',
        paragraphs: [
          '回顾财政部于 2026 年 4 月下达的新政更新中，隶属 BUDI95 的扶贫优惠价格死守每公升 RM1.99 的警戒线，但也严格执行每月 200 公升的使用门槛红线。而类似网约出行车业（e-hailing）的特殊用度者，保留部分灵活定额。',
          '本页志在梳理此不常被察觉的施政痛处：公众见到的虽是以低于市值的零售表层，唯政府背抵着以海量公款为注销单位的“靶向扶贫补偿机制”。',
        ],
        bullets: [
          'BUDI95 普遍受惠群体基准顶线：每月设为 200 公升。',
          '运输及共享出行服务资质：合规从业员在通过繁琐阶级认证下最高可领略 800 公升单月回扣。',
          '柴油领域仍秉持区域切割法，唯经严谨评估下进行定向金援退款。',
        ],
        sources: [
          { label: 'MOF 4月8日行政院公布及定调', url: 'https://www.mof.gov.my/portal/en/news/press-citations/govt-maintains-subsidised-prices-amid-global-oil-market-volatility' },
          { label: 'MOF 设顶 200L 临时通令阐述', url: 'https://www.mof.gov.my/portal/en/news/press-citations/claims-of-additional-budi95-subsidy-application-untrue-200-litre-monthly-limit-remains-mof' },
          { label: 'MOF 电招车业界评级阶次规章', url: 'https://mof.gov.my/portal/en/news/press-citations/budi95-tiered-eligibility-for-e-hailing-drivers-to-be-activated-mid-month-mof' },
        ],
      },
    ],
  },
  myths: {
    title: '迷思与事实',
    intro: '附有扎实新闻源追溯路线的短评卡片。以最理性的词藻，撕破市井间流窜的情绪化论调。',
    cards: [
      {
        myth: '“身为拥有开采能力之国，让老百姓长期享有平价油本是政府无容置疑的单向义务。”',
        fact: '我国依旧无法规避介入全球石油产品代购战的红海局势之内，本土的牌值变动实则受制于进口替代的交割现汇、中间商炼制高规燃油的让利底面、跨国货运堵车风险以及政策端补贴储备金耗竭周期的捆绑。',
        whyItMatters: '此等捷径式民粹思维无疑极易煽动社会浮躁戾气。虽然乍听之下合乎直觉逻辑判断，然而却一刀切抹除了大宗商品之实物分配难度，及在金融游戏规则中复杂的层层运转机制。',
        sources: [
          { label: 'DOSM 宏观原油开采官方统计专区', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-first-quarter-2025' },
          { label: 'EIA 全球金融汇集分析中心', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
        ],
      },
      {
        myth: '“当日国际原油指数报跌，路边加油站也理应即刻做出对等同步回撤调整。”',
        fact: '大马财政部长（MOF）明文释出其自动化调控公式说明，我国每周零售价系采集上一星期各日交易市值的综合浮动移动平均数(Moving Average)；因此今日凌晨之市场震荡断无可能无缝下放至今日之消费端。',
        whyItMatters: '基于公众屡屡目睹国际油价出现暴跌闪崩并配合电视煽动新闻大肆渲染之时，不免产生“政府内部黑箱操作吞并溢价来中饱私囊”的滑稽猜测。',
        sources: [{ label: 'MOF 滞后浮动挂钩官方澄清文宣', url: 'https://www.mof.gov.my/portal/en/news/press-citations/mof-pump-fuel-prices-reflect-last-weeks-costs-despite-global-drop' }],
      },
      {
        myth: '“纵使油灾泛滥，拥有政府背书的不封顶补贴必当成为庇荫人民的永不消蚀的高铁金牌。”',
        fact: '此旧思维下的广撒网模式已被新修的“精准灌溉制”(Targeted Subsidy) 取代。面对局势，财政部短暂切断了 BUDI95 常态滥配发放窗口定于上限范畴止损，而专为其特种行业划分特定护城河资格准许。',
        whyItMatters: '倘若对惠民措施的讨论全然架空了枯竭透顶的公家国库税收底气，所谓的体恤之争最终不过是沦落成闭门造车的廉价口水仗，而非能务实生根的国家级别大政方针。',
        sources: [
          { label: 'MOF 4月8号之相关局势稳控新闻发布会', url: 'https://www.mof.gov.my/portal/en/news/press-citations/govt-maintains-subsidised-prices-amid-global-oil-market-volatility' },
          { label: 'MOF 200公升门槛临管声明下放处', url: 'https://www.mof.gov.my/portal/en/news/press-citations/claims-of-additional-budi95-subsidy-application-untrue-200-litre-monthly-limit-remains-mof' },
        ],
      },
      {
        myth: '“身处资源产出国，天生便拥有一副百毒不侵隔绝国际所有制裁冲击的金钟罩。”',
        fact: 'EIA 针对伊朗封锁线及霍尔木兹海峡地缘危机释出的风向标洞察展示了极其露骨的一面：哪怕这等航运掐脖子的导火索是在千里之外，它的蝴蝶效应即有能耐在分秒之间席卷并改写各大承保保单费用与海陆运钞重金。',
        whyItMatters: '这昭告着一个铁证：马来西亚与外在所有的列强依然受制共用同一个商品池中。遥远的距离优势不过是稍微抵消掉前线直接炮火的波及宽度，但却无法让其带来的经济伤害完全脱罪无存。',
        sources: [{ label: 'EIA 中东地缘阻截冲击大盘剖析评估', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' }],
      },
    ],
  },
  sources: {
    title: '资料来源与方法',
    intro: 'WhatTheFuel 严控且仅使用一组极少数白名单批准的重磅消息来源，杜绝发表任何无法追溯确凿根源的数据言论。',
    updateTitle: '资料流更新方式',
    updateBody: '实时的动态播报从合法挂牌的通讯社接口拉取而至。关于大马时间演进脉络及政策数据剖析的修正改版，只有在持有具备公信力资料之铁证下方才允许通过。',
    sourceTitle: '核心内幕自何方抽检得来',
    sourceBody: '将我国的宏大政策拟定备忘录、总署公报经济指数、跨国能源期货指标，乃至于有权威背书的几家商业主媒报业深度混编，最终归纳融合成此可供一览概况的清晰版面。',
    noteTitle: '绝对零容忍与不接纳之范畴',
    noteBody: '不存在出处标码不明的价格快照、不设无深度的口水流量文章填充，坚决摈弃各类哗众取宠“看似有条不紊拿不出证据文件”的阴谋猜忌说。',
    sourceGroups: [
      { name: '马来西亚财政部 (MOF)', purpose: '敲定挂牌售价、统御全国补贴政策走势方针、批核援助限制条规及出具公报指令的核心中枢点。', url: 'https://www.mof.gov.my/portal/en/' },
      { name: '马来西亚国家统计局 (DOSM)', purpose: '提供强有力的宏观国家经贸报告参数、进出境通关核查账本从而强化解析页的逻辑说服力。', url: 'https://www.dosm.gov.my/portal-main/' },
      { name: '自由今日大马 (FMT)', purpose: '摘选用于紧贴国内朝野动向、商战金融重组、环球油产相关资讯的一级即时报道材料阵地。', url: 'https://www.freemalaysiatoday.com/' },
      { name: '马来邮报 (Malay Mail)', purpose: '涵盖马来西亚大环境全貌以及针对石油动向突发时延揽入库的基础世界版图要闻专版。', url: 'https://www.malaymail.com/' },
      { name: '大马国营电视台/广播电台 (Berita RTM)', purpose: '调性纯正之马来语权威全国动向资讯传输中心，用作抓取与政策联动油产直击的讯息源。', url: 'https://berita.rtm.gov.my/' },
      { name: '星洲日报 (Sin Chew Daily)', purpose: '在受中文媒介语族群倚重的领域中，以剖析国际间局势诡谲多变与大马切身连接性为主轴的报道。', url: 'https://www.sinchew.com.my/' },
      { name: 'Sinar Premium (深度解析增值版)', purpose: '摘星级马来语媒体评论及政经剖析大盘文章，专注引述大环境油价与马来西亚息息相关之课题深溯。', url: 'https://premium.sinarharian.com.my/' },
      { name: '美国联邦能源信息部 (EIA)', purpose: '用以宏观探照目前国际最上等流层间的油市运作架构、扼喉之争的博弈策略点、价格趋势解算仪。', url: 'https://www.eia.gov/' },
      { name: 'BBC国际新闻、路透集团连同通过审定之传媒', purpose: '这乃是在陷入非常理可判的情况下（断发制裁、军方封岛等局势出现）需要专业权威报馆发布时不可或缺的高效渠道。' },
    ],
  },
};

export function editorial(lang: Language): EditorialCopy {
  return { en, ms, zh }[lang] ?? en;
}
