import type { EditorialCopy } from './editorial';

export const zh: EditorialCopy = {
  home: {
    eyebrow: '官方燃油资讯',
    title: 'WhatTheFuel — 数据说话，不靠感觉。',
    subtitle: '经过验证的燃油价格、简洁的时间轴，以及全球能源市场的专业解说。',
    disclaimer: '独立教育项目。我们整理并提供官方价格、解说和来源链接；我们不发布官方价格或原创报道。',
    latestTitle: '最新燃油概览',
    latestSubtitle: '来自官方政府来源的当前价格与补贴资讯。',
    pricesLabel: '价格',
    newsLabel: '即时动态',
    loadingPrices: '正在加载验证数据。',
    emptyNews: '暂无相关新闻。',
  },
  understanding: {
    title: '读懂各显价格',
    intro: '关于燃油定价标签与地区差异的简明指南。',
    cards: [
      { title: '为何 RON95 价格固定', body: '政府制定了补贴零售价，以确保在市场波动时公众依然能享有稳定的燃油价格。' },
      { title: '为何 RON97 每周变动', body: 'RON97 与市场挂钩，根据全球原油走势，其定价以周为周期进行调整。' },
      { title: '为何柴油价格因地而异', body: '大马半岛与东马拥有各自独立的价格管理框架和补贴支持结构。' },
      { title: '何为“无补贴”价格', body: '这是在任何政府补贴应用前的参考市场价格，显示了燃油的真实成本。' },
      { title: '标签的重要性', body: '同一个加油泵可能显示多个价格点。了解这些数字能避免不准确的对比。' },
    ],
  },
  global: {
    title: '石油101：原油运作原理',
    intro: '深度了解原油的形成、质量等级以及它如何转化为您车辆中的燃油。',
    footnote: '本页解释全球市场机制。本地价格调整时间取决于国内政策与物流状况。',
    noteTitle: '注释',
    sections: [
      {
        title: '原油如何形成——3亿年的演变历程',
        paragraphs: [
          '原油是由数亿年前生活在古代海洋中的微型海洋生物（浮游生物）残骸形成的化石燃料。这些残骸随后被埋在海底沉积层之下。',
          '在数百万年的演变中，高温高压将这些有机物转化为干酪根，最终“裂解”为液态原油和天然气。这一漫长的地质过程决定了石油是不可再生资源。',
        ],
        sources: [
          { label: '宾州大学 EARTH 104', url: 'https://www.e-education.psu.edu/earth104/node/2215' },
          { label: 'EnergyEducation.ca', url: 'https://energyeducation.ca/encyclopedia/Petroleum_formation' },
        ],
      },
      {
        title: '原油品质——甜质与酸质、轻质与重质',
        paragraphs: [
          '原油的品质由密度（API重力）和硫含量定义。轻质原油流动性好，能产出更多如汽油类的高价值产品。“甜质”指低硫含量，这使得提炼过程更廉价且更环保。',
          '马来西亚的塔比斯（Tapis）原油属于超轻质超甜原油，是全球最具价值的基准之一。由于品质优异，其成交价格通常高于布伦特或WTI。',
        ],
        bullets: [
          '轻质甜原油：价值最高，提炼成本低（如：Tapis, WTI, Brent）。',
          '中质酸原油：中等提炼成本（如：迪拜原油）。',
          '重质原油：价值最低，需经过复杂的精炼过程（如：委内瑞拉重原油）。',
        ],
        sources: [
          { label: 'EIA 官方报告', url: 'https://www.eia.gov/todayinenergy/detail.php?id=31372' },
          { label: 'S&P 全球市场解读', url: 'https://www.spglobal.com/commodityinsights/en/market-insights/videos/market-movers-asia/041425-middle-east-iran-us-tensions-china-india-oil-steel-agriculture' },
        ],
      },
      {
        title: '原油如何提炼——分馏塔原理',
        paragraphs: [
          '提炼通过“分馏”将原油分离为各种可用成分。原油在塔内加热后，不同分子会根据其沸点在不同高度冷凝。',
          '轻分子作为汽油和气体在顶部收集，而重分子则沉在底部形成燃料油或沥青。一桶原油能同时转化为多种能源产品。',
        ],
        bullets: [
          '塔顶：液化石油气与汽油 (RON95/97)。',
          '塔中：煤油（航油）与柴油。',
          '塔底：燃料油与沥青。',
        ],
        sources: [
          { label: 'EIA 提炼指南', url: 'https://www.eia.gov/energyexplained/oil-and-petroleum-products/refining-crude-oil-fractions.php' },
          { label: 'Crown Oil 提炼流程', url: 'https://www.crownoil.co.uk/guides/oil-refining-process-guide/' },
        ],
      },
      {
        title: '全球最大产油国——生产排名',
        paragraphs: [
          '全球石油生产由美国、沙特阿拉伯和俄罗斯主导。这些主要生产国与OPEC成员通过调整产量来影响全球价格。美国的“页岩革命”已使其成为全球最大生产国。',
          '马来西亚在全球排名约第29位。虽然是重要的区域生产国，但产量占比仍较小。因此，马来西亚燃油价格仍主要受全球基准影响，而非独立运行。',
        ],
        bullets: [
          '🇺🇸 美国：~2200万桶/日 (全球最大)。',
          '🇸🇦 沙特阿拉伯：~1100万桶/日 (OPEC支柱)。',
          '🇷🇺 俄罗斯：~1100万桶/日 (OPEC+核心)。',
          '🇲🇾 马来西亚：~60万桶/日 (区域重要参与者)。',
        ],
        sources: [
          { label: 'EIA 2023 生产数据', url: 'https://www.eia.gov/international/data/world/petroleum-and-other-liquids/annual-petroleum-and-other-liquids-production' },
        ],
      },
      {
        title: '全球化定价，而非局部定价',
        paragraphs: [
          '原油价格反映了全球供应的紧张程度及地缘政治风险。交易员与炼油商会根据现货价格、库存水平和金融市场的同步信号做出反应。',
        ],
        sources: [{ label: 'EIA 市场分析', url: 'https://www.eia.gov/finance/markets/crudeoil/reports_and_analysis.php' }],
      },
      {
        title: '航运瓶颈推高物流成本',
        paragraphs: [
          '诸如霍尔木兹海峡等关键航道承担了全球20%的石油运输。这些咽喉点的任何潜在威胁都会立即推高运费和保险费用，即便实际供应尚未中断。',
        ],
        sources: [{ label: 'EIA 航道分析', url: 'https://www.eia.gov/international/analysis/special-topics/World_Oil_Transit_Chokepoints' }],
      },
      {
        title: '现货、期货与库存的平衡',
        paragraphs: [
          '市场需要在当前实物。供应量（现货）与未来预期（期货）之间寻找平衡。低库存会消除市场缓冲，使价格对全球新闻更为敏感。',
        ],
        sources: [{ label: 'EIA 金融市场概览', url: 'https://www.eia.gov/finance/markets/crudeoil/reports_and_analysis.php' }],
      },
      {
        title: '马来西亚深处全球体系之中',
        paragraphs: [
          '虽然马来西亚是产油国，但并非与世隔绝。我们在全球体系中交易原油、精制产品及航运运力。任何地区的冲突或贸易中断都会影响国内成本。',
        ],
        bullets: [
          '全球基准价格波动直接影响燃油替代成本。',
          '航运与保险成本具有全球联动性。',
          '炼油商在国际定价框架下运行运营。',
        ],
      },
    ],
  },
  malaysia: {
    title: '马来西亚与石油：深度解析',
    intro: '马来西亚在生产与出口优质原油的同时，依然是全球市场的参与者。以下是我们的石油工业运作概况。',
    footnote: '本地定价是全球供应、国内政策与燃油替代成本之间的复杂平衡点。',
    noteTitle: '核心观点',
    sections: [
      {
        title: '马来西亚生产概况：巅峰与现状',
        paragraphs: [
          '2004年，我国石油产量达到每日约86.2万桶的巅峰。随着半岛东海岸成熟浅海油田的衰退，目前产量已降至每日约60万桶左右。',
          '投资已转向沙巴和砂拉越技术极其复杂的深海油田。这些项目维持了产量，但与传统油田相比，其开发成本更高、周期更长。',
        ],
        sources: [{ label: 'EIA 马来西亚概览', url: 'https://www.eia.gov/international/analysis/country/MYS' }],
      },
      {
        title: '大马石油产自哪里：核心油田',
        paragraphs: [
          '马来西亚所有核心石油产区皆位于近海。主要分布在三个区域：登嘉楼近海、以及沙巴与砂拉越的深海领域。',
          '虽然半岛油田已趋于成熟，但沙巴凭借 Gumusut-Kakap 等大型深海项目成为了石油产量的增长点。',
        ],
        bullets: [
          '登嘉楼近海：成熟产区，产出轻质甜原油 (Tapis)。',
          '沙巴近海：深海增长项目 (Kikeh, Malikai)。',
          '砂拉越近海：国内主要的天然气与石油产地。',
        ],
        sources: [{ label: 'Petronas 业务组合', url: 'https://www.petronas.com/what-we-do/upstream' }],
      },
      {
        title: '塔比斯原油：大马的优质基准',
        paragraphs: [
          '塔比斯原油以超轻、超甜著称，是亚洲最高品质的原油之一。由于能提炼出更多汽油和航油，其价格通常高于布伦特原油。',
          '经济现实：马来西亚出口溢价的塔比斯原油以获取外汇，同时进口价格较低的酸性重原油供国内炼油厂使用。这意味着加油站的燃油通常并非由本土出口的优质原油提炼。',
        ],
        bullets: [
          '卓越品质：极低硫含量 (0.04%) 及超轻密度 (45° API)。',
          '战略出口：作为亚太地区的优质定价基准。',
          '炼油分工：国内炼厂通常针对进口重质原油进行优化。',
        ],
        sources: [{ label: 'EIA 基准分析', url: 'https://www.eia.gov/finance/markets/crudeoil/reports_and_analysis.php' }],
      },
      {
        title: 'Petronas：国家石油公司',
        paragraphs: [
          'Petronas 成立于1974年，依法拥有大马所有石油资源。国际公司通过“产品分成合同”(PSC) 在此运营，投入技术与资本以换取部分产量。',
          '它是国家财政的核心支柱，通过缴纳股息和税收，通常贡献了联邦政府 20% 至 30% 的财政收入，具体数额受全球油价影响。',
        ],
        bullets: [
          '定位：资源所有权人与国家财政支柱。',
          '收入：2023年向政府支付超过400亿令吉股息。',
          '全球化：业务遍及30多个国家，拥有世界级的液化天然气设施。',
        ],
        sources: [{ label: 'Petronas 财务报告', url: 'https://www.petronas.com/investor-relations/reports-results' }],
      },
      {
        title: '大马炼油能力：国内加工现状',
        paragraphs: [
          '马来西亚拥有四座大型炼油厂，包括边佳兰巨大的 RAPID 综合设施（与沙特阿美合资）。目前总炼油能力约为每日53万桶。',
          '尽管如此，由于国内需求超过每日60万桶，大马仍是燃油净进口国。此外，我们的炼油厂多为加工进口的中东品级而设计，而非本地轻油。',
        ],
        bullets: [
          '边佳兰 RAPID：每日30万桶产能 (Petronas + Aramco)。',
          '净进口状况：国内消费需求超出了总炼油产量。',
          '定价联动：炼油成本与利润空间仍与全球市场挂钩。',
        ],
        sources: [{ label: 'Petronas 下游业务', url: 'https://www.petronas.com/what-we-do/downstream' }],
      },
      {
        title: '补贴机制：定向而非无限',
        paragraphs: [
          '政府通过 BUDI95 等定向支持系统管理零售价格。这在确保民众负担能力与维持国家财政健康之间取得了平衡。',
          '当前政策维持了 RON95 的固定价格（针对特定额度），并为柴油和东马地区设定了独立的支持方案。',
        ],
        bullets: [
          'BUDI95：针对性 RON95 补贴系统。',
          '配额管理：通过设定月度限额来管理财政风险。',
          '地区支持：为沙巴及砂拉越制定了不同的执行框架。',
        ],
        sources: [{ label: '财政部官方动态', url: 'https://www.mof.gov.my/portal/en/news/press-citations/' }],
      },
    ],
  },
  myths: {
    title: '误区与事实',
    intro: '关于燃油常见疑难的直观解答。',
    cards: [
      {
        myth: '“大马产石油，汽油就该非常便宜。”',
        fact: '我们在全球体系中交易。我们出口溢价油、进口廉价油进行提炼，国内价格始终受全球替代成本的影响。',
        whyItMatters: '无视全球贸易现实会产生对油价波动的误读。',
        sources: [{ label: 'DOSM 统计数据', url: 'https://www.dosm.gov.my/portal-main/' }],
      },
      {
        myth: '“加油站价格就是今天的国际原油价。”',
        fact: '零售价格反映的是前一周的平均成本，而非对今日市场新闻的即时反应。',
        whyItMatters: '价格滞后解释了为何全球油价下跌不会在同日下午立即反映在加油站。',
        sources: [{ label: '财政部定价说明', url: 'https://www.mof.gov.my/portal/en/news/press-citations/' }],
      },
      {
        myth: '“补贴意味着政府能无止境承担任何成本。”',
        fact: '补贴有直接的财政代价。BUDI95 等系统通过限额和定向投放，确保政府能持续提供支持而不透支预算。',
        whyItMatters: '无限补贴会产生财政风险，长期可能影响其他公共服务。',
        sources: [{ label: '财政部新闻中心', url: 'https://www.mof.gov.my/portal/en/news/press-citations/' }],
      },
      {
        myth: '“产油国能免受全球震荡的影响。”',
        fact: '全球航道瓶颈及冲突会推高运费、保险费以及确保油泵运行所需的“替代桶”价格。',
        whyItMatters: '产油身份有帮助，但地缘政治依然会决定大宗商品的最终价值。',
        sources: [{ label: 'EIA 航道安全分析', url: 'https://www.eia.gov/international/analysis/special-topics/World_Oil_Transit_Chokepoints' }],
      },
    ],
  },
  sources: {
    title: '来源与方法论',
    intro: 'WhatTheFuel 仅使用来自官方政府及全球能源权威机构的验证数据。',
    updateTitle: '更新机制',
    updateBody: '即时动态从批准的来源库抓取。深度分析与解说仅在有新来源数据支持时更新。',
    sourceTitle: '资讯来源',
    sourceBody: '我们整合了马来西亚政策数据、官方统计数据及全球市场分析，呈现于同一个易读的平台。',
    noteTitle: '我们的承诺',
    noteBody: '不发布无来源的主张，无灌水内容，且所有数据可溯源。',
    sourceGroups: [
      { name: '马来西亚财政部', purpose: '定价政策、补贴与配额', url: 'https://www.mof.gov.my/portal/en/news/press-citations/' },
      { name: '马来西亚统计局', purpose: '经济与石油贸易数据', url: 'https://www.dosm.gov.my/portal-main/' },
      { name: '美国能源信息署', purpose: '全球市场结构与运行机制', url: 'https://www.eia.gov/' },
      { name: 'Petronas', purpose: '企业运营与国家资源所有权', url: 'https://www.petronas.com/' },
      { name: 'BP 统计报告', purpose: '全球产量与能源数据', url: 'https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy.html' },
    ],
  },
};
