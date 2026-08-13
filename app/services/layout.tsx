import type { Metadata } from "next";

const siteUrl = "https://virtualagentai.org";

export const metadata: Metadata = {
  title: "AI Receptionist Services for Business Calls",
  description: "Explore 24/7 AI call answering, lead qualification, appointment booking, after-hours coverage, call routing, and automated follow-up.",
  alternates: { canonical: `${siteUrl}/services` },
  openGraph: { type: "website", url: `${siteUrl}/services`, title: "AI Receptionist Services for Business Calls", description: "A managed AI receptionist that answers, qualifies, books, routes, and follows up.", siteName: "Virtual Agent AI" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
