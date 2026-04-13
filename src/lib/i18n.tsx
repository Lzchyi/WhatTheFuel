import React, { createContext, useContext, useMemo, useState } from 'react';

export type Language = 'en' | 'ms' | 'zh';
type Dict = Record<string, string>;

const translations: Record<Language, Dict> = {
  en: {
    'nav.home': 'Home', 'nav.news': 'News', 'nav.global': 'Global Context', 'nav.malaysia': 'Malaysia Context', 'nav.timeline': 'Timeline', 'nav.myths': 'Myths', 'nav.sources': 'Sources',
    'prices.updated': 'Latest update',
    'prices.quota.title': 'Quota and subsidy notes',
    'home.error': 'Unable to load verified content right now.',
    'news.title': 'Latest News', 'news.view_all': 'View all', 'news.global': 'Global', 'news.malaysia': 'Malaysia', 'news.page_title': 'News', 'news.page_subtitle': 'Live items stay in the source language. The page labels are translated.', 'news.refreshed': 'Last refreshed', 'news.read_more': 'Read source', 'news.empty': 'No live items yet for this tab.',
    'news.error': 'Unable to load live news right now.',
    'timeline.title': 'Timeline', 'timeline.subtitle': 'Starts with the first strikes and tracks the major turns that moved oil, shipping, and local pricing.', 'timeline.filter.all': 'All', 'timeline.filter.global': 'Global', 'timeline.filter.malaysia': 'Malaysia', 'timeline.sort.latest': 'Latest first', 'timeline.sort.oldest': 'Oldest first', 'timeline.source': 'Source', 'timeline.why_it_matters': 'Why it matters', 'timeline.empty': 'No timeline entries yet.',
    'timeline.error': 'Unable to load the timeline right now.',
    'sources.title': 'Sources & Methodology', 'sources.subtitle': 'Where the site pulls prices, context, and live updates from.', 'sources.update_title': 'Update cadence', 'sources.source_title': 'Source groups', 'sources.note_title': 'Publishing rule',
    'sources.error': 'Unable to load the methodology page right now.',
    'footer.disclaimer': 'WhatTheFuel explains fuel news and policy with source links. Live items may remain in the original language.'
  },
  ms: {
    'nav.home': 'Utama', 'nav.news': 'Berita', 'nav.global': 'Konteks Global', 'nav.malaysia': 'Konteks Malaysia', 'nav.timeline': 'Garis Masa', 'nav.myths': 'Mitos', 'nav.sources': 'Sumber',
    'prices.updated': 'Kemas kini terkini',
    'prices.quota.title': 'Nota kuota dan subsidi',
    'home.error': 'Tidak dapat memuatkan kandungan yang disahkan buat masa ini.',
    'news.title': 'Berita Terkini', 'news.view_all': 'Lihat semua', 'news.global': 'Global', 'news.malaysia': 'Malaysia', 'news.page_title': 'Berita', 'news.page_subtitle': 'Item langsung kekal dalam bahasa sumber. Label halaman diterjemah.', 'news.refreshed': 'Kemas kini terakhir', 'news.read_more': 'Baca sumber', 'news.empty': 'Tiada item langsung lagi untuk tab ini.',
    'news.error': 'Tidak dapat memuatkan berita langsung buat masa ini.',
    'timeline.title': 'Garis Masa', 'timeline.subtitle': 'Bermula dari serangan pertama dan menjejak peristiwa penting yang mengubah minyak, perkapalan, dan harga tempatan.', 'timeline.filter.all': 'Semua', 'timeline.filter.global': 'Global', 'timeline.filter.malaysia': 'Malaysia', 'timeline.sort.latest': 'Terbaharu dahulu', 'timeline.sort.oldest': 'Terlama dahulu', 'timeline.source': 'Sumber', 'timeline.why_it_matters': 'Kenapa penting', 'timeline.empty': 'Belum ada entri garis masa.',
    'timeline.error': 'Tidak dapat memuatkan garis masa buat masa ini.',
    'sources.title': 'Sumber & Metodologi', 'sources.subtitle': 'Dari mana laman ini mengambil harga, konteks, dan kemas kini langsung.', 'sources.update_title': 'Kekerapan kemas kini', 'sources.source_title': 'Kumpulan sumber', 'sources.note_title': 'Peraturan penerbitan',
    'sources.error': 'Tidak dapat memuatkan halaman metodologi buat masa ini.',
    'footer.disclaimer': 'WhatTheFuel menerangkan berita dan dasar bahan api dengan pautan sumber. Item langsung boleh kekal dalam bahasa asal.'
  },
  zh: {
    'nav.home': '首页', 'nav.news': '新闻', 'nav.global': '全球背景', 'nav.malaysia': '马来西亚背景', 'nav.timeline': '时间线', 'nav.myths': '迷思', 'nav.sources': '资料来源',
    'prices.updated': '最新更新',
    'prices.quota.title': '配额与补贴说明',
    'home.error': '目前无法加载已核实内容。',
    'news.title': '最新新闻', 'news.view_all': '查看全部', 'news.global': '全球', 'news.malaysia': '马来西亚', 'news.page_title': '新闻', 'news.page_subtitle': '实时条目保留原始语言，页面标签会翻译。', 'news.refreshed': '最后刷新', 'news.read_more': '查看来源', 'news.empty': '此分类目前还没有实时条目。',
    'news.error': '目前无法加载实时新闻。',
    'timeline.title': '时间线', 'timeline.subtitle': '从最初的攻击开始，追踪影响油价、航运和本地定价的关键转折。', 'timeline.filter.all': '全部', 'timeline.filter.global': '全球', 'timeline.filter.malaysia': '马来西亚', 'timeline.sort.latest': '最新优先', 'timeline.sort.oldest': '最早优先', 'timeline.source': '来源', 'timeline.why_it_matters': '为什么重要', 'timeline.empty': '还没有时间线条目。',
    'timeline.error': '目前无法加载时间线。',
    'sources.title': '来源与方法', 'sources.subtitle': '本站从哪里获取价格、背景与实时更新。', 'sources.update_title': '更新频率', 'sources.source_title': '来源分组', 'sources.note_title': '发布规则',
    'sources.error': '目前无法加载方法页面。',
    'footer.disclaimer': 'WhatTheFuel 通过来源链接解释燃油新闻和政策。实时条目可能保留原始语言。'
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
