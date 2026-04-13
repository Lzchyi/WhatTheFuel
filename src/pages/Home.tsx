import React, { useEffect, useState } from 'react';
import { Activity, AlertTriangle, ArrowRight, ExternalLink, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FuelPricesData, NewsItem, formatDateTimeLabel, loadFuelPrices, loadNews } from '../lib/content';
import { useI18n } from '../lib/i18n';

type State = { fuelPrices: FuelPricesData | null; news: NewsItem[]; newsUpdatedAt: string | null; error: string | null };

export function Home() {
  const { t } = useI18n();
  const [state, setState] = useState<State>({ fuelPrices: null, news: [], newsUpdatedAt: null, error: null });

  useEffect(() => {
    let mounted = true;
    Promise.all([loadFuelPrices(), loadNews()])
      .then(([fuelPrices, newsPayload]) => mounted && setState({ fuelPrices, news: newsPayload.items, newsUpdatedAt: newsPayload.updatedAt, error: null }))
      .catch(() => mounted && setState((current) => ({ ...current, error: 'Unable to load verified content right now.' })));
    return () => { mounted = false; };
  }, []);

  const malaysiaNews = state.news.filter((item) => item.region === 'malaysia').slice(0, 2);
  const globalNews = state.news.filter((item) => item.region === 'global').slice(0, 2);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-16 max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-stone-900 dark:text-stone-100 md:text-5xl">{t('hero.title')}</h1>
        <p className="text-lg leading-relaxed text-stone-600 dark:text-stone-400 md:text-xl">{t('hero.subtitle')}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/global" className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-amber-700">{t('nav.global')} <ArrowRight size={18} /></Link>
          <Link to="/timeline" className="inline-flex items-center gap-2 rounded-full bg-stone-200 px-5 py-2.5 font-medium text-stone-800 transition-colors hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700">{t('nav.timeline')}</Link>
        </div>
      </div>

      <div className="mb-20 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900 md:p-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-900 dark:text-stone-100"><Activity className="text-amber-600 dark:text-amber-500" /> Verified market chart</h2>
            <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">This section stays blank until a source-backed data feed is connected.</p>
          </div>
        </div>
        <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 dark:border-stone-700 dark:bg-stone-800/30 md:p-10">
          <p className="leading-relaxed text-stone-700 dark:text-stone-300">The previous simulated chart has been removed. WhatTheFuel will only show this chart again after a verifiable, maintainable source pipeline is connected for GitHub Pages.</p>
        </div>
        <div className="mt-6 flex items-start gap-3 rounded-xl bg-stone-50 p-4 text-sm text-stone-600 dark:bg-stone-800/50 dark:text-stone-400"><AlertTriangle size={16} className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-500" /><p>{state.error ?? 'No simulated market figures are shown on this page.'}</p></div>
      </div>

      <div className="mb-20">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">{t('prices.title')}</h2>
          <span className="flex items-center gap-1.5 text-sm text-stone-500 dark:text-stone-400"><Info size={14} /> {state.fuelPrices ? formatDateTimeLabel(state.fuelPrices.updatedAt) : t('prices.updated')}</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {(state.fuelPrices?.sections ?? []).map((section) => (
            <div key={section.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
              <h3 className="mb-4 border-b border-stone-100 pb-4 text-lg font-bold text-stone-900 dark:border-stone-800 dark:text-stone-100">{section.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {section.items.map((item) => (
                  <div key={item.label} className="rounded-lg bg-stone-50 p-3 dark:bg-stone-800/50">
                    <div className="mb-1 text-sm text-stone-500 dark:text-stone-400">{item.label}</div>
                    <div className="text-lg font-bold text-stone-900 dark:text-stone-100">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {state.fuelPrices?.disclaimer ? <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-6 text-amber-900 dark:border-amber-900/30 dark:bg-amber-900/10 dark:text-amber-200">{state.fuelPrices.disclaimer}</div> : null}
        {!!state.fuelPrices?.quotaNotes?.length && (
          <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-6 dark:border-amber-900/30 dark:bg-amber-900/10">
            <h3 className="mb-3 text-lg font-bold text-amber-900 dark:text-amber-500">{t('prices.quota.title')}</h3>
            <ul className="space-y-2 text-amber-800 dark:text-amber-200">{state.fuelPrices.quotaNotes.map((note) => <li key={note}>{note}</li>)}</ul>
          </div>
        )}
      </div>

      <div>
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">{t('news.title')}</h2>
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
                )) : <div className="rounded-xl border border-dashed border-stone-300 bg-white p-4 text-sm text-stone-500 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400">No reviewed items published yet.</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
