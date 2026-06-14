import type { Metadata } from "next";
import { DM_Sans, Caveat } from "next/font/google";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { SITE } from "@/lib/constants";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Premium Photobooth Rental in Toronto`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "photobooth rental Toronto",
    "wedding photobooth GTA",
    "corporate photobooth Toronto",
    "photo booth rental",
    "event photobooth",
    "brand activation photobooth",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Premium Photobooth Rental in Toronto`,
    description: SITE.description,
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: `${SITE.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Premium Photobooth Rental in Toronto`,
    description: SITE.description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${dmSans.variable} ${caveat.variable} scroll-smooth`}>
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className="min-h-screen bg-cream font-sans text-olive antialiased">
        {children}
      </body>
    </html>
  );
}
