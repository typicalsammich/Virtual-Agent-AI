import type { Metadata } from "next";
import { SeoLandingPage, type SeoLandingData } from "../components/SeoLandingPage";

const siteUrl = "https://virtual-agent-ai.typical-sammich.chatgpt.site";
export const metadata: Metadata = {
  title: "AI Receptionist for Law Firms and Intake",
  description: "Give every potential client a professional 24/7 response with legal intake, lead qualification, consultation booking, and call routing.",
  alternates: { canonical: `${siteUrl}/ai-receptionist-for-law-firms` },
  openGraph: { type: "website", url: `${siteUrl}/ai-receptionist-for-law-firms`, title: "AI Receptionist for Law Firms and Legal Intake", description: "Professional legal intake and consultation scheduling when your team cannot answer.", siteName: "Virtual Agent AI" },
};

const data: SeoLandingData = {
  path: "/ai-receptionist-for-law-firms",
  eyebrow: "AI RECEPTIONIST FOR LAW FIRMS",
  title: "Give potential clients a professional first response at any hour.",
  intro: "Virtual Agent AI helps law firms answer inbound calls, complete approved new-client intake, identify practice-area fit, schedule consultations, and route time-sensitive matters without forcing attorneys or staff to interrupt active work.",
  promise: "More complete intake, faster consultation scheduling, and fewer potential clients lost when the office cannot answer.",
  serviceType: "AI Receptionist for Law Firms",
  benefits: [
    { title: "Respond before the potential client calls another firm", text: "Provide immediate, professional call coverage during meetings, court, lunch, evenings, weekends, and periods of heavy intake." },
    { title: "Collect consistent intake information", text: "Ask firm-approved questions about matter type, jurisdiction, timing, contact details, and other objective criteria without offering legal advice." },
    { title: "Route each matter to the right next step", text: "Schedule an eligible consultation, send a structured intake, transfer urgent calls, or create the correct follow-up task for staff review." },
  ],
  sectionTitle: "Legal intake rules belong to the firm, not the software.",
  sectionIntro: "The system follows the questions, disclosures, practice areas, jurisdictions, calendars, and escalation rules approved by your firm. Uncertain or sensitive matters can be routed to a person instead of being decided automatically.",
  steps: [
    { title: "Define eligible call types", text: "Identify the practice areas, locations, deadlines, and existing-client requests the receptionist may handle." },
    { title: "Build the intake flow", text: "Organize the minimum questions needed to understand the matter and select a safe next step." },
    { title: "Connect consultation rules", text: "Set which matters may schedule, which need staff review, and which calls require immediate transfer or escalation." },
    { title: "Review call quality", text: "Monitor accuracy, tone, completed intake, routing decisions, and the information delivered to the legal team." },
  ],
  fitTitle: "Built for firms where intake speed and consistency matter.",
  fitText: "AI reception is most useful for repeatable intake and routing. Attorneys and trained staff remain responsible for advice, representation decisions, conflicts, and high-consequence judgment.",
  fitPoints: ["New-client phone intake", "Consultation scheduling", "Practice-area qualification", "Existing-client routing", "After-hours call coverage", "Structured intake summaries"],
  faqs: [
    { question: "Can an AI receptionist provide legal advice?", answer: "It should not. The system should use approved firm information, collect intake details, and route the caller. Legal advice and representation decisions belong to qualified people at the firm." },
    { question: "Can it check conflicts?", answer: "A receptionist can collect the names and details required for a conflict review, but the firm should decide how and when the actual conflict check is performed before any representation is confirmed." },
    { question: "Can it schedule consultations?", answer: "Yes. The system can apply approved practice-area, jurisdiction, availability, and appointment rules before offering an eligible consultation time." },
    { question: "How are sensitive calls handled?", answer: "The firm defines which topics, deadlines, emotions, safety concerns, and existing-client issues require immediate human review or transfer." },
  ],
  related: [{ href: "/services/lead-qualification", label: "Lead qualification" }, { href: "/services/appointment-booking", label: "Consultation booking" }, { href: "/blog/ai-lead-qualification", label: "Qualification guide" }],
};
export default function Page() { return <SeoLandingPage data={data} />; }
