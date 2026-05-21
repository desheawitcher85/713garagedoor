import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Bebas_Neue } from "next/font/google"
import { JetBrains_Mono } from "next/font/google"
import { Archivo_Black } from "next/font/google"
import { Barlow_Condensed } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { StickyCallButton } from "@/components/layout/StickyCallButton"
import { LocalBusinessSchema } from "@/components/schema/LocalBusinessSchema"
import { siteConfig } from "@/lib/site-config"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
})

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: `Houston Garage Door Repair | 24/7 Same-Day Service | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Fast, reliable garage door repair across Greater Houston. Same-day service, 24/7 emergency response, upfront pricing. Call 713-535-9301.",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} ${jetbrainsMono.variable} ${archivoBlack.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  )
}
