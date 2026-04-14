import React, { createContext, useContext, useMemo, useState } from 'react';

export type Language = 'en' | 'ms' | 'zh';
type Dict = Record<string, string>;

const translations: Record<Language, Dict> = {
  en: {
    'nav.home': 'Home', 'nav.news': 'News', 'nav.global': 'Global Context', 'nav.malaysia': 'Malaysia Context', 'nav.timeline': 'Timeline', 'nav.myths': 'Myths', 'nav.sources': 'Sources',
    'prices.current_title': 'Current pump prices',
    'prices.context_title': 'Notes, source, and update context',
    'prices.last_updated': 'Last updated',
    'prices.source': 'Source',
    'prices.live_track': 'Live track',
    'prices.source_name': 'Ministry of Finance',
    'prices.track_name': 'Setel',
    'prices.notes_title': 'Notes',
    'prices.petrol_group': 'Petrol',
    'prices.diesel_group': 'Diesel',
    'prices.peninsular_group': 'Peninsular',
    'prices.sabah_sarawak_group': 'Sabah & Sarawak',
    'prices.ron95_subsidised': 'RON95 (subsidised)',
    'prices.ron95_unsubsidised': 'RON95 (unsubsidised)',
    'prices.ron97': 'RON97',
    'prices.diesel_b10_b20': 'Diesel B10/B20',
    'prices.diesel_b7': 'Diesel B7',
    'prices.note.1': 'RON95 subsidised retail price remains fixed.',
    'prices.note.2': 'RON97 is adjusted weekly.',
    'prices.note.3': 'Diesel East Malaysia uses regional fixed pricing.',
    'prices.note.4': 'Unsubsidised values are reference values.',
    'prices.updated': 'Latest update',
    'prices.quota.title': 'Quota and subsidy notes',
    'prices.note': 'Prices shown below are source-backed snapshots from Ministry of Finance releases. Use the source links for the underlying releases.',
    'prices.quota.1': 'General BUDI95 eligibility is temporarily capped at 200 litres per month.',
    'prices.quota.2': 'Qualifying e-hailing drivers can reach up to 800 litres per month under the tiered eligibility rule.',
    'prices.quota.3': 'BUDI Diesel cash assistance remains targeted support rather than a blanket fuel subsidy.',
    'sources.updated': 'Updated',
    'home.error': 'Unable to load verified content right now.',
    'news.title': 'Latest News', 'news.view_all': 'View all', 'news.global': 'Global', 'news.malaysia': 'Malaysia', 'news.page_title': 'News', 'news.page_subtitle': 'Live items show the source headline only. Open the link for the full story.', 'news.refreshed': 'Last refreshed', 'news.read_more': 'Read source', 'news.empty': 'No live items yet for this tab.',
    'news.error': 'Unable to load live news right now.',
    'timeline.title': 'Timeline', 'timeline.subtitle': 'Starts with the first strikes and tracks the major turns that moved oil, shipping, and local pricing.', 'timeline.filter.all': 'All', 'timeline.filter.global': 'Global', 'timeline.filter.malaysia': 'Malaysia', 'timeline.sort.latest': 'Latest first', 'timeline.sort.oldest': 'Oldest first', 'timeline.source': 'Source', 'timeline.why_it_matters': 'Why it matters', 'timeline.empty': 'No timeline entries yet.',
    'timeline.error': 'Unable to load the timeline right now.',
    'sources.title': 'Sources & Methodology', 'sources.subtitle': 'Where the site pulls prices, context, and live updates from.', 'sources.update_title': 'Update cadence', 'sources.source_title': 'Source groups', 'sources.note_title': 'Publishing rule',
    'sources.error': 'Unable to load the methodology page right now.',
    'footer.summary': 'Independent public education project. We organize verified prices, current news, timelines, and source links; we do not publish official prices or original reporting.',
    'footer.legal': 'WhatTheFuel is an independent educational website, not an official government platform, not a licensed price publisher, and not a newsroom. We compile and summarize information from publicly available sources for general information only. Although we try to keep the site accurate and current, we do not guarantee completeness, timeliness, uninterrupted availability, or error-free translation. The English version is the reference version; translations are provided for convenience only. For final official price, policy, subsidy, or legal information, rely on the original source documents and the relevant Malaysian authorities. To the fullest extent permitted by law, WhatTheFuel and its contributors disclaim liability for losses, decisions, or actions taken in reliance on this site.',
    'myths.why_it_matters': 'Why it matters'
  },
  ms: {
    'nav.home': 'Utama', 'nav.news': 'Berita', 'nav.global': 'Latar Global', 'nav.malaysia': 'Latar Malaysia', 'nav.timeline': 'Garis Masa', 'nav.myths': 'Mitos & Fakta', 'nav.sources': 'Sumber',
    'prices.current_title': 'Harga pam semasa',
    'prices.context_title': 'Nota, sumber, dan konteks kemas kini',
    'prices.last_updated': 'Kemas kini terakhir',
    'prices.source': 'Sumber',
    'prices.live_track': 'Jejak langsung',
    'prices.source_name': 'Kementerian Kewangan',
    'prices.track_name': 'Setel',
    'prices.notes_title': 'Nota',
    'prices.petrol_group': 'Petrol',
    'prices.diesel_group': 'Diesel',
    'prices.peninsular_group': 'Semenanjung',
    'prices.sabah_sarawak_group': 'Sabah & Sarawak',
    'prices.ron95_subsidised': 'RON95 (bersubsidi)',
    'prices.ron95_unsubsidised': 'RON95 (tanpa subsidi)',
    'prices.ron97': 'RON97',
    'prices.diesel_b10_b20': 'Diesel B10/B20',
    'prices.diesel_b7': 'Diesel B7',
    'prices.note.1': 'Harga runcit RON95 bersubsidi kekal tetap.',
    'prices.note.2': 'RON97 disesuaikan setiap minggu.',
    'prices.note.3': 'Diesel Malaysia Timur menggunakan harga tetap mengikut wilayah.',
    'prices.note.4': 'Nilai tanpa subsidi ialah nilai rujukan.',
    'prices.updated': 'Kemas kini terkini',
    'prices.quota.title': 'Nota kuota dan subsidi',
    'prices.note': 'Harga di bawah ialah petikan yang disokong sumber daripada siaran Kementerian Kewangan. Gunakan pautan sumber untuk siaran asal.',
    'prices.quota.1': 'Kelayakan umum BUDI95 sementara dihadkan kepada 200 liter sebulan.',
    'prices.quota.2': 'Pemandu e-hailing yang layak boleh menerima sehingga 800 liter sebulan di bawah aturan kelayakan bertingkat.',
    'prices.quota.3': 'Bantuan tunai BUDI Diesel kekal sebagai sokongan bersasar, bukan subsidi bahan api menyeluruh.',
    'sources.updated': 'Dikemas kini',
    'home.error': 'Tidak dapat memuatkan kandungan yang disahkan buat masa ini.',
    'news.title': 'Berita Terkini', 'news.view_all': 'Lihat semua', 'news.global': 'Global', 'news.malaysia': 'Malaysia', 'news.page_title': 'Berita', 'news.page_subtitle': 'Item langsung hanya memaparkan tajuk asal. Buka pautan untuk baca laporan penuh.', 'news.refreshed': 'Kemas kini terakhir', 'news.read_more': 'Baca sumber', 'news.empty': 'Tiada item langsung lagi untuk tab ini.',
    'news.error': 'Tidak dapat memuatkan berita langsung buat masa ini.',
    'timeline.title': 'Garis Masa', 'timeline.subtitle': 'Bermula dari serangan awal dan menjejak peristiwa besar yang mengubah minyak, perkapalan, dan harga tempatan.', 'timeline.filter.all': 'Semua', 'timeline.filter.global': 'Global', 'timeline.filter.malaysia': 'Malaysia', 'timeline.sort.latest': 'Terbaharu dahulu', 'timeline.sort.oldest': 'Terlama dahulu', 'timeline.source': 'Sumber', 'timeline.why_it_matters': 'Kenapa penting', 'timeline.empty': 'Belum ada entri garis masa.',
    'timeline.error': 'Tidak dapat memuatkan garis masa buat masa ini.',
    'sources.title': 'Sumber & Kaedah', 'sources.subtitle': 'Dari mana laman ini mengambil harga, konteks, dan kemas kini langsung.', 'sources.update_title': 'Kekerapan kemas kini', 'sources.source_title': 'Kumpulan sumber', 'sources.note_title': 'Peraturan penerbitan',
    'sources.error': 'Tidak dapat memuatkan halaman metodologi buat masa ini.',
    'footer.summary': 'Projek pendidikan awam bebas. Kami menyusun harga yang disahkan, berita semasa, garis masa, dan pautan sumber; kami tidak menerbitkan harga rasmi atau laporan asal.',
    'footer.legal': 'WhatTheFuel ialah laman pendidikan bebas, bukan platform rasmi kerajaan, bukan penerbit harga berlesen, dan bukan bilik berita. Kami menyusun dan meringkaskan maklumat daripada sumber awam untuk tujuan maklumat umum sahaja. Walaupun kami berusaha memastikan laman ini tepat dan sentiasa dikemas kini, kami tidak menjamin kesempurnaan, ketepatan masa, ketersediaan berterusan, atau terjemahan tanpa ralat. Versi Inggeris ialah versi rujukan; terjemahan disediakan hanya untuk kemudahan. Untuk harga rasmi, dasar, subsidi, atau maklumat undang-undang muktamad, rujuk dokumen sumber asal dan pihak berkuasa Malaysia yang berkenaan. Setakat yang dibenarkan oleh undang-undang, WhatTheFuel dan penyumbangnya menafikan liabiliti bagi kerugian, keputusan, atau tindakan yang dibuat bergantung pada laman ini.',
    'myths.why_it_matters': 'Kenapa penting'
  },
  zh: {
    'nav.home': '首页', 'nav.news': '新闻', 'nav.global': '全球脉络', 'nav.malaysia': '马来西亚脉络', 'nav.timeline': '时间线', 'nav.myths': '常见误区', 'nav.sources': '资料来源',
    'prices.current_title': '当前油站价格',
    'prices.context_title': '说明、来源与更新时间',
    'prices.last_updated': '最后更新',
    'prices.source': '来源',
    'prices.live_track': '实时追踪',
    'prices.source_name': '财政部',
    'prices.track_name': 'Setel',
    'prices.notes_title': '说明',
    'prices.petrol_group': '汽油',
    'prices.diesel_group': '柴油',
    'prices.peninsular_group': '半岛',
    'prices.sabah_sarawak_group': '沙巴与砂拉越',
    'prices.ron95_subsidised': 'RON95（补贴价）',
    'prices.ron95_unsubsidised': 'RON95（非补贴价）',
    'prices.ron97': 'RON97',
    'prices.diesel_b10_b20': '柴油 B10/B20',
    'prices.diesel_b7': '柴油 B7',
    'prices.note.1': 'RON95 补贴零售价保持固定。',
    'prices.note.2': 'RON97 每周调整。',
    'prices.note.3': '东马柴油采用分区域固定定价。',
    'prices.note.4': '非补贴价格仅作参考。',
    'prices.updated': '最新更新',
    'prices.quota.title': '配额与补贴说明',
    'prices.note': '下列价格均来自马来西亚财政部公开发布的来源。请点击来源链接查看原文。',
    'prices.quota.1': '一般 BUDI95 资格暂时限制为每月 200 公升。',
    'prices.quota.2': '符合资格的网约车司机可按分级资格规则每月领取最多 800 公升。',
    'prices.quota.3': 'BUDI 柴油现金援助仍属于定向支持，而不是全面燃油补贴。',
    'sources.updated': '更新于',
    'home.error': '目前无法加载已核实内容。',
    'news.title': '最新动态', 'news.view_all': '查看全部', 'news.global': '全球', 'news.malaysia': '马来西亚', 'news.page_title': '新闻', 'news.page_subtitle': '实时新闻只显示标题，点击即可查看原文。', 'news.refreshed': '最后刷新', 'news.read_more': '查看来源', 'news.empty': '此分类目前还没有实时条目。',
    'news.error': '目前无法加载实时新闻。',
    'timeline.title': '时间线', 'timeline.subtitle': '从最初的冲击开始，追踪影响油价、航运和本地定价的关键转折。', 'timeline.filter.all': '全部', 'timeline.filter.global': '全球', 'timeline.filter.malaysia': '马来西亚', 'timeline.sort.latest': '最新优先', 'timeline.sort.oldest': '最早优先', 'timeline.source': '来源', 'timeline.why_it_matters': '为什么重要', 'timeline.empty': '还没有时间线条目。',
    'timeline.error': '目前无法加载时间线。',
    'sources.title': '资料来源与方法', 'sources.subtitle': '本站从哪里获取价格、背景与实时更新。', 'sources.update_title': '更新频率', 'sources.source_title': '来源分组', 'sources.note_title': '发布规则',
    'sources.error': '目前无法加载方法页面。',
    'footer.summary': '独立的公众教育项目。我们整理已核实的价格、最新新闻、时间线和来源链接；我们不发布官方价格，也不做原创报道。',
    'footer.legal': 'WhatTheFuel 是独立教育网站，不是官方政府平台，不是持牌价格发布机构，也不是新闻编辑部。本站仅为一般信息目的，汇总并整理公开来源的信息。虽然我们尽力保持内容准确并及时更新，但我们不保证内容完整、及时、持续可用，或翻译绝对无误。英文版本为参考版本，翻译仅供便利。如需最终的官方价格、政策、补贴或法律信息，请以原始来源文件及相关马来西亚主管部门为准。在法律允许的最大范围内，WhatTheFuel 及其贡献者不对任何因依赖本站信息而产生的损失、决定或行为承担责任。',
    'myths.why_it_matters': '为什么重要'
  }
};

type ContextValue = { language: Language; setLanguage: (lang: Language) => void; t: (key: string) => string };
const I18nContext = createContext<ContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const value = useMemo(() => ({ language, setLanguage, t: (key: string) => translations[language][key] ?? translations.en[key] ?? key }), [language]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
}
