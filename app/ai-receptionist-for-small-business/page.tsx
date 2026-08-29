import type { Metadata } from "next";
import { SeoLandingPage, type SeoLandingData } from "../components/SeoLandingPage";

const siteUrl = "https://virtual-agent-ai.typical-sammich.chatgpt.site";
export const metadata: Metadata = {
  title: "AI Receptionist for Small Business Calls",
  description: "Answer every business call 24/7 with an AI receptionist that qualifies leads, books appointments, routes callers, and sends instant summaries.",
  alternates: { canonical: `${siteUrl}/ai-receptionist-for-small-business` },
  openGraph: { type: "website", url: `${siteUrl}/ai-receptionist-for-small-business`, title: "AI Receptionist for Small Business Calls", description: "A managed AI receptionist for small businesses that cannot afford to miss valuable calls.", siteName: "Virtual Agent AI" },
};

const data: SeoLandingData = {
  path: "/ai-receptionist-for-small-business",
  eyebrow: "AI RECEPTIONIST FOR SMALL BUSINESS",
  title: "Answer every call without adding another person to the front desk.",
  intro: "Virtual Agent AI gives small businesses reliable 24/7 call coverage. It answers in a natural voice, uses your approved business information, qualifies new opportunities, schedules the right next step, and keeps your team informed.",
  promise: "More callers helped, more qualified leads captured, and fewer opportunities lost to voicemail.",
  serviceType: "AI Receptionist for Small Business",
  benefits: [
    { title: "Answer calls around the clock", text: "Give new and existing customers an immediate response during busy hours, nights, weekends, holidays, and unexpected call spikes." },
    { title: "Complete useful work during the call", text: "Move beyond message taking with lead intake, appointment scheduling, common question handling, transfers, and clear next steps." },
    { title: "Support the team you already have", text: "Reduce repetitive interruptions while giving staff structured summaries and the context needed to take over when human help is required." },
  ],
  sectionTitle: "A phone response system built around your real workflow.",
  sectionIntro: "The receptionist is configured around your services, hours, service areas, qualification rules, calendars, and escalation preferences. The goal is a completed outcome, not simply an answered call.",
  steps: [
    { title: "Learn the business", text: "We organize the approved answers, call types, terminology, availability, and rules the receptionist needs." },
    { title: "Map the conversation", text: "Each call path defines what to ask, what the AI may complete, and when a person should take over." },
    { title: "Test real scenarios", text: "Common calls, edge cases, interruptions, and urgent requests are tested before the system goes live." },
    { title: "Review and improve", text: "Call outcomes and team feedback guide focused updates as the business, schedule, and customer needs change." },
  ],
  fitTitle: "Built for small teams where every new customer matters.",
  fitText: "The strongest fit is a business that depends on inbound calls but cannot keep an employee available every minute of the day.",
  fitPoints: ["High-value services or appointments", "Frequent missed calls or voicemail", "Repetitive intake and scheduling questions", "After-hours or weekend demand", "A need for consistent lead qualification", "Clear rules for urgent call routing"],
  faqs: [
    { question: "What can an AI receptionist do for a small business?", answer: "It can answer incoming calls, explain approved services, collect caller details, qualify leads, schedule appointments, route urgent requests, transfer calls, and send structured summaries to the team." },
    { question: "Can it use my existing business phone number?", answer: "The final setup depends on your phone provider and preferred call flow. Many businesses forward all calls, overflow calls, or after-hours calls to the AI receptionist." },
    { question: "Will it sound like a generic phone bot?", answer: "The greeting, tone, business knowledge, questions, and vocabulary are configured for your company. A good implementation also defines when the system should stop and involve a person." },
    { question: "How is pricing determined?", answer: "Pricing is based on call volume, coverage hours, workflow complexity, and any calendars, notifications, transfers, or integrations included in the system." },
  ],
  related: [{ href: "/services/ai-call-answering", label: "AI call answering" }, { href: "/services/appointment-booking", label: "Appointment booking" }, { href: "/ai-answering-service-for-home-services", label: "Home service answering" }],
};

export default function Page() { return <SeoLandingPage data={data} />; }
