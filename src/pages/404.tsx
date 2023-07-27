import { GetStaticProps } from "next";
import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import { Page } from "../layouts/Page";
import { EPageType, getProps } from "../services/content/getProps";

const NextjsPage = (props: Awaited<ReturnType<typeof getProps>>) => {
  useEffect(() => {
    if (props?.redirectHome) Router.push("/");
  }, [props?.redirectHome]);

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

export const getStaticProps: GetStaticProps<
  Awaited<ReturnType<typeof getProps>>
> = async () => {
  const resPage = await getProps({ pageType: EPageType.NotFound });

  return {
    revalidate: 1,
    props: {
      ...(resPage || null),
    },
  };
};

export default NextjsPage;
