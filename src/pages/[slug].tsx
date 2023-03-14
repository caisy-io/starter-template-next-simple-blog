import { GetStaticProps } from "next";
import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import { Page } from "../layouts/Page";
import { getAllPages } from "../services/content/getAllPages";
import { EPageType, getProps } from "../services/content/getProps";
import { IGenPage } from "../services/graphql/__generated/sdk";

interface INextjsPage {
  Page?: IGenPage | null;
  is404?: boolean;
  redirectHome?: boolean;
}

const NextjsPage = (props: INextjsPage) => {
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
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  const resPage = await getProps({ slug, pageType: EPageType.Index });

  return {
    revalidate: 60,
    props: {
      ...(resPage || null),
    },
  };
};

export const getStaticPaths = async () => {
  const resAllPages = await getAllPages({});

  return {
    paths: resAllPages
      ?.filter((page) => page.slug !== "404")
      .map((page) => ({ params: { slug: page.slug } })),
    fallback: true,
  };
};

export default NextjsPage;
