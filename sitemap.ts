import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

const base = "https://www.virtualagentai.org";
export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "app");
  const routes: string[] = [];
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith("_") || entry.name === "components") continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      if (entry.isFile() && entry.name === "page.tsx") {
        let route = path.relative(appDir, dir).replaceAll(path.sep, "/");
        route = route ? `/${route}` : "";
        routes.push(route);
      }
    }
  };
  walk(appDir);
  return [...new Set(routes)].sort().map((route) => ({
    url: `${base}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/blog/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : ["/services","/industries","/locations","/resources","/pricing","/demo"].includes(route) ? .9 : .7,
  }));
}
