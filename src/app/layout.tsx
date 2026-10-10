import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/lib/content";
import { WebAnalytics } from "@/components/web-analytics";
import { AttributionInit } from "@/components/attribution-init";
import { JsonLd } from "@/components/json-ld";
import { businessSchema, ogImage } from "@/lib/seo";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Scout Labs",
    template: "%s | Scout Labs",
  },
  description: businessSchema.description,
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage.url],
  },
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
        <JsonLd data={businessSchema} />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <AttributionInit />
        {children}
        <WebAnalytics />
      </body>
    </html>
  );
}
