import React from 'react';
import { Link2, MapPin, ShieldAlert, HelpCircle } from 'lucide-react';
import { editorial } from '../lib/editorial';
import { useI18n } from '../lib/i18n';


export function MalaysiaExplainer() {
  const { language } = useI18n();
  const copy = editorial(language);
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-amber-100 p-3 text-amber-700 dark:bg-amber-900/30 dark:text-amber-500"><MapPin size={32} /></div>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-stone-900 dark:text-stone-100 md:text-5xl">{copy.malaysia.title}</h1>
        <p className="text-xl leading-relaxed text-stone-600 dark:text-stone-400">{copy.malaysia.intro}</p>
      </div>
      <div className="space-y-8">
        {copy.malaysia.sections.map((section) => (
          <section key={section.title} className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-amber-700 dark:text-amber-500"><HelpCircle size={24} className="shrink-0" /> {section.title}</h2>
            <div className="space-y-4 text-stone-700 dark:text-stone-300">
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="leading-relaxed">{paragraph}</p>)}
            </div>
            {section.bullets ? (
              <ul className="mt-5 space-y-2 text-stone-700 dark:text-stone-300">
                {section.bullets.map((bullet) => <li key={bullet} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />{bullet}</li>)}
              </ul>
            ) : null}
            {section.sources ? (
              <div className="mt-6 flex flex-wrap gap-3 border-t border-stone-100 pt-5 dark:border-stone-800">
                {section.sources.map((source) => (
                  <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-3 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700">
                    <Link2 size={14} /> {source.label}
                  </a>
                ))}
              </div>
            ) : null}

            </section>
        ))}
      </div>
      <div className="mt-8 rounded-3xl border border-amber-100 bg-amber-50 p-6 text-amber-900 dark:border-amber-900/30 dark:bg-amber-900/10 dark:text-amber-200">
        <div className="mb-2 flex items-center gap-2 font-bold"><ShieldAlert size={18} /> {copy.malaysia.noteTitle}</div>
        <p className="leading-relaxed">{copy.malaysia.footnote}</p>
      </div>
    </div>
  );
}
