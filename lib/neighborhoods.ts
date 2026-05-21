export const neighborhoods = [
  {
    slug: "the-heights",
    name: "The Heights",
    fullName: "Houston Heights",
    h1: "Garage Door Repair in The Heights, Houston",
    landmarks: [
      "19th Street shopping district",
      "White Oak Music Hall",
      "Donovan Park",
      "Heights Mercantile",
    ],
    homeStyle:
      "Historic bungalows, Victorians, and modern infill. Many original carriage-style garages retrofitted to modern openers.",
    commonIssues:
      "Older single-car garages with narrow openings. Wooden doors damaged by Gulf humidity. Carriage-style doors needing specialty hardware.",
    metaTitle: "Garage Door Repair The Heights Houston | Same-Day Service",
    metaDescription:
      "Same-day garage door repair in The Heights and 77008. Historic homes, modern installs, carriage-style specialty work. Call 713-535-9301.",
    zip: ["77007", "77008", "77018"],
  },
  {
    slug: "memorial",
    name: "Memorial",
    fullName: "Memorial, Houston",
    h1: "Garage Door Repair in Memorial, Houston",
    landmarks: ["Memorial City Mall", "Memorial Park", "Town & Country Village"],
    homeStyle:
      "Large 1980s-2000s homes with 2-3 car garages. High-end installs common.",
    commonIssues:
      "Aging double and triple doors needing replacement. Smart opener upgrades. Higher-end carriage-style and full-view glass installs.",
    metaTitle: "Garage Door Repair Memorial Houston | Premium Installs & Repair",
    metaDescription:
      "Memorial garage door repair and replacement. Three-car doors, smart openers, premium installs across 77024, 77079, and 77043.",
    zip: ["77024", "77079", "77043"],
  },
  {
    slug: "sugar-land",
    name: "Sugar Land",
    fullName: "Sugar Land, TX",
    h1: "Garage Door Repair in Sugar Land, TX",
    landmarks: [
      "Sugar Land Town Square",
      "Constellation Field",
      "Telfair",
      "First Colony",
    ],
    homeStyle:
      "Master-planned communities with builder-grade doors aging out of original warranty windows.",
    commonIssues:
      "10-15 year old builder doors needing first major service. Spring failures common at this age. HOA-compliant replacement options matter.",
    metaTitle: "Garage Door Repair Sugar Land TX | Same-Week Replacement",
    metaDescription:
      "Sugar Land garage door repair and replacement. Builder-grade doors restored or replaced. HOA-compliant options. Serving Telfair, First Colony, and more.",
    zip: ["77478", "77479", "77498"],
  },
  {
    slug: "katy",
    name: "Katy",
    fullName: "Katy, TX",
    h1: "Garage Door Repair in Katy, TX",
    landmarks: [
      "Katy Mills",
      "LaCenterra at Cinco Ranch",
      "Cinco Ranch",
      "Cross Creek Ranch",
    ],
    homeStyle:
      "Newer construction, mostly 2-car ranch and two-story. Warranty work and post-construction punch list still common.",
    commonIssues:
      "Warranty-era issues: misaligned tracks from settling, builder-grade opener failures, missing weather seals.",
    metaTitle: "Garage Door Repair Katy TX | Same-Day Service for Cinco Ranch",
    metaDescription:
      "Garage door repair in Katy, TX. Cinco Ranch, Cross Creek, Firethorne, and surrounding. Warranty-era fixes, opener upgrades, hurricane prep.",
    zip: ["77449", "77450", "77494"],
  },
  {
    slug: "the-woodlands",
    name: "The Woodlands",
    fullName: "The Woodlands, TX",
    h1: "Garage Door Repair in The Woodlands, TX",
    landmarks: [
      "Market Street",
      "Cynthia Woods Mitchell Pavilion",
      "Hughes Landing",
      "The Woodlands Town Center",
    ],
    homeStyle:
      "Affluent master-planned community. Premium homes, design-conscious buyers, larger lots.",
    commonIssues:
      "Design-conscious replacements: full-view glass, carriage-style, premium wood-look composite. Smart opener installs.",
    metaTitle: "Garage Door Repair The Woodlands TX | Premium Service",
    metaDescription:
      "The Woodlands garage door repair and replacement. Premium installs, smart openers, full-view glass, carriage-style. Serving Indian Springs, Sterling Ridge, and more.",
    zip: ["77380", "77381", "77382", "77384", "77389"],
  },
]

export const adjacentAreas = [
  "River Oaks",
  "West University",
  "Bellaire",
  "Cypress",
  "Pearland",
  "Spring",
  "Tomball",
  "Humble",
  "Kingwood",
  "Friendswood",
]

export type Neighborhood = (typeof neighborhoods)[number]
