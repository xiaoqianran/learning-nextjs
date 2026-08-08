"use client";

import Link from "next/link";
import { OFFICIAL_SECTIONS, LLM_INDEXES } from "@/data/official-map";
import { LESSONS } from "@/data/lessons";
import { ExternalLink, BookOpen, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function OfficialPage() {
  const aligned = LESSONS.filter((l) => l.official && l.official.length > 0);

  return (
    <div className="mx-auto max-w-3xl space-y-10 pb-16">
      <header className="rounded-xl border border-border bg-surface px-5 py-8 sm:px-8">
        <p className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg/60 px-2.5 py-1 text-xs font-medium text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          对齐官方 · llms.txt
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight">
          官方文档中枢
        </h1>
        <p className="mt-3 max-w-2xl text-muted leading-relaxed">
          我们深入阅读了{" "}
          <a
            className="text-primary underline-offset-2 hover:underline"
            href="https://zh-hans.react.dev/llms.txt"
            target="_blank"
            rel="noreferrer"
          >
            React llms.txt
          </a>{" "}
          与{" "}
          <a
            className="text-primary underline-offset-2 hover:underline"
            href="https://nextjs.org/docs/llms.txt"
            target="_blank"
            rel="noreferrer"
          >
            Next.js /docs/llms.txt
          </a>
          ，已按官方 llms.txt 迁移 React Learn 全路径、核心 API 参考、Next Getting Started 与主要 Guides。目标：目录覆盖对齐官网，交互/测验超出纯文档。
        </p>
      </header>

      <section>
        <h2 className="font-display text-lg font-semibold">LLM 索引（官方标准）</h2>
        <p className="mt-1 text-sm text-muted">
          与 nextjs.org 文档页声明一致：为 Agent / 人类提供纯文本目录。
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {LLM_INDEXES.map((item) => (
            <li key={item.url}>
              <a
                href={item.url}
                target={item.url.startsWith("http") ? "_blank" : undefined}
                rel={item.url.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-fg no-underline transition-colors hover:border-primary/40 hover:bg-surface-2"
              >
                <ExternalLink className="h-3.5 w-3.5 shrink-0 text-primary" />
                <span className="min-w-0 truncate">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {OFFICIAL_SECTIONS.map((sec) => (
        <section key={sec.source} className="space-y-4">
          <div>
            <h2 className="font-display text-lg font-semibold">{sec.title}</h2>
            <p className="mt-1 text-sm text-muted">{sec.description}</p>
            <a
              href={sec.indexUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-xs text-primary no-underline hover:underline"
            >
              完整 llms.txt 索引 <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <div className="space-y-4">
            {sec.groups.map((g) => (
              <div
                key={g.name}
                className="rounded-lg border border-border bg-surface p-4"
              >
                <h3 className="text-sm font-medium text-fg">{g.name}</h3>
                <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                  {g.links.map((l) => (
                    <li key={l.url}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-start gap-2 rounded-md px-2 py-1.5 text-sm text-muted no-underline hover:bg-surface-2 hover:text-fg"
                      >
                        <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-60 group-hover:text-primary" />
                        <span>
                          {l.title}
                          {l.note ? (
                            <span className="ml-1 text-[10px] text-subtle">
                              · {l.note}
                            </span>
                          ) : null}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section>
        <h2 className="flex items-center gap-2 font-display text-lg font-semibold">
          <BookOpen className="h-5 w-5 text-primary" />
          本站已对照课程（{aligned.length}）
        </h2>
        <p className="mt-1 text-sm text-muted">
          每课页底部可跳转官方原文；以下为带 official 字段的课程。
        </p>
        <ul className="mt-4 space-y-2">
          {aligned.map((l) => (
            <li key={l.slug}>
              <div className="rounded-lg border border-border bg-surface px-3 py-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    href={`/lesson/${l.slug}`}
                    className="text-sm font-medium text-fg no-underline hover:text-primary"
                  >
                    {l.title}
                  </Link>
                  <span
                    className={cn(
                      "rounded-full bg-surface-3 px-2 py-0.5 text-[10px] text-muted",
                    )}
                  >
                    {l.track}
                  </span>
                </div>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {l.official!.map((o) => (
                    <a
                      key={o.url}
                      href={o.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-primary no-underline hover:underline"
                    >
                      {o.title} ↗
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
