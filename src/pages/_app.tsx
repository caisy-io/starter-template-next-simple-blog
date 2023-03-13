import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toast } from "../components/Toast";
import { Footer } from "../layouts/Footer";
import { Navigation } from "../layouts/Navigation";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.PUBLIC_SHOW_ONBOARDING_TOAST != "false" && <Toast />}
      {pageProps.Navigation && <Navigation {...pageProps.Navigation} />}
      <Component {...pageProps} />
      {pageProps.Footer && <Footer {...pageProps.Footer} />}
    </>
  );
}
