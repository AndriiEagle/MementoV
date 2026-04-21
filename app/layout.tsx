import type { Metadata } from "next";
import { Cormorant_Garamond, Public_Sans } from "next/font/google";

import { LocaleProvider } from "@/components/locale-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-ui",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-narrative",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Memento Vivere",
  description:
    "Night-first memorial storytelling and reflective narrative experience for Memento Vivere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} ${cormorant.variable}`}>
        <LocaleProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
