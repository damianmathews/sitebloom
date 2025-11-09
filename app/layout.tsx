import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Plausible } from "@/components/plausible";
import { LocalBusinessSchema } from "@/components/local-business-schema";
import config from "@/content/config.json";

export const metadata: Metadata = {
  title: {
    default: `${config.siteName} - ${config.tagline}`,
    template: `%s | ${config.siteName}`,
  },
  description: config.description,
  keywords: ["website design", "local business websites", "small business web design", "contractor websites", "service business websites"],
  authors: [{ name: config.siteName }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: config.siteName,
    title: config.tagline,
    description: config.description,
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
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
