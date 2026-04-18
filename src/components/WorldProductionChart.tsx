import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PRODUCERS = [
  { flag: '🇺🇸', name: { en: 'United States', ms: 'Amerika Syarikat', zh: '美国' }, bbl: 21.9, color: '#3b82f6', opec: false },
  { flag: '🇸🇦', name: { en: 'Saudi Arabia', ms: 'Arab Saudi', zh: '沙特阿拉伯' }, bbl: 11.1, color: '#f59e0b', opec: true },
  { flag: '🇷🇺', name: { en: 'Russia', ms: 'Rusia', zh: '俄罗斯' }, bbl: 10.8, color: '#ef4444', opec: false },
  { flag: '🇨🇦', name: { en: 'Canada', ms: 'Kanada', zh: '加拿大' }, bbl: 5.8, color: '#10b981', opec: false },
  { flag: '🇨🇳', name: { en: 'China', ms: 'China', zh: '中国' }, bbl: 5.3, color: '#8b5cf6', opec: false },
  { flag: '🇮🇶', name: { en: 'Iraq', ms: 'Iraq', zh: '伊拉克' }, bbl: 4.4, color: '#f59e0b', opec: true },
  { flag: '🇧🇷', name: { en: 'Brazil', ms: 'Brazil', zh: '巴西' }, bbl: 4.3, color: '#10b981', opec: false },
  { flag: '🇦🇪', name: { en: 'UAE', ms: 'UAE', zh: '阿联酋' }, bbl: 4.2, color: '#f59e0b', opec: true },
  { flag: '🇮🇷', name: { en: 'Iran', ms: 'Iran', zh: '伊朗' }, bbl: 4.0, color: '#f59e0b', opec: true },
  { flag: '🇰🇼', name: { en: 'Kuwait', ms: 'Kuwait', zh: '科威特' }, bbl: 2.9, color: '#f59e0b', opec: true },
  { flag: '🇲🇾', name: { en: 'Malaysia (#29)', ms: 'Malaysia (#29)', zh: '马来西亚 (#29)' }, bbl: 0.6, color: '#d97706', opec: false, highlight: true },
] as const;

const MAX_BBL = 21.9;

const LABELS = {
  en: {
    title: 'Top Oil Producers (2023)',
    subtitle: 'Million barrels per day — EIA data',
    opecTag: 'OPEC',
    toggle_open: 'Show full rankings',
    toggle_close: 'Collapse',
    note: 'Malaysia ranks ~29th globally. Above chart shows selected producers only.',
  },
  ms: {
    title: 'Pengeluar Minyak Teratas (2023)',
    subtitle: 'Juta tong sehari — data EIA',
    opecTag: 'OPEC',
    toggle_open: 'Tunjuk ranking penuh',
    toggle_close: 'Sembunyikan',
    note: 'Malaysia berada di kedudukan ~29 secara global. Carta di atas hanya menunjukkan pengeluar terpilih.',
  },
  zh: {
    title: '全球主要产油国（2023年）',
    subtitle: '每日百万桶 — 来源：EIA',
    opecTag: 'OPEC',
    toggle_open: '查看完整排名',
    toggle_close: '收起',
    note: '马来西亚全球排名约第29位。上图仅显示部分生产国。',
  },
} as const;

type Lang = 'en' | 'ms' | 'zh';

export function WorldProductionChart({ lang }: { lang: Lang }) {
  const [expanded, setExpanded] = useState(false);
  const labels = LABELS[lang];
  const visible = expanded ? PRODUCERS : PRODUCERS.slice(0, 6);

  return (
    <div className="mt-8 rounded-3xl border border-stone-200 bg-stone-50 p-6 dark:border-stone-700 dark:bg-stone-800/50">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">{labels.title}</h3>
          <p className="text-sm text-stone-500 dark:text-stone-400">{labels.subtitle}</p>
        </div>
        <a
          href="https://www.eia.gov/international/data/world/petroleum-and-other-liquids/annual-petroleum-and-other-liquids-production"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-amber-600 hover:text-amber-700 dark:text-amber-400"
        >
          EIA →
        </a>
      </div>

      <div className="space-y-2.5">
        {visible.map((p) => {
          const pct = (p.bbl / MAX_BBL) * 100;
          const isHighlight = 'highlight' in p && p.highlight;
          return (
            <div key={p.flag} className="flex items-center gap-3">
              <span className="w-8 shrink-0 text-xl" aria-hidden="true">{p.flag}</span>
              <span className={`w-36 shrink-0 truncate text-sm font-medium ${isHighlight ? 'text-amber-700 dark:text-amber-400' : 'text-stone-700 dark:text-stone-300'}`}>
                {p.name[lang]}
              </span>
              <div className="flex-1 overflow-hidden rounded-full bg-stone-200 dark:bg-stone-700">
                <div
                  className="h-5 rounded-full transition-all duration-700"
                  style={{ width: `${pct}%`, backgroundColor: isHighlight ? '#d97706' : p.color, opacity: isHighlight ? 1 : 0.75 }}
                />
              </div>
              <div className="flex w-20 shrink-0 items-center justify-end gap-1.5">
                <span className={`text-sm font-bold tabular-nums ${isHighlight ? 'text-amber-700 dark:text-amber-400' : 'text-stone-700 dark:text-stone-300'}`}>
                  {p.bbl}M
                </span>
                {p.opec && (
                  <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-400">
                    {labels.opecTag}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => setExpanded((v) => !v)}
        className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-2xl border border-stone-200 bg-white py-2.5 text-sm font-medium text-stone-600 transition hover:bg-stone-50 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
      >
        {expanded ? <><ChevronUp size={16} />{labels.toggle_close}</> : <><ChevronDown size={16} />{labels.toggle_open}</>}
      </button>

      {expanded && (
        <p className="mt-3 text-center text-xs text-stone-400 dark:text-stone-500">{labels.note}</p>
      )}
    </div>
  );
}
