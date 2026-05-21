import { siteConfig } from "@/lib/site-config"

interface ArticleSchemaProps {
  headline: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
}

export function ArticleSchema({
  headline,
  description,
  url,
  datePublished = "2026-01-01",
  dateModified = "2026-05-01",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
