# React 实战学习 · Next.js 版

**在线：** https://xiaoqianran.github.io/learning-nextjs/  
**仓库：** https://github.com/xiaoqianran/learning-nextjs  
**源项目：** https://github.com/xiaoqianran/learning-react  

通过 GitHub Actions 自动构建并部署到 **GitHub Pages**（Source = GitHub Actions）。


基于 [learning-react](https://github.com/xiaoqianran/learning-react) 移植到 **Next.js App Router**。

## 功能

- 交互式中文 React 教程（讲解 → 源码 → Demo → 测验）
- 学习进度 / 成就 / 打卡日历 / 错题本
- 全栈工坊（TanStack Query + Mock API）
- 命令面板（Ctrl/⌘ K）、深浅主题、速查表、路线图、结业证书

## 本地运行

```bash
npm install
npm run dev
```

打开 http://localhost:8080

## 技术栈

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- Zustand
- TanStack Query
- cmdk

工坊演示账号：`demo@react.dev` / `password123`


## 对齐官方文档

本站对照官方 LLM 索引构建课程与导航：

- React: https://zh-hans.react.dev/llms.txt
- Next.js: https://nextjs.org/docs/llms.txt
- 本站索引: https://xiaoqianran.github.io/learning-nextjs/llms.txt
- 官方文档中枢: https://xiaoqianran.github.io/learning-nextjs/official/

v6 新增「官方对齐」「Next.js」轨道课程（Thinking in React、纯组件、state 快照、少用 Effect、RSC、App Router、Server Actions、缓存、llms.txt 等）。


## v7 官网迁移

- 按 [React llms.txt](https://zh-hans.react.dev/llms.txt) 迁移 Learn 全路径
- 按 API 参考迁移 Hooks/组件/RSC 指令等
- 按 [Next docs llms.txt](https://nextjs.org/docs/llms.txt) 迁移 Getting Started 与主要 Guides
- 源码：`data/lessons-migrated.ts`
