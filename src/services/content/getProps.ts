import { caisySDK } from "../graphql/getSdk";

export enum EPageType {
  Default = 1,
  Blog = 2,
  Index = 3,
  NotFound = 4,
}

export const getProps = async ({
  slug,
  pageType = EPageType.Default,
}: {
  slug?: string;
  pageType?: EPageType;
}) => {
  const navigationRequest = caisySDK.Navigation();
  const footerRequest = caisySDK.Footer();

  if (slug === undefined && pageType == EPageType.Index) {
    const Navigation = (await navigationRequest)?.Navigation;
    slug = Navigation?.homePage?.slug ?? undefined;
  }
  if (slug === undefined && pageType == EPageType.NotFound) {
    const Navigation = (await navigationRequest)?.Navigation;
    slug = Navigation?.notFoundPage?.slug ?? undefined;
  }

  if (slug === undefined) {
    return {
      is404: true,
      Navigation: (await navigationRequest)?.Navigation,
      Footer: (await footerRequest)?.Footer,
      BlogArticle: null,
      Page: null,
    };
  }

  const BlogArticle =
    pageType == EPageType.Blog
      ? (await caisySDK
          .allBlogArticleBySlug({ slug })
          .then((r) => r.allBlogArticle?.edges?.[0]?.node)) ?? null
      : null;

  const Page =
    pageType != EPageType.Blog
      ? (await caisySDK
          .allPageBySlug({ slug })
          .then((r) => r.allPage?.edges?.[0]?.node)) ?? null
      : null;

  const Navigation = (await navigationRequest)?.Navigation;

  const redirectHome = Page?.slug === Navigation?.homePage?.slug;

  return {
    redirectHome,
    is404: BlogArticle === null && Page === null,
    Navigation,
    Footer: (await footerRequest)?.Footer,
    BlogArticle,
    Page,
  };
};
