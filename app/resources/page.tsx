import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteChrome";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "AI Receptionist Guides & Resources",
  description: "Plain-English guides to AI receptionist setup, pricing, call handling, appointment booking, transfers, comparisons, and 24/7 business answering.",
  alternates: { canonical: "https://www.virtualagentai.org/resources" },
  openGraph: { type: "website", url: "https://www.virtualagentai.org/resources", title: "AI Receptionist Guides & Resources | Virtual Agent AI", description: "Learn how AI receptionists work, what they cost, and how businesses use them to answer and route calls.", images: ["/og-image.png"] },
};
const cards = [
  ["START HERE","How an AI Receptionist Works","A step-by-step explanation of what happens when a customer calls, from greeting through booking, transfer, or message capture.","/blog/how-does-an-ai-receptionist-work"],
  ["PRICING","AI Receptionist Cost in 2026","Understand the factors that affect AI receptionist pricing and what to compare before choosing a service.","/blog/how-much-does-ai-receptionist-cost-2026"],
  ["BUYER GUIDE","Best AI Receptionist for Small Business","A practical framework for evaluating call quality, setup, booking, routing, integrations, and support.","/blog/best-ai-receptionist-for-small-business"],
  ["COMPARISON","AI Receptionist vs Human Receptionist","Compare availability, consistency, flexibility, handoffs, and where human staff still make sense.","/blog/ai-receptionist-vs-human-receptionist"],
  ["COMPARISON","AI Receptionist vs Answering Service","See how AI call handling differs from a traditional answering service and what each model is designed to do.","/blog/ai-receptionist-vs-answering-service"],
  ["APPOINTMENTS","Can an AI Receptionist Book Appointments?","Learn how scheduling can work during the call and what information the AI needs to book accurately.","/blog/can-ai-receptionist-book-appointments"],
  ["CALL ROUTING","Can an AI Receptionist Transfer Calls?","See how transfer rules can route urgent, qualified, or high-value callers to the right person.","/blog/can-ai-receptionist-transfer-calls"],
  ["24/7 COVERAGE","AI Receptionist for 24/7 Businesses","How around-the-clock answering can handle after-hours inquiries without sending every caller to voicemail.","/blog/ai-receptionist-for-24-7-businesses"],
];
export default function Resources(){return <><SiteHeader/><main className="resourcePage"><section className="resourceHero"><p className="eyebrow">GUIDES &amp; RESOURCES</p><h1>Understand the system before you buy it.</h1><p>Clear answers about how AI receptionists work, what they can handle, what they cost, and how to decide whether one fits your business. No technical background required.</p></section><h2 className="resourceSectionTitle" id="setup">Start with the questions that matter.</h2><section className="resourceGrid">{cards.map(([tag,title,desc,href])=><a className="resourceCard" href={href} key={href}><small>{tag}</small><h2>{title}</h2><p>{desc}</p><b>Read guide →</b></a>)}</section></main><SiteFooter/></>}
