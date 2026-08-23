import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/lib/content";
import { WebAnalytics } from "@/components/web-analytics";
import { AttributionInit } from "@/components/attribution-init";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Scout Labs — Practical AI for Growing Service Businesses";
const description =
  "Scout Labs helps growing, owner-led businesses use AI and automation to increase sales, reduce operating costs, and serve customers better.";
const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: title,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: site.url,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.url],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description,
  url: site.url,
  email: site.email,
  image: `${site.url}/og-image.png`,
  areaServed: "United States",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <AttributionInit />
        {children}
        <WebAnalytics />
      </body>
    </html>
  );
}
