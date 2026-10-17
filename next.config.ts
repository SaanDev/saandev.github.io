import type { NextConfig } from "next";

const isProd = process.env.NODE_ONLY_BUILD !== "true"; // Useful if building locally vs CI/CD

const nextConfig: NextConfig = {
  // 1. Tell Next.js to export static HTML/CSS/JS files into the '/out' directory
  output: 'export', 

  // 2. Set the base path to match your GitHub repository name
  // Format: '/repository-name' (Must start with a slash and have NO trailing slash)
  basePath: '/saandev.github.io', 

  // 3. Recommended: Disable image optimization since GitHub Pages won't support Vercel's backend optimization API
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
