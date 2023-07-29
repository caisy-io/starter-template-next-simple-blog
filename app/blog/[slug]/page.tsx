import { redirect, notFound } from "next/navigation";
import { getProps, EPageType } from "../../../src/services/content/getProps";
import { FullText } from "../../../src/components/fulltext/FullText";
import { getAllBlogArticles } from "../../../src/services/content/getAllBlogArticle";
import { Maybe } from "graphql/jsutils/Maybe";
import { Metadata } from "next";
import { getMetadataProps } from "../../../src/services/content/getHeadProps";
import { IGenSeoInformation } from "../../../src/services/graphql/__generated/sdk";

export async function generateMetadata({ params }): Promise<Metadata> {
  const slug = params?.slug as string;
  const resBlog = await getProps({ slug, pageType: EPageType.Blog });
  const seo: Maybe<IGenSeoInformation> = resBlog?.BlogArticle?.seo;

  return getMetadataProps(seo);
}

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
export const fetchCache = "default";
export const revalidate = 1;
