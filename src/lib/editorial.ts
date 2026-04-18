import type { Language } from './i18n';

// ── Types ──────────────────────────────────────────────────────────────────────

export type SourceLink = {
  label: string;
  url: string;
};

export type ArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  sources?: SourceLink[];
};

export type MythCard = {
  myth: string;
  fact: string;
  whyItMatters: string;
  sources: SourceLink[];
};

export type EditorialCopy = {
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    disclaimer: string;
    latestTitle: string;
    latestSubtitle: string;
    pricesLabel: string;
    newsLabel: string;
    loadingPrices: string;
    emptyNews: string;
  };
  understanding: {
    title: string;
    intro: string;
    cards: { title: string; body: string }[];
  };
  global: {
    title: string;
    intro: string;
    footnote: string;
    noteTitle: string;
    sections: ArticleSection[];
  };
  malaysia: {
    title: string;
    intro: string;
    footnote: string;
    noteTitle: string;
    sections: ArticleSection[];
  };
  myths: {
    title: string;
    intro: string;
    cards: MythCard[];
  };
  sources: {
    title: string;
    intro: string;
    updateTitle: string;
    updateBody: string;
    sourceTitle: string;
    sourceBody: string;
    noteTitle: string;
    noteBody: string;
    sourceGroups: { name: string; purpose: string; url?: string }[];
  };
};

// ── Language imports ───────────────────────────────────────────────────────────

import { en } from './editorial-en';
import { ms } from './editorial-ms';
import { zh } from './editorial-zh';

// ── Public API — same as before ────────────────────────────────────────────────

export function editorial(lang: Language): EditorialCopy {
  return { en, ms, zh }[lang] ?? en;
}
