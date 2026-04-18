import type { EditorialCopy } from './editorial';

export const ms: EditorialCopy = {
  home: {
    eyebrow: 'Harga Bahan Api dengan Sumber Rasmi',
    title: 'WhatTheFuel — fakta, bukan perasan.',
    subtitle: 'Tengok harga bahan api semasa, garis masa perubahan harga, dan penerangan ringkas kenapa harga naik atau turun.',
    disclaimer: 'Projek pendidikan bebas. Kami kumpul dan susun maklumat daripada sumber rasmi. Kami tidak keluarkan harga rasmi atau laporan berita sendiri.',
    latestTitle: 'Harga Semasa',
    latestSubtitle: 'Harga bahan api terkini terus dari sumber rasmi kerajaan.',
    pricesLabel: 'Harga',
    newsLabel: 'Berita',
    loadingPrices: 'Sedang muatkan data harga.',
    emptyNews: 'Tiada berita buat masa ini.',
  },
  understanding: {
    title: 'Fahami Angka Ini',
    intro: 'Panduan ringkas kenapa setiap harga bahan api ditetapkan berbeza.',
    cards: [
      { title: 'Kenapa RON95 harganya tetap?', body: 'Kerajaan tetapkan harga RON95 supaya rakyat bayar harga yang stabil, bukannya harga pasaran dunia yang berubah-ubah.' },
      { title: 'Kenapa RON97 berubah setiap minggu?', body: 'RON97 ikut harga pasaran, jadi ia diselaras setiap minggu — berbeza dengan RON95 yang ada subsidi.' },
      { title: 'Kenapa harga diesel Sabah/Sarawak berbeza?', body: 'Semenanjung dan Malaysia Timur ada struktur sokongan dan logistik yang berbeza, sebab itu harga dieselnya pun berbeza.' },
      { title: 'Apa maksud "tanpa subsidi"?', body: 'Harga tanpa subsidi ialah harga pasaran sebenar sebelum kerajaan masuk campur. Ia tunjukkan berapa besar jurang yang subsidi tutup.' },
      { title: 'Kenapa ada banyak harga berbeza?', body: 'Pam yang sama boleh tunjukkan harga awam, harga rujukan, dan harga wilayah. Faham perbezaannya elakkan salah faham.' },
    ],
  },
  global: {
    title: 'Minyak 101: Macam Mana Minyak Mentah Berfungsi',
    intro: 'Dari organisma laut bersaiz mikro 300 juta tahun dahulu hingga ke bahan api dalam tangki kereta anda — inilah semua yang perlu anda tahu tentang minyak mentah: macam mana ia terbentuk, macam mana kualiti dinilai, macam mana ia diproses, dan siapa yang keluarkan paling banyak.',
    footnote: 'Muka surat ini terangkan mekanisme pasaran. Ia tidak bermaksud setiap peristiwa luar negara akan langsung kesan Malaysia dengan kadar yang sama.',
    noteTitle: 'Had Penjelasan Laman Ini',
    sections: [
      // ── Origins ────────────────────────────────────────────────────────────
      {
        title: 'Macam mana minyak mentah terbentuk — kisah 300 juta tahun',
        paragraphs: [
          'Minyak mentah bukan cecair yang sedia ada di dalam tanah sejak azali. Ia sebenarnya sisa terpadat dan "masak" bagi organisma laut bersaiz mikro — kebanyakannya fitoplankton dan zooplankton — yang hidup di lautan purba semasa era Mesozoik, kira-kira 66 hingga 252 juta tahun dahulu.',
          'Bila organisma ini mati, mereka tenggelam ke dasar lautan yang kekurangan oksigen, jadi mereka tidak boleh reput sepenuhnya. Selama jutaan tahun, lapisan sedimen — lumpur, tanah liat, dan pasir — menimbus mereka semakin dalam.',
          'Haba dan tekanan akibat kedalaman penimbusan (biasanya 2–4 km, suhu 60–160 °C) mencetuskan proses yang dipanggil katagenesis: bahan organik itu mula jadi pepejal berlilin dipanggil kerogen, kemudian "pecah" menjadi minyak mentah cair dan gas asli. Julat suhu ini dipanggil "tetingkap minyak" (oil window).',
          'Kerana minyak kurang tumpat berbanding air batu bawah tanah, ia bergerak ke atas melalui lapisan batu berliang sehingga tersangkut di bawah lapisan batu yang tidak telap — membentuk takungan petroleum yang digerudi hari ini.',
          'Sebab itu minyak dipanggil bahan api fosil: ia betul-betul dibuat daripada kehidupan purba. Ini juga sebab ia tidak boleh diperbaharui — proses pembentukannya mengambil puluhan juta tahun.',
        ],
        sources: [
          { label: 'Penn State EARTH 104: Asal Usul Minyak (EN)', url: 'https://www.e-education.psu.edu/earth104/node/1382' },
          { label: 'EnergyEducation.ca: Pembentukan Petroleum (EN)', url: 'https://energyeducation.ca/encyclopedia/Petroleum_formation' },
        ],
      },
      // ── Quality ────────────────────────────────────────────────────────────
      {
        title: 'Kualiti minyak mentah — manis vs masam, ringan vs berat',
        paragraphs: [
          'Tidak semua minyak mentah sama. Ia dikelaskan mengikut dua ukuran yang terus mempengaruhi nilai dan kos penapisannya.',
          'Graviti API mengukur ketumpatan. Minyak ringan (>31° API) kurang tumpat, mudah mengalir, dan menghasilkan lebih banyak produk bernilai tinggi seperti petrol dan bahan api jet bagi setiap tong. Minyak berat (<22° API) memerlukan penapisan yang lebih intensif. "Manis" (sweet) bermaksud kandungan sulfur rendah (bawah 0.5%) — lebih mudah dan murah untuk diperap memenuhi standard alam sekitar. Minyak "masam" (sour) ada sulfur lebih tinggi yang perlu dibuang dengan kos tambahan.',
          'Minyak Tapis Malaysia — dihasilkan di perairan Terengganu — antara yang paling ringan dan manis di dunia, pada 45° API dan hanya 0.04% sulfur. Sebab itulah ia lebih mahal dan dijadikan penanda aras harga minyak manis ringan untuk rantau Asia-Pasifik.',
          'Penanda aras global utama ialah Brent (Laut Utara, 38° API, 0.37% S), WTI (Amerika Syarikat, 39.6° API, 0.24% S), dan Dubai (Timur Tengah, 31° API, 2.0% S — sederhana masam). Hakikat bahawa Tapis lebih ringan dan manis daripada ketiga-tiganya menjelaskan kenapa minyak Malaysia secara sejarah dijual pada harga premium melebihi Brent.',
        ],
        bullets: [
          'Ringan (>31° API) + Manis (<0.5% S) → nilai tertinggi, kos penapisan paling rendah → Tapis, WTI, Brent',
          'Sederhana (~31° API) + Masam (>0.5% S) → kos penapisan sederhana → Dubai crude',
          'Berat (<22° API) + Masam → nilai paling rendah, penapisan paling intensif → minyak berat Venezuela',
          'API lebih tinggi + sulfur lebih rendah = lebih banyak petrol per tong = harga pasaran lebih tinggi',
        ],
        sources: [
          { label: 'EIA: Apa yang Gerakkan Harga Minyak Mentah (EN)', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php' },
          { label: 'OilPriceAPI: Perbandingan Penanda Aras (EN)', url: 'https://oilpriceapi.com/blog/crude-oil-benchmarks' },
        ],
      },
      // ── Refining ───────────────────────────────────────────────────────────
      {
        title: 'Macam mana minyak mentah diproses — menara penyulingan',
        paragraphs: [
          'Minyak mentah terus dari perigi tidak berguna — ia mesti diasingkan kepada komponen-komponennya. Proses utama ialah penyulingan pecahan atmosfera (fractional distillation): minyak mentah dipanaskan hingga kira-kira 400 °C dan dimasukkan ke dalam tiang yang tinggi. Kerana molekul hidrokarbon berbeza mempunyai takat didih yang berbeza, mereka terasing pada ketinggian tiang yang berbeza.',
          'Tiang itu paling panas di bahagian bawah dan paling sejuk di bahagian atas. Molekul lebih ringan (rantai karbon lebih pendek, takat didih lebih rendah) naik lebih tinggi sebelum terkondensasi. Molekul lebih berat terkondensasi lebih rendah di bawah.',
          'Setiap "pecahan" (fraction) yang terkumpul pada ketinggian berbeza menjadi produk berbeza. Sebab itulah satu tong minyak mentah menghasilkan gas memasak, petrol, bahan api jet, diesel, dan asfalt jalan raya serentak — semuanya sedia ada dalam minyak mentah, cuma bercampur.',
          'Minyak ringan manis seperti Tapis menghasilkan lebih banyak pecahan bernilai tinggi (petrol, bahan api jet) bagi setiap tong berbanding minyak berat masam — inilah sebab graviti API dan kandungan sulfur secara langsung mempengaruhi harga.',
        ],
        bullets: [
          'LPG / Gas Kilang — bawah 25 °C — C1–C4 — gas memasak, bahan suapan petrokimia',
          'Petrol (Gasolin) — 40–150 °C — C5–C10 — RON95, RON97 di pam',
          'Nafta — 70–200 °C — C5–C12 — plastik, bahan kimia, pelarut',
          'Kerosin / Bahan Api Jet — 150–300 °C — C10–C16 — penerbangan, pemanasan',
          'Diesel / Gas Minyak — 220–350 °C — C14–C20 — lori, kereta api, penjana',
          'Minyak Bahan Api — 250–500 °C — C20–C70 — kapal, relau industri',
          'Bitumen / Asfalt — melebihi 500 °C — C70+ — permukaan jalan raya',
        ],
        sources: [
          { label: 'Busch Vacuum: Penyulingan Pecahan (EN)', url: 'https://www.buschvacuum.com/en/knowledge/fractional-distillation' },
          { label: 'Crown Oil: Proses Penapisan Minyak (EN)', url: 'https://www.crownoil.co.uk/news/oil-refining-process/' },
        ],
      },
      // ── World Producers ────────────────────────────────────────────────────
      {
        title: 'Siapa keluarkan paling banyak minyak — ranking dunia',
        paragraphs: [
          'Menurut Agensi Maklumat Tenaga AS (EIA), jumlah pengeluaran petroleum global pada 2023 adalah kira-kira 101 juta tong sehari. Amerika Syarikat adalah pengeluar terbesar oleh margin yang besar, diikuti Arab Saudi dan Rusia.',
          '10 pengeluar teratas menyumbang kira-kira 70% daripada keluaran global. OPEC (Pertubuhan Negara-Negara Pengeksport Petroleum) mengurus pengeluaran mereka bersama-sama untuk mempengaruhi harga global — tetapi pengeluar bukan-OPEC seperti AS, Kanada, dan Brazil semakin membentuk pasaran.',
          'Malaysia berada di kedudukan kira-kira ke-29 secara global pada sekitar 0.6 juta tong sehari — pengeluar penting di Asia Tenggara, tetapi sebahagian kecil daripada keluaran dunia. Inilah sebab harga bahan api Malaysia masih sebahagian besarnya mengikut penanda aras minyak mentah global.',
          'Revolusi syel (shale) pada tahun 2010-an mengubah AS daripada pengimport utama kepada pengeluar terbesar di dunia — membuktikan bagaimana teknologi dan pelaburan boleh mengubah landskap pengeluaran dengan cepat.',
        ],
        bullets: [
          '🇺🇸 Amerika Syarikat — 21.9 juta tong/hari — terbesar dunia, didorong oleh minyak syel',
          '🇸🇦 Arab Saudi — 11.1 juta tong/hari — pengeluar terbesar OPEC, jangkar pengeluaran Teluk',
          '🇷🇺 Rusia — 10.8 juta tong/hari — ahli OPEC+, pengeluar bukan-OPEC terbesar selepas AS',
          '🇨🇦 Kanada — 5.8 juta tong/hari — terutamanya pasir minyak (Alberta), minyak berat',
          '🇨🇳 China — 5.3 juta tong/hari — besar tetapi masih pengimport bersih yang utama',
          '🇮🇶 Iraq — 4.4 juta tong/hari — OPEC, simpanan konvensional yang besar',
          '🇧🇷 Brazil — 4.3 juta tong/hari — medan pra-garam air dalam (Petrobras)',
          '🇦🇪 UAE — 4.2 juta tong/hari — OPEC, Abu Dhabi dominan',
          '🇮🇷 Iran — 4.0 juta tong/hari — OPEC, di bawah sekatan yang menghadkan eksport',
          '🇰🇼 Kuwait — 2.9 juta tong/hari — OPEC, negara kecil, simpanan per kapita besar',
          '🇲🇾 Malaysia — 0.6 juta tong/hari — kedudukan ~29, pengeluar utama Asia Tenggara',
        ],
        sources: [
          { label: 'EIA: Pengeluaran Petroleum Dunia 2023', url: 'https://www.eia.gov/international/data/world/petroleum-and-other-liquids/annual-petroleum-and-other-liquids-production' },
          { label: 'EIA: Profil Tenaga Negara', url: 'https://www.eia.gov/international/overview/world' },
        ],
      },
      // ── Existing sections ──────────────────────────────────────────────────
      {
        title: 'Harga minyak ditetapkan oleh pasaran dunia, bukan sesebuah negara',
        paragraphs: [
          'Harga minyak mentah naik turun sebab pedagang, pengilang, syarikat kapal, dan kerajaan bertindak balas kepada satu perkara: betapa ketatnya bekalan global sekarang, dan betapa berisiknya beberapa minggu akan datang.',
          'Agensi Maklumat Tenaga AS (EIA) kenal pasti faktor utama — termasuk harga spot, kuota OPEC, stok inventori, pasaran kewangan, dan permintaan dari negara OECD dan bukan OECD.',
        ],
        sources: [
          { label: 'EIA: Pasaran Kewangan Minyak', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
          { label: 'EIA: Permintaan di Luar OECD', url: 'https://www.eia.gov/finance/markets/crudeoil/demand-nonoecd.php' },
        ],
      },
      {
        title: 'Laluan perkapalan yang sempit boleh naikkan kos dengan cepat',
        paragraphs: [
          'Selat Hormuz adalah contoh terbaik. EIA nyatakan kira-kira 20 juta tong minyak mengalir melalui selat ini setiap hari pada 2024 — lebih kurang satu perlima daripada penggunaan petroleum dunia.',
          'Bila laluan ini nampak terancam, pasaran tidak tunggu sekatan berlaku. Insurans kapal, sewaan kapal tangki, kos gantian, dan spekulasi semuanya naik harga — lama sebelum pemandu rasa kesannya di pam.',
        ],
        sources: [{ label: 'EIA: Analisis Selat Hormuz', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' }],
      },
      {
        title: 'Harga spot, harga hadapan, dan stok tidak bergerak serentak',
        paragraphs: [
          'EIA terangkan bahawa harga semasa dan harga kontrak hadapan bertindak balas berbeza kepada kejutan. Bila pedagang jangka bekalan ketat kemudian, kontrak hadapan naik dahulu. Bila bekalan fizikal terputus sekarang, harga spot boleh melompat serta-merta.',
          'Stok inventori adalah penampan antara dua dunia ini. Stok yang rendah, kapasiti kilang yang terhad, atau gangguan perkapalan semuanya jadikan pasaran lebih sensitif kepada berita.',
        ],
        sources: [
          { label: 'EIA: Pasaran Kewangan', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
          { label: 'EIA: Permintaan OECD', url: 'https://www.eia.gov/finance/markets/crudeoil/demand-oecd.php' },
        ],
      },
      {
        title: 'Malaysia pun terkesan oleh pasaran yang sama',
        paragraphs: [
          'Malaysia pengeluar minyak, tapi itu tidak bermakna harga tempatan terpencil dari harga dunia. Negara kita masih berdagang minyak mentah, produk penapisan, kapasiti kapal, dan tong gantian dalam pasaran global yang sama.',
          'Sebab itu konflik jauh atau gangguan perkapalan boleh tetap mempengaruhi kos gantian domestik, tekanan subsidi, dan masa kemaskini harga setiap minggu.',
        ],
        bullets: [
          'Pergerakan penanda aras global masuk dalam kos penggantian domestik.',
          'Kos perkapalan dan insurans boleh naik walaupun harga minyak mentah tidak berubah.',
          'Pengilang dan pengedar masih beli produk dalam sistem global yang sama.',
        ],
      },
    ],
  },
  malaysia: {
    title: 'Malaysia & Minyak — Gambaran Penuh',
    intro: 'Malaysia mengeluarkan minyak, mengeksport minyak mentah premium, dan masih terlibat dalam pasaran bahan api global yang sama. Inilah kisah sebenar minyak Malaysia — lapangan minyak, Petronas, Tapis, kilang, dan kenapa harga masih berubah-ubah.',
    footnote: 'Intinya bukan Malaysia lemah atau tidak berdaya. Intinya, harga tempatan masih bergantung pada bekalan global, dasar domestik, dan kos tong gantian sebenar.',
    noteTitle: 'Inti Penting',
    sections: [
      // ── Production story ───────────────────────────────────────────────────
      {
        title: 'Kisah pengeluaran minyak Malaysia — puncak dan penurunan',
        paragraphs: [
          'Malaysia mencapai kemuncak pengeluaran minyak kira-kira 862,000 tong sehari (bbl/d) pada tahun 2004, kebanyakannya didorong oleh lapangan air cetek di perairan pantai timur Semenanjung Malaysia — terutamanya sekitar Terengganu.',
          'Sejak itu, keluaran merosot secara berterusan kepada sekitar 597,000 tong sehari pada 2023 — penurunan 31% dari kemuncak. Lapangan matang di Semenanjung menjadi pemangkin utama kemerosotan; pengeluaran di sana merosot kira-kira separuh dalam tempoh sedekad yang lepas.',
          'Industri ini beralih fokus kepada lapangan air dalam yang lebih mencabar secara teknikal di perairan Sabah dan Sarawak. Projek-projek air dalam ini (seperti Gumusut-Kakap dan Kikeh di Sabah) mengekalkan pengeluaran tetapi pada kos lebih tinggi dan kadar lebih perlahan berbanding pembangunan air cetek dulu.',
          'Pada kadar pengeluaran dan tahap simpanan terbukti semasa, Malaysia mempunyai anggaran hayat simpanan minyak sekitar 13 tahun — menjadikan penggantian simpanan dan penerokaan air dalam sebagai keutamaan strategik Petronas.',
        ],
        sources: [
          { label: 'EIA: Analisis Negara Malaysia', url: 'https://www.eia.gov/international/analysis/country/MYS' },
          { label: 'IndexMundi: Pengeluaran Minyak Malaysia', url: 'https://www.indexmundi.com/energy/?country=my&product=oil&graph=production' },
          { label: 'DOSM: Statistik Petroleum S1 2025', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-first-quarter-2025' },
        ],
      },
      // ── Oil fields ─────────────────────────────────────────────────────────
      {
        title: 'Dari mana minyak Malaysia datang — lapangan utama',
        paragraphs: [
          'Semua pengeluaran minyak Malaysia yang signifikan secara komersial adalah di luar pesisir (offshore). Tiada pengeluaran darat yang bererti. Lapangan-lapangan ini tertumpu di tiga kawasan utama Laut China Selatan dan Laut Sulu.',
          'Perairan Terengganu (Pantai Timur Semenanjung): kawasan pengeluaran tertua dan paling matang. Lapangan Tapis — minyak mentah Malaysia yang paling terkenal — terletak di sini, bersama Dulang, Bekok, dan Angsi. Lapangan-lapangan ini merosot tetapi masih mengeluarkan.',
          'Perairan Sabah: kawasan pertumbuhan hadapan. Lapangan air dalam seperti Kikeh (projek air dalam pertama Malaysia oleh Murphy Oil) dan Gumusut-Kakap (Shell/Petronas) mengeluarkan volum yang ketara. Lebih kompleks dan mahal untuk dibangunkan tetapi mempunyai simpanan yang besar.',
          'Perairan Sarawak: didominasi oleh gas asli (kompleks LNG Bintulu antara yang terbesar di dunia), tetapi juga ada pengeluaran minyak dari lapangan seperti Dulang dan Jintan. Lapangan gas Cakerawala merentasi sempadan Malaysia-Thailand.',
        ],
        bullets: [
          'Perairan Terengganu — Tapis, Dulang, Bekok, Angsi — matang, minyak ringan manis, merosot',
          'Perairan Sabah — Kikeh, Gumusut-Kakap, Malikai — air dalam, kawasan pertumbuhan',
          'Perairan Sarawak — Jintan, Cakerawala (gas), Karig — campuran minyak dan gas',
          'Tiada lapangan minyak darat yang signifikan — Malaysia sepenuhnya di luar pesisir',
        ],
        sources: [
          { label: 'EIA: Analisis Negara Malaysia', url: 'https://www.eia.gov/international/analysis/country/MYS' },
          { label: 'Petronas: Gambaran Operasi', url: 'https://www.petronas.com/what-we-do' },
        ],
      },
      // ── Tapis ──────────────────────────────────────────────────────────────
      {
        title: 'Minyak Tapis — gred premium penanda aras Malaysia',
        paragraphs: [
          'Minyak Tapis, dihasilkan dari lapangan Tapis di perairan Terengganu, adalah antara gred minyak mentah paling bernilai di Asia-Pasifik. Dengan graviti API sekitar 45° dan kandungan sulfur hanya 0.04%, ia diklasifikasikan sebagai sangat ringan dan ultra-manis — lebih ringan dan manis daripada Brent, WTI, atau Dubai.',
          'Disebabkan kualiti ini, Tapis secara sejarah berfungsi sebagai penanda aras minyak ringan manis untuk penetapan harga Asia-Pasifik — serupa dengan peranan yang dimainkan Brent di peringkat global. Kilang-kilang di Jepun, Korea Selatan, Singapura, dan Australia lama bersaing untuk membeli Tapis kerana ia menghasilkan lebih banyak petrol, bahan api jet, dan diesel bagi setiap tong berbanding gred yang lebih berat.',
          'Ironinya bagi pengguna Malaysia: Malaysia mengeksport Tapis pada harga premium dan pada masa yang sama mengimport minyak masam yang lebih berat dan murah (selalunya dari Timur Tengah) untuk kilang domestiknya. Ini adalah keputusan ekonomi yang disengaja — jual produk premium pada harga terbaik sambil memproses gred yang lebih murah untuk pasaran domestik. Ia masuk akal dari segi kewangan tetapi bermakna bahan api di pam Malaysia tidak diproses dari minyak premium Tapis Malaysia.',
        ],
        bullets: [
          'Graviti API: 45° — sangat ringan (WTI: 39.6°, Brent: 38.0°)',
          'Sulfur: 0.04% — ultra-manis (WTI: 0.24%, Brent: 0.37%)',
          'Peranan: Penanda aras harga minyak ringan manis Asia-Pasifik',
          'Destinasi: Kilang Jepun, Korea Selatan, Singapura, Australia',
          'Ironi: Dieksport dengan harga premium; kilang domestik guna minyak mentah import yang lebih murah',
        ],
        sources: [
          { label: 'OilPriceAPI: Profil Minyak Tapis (EN)', url: 'https://oilpriceapi.com/blog/crude-oil-benchmarks' },
          { label: 'EIA: Penanda Aras Minyak Mentah Asia-Pasifik (EN)', url: 'https://www.eia.gov/finance/markets/crudeoil/' },
        ],
      },
      // ── Petronas ───────────────────────────────────────────────────────────
      {
        title: 'Petronas — syarikat minyak nasional Malaysia',
        paragraphs: [
          'Petronas (Petroliam Nasional Berhad) ditubuhkan pada 1974 di bawah Akta Pembangunan Petroleum, yang memberikan syarikat nasional ini pemilikan ke atas semua sumber petroleum Malaysia. Ini bermakna setiap tong minyak atau kaki padu gas yang diekstrak di Malaysia adalah sumber milik Petronas secara undang-undang — syarikat antarabangsa seperti Shell, ExxonMobil, dan Murphy Oil beroperasi sebagai rakan Kontrak Perkongsian Pengeluaran (PSC), melabur modal dan kepakaran sebagai pertukaran untuk bahagian pengeluaran, manakala Petronas mengekalkan pemilikan sumber.',
          'Petronas adalah penyumbang terbesar tunggal kepada hasil pendapatan kerajaan persekutuan Malaysia. Pada 2023, ia membayar dividen RM 40 bilion kepada kerajaan — kira-kira 19–20% daripada jumlah hasil persekutuan. Pada 2022, angka itu ialah RM 50 bilion (28–31% daripada hasil persekutuan), mencerminkan harga minyak global yang lebih tinggi pada tahun itu.',
          'Selain pengeluaran huluan, Petronas mengoperasikan kemudahan eksport LNG terbesar Malaysia di Bintulu, Sarawak (antara yang terbesar di dunia), menjalankan peruncitan domestik melalui Petronas Dagangan, memiliki MISC (syarikat perkapalan global), dan beroperasi antarabangsa di lebih 30 negara.',
        ],
        bullets: [
          'Ditubuhkan: 1974 (Akta Pembangunan Petroleum — Tun Abdul Razak)',
          'Status undang-undang: Memiliki 100% semua sumber petroleum Malaysia',
          'Dividen: RM 40B (2023) = ~20% hasil persekutuan; RM 50B (2022) = ~31%',
          'LNG Bintulu: Antara kompleks eksport LNG terbesar di dunia',
          'Antarabangsa: Operasi di lebih 30 negara',
          'Model PSC: IOC melabur dan beroperasi; Petronas kekalkan pemilikan sumber',
        ],
        sources: [
          { label: 'Laporan Bersepadu PETRONAS 2023', url: 'https://www.petronas.com/investor-relations/annual-report' },
          { label: 'MOF Malaysia: Hasil Persekutuan 2023', url: 'https://www.mof.gov.my/portal/en/' },
        ],
      },
      // ── Refineries ─────────────────────────────────────────────────────────
      {
        title: 'Kilang minyak Malaysia — adakah kita proses minyak sendiri?',
        paragraphs: [
          'Malaysia mempunyai empat kilang utama dengan kapasiti penyulingan gabungan kira-kira 530,000 tong sehari. Yang terbesar dan terbaru ialah kompleks RAPID di Pengerang, Johor — kompleks kilang dan petrokimia bersepadu yang besar yang dibangunkan sebagai usaha sama antara Petronas dan Saudi Aramco, direka untuk mengendalikan 300,000 tong sehari.',
          'Penggunaan bahan api domestik Malaysia adalah sekitar 600,000–650,000 tong sehari produk petroleum, yang bermakna negara adalah pengimport bersih produk petroleum — kilang-kilang tidak menampung permintaan domestik sepenuhnya.',
          'Penting untuk diperhatikan, kilang-kilang Malaysia terutamanya memproses minyak mentah sederhana dan berat masam dari Timur Tengah, bukan Tapis. Ini kerana peralatan kilang direka dan dioptimumkan untuk jenis minyak mentah tertentu — kilang RAPID, misalnya, direka untuk mengendalikan gred Arab dalam perkongsian dengan Aramco. Mengimport minyak mentah yang lebih berat pada harga diskaun sambil mengeksport Tapis premium masuk akal dari segi ekonomi bagi kunci kira-kira Petronas, tetapi bermakna bekalan bahan api domestik masih terikat secara global.',
        ],
        bullets: [
          'RAPID Pengerang (Johor): 300,000 tong/hari — Petronas + Aramco — proses gred Timur Tengah',
          'Kilang Melaka: ~100,000 tong/hari — Petronas — kilang utama tertua',
          'Port Dickson (Negeri Sembilan): ~88,000 tong/hari — Petronas PRPC',
          'Kerteh (Terengganu): ~40,000 tong/hari — kondensat gas, produk khusus',
          'Jumlah kapasiti: ~530,000 tong/hari vs permintaan ~630,000 tong/hari → pengimport bersih',
          'Perkara utama: RON95 di pam mungkin diproses dari minyak mentah import Timur Tengah, bukan Tapis Malaysia',
        ],
        sources: [
          { label: 'EIA: Analisis Negara Malaysia', url: 'https://www.eia.gov/international/analysis/country/MYS' },
          { label: 'PETRONAS: RAPID Pengerang', url: 'https://www.petronas.com/what-we-do/downstream' },
        ],
      },
      // ── Existing sections ──────────────────────────────────────────────────
      {
        title: 'Malaysia bukan sekadar negara minyak',
        paragraphs: [
          'Rekod KDNK dari Jabatan Perangkaan Malaysia (DOSM) tunjukkan sektor perkhidmatan dan pembuatan adalah tunjang utama ekonomi. Ini sebab hujah "Malaysia keluarkan minyak, jadi minyak mesti murah selalu" terlalu mudah dan tidak tepat.',
          'Ekonomi kita luas, dan dasar bahan api kena imbang keperluan pengguna, keupayaan fiskal, dan permintaan industri pada masa yang sama.',
        ],
        sources: [{ label: 'Laporan KDNK DOSM 2024', url: 'https://v2.dosm.gov.my/portal-main/release-content/gross-domestic-product-gdp-by-state-2024' }],
      },
      {
        title: 'Malaysia eksport minyak mentah, tapi juga import minyak mentah dan produk penapisan',
        paragraphs: [
          'Statistik petroleum DOSM tunjukkan Malaysia eksport minyak mentah dan kondensat, tapi ia juga import minyak mentah, kondensat, dan produk petroleum penapisan. Ini biasa untuk ekonomi yang berkaitan dengan penapisan dan perdagangan.',
          'Yang penting bukan sama ada Malaysia keluarkan minyak secara umum. Yang penting ialah sama ada gred, produk, dan masa yang diperlukan oleh pasaran domestik tersedia pada kos yang munasabah.',
        ],
        sources: [
          { label: 'DOSM Petroleum S1 2025', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-first-quarter-2025' },
          { label: 'DOSM Petroleum S4 2025', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-q42025' },
        ],
      },
      {
        title: 'Subsidi ada had, bukan tanpa had',
        paragraphs: [
          'Kemaskini MOF April 2026 kekalkan harga RON95 bersubsidi pada RM1.99 seliter di bawah BUDI95, dengan had sementara 200 liter sebulan, dan peraturan khas untuk kes tertentu seperti e-hailing.',
          'Ini realiti dasar yang penting: harga pam ada subsidi, tapi kerajaan masih kira kos setiap liter melalui sistem sokongan bersasar.',
        ],
        bullets: [
          'Had umum BUDI95: 200 liter sebulan.',
          'Tier e-hailing: sehingga 800 liter sebulan untuk pemandu layak.',
          'Sokongan diesel masih dibezakan mengikut wilayah dan kelayakan.',
        ],
        sources: [
          { label: 'MOF: Pengekalan Harga April', url: 'https://www.mof.gov.my/portal/en/news/press-citations/govt-maintains-subsidised-prices-amid-global-oil-market-volatility' },
          { label: 'MOF: Had 200 liter BUDI95', url: 'https://www.mof.gov.my/portal/en/news/press-citations/claims-of-additional-budi95-subsidy-application-untrue-200-litre-monthly-limit-remains-mof' },
          { label: 'MOF: Tier E-hailing', url: 'https://mof.gov.my/portal/en/news/press-citations/budi95-tiered-eligibility-for-e-hailing-drivers-to-be-activated-mid-month-mof' },
        ],
      },
    ],
  },
  myths: {
    title: 'Mitos & Fakta',
    intro: 'Kad ringkas dengan sumber. Tenang, terus, dan senang dikongsi.',
    cards: [
      {
        myth: '"Malaysia keluarkan minyak, jadi petrol patut murah je."',
        fact: 'Malaysia masih terlibat dalam perdagangan minyak mentah dan produk penapisan global, dan harga domestik terdedah kepada kos gantian, margin penapisan, logistik, dan dasar subsidi.',
        whyItMatters: 'Ini hujah paling biasa disebalik tular berkaitan bahan api. Kedengaran logik, tapi ia abaikan cara kerja sebenar pengedaran komoditi dan penetapan harga pasaran.',
        sources: [
          { label: 'Statistik Petroleum DOSM', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-first-quarter-2025' },
          { label: 'EIA: Pasaran Kewangan', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
        ],
      },
      {
        myth: '"Harga minyak dunia turun semalam, kenapa harga pam tak turun harini?"',
        fact: 'MOF nyatakan bahawa harga runcit Malaysia dikira berdasarkan purata kos minggu lepas, jadi pergerakan pasaran hari ini tidak akan terus tercermin pada harga harini.',
        whyItMatters: 'Sebab tu ramai nampak minyak dunia turun dalam berita tapi anggap kerajaan sembunyikan bahan api yang lebih murah.',
        sources: [{ label: 'MOF: Penjelasan Lag Harga Pam', url: 'https://www.mof.gov.my/portal/en/news/press-citations/mof-pump-fuel-prices-reflect-last-weeks-costs-despite-global-drop' }],
      },
      {
        myth: '"Subsidi boleh tanggung apa saja, selama-lamanya."',
        fact: 'Sistem semasa adalah bersasar. MOF telah ketatkan had BUDI95 untuk sementara dan kekalkan kuota khas untuk kategori tertentu, bukannya sokong secara menyeluruh dan tanpa had.',
        whyItMatters: 'Kalau perbincangan subsidi abaikan had fiskal, perdebatan jadi tidak realistik dan bukan dasar.',
        sources: [
          { label: 'MOF: Pengekalan Harga April', url: 'https://www.mof.gov.my/portal/en/news/press-citations/govt-maintains-subsidised-prices-amid-global-oil-market-volatility' },
          { label: 'MOF: Had 200 Liter', url: 'https://www.mof.gov.my/portal/en/news/press-citations/claims-of-additional-budi95-subsidy-application-untrue-200-litre-monthly-limit-remains-mof' },
        ],
      },
      {
        myth: '"Negara pengeluar minyak tak akan terkesan oleh krisis geopolitik."',
        fact: 'Analisis EIA tentang Selat Hormuz tunjukkan bahawa walaupun titik sekatan jauh dari Malaysia, ia boleh langsung naikkan harga insurans global, sewaan kapal, dan kos barangan seluruh dunia.',
        whyItMatters: 'Malaysia berada dalam sistem komoditi yang sama dengan semua negara lain. Jarak hanya tentukan tahap kesan, bukan hapuskan kesan.',
        sources: [{ label: 'EIA: Analisis Selat Hormuz', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' }],
      },
      {
        myth: '"Minyak dunia akan habis pada tahun [X] — tamadun akan runtuh."',
        fact: 'Simpanan minyak terbukti global hari ini lebih tinggi berbanding 1980, walaupun selepas 45 tahun penggunaan besar-besaran. Anggaran tarikh kepupusan minyak telah ditolak balik beberapa dekad kerana teknologi penerokaan baru, harga lebih tinggi yang mengklasifikasi semula simpanan, dan perubahan permintaan yang terus mengubah gambaran.',
        whyItMatters: 'Isu sebenar bukan tebing terjun mendadak — pengeluaran minyak akan mendatar dan menjadi semakin mahal untuk diekstrak. Alternatif akan mengisi jurang itu secara beransur-ansur melalui isyarat harga. Risiko yang perlu difokuskan adalah perubahan iklim dan peralihan tenaga, bukan senario pam kosong secara tiba-tiba.',
        sources: [
          { label: 'Britannica: Puncak Minyak (Peak Oil)', url: 'https://www.britannica.com/science/peak-oil' },
          { label: 'EIA: Sejarah Pengeluaran Minyak AS (EN)', url: 'https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?n=PET&s=MCRFPUS2&f=A' },
          { label: 'BP Statistical Review of World Energy (EN)', url: 'https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy.html' },
        ],
      },
      {
        myth: '"Syarikat minyak Barat yang besar memiliki dan mengawal semua minyak dunia."',
        fact: 'Kira-kira 70–75% simpanan minyak terbukti global dikawal oleh Syarikat Minyak Nasional (NOC) milik kerajaan — Saudi Aramco, ADNOC (UAE), NIOC (Iran), Petronas (Malaysia), PDVSA (Venezuela), dan lain-lain. Syarikat Minyak Antarabangsa (IOC) Barat seperti Shell, ExxonMobil, dan BP secara kolektif menguasai kurang daripada 15% simpanan global.',
        whyItMatters: 'Di Malaysia, Petronas memiliki 100% sumber petroleum secara undang-undang. Apabila harga RON95 naik, bukan kerana Shell memutuskan — ia kerana dasar subsidi kerajaan berubah berlatarbelakangkan harga minyak mentah global. Mengetahui siapa yang sebenarnya memiliki minyak menjelaskan siapa yang sebenarnya mengawal keputusan penetapan harga bahan api.',
        sources: [
          { label: 'BP Statistical Review: Pemilikan Simpanan (EN)', url: 'https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy.html' },
          { label: 'Council on Foreign Relations: NOC vs IOC (EN)', url: 'https://www.cfr.org/backgrounder/national-oil-companies' },
          { label: 'Akta Pembangunan Petroleum 1974 (Petronas)', url: 'https://www.petronas.com/about/company-profile' },
        ],
      },
    ],
  },
  sources: {
    title: 'Sumber Maklumat & Kaedah',
    intro: 'WhatTheFuel guna sumber yang terhad dan hanya terbitkan apa yang boleh dikesan.',
    updateTitle: 'Cara Kemaskini',
    updateBody: 'Berita dikemaskini dari sumber yang diluluskan. Entri garis masa dan penerangan dikurasi dan hanya dikemaskini bila ada sumber yang boleh disandarkan.',
    sourceTitle: 'Sumber Maklumat',
    sourceBody: 'Halaman dasar kerajaan Malaysia, statistik rasmi, data tenaga global, dan media berita terpilih digabungkan dalam satu laman yang mudah dibaca.',
    noteTitle: 'Apa yang kami tidak terbitkan',
    noteBody: 'Tiada kad harga tanpa sumber, tiada entri pengisi, dan tiada tuntutan yang kelihatan kemas tapi tidak boleh dikesan.',
    sourceGroups: [
      { name: 'Kementerian Kewangan Malaysia', purpose: 'Penetapan harga bahan api, dasar subsidi, peraturan kuota, dan kenyataan rasmi', url: 'https://www.mof.gov.my/portal/en/' },
      { name: 'Jabatan Perangkaan Malaysia (DOSM)', purpose: 'Data ekonomi dan perdagangan petroleum yang digunakan dalam penerangan', url: 'https://www.dosm.gov.my/portal-main/' },
      { name: 'Free Malaysia Today (FMT)', purpose: 'Liputan nasional, perniagaan, dan dunia Malaysia', url: 'https://www.freemalaysiatoday.com/' },
      { name: 'Malay Mail', purpose: 'Laporan Malaysia dan dunia berkaitan bahan api', url: 'https://www.malaymail.com/' },
      { name: 'Berita RTM', purpose: 'Liputan kebangsaan berbahasa Melayu', url: 'https://berita.rtm.gov.my/' },
      { name: 'Sin Chew Daily', purpose: 'Laporan Malaysia berbahasa Cina', url: 'https://www.sinchew.com.my/' },
      { name: 'Sinar Premium', purpose: 'Liputan Melayu berkaitan bahan api', url: 'https://premium.sinarharian.com.my/' },
      { name: 'U.S. Energy Information Administration (EIA)', purpose: 'Struktur pasaran minyak global, titik sempadan, harga, dan mekanisme pasaran', url: 'https://www.eia.gov/' },
      { name: 'Penn State EARTH 104', purpose: 'Pembentukan geologi petroleum — proses asal usul dan pembentukan', url: 'https://www.e-education.psu.edu/earth104/' },
      { name: 'BP Statistical Review of World Energy', purpose: 'Pemilikan simpanan global, ranking pengeluaran, dan data peralihan tenaga', url: 'https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy.html' },
      { name: 'BBC News, Reuters, dan media lain yang disemak', purpose: 'Laporan bahan api, minyak, perkapalan, dan tenaga secara langsung' },
    ],
  },
};
