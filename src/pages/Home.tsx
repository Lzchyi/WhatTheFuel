import React, { useEffect, useState } from 'react';
import { AlertTriangle, ArrowRight, ExternalLink, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FuelPricesData, NewsItem, formatDateTimeLabel, loadFuelPrices, loadNews } from '../lib/content';
import { useI18n } from '../lib/i18n';
import { editorial } from '../lib/editorial';

type State = { fuelPrices: FuelPricesData | null; news: NewsItem[]; newsUpdatedAt: string | null; error: string | null };

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
  const currentSection = state.fuelPrices?.sections[0];
  const sourceUrl = currentSection?.sourceUrl;
  const liveTrackUrl = 'https://www.setel.com/latest-fuel-prices-malaysia';
  const getPrice = (label: string) => currentSection?.items.find((item) => item.label === label)?.value ?? '—';
  const petrolCards = [
    { key: 'ron95_subsidised', label: t('prices.ron95_subsidised'), value: getPrice('BUDI95 RON95') },
    { key: 'ron95_unsubsidised', label: t('prices.ron95_unsubsidised'), value: getPrice('RON95 unsubsidised') },
    { key: 'ron97', label: t('prices.ron97'), value: getPrice('RON97') },
  ];
  const dieselGroups = [
    {
      key: 'peninsular',
      title: t('prices.peninsular_group'),
      items: [
        { key: 'diesel_b10_b20_pen', label: t('prices.diesel_b10_b20'), value: getPrice('Diesel B10/B20 Peninsular') },
        { key: 'diesel_b7_pen', label: t('prices.diesel_b7'), value: getPrice('Diesel B7 Peninsular') },
      ],
    },
    {
      key: 'sabah_sarawak',
      title: t('prices.sabah_sarawak_group'),
      items: [
        { key: 'diesel_b10_b20_east', label: t('prices.diesel_b10_b20'), value: getPrice('Diesel B10/B20 Sabah / Sarawak') },
        { key: 'diesel_b7_east', label: t('prices.diesel_b7'), value: getPrice('Diesel B7 Sabah / Sarawak') },
      ],
    },
  ];

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
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">{t('prices.current_title')}</h2>
        </div>
        {state.fuelPrices ? (
          <div className="grid gap-6">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900 sm:p-8">
              <div className="space-y-8">
                <section>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">{t('prices.petrol_group')}</h3>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {petrolCards.map((item) => (
                      <div key={item.key} className="rounded-2xl bg-stone-50 p-4 dark:bg-stone-800/60">
                        <div className="mb-1.5 text-sm text-stone-500 dark:text-stone-400">{item.label}</div>
                        <div className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">{t('prices.diesel_group')}</h3>
                  </div>
                  <div className="grid gap-4 lg:grid-cols-2">
                    {dieselGroups.map((group) => (
                      <div key={group.key} className="rounded-2xl border border-stone-100 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-800/50">
                        <h4 className="mb-3 text-base font-bold text-stone-900 dark:text-stone-100">{group.title}</h4>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {group.items.map((item) => (
                            <div key={item.key} className="rounded-2xl bg-white p-4 shadow-sm dark:bg-stone-900">
                              <div className="mb-1 text-sm text-stone-500 dark:text-stone-400">{item.label}</div>
                              <div className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100">{item.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900 sm:p-8">
              <h3 className="mb-5 text-lg font-bold text-stone-900 dark:text-stone-100">{t('prices.context_title')}</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-stone-50 p-4 dark:bg-stone-800/60">
                  <div className="text-sm text-stone-500 dark:text-stone-400">{t('prices.last_updated')}</div>
                  <div className="mt-1 text-base font-semibold text-stone-900 dark:text-stone-100">{formatDateTimeLabel(state.fuelPrices.updatedAt)}</div>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4 dark:bg-stone-800/60">
                  <div className="text-sm text-stone-500 dark:text-stone-400">{t('prices.source')}</div>
                  <a href={sourceUrl ?? 'https://www.mof.gov.my/portal/en/'} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 font-semibold text-amber-700 hover:text-amber-800 dark:text-amber-500 dark:hover:text-amber-400">
                    {t('prices.source_name')} <ExternalLink size={14} />
                  </a>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4 dark:bg-stone-800/60">
                  <div className="text-sm text-stone-500 dark:text-stone-400">{t('prices.live_track')}</div>
                  <a href={liveTrackUrl} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 font-semibold text-amber-700 hover:text-amber-800 dark:text-amber-500 dark:hover:text-amber-400">
                    {t('prices.track_name')} <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <div className="mt-5 rounded-2xl border border-amber-100 bg-amber-50 p-4 text-amber-900 dark:border-amber-900/30 dark:bg-amber-900/10 dark:text-amber-100">
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">{t('prices.notes_title')}</h4>
                <ul className="space-y-2 text-sm leading-relaxed">
                  <li>{t('prices.note.1')}</li>
                  <li>{t('prices.note.2')}</li>
                  <li>{t('prices.note.3')}</li>
                  <li>{t('prices.note.4')}</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-6 text-stone-500 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400">
            {copy.home.loadingPrices}
          </div>
        )}
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
