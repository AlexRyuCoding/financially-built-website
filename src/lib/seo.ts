import { Metadata } from "next";
import siteMetadata from "../../public/site-meta.json";

export function generateSiteMetadata(): Metadata {
  const { meta, openGraph, twitter, site } = siteMetadata;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: meta.author }],
    robots: meta.robots,
    metadataBase: new URL(site.url),
    openGraph: {
      type: openGraph.type as "website",
      title: openGraph.title,
      description: openGraph.description,
      url: openGraph.url,
      siteName: openGraph.site_name,
      images: openGraph.images.map((img) => ({
        url: img.url,
        width: img.width,
        height: img.height,
        alt: img.alt,
      })),
      locale: site.language,
    },
    twitter: {
      card: twitter.card as "summary_large_image",
      title: twitter.title,
      description: twitter.description,
      images: [twitter.image],
      creator: twitter.creator,
    },
  };
}

export function generateStructuredData() {
  const { structuredData } = siteMetadata;

  return {
    "@context": structuredData["@context"],
    "@type": structuredData["@type"],
    name: structuredData.name,
    url: structuredData.url,
    logo: structuredData.logo,
    description: structuredData.description,
    areaServed: structuredData.areaServed,
    serviceType: structuredData.serviceType,
    sameAs: structuredData.sameAs,
  };
}
