import type { Metadata } from "next";
import { SeoLandingPage, type SeoLandingData } from "../components/SeoLandingPage";

const siteUrl = "https://virtualagentai.org";
export const metadata: Metadata = {
  title: "AI Answering Service for Home Services",
  description: "24/7 AI answering for HVAC, plumbing, roofing, restoration, electrical, and other home service businesses. Capture jobs and route urgent calls.",
  alternates: { canonical: `${siteUrl}/ai-answering-service-for-home-services` },
  openGraph: { type: "website", url: `${siteUrl}/ai-answering-service-for-home-services`, title: "AI Answering Service for Home Service Businesses", description: "Answer urgent service calls, qualify the job, and book the right next step at any hour.", siteName: "Virtual Agent AI" },
};

const data: SeoLandingData = {
  path: "/ai-answering-service-for-home-services",
  eyebrow: "AI ANSWERING FOR HOME SERVICES",
  title: "Turn the call from a homeowner into a job your team can act on.",
  intro: "Virtual Agent AI provides 24/7 phone answering for HVAC, plumbing, roofing, electrical, restoration, cleaning, and other home service companies. It captures the issue, checks service fit, applies your urgency rules, and books or routes the call.",
  promise: "A faster first response for homeowners and better job information for dispatch, sales, and on-call teams.",
  serviceType: "AI Answering Service for Home Services",
  benefits: [
    { title: "Capture jobs while technicians are working", text: "Answer callers when the office is busy, the crew is on site, or the owner cannot safely stop to pick up the phone." },
    { title: "Separate emergencies from routine work", text: "Ask objective, company-approved questions so urgent calls reach the on-call path and routine requests reach eligible booking times." },
    { title: "Send dispatch-ready information", text: "Collect the caller, address, service type, issue, timing, urgency details, and preferred next step in one organized summary." },
  ],
  sectionTitle: "From the first ring to a clear service outcome.",
  sectionIntro: "A home service answering workflow should know more than a greeting. It needs service areas, job types, business hours, emergency definitions, booking rules, and the correct contact for each exception.",
  steps: [
    { title: "Identify the request", text: "Collect the service needed, property location, customer status, and a plain-language description of the problem." },
    { title: "Apply service and urgency rules", text: "Check whether the job is in scope and whether the caller describes a condition your business treats as urgent." },
    { title: "Book or route", text: "Offer an eligible appointment, create a priority callback, or transfer the call according to the approved workflow." },
    { title: "Update the team", text: "Deliver the details, call outcome, and required action to dispatch, sales, the owner, or the on-call technician." },
  ],
  fitTitle: "Useful for growing contractors and owner-operated service companies.",
  fitText: "The service can cover every call or act as overflow and after-hours support for an existing office team.",
  fitPoints: ["HVAC and air conditioning", "Plumbing and drain service", "Roofing and restoration", "Electrical and generator service", "Cleaning and property services", "Landscaping and exterior services"],
  faqs: [
    { question: "Can an AI answering service book home service appointments?", answer: "Yes. It can collect the required job details, apply service-area and availability rules, offer eligible times, and confirm the appointment while the caller is still engaged." },
    { question: "How does it handle an emergency service call?", answer: "Your business defines objective urgency questions and escalation paths. The AI can transfer, alert an on-call person, create a priority request, or direct life-safety emergencies to the appropriate public resource based on approved rules." },
    { question: "Can it work with dispatch software?", answer: "Integration options depend on the tools and workflow involved. The initial planning call identifies whether the next step belongs in a calendar, field-service platform, CRM, email, text alert, or live transfer." },
    { question: "Does it replace the office staff?", answer: "It is designed to support the team by covering repetitive and time-sensitive calls. Employees remain available for judgment-heavy, sensitive, and exception-based conversations." },
  ],
  related: [{ href: "/services/after-hours-answering", label: "After-hours answering" }, { href: "/services/appointment-booking", label: "Appointment booking" }, { href: "/blog/after-hours-answering-service", label: "After-hours playbook" }],
};
export default function Page() { return <SeoLandingPage data={data} />; }
