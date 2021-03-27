import { AppProps } from "next/dist/next-server/lib/router/router";
import { SWRConfig } from "swr";
import "../styles/index.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ revalidateOnFocus: false, revalidateOnMount: true }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
