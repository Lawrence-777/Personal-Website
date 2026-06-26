export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: '汉克时代科技有限公司',
    role: '数据工程师',
    duration: '2024.03 - 至今',
    location: '上海(驻场上海智能科学研究院)',
    highlights: [
      '独立负责siRNA大模型数据工程全链路体系建设',
      '数据可用率从60-70%提升至90%+',
      '单篇专利处理时间从4-6小时降至15-30分钟',
      '建成业界首个面向药物设计的siRNA修饰序列数据集',
    ],
  },
  {
    company: '数字马力(郑州)信息技术有限公司',
    role: '数据仓库工程师',
    duration: '2023.03 - 2024.01',
    location: '郑州',
    highlights: [
      '独立交付横琴人寿、和兆服饰两个离线数仓项目',
      '和兆数仓:Doris MPP架构,运维成本降低约40%',
      '横琴数仓:异构整合迁移数亿条记录,准确率99.99%零事故',
      '助力营销费用节省约15%、滞销库存降低约20%',
    ],
  },
];
