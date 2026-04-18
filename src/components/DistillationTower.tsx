import React from 'react';

const LABELS = {
  en: {
    title: 'Fractional Distillation Tower',
    subtitle: 'How crude oil is separated by boiling point',
    fractions: [
      { name: 'LPG / Gases', temp: '< 40 °C', color: '#a5f3fc', products: 'Cooking gas, propane', y: 30 },
      { name: 'Petrol (Gasoline)', temp: '40–200 °C', color: '#fcd34d', products: 'Cars, RON95, RON97', y: 80 },
      { name: 'Naphtha', temp: '70–200 °C', color: '#fde68a', products: 'Plastics, chemicals', y: 130 },
      { name: 'Kerosene', temp: '150–275 °C', color: '#fb923c', products: 'Jet fuel, heating', y: 180 },
      { name: 'Diesel', temp: '200–350 °C', color: '#f97316', products: 'Trucks, ships, rail', y: 230 },
      { name: 'Heavy Fuel Oil', temp: '300–450 °C', color: '#b45309', products: 'Power plants, ships', y: 280 },
      { name: 'Bitumen / Residue', temp: '> 450 °C', color: '#1c1917', products: 'Roads, roofing', textColor: '#e7e5e4', y: 320 },
    ],
    crude: 'Crude oil in →',
    heatLabel: 'Furnace\n400 °C',
    note: 'Lighter fractions (lower boiling pt.) rise to the top. Heavier fractions sink to the bottom.',
    source: 'Source: EIA – How crude oil is refined',
  },
  ms: {
    title: 'Menara Penyulingan Berperingkat',
    subtitle: 'Cara minyak mentah diasingkan mengikut takat didih',
    fractions: [
      { name: 'LPG / Gas', temp: '< 40 °C', color: '#a5f3fc', products: 'Gas memasak, propana', y: 30 },
      { name: 'Petrol (Gasolin)', temp: '40–200 °C', color: '#fcd34d', products: 'Kereta, RON95, RON97', y: 80 },
      { name: 'Nafta', temp: '70–200 °C', color: '#fde68a', products: 'Plastik, bahan kimia', y: 130 },
      { name: 'Kerosin', temp: '150–275 °C', color: '#fb923c', products: 'Bahan api jet, pemanas', y: 180 },
      { name: 'Diesel', temp: '200–350 °C', color: '#f97316', products: 'Lori, kapal, kereta api', y: 230 },
      { name: 'Minyak Bahan Api Berat', temp: '300–450 °C', color: '#b45309', products: 'Stesen jana kuasa, kapal', y: 280 },
      { name: 'Bitumen / Residu', temp: '> 450 °C', color: '#1c1917', products: 'Jalan raya, bumbung', textColor: '#e7e5e4', y: 320 },
    ],
    crude: '← Minyak mentah masuk',
    heatLabel: 'Relau\n400 °C',
    note: 'Pecahan lebih ringan (takat didih rendah) naik ke atas. Pecahan lebih berat tenggelam ke bawah.',
    source: 'Sumber: EIA – Cara minyak mentah ditapis',
  },
  zh: {
    title: '分馏塔工作原理',
    subtitle: '原油如何按沸点分离',
    fractions: [
      { name: 'LPG / 气体', temp: '< 40 °C', color: '#a5f3fc', products: '烹饪用气、丙烷', y: 30 },
      { name: '汽油', temp: '40–200 °C', color: '#fcd34d', products: '汽车燃油、RON95/97', y: 80 },
      { name: '石脑油', temp: '70–200 °C', color: '#fde68a', products: '塑料、化工原料', y: 130 },
      { name: '煤油', temp: '150–275 °C', color: '#fb923c', products: '航空燃油、供暖', y: 180 },
      { name: '柴油', temp: '200–350 °C', color: '#f97316', products: '卡车、船舶、铁路', y: 230 },
      { name: '重燃料油', temp: '300–450 °C', color: '#b45309', products: '发电厂、船舶', y: 280 },
      { name: '沥青 / 残余物', temp: '> 450 °C', color: '#1c1917', products: '道路、屋顶', textColor: '#e7e5e4', y: 320 },
    ],
    crude: '← 原油输入',
    heatLabel: '加热炉\n400 °C',
    note: '较轻馏分（沸点低）升至塔顶；较重馏分沉入塔底。',
    source: '来源：EIA – 原油精炼过程',
  },
} as const;

