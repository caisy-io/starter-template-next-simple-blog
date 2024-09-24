import "@/styles/globals.css";
import { Navigation } from "../src/layouts/Navigation";
import { Footer } from "../src/layouts/Footer";
import { EPageType, getProps } from "../src/services/content/getProps";
import { Toast } from "../src/components/Toast";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageProps = await getProps({ pageType: EPageType.Index });

  return (
    <html lang="en">
      <body>
        {process.env.NEXT_PUBLIC_SHOW_ONBOARDING_TOAST != "false" && <Toast />}
        <Navigation {...pageProps?.Navigation} />
        {children}
        <Footer {...pageProps?.Footer} />
      </body>
    </html>
  );
}

export const revalidate = 1;
export const fetchCache = "default-cache";
