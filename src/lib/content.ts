export type NewsRegion = 'global' | 'malaysia';

export type NewsItem = {
  id: string;
  region: NewsRegion;
  title: string;
  summary?: string;
  source: string;
  url: string;
  publishedAt: string;
  language?: 'en' | 'ms' | 'zh' | 'other';
};

export type FuelPriceItem = { label: string; value: string; diff?: string | null; notes?: string };
export type FuelPriceSection = { title: string; sourceLabel?: string; sourceUrl?: string; items: FuelPriceItem[] };
export type FuelPricesData = {
  status: 'verified' | 'manual_review' | 'pending_source_connection';
  updatedAt: string;
  disclaimer?: string;
  sections: FuelPriceSection[];
  quotaNotes?: string[];
};

export type TimelineItem = {
  id: string;
  date: string;
  title: string;
  description: string;
  impact?: string;
  category: 'global' | 'malaysia';
  source: string;
  sourceUrl: string;
  reviewedAt?: string;
};

export type SourceEntry = {
  name: string;
  type: 'official' | 'newswire' | 'editorial' | 'data';
  purpose: string;
  url?: string;
};

export type MethodologyData = {
  updatedAt: string;
  summary: string;
  automation: string[];
  editorialRules: string[];
  limitations: string[];
  approvedSources: SourceEntry[];
};

function dataUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path}`.replace(/([^:]\/)\/+/, '$1');
}

async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(dataUrl(path), { headers: { 'Cache-Control': 'no-cache' } });
  if (!response.ok) throw new Error(`Failed to load ${path}`);
  return response.json() as Promise<T>;
}

export const loadFuelPrices = () => fetchJson<FuelPricesData>('data/fuel-prices.json');
export const loadNews = () => fetchJson<{ updatedAt: string; items: NewsItem[] }>('data/news.json');
export const loadTimeline = () => fetchJson<{ updatedAt: string; items: TimelineItem[] }>('data/timeline.json');
export const loadMethodology = () => fetchJson<MethodologyData>('data/sources.json');

export type GlobalPricePoint = { date: string; wti?: number; brent?: number };
export type GlobalPricesData = { updatedAt: string; chartData: GlobalPricePoint[] };
export const loadGlobalPrices = () => fetchJson<GlobalPricesData>('data/global-prices.json');

export function formatDateLabel(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
}

export function formatDateTimeLabel(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }).format(date);
}
