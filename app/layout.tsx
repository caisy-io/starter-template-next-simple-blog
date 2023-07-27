import "@/styles/globals.css";
import { Navigation } from "../src/layouts/Navigation";
import { Footer } from "../src/layouts/Footer";
import { EPageType, getProps } from "../src/services/content/getProps";
import { getHeadProps } from "../src/services/content/getHeadProps";

export async function generateMetadata({ params }) {
  const slug = params?.slug as string;
  const resPage = await getProps({ slug, pageType: EPageType.Index });
  return getHeadProps(resPage?.Page?.seo);
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageProps = await getProps({ pageType: EPageType.Index });

  return (
    <html lang="en">
      <body>
        <Navigation {...pageProps?.Navigation} />
        {children}
        <Footer {...pageProps?.Footer} />
      </body>
    </html>
  );
}
export const fetchCache = "only-no-store";
export const revalidate = 0;
