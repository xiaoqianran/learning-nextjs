export const CTP_FLAVORS = ["mocha", "macchiato", "frappe", "latte"] as const;
export type CtpFlavor = (typeof CTP_FLAVORS)[number];

export const CTP_ACCENTS = [
  "green",
  "mauve",
  "blue",
  "lavender",
  "sapphire",
  "teal",
  "peach",
  "pink",
] as const;
export type CtpAccent = (typeof CTP_ACCENTS)[number];

export const DEFAULT_CTP_FLAVOR: CtpFlavor = "mocha";
export const DEFAULT_CTP_ACCENT: CtpAccent = "sapphire"; // Next/React cyan-blue family

const FLAVOR_KEY = "next-learn-ctp-flavor";
const ACCENT_KEY = "next-learn-ctp-accent";

export function readCtpFlavor(): CtpFlavor {
  if (typeof window === "undefined") return DEFAULT_CTP_FLAVOR;
  try {
    const v = localStorage.getItem(FLAVOR_KEY) as CtpFlavor | null;
    return v && (CTP_FLAVORS as readonly string[]).includes(v)
      ? v
      : DEFAULT_CTP_FLAVOR;
  } catch {
    return DEFAULT_CTP_FLAVOR;
  }
}

export function readCtpAccent(): CtpAccent {
  if (typeof window === "undefined") return DEFAULT_CTP_ACCENT;
  try {
    const v = localStorage.getItem(ACCENT_KEY) as CtpAccent | null;
    return v && (CTP_ACCENTS as readonly string[]).includes(v)
      ? v
      : DEFAULT_CTP_ACCENT;
  } catch {
    return DEFAULT_CTP_ACCENT;
  }
}

export function applyCatppuccin(flavor: CtpFlavor, accent: CtpAccent) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-ctp-flavor", flavor);
  document.documentElement.setAttribute("data-ctp-accent", accent);
  try {
    localStorage.setItem(FLAVOR_KEY, flavor);
    localStorage.setItem(ACCENT_KEY, accent);
  } catch {
    /* ignore */
  }
}

export const FLAVOR_LABELS: Record<CtpFlavor, string> = {
  mocha: "Mocha 深",
  macchiato: "Macchiato",
  frappe: "Frappé",
  latte: "Latte 浅",
};

export const ACCENT_LABELS: Record<CtpAccent, string> = {
  green: "Green",
  mauve: "Mauve",
  blue: "Blue",
  lavender: "Lavender",
  sapphire: "Sapphire",
  teal: "Teal",
  peach: "Peach",
  pink: "Pink",
};
