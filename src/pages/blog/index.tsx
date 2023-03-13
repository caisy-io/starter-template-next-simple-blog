export { default } from "./[slug]";
import { getStaticProps as getStaticPropsSlug } from "./[slug]";

export const getStaticProps = async ({ params }) => {
  return getStaticPropsSlug({
    params: {
      ...params,
    },
  });
};
