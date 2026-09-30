export type InternalLink = { href: string; label: string; description?: string };

const serviceBySlug: Record<string, InternalLink[]> = {
  "what-is-an-ai-receptionist": [
    { href: "/services/ai-call-answering", label: "AI Call Answering", description: "See the managed call-answering workflow behind the guide." },
    { href: "/services/appointment-booking", label: "Appointment Booking", description: "Connect answered calls to eligible appointments." },
  ],
  "ai-call-answering-how-it-works-for-service-businesses": [
    { href: "/services/ai-call-answering", label: "AI Call Answering" },
    { href: "/services/after-hours-answering", label: "After-Hours Answering" },
  ],
  "what-is-an-ai-call-center": [
    { href: "/services/ai-call-center", label: "AI Call Center" },
    { href: "/services/ai-call-answering", label: "AI Call Answering" },
  ],
  "ai-receptionist-vs-answering-service": [
    { href: "/services/ai-call-answering", label: "AI Call Answering" },
    { href: "/services/after-hours-answering", label: "After-Hours Answering" },
  ],
  "stop-missing-business-calls": [
    { href: "/services/ai-call-answering", label: "AI Call Answering" },
    { href: "/services/after-hours-answering", label: "After-Hours Answering" },
  ],
  "ai-appointment-scheduling": [
    { href: "/services/appointment-booking", label: "Appointment Booking" },
    { href: "/services/lead-qualification", label: "Lead Qualification" },
  ],
  "ai-lead-qualification": [
    { href: "/services/lead-qualification", label: "Lead Qualification" },
    { href: "/services/lead-generation-follow-up", label: "Lead Generation & Follow-Up" },
  ],
  "after-hours-answering-service": [
    { href: "/services/after-hours-answering", label: "After-Hours Answering" },
    { href: "/services/ai-call-answering", label: "AI Call Answering" },
  ],
  "ai-lead-generation-for-service-businesses": [
    { href: "/services/lead-generation-follow-up", label: "Lead Generation & Follow-Up" },
    { href: "/services/lead-qualification", label: "Lead Qualification" },
  ],
  "ai-receptionist-for-small-business-is-it-worth-it": [
    { href: "/services/ai-call-answering", label: "AI Call Answering" },
    { href: "/services/appointment-booking", label: "Appointment Booking" },
  ],
  "ai-follow-up-with-leads-without-sounding-robotic": [
    { href: "/services/lead-generation-follow-up", label: "Lead Generation & Follow-Up" },
    { href: "/services/lead-qualification", label: "Lead Qualification" },
  ],
  "ai-receptionist-for-plumbers": [
    { href: "/services/ai-call-answering", label: "AI Call Answering" },
    { href: "/services/after-hours-answering", label: "After-Hours Answering" },
    { href: "/services/appointment-booking", label: "Appointment Booking" },
  ],
  "ai-receptionist-for-hvac-companies": [
    { href: "/services/ai-call-answering", label: "AI Call Answering" },
    { href: "/services/appointment-booking", label: "Appointment Booking" },
    { href: "/services/after-hours-answering", label: "After-Hours Answering" },
  ],
  "ai-receptionist-for-roofing-companies": [
    { href: "/services/lead-qualification", label: "Lead Qualification" },
    { href: "/services/appointment-booking", label: "Appointment Booking" },
    { href: "/services/ai-call-answering", label: "AI Call Answering" },
  ],
  "ai-receptionist-pricing-what-should-a-business-pay-for": [
    { href: "/pricing", label: "AI Receptionist Pricing" },
    { href: "/services", label: "All Services" },
  ],
  "ai-receptionist-vs-hiring-a-receptionist": [
    { href: "/services/ai-call-answering", label: "AI Call Answering" },
    { href: "/services/after-hours-answering", label: "After-Hours Answering" },
  ],
  "can-ai-answer-phone-calls-for-a-business": [
    { href: "/services/ai-call-answering", label: "AI Call Answering" },
    { href: "/services/appointment-booking", label: "Appointment Booking" },
  ],
  "how-to-set-up-ai-receptionist-without-annoying-your-customers": [
    { href: "/services/ai-call-answering", label: "AI Call Answering" },
    { href: "/services/lead-qualification", label: "Lead Qualification" },
  ],
  "what-happens-when-an-ai-receptionist-doesnt-know-an-answer": [
    { href: "/services/ai-call-answering", label: "AI Call Answering" },
    { href: "/services/lead-qualification", label: "Lead Qualification" },
  ],
  "how-to-turn-more-inbound-calls-into-booked-calls": [
    { href: "/services/appointment-booking", label: "Appointment Booking" },
    { href: "/services/lead-qualification", label: "Lead Qualification" },
    { href: "/services/ai-call-answering", label: "AI Call Answering" },
  ],
  "why-your-google-ads-get-calls-but-not-customers": [
    { href: "/services/paid-ad-campaigns", label: "Paid Ad Campaigns" },
    { href: "/services/ai-call-answering", label: "AI Call Answering" },
    { href: "/services/appointment-booking", label: "Appointment Booking" },
  ],
  "why-service-business-leads-go-cold-and-how-to-follow-up-faster": [
    { href: "/services/lead-generation-follow-up", label: "Lead Generation & Follow-Up" },
    { href: "/services/lead-qualification", label: "Lead Qualification" },
  ],
  "website-vs-landing-page-for-local-service-businesses": [
    { href: "/services/seo-websites", label: "SEO Websites" },
    { href: "/services/paid-ad-campaigns", label: "Paid Ad Campaigns" },
  ],
  "what-makes-a-service-business-website-actually-convert": [
    { href: "/services/seo-websites", label: "SEO Websites" },
    { href: "/services/lead-generation-follow-up", label: "Lead Generation & Follow-Up" },
  ],
  "local-seo-for-service-businesses-what-actually-matters": [
    { href: "/services/seo-websites", label: "SEO Websites" },
    { href: "/services/lead-generation-follow-up", label: "Lead Generation & Follow-Up" },
  ],
  "google-ads-vs-local-seo-for-service-businesses": [
    { href: "/services/paid-ad-campaigns", label: "Paid Ad Campaigns" },
    { href: "/services/seo-websites", label: "SEO Websites" },
  ],
};

