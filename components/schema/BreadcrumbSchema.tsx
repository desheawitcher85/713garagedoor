import { siteConfig } from "@/lib/site-config"

interface Crumb {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  crumbs: Crumb[]
}

export function BreadcrumbSchema({ crumbs }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function buildBreadcrumbItems(path: string): Crumb[] {
  const segments = path.replace(/^\/|\/$/g, "").split("/").filter(Boolean)
  const crumbs: Crumb[] = [{ name: "Home", url: siteConfig.url }]

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
