import React from 'react';

const LABELS = {
  en: {
    title: 'Crude Oil Quality Matrix',
    subtitle: 'API Gravity × Sulfur Content',
    xAxis: ['Light', 'Medium', 'Heavy'],
    yAxis: ['Sweet\n(<0.5% S)', 'Sour\n(>0.5% S)'],
    cells: [
      { type: 'Light Sweet', color: 'bg-amber-100 border-amber-400 text-amber-900 dark:bg-amber-900/30 dark:border-amber-600 dark:text-amber-200', crown: true, desc: 'Most valuable. Tapis crude (Malaysia) & Brent fall here.' },
      { type: 'Medium Sweet', color: 'bg-amber-50 border-amber-300 text-amber-800 dark:bg-amber-900/20 dark:border-amber-700 dark:text-amber-300', desc: 'Good refining value. WTI is a famous example.' },
      { type: 'Heavy Sweet', color: 'bg-stone-100 border-stone-300 text-stone-700 dark:bg-stone-800 dark:border-stone-600 dark:text-stone-300', desc: 'Less common; valuable but harder to process.' },
      { type: 'Light Sour', color: 'bg-orange-50 border-orange-300 text-orange-800 dark:bg-orange-900/20 dark:border-orange-700 dark:text-orange-300', desc: 'Cheap to extract but needs sulfur removal before refining.' },
      { type: 'Medium Sour', color: 'bg-red-50 border-red-300 text-red-800 dark:bg-red-900/20 dark:border-red-700 dark:text-red-300', desc: 'Dubai crude benchmark. Most Middle Eastern oil is here.' },
      { type: 'Heavy Sour', color: 'bg-red-100 border-red-400 text-red-900 dark:bg-red-900/30 dark:border-red-600 dark:text-red-200', desc: 'Lowest value. Requires specialized refining. Venezuela tar sands.' },
    ],
    apiNote: 'Higher API° = lighter = cheaper to refine and higher yield of petrol/diesel.',
    sulfurNote: 'Sweet = <0.5% sulfur. Sour = >0.5%. Sulfur must be removed or it damages engines and pollutes.',
    tapisNote: 'Tapis crude (Malaysia): API ~44° and ~0.04% sulfur — among Asia\'s finest.',
    source: 'Source: EIA Crude Oil Characteristics',
  },
  ms: {
    title: 'Matriks Kualiti Minyak Mentah',
    subtitle: 'Graviti API × Kandungan Sulfur',
    xAxis: ['Ringan', 'Sederhana', 'Berat'],
    yAxis: ['Manis\n(<0.5% S)', 'Masam\n(>0.5% S)'],
    cells: [
      { type: 'Ringan Manis', color: 'bg-amber-100 border-amber-400 text-amber-900 dark:bg-amber-900/30 dark:border-amber-600 dark:text-amber-200', crown: true, desc: 'Paling bernilai. Minyak Tapis (Malaysia) & Brent berada di sini.' },
      { type: 'Sederhana Manis', color: 'bg-amber-50 border-amber-300 text-amber-800 dark:bg-amber-900/20 dark:border-amber-700 dark:text-amber-300', desc: 'Nilai penapisan yang baik. WTI ialah contoh terkenal.' },
      { type: 'Berat Manis', color: 'bg-stone-100 border-stone-300 text-stone-700 dark:bg-stone-800 dark:border-stone-600 dark:text-stone-300', desc: 'Kurang biasa; bernilai tetapi lebih sukar diproses.' },
      { type: 'Ringan Masam', color: 'bg-orange-50 border-orange-300 text-orange-800 dark:bg-orange-900/20 dark:border-orange-700 dark:text-orange-300', desc: 'Murah dilombong tetapi perlu penyingkiran sulfur sebelum penapisan.' },
      { type: 'Sederhana Masam', color: 'bg-red-50 border-red-300 text-red-800 dark:bg-red-900/20 dark:border-red-700 dark:text-red-300', desc: 'Penanda aras minyak Dubai. Kebanyakan minyak Timur Tengah berada di sini.' },
      { type: 'Berat Masam', color: 'bg-red-100 border-red-400 text-red-900 dark:bg-red-900/30 dark:border-red-600 dark:text-red-200', desc: 'Nilai terendah. Memerlukan penapisan khusus. Contoh: pasir tar Venezuela.' },
    ],
    apiNote: 'API° lebih tinggi = lebih ringan = lebih murah untuk ditapis dan hasil petrol/diesel lebih tinggi.',
    sulfurNote: 'Manis = <0.5% sulfur. Masam = >0.5%. Sulfur mesti disingkirkan atau ia merosakkan enjin dan mencemarkan udara.',
    tapisNote: 'Minyak Tapis (Malaysia): API ~44° dan ~0.04% sulfur — antara yang terbaik di Asia.',
    source: 'Sumber: EIA Crude Oil Characteristics',
  },
  zh: {
    title: '原油品质矩阵',
    subtitle: 'API比重 × 含硫量',
    xAxis: ['轻质', '中质', '重质'],
    yAxis: ['甜质\n(<0.5% S)', '含硫\n(>0.5% S)'],
    cells: [
      { type: '轻质甜原油', color: 'bg-amber-100 border-amber-400 text-amber-900 dark:bg-amber-900/30 dark:border-amber-600 dark:text-amber-200', crown: true, desc: '价值最高。马来西亚Tapis原油和布伦特原油均属此类。' },
      { type: '中质甜原油', color: 'bg-amber-50 border-amber-300 text-amber-800 dark:bg-amber-900/20 dark:border-amber-700 dark:text-amber-300', desc: '炼制价值较高。WTI原油是著名代表。' },
      { type: '重质甜原油', color: 'bg-stone-100 border-stone-300 text-stone-700 dark:bg-stone-800 dark:border-stone-600 dark:text-stone-300', desc: '较少见。有价值但加工难度大。' },
      { type: '轻质含硫原油', color: 'bg-orange-50 border-orange-300 text-orange-800 dark:bg-orange-900/20 dark:border-orange-700 dark:text-orange-300', desc: '开采成本低，但炼制前须脱硫。' },
      { type: '中质含硫原油', color: 'bg-red-50 border-red-300 text-red-800 dark:bg-red-900/20 dark:border-red-700 dark:text-red-300', desc: '迪拜原油基准。大多数中东原油属于此类。' },
      { type: '重质含硫原油', color: 'bg-red-100 border-red-400 text-red-900 dark:bg-red-900/30 dark:border-red-600 dark:text-red-200', desc: '价值最低。需专业炼制设备。委内瑞拉油砂即为典型。' },
    ],
    apiNote: 'API度越高 = 越轻 = 炼制成本越低，汽油/柴油产出率越高。',
    sulfurNote: '甜质 = 含硫量<0.5%。含硫质 = >0.5%。硫磺必须去除，否则会损坏发动机并造成污染。',
    tapisNote: 'Tapis原油（马来西亚）：API约44°，含硫量约0.04%——属于亚洲品质最优的原油之一。',
    source: '来源：EIA原油特性数据',
  },
} as const;

