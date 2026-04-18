import React from 'react';
import { Globe, Link2, ShieldAlert, TrendingUp } from 'lucide-react';
import { editorial } from '../lib/editorial';
import { useI18n } from '../lib/i18n';
import { OilFormationDiagram } from '../components/OilFormationDiagram';
import { CrudeQualityMatrix } from '../components/CrudeQualityMatrix';
import { DistillationTower } from '../components/DistillationTower';
import { WorldProductionChart } from '../components/WorldProductionChart';

/** Section titles that should be followed by a visual component */
const FORMATION_TITLES: Record<string, boolean> = {
  'How crude oil forms — a 300-million-year story': true,
  'Proses Pembentukan Minyak — Bagaimana Minyak Mentah Terbentuk': true,
  '石油从何而来——3亿年的演变历程': true,
};
const QUALITY_TITLES: Record<string, boolean> = {
  'Crude oil quality — sweet vs sour, light vs heavy': true,
  'Kualiti Minyak Mentah — Manis vs Masam, Ringan vs Berat': true,
  '原油品质——甜质与含硫、轻质与重质': true,
};
const REFINING_TITLES: Record<string, boolean> = {
  'How crude oil is refined — the distillation tower': true,
  'Proses Penapisan Minyak Mentah — Menara Penyulingan': true,
  '原油如何提炼——分馏塔': true,
};
const PRODUCTION_TITLES: Record<string, boolean> = {
  'Who produces the most oil — global rankings': true,
  'Negara Pengeluar Minyak Terbesar — Kedudukan Global': true,
  '全球最大产油国——生产排名': true,
};

export function GlobalExplainer() {
  const { language } = useI18n();
  const copy = editorial(language);
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-stone-200 p-3 text-stone-800 dark:bg-stone-800 dark:text-stone-200"><Globe size={32} /></div>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-stone-900 dark:text-stone-100 md:text-5xl">{copy.global.title}</h1>
        <p className="text-xl leading-relaxed text-stone-600 dark:text-stone-400">{copy.global.intro}</p>
      </div>
      <div className="space-y-8">
        {copy.global.sections.map((section) => (
          <React.Fragment key={section.title}>
            <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
              <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-700 dark:text-blue-400"><TrendingUp size={24} className="shrink-0" /> {section.title}</h2>
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

              {/* Inject visuals after relevant sections */}
              {FORMATION_TITLES[section.title] && <OilFormationDiagram lang={language} />}
              {QUALITY_TITLES[section.title] && <CrudeQualityMatrix lang={language} />}
              {REFINING_TITLES[section.title] && <DistillationTower lang={language} />}
              {PRODUCTION_TITLES[section.title] && <WorldProductionChart lang={language} />}
            </section>
          </React.Fragment>
        ))}
      </div>
      <div className="mt-8 rounded-3xl border border-amber-100 bg-amber-50 p-6 text-amber-900 dark:border-amber-900/30 dark:bg-amber-900/10 dark:text-amber-200">
        <div className="mb-2 flex items-center gap-2 font-bold"><ShieldAlert size={18} /> {copy.global.noteTitle}</div>
        <p className="leading-relaxed">{copy.global.footnote}</p>
      </div>
    </div>
  );
}
