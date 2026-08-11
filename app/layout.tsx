import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CursorWash } from "@/components/fx/CursorWash";
import { Toolbar } from "@/components/notebook/Toolbar";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  style: ["normal", "italic"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "David Morales — Data Science & AI, building in public",
    template: "%s · David Morales",
  },
  description: site.description.en,
  authors: [{ name: site.fullName, url: site.github }],
  creator: site.fullName,
  keywords: [
    "David Morales",
    "Juan David Morales Galindo",
    "data science",
    "artificial intelligence",
    "machine learning",
    "build in public",
    "OpenRoute",
    "FreeTicket hackathon",
    "Colsubsidio 30X",
    "Chispy",
    "Platanus Build Night",
    "IDONIA",
    "medical imaging",
    "Spain",
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.filename,
    title: "David Morales — Data Science & AI, building in public",
    description: site.description.en,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Morales — Data Science & AI, building in public",
    description: site.description.en,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
    languages: { en: "/", es: "/es" },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.fullName,
  email: `mailto:${site.email}`,
  url: siteUrl,
  jobTitle: site.role.en,
  address: { "@type": "PostalAddress", addressCountry: "ES" },
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sourceSerif.variable} ${plexMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Toolbar />
        {children}
        <CursorWash />
        <Analytics />
      </body>
    </html>
  );
}