type Lang = 'en' | 'ms' | 'zh';

export function DistillationTower({ lang }: { lang: Lang }) {
  const { title, subtitle, fractions, crude, heatLabel, note, source } = LABELS[lang];

  return (
    <div className="mt-8 rounded-3xl border border-stone-200 bg-stone-50 p-6 dark:border-stone-700 dark:bg-stone-800/50">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">{title}</h3>
        <p className="text-sm text-stone-500 dark:text-stone-400">{subtitle}</p>
      </div>

      <div className="flex gap-4 overflow-x-auto">
        {/* Tower SVG */}
        <div className="min-w-[280px] flex-shrink-0">
          <svg viewBox="0 0 280 380" className="w-full max-w-xs" aria-hidden="true">
            {/* tower body */}
            <rect x="80" y="10" width="100" height="355" rx="8" fill="#d6d3d1" stroke="#a8a29e" strokeWidth="2" />

            {/* Fraction bands */}
            {fractions.map((f, i) => {
              const height = i === fractions.length - 1 ? 45 : 42;
              return (
                <g key={f.name}>
                  <rect x="80" y={f.y} width="100" height={height} fill={f.color} opacity="0.9" />
                  {/* tray line */}
                  <line x1="80" y1={f.y} x2="180" y2={f.y} stroke="#78716c" strokeWidth="1" />
                  {/* outlet pipe */}
                  <line x1="180" y1={f.y + height / 2} x2="220" y2={f.y + height / 2} stroke="#78716c" strokeWidth="2" />
                  <circle cx="222" cy={f.y + height / 2} r="4" fill={f.color} stroke="#78716c" strokeWidth="1.5" />
                  {/* Temperature label inside tower */}
                  <text x="130" y={f.y + height / 2 + 4} textAnchor="middle" fill={f.textColor ?? '#1c1917'} fontSize="9" fontWeight="600">
                    {f.temp}
                  </text>
                </g>
              );
            })}

            {/* Crude input */}
            <line x1="10" y1="340" x2="80" y2="340" stroke="#92400e" strokeWidth="3" />
            <text x="8" y="338" fill="#92400e" fontSize="8" textAnchor="middle">{crude}</text>

            {/* Fire at base */}
            <text x="130" y="375" textAnchor="middle" fontSize="18">🔥</text>

            {/* Temperature gradient arrow */}
            <defs>
              <marker id="arrowUp" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,6 L3,0 L6,6" fill="#ef4444" />
              </marker>
            </defs>
            <line x1="55" y1="350" x2="55" y2="15" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrowUp)" />
            <text x="44" y="185" fill="#ef4444" fontSize="8" transform="rotate(-90,44,185)" textAnchor="middle">
              {lang === 'en' ? 'HEAT ↑' : lang === 'ms' ? 'HABA ↑' : '高温 ↑'}
            </text>
          </svg>
        </div>

        {/* Legend aside */}
        <div className="flex flex-col justify-center gap-1.5 py-2">
          {fractions.map((f) => (
            <div key={f.name} className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 shrink-0 rounded-sm border border-stone-300" style={{ backgroundColor: f.color }} />
              <div>
                <p className="text-xs font-bold text-stone-800 dark:text-stone-200">{f.name}</p>
                <p className="text-[11px] text-stone-500 dark:text-stone-400">{f.products}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-3 rounded-xl bg-amber-50 px-4 py-2.5 text-xs text-amber-900 dark:bg-amber-900/20 dark:text-amber-300">
        💡 {note}
      </p>
      <p className="mt-2 text-right text-xs text-stone-400 dark:text-stone-500">
        <a
          href="https://www.eia.gov/energyexplained/oil-and-petroleum-products/refining-crude-oil.php"
          target="_blank"
          rel="noreferrer"
          className="hover:text-amber-600 dark:hover:text-amber-400"
        >
          {source} →
        </a>
      </p>
    </div>
  );
}