const relatedBySlug: Record<string, string[]> = {
  "what-is-an-ai-receptionist": ["can-ai-answer-phone-calls-for-a-business", "how-to-set-up-ai-receptionist-without-annoying-your-customers", "ai-receptionist-for-small-business-is-it-worth-it"],
  "ai-call-answering-how-it-works-for-service-businesses": ["what-is-an-ai-receptionist", "stop-missing-business-calls", "after-hours-answering-service"],
  "what-is-an-ai-call-center": ["ai-call-answering-how-it-works-for-service-businesses", "stop-missing-business-calls", "ai-receptionist-vs-answering-service"],
  "ai-receptionist-vs-answering-service": ["ai-receptionist-vs-hiring-a-receptionist", "ai-receptionist-pricing-what-should-a-business-pay-for", "what-is-an-ai-receptionist"],
  "stop-missing-business-calls": ["ai-call-answering-how-it-works-for-service-businesses", "after-hours-answering-service", "how-to-turn-more-inbound-calls-into-booked-calls"],
  "ai-appointment-scheduling": ["how-to-turn-more-inbound-calls-into-booked-calls", "ai-lead-qualification", "ai-receptionist-for-small-business-is-it-worth-it"],
  "ai-lead-qualification": ["ai-lead-generation-for-service-businesses", "ai-follow-up-with-leads-without-sounding-robotic", "how-to-turn-more-inbound-calls-into-booked-calls"],
  "after-hours-answering-service": ["stop-missing-business-calls", "ai-receptionist-for-plumbers", "ai-receptionist-for-hvac-companies"],
  "ai-lead-generation-for-service-businesses": ["ai-lead-qualification", "ai-follow-up-with-leads-without-sounding-robotic", "why-service-business-leads-go-cold-and-how-to-follow-up-faster"],
  "ai-receptionist-for-small-business-is-it-worth-it": ["what-is-an-ai-receptionist", "ai-receptionist-pricing-what-should-a-business-pay-for", "ai-receptionist-vs-hiring-a-receptionist"],
  "ai-follow-up-with-leads-without-sounding-robotic": ["why-service-business-leads-go-cold-and-how-to-follow-up-faster", "ai-lead-generation-for-service-businesses", "ai-lead-qualification"],
  "ai-receptionist-for-plumbers": ["after-hours-answering-service", "ai-appointment-scheduling", "ai-receptionist-for-hvac-companies"],
  "ai-receptionist-for-hvac-companies": ["after-hours-answering-service", "ai-appointment-scheduling", "ai-receptionist-for-roofing-companies"],
  "ai-receptionist-for-roofing-companies": ["ai-lead-qualification", "ai-appointment-scheduling", "ai-receptionist-for-plumbers"],
  "ai-receptionist-pricing-what-should-a-business-pay-for": ["ai-receptionist-vs-hiring-a-receptionist", "ai-receptionist-vs-answering-service", "ai-receptionist-for-small-business-is-it-worth-it"],
  "ai-receptionist-vs-hiring-a-receptionist": ["ai-receptionist-pricing-what-should-a-business-pay-for", "ai-receptionist-vs-answering-service", "ai-receptionist-for-small-business-is-it-worth-it"],
  "can-ai-answer-phone-calls-for-a-business": ["what-is-an-ai-receptionist", "what-happens-when-an-ai-receptionist-doesnt-know-an-answer", "how-to-set-up-ai-receptionist-without-annoying-your-customers"],
  "how-to-set-up-ai-receptionist-without-annoying-your-customers": ["what-happens-when-an-ai-receptionist-doesnt-know-an-answer", "can-ai-answer-phone-calls-for-a-business", "ai-lead-qualification"],
  "what-happens-when-an-ai-receptionist-doesnt-know-an-answer": ["how-to-set-up-ai-receptionist-without-annoying-your-customers", "can-ai-answer-phone-calls-for-a-business", "what-is-an-ai-receptionist"],
  "how-to-turn-more-inbound-calls-into-booked-calls": ["stop-missing-business-calls", "ai-appointment-scheduling", "why-your-google-ads-get-calls-but-not-customers"],
  "why-your-google-ads-get-calls-but-not-customers": ["google-ads-vs-local-seo-for-service-businesses", "how-to-turn-more-inbound-calls-into-booked-calls", "what-makes-a-service-business-website-actually-convert"],
  "why-service-business-leads-go-cold-and-how-to-follow-up-faster": ["ai-follow-up-with-leads-without-sounding-robotic", "ai-lead-generation-for-service-businesses", "how-to-turn-more-inbound-calls-into-booked-calls"],
  "website-vs-landing-page-for-local-service-businesses": ["what-makes-a-service-business-website-actually-convert", "local-seo-for-service-businesses-what-actually-matters", "google-ads-vs-local-seo-for-service-businesses"],
  "what-makes-a-service-business-website-actually-convert": ["website-vs-landing-page-for-local-service-businesses", "local-seo-for-service-businesses-what-actually-matters", "why-your-google-ads-get-calls-but-not-customers"],
  "local-seo-for-service-businesses-what-actually-matters": ["website-vs-landing-page-for-local-service-businesses", "what-makes-a-service-business-website-actually-convert", "google-ads-vs-local-seo-for-service-businesses"],
  "google-ads-vs-local-seo-for-service-businesses": ["local-seo-for-service-businesses-what-actually-matters", "why-your-google-ads-get-calls-but-not-customers", "website-vs-landing-page-for-local-service-businesses"],
};

export function getServiceLinks(slug: string): InternalLink[] {
  return serviceBySlug[slug] ?? [{ href: "/services", label: "Explore Virtual Agent AI services" }];
}

export function getRelatedBlogSlugs(slug: string, fallback: string[]): string[] {
  return relatedBySlug[slug] ?? fallback;
}
