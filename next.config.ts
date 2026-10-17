import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: process.env.NEXT_BUILD_FOR_PAGES === "true",
  images: {
    unoptimized: true,
  },
  typescript: {
    tsconfigPath: "tsconfig.next.json",
  },
};

export default nextConfig;
