import React, { useState } from 'react';

const LABELS = {
  en: {
    title: 'Malaysia\'s Key Oil & Gas Fields',
    subtitle: 'Major offshore production areas. Source: Petronas',
    legend: ['Offshore oil field', 'Offshore gas field', 'Major refinery'],
    fields: [
      { id: 'tapis', name: 'Tapis Field', type: 'oil', cx: 148, cy: 215, note: 'Asia\'s premium light sweet crude (API ~44°). Offshore Terengganu.' },
      { id: 'cakerawala', name: 'Cakerawala', type: 'gas', cx: 175, cy: 165, note: 'Massive gas field, servicing both Malaysia & Thailand.' },
      { id: 'kikeh', name: 'Kikeh Field', type: 'oil', cx: 295, cy: 180, note: 'Deep-water Sabah field. First deep-water production in Malaysia.' },
      { id: 'dulang', name: 'Dulang Field', type: 'oil', cx: 135, cy: 240, note: 'Offshore Terengganu, produces medium crude.' },
      { id: 'sarawak_gas', name: 'Sarawak Gas Basin', type: 'gas', cx: 255, cy: 235, note: 'Key LNG export base. Bintulu LNG complex is world\'s largest.' },
      { id: 'pengerang', name: 'Pengerang IC', type: 'refinery', cx: 115, cy: 285, note: 'RAPID — Malaysia\'s largest integrated refinery & petrochemical complex.' },
      { id: 'malacca', name: 'MRCSB Malacca', type: 'refinery', cx: 90, cy: 255, note: 'Malaysia Refining Company — one of the oldest refineries in Malaysia.' },
    ],
    petronas_note: 'Petronas (Petroliam Nasional Berhad) holds exclusive oil & gas rights in Malaysia under the Petroleum Development Act 1974. All upstream projects require a Production Sharing Contract (PSC) with Petronas.',
    source: 'Petronas Annual Report 2023',
  },
  ms: {
    title: 'Kawasan Pengeluaran Minyak & Gas Utama Malaysia',
    subtitle: 'Kawasan pengeluaran luar pesisir utama. Sumber: Petronas',
    legend: ['Medan minyak luar pesisir', 'Medan gas luar pesisir', 'Kilang penapisan utama'],
    fields: [
      { id: 'tapis', name: 'Medan Tapis', type: 'oil', cx: 148, cy: 215, note: 'Minyak ringan manis premium Asia (API ~44°). Luar pesisir Terengganu.' },
      { id: 'cakerawala', name: 'Cakerawala', type: 'gas', cx: 175, cy: 165, note: 'Medan gas besar meliputi Malaysia & Thailand.' },
      { id: 'kikeh', name: 'Medan Kikeh', type: 'oil', cx: 295, cy: 180, note: 'Medan air dalam Sabah. Pengeluaran air dalam pertama di Malaysia.' },
      { id: 'dulang', name: 'Medan Dulang', type: 'oil', cx: 135, cy: 240, note: 'Luar pesisir Terengganu, menghasilkan minyak mentah sederhana.' },
      { id: 'sarawak_gas', name: 'Lembangan Gas Sarawak', type: 'gas', cx: 255, cy: 235, note: 'Pangkalan eksport LNG utama. Kompleks LNG Bintulu antara terbesar di dunia.' },
      { id: 'pengerang', name: 'Pengerang IC', type: 'refinery', cx: 115, cy: 285, note: 'RAPID — kompleks penapisan dan petrokimia bersepadu terbesar Malaysia.' },
      { id: 'malacca', name: 'MRCSB Melaka', type: 'refinery', cx: 90, cy: 255, note: 'Malaysia Refining Company — antara kilang tertua di Malaysia.' },
    ],
    petronas_note: 'Petronas (Petroliam Nasional Berhad) memegang hak eksklusif minyak & gas di Malaysia di bawah Akta Pembangunan Petroleum 1974. Semua projek hulu memerlukan Kontrak Perkongsian Pengeluaran (PSC) dengan Petronas.',
    source: 'Laporan Tahunan Petronas 2023',
  },
  zh: {
    title: '马来西亚主要油气田分布',
    subtitle: '主要近海产区。来源：国家石油公司',
    legend: ['近海油田', '近海气田', '主要炼油厂'],
    fields: [
      { id: 'tapis', name: 'Tapis油田', type: 'oil', cx: 148, cy: 215, note: '亚洲顶级轻质甜原油（API约44°）。位于登嘉楼海岸外。' },
      { id: 'cakerawala', name: 'Cakerawala气田', type: 'gas', cx: 175, cy: 165, note: '大型气田，同时服务马来西亚和泰国。' },
      { id: 'kikeh', name: 'Kikeh深水油田', type: 'oil', cx: 295, cy: 180, note: '沙巴深水油田，是马来西亚首个深水油田。' },
      { id: 'dulang', name: 'Dulang油田', type: 'oil', cx: 135, cy: 240, note: '位于登嘉楼海外，生产中质原油。' },
      { id: 'sarawak_gas', name: '砂拉越气盆地', type: 'gas', cx: 255, cy: 235, note: '重要LNG出口基地。民都鲁LNG综合体是世界最大之一。' },
      { id: 'pengerang', name: 'Pengerang IC', type: 'refinery', cx: 115, cy: 285, note: 'RAPID——马来西亚最大的综合炼油和石化综合体。' },
      { id: 'malacca', name: 'MRCSB马六甲', type: 'refinery', cx: 90, cy: 255, note: '马来西亚炼油公司，马来西亚历史最悠久的炼油厂之一。' },
    ],
    petronas_note: '国家石油公司（Petronas/国油）依据1974年《石油开发法令》拥有马来西亚所有油气资源的专有权。所有上游项目须与国油签订产品分成合同（PSC）。',
    source: '国家石油公司2023年度报告',
  },
} as const;

