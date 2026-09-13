import type { Metadata } from "next";
import { site } from "./site";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = site.url ? new URL(path, site.url).toString() : undefined;
  return {
    title,
    description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      siteName: site.name,
      type: "website",
      ...(url
        ? {
            url,
            images: [
              {
                url: new URL("/images/logo.jpg", site.url).toString(),
                width: 1254,
                height: 1254,
                alt: site.name,
              },
            ],
          }
        : {}),
    },
    twitter: { card: "summary", title, description },
  };
}
