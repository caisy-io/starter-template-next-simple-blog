import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // res.setHeader("Content-Type", "text/plain");
  // res.setHeader("Cache-Control", `max-age=${60 * 60 * 1}`); // 1 hour cache
  // res.write(robots);
  // res.end();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "localhost:3000/sitemap.xml",
  };
}
