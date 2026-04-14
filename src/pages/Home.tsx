import React, { useEffect, useState } from 'react';
import { AlertTriangle, ArrowRight, ExternalLink, Info, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FuelPricesData, NewsItem, formatDateTimeLabel, loadFuelPrices, loadNews } from '../lib/content';
import { useI18n } from '../lib/i18n';
import { editorial } from '../lib/editorial';

type State = { fuelPrices: FuelPricesData | null; news: NewsItem[]; newsUpdatedAt: string | null; error: string | null };

const priceTextMap = {
  en: {
    'Current subsidised snapshot': 'Current subsidised snapshot',
    'Latest full weekly table we confirmed': 'Latest full weekly table we confirmed',
    'Ministry of Finance press citation': 'Ministry of Finance press citation',
    'BUDI95 RON95': 'BUDI95 RON95',
    'RON95 unsubsidised': 'RON95 unsubsidised',
    'RON97': 'RON97',
    'Diesel Peninsular': 'Diesel Peninsular',
    'Diesel Sabah / Sarawak / Labuan': 'Diesel Sabah / Sarawak / Labuan',
  },
  ms: {
    'Current subsidised snapshot': 'Ringkasan bersubsidi semasa',
    'Latest full weekly table we confirmed': 'Jadual mingguan penuh terkini yang kami sahkan',
    'Ministry of Finance press citation': 'Rujukan akhbar Kementerian Kewangan',
    'BUDI95 RON95': 'BUDI95 RON95',
    'RON95 unsubsidised': 'RON95 tanpa subsidi',
    'RON97': 'RON97',
    'Diesel Peninsular': 'Diesel Semenanjung',
    'Diesel Sabah / Sarawak / Labuan': 'Diesel Sabah / Sarawak / Labuan',
  },
  zh: {
    'Current subsidised snapshot': '当前补贴快照',
    'Latest full weekly table we confirmed': '我们确认的最新完整周表',
    'Ministry of Finance press citation': '财政部新闻引文',
    'BUDI95 RON95': 'BUDI95 RON95',
    'RON95 unsubsidised': 'RON95 非补贴价',
    'RON97': 'RON97',
    'Diesel Peninsular': '半岛柴油',
    'Diesel Sabah / Sarawak / Labuan': '沙巴 / 沙捞越 / 纳闽柴油',
  },
} as const;

function translatePriceText(language: keyof typeof priceTextMap, value: string) {
  return priceTextMap[language][value as keyof (typeof priceTextMap)[typeof language]] ?? value;
}

