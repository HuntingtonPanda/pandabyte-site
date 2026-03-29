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
  keywords: [...SITE_META.keywords],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_META.url}/#website`,
      name: "Pandabyte",
      url: SITE_META.url,
      description: SITE_META.description,
    },
    {
      "@type": "Person",
      "@id": `${SITE_META.url}/#person`,
      name: "Huntington Co",
      url: SITE_META.url,
      jobTitle: "Software Engineer",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of California, Los Angeles",
        alternateName: "UCLA",
      },
      sameAs: [
        "https://github.com/HuntingtonPanda",
        "https://www.linkedin.com/in/huntington-co/",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${dmSans.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
