export { default } from "./[slug]";
import { GetStaticProps } from "next";
import { getStaticProps as getStaticPropsSlug } from "./[slug]";
import { getProps } from "../services/content/getProps";

export const getStaticProps: GetStaticProps<
  Awaited<ReturnType<typeof getProps>>
> = async ({ params }) => {
  return getStaticPropsSlug({
    params: {
      ...params,
    },
  });
};
