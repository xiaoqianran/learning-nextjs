"use client";

import Link from "next/link";

const SECTIONS: {
  title: string;
  items: { name: string; body: string; href?: string }[];
}[] = [
  {
    title: "描述 UI",
    items: [
      { name: "组件", body: "函数返回 JSX；首字母大写。", href: "https://zh-hans.react.dev/learn/your-first-component" },
      { name: "JSX", body: "表达式用 {}；className；自闭合标签。", href: "https://zh-hans.react.dev/learn/writing-markup-with-jsx" },
      { name: "Props", body: "只读输入；解构；children。", href: "https://zh-hans.react.dev/learn/passing-props-to-a-component" },
      { name: "条件", body: "?: / &&；注意 0 && 渲染 0。", href: "https://zh-hans.react.dev/learn/conditional-rendering" },
      { name: "列表", body: "map + 稳定 key（业务 id）。", href: "https://zh-hans.react.dev/learn/rendering-lists" },
      { name: "纯粹", body: "渲染无副作用；相同输入相同输出。", href: "https://zh-hans.react.dev/learn/keeping-components-pure" },
    ],
  },
  {
    title: "Hooks 速查",
    items: [
      { name: "useState", body: "本地 state；函数式更新 set(v=>…)。", href: "https://zh-hans.react.dev/reference/react/useState" },
      { name: "useReducer", body: "复杂状态迁移逻辑。", href: "https://zh-hans.react.dev/reference/react/useReducer" },
      { name: "useContext", body: "跨层读 Context。", href: "https://zh-hans.react.dev/reference/react/useContext" },
      { name: "useRef", body: "可变盒 / DOM；改 .current 不触发渲染。", href: "https://zh-hans.react.dev/reference/react/useRef" },
      { name: "useEffect", body: "同步外部系统；清理函数。", href: "https://zh-hans.react.dev/reference/react/useEffect" },
      { name: "useEffectEvent", body: "Effect 内事件逻辑，不进依赖。", href: "https://zh-hans.react.dev/reference/react/useEffectEvent" },
      { name: "useMemo", body: "缓存计算结果。", href: "https://zh-hans.react.dev/reference/react/useMemo" },
      { name: "useCallback", body: "缓存函数引用。", href: "https://zh-hans.react.dev/reference/react/useCallback" },
      { name: "useTransition", body: "非紧急更新，保持输入响应。", href: "https://zh-hans.react.dev/reference/react/useTransition" },
      { name: "useDeferredValue", body: "延迟衍生值。", href: "https://zh-hans.react.dev/reference/react/useDeferredValue" },
      { name: "useId", body: "SSR 安全唯一 id（非 list key）。", href: "https://zh-hans.react.dev/reference/react/useId" },
      { name: "useOptimistic", body: "乐观 UI。", href: "https://zh-hans.react.dev/reference/react/useOptimistic" },
      { name: "useActionState", body: "Action 结果 + pending。", href: "https://zh-hans.react.dev/reference/react/useActionState" },
      { name: "use", body: "读取 Promise / Context（可在条件中）。", href: "https://zh-hans.react.dev/reference/react/use" },
    ],
  },
  {
    title: "规则与陷阱",
    items: [
      { name: "Hook 规则", body: "顶层调用；不在条件/循环。", href: "https://zh-hans.react.dev/reference/rules/rules-of-hooks" },
      { name: "快照", body: "setState 不改当前渲染变量。", href: "https://zh-hans.react.dev/learn/state-as-a-snapshot" },
      { name: "少用 Effect", body: "派生与事件不要塞 Effect。", href: "https://zh-hans.react.dev/learn/you-might-not-need-an-effect" },
      { name: "不可变", body: "对象/数组用拷贝更新。", href: "https://zh-hans.react.dev/learn/updating-objects-in-state" },
      { name: "key 重置", body: "换实体时改 key 重建 state。", href: "https://zh-hans.react.dev/learn/preserving-and-resetting-state" },
    ],
  },
  {
    title: "Next.js App Router",
    items: [
      { name: "layout / page", body: "嵌套布局 + 页面段。", href: "https://nextjs.org/docs/app/getting-started/layouts-and-pages" },
      { name: "Server / Client", body: "默认 Server；交互 use client。", href: "https://nextjs.org/docs/app/getting-started/server-and-client-components" },
      { name: "fetch", body: "Server Component await 数据。", href: "https://nextjs.org/docs/app/getting-started/fetching-data" },
      { name: "Server Actions", body: "变更 + revalidate。", href: "https://nextjs.org/docs/app/getting-started/mutating-data" },
      { name: "缓存", body: "revalidate 秒 / tag / path。", href: "https://nextjs.org/docs/app/getting-started/caching" },
      { name: "Route Handlers", body: "route.ts 导出 GET/POST。", href: "https://nextjs.org/docs/app/getting-started/route-handlers" },
      { name: "Metadata", body: "metadata / generateMetadata。", href: "https://nextjs.org/docs/app/getting-started/metadata-and-og-images" },
      { name: "llms.txt", body: "官方 LLM 文档索引。", href: "https://nextjs.org/docs/llms.txt" },
    ],
  },
];

export default function CheatsheetPage() {
  return (
    <div className="mx-auto max-w-3xl pb-16">
      <h1 className="font-display text-2xl font-semibold tracking-tight">速查表</h1>
      <p className="mt-2 text-sm text-muted">
        对齐{" "}
        <a
          href="https://zh-hans.react.dev/reference/react/hooks"
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          React API
        </a>{" "}
        与{" "}
        <a
          href="https://nextjs.org/docs/llms.txt"
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Next.js llms 索引
        </a>
        。完整地图见{" "}
        <Link href="/official" className="text-primary hover:underline">
          官方文档
        </Link>
        。
      </p>
      <div className="mt-8 space-y-8">
        {SECTIONS.map((sec) => (
          <section key={sec.title}>
            <h2 className="text-sm font-medium uppercase tracking-wider text-subtle">
              {sec.title}
            </h2>
            <ul className="mt-3 divide-y divide-border rounded-xl border border-border bg-surface">
              {sec.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-start sm:gap-4"
                >
                  <span className="w-36 shrink-0 font-mono text-sm text-primary">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </span>
                  <span className="text-sm text-muted">{item.body}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">
        工坊实操：{" "}
        <Link href="/studio" className="text-primary no-underline hover:underline">
          全栈工坊
        </Link>
      </p>
    </div>
  );
}
