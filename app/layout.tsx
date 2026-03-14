import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";

import { SITE_META } from "@/lib/site-content";
import "../styles/globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_META.title,
  description: SITE_META.description,
  metadataBase: new URL(SITE_META.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_META.title,
    description: SITE_META.shortDescription,
    url: SITE_META.url,
    siteName: SITE_META.siteName,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: SITE_META.title,
    description: SITE_META.shortDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${dmSans.variable}`}>{children}</body>
    </html>
  );
}
