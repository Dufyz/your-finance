import type { AppProps } from "next/app";
import "../styles/global-styles.css";
import { UserProvider } from "@/providers/userProvider";
import { Toaster } from "sonner";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </UserProvider>
  );
}
