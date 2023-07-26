import { getProps, EPageType } from "../src/services/content/getProps";

export { default } from "./[slug]/page";

export async function generateMetadata({ params }) {
  const resPage = await getProps({
    slug: params?.slug,
    pageType: EPageType.Index,
  });
  return {
    title: resPage?.Page?.seo?.title || "",
  };
}
