export type Product = {
  name: string
  englishName: string
  summary: string
  detail: string
  image: string
  tags: string[]
}

export type Application = {
  name: string
  description: string
  image: string
}

export const siteContent = {
  company: {
    name: '苏州丝源生物科技有限公司',
    shortName: '丝源生物',
    englishName: 'SilkOrigin Bio',
    tagline: '源于自然 · 成于科技',
    heroTitle: '让天然丝源，成为下一代材料语言',
    heroDescription:
      '以生物基材料研发为起点，探索丝源材料在健康、生活与先进制造中的更多可能。',
    founded: '2025',
    location: '中国 · 苏州太仓',
    address: '江苏省苏州市太仓市璜泾镇沪太新路649号F栋118',
    phone: '待补充',
    email: '待补充',
  },
  stats: [
    { value: '2025', label: '成立于苏州太仓' },
    { value: '3 项', label: '公开专利信息' },
    { value: '500 万', label: '注册资本' },
    { value: '多场景', label: '材料应用探索' },
  ],
  products: [
    {
      name: '丝源蛋白材料',
      englishName: 'Silk-derived Protein',
      summary: '以天然丝源为基础的功能性蛋白材料。',
      detail:
        '面向不同应用需求，探索材料纯化、稳定性和功能化路径。具体产品参数以企业正式资料为准。',
      image: '/images/product-protein.avif',
      tags: ['生物基', '功能材料', '可持续'],
    },
    {
      name: '生物基复合材料',
      englishName: 'Bio-based Composite',
      summary: '连接天然材料与现代制造工艺。',
      detail:
        '围绕材料结构、性能和规模化应用展开研发，为合作伙伴提供更具适配性的材料方案。',
      image: '/images/product-fiber.avif',
      tags: ['材料研发', '性能优化', '应用适配'],
    },
    {
      name: '联合研发服务',
      englishName: 'Co-development',
      summary: '从需求定义到应用验证的协同开发。',
      detail:
        '结合目标场景推进样品、测试和应用验证，具体合作能力需要根据公司实际研发条件完善。',
      image: '/images/product-lab.avif',
      tags: ['技术服务', '样品验证', '协同创新'],
    },
  ] satisfies Product[],
  technology: {
    eyebrow: 'Technology Platform',
    title: '从天然原料到功能材料',
    description:
      '围绕生物基材料的研发、制备与应用，建立可持续迭代的技术路径。以下为官网架构示例，正式技术名称和工艺数据需由企业确认。',
    steps: [
      { number: '01', title: '原料研究', description: '识别天然丝源材料的结构特点与应用潜力。' },
      { number: '02', title: '工艺开发', description: '优化制备、纯化及材料功能化工艺。' },
      { number: '03', title: '性能评价', description: '围绕稳定性、安全性和目标功能开展验证。' },
      { number: '04', title: '应用协同', description: '联合产业伙伴完成样品开发与场景适配。' },
    ],
  },
  applications: [
    {
      name: '个人护理',
      description: '探索丝源材料在护肤、护发及功能性配方中的应用。',
      image: '/images/application-care.avif',
    },
    {
      name: '先进纺织',
      description: '面向亲肤、舒适和可持续需求的纤维与织物创新。',
      image: '/images/application-textile.avif',
    },
    {
      name: '生物材料',
      description: '探索天然蛋白材料在更多生命健康场景中的可能性。',
      image: '/images/application-biomaterial.avif',
    },
  ] satisfies Application[],
  about: {
    title: '以丝为源，向新而生',
    paragraphs: [
      '苏州丝源生物科技有限公司成立于2025年，位于江苏省苏州市太仓市，是一家面向生物基材料技术研发与应用创新的科技企业。',
      '我们相信，天然材料蕴含着值得重新发现的结构与性能。丝源生物以严谨的研发方法连接自然与产业，为可持续材料的规模化应用寻找新的答案。',
    ],
    milestones: [
      { year: '2025.04', event: '苏州丝源生物科技有限公司成立' },
      { year: '现在', event: '持续推进技术研发、知识产权与产业合作' },
      { year: '未来', event: '构建面向多场景的丝源生物材料产品体系' },
    ],
  },
  contact: {
    eyebrow: 'Work With Us',
    title: '共同定义材料的下一种可能',
    description: '欢迎品牌、研发机构与产业伙伴联系丝源，探讨产品、技术及联合研发合作。',
  },
}

export type SiteContent = typeof siteContent
