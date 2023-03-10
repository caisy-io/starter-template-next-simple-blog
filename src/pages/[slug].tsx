import { GetStaticPaths, GetStaticProps } from "next";
import { Page } from "../layouts/Page";
import { EPageType, getProps } from "../services/content/getProps";

const NextjsPage = (props) => {
  console.log({ props });
  return <Page {...props.Page} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug ?? "home";

  const resPage = await getProps({ slug, pageType: EPageType.Blog });

  return {
    revalidate: 60,
    props: {
      Page: resPage,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {};

export default NextjsPage;
