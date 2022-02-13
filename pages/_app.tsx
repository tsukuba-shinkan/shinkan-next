import { AppProps } from "next/app";
import { SWRConfig } from "swr";
import * as gtag from "../utils/gtag";
import "../styles/index.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (!gtag.existsGaId) {
      return;
    }

    const handleRouteChange = (path: any) => {
      gtag.pageview(path);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <SWRConfig value={{ revalidateOnFocus: false, revalidateOnMount: true }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
