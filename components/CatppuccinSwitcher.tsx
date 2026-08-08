"use client";

import { useEffect, useState } from "react";
import {
  ACCENT_LABELS,
  applyCatppuccin,
  CTP_ACCENTS,
  CTP_FLAVORS,
  DEFAULT_CTP_ACCENT,
  DEFAULT_CTP_FLAVOR,
  FLAVOR_LABELS,
  readCtpAccent,
  readCtpFlavor,
  type CtpAccent,
  type CtpFlavor,
} from "@/lib/catppuccin";
import { cn } from "@/lib/utils";
import { Palette } from "lucide-react";

export function CatppuccinSwitcher({ compact }: { compact?: boolean }) {
  const [flavor, setFlavor] = useState<CtpFlavor>(DEFAULT_CTP_FLAVOR);
  const [accent, setAccent] = useState<CtpAccent>(DEFAULT_CTP_ACCENT);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const f = readCtpFlavor();
    const a = readCtpAccent();
    setFlavor(f);
    setAccent(a);
    applyCatppuccin(f, a);
  }, []);

  function pickFlavor(f: CtpFlavor) {
    setFlavor(f);
    applyCatppuccin(f, accent);
  }
  function pickAccent(a: CtpAccent) {
    setAccent(a);
    applyCatppuccin(flavor, a);
  }

  return (
    <div className={cn("relative", compact && "w-full")}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs text-muted hover:text-fg",
          compact && "w-full justify-center",
        )}
        aria-expanded={open}
      >
        <Palette className="h-3.5 w-3.5" />
        主题
      </button>
      {open ? (
        <div
          className={cn(
            "z-50 mt-2 rounded-lg border border-border bg-surface p-3 shadow-soft",
            compact ? "relative w-full" : "absolute right-0 w-64",
          )}
        >
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-subtle">
            Flavor
          </p>
          <div className="mb-3 flex flex-wrap gap-1">
            {CTP_FLAVORS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => pickFlavor(f)}
                className={cn(
                  "rounded-full px-2 py-0.5 text-[11px]",
                  flavor === f
                    ? "bg-primary-soft text-primary"
                    : "bg-surface-3 text-muted hover:text-fg",
                )}
              >
                {FLAVOR_LABELS[f]}
              </button>
            ))}
          </div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-subtle">
            Accent
          </p>
          <div className="flex flex-wrap gap-1">
            {CTP_ACCENTS.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => pickAccent(a)}
                className={cn(
                  "rounded-full px-2 py-0.5 text-[11px]",
                  accent === a
                    ? "bg-primary-soft text-primary"
                    : "bg-surface-3 text-muted hover:text-fg",
                )}
              >
                {ACCENT_LABELS[a]}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
