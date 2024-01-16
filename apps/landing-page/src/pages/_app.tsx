import type { AppProps } from "next/app";
import "../styles/globals.css";

import "../translate/i18.js";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
