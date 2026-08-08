/** 对齐官方 llms.txt 的目录导航（精选，非全文镜像） */

export type OfficialLink = {
  title: string;
  url: string;
  note?: string;
};

export type OfficialSection = {
  source: "react" | "next";
  title: string;
  description: string;
  indexUrl: string;
  groups: { name: string; links: OfficialLink[] }[];
};

export const OFFICIAL_SECTIONS: OfficialSection[] = [
  {
    source: "react",
    title: "React 官方文档",
    description:
      "学习路径 + API 参考。完整索引见中文 llms.txt（与英文同源结构）。",
    indexUrl: "https://zh-hans.react.dev/llms.txt",
    groups: [
      {
        name: "起步",
        links: [
          { title: "快速入门", url: "https://zh-hans.react.dev/learn" },
          {
            title: "教程：井字棋",
            url: "https://zh-hans.react.dev/learn/tutorial-tic-tac-toe",
          },
          {
            title: "React 哲学",
            url: "https://zh-hans.react.dev/learn/thinking-in-react",
          },
          {
            title: "安装 / 创建应用",
            url: "https://zh-hans.react.dev/learn/installation",
          },
          {
            title: "React Compiler",
            url: "https://zh-hans.react.dev/learn/react-compiler",
          },
        ],
      },
      {
        name: "描述 UI",
        links: [
          {
            title: "你的第一个组件",
            url: "https://zh-hans.react.dev/learn/your-first-component",
          },
          {
            title: "JSX",
            url: "https://zh-hans.react.dev/learn/writing-markup-with-jsx",
          },
          {
            title: "Props",
            url: "https://zh-hans.react.dev/learn/passing-props-to-a-component",
          },
          {
            title: "条件渲染",
            url: "https://zh-hans.react.dev/learn/conditional-rendering",
          },
          {
            title: "列表",
            url: "https://zh-hans.react.dev/learn/rendering-lists",
          },
          {
            title: "保持组件纯粹",
            url: "https://zh-hans.react.dev/learn/keeping-components-pure",
          },
        ],
      },
      {
        name: "交互与 State",
        links: [
          {
            title: "响应事件",
            url: "https://zh-hans.react.dev/learn/responding-to-events",
          },
          {
            title: "state 记忆",
            url: "https://zh-hans.react.dev/learn/state-a-components-memory",
          },
          {
            title: "state 如快照",
            url: "https://zh-hans.react.dev/learn/state-as-a-snapshot",
          },
          {
            title: "队列更新",
            url: "https://zh-hans.react.dev/learn/queueing-a-series-of-state-updates",
          },
          {
            title: "更新对象 / 数组",
            url: "https://zh-hans.react.dev/learn/updating-objects-in-state",
          },
        ],
      },
      {
        name: "状态管理",
        links: [
          {
            title: "状态结构",
            url: "https://zh-hans.react.dev/learn/choosing-the-state-structure",
          },
          {
            title: "共享状态",
            url: "https://zh-hans.react.dev/learn/sharing-state-between-components",
          },
          {
            title: "保留与重置",
            url: "https://zh-hans.react.dev/learn/preserving-and-resetting-state",
          },
          {
            title: "Reducer",
            url: "https://zh-hans.react.dev/learn/extracting-state-logic-into-a-reducer",
          },
          {
            title: "Context",
            url: "https://zh-hans.react.dev/learn/passing-data-deeply-with-context",
          },
        ],
      },
      {
        name: "脱围机制",
        links: [
          {
            title: "Ref",
            url: "https://zh-hans.react.dev/learn/referencing-values-with-refs",
          },
          {
            title: "Effect 同步",
            url: "https://zh-hans.react.dev/learn/synchronizing-with-effects",
          },
          {
            title: "你可能不需要 Effect",
            url: "https://zh-hans.react.dev/learn/you-might-not-need-an-effect",
          },
          {
            title: "自定义 Hook",
            url: "https://zh-hans.react.dev/learn/reusing-logic-with-custom-hooks",
          },
        ],
      },
      {
        name: "API 精选",
        links: [
          {
            title: "Hooks 总览",
            url: "https://zh-hans.react.dev/reference/react/hooks",
          },
          {
            title: "useEffectEvent",
            url: "https://zh-hans.react.dev/reference/react/useEffectEvent",
          },
          {
            title: "useOptimistic",
            url: "https://zh-hans.react.dev/reference/react/useOptimistic",
          },
          {
            title: "useActionState",
            url: "https://zh-hans.react.dev/reference/react/useActionState",
          },
          {
            title: "Suspense",
            url: "https://zh-hans.react.dev/reference/react/Suspense",
          },
          {
            title: "服务器组件",
            url: "https://zh-hans.react.dev/reference/rsc/server-components",
          },
          {
            title: "Hook 规则",
            url: "https://zh-hans.react.dev/reference/rules/rules-of-hooks",
          },
        ],
      },
    ],
  },
  {
    source: "next",
    title: "Next.js 官方文档",
    description:
      "App Router Getting Started 与完整 /docs/llms.txt 索引（当前文档线 16.x）。",
    indexUrl: "https://nextjs.org/docs/llms.txt",
    groups: [
      {
        name: "Getting Started",
        links: [
          {
            title: "Installation",
            url: "https://nextjs.org/docs/app/getting-started/installation",
          },
          {
            title: "Project Structure",
            url: "https://nextjs.org/docs/app/getting-started/project-structure",
          },
          {
            title: "Layouts and Pages",
            url: "https://nextjs.org/docs/app/getting-started/layouts-and-pages",
          },
          {
            title: "Linking and Navigating",
            url: "https://nextjs.org/docs/app/getting-started/linking-and-navigating",
          },
          {
            title: "Server and Client Components",
            url: "https://nextjs.org/docs/app/getting-started/server-and-client-components",
          },
          {
            title: "Fetching Data",
            url: "https://nextjs.org/docs/app/getting-started/fetching-data",
          },
          {
            title: "Mutating Data",
            url: "https://nextjs.org/docs/app/getting-started/mutating-data",
          },
          {
            title: "Caching",
            url: "https://nextjs.org/docs/app/getting-started/caching",
          },
          {
            title: "Revalidating",
            url: "https://nextjs.org/docs/app/getting-started/revalidating",
          },
          {
            title: "Error Handling",
            url: "https://nextjs.org/docs/app/getting-started/error-handling",
          },
          {
            title: "Images / Fonts / Metadata",
            url: "https://nextjs.org/docs/app/getting-started/images",
          },
          {
            title: "Route Handlers",
            url: "https://nextjs.org/docs/app/getting-started/route-handlers",
          },
          {
            title: "Deploying",
            url: "https://nextjs.org/docs/app/getting-started/deploying",
          },
        ],
      },
      {
        name: "LLM / AI",
        links: [
          { title: "Root llms.txt", url: "https://nextjs.org/llms.txt" },
          {
            title: "Docs llms.txt",
            url: "https://nextjs.org/docs/llms.txt",
            note: "完整目录索引",
          },
          {
            title: "llms-full.txt",
            url: "https://nextjs.org/docs/llms-full.txt",
            note: "全文（很大）",
          },
          {
            title: "AI Coding Agents",
            url: "https://nextjs.org/docs/app/guides/ai-agents",
          },
        ],
      },
      {
        name: "重要指南",
        links: [
          {
            title: "Authentication",
            url: "https://nextjs.org/docs/app/guides/authentication",
          },
          {
            title: "Forms / Server Actions",
            url: "https://nextjs.org/docs/app/guides/forms",
          },
          {
            title: "Data Security",
            url: "https://nextjs.org/docs/app/guides/data-security",
          },
          {
            title: "ISR",
            url: "https://nextjs.org/docs/app/guides/incremental-static-regeneration",
          },
          {
            title: "Internationalization",
            url: "https://nextjs.org/docs/app/guides/internationalization",
          },
          {
            title: "Testing",
            url: "https://nextjs.org/docs/app/guides/testing",
          },
        ],
      },
    ],
  },
];

export const LLM_INDEXES = [
  {
    name: "React（中文）",
    url: "https://zh-hans.react.dev/llms.txt",
  },
  { name: "React（EN）", url: "https://react.dev/llms.txt" },
  { name: "Next.js 根索引", url: "https://nextjs.org/llms.txt" },
  { name: "Next.js 文档索引", url: "https://nextjs.org/docs/llms.txt" },
  {
    name: "Next.js 全文",
    url: "https://nextjs.org/docs/llms-full.txt",
  },
  { name: "本站课程索引", url: "/llms.txt" },
] as const;
