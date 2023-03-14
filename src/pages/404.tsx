import { GetStaticProps } from "next";
import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import { Page } from "../layouts/Page";
import { EPageType, getProps } from "../services/content/getProps";
import { IGenPage } from "../services/graphql/__generated/sdk";

interface INextjsPage {
  Page?: IGenPage | null;
  redirectHome?: boolean;
}

const NextjsPage = (props: INextjsPage) => {
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
export const getStaticProps: GetStaticProps = async () => {
  const resPage = await getProps({ pageType: EPageType.NotFound });

  return {
    revalidate: 60,
    props: {
      ...(resPage || null),
    },
  };
};

export default NextjsPage;
