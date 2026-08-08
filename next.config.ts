import type { NextConfig } from "next";

const isPages = process.env.GITHUB_PAGES === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "learning-nextjs";
const basePath = isPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isPages
    ? {
        output: "export" as const,
        basePath,
        assetPrefix: basePath,
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
