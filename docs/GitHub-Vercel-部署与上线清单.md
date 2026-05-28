# GitHub + Vercel 部署与上线清单

## 当前项目状态

- 技术栈：`Vite + React + TailwindCSS`
- 当前构建命令：`npm run build`
- 当前产物目录：`dist`
- 当前部署策略建议：`GitHub -> Vercel`
- 当前站点适合先按单首页部署，后续再扩展为多页面站点

## 当前目录结构建议

当前已经整理为适合后续多页面扩展的基础结构：

```text
src/
├── components/        # 全局通用视觉组件
├── data/              # 内容数据层
├── features/          # 可复用的业务板块
├── pages/
│   └── home/
│       └── HomePage.jsx
├── theme/
├── App.jsx
├── index.css
└── main.jsx
```

后续新增页面时，建议继续沿用：

```text
src/pages/
├── home/
├── about/
├── projects/
└── contact/
```

## GitHub 上线前检查

在推送到 GitHub 前，先确认以下内容：

- 已存在 `.gitignore`
- `node_modules/` 不提交
- `dist/` 不提交
- 本地日志文件不提交
- 参考稿 HTML 可以保留，但建议你确认是否要公开
- `src/data/portfolio.js` 中的邮箱、GitHub、个人介绍、项目文案已经替换为你准备公开的信息

建议本地先执行：

```bash
npm run build
```

如果构建成功，再提交仓库。

## GitHub 初始化步骤

如果你还没初始化仓库：

```bash
git init
git add .
git commit -m "init: ego personal website"
```

然后在 GitHub 新建仓库，再执行：

```bash
git remote add origin <你的仓库地址>
git branch -M main
git push -u origin main
```

## Vercel 部署步骤

### 方式一：推荐，用 GitHub 自动部署

1. 登录 Vercel
2. 点击 `Add New...`
3. 选择 `Project`
4. 导入你的 GitHub 仓库
5. 确认项目配置

建议配置如下：

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

然后点击 `Deploy`

### 自动部署行为

仓库接入后：

- 每次推送到 `main` 都会触发生产部署
- 每次新分支/PR 都可以生成预览链接

## 域名配置

部署成功后，在 Vercel 项目后台：

1. 打开 `Settings`
2. 进入 `Domains`
3. 添加你的自定义域名

常见做法：

- 主域名：`yourname.com`
- 网站：www 子域名：`www.yourname.com`

如果域名在第三方平台购买，按 Vercel 提示补 DNS 记录即可。

## 未来多页面扩展建议

因为你后续想做成多页面，所以建议：

- 尽量采用 `Vite` 的多页面输出或独立页面结构
- 不要现在就把整站锁成 SPA 的全局 rewrite
- 每个页面单独准备标题、描述、内容数据

建议未来页面划分：

- `/` 首页
- `/projects/` 项目总览
- `/projects/<slug>/` 项目详情
- `/about/` 关于页
- `/contact/` 联系页

## 上线前最后检查

- 网站标题是否已经替换成你的正式名称
- `favicon` 是否为最终版本
- 邮箱是否为公开可联系邮箱
- GitHub 链接是否正确
- `portfolio.js` 里的占位内容是否已经替换
- 页面在移动端是否已检查
- 是否有不想公开的参考稿、草稿或测试文件

## 当前不建议做的事

- 现在不要先加 Vercel SPA 全站 rewrite
- 现在不要把装饰性草稿线文字也抽成数据层
- 现在不要把所有页面都硬塞回一个 `App.jsx`

## 建议的下一步

上线前最值得先做的两件事：

1. 把 `src/data/portfolio.js` 中的公开信息替换成你的正式内容
2. 推到 GitHub 并接入 Vercel 完成首版上线
