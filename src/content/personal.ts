import { SITE_URL } from '@/lib/constants';

export const personalInfo = {
  name: '李梁',
  role: '数据工程师',
  email: '19143948881@163.com',
  phone: '19143948881',
  location: '上海',
  availability: '半个月内到岗',
  bio: '3年数据工程经验,覆盖离线数仓0→1与AI训练数据全链路;既能用Doris/Hive建模交付亿级数据,也能为大模型设计"AI提取→自动修复→整合→质检"的端到端数据生产体系。',

  education: {
    school: '郑州轻工业大学',
    degree: '本科(统招)',
    major: '数据科学与大数据技术',
    duration: '2019.09 - 2023.06',
    gpa: '专业排名前10%',
    honors: [
      '国家励志奖学金',
      '一等奖学金×2',
      '省级优秀毕业论文',
      '校级社会先进个人',
    ],
  },

  coreAdvantages: [
    {
      title: 'AI 数据工程全链路',
      description:
        '独立打通"采集→AI抽取→迭代修复→整合→多级质检"的训练数据生产闭环,让脏乱专利变为模型可用资产,已在上智院siRNA项目完整落地。',
      icon: 'Sparkles',
    },
    {
      title: '数据质量方法论沉淀',
      description:
        '擅长将脏数据先归类成错误图谱、再为每类设计"识别-修复-兜底"策略,并以"下游反馈驱动上游修复"实现质量持续收敛——可复用于任意ETL/数据治理场景。',
      icon: 'Target',
    },
    {
      title: '数仓 0→1 独立交付',
      description:
        '3年内3次主导数据体系从无到有,覆盖选型、建模、调优、治理、BI全栈,兼顾性能、成本与可维护性。',
      icon: 'Database',
    },
    {
      title: '结果导向',
      description:
        '每项工作均以量化指标收口——10万条训练数据、SLA 99%+、运维成本-40%、营销费用-15%。',
      icon: 'TrendingUp',
    },
  ],
};
