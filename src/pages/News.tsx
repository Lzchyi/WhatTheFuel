import React, { useEffect, useMemo, useState } from 'react';
import { Clock, ExternalLink, Globe, MapPin, Newspaper } from 'lucide-react';
import { NewsItem, formatDateTimeLabel, loadNews } from '../lib/content';
import { useI18n } from '../lib/i18n';
import { cn } from '../lib/utils';

export function News() {
  const { t, language } = useI18n();
  const [activeTab, setActiveTab] = useState<'global' | 'malaysia'>('global');
  const [items, setItems] = useState<NewsItem[]>([]);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    loadNews().then((payload) => {
      if (!mounted) return;
      setItems(payload.items);
      setUpdatedAt(payload.updatedAt);
      setError(null);
    }).catch(() => mounted && setError(t('news.error')));
    return () => { mounted = false; };
  }, []);

  const filtered = useMemo(() => items.filter((item) => item.region === activeTab && (activeTab !== 'malaysia' || !item.language || item.language === language || item.language === 'en')), [activeTab, items, language]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-stone-200 p-3 text-stone-800 dark:bg-stone-800 dark:text-stone-200"><Newspaper size={32} /></div>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-stone-900 dark:text-stone-100 md:text-5xl">{t('news.page_title')}</h1>
        <p className="text-xl leading-relaxed text-stone-600 dark:text-stone-400">{t('news.page_subtitle')}</p>
      </div>

      <div className="mb-8 flex gap-2 border-b border-stone-200 pb-px dark:border-stone-800">
        {(['global', 'malaysia'] as const).map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={cn('border-b-2 px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors', activeTab === tab ? 'border-amber-600 text-amber-700 dark:text-amber-500' : 'border-transparent text-stone-500 hover:border-stone-300 hover:text-stone-800 dark:text-stone-400 dark:hover:border-stone-600 dark:hover:text-stone-200')}>
            <div className="flex items-center gap-2">{tab === 'global' ? <Globe size={16} /> : <MapPin size={16} />}{t(`news.${tab}`)}</div>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="mb-6 flex items-center justify-between"><span className="flex items-center gap-1.5 text-sm text-stone-500 dark:text-stone-400"><Clock size={14} /> {updatedAt ? formatDateTimeLabel(updatedAt) : t('news.refreshed')}</span></div>
        {error ? <div className="rounded-2xl border border-stone-200 bg-white p-6 text-stone-600 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-400">{error}</div> : null}
        {!filtered.length && !error ? <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-6 text-stone-500 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400">{t('news.empty')}</div> : null}
        {filtered.map((item) => (
          <a key={item.id} href={item.url} target="_blank" rel="noreferrer" className="group block rounded-2xl border border-stone-200 bg-white p-6 transition-all hover:border-amber-300 hover:shadow-sm dark:border-stone-800 dark:bg-stone-900 dark:hover:border-amber-700">
            <h4 className="mb-3 text-lg font-medium leading-snug text-stone-900 group-hover:text-amber-700 dark:text-stone-100 dark:group-hover:text-amber-500">{item.title}</h4>
            {item.summary ? <p className="mb-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{item.summary}</p> : null}
            <div className="flex items-center justify-between text-sm text-stone-500 dark:text-stone-400"><span className="font-bold text-stone-700 dark:text-stone-300">{item.source}</span><span className="flex items-center gap-1">{formatDateTimeLabel(item.publishedAt)} <ExternalLink size={14} /></span></div>
          </a>
        ))}
      </div>
    </div>
  );
}
