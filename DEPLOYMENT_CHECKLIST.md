# 部署前检查清单

在将网站部署到 GitHub Pages 之前,请按照此清单逐项检查。

---

## ✅ 代码完成度检查

### 基础设施
- [x] Next.js 项目初始化完成
- [x] 依赖安装成功
- [x] TypeScript 配置正确
- [x] Tailwind CSS 配置完成
- [x] ESLint + Prettier 配置完成

### 页面完整性
- [x] 首页 (`/`)
- [x] 关于页 (`/about`)
- [x] 项目列表页 (`/projects`)
- [x] 项目详情页 (`/projects/[slug]`)
- [x] 联系页 (`/contact`)
- [x] 404 页面 (`/not-found`)

### 组件完整性
- [x] Navigation 导航栏
- [x] Footer 页脚
- [x] Hero 首屏
- [x] ProjectCard 项目卡片
- [x] SkillRadar 技能雷达图
- [x] Timeline 工作经历时间轴
- [x] DataCard 数据卡片
- [x] Button, Card, Badge 基础组件

### 数据文件
- [x] personal.ts - 个人信息
- [x] skills.ts - 技能数据
- [x] experience.ts - 工作经历
- [x] projects.ts - 项目数据

### 配置文件
- [x] package.json
- [x] next.config.js
- [x] tailwind.config.ts
- [x] tsconfig.json
- [x] GitHub Actions 配置

---

## 📝 内容定制检查

### 个人信息更新
在 `src/content/personal.ts` 中:
- [ ] 姓名
- [ ] 联系方式(邮箱、电话)
- [ ] GitHub 链接
- [ ] 个人简介
- [ ] 教育背景
- [ ] 核心优势描述

### 技能数据更新
在 `src/content/skills.ts` 中:
- [ ] 技能分类和具体技能
- [ ] 雷达图数值(根据实际水平调整)

### 工作经历更新
在 `src/content/experience.ts` 中:
- [ ] 公司名称、职位、时间
- [ ] 工作地点
- [ ] 关键成果描述

### 项目数据更新
在 `src/content/projects.ts` 中:
- [ ] 项目标题、公司、时间
- [ ] 项目概述
- [ ] 技术标签
- [ ] 项目指标数据
- [ ] 项目颜色(可选)

---

## 🖼️ 资源文件准备

### 必需文件
- [ ] **简历 PDF**: `public/resume/李梁_数据工程师.pdf`
  - 确保文件名与代码中一致
  - 文件大小建议 < 2MB

- [ ] **项目缩略图**: `public/images/`
  - `sirna-thumbnail.png`
  - `hezhao-thumbnail.png`
  - `hengqin-thumbnail.png`
  - 建议尺寸: 800×450 (16:9)
  - 格式: PNG 或 WebP

- [ ] **社交分享图**: `public/og-image.png`
  - 尺寸: 1200×630
  - 用于 Open Graph 和 Twitter 卡片
  - 包含姓名、职位等关键信息

### 可选文件
- [ ] Favicon: `public/favicon.ico`
- [ ] 项目详情图片(如架构图、流程图)
- [ ] 个人照片(如需要)

---

## 🔧 配置更新

### GitHub 用户名
替换所有 `yourusername` 为实际用户名:
- [ ] `src/app/layout.tsx` - Open Graph URL
- [ ] `src/app/sitemap.ts` - sitemap baseUrl
- [ ] `public/robots.txt` - sitemap URL
- [ ] `src/content/personal.ts` - GitHub 链接
- [ ] `README.md` - 文档链接

使用全局搜索替换:
```bash
# Linux/Mac
find . -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.txt" -o -name "*.md" \) ! -path "./node_modules/*" -exec sed -i 's/yourusername/YOUR_USERNAME/g' {} +

# Windows PowerShell
Get-ChildItem -Recurse -Include *.ts,*.tsx,*.txt,*.md | Where-Object { $_.FullName -notlike "*node_modules*" } | ForEach-Object { (Get-Content $_.FullName) -replace 'yourusername','YOUR_USERNAME' | Set-Content $_.FullName }
```

### 域名配置(如使用自定义域名)
- [ ] 在 `src/app/layout.tsx` 更新 Open Graph URL
- [ ] 在 `src/app/sitemap.ts` 更新 baseUrl
- [ ] 在 `public/` 创建 `CNAME` 文件
- [ ] 配置域名 DNS 记录

---

## 🧪 本地测试

