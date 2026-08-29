import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteChrome";
import { SiteFooter } from "../components/SiteFooter";
import { PricingEstimator } from "./PricingEstimator";

export const metadata: Metadata = {
  title: "AI Receptionist Pricing and Cost Estimator",
  description: "Estimate AI receptionist pricing based on monthly call volume, after-hours coverage, lead qualification, appointment booking, and workflow complexity.",
  alternates: { canonical: "https://virtual-agent-ai.typical-sammich.chatgpt.site/pricing" },
  openGraph: {
    type: "website",
    url: "https://virtual-agent-ai.typical-sammich.chatgpt.site/pricing",
    title: "AI Receptionist Pricing and Cost Estimator",
    description: "Adjust three practical factors to estimate a monthly cost range for your AI receptionist.",
    siteName: "Virtual Agent AI",
  },
};

export default function Pricing() {
  return <>
    <SiteHeader />
    <main className="pricingSimple">
      <section className="pricingSimpleIntro">
        <p className="eyebrow">CUSTOM PRICING ESTIMATOR</p>
        <h1>Get a realistic starting range.</h1>
        <p>Pricing depends on how many calls you receive, when you need coverage, and what the AI Agent needs to accomplish. Adjust the three factors below for a practical planning estimate.</p>
      </section>
      <PricingEstimator />
    </main>
    <SiteFooter />
  </>;
}
