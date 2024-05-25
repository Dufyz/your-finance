import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

import { ThemeProvider } from "@/components/ui/theme-provider";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Your Finance",
  description: ""
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster position="top-center" closeButton />
      <body className={inter.className}>
        <TooltipProvider delayDuration={0} skipDelayDuration={10}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
