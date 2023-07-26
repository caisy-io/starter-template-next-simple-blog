import { Page } from "../../src/layouts/Page";
import { getAllPages } from "../../src/services/content/getAllPages";
import { getProps, EPageType } from "../../src/services/content/getProps";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const resPage = await getProps({
    slug: params?.slug,
    pageType: EPageType.Index,
  });
  return {
    title: resPage?.Page?.seo?.title || "",
  };
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
