import React from 'react';
import { Globe, ShieldAlert } from 'lucide-react';

export function GlobalExplainer() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-stone-200 p-3 text-stone-800 dark:bg-stone-800 dark:text-stone-200"><Globe size={32} /></div>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-stone-900 dark:text-stone-100 md:text-5xl">Global fuel context</h1>
        <p className="text-xl leading-relaxed text-stone-600 dark:text-stone-400">This section is being rewritten to remove decorative citations and replace them with properly linked source-backed explainers.</p>
      </div>
      <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
        <div className="mb-4 flex items-center gap-3 text-amber-700 dark:text-amber-500"><ShieldAlert size={20} /><span className="font-bold">Under editorial review</span></div>
        <p className="leading-relaxed text-stone-700 dark:text-stone-300">For now, WhatTheFuel prefers a blank or conservative state over a polished but weakly sourced explainer. Use the News, Timeline, and Sources pages for the reviewed layer.</p>
      </div>
    </div>
  );
}
