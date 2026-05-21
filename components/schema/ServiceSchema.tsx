import { siteConfig } from "@/lib/site-config"

interface ServiceSchemaProps {
  serviceType: string
  description: string
  areaName?: string
}

export function ServiceSchema({
  serviceType,
  description,
  areaName = "Houston",
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: { "@type": "City", name: areaName },
    description,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
