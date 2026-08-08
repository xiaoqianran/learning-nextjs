/**
 * 从官方 llms.txt 目录迁移：React Learn 全路径、API 参考、Next Getting Started/Guides
 * 每课含官方链接；内容为教学浓缩 + 测验（非全文镜像）
 */
import type { Lesson } from "./lessons";

export const MIGRATED_LESSONS: Lesson[] = [
  {
    slug: "tic-tac-toe",
    title: "教程：井字棋游戏",
    summary: "官方入门教程：组件、state、可交互棋盘。",
    level: "入门",
    track: "官方 Learn",
    minutes: 20,
    official: [
      { title: "官方教程：井字棋", url: "https://zh-hans.react.dev/learn/tutorial-tic-tac-toe" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 跟着官方教程做完井字棋，串联 props、state、不可变更新与组件拆分。\\n\\n• 重点是 UI = f(state) 与提升 state。\\n\\n• 做完后对照本站「React 哲学」复盘。`,
      },
      {
        type: "code",
        title: "方格组件",
        lang: "tsx",
        code: `function Square({ value, onSquareClick }: { value: string; onSquareClick: () => void }) {
  return <button onClick={onSquareClick}>{value}</button>
}`,
      },
      {
        type: "tip",
        body: `完整步骤见官方教程。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "ttt1",
            question: "井字棋教程核心训练？",
            options: ["CSS 动画", "组件 + state 数据流", "GraphQL", "SSR only"],
            answer: 1,
            explain: "交互与状态是主线。",
          }
        ],
      }
    ],
  },
  {
    slug: "install-react",
    title: "安装 React",
    summary: "包管理器、推荐工具链与环境前提。",
    level: "入门",
    track: "官方 Learn",
    minutes: 8,
    official: [
      { title: "安装", url: "https://zh-hans.react.dev/learn/installation" },
      { title: "创建应用", url: "https://zh-hans.react.dev/learn/creating-a-react-app" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 现代推荐：用框架（Next.js 等）创建应用。\\n\\n• 需要 Node.js LTS。\\n\\n• 生产项目优先框架而非手写打包配置入门。`,
      },
      {
        type: "tip",
        body: `见官方 Installation。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "ir1",
            question: "官方更推荐新人？",
            options: ["手写 babel 入门", "用框架/脚手架创建应用", "必须 CDN", "禁用 TS"],
            answer: 1,
            explain: "框架提供约定与工具。",
          }
        ],
      }
    ],
  },
  {
    slug: "create-react-app-guide",
    title: "创建一个 React 应用",
    summary: "框架选型与 create 命令心智。",
    level: "入门",
    track: "官方 Learn",
    minutes: 8,
    official: [
      { title: "创建应用", url: "https://zh-hans.react.dev/learn/creating-a-react-app" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 官方引导使用完整能力框架（如 Next.js）。\\n\\n• 本仓库是 Next.js App Router 示例。\\n\\n• 创建后关注目录约定、dev、类型检查。`,
      },
      {
        type: "code",
        title: "创建",
        lang: "tsx",
        code: `// npx create-next-app@latest
// npm run dev`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "cra1",
            question: "本站技术栈？",
            options: ["jQuery", "Next.js 上的 React", "仅 CDN", "Angular"],
            answer: 1,
            explain: "App Router + React。",
          }
        ],
      }
    ],
  },
  {
    slug: "build-from-scratch",
    title: "从零构建一个 React 应用",
    summary: "打包器、入口、根节点挂载。",
    level: "进阶",
    track: "官方 Learn",
    minutes: 12,
    official: [
      { title: "从零构建", url: "https://zh-hans.react.dev/learn/build-a-react-app-from-scratch" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• createRoot(domNode).render(<App />)。\\n\\n• 需要打包 JSX。\\n\\n• 从零为了理解工具链，业务仍建议框架。`,
      },
      {
        type: "code",
        title: "挂载",
        lang: "tsx",
        code: `import { createRoot } from "react-dom/client"
import App from "./App"
createRoot(document.getElementById("root")!).render(<App />)`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "bfs1",
            question: "现代挂载 API？",
            options: ["ReactDOM.render 旧版", "createRoot", "document.write", "innerHTML"],
            answer: 1,
            explain: "createRoot。",
          }
        ],
      }
    ],
  },
  {
    slug: "add-react-existing",
    title: "将 React 添加到现有项目",
    summary: "渐进增强：局部挂载岛屿。",
    level: "进阶",
    track: "官方 Learn",
    minutes: 10,
    official: [
      { title: "添加到现有项目", url: "https://zh-hans.react.dev/learn/add-react-to-an-existing-project" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 可在非 React 站点局部挂载组件。\\n\\n• 注意样式隔离与构建。\\n\\n• 逐步迁移页面。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "are1",
            question: "存量引入策略？",
            options: ["只能全站重写", "局部挂载逐步迁移", "禁止混用", "删后端"],
            answer: 1,
            explain: "渐进。",
          }
        ],
      }
    ],
  },
  {
    slug: "editor-setup",
    title: "编辑器设置",
    summary: "ESLint、格式化、React 插件。",
    level: "入门",
    track: "官方 Learn",
    minutes: 6,
    official: [
      { title: "编辑器设置", url: "https://zh-hans.react.dev/learn/editor-setup" },
      { title: "开发者工具", url: "https://zh-hans.react.dev/learn/react-developer-tools" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• ESLint + eslint-plugin-react-hooks。\\n\\n• TypeScript 跳转。\\n\\n• 安装 React DevTools。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "es1",
            question: "Hooks 规则静态检查？",
            options: ["感觉", "eslint-plugin-react-hooks", "CSS lint", "DNS"],
            answer: 1,
            explain: "官方插件。",
          }
        ],
      }
    ],
  },
  {
    slug: "react-devtools",
    title: "React 开发者工具",
    summary: "组件树、props/state、Profiler。",
    level: "入门",
    track: "官方 Learn",
    minutes: 8,
    official: [
      { title: "React 开发者工具", url: "https://zh-hans.react.dev/learn/react-developer-tools" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• Components 面板看树与 hooks。\\n\\n• Profiler 分析提交耗时。\\n\\n• 配合 Elements 定位 DOM。`,
      },
      {
        type: "tip",
        body: `浏览器扩展：React Developer Tools。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "rdv1",
            question: "分析为何重渲染？",
            options: ["只看 Network", "Profiler", "DNS", "FTP"],
            answer: 1,
            explain: "Profiler。",
          }
        ],
      }
    ],
  },
  {
    slug: "describing-the-ui",
    title: "描述 UI",
    summary: "官方「描述 UI」章节导读。",
    level: "入门",
    track: "官方 Learn",
    minutes: 8,
    official: [
      { title: "描述 UI", url: "https://zh-hans.react.dev/learn/describing-the-ui" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 界面拆组件、props 配置、JSX 描述。\\n\\n• 先静态 UI，再交互。\\n\\n• 串联组件/JSX/props/条件/列表/纯粹/UI 树。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "dui1",
            question: "描述 UI 的基础单位？",
            options: ["数据库行", "组件", "端口", "CSS 文件"],
            answer: 1,
            explain: "组件。",
          }
        ],
      }
    ],
  },
  {
    slug: "first-component",
    title: "你的第一个组件",
    summary: "定义、命名、返回 JSX。",
    level: "入门",
    track: "官方 Learn",
    minutes: 8,
    official: [
      { title: "你的第一个组件", url: "https://zh-hans.react.dev/learn/your-first-component" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 返回标签的函数；大写开头。\\n\\n• 嵌套组合形成树。\\n\\n• 常用 default 导出页面级组件。`,
      },
      {
        type: "code",
        title: "组合",
        lang: "tsx",
        code: `function Profile() {
  return <img src="avatar.png" alt="A" />
}
export default function Gallery() {
  return (
    <section>
      <Profile />
      <Profile />
    </section>
  )
}`,
      },
      {
        type: "demo",
        kind: "props",
        title: "动手：组件",
        hint: "改 props 看输出。",
      },
      {
        type: "quiz",
        questions: [
          {
            id: "fc1",
            question: "组件名必须？",
            options: ["小写 html", "大写开头", "数字开头", "强制下划线"],
            answer: 1,
            explain: "大写区分原生标签。",
          }
        ],
      }
    ],
  },
  {
    slug: "import-export",
    title: "组件的导入与导出",
    summary: "default / named 与拆分文件。",
    level: "入门",
    track: "官方 Learn",
    minutes: 8,
    official: [
      { title: "导入与导出", url: "https://zh-hans.react.dev/learn/importing-and-exporting-components" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• default：import X from './X'。\\n\\n• named：import { X } from './X'。\\n\\n• 按功能拆文件。`,
      },
      {
        type: "code",
        title: "导入导出",
        lang: "tsx",
        code: `export function Avatar() { return <img alt="" /> }
// import { Avatar } from "./Avatar"`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "ie1",
            question: "named export 导入？",
            options: ["import X from", "import { X } from", "require.only", "include"],
            answer: 1,
            explain: "花括号。",
          }
        ],
      }
    ],
  },
  {
    slug: "jsx-curly-braces",
    title: "JSX 中的 JavaScript 大括号",
    summary: "嵌入表达式与样式对象。",
    level: "入门",
    track: "官方 Learn",
    minutes: 8,
    official: [
      { title: "JSX 大括号", url: "https://zh-hans.react.dev/learn/javascript-in-jsx-with-curly-braces" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• {} 内写表达式。\\n\\n• style 接受对象 style={{ color: 'red' }}。\\n\\n• 不能直接写 if 语句，用三元或提前计算。`,
      },
      {
        type: "code",
        title: "表达式",
        lang: "tsx",
        code: `const name = "Ada"
return <h1 style={{ color: "#61dafb" }}>Hello {name}</h1>`,
      },
      {
        type: "demo",
        kind: "jsx",
        title: "动手：JSX 表达式",
      },
      {
        type: "quiz",
        questions: [
          {
            id: "jc1",
            question: "JSX 表达式用？",
            options: ["<% %>", "{}", "[[ ]]", "##"],
            answer: 1,
            explain: "花括号。",
          }
        ],
      }
    ],
  },
  {
    slug: "ui-as-tree",
    title: "将 UI 视为树",
    summary: "渲染树与模块依赖树。",
    level: "入门",
    track: "官方 Learn",
    minutes: 10,
    official: [
      { title: "将 UI 视为树", url: "https://zh-hans.react.dev/learn/understanding-your-ui-as-a-tree" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• React 遍历组件树渲染。\\n\\n• 父到子 props 单向流。\\n\\n• 帮助定位 state 与性能边界。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "uat1",
            question: "数据默认流向？",
            options: ["子到父自动", "父到子 props", "双向强制", "全局 only"],
            answer: 1,
            explain: "单向。",
          }
        ],
      }
    ],
  },
  {
    slug: "adding-interactivity",
    title: "添加交互",
    summary: "事件与 state 章节导读。",
    level: "入门",
    track: "官方 Learn",
    minutes: 6,
    official: [
      { title: "添加交互", url: "https://zh-hans.react.dev/learn/adding-interactivity" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 交互 = 事件 + state + 重渲染。\\n\\n• 先事件再快照/队列。\\n\\n• 官方本章覆盖事件到数组更新。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "ai1",
            question: "交互闭环？",
            options: ["只改 CSS", "事件→setState→渲染", "整页刷新", "改 HTML 文件"],
            answer: 1,
            explain: "状态驱动。",
          }
        ],
      }
    ],
  },
  {
    slug: "responding-to-events",
    title: "响应事件",
    summary: "传函数而非调用；preventDefault。",
    level: "入门",
    track: "官方 Learn",
    minutes: 8,
    official: [
      { title: "响应事件", url: "https://zh-hans.react.dev/learn/responding-to-events" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• onClick={handler} 不要 onClick={handler()}。\\n\\n• 处理函数内更新 state。\\n\\n• e.preventDefault() 阻止默认。`,
      },
      {
        type: "code",
        title: "事件",
        lang: "tsx",
        code: `function Button({ onSmash, children }: { onSmash: () => void; children: React.ReactNode }) {
  return <button onClick={onSmash}>{children}</button>
}`,
      },
      {
        type: "demo",
        kind: "counter",
        title: "动手：点击",
      },
      {
        type: "quiz",
        questions: [
          {
            id: "rte1",
            question: "onClick={fn()} 会？",
            options: ["正确绑定", "渲染时立刻调用", "编译失败", "仅 SSR"],
            answer: 1,
            explain: "应传引用。",
          }
        ],
      }
    ],
  },
  {
    slug: "state-memory",
    title: "state：组件的记忆",
    summary: "useState 跨渲染保持。",
    level: "入门",
    track: "官方 Learn",
    minutes: 10,
    official: [
      { title: "state：组件的记忆", url: "https://zh-hans.react.dev/learn/state-a-components-memory" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 普通变量重渲染丢失。\\n\\n• 每实例独立 state。\\n\\n• 更新触发重渲染。`,
      },
      {
        type: "code",
        title: "记忆",
        lang: "tsx",
        code: `const [index, setIndex] = useState(0)`,
      },
      {
        type: "demo",
        kind: "state",
        title: "动手：useState",
      },
      {
        type: "quiz",
        questions: [
          {
            id: "sm1",
            question: "为何不用 let 计数？",
            options: ["可以用且推荐", "重新渲染会丢失", "禁止 let", "仅 TS"],
            answer: 1,
            explain: "函数会重跑。",
          }
        ],
      }
    ],
  },
  {
    slug: "render-and-commit",
    title: "渲染和提交",
    summary: "触发 → 渲染 → 提交 DOM。",
    level: "入门",
    track: "官方 Learn",
    minutes: 10,
    official: [
      { title: "渲染和提交", url: "https://zh-hans.react.dev/learn/render-and-commit" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 三步：触发、渲染算 JSX、提交改 DOM。\\n\\n• 渲染必须纯。\\n\\n• 帮助理解双调用与批处理。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "rac1",
            question: "提交阶段？",
            options: ["只算 props", "把变更应用到 DOM", "编译 TS", "拉 Git"],
            answer: 1,
            explain: "commit。",
          }
        ],
      }
    ],
  },
  {
    slug: "queue-state-updates",
    title: "把一系列 state 更新加入队列",
    summary: "批处理与函数式更新。",
    level: "入门",
    track: "官方 Learn",
    minutes: 10,
    official: [
      { title: "队列更新", url: "https://zh-hans.react.dev/learn/queueing-a-series-of-state-updates" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 同事件多更新可批处理。\\n\\n• 基于前值：setX(x => x+1)。\\n\\n• 配合 state 快照理解。`,
      },
      {
        type: "code",
        title: "队列",
        lang: "tsx",
        code: `setAge(a => a + 1)
setAge(a => a + 1)
setAge(a => a + 1) // +3`,
      },
      {
        type: "demo",
        kind: "state",
        title: "动手：队列",
      },
      {
        type: "quiz",
        questions: [
          {
            id: "qsu1",
            question: "三次函数式 +1？",
            options: ["+1", "+3", "0", "报错"],
            answer: 1,
            explain: "链式。",
          }
        ],
      }
    ],
  },
  {
    slug: "update-objects",
    title: "更新 state 中的对象",
    summary: "展开拷贝；禁止 mutate。",
    level: "入门",
    track: "官方 Learn",
    minutes: 10,
    official: [
      { title: "更新对象", url: "https://zh-hans.react.dev/learn/updating-objects-in-state" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 禁止 user.name = x 后 set(user)。\\n\\n• setUser({ ...user, name })。\\n\\n• 嵌套需多层展开或扁平化。`,
      },
      {
        type: "code",
        title: "对象",
        lang: "tsx",
        code: `setPlayer({ ...player, score: player.score + 1 })`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "uobj1",
            question: "正确更新？",
            options: ["obj.x=1; set(obj)", "set({...obj,x:1})", "delete obj", "freeze 后 mutate"],
            answer: 1,
            explain: "新对象。",
          }
        ],
      }
    ],
  },
  {
    slug: "update-arrays",
    title: "更新 state 中的数组",
    summary: "map/filter；不用原地 push。",
    level: "入门",
    track: "官方 Learn",
    minutes: 10,
    official: [
      { title: "更新数组", url: "https://zh-hans.react.dev/learn/updating-arrays-in-state" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 新增 [...arr, x]。\\n\\n• 删除 filter。\\n\\n• 替换 map。`,
      },
      {
        type: "code",
        title: "数组",
        lang: "tsx",
        code: `setArtists(artists.filter(a => a.id !== id))`,
      },
      {
        type: "demo",
        kind: "list",
        title: "动手：列表",
      },
      {
        type: "quiz",
        questions: [
          {
            id: "uarr1",
            question: "删除一项？",
            options: ["splice 原地 set 原数组", "filter 新数组", "length=0", "eval"],
            answer: 1,
            explain: "不可变。",
          }
        ],
      }
    ],
  },
  {
    slug: "managing-state",
    title: "状态管理（导读）",
    summary: "官方状态管理章节地图。",
    level: "进阶",
    track: "官方 Learn",
    minutes: 8,
    official: [
      { title: "状态管理", url: "https://zh-hans.react.dev/learn/managing-state" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 输入驱动、结构、共享、重置、reducer、context。\\n\\n• 先本地再提升。\\n\\n• 避免一上来全局 store。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "ms1",
            question: "升级顺序？",
            options: ["先 Redux", "本地→提升→context/reducer", "先事件总线", "只用 URL"],
            answer: 1,
            explain: "渐进。",
          }
        ],
      }
    ],
  },
  {
    slug: "reacting-to-input",
    title: "用 State 响应输入",
    summary: "声明式 UI 状态机。",
    level: "进阶",
    track: "官方 Learn",
    minutes: 10,
    official: [
      { title: "用 State 响应输入", url: "https://zh-hans.react.dev/learn/reacting-to-input-with-state" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 用 state 描述界面模式。\\n\\n• 如 typing/sending/sent。\\n\\n• 每状态对应 UI。`,
      },
      {
        type: "code",
        title: "状态机",
        lang: "tsx",
        code: `if (status === 'sent') return <h1>Done</h1>`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "rti1",
            question: "声明式？",
            options: ["$('#x').hide()", "state 描述模式再渲染", "document.write", "alert 流程"],
            answer: 1,
            explain: "UI=f(state)。",
          }
        ],
      }
    ],
  },
  {
    slug: "state-structure",
    title: "选择 State 结构",
    summary: "避免冗余与矛盾。",
    level: "进阶",
    track: "官方 Learn",
    minutes: 12,
    official: [
      { title: "选择 State 结构", url: "https://zh-hans.react.dev/learn/choosing-the-state-structure" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 能派生的不存。\\n\\n• 避免矛盾字段。\\n\\n• 深嵌套可扁平。`,
      },
      {
        type: "code",
        title: "派生",
        lang: "tsx",
        code: `const full = first + ' ' + last`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "sst1",
            question: "fullName 应？",
            options: ["state+effect 同步", "first/last 派生", "必须 context", "存 DOM"],
            answer: 1,
            explain: "派生。",
          }
        ],
      }
    ],
  },
  {
    slug: "reducer-context-scale",
    title: "用 Reducer + Context 拓展",
    summary: "dispatch 下发规模化。",
    level: "进阶",
    track: "官方 Learn",
    minutes: 12,
    official: [
      { title: "Reducer 和 Context", url: "https://zh-hans.react.dev/learn/scaling-up-with-reducer-and-context" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• reducer 收敛逻辑。\\n\\n• 分拆 state/dispatch context。\\n\\n• 仍渐进引入。`,
      },
      {
        type: "code",
        title: "规模化",
        lang: "tsx",
        code: `const dispatch = useContext(TasksDispatchContext)
dispatch({ type: "added", text })`,
      },
      {
        type: "demo",
        kind: "reducer",
        title: "动手：reducer",
      },
      {
        type: "quiz",
        questions: [
          {
            id: "rcs1",
            question: "规模化组合？",
            options: ["仅 CSS 变量", "useReducer + Context", "jQuery", "localStorage only"],
            answer: 1,
            explain: "官方模式。",
          }
        ],
      }
    ],
  },
  {
    slug: "escape-hatches",
    title: "脱围机制（导读）",
    summary: "ref 与 Effect。",
    level: "进阶",
    track: "官方 Learn",
    minutes: 8,
    official: [
      { title: "脱围机制", url: "https://zh-hans.react.dev/learn/escape-hatches" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 多数功能不必脱围。\\n\\n• ref：DOM/定时器。\\n\\n• Effect：外部系统。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "eh1",
            question: "脱围用于？",
            options: ["所有业务", "外部系统/DOM", "替代 props", "写 SQL"],
            answer: 1,
            explain: "逃逸口。",
          }
        ],
      }
    ],
  },
  {
    slug: "ref-values",
    title: "使用 ref 引用值",
    summary: "不触发渲染的可变盒。",
    level: "进阶",
    track: "官方 Learn",
    minutes: 10,
    official: [
      { title: "使用 ref 引用值", url: "https://zh-hans.react.dev/learn/referencing-values-with-refs" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 改 current 不重渲染。\\n\\n• 适合 interval id。\\n\\n• 展示数据用 state。`,
      },
      {
        type: "code",
        title: "ref",
        lang: "tsx",
        code: `const countRef = useRef(0)
countRef.current += 1`,
      },
      {
        type: "demo",
        kind: "ref",
        title: "动手：ref",
      },
      {
        type: "quiz",
        questions: [
          {
            id: "rv1",
            question: "改 ref.current 重渲染？",
            options: ["会", "不会", "仅 StrictMode", "仅生产"],
            answer: 1,
            explain: "不会。",
          }
        ],
      }
    ],
  },
  {
    slug: "ref-dom",
    title: "使用 ref 操作 DOM",
    summary: "focus、scroll、测量。",
    level: "进阶",
    track: "官方 Learn",
    minutes: 10,
    official: [
      { title: "操作 DOM", url: "https://zh-hans.react.dev/learn/manipulating-the-dom-with-refs" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• ref 挂宿主元素。\\n\\n• 事件或 Effect 中操作。\\n\\n• 渲染期勿读写 DOM。`,
      },
      {
        type: "code",
        title: "DOM",
        lang: "tsx",
        code: `const inputRef = useRef<HTMLInputElement>(null)
inputRef.current?.focus()`,
      },
      {
        type: "demo",
        kind: "ref",
        title: "动手：DOM ref",
      },
      {
        type: "quiz",
        questions: [
          {
            id: "rdom1",
            question: "聚焦？",
            options: ["仅 CSS", "ref.current.focus()", "document.all", "alert"],
            answer: 1,
            explain: "命令式。",
          }
        ],
      }
    ],
  },
  {
    slug: "sync-effects",
    title: "使用 Effect 进行同步",
    summary: "订阅与清理。",
    level: "进阶",
    track: "官方 Learn",
    minutes: 12,
    official: [
      { title: "使用 Effect 同步", url: "https://zh-hans.react.dev/learn/synchronizing-with-effects" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 渲染后同步外部。\\n\\n• 返回清理函数。\\n\\n• 依赖控制重跑。`,
      },
      {
        type: "code",
        title: "Effect",
        lang: "tsx",
        code: `useEffect(() => {
  const id = setInterval(() => {}, 1000)
  return () => clearInterval(id)
}, [])`,
      },
      {
        type: "demo",
        kind: "effect",
        title: "动手：Effect",
      },
      {
        type: "quiz",
        questions: [
          {
            id: "se1",
            question: "清理何时跑？",
            options: ["永不", "下次 effect 前与卸载", "仅构建", "仅 hydrate"],
            answer: 1,
            explain: "防泄漏。",
          }
        ],
      }
    ],
  },
  {
    slug: "effect-lifecycle",
    title: "响应式 Effect 的生命周期",
    summary: "依赖变化：清理后重同步。",
    level: "进阶",
    track: "官方 Learn",
    minutes: 12,
    official: [
      { title: "生命周期", url: "https://zh-hans.react.dev/learn/lifecycle-of-reactive-effects" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 不是简单 mount/unmount 类比。\\n\\n• 依赖变：清旧跑新。\\n\\n• 正确设计订阅。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "el1",
            question: "roomId 变化？",
            options: ["旧订阅残留", "清理后重订阅", "崩溃", "忽略"],
            answer: 1,
            explain: "清理。",
          }
        ],
      }
    ],
  },
  {
    slug: "separate-events-effects",
    title: "将事件从 Effect 中分开",
    summary: "事件逻辑 vs 响应依赖。",
    level: "进阶",
    track: "官方 Learn",
    minutes: 10,
    official: [
      { title: "将事件从 Effect 分开", url: "https://zh-hans.react.dev/learn/separating-events-from-effects" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 事件不应无故进依赖。\\n\\n• 现代用 useEffectEvent。\\n\\n• 区分反应依赖与读取最新值。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "see1",
            question: "与 useEffectEvent？",
            options: ["无关", "同一问题的 API 解法", "取代 useState", "CSS"],
            answer: 1,
            explain: "分离事件。",
          }
        ],
      }
    ],
  },
  {
    slug: "remove-effect-deps",
    title: "移除 Effect 依赖",
    summary: "合法减少依赖，不骗 lint。",
    level: "进阶",
    track: "官方 Learn",
    minutes: 12,
    official: [
      { title: "移除 Effect 依赖", url: "https://zh-hans.react.dev/learn/removing-effect-dependencies" },
      { title: "exhaustive-deps", url: "https://zh-hans.react.dev/reference/eslint-plugin-react-hooks/lints/exhaustive-deps" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 勿乱删依赖。\\n\\n• 下移函数、拆 Effect、事件分离。\\n\\n• 目标是正确性。`,
      },
      {
        type: "tip",
        body: `配合 eslint exhaustive-deps。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "red1",
            question: "乱删依赖？",
            options: ["最佳实践", "易陈旧闭包", "加速 10 倍", "官方推荐"],
            answer: 1,
            explain: "闭包过期。",
          }
        ],
      }
    ],
  },
  {
    slug: "custom-hooks-official",
    title: "使用自定义 Hook 复用逻辑",
    summary: "共享逻辑不共享 state 实例。",
    level: "进阶",
    track: "官方 Learn",
    minutes: 10,
    official: [
      { title: "自定义 Hook", url: "https://zh-hans.react.dev/learn/reusing-logic-with-custom-hooks" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• useX 命名。\\n\\n• 共享逻辑非 UI。\\n\\n• 每调用独立 state。`,
      },
      {
        type: "code",
        title: "自定义 Hook",
        lang: "tsx",
        code: `function useOnlineStatus() {
  const [online, setOnline] = useState(true)
  useEffect(() => { /* subscribe */ }, [])
  return online
}`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "cho1",
            question: "两组件同 hook？",
            options: ["共享同一 state", "各自独立 state", "报错", "必须 memo"],
            answer: 1,
            explain: "独立。",
          }
        ],
      }
    ],
  },
  {
    slug: "compiler-intro",
    title: "React Compiler 介绍",
    summary: "自动记忆化动机与能力边界。",
    level: "进阶",
    track: "官方 Learn",
    minutes: 8,
    official: [
      { title: "介绍", url: "https://zh-hans.react.dev/learn/react-compiler/introduction" },
      { title: "Compiler", url: "https://zh-hans.react.dev/learn/react-compiler" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 构建期优化重渲染。\\n\\n• 仍需组件纯粹。\\n\\n• 减少手写 memo。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "ci1",
            question: "Compiler 做什么？",
            options: ["写数据库", "自动记忆化", "替代路由", "生成 CSS"],
            answer: 1,
            explain: "优化。",
          }
        ],
      }
    ],
  },
  {
    slug: "compiler-install",
    title: "React Compiler 安装",
    summary: "babel/插件接入。",
    level: "进阶",
    track: "官方 Learn",
    minutes: 6,
    official: [
      { title: "安装", url: "https://zh-hans.react.dev/learn/react-compiler/installation" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 按官方安装步骤接入构建。\\n\\n• Next 等框架有集成说明。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "cins1",
            question: "Compiler 运行时机？",
            options: ["仅浏览器运行时手写", "构建期", "DNS", "仅测试"],
            answer: 1,
            explain: "编译期。",
          }
        ],
      }
    ],
  },
  {
    slug: "compiler-incremental",
    title: "Compiler 逐步采用",
    summary: "门控与增量开启。",
    level: "进阶",
    track: "官方 Learn",
    minutes: 8,
    official: [
      { title: "逐步使用", url: "https://zh-hans.react.dev/learn/react-compiler/incremental-adoption" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 可 gating 渐进。\\n\\n• 先目录后全量。\\n\\n• 观察兼容性。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "cinc1",
            question: "推荐策略？",
            options: ["无监控全开永远", "增量/门控", "删掉 hooks", "禁用 TS"],
            answer: 1,
            explain: "渐进。",
          }
        ],
      }
    ],
  },
  {
    slug: "compiler-debug",
    title: "Compiler 调试",
    summary: "排除不兼容模式。",
    level: "进阶",
    track: "官方 Learn",
    minutes: 6,
    official: [
      { title: "调试", url: "https://zh-hans.react.dev/learn/react-compiler/debugging" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 查看编译失败原因。\\n\\n• 不纯组件需先修好。`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "cdb1",
            question: "编译异常优先查？",
            options: ["DNS", "不纯/不兼容模式", "改端口", "关 ESLint"],
            answer: 1,
            explain: "纯度。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-use-debug-value",
    title: "useDebugValue",
    summary: "自定义 Hook 的 DevTools 标签。",
    level: "进阶",
    track: "API 参考",
    minutes: 5,
    official: [
      { title: "useDebugValue", url: "https://zh-hans.react.dev/reference/react/useDebugValue" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 开发工具展示。\\n\\n• 可延迟格式化。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react/useDebugValue`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-use-debu",
            question: "useDebugValue 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-use-imperative-handle",
    title: "useImperativeHandle",
    summary: "定制 ref 句柄。",
    level: "进阶",
    track: "API 参考",
    minutes: 8,
    official: [
      { title: "useImperativeHandle", url: "https://zh-hans.react.dev/reference/react/useImperativeHandle" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 配合 forwardRef。\\n\\n• 只暴露必要方法。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react/useImperativeHandle`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-use-impe",
            question: "useImperativeHandle 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-use-layout-effect",
    title: "useLayoutEffect",
    summary: "绘制前同步 DOM 读改。",
    level: "进阶",
    track: "API 参考",
    minutes: 8,
    official: [
      { title: "useLayoutEffect", url: "https://zh-hans.react.dev/reference/react/useLayoutEffect" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 测布局防闪烁。\\n\\n• 多数情况 useEffect。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react/useLayoutEffect`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-use-layo",
            question: "useLayoutEffect 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-use-insertion-effect",
    title: "useInsertionEffect",
    summary: "CSS-in-JS 插样式。",
    level: "进阶",
    track: "API 参考",
    minutes: 5,
    official: [
      { title: "useInsertionEffect", url: "https://zh-hans.react.dev/reference/react/useInsertionEffect" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 布局 effect 前。\\n\\n• 应用代码少用。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react/useInsertionEffect`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-use-inse",
            question: "useInsertionEffect 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-use-sync-external-store",
    title: "useSyncExternalStore",
    summary: "订阅外部 store。",
    level: "进阶",
    track: "API 参考",
    minutes: 10,
    official: [
      { title: "useSyncExternalStore", url: "https://zh-hans.react.dev/reference/react/useSyncExternalStore" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 并发安全。\\n\\n• 状态库底层常用。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react/useSyncExternalStore`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-use-sync",
            question: "useSyncExternalStore 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-use-hook",
    title: "use API",
    summary: "读 Promise/Context。",
    level: "进阶",
    track: "API 参考",
    minutes: 10,
    official: [
      { title: "use API", url: "https://zh-hans.react.dev/reference/react/use" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 可条件调用。\\n\\n• 与 Suspense 集成。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react/use`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-use-hook",
            question: "use API 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-fragment",
    title: "Fragment",
    summary: "无 DOM 包裹多节点。",
    level: "入门",
    track: "API 参考",
    minutes: 5,
    official: [
      { title: "Fragment", url: "https://zh-hans.react.dev/reference/react/Fragment" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• <>...</>。\\n\\n• 需 key 用 Fragment。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react/Fragment`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-fragment",
            question: "Fragment 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-strict-mode",
    title: "StrictMode",
    summary: "开发期暴露不纯。",
    level: "入门",
    track: "API 参考",
    minutes: 6,
    official: [
      { title: "StrictMode", url: "https://zh-hans.react.dev/reference/react/StrictMode" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 无 UI。\\n\\n• 双调用渲染。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react/StrictMode`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-strict-m",
            question: "StrictMode 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-profiler",
    title: "Profiler",
    summary: "测量渲染。",
    level: "进阶",
    track: "API 参考",
    minutes: 6,
    official: [
      { title: "Profiler", url: "https://zh-hans.react.dev/reference/react/Profiler" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• onRender 回调。\\n\\n• 或 DevTools。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react/Profiler`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-profiler",
            question: "Profiler 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-activity",
    title: "Activity",
    summary: "活动/隐藏子树（新）。",
    level: "进阶",
    track: "API 参考",
    minutes: 8,
    official: [
      { title: "Activity", url: "https://zh-hans.react.dev/reference/react/Activity" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 保活与隐藏模式。\\n\\n• 复杂导航场景。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react/Activity`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-activity",
            question: "Activity 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-view-transition",
    title: "ViewTransition",
    summary: "视图过渡动画边界。",
    level: "进阶",
    track: "API 参考",
    minutes: 8,
    official: [
      { title: "ViewTransition", url: "https://zh-hans.react.dev/reference/react/ViewTransition" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 声明式过渡。\\n\\n• 渐进增强。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react/ViewTransition`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-view-tra",
            question: "ViewTransition 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-start-transition",
    title: "startTransition",
    summary: "非紧急更新。",
    level: "进阶",
    track: "API 参考",
    minutes: 8,
    official: [
      { title: "startTransition", url: "https://zh-hans.react.dev/reference/react/startTransition" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 与 useTransition 同族。\\n\\n• 保输入流畅。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react/startTransition`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-start-tr",
            question: "startTransition 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-lazy",
    title: "lazy",
    summary: "懒加载组件。",
    level: "进阶",
    track: "API 参考",
    minutes: 8,
    official: [
      { title: "lazy", url: "https://zh-hans.react.dev/reference/react/lazy" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 配 Suspense。\\n\\n• 代码分割。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react/lazy`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-lazy",
            question: "lazy 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-memo-ref",
    title: "memo",
    summary: "props 浅比较跳过渲染。",
    level: "进阶",
    track: "API 参考",
    minutes: 8,
    official: [
      { title: "memo", url: "https://zh-hans.react.dev/reference/react/memo" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 纯展示列表项常用。\\n\\n• Compiler 可能减少手写。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react/memo`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-memo-ref",
            question: "memo 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-cache",
    title: "cache (React)",
    summary: "服务端缓存函数。",
    level: "进阶",
    track: "API 参考",
    minutes: 8,
    official: [
      { title: "cache (React)", url: "https://zh-hans.react.dev/reference/react/cache" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• RSC 去重请求。\\n\\n• 不同于 Next fetch 配置。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react/cache`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-cache",
            question: "cache (React) 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-create-context",
    title: "createContext",
    summary: "创建 Context。",
    level: "入门",
    track: "API 参考",
    minutes: 6,
    official: [
      { title: "createContext", url: "https://zh-hans.react.dev/reference/react/createContext" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• Provider value。\\n\\n• useContext/use 读取。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react/createContext`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-create-c",
            question: "createContext 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-use-form-status",
    title: "useFormStatus",
    summary: "父 form pending。",
    level: "进阶",
    track: "API 参考",
    minutes: 8,
    official: [
      { title: "useFormStatus", url: "https://zh-hans.react.dev/reference/react-dom/hooks/useFormStatus" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 在子组件调用。\\n\\n• 配 Server Actions。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react-dom/hooks/useFormStatus`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-use-form",
            question: "useFormStatus 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-create-portal-ref",
    title: "createPortal 参考",
    summary: "传送到外部 DOM。",
    level: "进阶",
    track: "API 参考",
    minutes: 6,
    official: [
      { title: "createPortal 参考", url: "https://zh-hans.react.dev/reference/react-dom/createPortal" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• Modal 到 body。\\n\\n• 事件仍走 React 树。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react-dom/createPortal`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-create-p",
            question: "createPortal 参考 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-server-functions",
    title: "Server Functions",
    summary: "'use server' 可调用服务端。",
    level: "进阶",
    track: "API 参考",
    minutes: 10,
    official: [
      { title: "Server Functions", url: "https://zh-hans.react.dev/reference/rsc/server-functions" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 客户端可调。\\n\\n• 须鉴权与校验。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/rsc/server-functions`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-server-f",
            question: "Server Functions 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-use-client-directive",
    title: "'use client' 指令",
    summary: "客户端边界。",
    level: "进阶",
    track: "API 参考",
    minutes: 8,
    official: [
      { title: "'use client' 指令", url: "https://zh-hans.react.dev/reference/rsc/use-client" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 文件顶层。\\n\\n• 导入链客户端化。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/rsc/use-client`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-use-clie",
            question: "'use client' 指令 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-use-server-directive",
    title: "'use server' 指令",
    summary: "服务端函数标记。",
    level: "进阶",
    track: "API 参考",
    minutes: 8,
    official: [
      { title: "'use server' 指令", url: "https://zh-hans.react.dev/reference/rsc/use-server" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 文件或函数级。\\n\\n• 防未授权调用。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/rsc/use-server`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-use-serv",
            question: "'use server' 指令 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-react-rules",
    title: "React 规则总览",
    summary: "纯粹与 Hooks 规则。",
    level: "入门",
    track: "API 参考",
    minutes: 8,
    official: [
      { title: "React 规则总览", url: "https://zh-hans.react.dev/reference/rules" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 组件/Hook 须纯。\\n\\n• React 调用你。\\n\\n• Hook 顶层。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/rules`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-react-ru",
            question: "React 规则总览 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-legacy",
    title: "过时 API 一览",
    summary: "Class 与 Children 等。",
    level: "进阶",
    track: "API 参考",
    minutes: 8,
    official: [
      { title: "过时 API 一览", url: "https://zh-hans.react.dev/reference/react/legacy" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 新代码用函数组件。\\n\\n• 维护老代码查阅。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react/legacy`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-legacy",
            question: "过时 API 一览 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-forward-ref",
    title: "forwardRef",
    summary: "传递 ref。",
    level: "进阶",
    track: "API 参考",
    minutes: 8,
    official: [
      { title: "forwardRef", url: "https://zh-hans.react.dev/reference/react/forwardRef" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 库常见。\\n\\n• 配 useImperativeHandle。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react/forwardRef`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-forward-",
            question: "forwardRef 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-act",
    title: "act 测试工具",
    summary: "测试中刷更新。",
    level: "进阶",
    track: "API 参考",
    minutes: 6,
    official: [
      { title: "act 测试工具", url: "https://zh-hans.react.dev/reference/react/act" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• RTL 已封装。\\n\\n• 断言前更新完成。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react/act`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-act",
            question: "act 测试工具 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-form-component",
    title: "React DOM <form>",
    summary: "表单与 Action。",
    level: "进阶",
    track: "API 参考",
    minutes: 8,
    official: [
      { title: "React DOM <form>", url: "https://zh-hans.react.dev/reference/react-dom/components/form" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• action 可接 Server Function。\\n\\n• 渐进增强。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/react-dom/components/form`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-form-com",
            question: "React DOM <form> 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "api-devtools-perf",
    title: "React Performance tracks",
    summary: "性能轨道参考。",
    level: "进阶",
    track: "API 参考",
    minutes: 5,
    official: [
      { title: "React Performance tracks", url: "https://zh-hans.react.dev/reference/dev-tools/react-performance-tracks" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• DevTools 性能能力。\\n\\n• 配合 Profiler。`,
      },
      {
        type: "tip",
        body: `官方原文：https://zh-hans.react.dev/reference/dev-tools/react-performance-tracks`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "api-devtools",
            question: "React Performance tracks 属于？",
            options: ["官方 API/参考能力", "仅 Vue", "删除 React", "操作系统调用"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-install",
    title: "Next.js 安装",
    summary: "create-next-app、TS、ESLint。",
    level: "入门",
    track: "Next 指南",
    minutes: 8,
    official: [
      { title: "Next.js 安装", url: "https://nextjs.org/docs/app/getting-started/installation" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 初始化项目。\\n\\n• App Router 默认。\\n\\n• 路径别名。`,
      },
      {
        type: "code",
        title: "示例",
        lang: "tsx",
        code: `// npx create-next-app@latest`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/getting-started/installation`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-install",
            question: "本课主题？",
            options: ["Next.js 安装", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-project-structure",
    title: "项目结构",
    summary: "app/ public/ 约定文件。",
    level: "入门",
    track: "Next 指南",
    minutes: 10,
    official: [
      { title: "项目结构", url: "https://nextjs.org/docs/app/getting-started/project-structure" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• app 即路由。\\n\\n• layout/page/loading/error/route。\\n\\n• public 静态资源。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/getting-started/project-structure`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-project",
            question: "本课主题？",
            options: ["项目结构", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-css",
    title: "CSS 方案",
    summary: "Tailwind、Modules、全局 CSS。",
    level: "入门",
    track: "Next 指南",
    minutes: 8,
    official: [
      { title: "CSS 方案", url: "https://nextjs.org/docs/app/getting-started/css" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 官方友好 Tailwind。\\n\\n• Modules 局部作用域。\\n\\n• 全局样式进根 layout。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/getting-started/css`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-css",
            question: "本课主题？",
            options: ["CSS 方案", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-proxy",
    title: "Proxy",
    summary: "请求改写/重定向/鉴权边界。",
    level: "进阶",
    track: "Next 指南",
    minutes: 10,
    official: [
      { title: "Proxy", url: "https://nextjs.org/docs/app/getting-started/proxy" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 请求层拦截。\\n\\n• i18n/鉴权/A-B。\\n\\n• 见当前版本文档。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/getting-started/proxy`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-proxy",
            question: "本课主题？",
            options: ["Proxy", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-deploying",
    title: "部署 Next.js",
    summary: "平台与构建。",
    level: "入门",
    track: "Next 指南",
    minutes: 8,
    official: [
      { title: "部署 Next.js", url: "https://nextjs.org/docs/app/getting-started/deploying" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• Vercel 或自托管。\\n\\n• 环境变量。\\n\\n• Pages 可用静态导出。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/getting-started/deploying`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-deployi",
            question: "本课主题？",
            options: ["部署 Next.js", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-upgrading",
    title: "升级 Next.js",
    summary: "版本与 codemod。",
    level: "进阶",
    track: "Next 指南",
    minutes: 6,
    official: [
      { title: "升级 Next.js", url: "https://nextjs.org/docs/app/getting-started/upgrading" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 跟 upgrading 指南。\\n\\n• 读 breaking changes。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/getting-started/upgrading`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-upgradi",
            question: "本课主题？",
            options: ["升级 Next.js", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-auth-guide",
    title: "Authentication 指南",
    summary: "会话与保护路由。",
    level: "进阶",
    track: "Next 指南",
    minutes: 12,
    official: [
      { title: "Authentication 指南", url: "https://nextjs.org/docs/app/guides/authentication" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• Server 读 session。\\n\\n• 保护 Actions/Handlers。\\n\\n• 可配 Auth.js。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/authentication`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-auth-gu",
            question: "本课主题？",
            options: ["Authentication 指南", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-env",
    title: "环境变量",
    summary: "NEXT_PUBLIC_ 与私密变量。",
    level: "入门",
    track: "Next 指南",
    minutes: 8,
    official: [
      { title: "环境变量", url: "https://nextjs.org/docs/app/guides/environment-variables" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• .env.local。\\n\\n• PUBLIC 才进浏览器。\\n\\n• 生产平台配置。`,
      },
      {
        type: "code",
        title: "示例",
        lang: "tsx",
        code: `process.env.DATABASE_URL
process.env.NEXT_PUBLIC_APP_URL`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/environment-variables`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-env",
            question: "本课主题？",
            options: ["环境变量", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-forms-guide",
    title: "Forms 指南",
    summary: "Server Actions 表单。",
    level: "进阶",
    track: "Next 指南",
    minutes: 10,
    official: [
      { title: "Forms 指南", url: "https://nextjs.org/docs/app/guides/forms" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• action={serverFn}。\\n\\n• useFormStatus。\\n\\n• 渐进增强。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/forms`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-forms-g",
            question: "本课主题？",
            options: ["Forms 指南", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-isr",
    title: "ISR",
    summary: "增量静态再生。",
    level: "进阶",
    track: "Next 指南",
    minutes: 10,
    official: [
      { title: "ISR", url: "https://nextjs.org/docs/app/guides/incremental-static-regeneration" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 时间/按需 revalidate。\\n\\n• 内容站友好。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/incremental-static-regeneration`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-isr",
            question: "本课主题？",
            options: ["ISR", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-streaming-guide",
    title: "Streaming 指南",
    summary: "Suspense 流式。",
    level: "进阶",
    track: "Next 指南",
    minutes: 10,
    official: [
      { title: "Streaming 指南", url: "https://nextjs.org/docs/app/guides/streaming" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 外壳先到。\\n\\n• loading.tsx。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/streaming`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-streami",
            question: "本课主题？",
            options: ["Streaming 指南", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-static-exports",
    title: "静态导出",
    summary: "output export。",
    level: "进阶",
    track: "Next 指南",
    minutes: 10,
    official: [
      { title: "静态导出", url: "https://nextjs.org/docs/app/guides/static-exports" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 适合 GitHub Pages。\\n\\n• 无 Node 特性限制。\\n\\n• 本站 build:pages。`,
      },
      {
        type: "code",
        title: "示例",
        lang: "tsx",
        code: `output: 'export'`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/static-exports`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-static-",
            question: "本课主题？",
            options: ["静态导出", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-i18n",
    title: "国际化 i18n",
    summary: "多语言路由。",
    level: "进阶",
    track: "Next 指南",
    minutes: 10,
    official: [
      { title: "国际化 i18n", url: "https://nextjs.org/docs/app/guides/internationalization" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 前缀/域名。\\n\\n• 字典内容。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/internationalization`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-i18n",
            question: "本课主题？",
            options: ["国际化 i18n", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-data-security",
    title: "数据安全",
    summary: "防泄漏与校验。",
    level: "进阶",
    track: "Next 指南",
    minutes: 10,
    official: [
      { title: "数据安全", url: "https://nextjs.org/docs/app/guides/data-security" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 密钥仅服务端。\\n\\n• 校验输入。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/data-security`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-data-se",
            question: "本课主题？",
            options: ["数据安全", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-redirects",
    title: "重定向",
    summary: "redirect API。",
    level: "入门",
    track: "Next 指南",
    minutes: 6,
    official: [
      { title: "重定向", url: "https://nextjs.org/docs/app/guides/redirecting" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• Server/Action 调用。\\n\\n• 与 next.config 互补。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/redirecting`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-redirec",
            question: "本课主题？",
            options: ["重定向", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-production",
    title: "生产清单",
    summary: "production checklist。",
    level: "进阶",
    track: "Next 指南",
    minutes: 10,
    official: [
      { title: "生产清单", url: "https://nextjs.org/docs/app/guides/production-checklist" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 性能安全 SEO。\\n\\n• 上线打勾。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/production-checklist`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-product",
            question: "本课主题？",
            options: ["生产清单", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-prefetching",
    title: "预取 Prefetching",
    summary: "Link 预取。",
    level: "进阶",
    track: "Next 指南",
    minutes: 8,
    official: [
      { title: "预取 Prefetching", url: "https://nextjs.org/docs/app/guides/prefetching" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 视口预取。\\n\\n• 可控策略。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/prefetching`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-prefetc",
            question: "本课主题？",
            options: ["预取 Prefetching", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-lazy-loading",
    title: "懒加载",
    summary: "dynamic import。",
    level: "进阶",
    track: "Next 指南",
    minutes: 8,
    official: [
      { title: "懒加载", url: "https://nextjs.org/docs/app/guides/lazy-loading" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 减首包。\\n\\n• ssr:false 选项。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/lazy-loading`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-lazy-lo",
            question: "本课主题？",
            options: ["懒加载", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-scripts",
    title: "Scripts",
    summary: "next/script。",
    level: "进阶",
    track: "Next 指南",
    minutes: 6,
    official: [
      { title: "Scripts", url: "https://nextjs.org/docs/app/guides/scripts" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 加载策略。\\n\\n• 第三方脚本。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/scripts`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-scripts",
            question: "本课主题？",
            options: ["Scripts", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-self-hosting",
    title: "自托管",
    summary: "Node/Docker。",
    level: "进阶",
    track: "Next 指南",
    minutes: 8,
    official: [
      { title: "自托管", url: "https://nextjs.org/docs/app/guides/self-hosting" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• standalone。\\n\\n• 自管缓存 CDN。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/self-hosting`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-self-ho",
            question: "本课主题？",
            options: ["自托管", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-spa-guide",
    title: "SPA 模式指南",
    summary: "高交互 App Router。",
    level: "进阶",
    track: "Next 指南",
    minutes: 8,
    official: [
      { title: "SPA 模式指南", url: "https://nextjs.org/docs/app/guides/single-page-applications" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• Client 为主。\\n\\n• 可混 Server 壳。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/single-page-applications`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-spa-gui",
            question: "本课主题？",
            options: ["SPA 模式指南", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-mdx",
    title: "MDX",
    summary: "组件化 Markdown。",
    level: "进阶",
    track: "Next 指南",
    minutes: 8,
    official: [
      { title: "MDX", url: "https://nextjs.org/docs/app/guides/mdx" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 文档/博客。\\n\\n• 嵌 React 组件。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/mdx`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-mdx",
            question: "本课主题？",
            options: ["MDX", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-backend-ff",
    title: "Backend for Frontend",
    summary: "BFF 聚合。",
    level: "进阶",
    track: "Next 指南",
    minutes: 10,
    official: [
      { title: "Backend for Frontend", url: "https://nextjs.org/docs/app/guides/backend-for-frontend" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• Route Handlers。\\n\\n• 隐藏多服务。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/backend-for-frontend`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-backend",
            question: "本课主题？",
            options: ["Backend for Frontend", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-debugging",
    title: "调试",
    summary: "VS Code 与 overlay。",
    level: "入门",
    track: "Next 指南",
    minutes: 6,
    official: [
      { title: "调试", url: "https://nextjs.org/docs/app/guides/debugging" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• server/client 日志。\\n\\n• DevTools。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/debugging`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-debuggi",
            question: "本课主题？",
            options: ["调试", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-csp",
    title: "CSP 内容安全策略",
    summary: "安全头。",
    level: "进阶",
    track: "Next 指南",
    minutes: 8,
    official: [
      { title: "CSP 内容安全策略", url: "https://nextjs.org/docs/app/guides/content-security-policy" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 防 XSS。\\n\\n• nonce。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/content-security-policy`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-csp",
            question: "本课主题？",
            options: ["CSP 内容安全策略", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-json-ld",
    title: "JSON-LD",
    summary: "结构化数据。",
    level: "进阶",
    track: "Next 指南",
    minutes: 6,
    official: [
      { title: "JSON-LD", url: "https://nextjs.org/docs/app/guides/json-ld" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• ld+json。\\n\\n• SEO/AI。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/json-ld`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-json-ld",
            question: "本课主题？",
            options: ["JSON-LD", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-draft-mode",
    title: "Draft Mode",
    summary: "CMS 草稿预览。",
    level: "进阶",
    track: "Next 指南",
    minutes: 6,
    official: [
      { title: "Draft Mode", url: "https://nextjs.org/docs/app/guides/draft-mode" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 绕过静态缓存。\\n\\n• 编辑流。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/draft-mode`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-draft-m",
            question: "本课主题？",
            options: ["Draft Mode", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-ci-cache",
    title: "CI 构建缓存",
    summary: "加速 build。",
    level: "进阶",
    track: "Next 指南",
    minutes: 5,
    official: [
      { title: "CI 构建缓存", url: "https://nextjs.org/docs/app/guides/ci-build-caching" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 缓存 .next/cache。\\n\\n• Actions 配置。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/ci-build-caching`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-ci-cach",
            question: "本课主题？",
            options: ["CI 构建缓存", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-package-bundling",
    title: "包打包优化",
    summary: "分析包体。",
    level: "进阶",
    track: "Next 指南",
    minutes: 8,
    official: [
      { title: "包打包优化", url: "https://nextjs.org/docs/app/guides/package-bundling" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• analyzer。\\n\\n• 避免坏 barrel。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/package-bundling`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-package",
            question: "本课主题？",
            options: ["包打包优化", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-rendering-philosophy",
    title: "渲染哲学",
    summary: "服务器优先。",
    level: "进阶",
    track: "Next 指南",
    minutes: 8,
    official: [
      { title: "渲染哲学", url: "https://nextjs.org/docs/app/guides/rendering-philosophy" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 默认 Server。\\n\\n• 交互下沉 Client。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/rendering-philosophy`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-renderi",
            question: "本课主题？",
            options: ["渲染哲学", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-server-actions-guide",
    title: "Server Actions 指南",
    summary: "表单与变更深入。",
    level: "进阶",
    track: "Next 指南",
    minutes: 10,
    official: [
      { title: "Server Actions 指南", url: "https://nextjs.org/docs/app/guides/server-actions" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 'use server'。\\n\\n• revalidate。\\n\\n• 安全校验。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/server-actions`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-server-",
            question: "本课主题？",
            options: ["Server Actions 指南", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-instant-nav",
    title: "Instant navigation",
    summary: "更即点即开的导航。",
    level: "进阶",
    track: "Next 指南",
    minutes: 8,
    official: [
      { title: "Instant navigation", url: "https://nextjs.org/docs/app/guides/instant-navigation" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 预取与预渲染策略。\\n\\n• 16.x 演进能力。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/instant-navigation`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-instant",
            question: "本课主题？",
            options: ["Instant navigation", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-preserving-ui",
    title: "Preserving UI state",
    summary: "导航保留 UI 状态。",
    level: "进阶",
    track: "Next 指南",
    minutes: 8,
    official: [
      { title: "Preserving UI state", url: "https://nextjs.org/docs/app/guides/preserving-ui-state" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 布局保活。\\n\\n• 避免丢失输入。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/preserving-ui-state`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-preserv",
            question: "本课主题？",
            options: ["Preserving UI state", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-open-telemetry",
    title: "OpenTelemetry",
    summary: "可观测性。",
    level: "进阶",
    track: "Next 指南",
    minutes: 6,
    official: [
      { title: "OpenTelemetry", url: "https://nextjs.org/docs/app/guides/open-telemetry" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 链路追踪。\\n\\n• 生产监控。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/open-telemetry`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-open-te",
            question: "本课主题？",
            options: ["OpenTelemetry", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-analytics",
    title: "Analytics",
    summary: "Speed Insights 等。",
    level: "入门",
    track: "Next 指南",
    minutes: 5,
    official: [
      { title: "Analytics", url: "https://nextjs.org/docs/app/guides/analytics" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 性能指标。\\n\\n• 真实用户监控。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/analytics`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-analyti",
            question: "本课主题？",
            options: ["Analytics", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-local-dev",
    title: "本地开发环境",
    summary: "加快 dev 体验。",
    level: "入门",
    track: "Next 指南",
    minutes: 6,
    official: [
      { title: "本地开发环境", url: "https://nextjs.org/docs/app/guides/local-development" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• Turbopack 等。\\n\\n• 环境优化。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/local-development`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-local-d",
            question: "本课主题？",
            options: ["本地开发环境", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-mcp",
    title: "Next.js MCP Server",
    summary: "Agent 访问应用状态。",
    level: "进阶",
    track: "Next 指南",
    minutes: 6,
    official: [
      { title: "Next.js MCP Server", url: "https://nextjs.org/docs/app/guides/mcp" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• AI 编码代理集成。\\n\\n• 配合 llms.txt。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/mcp`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-mcp",
            question: "本课主题？",
            options: ["Next.js MCP Server", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-migrating",
    title: "迁移到 Next.js",
    summary: "从 CRA/Vite 等迁移。",
    level: "进阶",
    track: "Next 指南",
    minutes: 10,
    official: [
      { title: "迁移到 Next.js", url: "https://nextjs.org/docs/app/guides/migrating" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 官方 migrating 指南。\\n\\n• 路由与数据层映射。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/migrating`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-migrati",
            question: "本课主题？",
            options: ["迁移到 Next.js", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-pwa",
    title: "PWA",
    summary: "可安装与离线。",
    level: "进阶",
    track: "Next 指南",
    minutes: 8,
    official: [
      { title: "PWA", url: "https://nextjs.org/docs/app/guides/progressive-web-apps" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• Service Worker 策略。\\n\\n• 渐进增强。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/progressive-web-apps`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-pwa",
            question: "本课主题？",
            options: ["PWA", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-sass",
    title: "Sass",
    summary: "Sass 集成。",
    level: "入门",
    track: "Next 指南",
    minutes: 5,
    official: [
      { title: "Sass", url: "https://nextjs.org/docs/app/guides/sass" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 内置支持。\\n\\n• 模块化样式。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/sass`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-sass",
            question: "本课主题？",
            options: ["Sass", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  },
  {
    slug: "next-public-static",
    title: "Public 静态页",
    summary: "纯静态公开页策略。",
    level: "进阶",
    track: "Next 指南",
    minutes: 6,
    official: [
      { title: "Public 静态页", url: "https://nextjs.org/docs/app/guides/public-static-pages" },
    ],
    blocks: [
      {
        type: "text",
        title: "要点（对齐官方）",
        body: `• 营销页。\\n\\n• 缓存友好。`,
      },
      {
        type: "tip",
        body: `官方文档：https://nextjs.org/docs/app/guides/public-static-pages`,
      },
      {
        type: "quiz",
        questions: [
          {
            id: "next-public-",
            question: "本课主题？",
            options: ["Public 静态页", "仅 Angular", "操作系统", "Photoshop"],
            answer: 0,
            explain: "见官方。",
          }
        ],
      }
    ],
  }
];
