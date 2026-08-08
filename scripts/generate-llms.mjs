import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public");
const cache = path.join(root, "node_modules/.cache");
fs.mkdirSync(cache, { recursive: true });
fs.mkdirSync(outDir, { recursive: true });

const bundle = path.join(cache, "lessons-llms.mjs");
// bundle both files
execSync(
  `npx esbuild ${path.join(root, "data/lessons.ts")} --bundle --format=esm --platform=node --packages=external --outfile=${bundle}`,
  { stdio: "inherit", cwd: root },
);

// esbuild may not resolve relative .ts without extension - try with alias
let LESSONS;
try {
  ({ LESSONS } = await import(pathToFileURL(bundle).href + `?t=${Date.now()}`));
} catch (e) {
  // fallback: regex extract titles
  console.warn("bundle import failed, fallback parse", e.message);
  const src =
    fs.readFileSync(path.join(root, "data/lessons.ts"), "utf8") +
    "\n" +
    fs.readFileSync(path.join(root, "data/lessons-migrated.ts"), "utf8");
  const slugs = [...src.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]);
  const titles = [...src.matchAll(/title:\s*["']([^"']+)["']/g)].map((m) => m[1]);
  LESSONS = slugs.map((slug, i) => ({
    slug,
    title: titles[i] || slug,
    summary: "",
    level: "",
    minutes: 0,
    track: "其他",
    blocks: [],
  }));
}

const SITE = "https://xiaoqianran.github.io/learning-nextjs";

function blockMd(b) {
  if (!b || !b.type) return "";
  if (b.type === "text") {
    const head = b.title ? `### ${b.title}\n\n` : "";
    return `${head}${b.body || ""}\n`;
  }
  if (b.type === "tip") return `> **提示：** ${b.body || ""}\n`;
  if (b.type === "code") {
    const head = b.title ? `### ${b.title}\n\n` : "";
    return `${head}\`\`\`${b.lang || "tsx"}\n${b.code || ""}\n\`\`\`\n`;
  }
  if (b.type === "demo") {
    return `**交互 Demo：** ${b.title || ""}（kind: \`${b.kind}\`）\n`;
  }
  if (b.type === "quiz") {
    const lines = ["**测验：**"];
    for (const q of b.questions || []) {
      lines.push(`- Q: ${q.question}`);
      (q.options || []).forEach((o, i) => {
        lines.push(`  - [${i === q.answer ? "✓" : " "}] ${o}`);
      });
      lines.push(`  - 解析: ${q.explain}`);
    }
    return lines.join("\n") + "\n";
  }
  return "";
}

const byTrack = new Map();
for (const l of LESSONS) {
  const t = l.track || "其他";
  if (!byTrack.has(t)) byTrack.set(t, []);
  byTrack.get(t).push(l);
}

const index = [
  "# learning-nextjs",
  "",
  "> 交互式中文 React / Next.js 教程。",
  "> 权威以 [react.dev/llms.txt](https://react.dev/llms.txt) 与 [nextjs.org/docs/llms.txt](https://nextjs.org/docs/llms.txt) 为准。",
  "",
  `完整上下文：[${SITE}/llms-full.txt](${SITE}/llms-full.txt)`,
  "",
  "## 官方权威（务必优先）",
  "",
  "- [react.dev/llms.txt](https://react.dev/llms.txt)",
  "- [zh-hans.react.dev/llms.txt](https://zh-hans.react.dev/llms.txt)",
  "- [nextjs.org/llms.txt](https://nextjs.org/llms.txt)",
  "- [nextjs.org/docs/llms.txt](https://nextjs.org/docs/llms.txt)",
  "- [nextjs.org/docs/llms-full.txt](https://nextjs.org/docs/llms-full.txt)",
  "",
  "## 站点入口",
  "",
  `- [首页](${SITE}/)`,
  `- [文档地图](${SITE}/docs/)`,
  `- [官方中枢](${SITE}/official/)`,
  `- [工坊](${SITE}/studio/)`,
  `- [学习中心](${SITE}/hub/)`,
  `- [结业](${SITE}/certificate/)`,
  "",
];

for (const [tr, list] of byTrack) {
  index.push(`## 课程 · ${tr}`, "");
  for (const l of list) {
    index.push(
      `- [${l.title}](${SITE}/lesson/${l.slug}/): ${l.summary || ""}（${l.level || ""} · ${l.minutes || "?"} 分钟）`,
    );
  }
  index.push("");
}

const full = [
  "# learning-nextjs — full curriculum",
  "",
  `生成自本站 ${LESSONS.length} 课。语义以官方文档为准。`,
  "",
];

for (const l of LESSONS) {
  full.push(
    "---",
    "",
    `# ${l.title}`,
    "",
    `- slug: \`${l.slug}\``,
    `- track: ${l.track}`,
    `- level: ${l.level}`,
    `- minutes: ${l.minutes}`,
    "",
  );
  for (const b of l.blocks || []) full.push(blockMd(b), "");
}

fs.writeFileSync(path.join(outDir, "llms.txt"), index.join("\n"));
fs.writeFileSync(path.join(outDir, "llms-full.txt"), full.join("\n"));
console.log("lessons", LESSONS.length);
console.log("llms.txt", fs.statSync(path.join(outDir, "llms.txt")).size);
console.log("llms-full.txt", fs.statSync(path.join(outDir, "llms-full.txt")).size);
