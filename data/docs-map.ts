/** 文档地图：react.dev / nextjs.org ⇄ 本站课（精选映射） */
export type DocItem = {
  title: string;
  official: string;
  lessonSlug?: string;
  note?: string;
};

export type DocSection = {
  id: string;
  title: string;
  items: DocItem[];
};

export const DOC_SECTIONS: DocSection[] = [
  {
    id: "react-learn",
    title: "React Learn",
    items: [
      { title: "Quick Start", official: "https://react.dev/learn", lessonSlug: "intro" },
      { title: "Tutorial: Tic-Tac-Toe", official: "https://react.dev/learn/tutorial-tic-tac-toe", lessonSlug: "tic-tac-toe" },
      { title: "Thinking in React", official: "https://react.dev/learn/thinking-in-react", lessonSlug: "thinking-in-react" },
      { title: "Your First Component", official: "https://react.dev/learn/your-first-component", lessonSlug: "first-component" },
      { title: "JSX", official: "https://react.dev/learn/writing-markup-with-jsx", lessonSlug: "jsx" },
      { title: "Props", official: "https://react.dev/learn/passing-props-to-a-component", lessonSlug: "components-props" },
      { title: "Conditional Rendering", official: "https://react.dev/learn/conditional-rendering", lessonSlug: "conditional-render" },
      { title: "Lists", official: "https://react.dev/learn/rendering-lists", lessonSlug: "lists-keys" },
      { title: "State: A Component's Memory", official: "https://react.dev/learn/state-a-components-memory", lessonSlug: "state" },
      { title: "Responding to Events", official: "https://react.dev/learn/responding-to-events", lessonSlug: "responding-to-events" },
      { title: "Synchronizing with Effects", official: "https://react.dev/learn/synchronizing-with-effects", lessonSlug: "effects" },
      { title: "You Might Not Need an Effect", official: "https://react.dev/learn/you-might-not-need-an-effect", lessonSlug: "no-need-effect" },
      { title: "Reusing Logic with Custom Hooks", official: "https://react.dev/learn/reusing-logic-with-custom-hooks", lessonSlug: "hooks-custom" },
      { title: "Escape Hatches / Refs", official: "https://react.dev/learn/referencing-values-with-refs", lessonSlug: "use-ref" },
      { title: "React Compiler", official: "https://react.dev/learn/react-compiler", lessonSlug: "react-compiler" },
    ],
  },
  {
    id: "react-api",
    title: "React API Reference",
    items: [
      { title: "useState", official: "https://react.dev/reference/react/useState", lessonSlug: "state" },
      { title: "useEffect", official: "https://react.dev/reference/react/useEffect", lessonSlug: "effects" },
      { title: "useContext", official: "https://react.dev/reference/react/useContext", lessonSlug: "context" },
      { title: "useReducer", official: "https://react.dev/reference/react/useReducer", lessonSlug: "use-reducer" },
      { title: "useMemo / memo", official: "https://react.dev/reference/react/useMemo", lessonSlug: "memo" },
      { title: "useTransition", official: "https://react.dev/reference/react/useTransition", lessonSlug: "use-transition" },
      { title: "useOptimistic", official: "https://react.dev/reference/react/useOptimistic", lessonSlug: "use-optimistic" },
      { title: "Suspense", official: "https://react.dev/reference/react/Suspense", lessonSlug: "suspense" },
      { title: "createPortal", official: "https://react.dev/reference/react-dom/createPortal", lessonSlug: "portal" },
    ],
  },
  {
    id: "next-app",
    title: "Next.js App Router",
    items: [
      { title: "Getting Started", official: "https://nextjs.org/docs/app/getting-started", lessonSlug: "next-install" },
      { title: "Project Structure", official: "https://nextjs.org/docs/app/getting-started/project-structure", lessonSlug: "next-project-structure" },
      { title: "Layouts and Pages", official: "https://nextjs.org/docs/app/building-your-application/routing", lessonSlug: "next-app-router" },
      { title: "Linking and Navigating", official: "https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating", lessonSlug: "next-linking" },
      { title: "Server and Client Components", official: "https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns", lessonSlug: "next-server-client" },
      { title: "Data Fetching", official: "https://nextjs.org/docs/app/building-your-application/data-fetching", lessonSlug: "next-fetching" },
      { title: "Caching", official: "https://nextjs.org/docs/app/building-your-application/caching", lessonSlug: "next-caching" },
      { title: "Mutations / Server Actions", official: "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations", lessonSlug: "next-mutations" },
      { title: "Route Handlers", official: "https://nextjs.org/docs/app/building-your-application/routing/route-handlers", lessonSlug: "next-route-handlers" },
      { title: "Metadata", official: "https://nextjs.org/docs/app/building-your-application/optimizing/metadata", lessonSlug: "next-metadata" },
      { title: "Images & Fonts", official: "https://nextjs.org/docs/app/building-your-application/optimizing/images", lessonSlug: "next-images-fonts" },
      { title: "Error Handling", official: "https://nextjs.org/docs/app/building-your-application/routing/error-handling", lessonSlug: "next-error-handling" },
      { title: "Deploying", official: "https://nextjs.org/docs/app/building-your-application/deploying", lessonSlug: "next-deploying" },
      { title: "Static Exports", official: "https://nextjs.org/docs/app/building-your-application/deploying/static-exports", lessonSlug: "next-static-exports" },
    ],
  },
  {
    id: "official-llms",
    title: "官方 LLM 索引（有！）",
    items: [
      { title: "react.dev/llms.txt", official: "https://react.dev/llms.txt", note: "React 总索引" },
      { title: "zh-hans.react.dev/llms.txt", official: "https://zh-hans.react.dev/llms.txt", note: "中文索引" },
      { title: "nextjs.org/llms.txt", official: "https://nextjs.org/llms.txt", note: "Next 入口" },
      { title: "nextjs.org/docs/llms.txt", official: "https://nextjs.org/docs/llms.txt", note: "Docs 索引" },
      { title: "nextjs.org/docs/llms-full.txt", official: "https://nextjs.org/docs/llms-full.txt", note: "Docs 全文" },
    ],
  },
];

export function docsCoverage() {
  const items = DOC_SECTIONS.flatMap((s) => s.items);
  const linked = items.filter((i) => i.lessonSlug).length;
  return { total: items.length, linked, pct: Math.round((linked / items.length) * 100) };
}
