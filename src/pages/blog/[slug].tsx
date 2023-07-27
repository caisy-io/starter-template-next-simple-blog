import { GetStaticProps } from "next";
import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import { DefaultSpacer } from "../../components/DefaultSpacer";
import { FullText } from "../../components/fulltext/FullText";
import { getAllBlogArticles } from "../../services/content/getAllBlogArticle";
import { EPageType, getProps } from "../../services/content/getProps";
import { IGenBlogArticle } from "../../services/graphql/__generated/sdk";

interface INextjsPage {
  BlogArticle?: IGenBlogArticle | null;
  is404?: boolean;
}

const NextjsPage = (props: INextjsPage) => {
  useEffect(() => {
    if (props?.is404) Router.push("/404");
  }, [props?.is404]);

  return (
    props?.BlogArticle && (
      <>
        {props.BlogArticle.seo?.title && (
          <Head>
            <title>{props.BlogArticle.seo.title}</title>
          </Head>
        )}
        {props.BlogArticle && <FullText {...props.BlogArticle} />}
        <DefaultSpacer />
      </>
    )
  );
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  const resPage = await getProps({ slug, pageType: EPageType.Blog });

  return {
    revalidate: 1,
    props: {
      ...(resPage || null),
    },
  };
};

export const getStaticPaths = async () => {
  const resAllArticles = await getAllBlogArticles({});

  return {
    paths: resAllArticles?.map((page) => ({ params: { slug: page.slug } })),
    fallback: true,
  };
};

export default NextjsPage;
