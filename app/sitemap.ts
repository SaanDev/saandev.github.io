import type { MetadataRoute } from "next";
import { siteConfig } from "./data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/research", "/publications", "/photography", "/cv", "/contact"].map(
    (path) => ({
      url: `${siteConfig.siteUrl}${path}`,
      changeFrequency: path === "" ? "monthly" : "yearly",
      priority: path === "" ? 1 : path === "/research" ? 0.9 : 0.7,
    }),
  );
}
