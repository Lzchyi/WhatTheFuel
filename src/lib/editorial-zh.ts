import type { EditorialCopy } from './editorial';

export const zh: EditorialCopy = {
  home: {
    eyebrow: '来自官方来源的油价资讯',
    title: 'WhatTheFuel — 数据说话，不靠感觉。',
    subtitle: '查看最新油价、价格走势时间轴，以及为什么价格会涨跌的简明解释。',
    disclaimer: '独立教育项目。我们收集并整理来自官方来源的信息。我们不发布任何官方价格或新闻报道。',
    latestTitle: '当前油价',
    latestSubtitle: '直接来自官方政府来源的最新燃油价格。',
    pricesLabel: '价格',
    newsLabel: '新闻',
    loadingPrices: '正在加载价格数据。',
    emptyNews: '暂无新闻。',
  },
  understanding: {
    title: '读懂这些数字',
    intro: '简明指南：为什么每种燃油的价格设定方式不同。',
    cards: [
      { title: '为什么 RON95 价格固定？', body: '政府固定 RON95 的价格，让公众支付稳定价格，而不是随波动的国际市场价格。' },
      { title: '为什么 RON97 每周变动？', body: 'RON97 跟随市场价格，因此每周调整一次——与受补贴的 RON95 不同。' },
      { title: '为什么沙巴/砂拉越柴油价格不同？', body: '半岛和东马来西亚有不同的支持结构和物流成本，因此柴油价格不同。' },
      { title: '"无补贴"是什么意思？', body: '无补贴价格是政府介入前的实际市场价格。它显示了补贴填补了多大的差距。' },
      { title: '为什么有这么多不同的价格？', body: '同一个加油站可能显示公众价格、参考价格和地区价格。了解差异可以避免误解。' },
    ],
  },
  global: {
    title: '石油101：原油如何运作',
    intro: '从3亿年前的微型海洋生物到您油箱里的燃油——这是您需要了解的关于原油的一切：它如何形成、如何判断品质、如何提炼，以及谁的产量最大。',
    footnote: '此页面解释市场机制。这并不意味着每一个国外事件都会以相同的速度直接影响马来西亚。',
    noteTitle: '本页说明的局限性',
    sections: [
      {
        title: '原油如何形成——3亿年的故事',
        paragraphs: [
          '原油并非天然存在于地下的液体。它实际上是微型海洋生物的高度压缩、"烹熟"的残骸——主要是在中生代（约6600万至2.52亿年前）生活在远古海洋中的浮游植物和浮游动物。',
          '当这些生物死亡后，它们沉入缺氧的海底，因此无法完全腐烂。数百万年来，沉积物层——泥土、黏土和沙子——将它们越埋越深。',
          '深度埋藏（通常2–4公里，温度60–160°C）产生的热量和压力触发了一个叫做干酪根分解的过程：有机物质先变成一种叫做干酪根的蜡状固体，然后"裂解"成液态原油和天然气。这个温度范围被称为"石油窗口"。',
          '由于石油密度比地下卤水小，它向上迁移穿过多孔岩石层，直到被不透水的岩石层阻挡——这就形成了今天钻探的石油储层。',
          '这就是为什么石油被称为化石燃料：它确实由远古生命构成。这也是它不可再生的原因——其形成过程需要数千万年。',
        ],
        sources: [
          { label: '宾州大学 EARTH 104：石油起源（英）', url: 'https://www.e-education.psu.edu/earth104/node/1382' },
          { label: 'EnergyEducation.ca：石油形成（英）', url: 'https://energyeducation.ca/encyclopedia/Petroleum_formation' },
        ],
      },
      {
        title: '原油品质——甜质与酸质，轻质与重质',
        paragraphs: [
          '并非所有原油都一样。它按两个直接影响其价值和提炼成本的指标进行分类。',
          'API重力衡量密度。轻质原油（>31° API）密度较低、流动性好，每桶能产出更多高价值产品，如汽油和航空燃料。重质原油（<22° API）需要更密集的提炼。"甜质"是指低硫含量（低于0.5%）——更容易、更经济地处理以符合环境标准。"酸质"原油硫含量较高，需要额外脱硫处理。',
          '马来西亚的塔比斯（Tapis）原油——产自登嘉楼海域——是世界上最轻、最甜的原油之一，API重力45°，硫含量仅0.04%。这就是为什么它更昂贵，并被用作亚太地区轻质甜质原油的定价基准。',
          '主要全球基准包括布伦特（北海，38° API，0.37% S）、WTI（美国，39.6° API，0.24% S）和迪拜原油（中东，31° API，2.0% S——中等酸质）。塔比斯比这三者更轻、更甜，这解释了为什么马来西亚原油历史上以高于布伦特的溢价出售。',
        ],
        bullets: [
          '轻质（>31° API）+ 甜质（<0.5% S）→ 价值最高，提炼成本最低 → 塔比斯、WTI、布伦特',
          '中等（~31° API）+ 酸质（>0.5% S）→ 中等提炼成本 → 迪拜原油',
          '重质（<22° API）+ 酸质 → 价值最低，提炼最密集 → 委内瑞拉重质原油',
          'API越高 + 硫含量越低 = 每桶汽油越多 = 市场价格越高',
        ],
        sources: [
          { label: 'EIA：影响原油价格的因素（英）', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php' },
          { label: 'OilPriceAPI：原油基准比较（英）', url: 'https://oilpriceapi.com/blog/crude-oil-benchmarks' },
        ],
      },
      {
        title: '原油如何提炼——分馏塔',
        paragraphs: [
          '直接来自油井的原油没有用处——它必须被分离成各个组分。主要工艺是大气分馏蒸馏：原油被加热到约400°C并泵入高塔。由于不同的烃分子有不同的沸点，它们在塔的不同高度分离。',
          '塔底最热，塔顶最冷。较轻的分子（碳链较短，沸点较低）在冷凝前上升得更高。较重的分子在较低处冷凝。',
          '在不同高度收集的每个"馏分"变成不同的产品。这就是为什么一桶原油同时产出炊事气、汽油、航空燃料、柴油和沥青——它们都已经存在于原油中，只是混合在一起。',
          '像塔比斯这样的轻质甜质原油每桶产出更多高价值馏分（汽油、航空燃料），相比重质酸质原油——这就是为什么API重力和硫含量直接影响价格。',
        ],
        bullets: [
          '液化石油气 / 炼厂气 — 低于25°C — C1–C4 — 炊事气、石化原料',
          '汽油（Gasoline）— 40–150°C — C5–C10 — 加油站RON95、RON97',
          '石脑油 — 70–200°C — C5–C12 — 塑料、化学品、溶剂',
          '煤油 / 航空燃料 — 150–300°C — C10–C16 — 航空、供暖',
          '柴油 / 瓦斯油 — 220–350°C — C14–C20 — 卡车、火车、发电机',
          '燃料油 — 250–500°C — C20–C70 — 船舶、工业炉',
          '沥青 / 柏油 — 高于500°C — C70+ — 道路铺设',
        ],
        sources: [
          { label: 'Busch Vacuum：分馏蒸馏（英）', url: 'https://www.buschvacuum.com/en/knowledge/fractional-distillation' },
          { label: 'Crown Oil：石油提炼工艺（英）', url: 'https://www.crownoil.co.uk/news/oil-refining-process/' },
        ],
      },
      {
        title: '谁产油最多——全球排名',
        paragraphs: [
          '根据美国能源信息署（EIA），2023年全球石油总产量约为每日1.01亿桶。美国是遥遥领先的最大生产国，其次是沙特阿拉伯和俄罗斯。',
          '前10大生产国贡献了约70%的全球产量。石油输出国组织（OPEC）集体管理产量以影响全球价格——但美国、加拿大和巴西等非OPEC生产国越来越多地塑造市场。',
          '马来西亚在全球排名约第29位，每日约60万桶——是东南亚的重要生产国，但在全球产量中占比较小。这就是为什么马来西亚油价仍主要跟随全球原油基准。',
          '2010年代的页岩革命将美国从主要进口国转变为全球最大生产国——证明技术和投资如何能迅速改变生产格局。',
        ],
        bullets: [
          '🇺🇸 美国 — 2190万桶/天 — 全球最大，页岩油驱动',
          '🇸🇦 沙特阿拉伯 — 1110万桶/天 — 最大的OPEC生产国',
          '🇷🇺 俄罗斯 — 1080万桶/天 — OPEC+成员',
          '🇨🇦 加拿大 — 580万桶/天 — 主要为油砂（阿尔伯塔）',
          '🇨🇳 中国 — 530万桶/天 — 庞大但仍是主要净进口国',
          '🇮🇶 伊拉克 — 440万桶/天 — OPEC，大型常规储量',
          '🇧🇷 巴西 — 430万桶/天 — 深水盐下层油田（巴西国家石油公司）',
          '🇦🇪 阿联酋 — 420万桶/天 — OPEC，阿布扎比主导',
          '🇮🇷 伊朗 — 400万桶/天 — OPEC，制裁限制出口',
          '🇰🇼 科威特 — 290万桶/天 — OPEC，人均储量高',
          '🇲🇾 马来西亚 — 60万桶/天 — 约第29位，东南亚主要生产国',
        ],
        sources: [
          { label: 'EIA：2023年世界石油产量', url: 'https://www.eia.gov/international/data/world/petroleum-and-other-liquids/annual-petroleum-and-other-liquids-production' },
          { label: 'EIA：国家能源概况', url: 'https://www.eia.gov/international/overview/world' },
        ],
      },
      {
        title: '油价由全球市场决定，而非单一国家',
        paragraphs: [
          '原油价格的涨跌是因为交易员、炼油商、航运公司和政府对一件事做出反应：当前全球供应有多紧张，以及未来几周的风险有多大。',
          '美国能源信息署（EIA）确定了主要驱动因素——包括即期价格、OPEC配额、库存水平、金融市场，以及来自OECD和非OECD国家的需求。',
        ],
        sources: [
          { label: 'EIA：石油金融市场', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
          { label: 'EIA：非OECD需求', url: 'https://www.eia.gov/finance/markets/crudeoil/demand-nonoecd.php' },
        ],
      },
      {
        title: '狭窄的航运通道会迅速推高成本',
        paragraphs: [
          '霍尔木兹海峡是最好的例子。EIA指出，2024年每天约有2000万桶石油流经该海峡——约占全球石油消费量的五分之一。',
          '当这条通道看似受到威胁时，市场不会等待封锁发生。保险费、油轮租金、替代成本和投机行为都会推高价格——早在司机在加油站感受到影响之前。',
        ],
        sources: [{ label: 'EIA：霍尔木兹海峡分析', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' }],
      },
      {
        title: '即期价格、期货价格和库存不会同步波动',
        paragraphs: [
          'EIA解释说，现货价格和期货合约对冲击的反应方式不同。当交易员预期未来供应紧张时，期货合约首先上涨。当实物供应现在中断时，即期价格可能立即飙升。',
          '库存是这两个世界之间的缓冲。库存低、炼油产能有限或航运中断都会使市场对新闻更为敏感。',
        ],
        sources: [
          { label: 'EIA：金融市场', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
          { label: 'EIA：OECD需求', url: 'https://www.eia.gov/finance/markets/crudeoil/demand-oecd.php' },
        ],
      },
      {
        title: '马来西亚也受同样市场影响',
        paragraphs: [
          '马来西亚是石油生产国，但这并不意味着国内价格与全球价格隔绝。我们仍在同一个全球市场中交易原油、炼制产品、航运产能和替代桶。',
          '这就是为什么遥远的冲突或航运中断仍会影响国内替代成本、补贴压力和每周价格更新时间。',
        ],
        bullets: [
          '全球基准走势影响国内替代成本。',
          '即使原油价格不变，航运和保险成本也可能上涨。',
          '炼油商和分销商仍在同一全球系统中购买产品。',
        ],
      },
    ],
  },
  malaysia: {
    title: '马来西亚与石油——完整图景',
    intro: '马来西亚生产石油、出口优质原油，并仍参与同一全球燃油市场。这是马来西亚石油的真实故事——油田、国家石油公司、塔比斯原油、炼油厂，以及为什么价格仍会波动。',
    footnote: '核心问题不是马来西亚脆弱或无能为力。核心问题是，国内价格仍然依赖全球供应、国内政策和实际替代桶成本。',
    noteTitle: '核心要点',
    sections: [
      {
        title: '马来西亚石油生产故事——峰值与下降',
        paragraphs: [
          '马来西亚石油产量在2004年达到顶峰，约为每日86.2万桶，主要由马来西亚半岛东海岸近海的浅水油田驱动——尤其是登嘉楼周边地区。',
          '此后，产量持续下降至2023年的约每日59.7万桶——比峰值下降31%。半岛成熟油田是主要拖累；该地区产量在过去十年间减少了约一半。',
          '该行业将重心转向沙巴和砂拉越海域技术难度更大的深水油田。这些深水项目（如沙巴的Gumusut-Kakap和Kikeh）维持了产量，但成本更高，产量增速比早期浅水开发慢。',
          '按当前产量和已探明储量水平，马来西亚估计还有约13年的石油储量寿命——这使储量替换和深水勘探成为国家石油公司的战略重点。',
        ],
        sources: [
          { label: 'EIA：马来西亚国家分析', url: 'https://www.eia.gov/international/analysis/country/MYS' },
          { label: 'IndexMundi：马来西亚石油产量', url: 'https://www.indexmundi.com/energy/?country=my&product=oil&graph=production' },
          { label: 'DOSM：2025年第一季度石油统计', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-first-quarter-2025' },
        ],
      },
      {
        title: '马来西亚石油来自哪里——主要油田',
        paragraphs: [
          '马来西亚所有具商业意义的石油产量均来自近海。没有重要的陆上产量。这些油田集中在南海和苏禄海的三个主要区域。',
          '登嘉楼海域（半岛东海岸）：历史最悠久、最成熟的产区。马来西亚最知名的原油——塔比斯原油——就产自这里，还有Dulang、Bekok和Angsi油田。这些油田正在衰退，但仍在生产。',
          '沙巴海域：未来增长区域。Kikeh（马来西亚首个由Murphy Oil开发的深水项目）和Gumusut-Kakap（壳牌/国家石油公司）等深水油田产量可观。开发更复杂、成本更高，但储量庞大。',
          '砂拉越海域：以天然气为主（民都鲁LNG综合设施是全球最大的液化天然气出口商之一），但也有来自Dulang和Jintan等油田的石油产量。Cakerawala气田跨越马来西亚-泰国边境。',
        ],
        bullets: [
          '登嘉楼海域 — 塔比斯、Dulang、Bekok、Angsi — 成熟、轻质甜质、衰退中',
          '沙巴海域 — Kikeh、Gumusut-Kakap、Malikai — 深水、增长区域',
          '砂拉越海域 — Jintan、Cakerawala（气）、Karig — 油气混合',
          '无重要陆上油田——马来西亚完全是近海开采',
        ],
        sources: [
          { label: 'EIA：马来西亚国家分析', url: 'https://www.eia.gov/international/analysis/country/MYS' },
          { label: 'Petronas：运营概况', url: 'https://www.petronas.com/what-we-do' },
        ],
      },
      {
        title: '塔比斯原油——马来西亚的优质基准原油',
        paragraphs: [
          '塔比斯原油产自登嘉楼海域的塔比斯油田，是亚太地区最具价值的原油品级之一。API重力约45°，硫含量仅0.04%，被归类为超轻质超甜质——比布伦特、WTI或迪拜原油更轻、更甜。',
          '正因如此，塔比斯历史上一直作为亚太地区轻质甜质定价基准——类似布伦特在全球扮演的角色。日本、韩国、新加坡和澳大利亚的炼油厂长期争购塔比斯，因为与更重的品级相比，每桶能产出更多汽油、航油和柴油。',
          '对马来西亚消费者来说有一个讽刺之处：马来西亚以溢价出口塔比斯，同时进口更便宜的重质酸质原油（通常来自中东）供国内炼油厂使用。这是一个刻意的经济决策——以最佳价格出售优质产品，同时加工更便宜的品级服务国内市场。从财务上讲是合理的，但意味着马来西亚加油站的燃油并非来自马来西亚自己的优质塔比斯原油。',
        ],
        bullets: [
          'API重力：45° — 超轻质（WTI：39.6°，布伦特：38.0°）',
          '硫含量：0.04% — 超甜质（WTI：0.24%，布伦特：0.37%）',
          '角色：亚太地区轻质甜质原油定价基准',
          '目的地：日本、韩国、新加坡、澳大利亚炼油厂',
          '讽刺之处：以溢价出口；国内炼油厂使用更便宜的进口原油',
        ],
        sources: [
          { label: 'OilPriceAPI：塔比斯原油概况（英）', url: 'https://oilpriceapi.com/blog/crude-oil-benchmarks' },
          { label: 'EIA：亚太原油基准（英）', url: 'https://www.eia.gov/finance/markets/crudeoil/' },
        ],
      },
      {
        title: '国家石油公司——马来西亚国家石油公司',
        paragraphs: [
          '马来西亚国家石油公司（Petronas，Petroliam Nasional Berhad）于1974年根据《石油开发法》成立，该法赋予这家国家公司对马来西亚所有石油资源的所有权。这意味着在马来西亚开采的每一桶石油或每一立方英尺天然气在法律上都是国家石油公司拥有的资源——壳牌、埃克森美孚和Murphy Oil等国际公司作为产品分成合同（PSC）合作伙伴运营，投入资本和专业知识换取产量份额，而国家石油公司保留资源所有权。',
          '国家石油公司是马来西亚联邦政府收入的最大单一贡献者。2023年，它向政府支付了400亿令吉的股息——约占联邦总收入的19–20%。2022年，这一数字为500亿令吉（占联邦收入的28–31%），反映了当年更高的全球油价。',
          '除上游生产外，国家石油公司还在砂拉越民都鲁运营马来西亚最大的LNG出口设施（全球最大之一），通过Petronas Dagangan开展国内零售，拥有MISC（全球航运公司），并在30多个国家开展国际业务。',
        ],
        bullets: [
          '成立时间：1974年（《石油开发法》——敦阿卜杜勒·拉扎克）',
          '法律地位：拥有100%马来西亚石油资源',
          '股息：400亿令吉（2023年）≈联邦收入20%；500亿令吉（2022年）≈31%',
          '民都鲁LNG：全球最大LNG出口综合设施之一',
          '国际业务：在30多个国家开展业务',
          'PSC模式：国际石油公司投资运营；国家石油公司保留资源所有权',
        ],
        sources: [
          { label: '国家石油公司2023年综合报告', url: 'https://www.petronas.com/investor-relations/annual-report' },
          { label: '马来西亚财政部：2023年联邦收入', url: 'https://www.mof.gov.my/portal/en/' },
        ],
      },
      {
        title: '马来西亚炼油厂——我们自己处理石油吗？',
        paragraphs: [
          '马来西亚有四个主要炼油厂，合计炼油能力约为每日53万桶。最大、最新的是柔佛边佳兰的RAPID综合设施——这是国家石油公司与沙特阿美合资开发的大型综合炼化设施，设计处理能力为每日30万桶。',
          '马来西亚国内燃油消耗约为每日60–65万桶石油产品，这意味着该国是石油产品净进口国——炼油厂无法完全满足国内需求。',
          '重要的是，马来西亚炼油厂主要处理来自中东的中重质酸质原油，而非塔比斯原油。这是因为炼油设备是针对特定原油类型设计和优化的——例如，RAPID炼油厂在与沙特阿美的合作框架内设计处理阿拉伯品级原油。以折扣价进口较重原油，同时出口优质塔比斯原油，对国家石油公司的资产负债表而言在经济上是合理的，但意味着国内燃油供应仍与全球市场紧密相连。',
        ],
        bullets: [
          '边佳兰RAPID（柔佛）：30万桶/天 — 国家石油公司+沙特阿美 — 处理中东品级',
          '马六甲炼油厂：约10万桶/天 — 国家石油公司 — 最早的主要炼油厂',
          '波德申（森美兰）：约8.8万桶/天 — 国家石油公司PRPC',
          '格尔迪（登嘉楼）：约4万桶/天 — 天然气凝析液、特种产品',
          '总产能：约53万桶/天 vs 需求约63万桶/天 → 净进口国',
          '关键点：加油站的RON95可能来自进口中东原油，而非马来西亚塔比斯原油',
        ],
        sources: [
          { label: 'EIA：马来西亚国家分析', url: 'https://www.eia.gov/international/analysis/country/MYS' },
          { label: '国家石油公司：边佳兰RAPID', url: 'https://www.petronas.com/what-we-do/downstream' },
        ],
      },
      {
        title: '马来西亚不仅仅是一个石油国家',
        paragraphs: [
          '马来西亚统计局（DOSM）的GDP数据显示，服务业和制造业是经济的主要支柱。这就是"马来西亚产石油，所以石油永远应该便宜"这一论点过于简单化且不准确的原因。',
          '我们的经济是多元的，燃油政策需要同时平衡消费者需求、财政能力和工业需求。',
        ],
        sources: [{ label: 'DOSM 2024年GDP报告', url: 'https://v2.dosm.gov.my/portal-main/release-content/gross-domestic-product-gdp-by-state-2024' }],
      },
      {
        title: '马来西亚出口原油，但也进口原油和炼制产品',
        paragraphs: [
          'DOSM的石油统计数据显示，马来西亚出口原油和凝析液，但也进口原油、凝析液和精制石油产品。这对于涉及炼油和贸易的经济体来说是正常的。',
          '重要的不是马来西亚是否笼统地生产石油。重要的是国内市场所需的品级、产品和时间是否能以合理的成本获得。',
        ],
        sources: [
          { label: 'DOSM 2025年第一季度石油统计', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-first-quarter-2025' },
          { label: 'DOSM 2025年第四季度石油统计', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-q42025' },
        ],
      },
      {
        title: '补贴有限度，并非无上限',
        paragraphs: [
          '财政部2026年4月更新维持RON95补贴价格在每升1.99令吉，暂时限额为每月200升，并为特定情况（如网约车）设有特殊规定。',
          '这是重要的政策现实：加油站价格有补贴，但政府仍通过定向支持系统计算每升成本。',
        ],
        bullets: [
          'BUDI95一般限额：每月200升。',
          '网约车档次：合格司机每月最高800升。',
          '柴油支持仍按地区和资格区分。',
        ],
        sources: [
          { label: '财政部：4月价格维持', url: 'https://www.mof.gov.my/portal/en/news/press-citations/govt-maintains-subsidised-prices-amid-global-oil-market-volatility' },
          { label: '财政部：BUDI95 200升限额', url: 'https://www.mof.gov.my/portal/en/news/press-citations/claims-of-additional-budi95-subsidy-application-untrue-200-litre-monthly-limit-remains-mof' },
          { label: '财政部：网约车档次', url: 'https://mof.gov.my/portal/en/news/press-citations/budi95-tiered-eligibility-for-e-hailing-drivers-to-be-activated-mid-month-mof' },
        ],
      },
    ],
  },
  myths: {
    title: '误区与事实',
    intro: '附有来源的简明卡片。冷静、直接、易于分享。',
    cards: [
      {
        myth: '"马来西亚产石油，所以汽油应该很便宜。"',
        fact: '马来西亚仍参与全球原油和精制产品贸易，国内价格受替代成本、炼油利润、物流和补贴政策影响。',
        whyItMatters: '这是燃油相关病毒式帖子背后最常见的论点。听起来合乎逻辑，但忽略了大宗商品分配和市场定价的实际运作方式。',
        sources: [
          { label: 'DOSM石油统计', url: 'https://www.dosm.gov.my/portal-main/release-content/mining-of-petroleum-and-natural-gas-statistics-first-quarter-2025' },
          { label: 'EIA：金融市场', url: 'https://www.eia.gov/finance/markets/crudeoil/financial_markets.php?funnelFromId=71' },
        ],
      },
      {
        myth: '"昨天全球油价下跌了，为什么今天加油站的价格没降？"',
        fact: '马来西亚财政部指出，马来西亚零售价格是根据上周的平均成本计算的，因此今天的市场走势不会立即反映在今天的价格中。',
        whyItMatters: '这就是为什么很多人在新闻中看到全球油价下跌，却认为政府在隐瞒更便宜的燃油。',
        sources: [{ label: '财政部：加油站价格滞后说明', url: 'https://www.mof.gov.my/portal/en/news/press-citations/mof-pump-fuel-prices-reflect-last-weeks-costs-despite-global-drop' }],
      },
      {
        myth: '"补贴可以承担任何事情，永远都行。"',
        fact: '现行体系是定向的。财政部已暂时收紧BUDI95限额，并为特定类别设有专项配额，而非全面无限制补贴。',
        whyItMatters: '如果补贴讨论忽视财政限制，辩论就会变得不现实，偏离政策实际。',
        sources: [
          { label: '财政部：4月价格维持', url: 'https://www.mof.gov.my/portal/en/news/press-citations/govt-maintains-subsidised-prices-amid-global-oil-market-volatility' },
          { label: '财政部：200升限额', url: 'https://www.mof.gov.my/portal/en/news/press-citations/claims-of-additional-budi95-subsidy-application-untrue-200-litre-monthly-limit-remains-mof' },
        ],
      },
      {
        myth: '"产油国不会受到地缘政治危机影响。"',
        fact: 'EIA对霍尔木兹海峡的分析显示，即使封锁点远离马来西亚，它也会直接推高全球保险价格、航运费率和全球商品成本。',
        whyItMatters: '马来西亚与所有其他国家处于同一大宗商品体系中。距离只决定影响程度，不能消除影响。',
        sources: [{ label: 'EIA：霍尔木兹海峡分析', url: 'https://www.eia.gov/todayinenergy/detail.php?id=65504' }],
      },
      {
        myth: '"石油将在[X]年耗尽——文明将崩溃。"',
        fact: '尽管经过45年的大规模消耗，今天全球已探明石油储量仍高于1980年水平。由于新勘探技术、更高价格重新归类储量，以及不断变化的需求，石油耗尽的预计日期已被推迟了数十年。',
        whyItMatters: '真正的问题不是悬崖式下跌——石油产量将趋于平缓，开采成本越来越高。替代能源将通过价格信号逐渐填补缺口。需要关注的风险是气候变化和能源转型，而不是油泵突然空置的场景。',
        sources: [
          { label: '不列颠百科全书：石油峰值（英）', url: 'https://www.britannica.com/science/peak-oil' },
          { label: 'EIA：美国石油产量历史（英）', url: 'https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?n=PET&s=MCRFPUS2&f=A' },
          { label: 'BP世界能源统计年鉴（英）', url: 'https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy.html' },
        ],
      },
      {
        myth: '"西方大石油公司拥有并控制全球所有石油。"',
        fact: '全球约70–75%的已探明石油储量由政府拥有的国家石油公司（NOC）控制——沙特阿美、阿布扎比国家石油公司（阿联酋）、伊朗国家石油公司、马来西亚国家石油公司、委内瑞拉国家石油公司等。西方国际石油公司（IOC）如壳牌、埃克森美孚和英国石油公司合计控制不到全球储量的15%。',
        whyItMatters: '在马来西亚，国家石油公司在法律上拥有100%的石油资源。当RON95价格上涨时，不是因为壳牌做了决定——而是因为政府补贴政策在全球原油价格背景下发生了变化。了解谁真正拥有石油，才能明白谁真正控制着燃油定价决策。',
        sources: [
          { label: 'BP统计年鉴：储量所有权（英）', url: 'https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy.html' },
          { label: '外交关系委员会：国家石油公司vs国际石油公司（英）', url: 'https://www.cfr.org/backgrounder/national-oil-companies' },
          { label: '1974年《石油开发法》（国家石油公司）', url: 'https://www.petronas.com/about/company-profile' },
        ],
      },
    ],
  },
  sources: {
    title: '资料来源与方法',
    intro: 'WhatTheFuel使用有限的可溯源来源，只发布可以追溯的内容。',
    updateTitle: '更新方式',
    updateBody: '新闻从经批准的来源更新。时间轴条目和解释经过策划，只在有可靠来源支持时更新。',
    sourceTitle: '信息来源',
    sourceBody: '马来西亚政府政策页面、官方统计数据、全球能源数据和精选新闻媒体整合在一个易于阅读的网站上。',
    noteTitle: '我们不发布的内容',
    noteBody: '没有无来源的价格卡片，没有填充条目，没有看起来整洁但无法追溯的声明。',
    sourceGroups: [
      { name: '马来西亚财政部', purpose: '燃油定价、补贴政策、配额规定和官方声明', url: 'https://www.mof.gov.my/portal/en/' },
      { name: '马来西亚统计局（DOSM）', purpose: '解释中使用的石油经济和贸易数据', url: 'https://www.dosm.gov.my/portal-main/' },
      { name: 'Free Malaysia Today (FMT)', purpose: '马来西亚国家、商业和世界报道', url: 'https://www.freemalaysiatoday.com/' },
      { name: 'Malay Mail', purpose: '马来西亚和全球燃油相关报道', url: 'https://www.malaymail.com/' },
      { name: 'RTM新闻', purpose: '马来文全国报道', url: 'https://berita.rtm.gov.my/' },
      { name: '星洲日报', purpose: '中文马来西亚报道', url: 'https://www.sinchew.com.my/' },
      { name: 'Sinar Premium', purpose: '马来文燃油相关报道', url: 'https://premium.sinarharian.com.my/' },
      { name: '美国能源信息署（EIA）', purpose: '全球石油市场结构、临界点、价格和市场机制', url: 'https://www.eia.gov/' },
      { name: '宾州大学 EARTH 104', purpose: '石油地质形成——起源和形成过程', url: 'https://www.e-education.psu.edu/earth104/' },
      { name: 'BP世界能源统计年鉴', purpose: '全球储量所有权、产量排名和能源转型数据', url: 'https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy.html' },
      { name: 'BBC新闻、路透社及其他经审核媒体', purpose: '燃油、石油、航运和能源直接报道' },
    ],
  },
};
