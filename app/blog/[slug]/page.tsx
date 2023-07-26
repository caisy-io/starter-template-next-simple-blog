import { redirect, notFound } from "next/navigation";
import { getProps, EPageType } from "../../../src/services/content/getProps";
import { FullText } from "../../../src/components/fulltext/FullText";
import { getAllBlogArticles } from "../../../src/services/content/getAllBlogArticle";

export default async function page({ params }) {
  const slug = params?.slug;
  if (!slug) redirect("/home");

  const resPage = await getProps({ slug, pageType: EPageType.Blog });
  if (resPage?.is404) notFound();

  return <>{resPage?.BlogArticle && <FullText {...resPage?.BlogArticle} />}</>;
}

export async function generateStaticParams() {
  const resAllArticles = await getAllBlogArticles({});
  return resAllArticles?.map((page) => ({ slug: page.slug }));
}
