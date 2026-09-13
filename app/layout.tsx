import type { Metadata } from "next";
import { Header } from "@/features/navigation/Header";
import { Footer } from "@/features/navigation/Footer";
import { site } from "@/lib/site";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Kentucky Filipino Home Bakery | Cloud Bun Bakery",
    template: "%s | Cloud Bun Bakery",
  },
  description: site.description,
  keywords: site.keywords,
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Kentucky Filipino Home Bakery | Cloud Bun Bakery",
    description: site.description,
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo-256x256.png",
        width: 256,
        height: 256,
        alt: `${site.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Kentucky Filipino Home Bakery | Cloud Bun Bakery",
    description: site.description,
    images: [{ url: "/logo-256x256.png", alt: `${site.name} logo` }],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
