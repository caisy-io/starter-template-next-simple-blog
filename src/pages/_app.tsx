import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toast } from "../components/Toast";
import { Footer } from "../layouts/Footer";
import { Navigation } from "../layouts/Navigation";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      {process.env.NEXT_PUBLIC_SHOW_ONBOARDING_TOAST != "false" && <Toast />}
      {pageProps.Navigation && <Navigation {...pageProps.Navigation} />}
      <Component {...pageProps} />
      {pageProps.Footer && <Footer {...pageProps.Footer} />}
    </>
  );
}
