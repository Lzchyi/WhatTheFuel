import React from 'react';
import { ArrowRight, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { editorial } from '../lib/editorial';
import { useI18n } from '../lib/i18n';

export function Understanding() {
  const { language, t } = useI18n();
  const copy = editorial(language);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-amber-100 p-3 text-amber-700 dark:bg-amber-900/30 dark:text-amber-500">
          <Lightbulb size={32} />
        </div>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-stone-900 dark:text-stone-100 md:text-5xl">{copy.understanding.title}</h1>
        <p className="text-xl leading-relaxed text-stone-600 dark:text-stone-400">{copy.understanding.intro}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-stone-200 px-5 py-2.5 font-medium text-stone-800 transition-colors hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700">
            {t('nav.home')} <ArrowRight size={18} />
          </Link>
          <Link to="/timeline" className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-amber-700">
            {t('nav.timeline')} <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        {copy.understanding.cards.map((card) => (
          <div key={card.title} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900 sm:p-8">
            <h2 className="mb-3 text-2xl font-bold text-stone-900 dark:text-stone-100">{card.title}</h2>
            <p className="max-w-3xl leading-relaxed text-stone-600 dark:text-stone-400">{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
