import type { EditorialCopy } from './editorial';

export const ms: EditorialCopy = {
  home: {
    eyebrow: 'Harga Bahan Api dengan Sumber Rasmi',
    title: 'WhatTheFuel — fakta, bukan perasan.',
    subtitle: 'Harga bahan api sahih, garis masa ringkas, dan penerangan pasaran tenaga global dalam bahasa mudah.',
    disclaimer: 'Projek pendidikan bebas. Kami menyusun harga, penerangan, dan pautan sumber rasmi; kami tidak mengeluarkan harga rasmi atau laporan berita asal.',
    latestTitle: 'Snapshot Bahan Api Terkini',
    latestSubtitle: 'Harga semasa dan garis subsidi berpandukan sumber rasmi.',
    pricesLabel: 'Harga',
    newsLabel: 'Berita',
    loadingPrices: 'Muat turun data harga sahih.',
    emptyNews: 'Tiada berita buat masa ini.',
  },
  understanding: {
    title: 'Fahami Angka Ini',
    intro: 'Panduan ringkas tentang label harga dan perbezaan mengikut wilayah.',
    cards: [
      { title: 'Kenapa RON95 tetap', body: 'Kerajaan menetapkan harga runcit bersubsidi untuk memastikan kestabilan harga bagi orang awam tanpa mengira turun naik pasaran.' },
      { title: 'Kenapa RON97 berubah mingguan', body: 'Harga RON97 ditentukan oleh pasaran dan mengikut kitaran harga mingguan berdasarkan pergerakan minyak mentah global.' },
      { title: 'Kenapa diesel berbeza wilayah', body: 'Semenanjung dan Malaysia Timur beroperasi di bawah kerangka harga dan struktur sokongan yang berasingan.' },
      { title: 'Apa maksud "tanpa subsidi"', body: 'Ini adalah harga rujukan pasaran sebelum sebarang sokongan kerajaan diberikan, menunjukkan kos sebenar bahan api tersebut.' },
      { title: 'Kenapa label ini penting', body: 'Satu pam boleh menunjukkan pelbagai titik harga (awam, rujukan, wilayah). Memahami perbezaan ini mengelakkan perbandingan yang salah.' },
    ],
  },
  global: {
    title: 'Minyak 101: Bagaimana Minyak Mentah Berfungsi',
    intro: 'Tinjauan tentang proses pembentukan minyak, penilaian gred, dan transformasinya menjadi bahan api di kenderaan anda.',
    footnote: 'Halaman ini menerangkan mekanisme global. Masa perubahan harga tempatan bergantung kepada dasar domestik dan logistik.',
    noteTitle: 'Nota',
    sections: [
      {
        title: 'Bagaimana minyak mentah terbentuk — kisah 300 juta tahun',
        paragraphs: [
          'Minyak mentah adalah bahan api fosil yang terbentuk daripada sisa organisma laut mikroskopik (plankton) yang hidup ratusan juta tahun dahulu. Sisa ini tertimbus di bawah lapisan sedimen di dasar lautan purba.',
          'Selama jutaan tahun, haba dan tekanan tinggi menukarkan bahan organik ini menjadi kerogen, yang akhirnya "pecah" menjadi minyak cair dan gas. Proses geologi yang lama ini menjadikan minyak sumber yang tidak boleh diperbaharui.',
        ],
        sources: [
          { label: 'Penn State EARTH 104', url: 'https://www.e-education.psu.edu/earth104/node/2215' },
          { label: 'EnergyEducation.ca', url: 'https://energyeducation.ca/encyclopedia/Petroleum_formation' },
        ],
      },
      {
        title: 'Kualiti minyak mentah — manis vs masam, ringan vs berat',
        paragraphs: [
          'Minyak mentah digredkan mengikut ketumpatan (Graviti API) dan kandungan sulfur. Minyak ringan lebih mudah mengalir dan menghasilkan produk bernilai tinggi seperti petrol. Minyak "manis" mempunyai sulfur rendah, menjadikannya lebih murah dan bersih untuk ditapis.',
          'Minyak Tapis Malaysia adalah ultra-ringan dan ultra-manis, menjadikannya salah satu penanda aras paling bernilai di dunia. Tapis sering didagangkan pada harga premium berbanding Brent atau WTI kerana kualitinya yang unggul.',
        ],
        bullets: [
          'Ringan & Manis: Nilai tertinggi, kos penapisan rendah (cth: Tapis, WTI, Brent).',
          'Sederhana & Masam: Kos penapisan sederhana (cth: Dubai crude).',
          'Berat: Nilai terendah, memerlukan penapisan intensif (cth: Venezuelan heavy).',
        ],
        sources: [
          { label: 'EIA: Gred Minyak Mentah', url: 'https://www.eia.gov/petroleum/data.php#crude' },
          { label: 'EIA: Penanda Aras Global', url: 'https://www.eia.gov/finance/markets/crudeoil/' },
        ],
      },
      {
        title: 'Bagaimana minyak mentah ditapis — menara penyulingan',
        paragraphs: [
          'Penapisan mengasingkan minyak mentah melalui penyulingan pecahan. Minyak dipanaskan dan dimasukkan ke dalam menara di mana molekul berbeza terkondensasi pada ketinggian berbeza mengikut takat didihnya.',
          'Molekul ringan naik ke atas sebagai petrol dan gas, manakala molekul berat mendap di bawah sebagai minyak bahan api atau bitumen. Satu tong minyak mentah menghasilkan pelbagai produk serentak.',
        ],
        bullets: [
          'Atas: LPG dan Petrol (RON95/97).',
          'Tengah: Kerosin (Bahan Api Jet) dan Diesel.',
          'Bawah: Minyak Bahan Api dan Bitumen (Asfalt).',
        ],
        sources: [
          { label: 'EIA: Penerangan Penapisan', url: 'https://www.eia.gov/energyexplained/oil-and-petroleum-products/refining-crude-oil-fractions.php' },
          { label: 'Crown Oil: Proses Penapisan', url: 'https://www.crownoil.co.uk/guides/oil-refining-process-guide/' },
        ],
      },
      {
        title: 'Siapa pengeluar minyak terbesar — ranking global',
        paragraphs: [
          'Pengeluaran global didominasi oleh AS, Arab Saudi, dan Rusia. Pengeluar utama ini, bersama ahli OPEC, menguruskan tahap keluaran untuk mempengaruhi harga global. Revolusi "shale" AS menjadikannya pengeluar terbesar dunia baru-baru ini.',
          'Malaysia berada di kedudukan kira-kira ke-29 global. Walaupun merupakan pengeluar serantau yang penting, keluarannya kecil berbanding jumlah dunia. Sebab itu harga bahan api Malaysia tetap terikat kepada penanda aras global.',
        ],
        bullets: [
          '🇺🇸 AS: ~22 mb/d (Terbesar di dunia).',
          '🇸🇦 Arab Saudi: ~11 mb/d (Jangkar OPEC).',
          '🇷🇺 Rusia: ~11 mb/d (Ketua OPEC+).',
          '🇲🇾 Malaysia: ~0.6 mb/d (Pemain serantau).',
        ],
        sources: [
          { label: 'Data Pengeluaran EIA 2023', url: 'https://www.eia.gov/international/data/world/petroleum-and-other-liquids/annual-petroleum-and-other-liquids-production' },
        ],
      },
      {
        title: 'Minyak dinilai secara global, bukan setempat',
        paragraphs: [
          'Harga minyak mentah bertindak balas terhadap kekurangan bekalan global dan risiko geopolitik. Pedagang dan penapis bertindak mengikut isyarat pasaran merangkumi harga spot, tahap inventori, dan pasaran kewangan secara serentak.',
        ],
        sources: [{ label: 'Tinjauan Pasaran EIA', url: 'https://www.eia.gov/finance/markets/crudeoil/reports_and_analysis.php' }],
      },
      {
        title: 'Titik sekatan menukarkan ketegangan menjadi kos perkapalan',
        paragraphs: [
          'Laluan perkapalan kritikal seperti Selat Hormuz mengendalikan 20% minyak global. Sebarang ancaman terhadap laluan ini menyebabkan kos pengangkutan dan insurans naik serta-merta, walaupun sebelum gangguan fizikal berlaku.',
        ],
        sources: [{ label: 'Analisis Laluan EIA', url: 'https://www.eia.gov/international/analysis/special-topics/World_Oil_Transit_Chokepoints' }],
      },
      {
        title: 'Harga spot, hadapan, dan inventori',
        paragraphs: [
          'Pasaran mengimbangkan bekalan fizikal semasa (harga spot) dengan jangkaan masa depan (harga hadapan). Inventori yang rendah mengurangkan penampan pasaran, menjadikan harga lebih sensitif terhadap berita global.',
        ],
        sources: [{ label: 'Pasaran Kewangan EIA', url: 'https://www.eia.gov/finance/markets/crudeoil/reports_and_analysis.php' }],
      },
      {
        title: 'Malaysia tetap terkesan oleh pasaran yang sama',
        paragraphs: [
          'Walaupun sebagai pengeluar, Malaysia tidak terasing. Kita berdagang minyak mentah, produk siap, dan kapasiti perkapalan dalam sistem global. Konflik di tempat lain tetap memberi kesan kepada kos domestik dan tekanan subsidi.',
        ],
        bullets: [
          'Pergerakan penanda aras global menentukan kos penggantian.',
          'Kos perkapalan dan insurans terikat secara global.',
          'Penapis beroperasi dalam struktur harga antarabangsa.',
        ],
      },
    ],
  },
  malaysia: {
    title: 'Malaysia & Minyak — Gambaran Penuh',
    intro: 'Malaysia mengeluarkan dan mengeksport minyak mentah premium namun kekal sebagai peserta dalam pasaran global. Inilah cara industri minyak kita beroperasi.',
    footnote: 'Penetapan harga tempatan adalah imbangan antara bekalan global, dasar domestik, dan kos penggantian bahan api.',
    noteTitle: 'Inti Penting',
    sections: [
      {
        title: "Kisah pengeluaran Malaysia — puncak dan penurunan",
        paragraphs: [
          'Pengeluaran memuncak pada tahun 2004 dengan kira-kira 862,000 tong sehari. Keluaran sejak itu menurun ke paras 600,000 tong sehari berikutan lapangan air cetek di pantai timur Semenanjung yang semakin matang.',
          'Pelaburan kini beralih ke lapangan air dalam yang kompleks di Sabah dan Sarawak. Projek ini mengekalkan pengeluaran tetapi melibatkan kos lebih tinggi dan kitaran pembangunan yang lebih lama.',
        ],
        sources: [{ label: 'Profil EIA Malaysia', url: 'https://www.eia.gov/international/analysis/country/MYS' }],
      },
      {
        title: "Dari mana minyak Malaysia datang — lapangan utama",
        paragraphs: [
          'Kesemua pengeluaran signifikan Malaysia adalah di luar pesisir (offshore). Industri beroperasi di tiga wilayah utama: Laut China Selatan (Terengganu), serta kawasan air dalam Sabah dan Sarawak.',
          'Semenanjung merupakan kawasan matang, manakala Sabah menjadi sempadan pertumbuhan baru dengan projek air dalam besar seperti Gumusut-Kakap.',
        ],
        bullets: [
          'Luar Pesisir Terengganu: Matang, minyak mentah ringan manis (Tapis).',
          'Luar Pesisir Sabah: Projek pertumbuhan air dalam (Kikeh, Malikai).',
          'Luar Pesisir Sarawak: Pengeluaran utama gas asli and minyak.',
        ],
        sources: [{ label: 'Portfolio Petronas', url: 'https://www.petronas.com/what-we-do/upstream' }],
      },
      {
        title: 'Minyak Tapis — Penanda aras premium Malaysia',
        paragraphs: [
          'Minyak Tapis adalah ultra-ringan dan ultra-manis, antara kualiti tertinggi di Asia. Ia menghasilkan lebih banyak petrol dan bahan api jet, menjadikannya sering didagangkan pada harga premium berbanding Brent.',
          'Fakta Ekonomi: Malaysia mengeksport Tapis untuk pulangan tinggi dan mengimport minyak mentah "sour" yang lebih murah untuk kegunaan kilang tempatan. Ini bermakna petrol di pam kita sering ditapis daripada minyak import Timur Tengah.',
        ],
        bullets: [
          'Kualiti Tinggi: Sulfur sangat rendah (0.04%) dan sangat ringan (45° API).',
          'Eksport Strategik: Dijual sebagai penanda aras premium Asia-Pasifik.',
          'Realiti Penapisan: Kilang tempatan dioptimumkan untuk gred import yang lebih berat.',
        ],
        sources: [{ label: 'Penanda Aras EIA', url: 'https://www.eia.gov/finance/markets/crudeoil/reports_and_analysis.php' }],
      },
      {
        title: 'Petronas — Syarikat Minyak Nasional',
        paragraphs: [
          'Ditubuhkan pada 1974, Petronas memiliki kesemua sumber petroleum Malaysia. Syarikat antarabangsa beroperasi di sini di bawah Kontrak Perkongsian Pengeluaran (PSC), berkongsi kepakaran dan modal.',
          'Petronas adalah tonggak fiskal utama, menyumbang 20% ke 30% daripada jumlah hasil kerajaan persekutuan melalui dividen dan cukai, bergantung kepada harga minyak global.',
        ],
        bullets: [
          'Peranan: Pemilik sumber dan jangkar fiskal negara.',
          'Hasil: Dividen tahunan RM 40B+ kepada kerajaan (2023).',
          'Jangkauan Global: Beroperasi di lebih 30 negara dengan fasiliti LNG bertaraf dunia.',
        ],
        sources: [{ label: 'Laporan Kewangan Petronas', url: 'https://www.petronas.com/investor-relations/reports-results' }],
      },
      {
        title: "Kilang penapisan Malaysia — Kapasiti domestik",
        paragraphs: [
          'Malaysia mengendalikan empat kilang penapisan utama, termasuk kompleks RAPID di Pengerang (JV dengan Saudi Aramco). Jumlah kapasiti adalah kira-kira 530,000 tong sehari.',
          'Walaupun begitu, Malaysia tetap menjadi pengimport bersih produk siap kerana permintaan domestik (~600k+ tong sehari) melebihi keluaran kilang. Kilang kita juga dikhususkan untuk memproses gred Timur Tengah.',
        ],
        bullets: [
          'RAPID Pengerang: Kapasiti 300,000 tong sehari (Petronas + Aramco).',
          'Pengimport Bersih: Penggunaan domestik melebihi jumlah keluaran penapisan.',
          'Pautan Harga: Kos dan margin penapisan kekal terikat dengan pasaran global.',
        ],
        sources: [{ label: 'Bahagian Hiliran Petronas', url: 'https://www.petronas.com/what-we-do/downstream' }],
      },
      {
        title: 'Subsidi adalah bersasar, bukan tanpa had',
        paragraphs: [
          'Kerajaan menguruskan harga runcit melalui sistem sokongan bersasar seperti BUDI95. Ini mengimbangkan kemampuan rakyat dengan tanggungjawab fiskal negara.',
          'Dasar semasa mengekalkan harga tetap untuk RON95 dalam had penggunaan tertentu, dengan struktur sokongan berbeza untuk diesel dan Malaysia Timur.',
        ],
        bullets: [
          'BUDI95: Sistem subsidi RON95 bersasar.',
          'Pengurusan Kuota: Had bulanan untuk mengawal pendedahan fiskal.',
          'Sokongan Wilayah: Kerangka berbeza untuk Sabah dan Sarawak.',
        ],
        sources: [{ label: 'Arkib Kenyataan MOF', url: 'https://www.mof.gov.my/portal/en/news/press-citations/' }],
      },
    ],
  },
  myths: {
    title: 'Mitos vs Fakta',
    intro: 'Jawapan terus kepada kekeliruan lazim mengenai bahan api.',
    cards: [
      {
        myth: '"Malaysia keluarkan minyak, jadi petrol patut sentiasa murah."',
        fact: 'Kita berdagang dalam sistem global. Kita mengeksport minyak premium dan mengimport minyak lebih murah untuk ditapis. Harga tempatan tetap terdedah kepada kos penggantian global.',
        whyItMatters: 'Mengabaikan realiti dagangan global membawa kepada jangkaan yang tidak realistik terhadap harga pam.',
        sources: [{ label: 'Statistik DOSM', url: 'https://www.dosm.gov.my/portal-main/' }],
      },
      {
        myth: '"Harga pam sama dengan harga minyak mentah hari ini."',
        fact: 'Harga runcit mencerminkan purata kos minggu sebelumnya, bukan reaksi masa nyata terhadap berita pasaran hari ini.',
        whyItMatters: 'Sela masa ini menjelaskan kenapa penurunan harga minyak global tidak terus kelihatan di pam pada petang yang sama.',
        sources: [{ label: 'Makluman Harga MOF', url: 'https://www.mof.gov.my/portal/en/news/press-citations/' }],
      },
      {
        myth: '"Subsidi bermaksud kerajaan boleh tanggung sebarang kos tanpa had."',
        fact: 'Subsidi mempunyai kesan fiskal langsung. Sistem seperti BUDI95 menggunakan had dan sasaran untuk memastikan sokongan mampan tanpa menjejaskan bajet negara.',
        whyItMatters: 'Subsidi tanpa had mewujudkan risiko fiskal yang boleh menjejaskan perkhidmatan awam lain.',
        sources: [{ label: 'Bilik Berita MOF', url: 'https://www.mof.gov.my/portal/en/news/press-citations/' }],
      },
      {
        myth: '"Negara pengeluar terlindung daripada gangguan global."',
        fact: 'Titik sekatan dan konflik global menjejaskan kos perkapalan, insurans, dan harga "tong penggantian" yang diperlukan untuk memastikan bekalan di pam sentiasa ada.',
        whyItMatters: 'Menjadi pengeluar membantu, tetapi geografi tidak menghalang pasaran komoditi global daripada menentukan nilai bahan api.',
        sources: [{ label: 'Analisis Laluan EIA', url: 'https://www.eia.gov/international/analysis/special-topics/World_Oil_Transit_Chokepoints' }],
      },
    ],
  },
  sources: {
    title: 'Sumber & Metodologi',
    intro: 'WhatTheFuel menggunakan data sahih daripada organisasi kerajaan dan tenaga global.',
    updateTitle: 'Cara kemaskini',
    updateBody: 'Berita langsung dikemaskini daripada saluran diluluskan. Analisis dan penerangan dikemaskini hanya apabila terdapat data sumber baru.',
    sourceTitle: 'Sumber maklumat',
    sourceBody: 'Kami menggabungkan data dasar Malaysia, statistik rasmi, dan analisis pasaran global ke dalam satu laman yang mudah dibaca.',
    noteTitle: 'Komitmen',
    noteBody: 'Tiada dakwaan tanpa sumber, tiada kandungan pengisi, dan tiada penjejakan harga tanpa bukti.',
    sourceGroups: [
      { name: 'Kementerian Kewangan Malaysia', purpose: 'Dasar harga, subsidi, dan kuota', url: 'https://www.mof.gov.my/portal/en/news/press-citations/' },
      { name: 'Jabatan Perangkaan Malaysia', purpose: 'Data ekonomi dan perdagangan petroleum', url: 'https://www.dosm.gov.my/portal-main/' },
      { name: 'U.S. Energy Information Administration', purpose: 'Struktur dan mekanik pasaran global', url: 'https://www.eia.gov/' },
      { name: 'Petronas', purpose: 'Operasi dan pemilikan sumber nasional', url: 'https://www.petronas.com/' },
      { name: 'Energy Institute', purpose: 'Data pengeluaran dan tenaga global', url: 'https://www.energyinst.org/statistical-review' },
    ],
  },
};
