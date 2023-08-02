import { getAllBlogArticles } from "../../src/services/content/getAllBlogArticle";
import { getAllPages } from "../../src/services/content/getAllPages";
import { caisySDK } from "../../src/services/graphql/getSdk";

export async function GET(req: Request) {
  const baseUrl = `https://${
    req.headers.get("host") || req.headers.get("x-forwarded-host")
  }`;

  const navigationRequest = caisySDK.Navigation();

  const [allPages, allBlogArticles] = await Promise.all([
    getAllPages({}),
    getAllBlogArticles({}),
  ]);

  const navigation = (await navigationRequest)?.Navigation;

  const sitemap = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
    ...allPages
      .map(({ slug, _meta }) => {
        if (slug === navigation?.homePage?.slug) {
          return {
            slug: "",
            _meta,
            priority: 1,
          };
        }

        return {
          slug,
          _meta,
          priority: 0.9,
        };
      })
      .filter(({ slug }) => slug !== navigation?.notFoundPage?.slug)
      .sort((a, b) => {
        return a?.priority > b?.priority ? -1 : 1;
      })
      .map(({ slug, _meta, priority }) => {
        return (
          `<url>` +
          (slug == ""
            ? `<loc>${baseUrl}</loc>`
            : `<loc>${baseUrl}/${slug}</loc>`) +
          `<lastmod>${new Date(_meta?.publishedAt).toISOString()}</lastmod>` +
          `<changefreq>weekly</changefreq>` +
          `<priority>${priority}</priority>` +
          `</url>`
        );
      }),
    ...allBlogArticles
      .map(({ slug, _meta }) => {
        const priority = 0.8;

        return (
          `<url>` +
          `<loc>${baseUrl}/blog/${slug}</loc>` +
          `<lastmod>${new Date(_meta?.publishedAt).toISOString()}</lastmod>` +
          `<changefreq>weekly</changefreq>` +
          `<priority>${priority}</priority>` +
          `</url>`
        );
      })
      .filter((e) => !!e),
    `</urlset>`,
  ].join("\n");

  return new Response(sitemap, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}
