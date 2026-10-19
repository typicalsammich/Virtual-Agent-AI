import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '../components/SiteChrome';
import { SiteFooter } from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'AI Receptionist Questions & Buyer Concerns | Virtual Agent AI',
  description: 'Straight answers about AI receptionist accuracy, human handoffs, phone numbers, integrations, caller disclosure, privacy, pricing and contracts.',
  alternates: { canonical: 'https://www.virtualagentai.org/ai-receptionist-buyer-guide' }
};

const concerns = [
  {q:'Will my customers know they are speaking with AI?', a:'Your greeting can clearly identify the receptionist as AI. We recommend agreeing on disclosure wording before launch, especially where call recording or automated-call rules may apply. Your business remains responsible for any notices or consents required in its locations.'},
  {q:'What happens if the AI misunderstands someone or makes a mistake?', a:'No AI system is error-free. We define approved answers, what information it may collect, and when it should take a message or transfer to a person. We recommend testing real scenarios before launch and reviewing early calls to refine the workflow. It should not invent prices, availability, diagnoses, or guarantees.'},
  {q:'Can I keep my existing business phone number?', a:'Often, businesses can route calls from their existing number using call forwarding. The exact options depend on your carrier and phone setup. We review your current number and preferred call flow before recommending a configuration; a number transfer is not assumed or required in every setup.'},
  {q:'Will it work with my calendar, CRM, or scheduling software?', a:'That depends on the software, account permissions, and available integrations. Some workflows can book or update records directly; others work best by sending a structured lead summary for your team to handle. We confirm compatibility and test the proposed workflow before promising automatic scheduling or syncing.'},
  {q:'How is customer information handled?', a:'We start by limiting intake to information your team actually needs, agreeing on who receives call details, and reviewing the services involved in storing or transmitting them. Data handling, retention, recording, and access depend on your final configuration and applicable agreements. Do not assume that a setup is suitable for sensitive or regulated data until its requirements have been reviewed.'},
  {q:'Am I locked into a long-term contract?', a:'Contract length, cancellation terms, setup costs, and any usage limits should be confirmed in your written proposal or service agreement. We do not want to imply a month-to-month arrangement or a cancellation policy that has not been agreed in writing.'},
  {q:'Can the AI transfer urgent or complicated calls to a real person?', a:'Yes, when a transfer destination and escalation rules are configured. If no one is available, the fallback can be a message or notification rather than a promise that a person will answer immediately. We map these cases during setup.'},
  {q:'Will it sound generic or give the wrong answers about my business?', a:'The script can be built around your services, service areas, hours, approved answers, and preferred tone. You can bring common caller scenarios to a demo. We recommend testing unusual requests and defining when the AI should stop and refer the caller to your team.'},
  {q:'How much does it cost, and what is included?', a:'Pricing varies with call volume, coverage, and workflow complexity. The estimator provides a starting range, not a binding quote. Ask for a written breakdown of setup, monthly fees, included usage, integrations, and any additional charges before agreeing.'}
];
export default function BuyerGuide(){
return <><SiteHeader/><main className="buyerGuide">
<section className="buyerGuideHero"><p className="eyebrow">BEFORE YOU CHOOSE AN AI RECEPTIONIST</p><h1>Good questions deserve straight answers.</h1><p>What happens when a call goes wrong? Can you keep your number? Will it work with your tools? Here is what to ask before you commit to an AI phone answering service.</p><div className="buyerGuideActions"><Link className="button" href="/demo">Hear a real call example</Link><Link className="outline" href="/pricing">Explore pricing</Link></div></section>
<section className="buyerGuideGrid" aria-label="Common buyer concerns">{concerns.map((item,i)=><article className="buyerGuideItem" key={item.q}><span className="buyerGuideNum">{String(i+1).padStart(2,'0')}</span><div><h2>{item.q}</h2><p>{item.a}</p></div></article>)}</section>
<section className="buyerGuideClose"><p className="eyebrow">SEE YOUR OWN CALL FLOW</p><h2>Bring the questions your callers actually ask.</h2><p>We'll walk through your existing phone setup, tools, escalation rules, and the edge cases you care about before recommending a workflow.</p><Link className="button" href="/demo">Book a tailored walkthrough</Link></section>
</main><SiteFooter/></>;
}
