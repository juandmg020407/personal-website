import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // pin the workspace root: a stray lockfile higher up the tree would
  // otherwise make Next.js guess wrong
  turbopack: { root: __dirname },
};

export default nextConfig;
