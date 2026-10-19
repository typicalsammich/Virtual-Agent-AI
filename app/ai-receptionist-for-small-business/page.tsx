import type { Metadata } from "next";
import { SeoLandingPage, type SeoLandingData } from "../components/SeoLandingPage";

const siteUrl = "https://www.virtualagentai.org";
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
  intro: "Small-business owners rarely have the luxury of answering every call. Virtual Agent AI helps you respond when you are with a customer, on a job, or finished for the day\u2014without pretending every business has the same phone workflow.",
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
    {"question": "Is an AI receptionist worth it if we do not get many calls?", "answer": "It depends on how valuable the missed opportunities are and what your current answering process costs. Start by tracking missed calls and whether a faster response would change the outcome."},
    {"question": "Do I need to replace my existing phone number?", "answer": "Usually not. Many setups can work through forwarding or call routing, depending on your provider. We would confirm compatibility before making changes."},
    {"question": "Can I choose which calls reach me directly?", "answer": "Yes. You can set rules for urgent callers, VIP customers, certain services, or times of day, subject to your phone setup."},
    {"question": "What if the AI does not know an answer?", "answer": "It should say it cannot confirm, collect the question, and send it to your team rather than inventing information."}
  ],
  related: [{ href: "/services/ai-call-answering", label: "AI call answering" }, { href: "/services/appointment-booking", label: "Appointment booking" }, { href: "/ai-answering-service-for-home-services", label: "Home service answering" }],
};

export default function Page() { return <SeoLandingPage data={data} />; }
