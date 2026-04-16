import React, { useEffect, useState } from 'react';
import { AlertTriangle, ArrowRight, ExternalLink, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { FuelPricesData, formatDateTimeLabel, loadFuelPrices, loadGlobalPrices, GlobalPricePoint } from '../lib/content';
import { useI18n } from '../lib/i18n';
import { editorial } from '../lib/editorial';

type State = { fuelPrices: FuelPricesData | null; error: string | null };

export function Home() {
  const { t, language } = useI18n();
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
  const liveTrackUrl = 'https://www.setel.com/latest-fuel-prices-malaysia';
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
        <div className="mt-8 flex flex-wrap gap-4">
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
                <h3 className="mb-5 text-lg font-bold text-stone-900 dark:text-stone-100">{t('prices.global_trends_title') || "Global Crude Oil Trends"}</h3>
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
                      <XAxis dataKey="date" tickFormatter={(val) => new Date(val).toLocaleDateString(undefined, {month:'short', day:'numeric'})} axisLine={false} tickLine={false} tick={{fontSize: 12}} dy={10} />
                      <YAxis domain={['auto', 'auto']} axisLine={false} tickLine={false} tick={{fontSize: 12}} tickFormatter={(val) => `$${val}`} />
                      <Tooltip 
                        formatter={(value: number) => [`$${value.toFixed(2)}`, '']}
                        labelFormatter={(label) => new Date(label).toLocaleDateString(undefined, {year:'numeric', month:'short', day:'numeric'})}
                        contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                      />
                      <Legend 
                        iconType="circle" 
                        wrapperStyle={{paddingTop: '20px'}} 
                        formatter={(value) => {
                          const tooltipText = value === 'Brent Crude' 
                            ? "Represents oil produced in the North Sea. It serves as a major global benchmark." 
                            : "West Texas Intermediate. Primarily serves as a benchmark for the US oil market.";
                          return (
                            <span title={tooltipText} className="cursor-help inline-flex text-sm items-center gap-1.5 ml-1 text-stone-600 dark:text-stone-300">
                              {value} <span className="text-[10px] font-bold bg-stone-200 dark:bg-stone-700 w-[18px] h-[18px] rounded-full inline-flex items-center justify-center text-stone-500 dark:text-stone-400">i</span>
                            </span>
                          );
                        }}
                      />
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
                  <div className="mt-1 text-base font-semibold text-stone-900 dark:text-stone-100">{formatDateTimeLabel(state.fuelPrices.updatedAt)} <span className="text-sm font-normal text-stone-500 dark:text-stone-400">(Local Time)</span></div>
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

      <div className="mb-20">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">{copy.understanding.title}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-stone-600 dark:text-stone-400">{copy.understanding.intro}</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
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
