import React, { useEffect, useState } from 'react';
import { BookOpen, CheckCircle, Database, ExternalLink, ShieldAlert } from 'lucide-react';
import { MethodologyData, formatDateTimeLabel, loadMethodology } from '../lib/content';
import { useI18n } from '../lib/i18n';
import { editorial } from '../lib/editorial';

export function Sources() {
  const { language, t } = useI18n();
  const copy = editorial(language);
  const [data, setData] = useState<MethodologyData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    loadMethodology().then((payload) => {
      if (!mounted) return;
      setData(payload);
      setError(null);
    }).catch(() => mounted && setError(t('sources.error')));
    return () => { mounted = false; };
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-stone-200 p-3 text-stone-800 dark:bg-stone-800 dark:text-stone-200"><BookOpen size={32} /></div>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-stone-900 dark:text-stone-100 md:text-5xl">{copy.sources.title}</h1>
        <p className="text-xl leading-relaxed text-stone-600 dark:text-stone-400">{copy.sources.intro}</p>
      </div>

      {error ? <div className="mb-12 rounded-3xl border border-stone-200 bg-white p-8 text-stone-600 shadow-sm dark:border-stone-800 dark:bg-stone-900 dark:text-stone-400">{error}</div> : null}

      {data ? (
        <div className="space-y-12">
          <section>
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-stone-900 dark:text-stone-100"><Database className="text-amber-600 dark:text-amber-500" /> {copy.sources.updateTitle}</h2>
            <div className="prose max-w-none rounded-3xl border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900 dark:prose-invert">
              <p className="text-lg leading-relaxed text-stone-600 dark:text-stone-400">{copy.sources.updateBody}</p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-stone-900 dark:text-stone-100"><CheckCircle className="text-amber-600 dark:text-amber-500" /> {copy.sources.sourceTitle}</h2>
            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
              <p className="mb-8 text-lg leading-relaxed text-stone-600 dark:text-stone-400">{t('sources.updated')} {formatDateTimeLabel(data.updatedAt)}</p>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 border-b border-stone-200 pb-2 text-sm font-bold uppercase tracking-wider text-stone-500 dark:border-stone-800 dark:text-stone-400">{copy.sources.sourceTitle}</h3>
                  <ul className="space-y-4">{copy.sources.sourceGroups.map((source) => <li key={source.name}><div className="flex items-center gap-2 font-bold text-stone-900 dark:text-stone-100">{source.name}{source.url ? <a href={source.url} target="_blank" rel="noreferrer" className="text-amber-600 dark:text-amber-500"><ExternalLink size={14} /></a> : null}</div><div className="text-sm text-stone-600 dark:text-stone-400">{source.purpose}</div></li>)}</ul>
                </div>
              </div>
            </div>
          </section>
          <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6 text-amber-900 dark:border-amber-900/30 dark:bg-amber-900/10 dark:text-amber-200">
            <div className="mb-2 flex items-center gap-2 font-bold"><ShieldAlert size={18} /> {copy.sources.noteTitle}</div>
            <p className="leading-relaxed">{copy.sources.noteBody}</p>
          </section>
          
          <section className="rounded-3xl border border-stone-200 bg-stone-50 p-8 text-sm text-stone-600 dark:border-stone-800 dark:bg-stone-900/50 dark:text-stone-400">
            <h3 className="mb-4 text-base font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">{t('sources.disclaimer_title')}</h3>
            <p className="leading-relaxed">{t('footer.legal')}</p>
          </section>
        </div>
      ) : null}
    </div>
  );
}
