import React, { createContext, useContext, useMemo, useState } from 'react';

type Language = 'en' | 'ms' | 'zh';
type Dict = Record<string, string>;

const translations: Record<Language, Dict> = {
  en: {
    'nav.home': 'Home', 'nav.news': 'News', 'nav.global': 'Global Context', 'nav.malaysia': 'Malaysia Context', 'nav.timeline': 'Timeline', 'nav.myths': 'Myths', 'nav.sources': 'Sources',
    'hero.title': 'Understanding the Fuel Situation in Malaysia', 'hero.subtitle': 'Clear prices, timeline context, and source-backed sections without fake live data.',
    'prices.title': 'Malaysia Fuel Cards', 'prices.updated': 'Static JSON layer', 'prices.quota.title': 'Quota and subsidy notes',
    'news.title': 'Latest News', 'news.view_all': 'View all', 'news.global': 'Global', 'news.malaysia': 'Malaysia', 'news.page_title': 'News', 'news.page_subtitle': 'This page only shows reviewed items with real source URLs.', 'news.refreshed': 'Awaiting reviewed items', 'news.read_more': 'Read source',
    'timeline.title': 'Timeline', 'timeline.subtitle': 'Entries stay empty until they are reviewed and linked to real sources.', 'timeline.filter.all': 'All', 'timeline.filter.global': 'Global', 'timeline.filter.malaysia': 'Malaysia', 'timeline.sort.latest': 'Latest first', 'timeline.sort.oldest': 'Oldest first', 'timeline.source': 'Source', 'timeline.why_it_matters': 'Why it matters',
    'sources.title': 'Sources & Methodology', 'sources.subtitle': 'How WhatTheFuel avoids fake certainty.', 'sources.1.title': 'How content works', 'sources.2.title': 'Approved source categories',
    'footer.disclaimer': 'WhatTheFuel is an explainer site. Empty states are intentional when evidence is not ready.'
  },
  ms: {
    'nav.home': 'Utama', 'nav.news': 'Berita', 'nav.global': 'Konteks Global', 'nav.malaysia': 'Konteks Malaysia', 'nav.timeline': 'Garis Masa', 'nav.myths': 'Mitos', 'nav.sources': 'Sumber',
    'hero.title': 'Memahami Situasi Bahan Api di Malaysia', 'hero.subtitle': 'Harga, konteks garis masa, dan bahagian bersumber tanpa data langsung palsu.',
    'prices.title': 'Kad Harga Bahan Api Malaysia', 'prices.updated': 'Lapisan JSON statik', 'prices.quota.title': 'Nota kuota dan subsidi',
    'news.title': 'Berita Terkini', 'news.view_all': 'Lihat semua', 'news.global': 'Global', 'news.malaysia': 'Malaysia', 'news.page_title': 'Berita', 'news.page_subtitle': 'Halaman ini hanya memaparkan item disemak dengan URL sumber sebenar.', 'news.refreshed': 'Menunggu item disemak', 'news.read_more': 'Baca sumber',
    'timeline.title': 'Garis Masa', 'timeline.subtitle': 'Entri kekal kosong sehingga disemak dan dipautkan kepada sumber sebenar.', 'timeline.filter.all': 'Semua', 'timeline.filter.global': 'Global', 'timeline.filter.malaysia': 'Malaysia', 'timeline.sort.latest': 'Terbaharu dahulu', 'timeline.sort.oldest': 'Terlama dahulu', 'timeline.source': 'Sumber', 'timeline.why_it_matters': 'Kenapa penting',
    'sources.title': 'Sumber & Metodologi', 'sources.subtitle': 'Bagaimana WhatTheFuel mengelakkan kepastian palsu.', 'sources.1.title': 'Cara kandungan berfungsi', 'sources.2.title': 'Kategori sumber diluluskan',
    'footer.disclaimer': 'WhatTheFuel ialah laman penerangan. Keadaan kosong adalah disengajakan apabila bukti belum siap.'
  },
  zh: {
    'nav.home': '首页', 'nav.news': '新闻', 'nav.global': '全球背景', 'nav.malaysia': '马来西亚背景', 'nav.timeline': '时间线', 'nav.myths': '迷思', 'nav.sources': '资料来源',
    'hero.title': '理解马来西亚燃油局势', 'hero.subtitle': '提供价格、时间线背景，以及没有假实时数据的有来源内容。',
    'prices.title': '马来西亚燃油卡片', 'prices.updated': '静态 JSON 层', 'prices.quota.title': '配额与补贴说明',
    'news.title': '最新新闻', 'news.view_all': '查看全部', 'news.global': '全球', 'news.malaysia': '马来西亚', 'news.page_title': '新闻', 'news.page_subtitle': '此页面只显示带有真实来源链接的已审核条目。', 'news.refreshed': '等待已审核条目', 'news.read_more': '查看来源',
    'timeline.title': '时间线', 'timeline.subtitle': '条目在审核并链接真实来源之前会保持为空。', 'timeline.filter.all': '全部', 'timeline.filter.global': '全球', 'timeline.filter.malaysia': '马来西亚', 'timeline.sort.latest': '最新优先', 'timeline.sort.oldest': '最早优先', 'timeline.source': '来源', 'timeline.why_it_matters': '为什么重要',
    'sources.title': '来源与方法', 'sources.subtitle': 'WhatTheFuel 如何避免“看起来很真”的假确定性。', 'sources.1.title': '内容如何运作', 'sources.2.title': '批准的来源类别',
    'footer.disclaimer': 'WhatTheFuel 是解释型网站。当证据未准备好时，空白状态是刻意的。'
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
