import { IGenSeoInformation } from "../graphql/__generated/sdk";

export const getHeadProps = (seo?: IGenSeoInformation | null) => {
  const head: any = {
    meta: [
      {
        name: "og:locale",
        content: "en_US",
      },
      {
        name: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  };

  if (!seo) return head;

  const ogImageSrc = seo?.ogImage?.src;
  const ogImageAlt = seo?.ogImage?.description;

  if (seo.title) {
    head.title = seo.title;
    head.meta.push({
      name: "og:title",
      content: seo.title,
    });
    head.meta.push({
      name: "twitter:title",
      content: seo.title,
    });
  }
  if (seo.description) {
    head.meta.push({
      name: "description",
      content: seo.description,
    });
    head.meta.push({
      name: "og:description",
      content: seo.description,
    });
    head.meta.push({
      name: "twitter:description",
      content: seo.description,
    });
  }
  if (ogImageSrc) {
    head.meta.push({
      name: "og:image",
      content: ogImageSrc,
    });
    head.meta.push({
      name: "twitter:image",
      content: ogImageSrc,
    });
    head.meta.push({
      name: "og:image:type",
      content: "image/jpeg",
    });
    head.meta.push({
      name: "og:image:width",
      content: "1200",
    });
    head.meta.push({
      name: "og:image:height",
      content: "630",
    });
    head.meta.push({
      name: "og:image",
      content: `${ogImageSrc}?f=jpeg&w=1200&h=630`,
    });
    head.meta.push({
      name: "og:image:secure_url",
      content: `${ogImageSrc}?f=jpeg&w=1200&h=630`,
    });
    head.meta.push({
      name: "twitter:image",
      content: `${ogImageSrc}?f=jpeg&w=1200&h=630`,
    });
  }

  if (ogImageAlt) {
    head.meta.push({
      name: "og:image:alt",
      content: ogImageAlt,
    });
  }

  return head;
};
