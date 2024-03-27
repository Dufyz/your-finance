import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ProgressBar from "@/components/global/progress-bar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Finance",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const shouldShowInitialLoader = false;

  if(shouldShowInitialLoader) {
    return (
      <html lang="en">
    <body className={inter.className}>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col gap-8 items-center justify-start relative">
        <div className="bottom-[70px] absolute">
          <Image src="/logo.png" width={120} height={120} alt="logo" />
        </div>
        <div>
        <ProgressBar progress={80} />
        </div>
        <div className="">
          <span className="text-sm text-gray-400">Carregando a porra toda</span>
        </div>
        </div>
      </div>
    </body>
  </html>
    )
  }

  return (
    <html lang="en">
      <Toaster position="top-center" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}