export function Home() {
  const { t, language } = useI18n();
  const copy = editorial(language);
  const [state, setState] = useState<State>({ fuelPrices: null, news: [], newsUpdatedAt: null, error: null });

  useEffect(() => {
    let mounted = true;
    Promise.all([loadFuelPrices(), loadNews()])
      .then(([fuelPrices, newsPayload]) => mounted && setState({ fuelPrices, news: newsPayload.items, newsUpdatedAt: newsPayload.updatedAt, error: null }))
      .catch(() => mounted && setState((current) => ({ ...current, error: t('home.error') })));
    return () => { mounted = false; };
  }, []);

  const malaysiaNews = state.news.filter((item) => item.region === 'malaysia').slice(0, 2);
  const globalNews = state.news.filter((item) => item.region === 'global').slice(0, 2);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-16 max-w-3xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-500">{copy.home.eyebrow}</p>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-stone-900 dark:text-stone-100 md:text-5xl">{copy.home.title}</h1>
        <p className="text-lg leading-relaxed text-stone-600 dark:text-stone-400 md:text-xl">{copy.home.subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/global" className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-amber-700">{t('nav.global')} <ArrowRight size={18} /></Link>
          <Link to="/timeline" className="inline-flex items-center gap-2 rounded-full bg-stone-200 px-5 py-2.5 font-medium text-stone-800 transition-colors hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700">{t('nav.timeline')}</Link>
        </div>
        <div className="mt-6 inline-flex items-start gap-2 rounded-2xl border border-stone-200 bg-white/80 px-4 py-3 text-sm leading-relaxed text-stone-600 shadow-sm dark:border-stone-800 dark:bg-stone-900/80 dark:text-stone-400">
          <ShieldAlert size={16} className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-500" />
          <span>{copy.home.disclaimer}</span>
        </div>
        {state.error ? <div className="mt-4 flex items-start gap-3 rounded-xl bg-stone-50 p-4 text-sm text-stone-600 dark:bg-stone-800/50 dark:text-stone-400"><AlertTriangle size={16} className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-500" /><p>{state.error}</p></div> : null}
      </div>

      <div className="mb-20">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">{copy.home.pricesLabel}</h2>
          <span className="flex items-center gap-1.5 text-sm text-stone-500 dark:text-stone-400"><Info size={14} /> {state.fuelPrices ? formatDateTimeLabel(state.fuelPrices.updatedAt) : t('prices.updated')}</span>
        </div>
        {state.fuelPrices?.sections?.length ? (
          <div className="grid gap-6 md:grid-cols-2">
            {state.fuelPrices.sections.map((section) => (
              <div key={section.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
                <div className="mb-4 border-b border-stone-100 pb-4 dark:border-stone-800">
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">{translatePriceText(language, section.title)}</h3>
                  {section.sourceLabel ? (
                    <a href={section.sourceUrl} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-amber-700 hover:text-amber-800 dark:text-amber-500 dark:hover:text-amber-400">
                      {translatePriceText(language, section.sourceLabel)} <ExternalLink size={12} />
                    </a>
                  ) : null}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {section.items.map((item) => (
                    <div key={item.label} className="rounded-lg bg-stone-50 p-3 dark:bg-stone-800/50">
                      <div className="mb-1 text-sm text-stone-500 dark:text-stone-400">{translatePriceText(language, item.label)}</div>
                      <div className="text-lg font-bold text-stone-900 dark:text-stone-100">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-6 text-stone-500 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400">
            {copy.home.loadingPrices}
          </div>
        )}
        <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-6 text-amber-900 dark:border-amber-900/30 dark:bg-amber-900/10 dark:text-amber-200">
          <p className="leading-relaxed">{t('prices.note')}</p>
          <div className="mt-4">
            <h3 className="mb-3 text-lg font-bold text-amber-900 dark:text-amber-500">{t('prices.quota.title')}</h3>
            <ul className="space-y-2 text-amber-800 dark:text-amber-200">
              <li>{t('prices.quota.1')}</li>
              <li>{t('prices.quota.2')}</li>
              <li>{t('prices.quota.3')}</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">{copy.home.newsLabel}</h2>
          <Link to="/news" className="flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-700 dark:text-amber-500 dark:hover:text-amber-400">{t('news.view_all')} <ArrowRight size={16} /></Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {[{ title: t('news.malaysia'), items: malaysiaNews }, { title: t('news.global'), items: globalNews }].map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">{group.title}</h3>
              <div className="space-y-4">
                {group.items.length ? group.items.map((item) => (
                  <a key={item.id} href={item.url} target="_blank" rel="noreferrer" className="group block rounded-xl border border-stone-200 bg-white p-4 transition-all hover:border-amber-300 hover:shadow-sm dark:border-stone-800 dark:bg-stone-900 dark:hover:border-amber-700">
                    <h4 className="mb-2 font-medium leading-snug text-stone-900 group-hover:text-amber-700 dark:text-stone-100 dark:group-hover:text-amber-500">{item.title}</h4>
                    <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400"><span className="font-medium">{item.source}</span><span className="flex items-center gap-1">{formatDateTimeLabel(item.publishedAt)} <ExternalLink size={12} /></span></div>
                  </a>
                )) : <div className="rounded-xl border border-dashed border-stone-300 bg-white p-4 text-sm text-stone-500 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400">{copy.home.emptyNews}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
