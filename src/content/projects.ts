export interface Project {
  slug: string;
  title: string;
  company: string;
  duration: string;
  tags: string[];
  color: string;
  thumbnail: string;
  order: number;
  summary: string;
  background: string; // 详细背景
  techStack: string[]; // 技术栈
  contributions: string[]; // 核心贡献
  challenges?: string[]; // 技术挑战（可选）
  metrics: Array<{
    label: string;
    value: string;
  }>;
}

export const projects: Project[] = [
  {
    slug: 'sirna-data-engineering',
    title: 'siRNA 医药大模型数据工程体系',
    company: '上海智能科学研究院',
    duration: '2024.03 - 至今',
    tags: ['AI数据工程', 'LLM', '生物信息学', '数据质检'],
    color: '#3b82f6',
    thumbnail: '/images/sirna-thumbnail.png',
    order: 1,
    summary:
      '独立设计并落地「AI标注→智能修复→数据整合→数据质检」四阶段自动化流水线,将单篇专利处理从人工4-6小时压缩至分钟级,最终从60万+候选数据中质检产出约10万条模型可用数据。',
    background:
      '上智院 siRNA 药物大模型急需构建高质量训练数据,但面临数据源脏乱(PDF 专利原始格式多样、表格嵌套、字段缺失严重)、标注成本高、质量不可控的三重瓶颈。项目需从 60 万条候选数据中提取出模型可用的 siRNA 修饰序列,且每条数据需包含序列、修饰位点、生物活性等多维度字段,传统人工标注需 4-6 小时/篇,无法支撑大规模生产需求。',
    techStack: [
      'Python',
      'OpenAI API (GPT-4)',
      'LangChain',
      'Pandas',
      'NumPy',
      'Regex',
      'PyPDF2',
      'MySQL',
      'Git',
      'Linux',
    ],
    contributions: [
      '独立设计四阶段数据工程流水线:①AI提取 - 用 Prompt 工程调用 GPT-4 从非结构化 PDF 中提取序列/修饰/活性字段;②智能修复 - 构建 7 类错误检测规则(如序列长度异常、修饰位点越界、活性值非法等),错误数据自动回流 AI 重标注;③数据整合 - 用自然语言匹配算法将同一专利多次实验数据进行主键归并、去重、字段补全;④多级质检 - 设计 5 层质检闭环(格式校验→业务规则验证→统计分布检查→下游反馈修复→人工抽检),不合格数据自动拦截。',
      '数据可用率从初期 60-70% 迭代提升至 90%+:通过每周分析下游模型报错日志,识别新增数据质量问题并新增对应检测规则,形成"模型反馈→错误归类→规则优化→质量收敛"的持续改进闭环,将检测规则从初期 30 条扩展至 80+ 条。',
      '效率提升百倍:单篇专利处理从人工标注 4-6 小时降至自动化 15-30 分钟,并通过多进程并行处理,日处理专利数从 20 篇提升至 200+ 篇,6 个月完成 2500+ 篇专利、10 万条数据的产出目标。',
      '建成业界首个 siRNA 修饰序列数据集:整合来自 Google Patents、专利网等多个数据源,覆盖 2ʼ-O-甲基、硫代磷酸酯等主流修饰类型,为药物大模型训练提供了高质量数据基础设施。',
    ],
    challenges: [
      'PDF 格式高度异构(表格嵌套、图文混排、多列布局),需反复调优 GPT-4 Prompt 以提高表格结构识别准确率',
      '序列命名不规范(如"mG"可能指多种修饰类型),需构建术语标准化词典并通过上下文推断',
      '质量评估标准模糊,需与生物学家协作定义可量化的数据质量指标体系',
    ],
    metrics: [
      { label: '专利处理', value: '20万+ → 2500篇' },
      { label: '数据产出', value: '10万条' },
      { label: '质量提升', value: '60% → 90%+' },
      { label: '效率提升', value: '4-6h → 15-30min' },
    ],
  },
  {
    slug: 'hezhao-datawarehouse',
    title: '和兆服饰离线数仓建设',
    company: '和兆服饰',
    duration: '2023.09 - 2024.01',
    tags: ['数据仓库', 'Doris', 'BI可视化', '性能优化'],
    color: '#06b6d4',
    thumbnail: '/images/hezhao-thumbnail.png',
    order: 2,
    summary:
      '以Doris MPP替代Hive+Spark,独立完成ODS→CDM→ADS三层建模,交付13张BI看板,助力营销费用节省约15%、滞销库存降低约20%。',
    background:
      '和兆服饰原数仓基于 Hive+Spark,存在查询慢(复杂 SQL 需 10+ 分钟)、运维成本高(需专职 Spark 调优)、无法支撑实时 BI 看板的痛点。业务方需要每日 9 点前看到最新销售/库存/会员数据以支持营销决策,但原架构 T+1 跑批需 50 分钟且经常超时,严重影响决策时效性。',
    techStack: [
      'Apache Doris',
      'Hive',
      'Spark',
      'DataX',
      'Python',
      'SQL',
      'FineBI',
      'Airflow',
      'Linux Shell',
      'MySQL',
    ],
    contributions: [
      '技术选型与架构设计:调研对比 Doris、ClickHouse、StarRocks 后,选定 Doris(理由:①SQL 兼容性好,迁移成本低;②聚合查询性能优,适配零售场景;③资源占用少,运维友好)。采用 ODS(贴源层)→DWD(明细层)→DWS(汇总层)→ADS(应用层)的四层架构,并设计星型模型,将业务主题域拆分为商品、订单、会员、库存四大主题。',
      '全量历史数据迁移:用 DataX 将 Hive 中 2 年历史数据(2000 万+订单、500 万+会员)迁移至 Doris,并针对大宽表进行分区裁剪(按天分区+商品品类二级分区),使查询效率提升 5 倍。',
      '性能优化:①Rollup 预聚合 - 为高频查询场景(如按品类/门店/日期聚合销售额)建立 Rollup 索引,查询提速 10 倍;②Colocate Join - 将订单表和订单明细表按订单 ID 分桶,避免 Shuffle,Join 性能提升 3 倍;③分区裁剪 - 按天分区并设置 3 个月热数据、1 年冷数据的生命周期管理,存储成本降低 40%。',
      'BI 看板交付:基于 FineBI 搭建 13 张可视化看板,覆盖销售趋势、库存预警、会员画像、营销 ROI 等场景,并实现自动刷新(每小时更新),支持业务自助式数据分析。',
      '业务价值落地:通过"滞销商品预警看板"帮助运营团队及时清库,滞销库存降低约 20%;通过"会员 RFM 模型看板"精准推送优惠券,营销费用节省约 15%。',
    ],
    challenges: [
      'Hive 到 Doris 的 SQL 方言差异(如 LATERAL VIEW EXPLODE 需改写为 unnest),需编写自动化转换脚本',
      '业务方需求频繁变更(看板字段/指标口径反复调整),需建立敏捷迭代机制',
      'Doris 集群资源有限(仅 3 台 16C64G 节点),需精细化调优以支撑全链路数据',
    ],
    metrics: [
      { label: '建表数量', value: '80+张' },
      { label: '运维成本', value: '降低40%' },
      { label: '跑批提效', value: '50min → 30min' },
      { label: '营销优化', value: '费用-15% 库存-20%' },
    ],
  },
  {
    slug: 'hengqin-insurance',
    title: '横琴人寿保险离线数仓',
    company: '横琴人寿保险',
    duration: '2023.03 - 2023.12',
    tags: ['数据仓库', 'Hive', 'Spark', '异构整合'],
    color: '#8b5cf6',
    thumbnail: '/images/hengqin-thumbnail.png',
    order: 3,
    summary:
      'Sqoop全量初始化+T+1增量同步至ODS,独立交付客户/产品/保单三大主题域全链路50+宽表,SLA达标率从85%提升至99%+。',
    background:
      '横琴人寿原有 5 套业务系统(核心系统、CRM、理赔、财务、渠道)数据分散在 Oracle、MySQL、SQLServer 等异构数据库中,缺乏统一数据视图,导致业务报表需人工跨库查询拼接,耗时长且易出错。公司战略要求建设一体化数据仓库,整合全量历史数据并支撑 T+1 业务报表,SLA 要求每日 8 点前完成数据刷新。',
    techStack: [
      'Hive',
      'Spark SQL',
      'Sqoop',
      'Azkaban',
      'Python',
      'Shell',
      'Oracle',
      'MySQL',
      'SQLServer',
      'Kylin',
      'Linux',
    ],
    contributions: [
      '异构数据整合:设计 ODS 层统一数据模型,用 Sqoop 将 Oracle(核心系统)、MySQL(CRM/渠道)、SQLServer(理赔/财务)的数据抽取到 Hive。全量初始化数亿条历史记录(保单表 5000 万+、客户表 1000 万+、理赔表 800 万+),增量同步采用时间戳对比+日志解析,确保数据准确率 99.99%。',
      '主题域建模:基于保险业务特点,设计客户域(客户基本信息、客户标签)、产品域(产品信息、费率表)、保单域(投保、续保、退保、理赔全生命周期)三大主题,并构建 50+ 宽表,覆盖业务方 90% 的报表需求。',
      '性能优化:①分区策略 - 保单表按日期分区+客户 ID Hash 分桶,查询命中率提升 80%;②Spark SQL 调优 - 启用动态分区裁剪、广播 Join(小表<100MB)、自适应查询执行(AQE),复杂 SQL 执行时间从 30 分钟降至 8 分钟;③Kylin 预计算 - 为高频分析场景(如按险种/地区/月份聚合保费)构建 Cube,OLAP 查询亚秒级响应。',
      '数据质量保障:设计五层质检机制 - ①源端监控(Sqoop 同步行数校验);②ODS 层校验(主键唯一性、字段非空检查);③DWD 层业务规则校验(如保单生效日期≤当前日期);④DWS 层数据一致性校验(汇总金额与明细求和误差<0.01%);⑤ADS 层业务指标核对(与业务方人工报表比对)。',
      'SLA 达标率优化:通过调度优化(Azkaban 任务并行度从 5 提升至 20、关键路径任务优先级调高、失败任务自动重试 3 次)和性能优化,将全链路跑批时间从 3.5 小时压缩至 1.5 小时,SLA 达标率从初期 85% 提升至 99%+,9 个月零生产事故。',
    ],
    challenges: [
      '源库字段命名不统一(如"客户姓名"在不同系统分别叫 name/cust_name/customer_name),需建立元数据映射字典',
      '数据质量参差不齐(如 CRM 系统客户手机号 30% 缺失),需与业务方协商制定清洗规则',
      '跑批窗口紧张(要求凌晨 1 点后开始、8 点前完成),需精细化调度与监控',
    ],
    metrics: [
      { label: '数据迁移', value: '数亿条记录' },
      { label: '准确率', value: '99.99%零事故' },
      { label: 'SLA达标', value: '85% → 99%+' },
      { label: '留存提升', value: '72% → 79%' },
    ],
  },
];