### 开发模式测试
```bash
npm run dev
```
- [ ] 访问 http://localhost:3000
- [ ] 检查所有页面是否正常显示
- [ ] 测试导航栏链接
- [ ] 测试项目卡片点击跳转
- [ ] 测试技能雷达图显示
- [ ] 测试响应式布局(移动端)

### 生产构建测试
```bash
npm run build
```
- [ ] 构建成功,无错误
- [ ] 检查 `out` 目录生成
- [ ] 检查生成的 HTML 文件

### 类型检查
```bash
npm run type-check
```
- [ ] TypeScript 检查通过

### 代码格式化
```bash
npm run format
npm run lint
```
- [ ] 格式化完成
- [ ] ESLint 检查通过

---

## 🚀 部署准备

### Git 仓库
- [ ] 已创建 GitHub 仓库
- [ ] 仓库名称正确(建议: `portfolio` 或 `personal-website`)
- [ ] 仓库设置为 Public

### GitHub Actions 权限
- [ ] 进入仓库 Settings → Actions → General
- [ ] Workflow permissions 设置为 "Read and write permissions"

### GitHub Pages 设置
- [ ] 进入仓库 Settings → Pages
- [ ] Source 选择 "GitHub Actions"

### 文件检查
- [ ] `.gitignore` 包含 `node_modules`, `.next`, `out` 等
- [ ] `.github/workflows/deploy.yml` 配置正确
- [ ] `package.json` 脚本命令正确

---

## 📤 部署流程

### 1. 提交代码
```bash
git add .
git commit -m "feat: initialize portfolio website"
```

### 2. 推送到 GitHub
```bash
git push origin main
```

### 3. 等待部署
- [ ] 访问仓库 Actions 标签
- [ ] 等待 workflow 运行完成(约 2-5 分钟)
- [ ] 检查是否有错误

### 4. 访问网站
- [ ] 访问 `https://YOUR_USERNAME.github.io`
- [ ] 或访问自定义域名(如已配置)

---

## 🔍 部署后验证

### 功能验证
- [ ] 所有页面可正常访问
- [ ] 导航栏工作正常
- [ ] 项目卡片点击跳转正确
- [ ] 技能雷达图显示正常
- [ ] 简历 PDF 可下载
- [ ] 联系方式链接正常(邮箱、电话、GitHub)

### 性能检查
使用 [PageSpeed Insights](https://pagespeed.web.dev/):
- [ ] Performance 评分 > 90
- [ ] Accessibility 评分 > 90
- [ ] Best Practices 评分 > 90
- [ ] SEO 评分 > 90

### SEO 验证
- [ ] 页面标题正确
- [ ] Meta description 正确
- [ ] Open Graph 图片显示(测试社交分享)
- [ ] Sitemap 可访问: `/sitemap.xml`
- [ ] Robots.txt 可访问: `/robots.txt`

### 响应式测试
测试以下设备:
- [ ] 桌面(1920×1080)
- [ ] 笔记本(1366×768)
- [ ] 平板(768×1024)
- [ ] 手机(375×667)

### 浏览器兼容性
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

## 🐛 常见问题排查

### 构建失败
- 检查 TypeScript 错误: `npm run type-check`
- 检查 ESLint 错误: `npm run lint`
- 查看 GitHub Actions 日志

### 页面 404
- 检查 `next.config.js` 中的 `basePath` 配置
- 确保 `output: 'export'` 已设置

### 图片无法显示
- 检查图片路径是否正确
- 确保图片文件已提交到 Git
- 检查 `next.config.js` 中 `images.unoptimized: true`

### 样式不正确
- 检查 Tailwind CSS 配置
- 确保 `globals.css` 正确导入
- 清除浏览器缓存

---

## 📊 监控与优化

### 访客统计(可选)
集成免费分析工具:
- [ ] [Umami](https://umami.is/)
- [ ] [Plausible](https://plausible.io/)
- [ ] [Google Analytics](https://analytics.google.com/)

### 性能监控
- [ ] 设置 Lighthouse CI
- [ ] 定期检查性能评分
- [ ] 优化加载速度

### 内容更新
- [ ] 每月更新技能数据
- [ ] 每季度更新项目
- [ ] 及时更新工作经历

---

## ✨ 完成!

恭喜!当所有项目都打勾后,你的个人网站就可以上线了!

记得定期更新内容,保持网站活力 🚀

---

© 2026 李梁. All rights reserved.
