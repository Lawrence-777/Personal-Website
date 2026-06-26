export interface SkillCategory {
  name: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    name: '编程语言',
    items: ['Python', 'SQL', 'Java', 'Shell'],
  },
  {
    name: '数据仓库',
    items: ['Doris', 'Hive', 'Spark', 'StarRocks'],
  },
  {
    name: 'AI 工程',
    items: ['LLM Prompt Engineering', 'BioPython', 'Scrapy-Redis'],
  },
  {
    name: '工程化',
    items: ['Docker', 'Kubernetes', 'Git', 'DolphinScheduler'],
  },
  {
    name: 'BI 可视化',
    items: ['FineBI', 'FineReport', 'QuickBI'],
  },
];

export const radarData = [
  { skill: 'Python', value: 90, fullMark: 100 },
  { skill: 'SQL', value: 95, fullMark: 100 },
  { skill: '数据仓库', value: 90, fullMark: 100 },
  { skill: 'AI工程', value: 85, fullMark: 100 },
  { skill: '工程化', value: 80, fullMark: 100 },
  { skill: 'BI可视化', value: 75, fullMark: 100 },
];