type Lang = 'en' | 'ms' | 'zh';

export function CrudeQualityMatrix({ lang }: { lang: Lang }) {
  const { title, subtitle, xAxis, cells, apiNote, sulfurNote, tapisNote, source } = LABELS[lang];

  return (
    <div className="mt-8 rounded-3xl border border-stone-200 bg-stone-50 p-6 dark:border-stone-700 dark:bg-stone-800/50">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">{title}</h3>
        <p className="text-sm text-stone-500 dark:text-stone-400">{subtitle}</p>
      </div>

      {/* Axis label row */}
      <div className="mb-1 ml-20 grid grid-cols-3 gap-2">
        {xAxis.map((x) => (
          <div key={x} className="text-center text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
            {x}
          </div>
        ))}
      </div>

      {/* Sweet row */}
      <div className="mb-1 flex items-center gap-2">
        <div className="w-16 shrink-0 text-right text-xs font-semibold text-green-700 dark:text-green-400">
          {lang === 'en' ? 'Sweet' : lang === 'ms' ? 'Manis' : '甜质'}
          <span className="block font-normal text-stone-400">{'<0.5% S'}</span>
        </div>
        <div className="grid flex-1 grid-cols-3 gap-2">
          {cells.slice(0, 3).map((cell) => (
            <div key={cell.type} className={`relative rounded-2xl border-2 p-3 text-xs ${cell.color}`}>
              {'crown' in cell && cell.crown && (
                <span className="absolute -top-2 left-2 text-base">👑</span>
              )}
              <p className="font-bold">{cell.type}</p>
              <p className="mt-1 opacity-80">{cell.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sour row */}
      <div className="flex items-center gap-2">
        <div className="w-16 shrink-0 text-right text-xs font-semibold text-red-600 dark:text-red-400">
          {lang === 'en' ? 'Sour' : lang === 'ms' ? 'Masam' : '含硫'}
          <span className="block font-normal text-stone-400">{'>0.5% S'}</span>
        </div>
        <div className="grid flex-1 grid-cols-3 gap-2">
          {cells.slice(3, 6).map((cell) => (
            <div key={cell.type} className={`rounded-2xl border-2 p-3 text-xs ${cell.color}`}>
              <p className="font-bold">{cell.type}</p>
              <p className="mt-1 opacity-80">{cell.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div className="mt-4 space-y-1.5 rounded-2xl bg-white p-4 text-xs dark:bg-stone-900">
        <p className="text-stone-600 dark:text-stone-400">📐 {apiNote}</p>
        <p className="text-stone-600 dark:text-stone-400">⚗️ {sulfurNote}</p>
        <p className="font-semibold text-amber-700 dark:text-amber-400">🇲🇾 {tapisNote}</p>
      </div>

      <p className="mt-3 text-right text-xs text-stone-400 dark:text-stone-500">
        <a
          href="https://www.eia.gov/energyexplained/oil-and-petroleum-products/where-our-oil-comes-from.php"
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
