import type { Lesson } from "@/data/lessons";
import { LESSONS, TRACKS } from "@/data/lessons";

export const TRACK_META: Record<
  Lesson["track"],
  { order: number; label: string; blurb: string }
> = {
  基础: { order: 1, label: "① 入门", blurb: "JSX · 组件 · 状态 · Effect" },
  进阶: { order: 2, label: "② 进阶", blurb: "Context · memo · 性能" },
  "现代 React": { order: 3, label: "③ 现代 React", blurb: "hooks · 并发 · 模式" },
  数据层: { order: 4, label: "④ 数据层", blurb: "fetch · cache · 状态" },
  全栈准备: { order: 5, label: "⑤ 全栈准备", blurb: "路由 · 环境 · 边界" },
  全栈实训: { order: 6, label: "⑥ 全栈实训", blurb: "API · 表单 · 鉴权" },
  工程化: { order: 7, label: "⑦ 工程化", blurb: "构建 · 测试 · 规范" },
  进阶模式: { order: 8, label: "⑧ 进阶模式", blurb: "架构与模式" },
  "Next.js": { order: 9, label: "⑨ Next.js", blurb: "App Router · RSC" },
  "官方 Learn": { order: 10, label: "⑩ 官方 Learn", blurb: "react.dev Learn 路径" },
  "API 参考": { order: 11, label: "⑪ API 参考", blurb: "hooks · components 速查" },
  "Next 指南": { order: 12, label: "⑫ Next 指南", blurb: "官方 Guides 浓缩" },
  官方对齐: { order: 13, label: "⑬ 官方对齐", blurb: "llms 迁移补齐" },
};

export function trackLabel(track: string) {
  return (TRACK_META as Record<string, { label: string }>)[track]?.label ?? track;
}

export function orderedTracks(): Lesson["track"][] {
  return [...TRACKS].sort(
    (a, b) =>
      ((TRACK_META as Record<string, { order: number }>)[a]?.order ?? 99) -
      ((TRACK_META as Record<string, { order: number }>)[b]?.order ?? 99),
  );
}

export function getValidCompleted(completed: string[]): string[] {
  const set = new Set(LESSONS.map((l) => l.slug));
  return completed.filter((s) => set.has(s));
}

export function completedCount(completed: string[]): number {
  return getValidCompleted(completed).length;
}

export function progressPercent(completed: string[]): number {
  if (!LESSONS.length) return 0;
  return Math.round((completedCount(completed) / LESSONS.length) * 100);
}

export function isAllComplete(completed: string[]): boolean {
  return LESSONS.every((l) => completed.includes(l.slug));
}

export function getContinueLesson(completed: string[]) {
  return (
    LESSONS.find((l) => !completed.includes(l.slug)) ??
    LESSONS[LESSONS.length - 1]!
  );
}

export function isCertificateReady(mastered: string[], completed: string[]) {
  if (mastered.length > 0 && LESSONS.every((l) => mastered.includes(l.slug))) {
    return true;
  }
  return LESSONS.every((l) => completed.includes(l.slug));
}
