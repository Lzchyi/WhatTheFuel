import React from 'react';

const LABELS = {
  en: {
    title: 'How Oil Forms — Cross-Section',
    steps: [
      { label: 'Ocean', sub: 'Ancient sea, 300M yrs ago' },
      { label: 'Organic Layer', sub: 'Dead plankton, no oxygen' },
      { label: 'Sediment Burial', sub: '2–4 km deep, heat + pressure' },
      { label: 'Kerogen → Oil', sub: '60–160 °C, oil window' },
      { label: 'Migration & Trap', sub: 'Rises through porous rock, trapped by cap rock' },
    ],
    source: 'Source: Penn State EARTH 104',
  },
  ms: {
    title: 'Proses Pembentukan Minyak — Keratan Rentas',
    steps: [
      { label: 'Lautan', sub: 'Laut purba, 300 juta tahun dahulu' },
      { label: 'Lapisan Organik', sub: 'Plankton mati, tiada oksigen' },
      { label: 'Penimbusan', sub: '2–4 km dalam, haba + tekanan' },
      { label: 'Kerogen → Minyak', sub: '60–160 °C, tetingkap minyak' },
      { label: 'Pergerakan & Takungan', sub: 'Naik melalui batu berliang, tersangkut di bawah batu tutup' },
    ],
    source: 'Sumber: Penn State EARTH 104',
  },
  zh: {
    title: '石油形成过程——地层截面',
    steps: [
      { label: '海洋', sub: '远古海洋，3亿年前' },
      { label: '有机层', sub: '死亡浮游生物，缺氧环境' },
      { label: '沉积埋藏', sub: '深度2–4公里，热量+压力' },
      { label: '干酪根→石油', sub: '60–160°C，石油窗口' },
      { label: '运移与圈闭', sub: '向上穿过多孔岩层，被盖层截留' },
    ],
    source: '来源：宾州大学 EARTH 104',
  },
} as const;

type Lang = 'en' | 'ms' | 'zh';

export function OilFormationDiagram({ lang }: { lang: Lang }) {
  const { title, steps, source } = LABELS[lang];

  const LAYER_COLORS = ['#7dd3fc', '#a8a29e', '#d4a574', '#92400e', '#1c1917'];
  const LAYER_LABELS = ['Ocean floor / Sediment', 'Clay & Silt', 'Sandstone', 'Source Rock', 'Basement Rock'];

  return (
    <div className="mt-8 rounded-3xl border border-stone-200 bg-stone-50 p-6 dark:border-stone-700 dark:bg-stone-800/50">
      <h3 className="mb-2 text-lg font-bold text-stone-900 dark:text-stone-100">{title}</h3>

      {/* SVG cross-section */}
      <div className="my-4 overflow-hidden rounded-2xl">
        <svg viewBox="0 0 800 340" className="w-full" aria-hidden="true">
          {/* Ocean water */}
          <rect x="0" y="0" width="800" height="80" fill="#bae6fd" opacity="0.6" />
          {/* Wave animation */}
          <path d="M0,70 Q100,55 200,70 Q300,85 400,70 Q500,55 600,70 Q700,85 800,70 L800,80 L0,80Z" fill="#7dd3fc" opacity="0.5">
            <animateTransform attributeName="transform" type="translate" values="0,0;-200,0;0,0" dur="6s" repeatCount="indefinite" />
          </path>
          {/* Ocean floor label */}
          <text x="16" y="45" fill="#0c4a6e" fontSize="13" fontWeight="600">🌊 {lang === 'en' ? 'Ancient Ocean' : lang === 'ms' ? 'Lautan Purba' : '远古海洋'}</text>

          {/* Sediment layers */}
          {[
            { y: 80, h: 40, color: '#c4b5a0', pattern: true },
            { y: 120, h: 35, color: '#a0856e', pattern: false },
            { y: 155, h: 40, color: '#8b6945', pattern: false },
            { y: 195, h: 50, color: '#6b4c2a', pattern: false },
            { y: 245, h: 40, color: '#4a3018', pattern: false },
            { y: 285, h: 55, color: '#2d1b0e', pattern: false },
          ].map((layer, i) => (
            <rect key={i} x="0" y={layer.y} width="800" height={layer.h} fill={layer.color} />
          ))}

          {/* Oil pocket */}
          <ellipse cx="520" cy="220" rx="120" ry="28" fill="#92400e" />
          <ellipse cx="520" cy="220" rx="110" ry="22" fill="#b45309" />
          <ellipse cx="520" cy="220" rx="80" ry="14" fill="#d97706" opacity="0.8" />
          <text x="520" y="225" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">
            {lang === 'en' ? '🛢 Oil Reservoir' : lang === 'ms' ? '🛢 Takungan Minyak' : '🛢 石油储层'}
          </text>

          {/* Cap rock label */}
          <text x="390" y="200" fill="#7c2d12" fontSize="11" fontWeight="600">
            {lang === 'en' ? '▲ Cap rock (impermeable)' : lang === 'ms' ? '▲ Batu tutup (tidak telap)' : '▲ 盖层（不透水）'}
          </text>

          {/* Migration arrows */}
          {[{ x: 350, y1: 290, y2: 240 }, { x: 450, y1: 290, y2: 240 }, { x: 550, y1: 290, y2: 240 }].map((a, i) => (
            <g key={i}>
              <line x1={a.x} y1={a.y1} x2={a.x} y2={a.y2} stroke="#d97706" strokeWidth="2" strokeDasharray="4,3">
                <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.5s" repeatCount="indefinite" />
              </line>
              <polygon points={`${a.x},${a.y2} ${a.x - 5},${a.y2 + 10} ${a.x + 5},${a.y2 + 10}`} fill="#d97706" />
            </g>
          ))}

          {/* Migration label  */}
          <text x="280" y="290" fill="#92400e" fontSize="11" fontWeight="600">
            {lang === 'en' ? '↑ oil migrates upward through porous rock' : lang === 'ms' ? '↑ minyak bergerak ke atas melalui batu berliang' : '↑ 石油向上穿过多孔岩层迁移'}
          </text>

          {/* Depth markers */}
          <line x1="30" y1="80" x2="30" y2="340" stroke="#78716c" strokeWidth="1" strokeDasharray="3,3" />
          <text x="36" y="90" fill="#78716c" fontSize="10">0 km</text>
          <text x="36" y="175" fill="#78716c" fontSize="10">~2 km</text>
          <text x="36" y="230" fill="#78716c" fontSize="10">~3 km</text>
          <text x="36" y="290" fill="#78716c" fontSize="10">~4 km</text>
        </svg>
      </div>

      {/* Step-by-step timeline */}
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-5">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white">
              {i + 1}
            </div>
            <p className="text-xs font-semibold text-stone-800 dark:text-stone-200">{step.label}</p>
            <p className="mt-0.5 text-[11px] text-stone-500 dark:text-stone-400">{step.sub}</p>
          </div>
        ))}
      </div>

      <p className="mt-3 text-right text-xs text-stone-400 dark:text-stone-500">
        <a
          href="https://www.e-education.psu.edu/earth104/node/1382"
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
