import { Page } from "../../src/layouts/Page";
import { getAllPages } from "../../src/services/content/getAllPages";
import { getProps, EPageType } from "../../src/services/content/getProps";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Maybe } from "graphql/jsutils/Maybe";
import { getMetadataProps } from "../../src/services/content/getHeadProps";
import { IGenSeoInformation } from "../../src/services/graphql/__generated/sdk";

export async function generateMetadata({ params }): Promise<Metadata> {
  let slug = params?.slug as string;
  if (!slug) slug = "home";
  const resPage = await getProps({
    slug,
    pageType: EPageType.Index,
  });
  const seo: Maybe<IGenSeoInformation> = resPage?.Page?.seo;

  return getMetadataProps(seo);
}

export default async function page({ params }) {
  const slug = params?.slug as string;
  const pageResponse = await getProps({ slug, pageType: EPageType.Index });

  if (pageResponse?.is404) {
    notFound();
  }

  return (
    pageResponse?.Page && (
      <>
        <Page {...pageResponse?.Page} />
      </>
    )
  );
}

export async function generateStaticParams() {
  const resAllPages = await getAllPages({});

  return resAllPages
    ?.filter((page) => page.slug && page.slug !== "404")
    .map((page) => ({ slug: page.slug! }));
}
export const fetchCache = "default";
export const revalidate = 1;
