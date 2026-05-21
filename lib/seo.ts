import type { Metadata } from "next"
import { siteConfig } from "./site-config"

interface SEOProps {
  title: string
  description: string
  path?: string
  noIndex?: boolean
}

export function buildMetadata({ title, description, path = "", noIndex = false }: SEOProps): Metadata {
  const url = `${siteConfig.url}${path}`

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}

export function buildBreadcrumbs(path: string): Array<{ name: string; url: string }> {
  const segments = path.replace(/^\/|\/$/g, "").split("/")
  const crumbs: Array<{ name: string; url: string }> = [
    { name: "Home", url: siteConfig.url },
  ]

  let current = ""
  for (const segment of segments) {
    current += `/${segment}`
    const name = segment
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
    crumbs.push({ name, url: `${siteConfig.url}${current}` })
  }

  return crumbs
}
