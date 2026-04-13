import React from 'react';
import { CheckCircle2, HelpCircle, ShieldAlert } from 'lucide-react';
import { editorial } from '../lib/editorial';
import { useI18n } from '../lib/i18n';

export function Myths() {
  const { language, t } = useI18n();
  const copy = editorial(language);
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-stone-200 p-3 text-stone-800 dark:bg-stone-800 dark:text-stone-200"><HelpCircle size={32} /></div>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-stone-900 dark:text-stone-100 md:text-5xl">{copy.myths.title}</h1>
        <p className="text-xl leading-relaxed text-stone-600 dark:text-stone-400">{copy.myths.intro}</p>
      </div>
      <div className="space-y-6">
        {copy.myths.cards.map((card) => (
          <div key={card.myth} className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
            <div className="mb-4 flex items-center gap-3 text-amber-700 dark:text-amber-500"><ShieldAlert size={20} /><span className="font-bold">{card.myth}</span></div>
            <p className="mb-4 leading-relaxed text-stone-700 dark:text-stone-300">{card.fact}</p>
            <div className="rounded-2xl bg-stone-50 p-4 text-sm leading-relaxed text-stone-600 dark:bg-stone-800/60 dark:text-stone-400">
              <span className="font-bold text-stone-800 dark:text-stone-200">{t('myths.why_it_matters')}: </span>{card.whyItMatters}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {card.sources.map((source) => (
                <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-3 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700">
                  <CheckCircle2 size={14} /> {source.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
