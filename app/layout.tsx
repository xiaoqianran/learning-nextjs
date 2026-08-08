import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AppShell } from "@/components/AppShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "React / Next 实战学习 · v8 · 系统路径",
  description:
    "对齐 react.dev / nextjs.org 官方 llms.txt 的交互式中文教程：路径、文档地图、Demo、测验与全栈工坊。",
};

const CTP_BOOT = `(function(){try{var f=localStorage.getItem('next-learn-ctp-flavor');var a=localStorage.getItem('next-learn-ctp-accent');var okF=['mocha','macchiato','frappe','latte'];var okA=['green','mauve','blue','lavender','sapphire','teal','peach','pink'];if(okF.indexOf(f)<0)f='mocha';if(okA.indexOf(a)<0)a='sapphire';document.documentElement.setAttribute('data-ctp-flavor',f);document.documentElement.setAttribute('data-ctp-accent',a);}catch(e){document.documentElement.setAttribute('data-ctp-flavor','mocha');document.documentElement.setAttribute('data-ctp-accent','sapphire');}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning data-ctp-flavor="mocha" data-ctp-accent="sapphire">
      <head>
        <script dangerouslySetInnerHTML={{ __html: CTP_BOOT }} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
