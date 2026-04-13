import React, { useEffect, useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, Clock, ExternalLink, Filter } from 'lucide-react';
import { TimelineItem, formatDateLabel, loadTimeline } from '../lib/content';
import { useI18n } from '../lib/i18n';
import { cn } from '../lib/utils';

export function Timeline() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<'all' | 'global' | 'malaysia'>('all');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('asc');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [items, setItems] = useState<TimelineItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    loadTimeline().then((payload) => {
      if (!mounted) return;
      setItems(payload.items);
      setError(null);
    }).catch(() => mounted && setError(t('timeline.error')));
    return () => { mounted = false; };
  }, []);

  const filteredData = useMemo(() => [...items].filter((event) => filter === 'all' || event.category === filter).sort((a, b) => sortOrder === 'desc' ? new Date(b.date).getTime() - new Date(a.date).getTime() : new Date(a.date).getTime() - new Date(b.date).getTime()), [filter, items, sortOrder]);
  const toggleExpand = (id: string) => setExpandedIds((prev) => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-stone-200 p-3 text-stone-800 dark:bg-stone-800 dark:text-stone-200"><Clock size={32} /></div>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-stone-900 dark:text-stone-100 md:text-5xl">{t('timeline.title')}</h1>
        <p className="text-xl leading-relaxed text-stone-600 dark:text-stone-400">{t('timeline.subtitle')}</p>
      </div>

      <div className="sticky top-20 z-40 mb-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm dark:border-stone-800 dark:bg-stone-900 sm:flex-row">
        <div className="flex items-center gap-2"><Filter size={18} className="text-stone-400 dark:text-stone-500" /><div className="flex rounded-lg bg-stone-100 p-1 dark:bg-stone-800">{(['all', 'global', 'malaysia'] as const).map((value) => <button key={value} onClick={() => setFilter(value)} className={cn('rounded-md px-4 py-1.5 text-sm font-medium transition-colors', filter === value ? 'bg-white text-stone-900 shadow-sm dark:bg-stone-700 dark:text-stone-100' : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100')}>{t(`timeline.filter.${value}`)}</button>)}</div></div>
        <div className="flex rounded-lg bg-stone-100 p-1 dark:bg-stone-800">{(['desc', 'asc'] as const).map((value) => <button key={value} onClick={() => setSortOrder(value)} className={cn('rounded-md px-4 py-1.5 text-sm font-medium transition-colors', sortOrder === value ? 'bg-white text-stone-900 shadow-sm dark:bg-stone-700 dark:text-stone-100' : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100')}>{value === 'desc' ? t('timeline.sort.latest') : t('timeline.sort.oldest')}</button>)}</div>
      </div>

      {error ? <div className="rounded-2xl border border-stone-200 bg-white p-6 text-stone-600 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-400">{error}</div> : null}
      {!filteredData.length && !error ? <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-6 text-stone-500 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400">{t('timeline.empty')}</div> : null}

      <div className="relative ml-4 space-y-12 border-l-2 border-stone-200 pb-12 dark:border-stone-800 md:ml-8">
        {filteredData.map((event) => {
          const isExpanded = expandedIds.has(event.id);
          const isGlobal = event.category === 'global';
          return (
            <div key={event.id} className="relative pl-8 md:pl-12">
              <div className={cn('absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white dark:border-stone-950', isGlobal ? 'bg-stone-800 dark:bg-stone-400' : 'bg-amber-500')} />
              <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all hover:border-stone-300 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-700">
                <button onClick={() => toggleExpand(event.id)} className="flex w-full items-start justify-between gap-4 p-5 text-left">
                  <div><div className="mb-2 flex items-center gap-3"><span className="text-sm font-bold text-stone-500 dark:text-stone-400">{formatDateLabel(event.date)}</span><span className={cn('rounded-full px-2 py-0.5 text-xs font-bold uppercase tracking-wider', isGlobal ? 'bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400')}>{isGlobal ? t('timeline.filter.global') : t('timeline.filter.malaysia')}</span></div><h3 className="text-xl font-bold leading-snug text-stone-900 dark:text-stone-100">{event.title}</h3></div>
                  <div className="mt-1 shrink-0 text-stone-400 dark:text-stone-500">{isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</div>
                </button>
                {isExpanded ? <div className="border-t border-stone-100 bg-stone-50/50 px-5 pb-5 pt-2 dark:border-stone-800 dark:bg-stone-900/50"><p className="mb-4 leading-relaxed text-stone-700 dark:text-stone-300">{event.description}</p>{event.impact ? <div className="mb-4 rounded-xl border border-amber-100 bg-amber-50 p-4 dark:border-amber-900/30 dark:bg-amber-900/10"><h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-500">{t('timeline.why_it_matters')}</h4><p className="text-sm text-amber-900 dark:text-amber-200">{event.impact}</p></div> : null}<div className="mt-6 border-t border-stone-200 pt-4 dark:border-stone-800"><a href={event.sourceUrl} className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-700 hover:text-amber-800 dark:text-amber-500 dark:hover:text-amber-400" target="_blank" rel="noreferrer">{t('timeline.source')}: {event.source} <ExternalLink size={14} /></a></div></div> : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
