import type { AppProps } from "next/app";
import "../styles/global-styles.css";
import { UserProvider } from "@/providers/userProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
