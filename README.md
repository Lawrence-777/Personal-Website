# 李梁 - 个人简历网站

这是一个基于 Next.js 14 构建的个人简历网站,展示数据工程与 AI 数据工程全链路能力。

## 特性

- ✨ 现代化深色主题 + 渐变科技感设计
- 📊 数据可视化展示(技能雷达图、项目指标卡片)
- 🎨 Tailwind CSS + Framer Motion 流畅动画
- 📱 完全响应式设计(移动端优先)
- 🚀 静态站点生成,性能优异
- ♿ WCAG 2.1 AA 可访问性标准
- 🔍 SEO 优化 + 结构化数据
- 📦 零成本部署(GitHub Pages)

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 3.4
- **动画**: Framer Motion 11
- **图表**: Recharts
- **图标**: Lucide React
- **部署**: GitHub Pages + Actions

## 项目结构

```
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── layout.tsx          # 根布局
│   │   ├── page.tsx            # 首页
│   │   ├── about/              # 关于页
│   │   ├── projects/           # 项目列表 & 详情
│   │   ├── contact/            # 联系页
│   │   └── not-found.tsx       # 404 页面
│   ├── components/             # React 组件
│   │   ├── Hero.tsx            # 首屏 Hero 区
│   │   ├── Navigation.tsx      # 导航栏
│   │   ├── Footer.tsx          # 页脚
│   │   ├── ProjectCard.tsx     # 项目卡片
│   │   ├── SkillRadar.tsx      # 技能雷达图
│   │   ├── Timeline.tsx        # 工作经历时间轴
│   │   └── ui/                 # 基础 UI 组件
│   ├── content/                # 内容数据
│   │   ├── personal.ts         # 个人信息
│   │   ├── skills.ts           # 技能数据
│   │   ├── experience.ts       # 工作经历
│   │   └── projects.ts         # 项目数据
│   ├── lib/                    # 工具函数
│   │   ├── utils.ts            # 通用工具
│   │   └── constants.ts        # 常量配置
│   └── styles/
│       └── globals.css         # 全局样式
├── public/                     # 静态资源
│   ├── images/                 # 项目图片
│   └── resume/                 # 简历 PDF
├── .github/
│   └── workflows/
│       └── deploy.yml          # 自动部署
└── docs/                       # 设计文档
```

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

构建后的静态文件会输出到 `out` 目录。

### 预览生产版本

```bash
npm run start
```

## 部署

### GitHub Pages 自动部署

1. 将代码推送到 GitHub 仓库的 `main` 分支
2. GitHub Actions 会自动构建并部署到 GitHub Pages
3. 在仓库 Settings → Pages 中启用 GitHub Pages
4. 访问 `https://yourusername.github.io` 查看网站

### 自定义域名(可选)

1. 在域名注册商添加 DNS 记录:
   ```
   Type: CNAME
   Name: @
   Value: yourusername.github.io
   ```

2. 在 `public` 目录添加 `CNAME` 文件,内容为你的域名:
   ```
   yourdomain.com
   ```

3. 在 GitHub 仓库 Settings → Pages → Custom domain 中配置域名

## 内容更新

### 修改个人信息

编辑 `src/content/personal.ts`

### 添加新项目

在 `src/content/projects.ts` 中添加新的项目对象:

```typescript
{
  slug: 'project-slug',
  title: '项目标题',
  company: '公司名称',
  duration: '2024.01 - 至今',
  tags: ['标签1', '标签2'],
  color: '#3b82f6',
  thumbnail: '/images/project-thumbnail.png',
  order: 1,
  summary: '项目概述...',
  metrics: [
    { label: '指标1', value: '数值1' },
    { label: '指标2', value: '数值2' },
  ],
}
```

### 更新技能

编辑 `src/content/skills.ts`

### 更新工作经历

编辑 `src/content/experience.ts`

## 性能优化

- ✅ 静态站点生成(SSG)
- ✅ 图片优化(Next.js Image)
- ✅ 代码分割(按路由自动分割)
- ✅ Tailwind CSS 树摇(仅打包使用的样式)
- ✅ 字体优化(自托管 Inter 字体)

## SEO 优化

- ✅ 元标签配置(title, description, keywords)
- ✅ Open Graph 标签(社交分享)
- ✅ 结构化数据(JSON-LD)
- ✅ 自动生成 Sitemap
- ✅ Robots.txt

## 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 许可证

MIT License

## 联系方式

- 邮箱: 19143948881@163.com
- GitHub: [yourusername](https://github.com/yourusername)

---

© 2026 李梁. All rights reserved.
