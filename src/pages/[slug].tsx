import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import { Page } from "../layouts/Page";
import { getAllPages } from "../services/content/getAllPages";
import { EPageType, getProps } from "../services/content/getProps";
import { ParsedUrlQuery } from "querystring";

const NextjsPage = (props: Awaited<ReturnType<typeof getProps>>) => {
  useEffect(() => {
    if (props?.is404) Router.push("/404");
    if (props?.redirectHome) Router.push("/");
  }, [props?.is404, props?.redirectHome]);

  return (
    props?.Page && (
      <>
        {props.Page.seo?.title && (
          <Head>
            <title>{props.Page.seo.title}</title>
          </Head>
        )}
        <Page {...props.Page} />
      </>
    )
  );
};
interface Params extends ParsedUrlQuery {
  slug?: string;
}

export const getStaticProps: GetStaticProps<
  Awaited<ReturnType<typeof getProps>>,
  Params
> = async ({ params }) => {
  const slug = params?.slug as string;

  const resPage = await getProps({ slug, pageType: EPageType.Index });

  return {
    revalidate: 1,
    props: {
      ...(resPage || null),
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const resAllPages = await getAllPages({});

  return {
    paths: resAllPages
      ?.filter((page) => page.slug && page.slug !== "404")
      .map((page) => ({ params: { slug: page.slug! } })),
    fallback: true,
  };
};

export default NextjsPage;
