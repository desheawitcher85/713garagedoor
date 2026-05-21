export const services = [
  {
    slug: "garage-door-repair",
    title: "Garage Door Repair",
    shortTitle: "Repair",
    h1: "Garage Door Repair in Houston, TX",
    metaTitle: "Garage Door Repair Houston | Same-Day Service | 713 Garage Door",
    metaDescription:
      "Fast, reliable garage door repair across Greater Houston. Same-day service, 24/7 emergency response, upfront pricing. Call 713-535-9301.",
    priceRange: "$95-$650 typical",
    description:
      "Broken springs, off-track doors, cable replacement, panel damage, and more. Same-day service across Houston.",
    icon: "wrench",
    intentTier: 1,
  },
  {
    slug: "garage-door-installation",
    title: "Garage Door Installation",
    shortTitle: "Installation",
    h1: "Garage Door Installation in Houston, TX",
    metaTitle: "Garage Door Installation Houston | New Doors Installed Same-Week",
    metaDescription:
      "New garage door installation in Houston. Steel, wood, glass, and hurricane-rated models. Free quote. Most jobs installed within 5 business days.",
    priceRange: "$1,200-$4,500 installed",
    description:
      "New garage door installation. All major brands. Hurricane-rated options for Greater Houston.",
    icon: "package",
    intentTier: 2,
  },
  {
    slug: "garage-door-spring-repair",
    title: "Garage Door Spring Repair",
    shortTitle: "Spring Repair",
    h1: "Garage Door Spring Repair in Houston, TX",
    metaTitle: "Garage Door Spring Repair Houston | Same-Day Spring Replacement",
    metaDescription:
      "Broken garage door spring in Houston? Same-day torsion and extension spring replacement. Lifetime spring warranty available. Call 713-535-9301.",
    priceRange: "$185-$450 typical",
    description:
      "Torsion and extension spring replacement. Most jobs done same day. Lifetime spring warranty available.",
    icon: "alert-triangle",
    intentTier: 1,
  },
  {
    slug: "garage-door-opener-repair",
    title: "Garage Door Opener Repair",
    shortTitle: "Opener Repair",
    h1: "Garage Door Opener Repair in Houston, TX",
    metaTitle: "Garage Door Opener Repair Houston | LiftMaster, Chamberlain, Genie",
    metaDescription:
      "Opener not working? We service all major brands across Houston. Smart opener installs, motor replacement, remote programming. Same-day service.",
    priceRange: "$125-$525 typical",
    description:
      "Service for LiftMaster, Chamberlain, Genie, Linear, Sommer, and more. Motors, gears, remotes, smart openers.",
    icon: "settings",
    intentTier: 1,
  },
  {
    slug: "commercial-garage-doors",
    title: "Commercial Garage Doors",
    shortTitle: "Commercial",
    h1: "Commercial Garage Door Service in Houston, TX",
    metaTitle: "Commercial Garage Door Repair Houston | Warehouse, Loading Dock",
    metaDescription:
      "Commercial garage door service for Houston warehouses, distribution, and retail. Same-day repair, scheduled maintenance, dock equipment.",
    priceRange: "Quote on-site",
    description:
      "Rolling steel, sectional, and high-speed doors. Warehouse, distribution, automotive, retail.",
    icon: "warehouse",
    intentTier: 3,
  },
  {
    slug: "emergency-garage-door-service",
    title: "Emergency Garage Door Service",
    shortTitle: "Emergency",
    h1: "24/7 Emergency Garage Door Service in Houston, TX",
    metaTitle: "Emergency Garage Door Repair Houston | 24/7 Same-Hour Service",
    metaDescription:
      "Garage door stuck open or won't close? 24/7 emergency response across Houston. Most calls answered same hour. No after-hours surcharge.",
    priceRange: "$145-$650 typical",
    description:
      "24/7 response across Houston. Stuck doors, broken cables, security issues. Most calls answered same hour.",
    icon: "phone",
    intentTier: 1,
  },
]

export type Service = (typeof services)[number]
