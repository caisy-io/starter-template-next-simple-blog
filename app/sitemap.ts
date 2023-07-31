import { MetadataRoute } from "next/types";
import { getAllPages } from "../src/services/content/getAllPages";
import { getAllBlogArticles } from "../src/services/content/getAllBlogArticle";

export default async function sitemap(x): Promise<MetadataRoute.Sitemap> {
 
  let [allPages, allBlogArticles] = await Promise.all([
    getAllPages({}),
    getAllBlogArticles({}),
  ]);
  allBlogArticles = allBlogArticles.map((blog) => ({
    ...blog,
    slug: `blog/${blog.slug}`,
  }));

  const allRoutes = [...allPages, ...allBlogArticles]
    .filter(({ slug }) => slug !== "404")
    .map(({ slug, _meta }) => ({
      url: `localhost:3000/${slug}`,
      lastModified: new Date(_meta?.publishedAt).toISOString(),
    }));

  return [{ url: "localhost:3000" }, ...allRoutes];
}
