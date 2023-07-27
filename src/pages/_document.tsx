import { Html, Head, Main, NextScript } from "next/document";
import { IGenSeoInformation } from "../services/graphql/__generated/sdk";

interface IDocument {
  seo?: IGenSeoInformation | null;
}

export default function Document({ seo }: IDocument) {
  const ogImageSrc = seo?.ogImage?.src;
  const ogImageAlt = seo?.ogImage?.description;

  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        {seo?.title && (
          <>
            <meta property="og:title" content={seo?.title ?? ""} />
            <meta name="twitter:title" content={seo?.title ?? ""} />
          </>
        )}
        {seo?.description && (
          <>
            <meta name="twitter:description" content={seo?.description ?? ""} />
            <meta name="description" content={seo?.description ?? ""} />
            <meta property="og:description" content={seo?.description ?? ""} />
          </>
        )}
        {ogImageSrc && (
          <>
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="630" />
            <meta property="og:image:height" content="1200" />
            <meta
              property="og:image"
              content={`${ogImageSrc}?f=jpeg&w=1200&h=630`}
            />
            <meta
              property="og:image:secure_url"
              content={`${ogImageSrc}?f=jpeg&w=1200&h=630`}
            />
            <meta
              name="twitter:image"
              content={`${ogImageSrc}?f=jpeg&w=1200&h=630`}
            />
          </>
        )}
        {ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
