import { siteConfig } from "@/lib/site-config"

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    image: `${siteConfig.url}/images/og-image.jpg`,
    url: siteConfig.url,
    telephone: siteConfig.phoneE164,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    areaServed: [
      { "@type": "City", name: "Houston" },
      { "@type": "AdministrativeArea", name: "Harris County" },
      { "@type": "AdministrativeArea", name: "Fort Bend County" },
      { "@type": "AdministrativeArea", name: "Montgomery County" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.lat,
        longitude: siteConfig.geo.lng,
      },
      geoRadius: "60000",
    },
    sameAs: [],
    ...(siteConfig.ratings.count > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: siteConfig.ratings.average,
            reviewCount: siteConfig.ratings.count,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
