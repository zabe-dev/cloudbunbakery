import type { Metadata } from "next";
import { Header } from "@/features/navigation/Header";
import { Footer } from "@/features/navigation/Footer";
import { site } from "@/lib/site";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Cloud Bun Bakery LLC | Homemade Filipino Bakes",
    template: "%s | Cloud Bun Bakery LLC",
  },
  description: site.description,
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  icons: { icon: "/images/logo.jpg", apple: "/images/logo.jpg" },
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
