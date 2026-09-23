/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from "next";
import { PageTransition } from "./components/PageTransition";
import "./globals.css";
const siteUrl = "https://www.virtualagentai.org";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "24/7 AI Receptionist for Business | Virtual Agent AI", template: "%s | Virtual Agent AI" },
  description: "Virtual Agent AI answers business calls 24/7, qualifies leads, books appointments, takes messages, and transfers important calls automatically.",
  keywords: ["AI receptionist","AI receptionist service","AI phone answering service","AI answering service","AI virtual receptionist","virtual AI receptionist","AI phone agent","AI call answering service","24/7 AI receptionist","AI receptionist for business"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: [{ url: "/favicon.png", type: "image/png" }], shortcut: "/favicon.png", apple: "/favicon.png" },
  openGraph: { type: "website", siteName: "Virtual Agent AI", title: "24/7 AI Receptionist for Business | Virtual Agent AI", description: "Answer calls, qualify leads, book appointments, take messages, and transfer important calls 24/7.", url: siteUrl, locale: "en_US", images: [{ url: "/og-image.png", width: 1024, height: 1024, alt: "Virtual Agent AI" }] },
  twitter: { card: "summary_large_image", title: "24/7 AI Receptionist for Business | Virtual Agent AI", description: "Answer calls, qualify leads, and book appointments around the clock.", images: ["/og-image.png"] },
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
  return <html lang="en"><body><PageTransition /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />{children}</body></html>;
}
