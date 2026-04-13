import React from 'react';
import { CheckCircle2, HelpCircle, ShieldAlert } from 'lucide-react';

export function Myths() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-stone-200 p-3 text-stone-800 dark:bg-stone-800 dark:text-stone-200"><HelpCircle size={32} /></div>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-stone-900 dark:text-stone-100 md:text-5xl">Myth vs fact</h1>
        <p className="text-xl leading-relaxed text-stone-600 dark:text-stone-400">This page will return after each myth card has a clear linked source trail.</p>
      </div>
      <div className="space-y-6">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
          <div className="mb-4 flex items-center gap-3 text-amber-700 dark:text-amber-500"><ShieldAlert size={20} /><span className="font-bold">Not publishing half-verified myth cards</span></div>
          <p className="leading-relaxed text-stone-700 dark:text-stone-300">WhatTheFuel removed the previous decorative myth cards because they looked authoritative without a proper evidence trail.</p>
        </div>
        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
          <div className="mb-4 flex items-center gap-3 text-emerald-700 dark:text-emerald-500"><CheckCircle2 size={20} /><span className="font-bold">Current rule</span></div>
          <p className="leading-relaxed text-stone-700 dark:text-stone-300">Each future myth card must link to a real official source, dataset, or attributable reporting source before it is published.</p>
        </div>
      </div>
    </div>
  );
}
