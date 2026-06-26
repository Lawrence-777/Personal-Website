# 快速开始指南

本指南将帮助你快速部署和运行个人简历网站。

## 步骤 1: 安装依赖

```bash
npm install
```

如果使用 yarn:
```bash
yarn install
```

## 步骤 2: 自定义内容

### 2.1 个人信息

编辑 `src/content/personal.ts`:
- 修改姓名、联系方式、GitHub 链接
- 更新教育背景
- 调整核心优势描述

### 2.2 技能数据

编辑 `src/content/skills.ts`:
- 更新技能分类
- 调整雷达图数值

### 2.3 工作经历

编辑 `src/content/experience.ts`:
- 添加或修改工作经历
- 更新职位、公司、时间

### 2.4 项目经历

编辑 `src/content/projects.ts`:
- 添加项目信息
- 设置项目指标和标签

## 步骤 3: 添加资源文件

### 简历 PDF

将简历 PDF 文件放入 `public/resume/` 目录,命名为 `李梁_数据工程师.pdf`

### 项目图片

在 `public/images/` 目录添加项目图片:
- sirna-thumbnail.png
- hezhao-thumbnail.png
- hengqin-thumbnail.png
- og-image.png (1200x630, 用于社交分享)

## 步骤 4: 本地预览

启动开发服务器:
```bash
npm run dev
```

打开浏览器访问 http://localhost:3000

## 步骤 5: 配置部署

### 5.1 更新域名信息

在以下文件中将 `yourusername` 替换为你的 GitHub 用户名:
- `src/app/layout.tsx` (Open Graph URL)
- `src/app/sitemap.ts` (sitemap baseUrl)
- `public/robots.txt` (sitemap URL)
- `src/content/personal.ts` (GitHub 链接)
- `README.md` (文档中的链接)

### 5.2 推送到 GitHub

```bash
git add .
git commit -m "feat: initialize portfolio website"
git push origin main
```

### 5.3 启用 GitHub Pages

1. 打开 GitHub 仓库页面
2. 进入 Settings → Pages
3. Source 选择 "GitHub Actions"
4. 等待 Actions 自动部署完成
5. 访问 `https://yourusername.github.io`

## 步骤 6: 自定义域名(可选)

### 6.1 配置 DNS

在域名注册商添加 CNAME 记录:
```
Type: CNAME
Name: @
Value: yourusername.github.io
```

### 6.2 添加 CNAME 文件

在 `public/` 目录创建 `CNAME` 文件,内容为你的域名:
```
yourdomain.com
```

### 6.3 在 GitHub 配置域名

1. 进入 Settings → Pages
2. Custom domain 输入你的域名
3. 勾选 "Enforce HTTPS"
4. 等待 DNS 验证(最多 24 小时)

## 常见问题

### Q: 如何修改主题颜色?

编辑 `tailwind.config.ts` 和 `src/styles/globals.css` 中的颜色变量。

### Q: 如何添加新页面?

在 `src/app/` 目录创建新的路由文件夹和 `page.tsx` 文件。

### Q: 构建失败怎么办?

1. 检查是否安装了所有依赖
2. 确保 Node.js 版本 >= 18
3. 运行 `npm run type-check` 检查 TypeScript 错误
4. 查看 GitHub Actions 日志了解详细错误

### Q: 如何更新网站内容?

修改 `src/content/` 目录下的数据文件,提交并推送到 GitHub,Actions 会自动重新部署。

## 技术支持

如有问题,请查看:
- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [GitHub Pages 文档](https://docs.github.com/pages)

---

祝你使用愉快!🚀
