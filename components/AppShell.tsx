"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Check,
  Menu,
  X,
  FlaskConical,
  LayoutDashboard,
  BookX,
  Award,
  Code2,
  Server,
  BookMarked,
  Map as MapIcon,
  Keyboard,
  Library,
  ChevronDown,
  Search,
  ArrowRight,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { useProgress } from "@/store/progress";
import { LESSONS, getLessonsByTrack } from "@/data/lessons";
import { CommandPalette } from "@/components/CommandPalette";
import { CatppuccinSwitcher } from "@/components/CatppuccinSwitcher";
import {
  getContinueLesson,
  isAllComplete,
  orderedTracks,
  progressPercent,
  trackLabel,
} from "@/lib/nav";

const NAV_PRIMARY = [
  { href: "/docs", label: "文档", hint: "查 · 官方对照", icon: Library },
  { href: "/studio", label: "工坊", hint: "练 · 全栈闯关", icon: Server },
  { href: "/hub", label: "进度", hint: "我 · 学习中心", icon: LayoutDashboard },
] as const;

const NAV_TOOLS = [
  { href: "/official", label: "官方中枢", icon: Library },
  { href: "/cheatsheet", label: "速查表", icon: BookMarked },
  { href: "/playground", label: "沙箱", icon: Code2 },
  { href: "/roadmap", label: "路线图", icon: MapIcon },
  { href: "/lab", label: "练习场", icon: FlaskConical },
  { href: "/mistakes", label: "错题本", icon: BookX },
  { href: "/shortcuts", label: "快捷键", icon: Keyboard },
  { href: "/certificate", label: "结业", icon: Award },
] as const;

function navActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  // normalize trailing slash for next export
  const p = pathname.replace(/\/$/, "") || "/";
  const h = href.replace(/\/$/, "") || "/";
  return p === h || p.startsWith(h + "/");
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [q, setQ] = useState("");
  const completed = useProgress((s) => s.completed);
  const mastered = useProgress((s) => s.mastered);
  const streak = useProgress((s) => s.streak);
  const syncAchievements = useProgress((s) => s.syncAchievements);
  const progress = progressPercent(completed);

  const continueLesson = getContinueLesson(completed);
  const allDone = isAllComplete(completed);

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const result = useProgress.persist.rehydrate();
    Promise.resolve(result).then(() => {
      syncAchievements();
    });
  }, [syncAchievements]);

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  // auto-expand current track
  useEffect(() => {
    const slug = pathname.match(/\/lesson\/([^/]+)/)?.[1];
    if (!slug) return;
    const lesson = LESSONS.find((l) => l.slug === slug);
    if (lesson) {
      setExpanded((e) => ({ ...e, [lesson.track]: true }));
    }
  }, [pathname]);

  const tracks = orderedTracks();
  const filteredByTrack = useMemo(() => {
    const s = q.trim().toLowerCase();
    return tracks
      .map((tr) => {
        let list = getLessonsByTrack(tr);
        if (s) {
          list = list.filter(
            (l) =>
              l.title.toLowerCase().includes(s) ||
              l.summary.toLowerCase().includes(s) ||
              l.slug.includes(s),
          );
        }
        return { track: tr, lessons: list };
      })
      .filter((g) => g.lessons.length > 0);
  }, [q, tracks]);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4 sm:px-6">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-fg lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "关闭目录" : "打开目录"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link
            href="/"
            className="flex min-w-0 items-center gap-2.5 no-underline"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
              <BookOpen className="h-4 w-4" />
            </span>
            <span className="truncate font-display text-sm font-semibold tracking-tight text-fg">
              React / Next 实战
            </span>
            <span className="hidden rounded-full bg-surface-3 px-1.5 py-0.5 font-mono text-[10px] text-primary sm:inline">
              v8
            </span>
          </Link>

          <nav className="ml-2 hidden items-center gap-0.5 md:flex">
            {NAV_PRIMARY.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-2.5 py-1.5 text-xs font-medium text-muted no-underline transition-colors hover:bg-surface-2 hover:text-fg",
                  navActive(pathname, item.href) &&
                    "bg-primary-soft text-primary",
                )}
                title={item.hint}
              >
                {item.label}
              </Link>
            ))}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreOpen((v) => !v)}
                className={cn(
                  "inline-flex items-center gap-0.5 rounded-md px-2.5 py-1.5 text-xs text-muted hover:bg-surface-2 hover:text-fg",
                  moreOpen && "bg-surface-2 text-fg",
                )}
              >
                更多
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {moreOpen ? (
                <div className="absolute left-0 top-full z-50 mt-1 w-44 rounded-lg border border-border bg-surface py-1 shadow-soft">
                  {NAV_TOOLS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-2 px-3 py-2 text-xs text-muted no-underline hover:bg-surface-2 hover:text-fg",
                          navActive(pathname, item.href) &&
                            "bg-primary-soft text-primary",
                        )}
                      >
                        <Icon className="h-3.5 w-3.5 opacity-70" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </nav>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            {streak > 0 ? (
              <span className="hidden font-mono text-xs tabular-nums text-muted sm:inline">
                连续 {streak} 天
              </span>
            ) : null}
            <span className="hidden font-mono text-[10px] text-subtle xl:inline">
              Ctrl/⌘ K
            </span>
            <div className="hidden sm:block">
              <CatppuccinSwitcher />
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <div className="h-1.5 w-20 overflow-hidden rounded-full bg-surface-3">
                <div
                  className="h-full rounded-full bg-primary transition-[width] duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="font-mono text-xs tabular-nums text-muted">
                {progress}%
              </span>
            </div>
            {allDone ? (
              <Link
                href="/certificate"
                className="hidden items-center gap-1 rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-fg no-underline sm:inline-flex"
              >
                结业
                <Award className="h-3.5 w-3.5" />
              </Link>
            ) : (
              <Link
                href={`/lesson/${continueLesson.slug}`}
                className="hidden items-center gap-1 rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-fg no-underline sm:inline-flex"
              >
                继续
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-30 w-[min(18rem,88vw)] border-r border-border bg-surface pt-14 transition-transform duration-200 ease-out lg:static lg:z-0 lg:w-64 lg:shrink-0 lg:translate-x-0 lg:border-r lg:bg-transparent lg:pt-0",
            open ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <nav className="scrollbar-thin flex h-[calc(100dvh-3.5rem)] flex-col overflow-y-auto p-3 lg:sticky lg:top-14 lg:h-[calc(100dvh-3.5rem)] lg:py-6">
            <div className="mb-3 rounded-lg border border-border bg-surface-2/50 p-2.5">
              <p className="text-[10px] font-medium uppercase tracking-wider text-subtle">
                继续学习
              </p>
              {allDone ? (
                <Link
                  href="/certificate"
                  className="mt-1 flex items-center gap-1 text-sm font-medium text-primary no-underline"
                  onClick={() => setOpen(false)}
                >
                  已全部完成 · 看结业
                  <Award className="h-3.5 w-3.5" />
                </Link>
              ) : (
                <Link
                  href={`/lesson/${continueLesson.slug}`}
                  className="mt-1 block text-sm font-medium text-fg no-underline hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {continueLesson.title}
                </Link>
              )}
              <div className="mt-2 flex items-center gap-2">
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-surface-3">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="font-mono text-[10px] text-muted">
                  {completed.length}/{LESSONS.length}
                </span>
              </div>
            </div>

            <div className="relative mb-3">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-subtle" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="搜索课程…"
                className="h-9 w-full rounded-md border border-border bg-surface pl-8 pr-2 text-xs text-fg placeholder:text-subtle"
              />
            </div>

            <div className="mb-2 flex flex-wrap gap-1 md:hidden">
              {NAV_PRIMARY.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[11px] text-muted no-underline",
                    navActive(pathname, item.href)
                      ? "bg-primary-soft text-primary"
                      : "bg-surface-3",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <p className="mb-2 px-1 text-[10px] font-medium uppercase tracking-wider text-subtle">
              学习路径
            </p>
            <div className="flex flex-1 flex-col gap-1">
              {filteredByTrack.map(({ track, lessons }) => {
                const openTrack = expanded[track] ?? false;
                const doneN = lessons.filter((l) =>
                  completed.includes(l.slug),
                ).length;
                return (
                  <div key={track}>
                    <button
                      type="button"
                      onClick={() =>
                        setExpanded((e) => ({ ...e, [track]: !openTrack }))
                      }
                      className="flex w-full items-center gap-1 rounded-md px-2 py-1.5 text-left text-xs font-medium text-fg hover:bg-surface-2"
                    >
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 shrink-0 text-subtle transition-transform",
                          !openTrack && "-rotate-90",
                        )}
                      />
                      <span className="min-w-0 flex-1 truncate">
                        {trackLabel(track)}
                      </span>
                      <span className="font-mono text-[10px] text-subtle">
                        {doneN}/{lessons.length}
                      </span>
                    </button>
                    {openTrack ? (
                      <ul className="mb-1 ml-2 flex flex-col gap-0.5 border-l border-border pl-2">
                        {lessons.map((lesson) => {
                          const done = completed.includes(lesson.slug);
                          const m = mastered.includes(lesson.slug);
                          const active =
                            pathname.includes(`/lesson/${lesson.slug}`) ||
                            pathname.includes(`/lesson/${lesson.slug}/`);
                          return (
                            <li key={lesson.slug}>
                              <Link
                                href={`/lesson/${lesson.slug}`}
                                onClick={() => setOpen(false)}
                                className={cn(
                                  "flex items-start gap-2 rounded-md px-2 py-1.5 text-xs text-fg no-underline hover:bg-surface-2",
                                  active && "bg-primary-soft text-primary",
                                )}
                              >
                                <span
                                  className={cn(
                                    "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                                    m
                                      ? "bg-primary text-primary-fg"
                                      : done
                                        ? "bg-primary/40 text-primary"
                                        : "bg-surface-3 text-muted",
                                  )}
                                >
                                  {done || m ? (
                                    <Check className="h-2.5 w-2.5" />
                                  ) : null}
                                </span>
                                <span className="min-w-0 leading-snug">
                                  {lesson.title}
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 border-t border-border pt-3 sm:hidden">
              <CatppuccinSwitcher compact />
            </div>
          </nav>
        </aside>

        {open ? (
          <button
            type="button"
            className="fixed inset-0 z-20 bg-bg/60 lg:hidden"
            aria-label="关闭遮罩"
            onClick={() => setOpen(false)}
          />
        ) : null}

        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:py-8">
          {children}
        </main>
      </div>
      <CommandPalette />
    </div>
  );
}
