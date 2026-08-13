/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from "next";
import { PageTransition } from "./components/PageTransition";
import "./globals.css";
const siteUrl = "https://virtualagentai.org";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "24/7 AI Receptionist for Small Business | Virtual Agent AI", template: "%s | Virtual Agent AI" },
  description: "Virtual Agent AI answers business calls 24/7, qualifies leads, books appointments, routes urgent requests, and sends clear call summaries.",
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/favicon.svg" },
  openGraph: { type: "website", siteName: "Virtual Agent AI", title: "24/7 AI Receptionist for Small Business | Virtual Agent AI", description: "Answer calls, qualify leads, book appointments, and route urgent requests with a managed AI receptionist.", url: siteUrl, locale: "en_US" },
  twitter: { card: "summary", title: "24/7 AI Receptionist for Small Business | Virtual Agent AI", description: "Answer calls, qualify leads, and book appointments around the clock." },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#080b0d" };
export default function RootLayout({children}:{children:React.ReactNode}) {
  const siteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Virtual Agent AI",
        url: siteUrl,
        telephone: "+1-714-695-5646",
        email: "virtualagentai@gmail.com",
        description: "A managed AI receptionist service for businesses that need reliable call answering, lead qualification, appointment booking, and call routing.",
        address: { "@type": "PostalAddress", addressLocality: "Menifee", addressRegion: "CA", addressCountry: "US" },
        areaServed: { "@type": "Country", name: "United States" },
        contactPoint: { "@type": "ContactPoint", telephone: "+1-714-695-5646", contactType: "sales", areaServed: "US", availableLanguage: "English" },
        sameAs: [
          "https://www.google.com/maps?cid=0x41aac8fe32c01059:0xeaf9d3f5cde90090",
          "https://www.bbb.org/us/ca/menifee/profile/business-services/virtual-agent-ai-1126-1000167203"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Virtual Agent AI",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-US"
      }
    ]
  };
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Mono&family=Manrope:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700&display=swap" /></head><body><PageTransition /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />{children}</body></html>;
}
