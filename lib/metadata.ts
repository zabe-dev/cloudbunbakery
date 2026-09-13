import type { Metadata } from "next";
import { site } from "./site";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = site.url ? new URL(path, site.url).toString() : undefined;
  const fullTitle = `${title} | Cloud Bun Bakery`;
  const imageUrl = site.url
    ? new URL("/logo-256x256.png", site.url).toString()
    : "/logo-256x256.png";
  return {
    title: { absolute: fullTitle },
    description,
    keywords: site.keywords,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: {
      title: fullTitle,
      description,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 256,
          height: 256,
          alt: `${site.name} logo`,
        },
      ],
      ...(url
        ? {
            url,
          }
        : {}),
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          alt: `${site.name} logo`,
        },
      ],
    },
  };
}
