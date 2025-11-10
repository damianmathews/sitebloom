import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Plausible } from "@/components/plausible";
import { LocalBusinessSchema } from "@/components/local-business-schema";
import config from "@/content/config.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sitester.io'),
  title: {
    default: `${config.siteName} - ${config.tagline}`,
    template: `%s | ${config.siteName}`,
  },
  description: config.description,
  keywords: ["website design", "local business websites", "small business web design", "contractor websites", "service business websites"],
  authors: [{ name: config.siteName }],
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/icon.png", sizes: "any" }
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://sitester.io",
    locale: "en_US",
    siteName: config.siteName,
    title: config.tagline,
    description: config.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: config.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.tagline,
    description: config.description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Plausible />
        <LocalBusinessSchema
          enabled={config.features.localBusinessSchema}
          name={config.siteName}
          description={config.description}
          telephone={config.phone}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
