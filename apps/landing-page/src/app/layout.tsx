import "./globals.css";
import "aos/dist/aos.css";

import { Inter as FontSans } from "next/font/google";
import Navbar from "@/components/Global/Navbar/navbar";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import Footer from "@/components/pages/Home/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Your Finance",
  description: "Your finance is a simple way to manage your money",
  icons: [
    {
      url: "/favicon.ico",
      href: "/favicon.ico",
      rel: "icon",
      type: "image/x-icon"
    }
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
