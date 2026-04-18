import React, { useEffect, useState } from 'react';
import { AlertTriangle, ExternalLink } from 'lucide-react';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { FuelPricesData, formatDateTimeLabel, loadFuelPrices, loadGlobalPrices, GlobalPricePoint } from '../lib/content';
import { useI18n } from '../lib/i18n';
import { useTheme } from '../lib/theme';
import { editorial } from '../lib/editorial';

type State = { fuelPrices: FuelPricesData | null; error: string | null };

export function Home() {
  const { t, language } = useI18n();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const copy = editorial(language);
  const [state, setState] = useState<State>({ fuelPrices: null, error: null });
  const [globalPrices, setGlobalPrices] = useState<GlobalPricePoint[] | null>(null);
  useEffect(() => {
    let mounted = true;
    loadFuelPrices()
      .then((fuelPrices) => mounted && setState({ fuelPrices, error: null }))
      .catch(() => mounted && setState((current) => ({ ...current, error: t('home.error') })));
    loadGlobalPrices()
      .then((res) => mounted && setGlobalPrices(res.chartData))
      .catch(() => {});
    return () => { mounted = false; };
  }, []);
  const currentSection = state.fuelPrices?.sections[0];
  const sourceUrl = currentSection?.sourceUrl;

  const getItem = (label: string) => currentSection?.items.find((item) => item.label === label);
  const petrolCards = [
    { key: 'ron95_subsidised', label: t('prices.ron95_subsidised'), value: getItem('BUDI95 RON95')?.value ?? '—', diff: getItem('BUDI95 RON95')?.diff },
    { key: 'ron95_unsubsidised', label: t('prices.ron95_unsubsidised'), value: getItem('RON95 unsubsidised')?.value ?? '—', diff: getItem('RON95 unsubsidised')?.diff },
    { key: 'ron97', label: t('prices.ron97'), value: getItem('RON97')?.value ?? '—', diff: getItem('RON97')?.diff },
  ];
  const dieselGroups = [
    {
      key: 'peninsular',
      title: t('prices.peninsular_group'),
      items: [
        { key: 'diesel_b10_b20_pen', label: t('prices.diesel_b10_b20'), value: getItem('Diesel B10/B20 Peninsular')?.value ?? '—', diff: getItem('Diesel B10/B20 Peninsular')?.diff },
        { key: 'diesel_b7_pen', label: t('prices.diesel_b7'), value: getItem('Diesel B7 Peninsular')?.value ?? '—', diff: getItem('Diesel B7 Peninsular')?.diff },
      ],
    },
    {
      key: 'sabah_sarawak',
      title: t('prices.sabah_sarawak_group'),
      items: [
        { key: 'diesel_b10_b20_east', label: t('prices.diesel_b10_b20'), value: getItem('Diesel B10/B20 Sabah / Sarawak')?.value ?? '—', diff: getItem('Diesel B10/B20 Sabah / Sarawak')?.diff },
        { key: 'diesel_b7_east', label: t('prices.diesel_b7'), value: getItem('Diesel B7 Sabah / Sarawak')?.value ?? '—', diff: getItem('Diesel B7 Sabah / Sarawak')?.diff },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-16 max-w-3xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-500">{copy.home.eyebrow}</p>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-stone-900 dark:text-stone-100 md:text-5xl">{copy.home.title}</h1>
        <p className="text-lg leading-relaxed text-stone-600 dark:text-stone-400 md:text-xl">{copy.home.subtitle}</p>

        {state.error ? <div className="mt-4 flex items-start gap-3 rounded-xl bg-stone-50 p-4 text-sm text-stone-600 dark:bg-stone-800/50 dark:text-stone-400"><AlertTriangle size={16} className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-500" /><p>{state.error}</p></div> : null}
      </div>

      <div className="mb-20">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">{t('prices.current_title')}</h2>
            {state.fuelPrices && (
              <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                {t('prices.data_as_of')} <span className="font-semibold text-stone-700 dark:text-stone-300">{formatDateTimeLabel(state.fuelPrices.updatedAt, language === 'ms' ? 'ms-MY' : language === 'zh' ? 'zh-MY' : 'en-MY')}</span>
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => document.getElementById('understanding')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-600 transition-colors hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
          >
            {t('prices.what_does_this_mean')}
          </button>
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
                        <div className="flex items-end gap-2">
                          <div className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100">{item.value}</div>
                          {item.diff && (
                            <div className={`text-sm font-medium pb-0.5 ${parseFloat(item.diff) > 0 ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}>
                              {parseFloat(item.diff) > 0 ? '+' : ''}{item.diff}
                            </div>
                          )}
                        </div>
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
                              <div className="flex items-end gap-2">
                                <div className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100">{item.value}</div>
                                {item.diff && (
                                  <div className={`text-sm font-medium pb-0.5 ${parseFloat(item.diff) > 0 ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}>
                                    {parseFloat(item.diff) > 0 ? '+' : ''}{item.diff}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {globalPrices && globalPrices.length > 0 && (
              <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900 sm:p-8">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                      {t('prices.global_trends_title') || 'Global Crude Oil Trends'}
                      <span className="ml-2 text-sm font-normal text-stone-400 dark:text-stone-500">({t('prices.usd_per_barrel')})</span>
                    </h3>
                  </div>
                  <div className="group relative">
                    <button type="button" className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-stone-100 text-[9px] font-bold text-stone-500 transition-colors hover:bg-stone-200 focus:outline-none dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700">i</button>
                    <div className="pointer-events-none absolute right-0 top-full mt-2 w-64 rounded-xl bg-stone-800 p-4 text-xs font-medium leading-relaxed text-stone-100 opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 dark:bg-stone-100 dark:text-stone-900 z-50 text-left">
                      <div className="mb-2"><strong>Brent Crude:</strong> {t('chart.brent_desc')}</div>
                      <div><strong>WTI Crude:</strong> {t('chart.wti_desc')}</div>
                      <div className="absolute -top-1 right-1.5 h-2 w-2 rotate-45 bg-stone-800 dark:bg-stone-100"></div>
                    </div>
                  </div>
                </div>
                <div style={{ width: '100%', height: 320 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={globalPrices} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorBrent" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorWti" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#444" opacity={0.2} />
                      <XAxis dataKey="date" tickFormatter={(val) => new Date(val).toLocaleDateString(language === 'ms' ? 'ms-MY' : language === 'zh' ? 'zh-MY' : 'en-MY', {month:'short', day:'numeric'})} axisLine={false} tickLine={false} tick={{fontSize: 12, fill: isDark ? '#a8a29e' : '#57534e'}} dy={10} />
                      <YAxis domain={['auto', 'auto']} axisLine={false} tickLine={false} tick={{fontSize: 12, fill: isDark ? '#a8a29e' : '#57534e'}} tickFormatter={(val) => `$${val}`} />
                      <Tooltip 
                        formatter={(value: number) => [`$${value.toFixed(2)}`, '']}
                        labelFormatter={(label) => new Date(label).toLocaleDateString(undefined, {year:'numeric', month:'short', day:'numeric'})}
                        contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: isDark ? '#1c1917' : '#fff', color: isDark ? '#e7e5e4' : '#1c1917'}}
                      />
                      <Legend iconType="circle" wrapperStyle={{paddingTop: '20px'}} />
                      <Area type="monotone" name="Brent Crude" dataKey="brent" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorBrent)" />
                      <Area type="monotone" name="WTI Crude" dataKey="wti" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorWti)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900 sm:p-8">
              <h3 className="mb-5 text-lg font-bold text-stone-900 dark:text-stone-100">{t('prices.context_title')}</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-stone-50 p-4 dark:bg-stone-800/60">
                  <div className="text-sm text-stone-500 dark:text-stone-400">{t('prices.last_updated')}</div>
                  <div className="mt-1 text-base font-semibold text-stone-900 dark:text-stone-100">{formatDateTimeLabel(state.fuelPrices.updatedAt, language === 'ms' ? 'ms-MY' : language === 'zh' ? 'zh-MY' : 'en-MY')} <span className="text-sm font-normal text-stone-500 dark:text-stone-400">({t('prices.local_time')})</span></div>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4 dark:bg-stone-800/60">
                  <div className="text-sm text-stone-500 dark:text-stone-400">{t('prices.source')}</div>
                  <a href={sourceUrl ?? 'https://www.mof.gov.my/portal/en/'} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 font-semibold text-amber-700 hover:text-amber-800 dark:text-amber-500 dark:hover:text-amber-400">
                    {t('prices.source_name')} <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <div className="mt-5 rounded-2xl border border-amber-100 bg-amber-50 p-4 text-amber-900 dark:border-amber-900/30 dark:bg-amber-900/10 dark:text-amber-100">
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">{t('prices.notes_title')}</h4>
                <ul className="mb-4 list-disc list-inside space-y-2 text-sm leading-relaxed">
                  <li>{t('prices.note.1')}</li>
                  <li>{t('prices.note.2')}</li>
                  <li>{t('prices.note.3')}</li>
                  <li>{t('prices.note.4')}</li>
                </ul>
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">{t('prices.quota.title')}</h4>
                <ul className="mb-2 list-disc list-inside space-y-2 text-sm leading-relaxed">
                  <li>{t('prices.quota.1')}</li>
                  <li>{t('prices.quota.2')}</li>
                  <li>{t('prices.quota.3')}</li>
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

      <div id="understanding" className="mb-20 scroll-mt-24">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">{copy.understanding.title}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-stone-600 dark:text-stone-400">{copy.understanding.intro}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 [&>*:last-child:nth-child(odd)]:md:col-span-2">
          {copy.understanding.cards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-900">
              <h3 className="mb-2 text-lg font-bold text-stone-900 dark:text-stone-100">{card.title}</h3>
              <p className="leading-relaxed text-stone-600 dark:text-stone-400">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
