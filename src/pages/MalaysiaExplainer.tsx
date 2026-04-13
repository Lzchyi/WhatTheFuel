import React from 'react';
import { MapPin, ShieldAlert } from 'lucide-react';

export function MalaysiaExplainer() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-amber-100 p-3 text-amber-700 dark:bg-amber-900/30 dark:text-amber-500"><MapPin size={32} /></div>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-stone-900 dark:text-stone-100 md:text-5xl">Malaysia context</h1>
        <p className="text-xl leading-relaxed text-stone-600 dark:text-stone-400">This section is reserved for reviewed Malaysia-specific explainers tied to real ministry, agency, and data sources.</p>
      </div>
      <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
        <div className="mb-4 flex items-center gap-3 text-amber-700 dark:text-amber-500"><ShieldAlert size={20} /><span className="font-bold">Conservative placeholder</span></div>
        <p className="leading-relaxed text-stone-700 dark:text-stone-300">The previous mixed narrative content has been held back until each claim can be tied to an official or clearly attributable source. The homepage fuel cards and methodology page are the current reviewed layer.</p>
      </div>
    </div>
  );
}