type Lang = 'en' | 'ms' | 'zh';
type FieldType = 'oil' | 'gas' | 'refinery';

const TYPE_COLORS: Record<FieldType, { fill: string; stroke: string; emoji: string }> = {
  oil: { fill: '#fcd34d', stroke: '#d97706', emoji: '🛢' },
  gas: { fill: '#86efac', stroke: '#16a34a', emoji: '💨' },
  refinery: { fill: '#c4b5fd', stroke: '#7c3aed', emoji: '🏭' },
};

export function MalaysiaFieldsMap({ lang }: { lang: Lang }) {
  const [active, setActive] = useState<string | null>(null);
  const { title, subtitle, legend, fields, petronas_note, source } = LABELS[lang];

  const activeField = fields.find((f) => f.id === active);

  return (
    <div className="mt-8 rounded-3xl border border-stone-200 bg-stone-50 p-6 dark:border-stone-700 dark:bg-stone-800/50">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">{title}</h3>
        <p className="text-sm text-stone-500 dark:text-stone-400">{subtitle}</p>
      </div>

      {/* Legend */}
      <div className="mb-3 flex flex-wrap gap-3">
        {(['oil', 'gas', 'refinery'] as FieldType[]).map((type, i) => (
          <div key={type} className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-400">
            <span
              className="h-3 w-3 rounded-full border-2"
              style={{ backgroundColor: TYPE_COLORS[type].fill, borderColor: TYPE_COLORS[type].stroke }}
            />
            {legend[i]}
          </div>
        ))}
      </div>

      {/* SVG Map */}
      <div className="relative overflow-hidden rounded-2xl bg-sky-50 dark:bg-sky-950/30">
        <svg viewBox="0 0 400 320" className="w-full" style={{ touchAction: 'none' }} aria-label={title}>
          {/* Ocean */}
          <rect width="400" height="320" fill="#bae6fd" opacity="0.4" />

          {/* Peninsular Malaysia — simplified polygon */}
          <path
            d="M70,160 L75,140 L80,115 L95,100 L110,95 L120,98 L128,105 L132,120 L130,140 L125,160 L120,175 L118,190 L115,205 L112,218 L115,235 L120,250 L122,268 L118,282 L112,290 L100,295 L90,288 L82,270 L78,255 L75,240 L72,220 L70,200 Z"
            fill="#d4a574"
            stroke="#a8835e"
            strokeWidth="1.5"
          />
          {/* Shadow / hills */}
          <path
            d="M82,160 L88,140 L98,120 L108,110 L115,108 L118,120 L115,140 L110,160 L105,180 L102,195 Z"
            fill="#c49060"
            opacity="0.4"
          />

          {/* Sarawak */}
          <path
            d="M195,215 L210,205 L228,198 L245,193 L265,192 L282,195 L298,200 L312,208 L320,220 L315,235 L305,245 L290,252 L272,258 L255,262 L240,260 L225,255 L210,248 L200,238 Z"
            fill="#d4a574"
            stroke="#a8835e"
            strokeWidth="1.5"
          />

          {/* Sabah */}
          <path
            d="M292,148 L305,138 L318,132 L332,128 L342,132 L348,145 L346,158 L340,170 L330,178 L318,183 L305,182 L295,175 L288,163 Z"
            fill="#d4a574"
            stroke="#a8835e"
            strokeWidth="1.5"
          />

          {/* South China Sea label */}
          <text x="195" y="150" fill="#0369a1" fontSize="11" textAnchor="middle" fontStyle="italic" opacity="0.6">
            {lang === 'zh' ? '南中国海' : lang === 'ms' ? 'Laut China Selatan' : 'South China Sea'}
          </text>

          {/* Country label */}
          <text x="98" y="195" fill="#7c5a32" fontSize="10" textAnchor="middle" fontWeight="600">
            {lang === 'zh' ? '马来西亚半岛' : lang === 'ms' ? 'Semenanjung' : 'Peninsular'}
          </text>
          <text x="255" y="232" fill="#7c5a32" fontSize="10" textAnchor="middle" fontWeight="600">
            {lang === 'zh' ? '砂拉越' : 'Sarawak'}
          </text>
          <text x="318" y="162" fill="#7c5a32" fontSize="9" textAnchor="middle" fontWeight="600">
            Sabah
          </text>

          {/* Field markers */}
          {fields.map((f) => {
            const tc = TYPE_COLORS[f.type as FieldType];
            const isActive = active === f.id;
            return (
              <g
                key={f.id}
                onClick={() => setActive(isActive ? null : f.id)}
                style={{ cursor: 'pointer' }}
              >
                <circle
                  cx={f.cx}
                  cy={f.cy}
                  r={isActive ? 12 : 8}
                  fill={tc.fill}
                  stroke={tc.stroke}
                  strokeWidth={isActive ? 3 : 2}
                  opacity="0.9"
                >
                  <animate
                    attributeName="r"
                    values={isActive ? '12;15;12' : '8;8;8'}
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text x={f.cx} y={f.cy + 4} textAnchor="middle" fontSize="9">
                  {tc.emoji}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Tooltip */}
        {activeField && (
          <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-stone-200 bg-white/95 p-3 shadow-md backdrop-blur-sm dark:border-stone-700 dark:bg-stone-900/95">
            <div className="flex items-start gap-2">
              <span className="text-lg">{TYPE_COLORS[activeField.type as FieldType].emoji}</span>
              <div>
                <p className="text-sm font-bold text-stone-900 dark:text-stone-100">{activeField.name}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-stone-600 dark:text-stone-400">{activeField.note}</p>
              </div>
              <button
                onClick={() => setActive(null)}
                className="ml-auto text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 rounded-2xl bg-amber-50 p-4 text-xs leading-relaxed text-amber-900 dark:bg-amber-900/20 dark:text-amber-300">
        <span className="font-bold">🇲🇾 Petronas: </span>{petronas_note}
      </div>

      <p className="mt-3 text-right text-xs text-stone-400 dark:text-stone-500">
        <a
          href="https://www.petronas.com/our-business/upstream"
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
