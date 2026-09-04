import { SiteHeader } from "../components/SiteChrome";
import { SiteFooter } from "../components/SiteFooter";
import { IndustryFocus } from "./IndustryFocus";

export default function Services() {
  return <><SiteHeader/><main className="servicesPage">
    <section className="servicesHero">
      <div className="servicesHeroMain">
        <div className="servicesHeroCopy">
          <p className="eyebrow">AI RECEPTION BUILT FOR REVENUE</p>
          <h1>Every call answered.<br />Every opportunity<br /><em>moved forward.</em></h1>
          <p className="servicesHeroLead">Our managed AI receptionist service uses a business-specific AI Agent to handle the conversations that turn interest into business. It answers naturally, qualifies accurately, and completes the right next step without adding staff.</p>
          <div className="servicesHeroActions"><a className="button" href="/#contact">See it handle your calls <span>↗</span></a><a className="servicesHeroCall" href="tel:7146955646">Call the AI <span>→</span></a></div>
          <div className="servicesHeroProof"><span><b>24/7</b> live coverage</span><span><b>&lt;30 sec</b> response</span><span><b>Fully managed</b> setup</span></div>
        </div>

        <aside className="servicesFeature" aria-label="AI call handling overview">
          <div className="servicesFeatureMeta"><span>CORE SERVICE</span><b><i /> AVAILABLE NOW</b></div>
          <h2>AI Call Handling</h2>
          <p>A professional first response that sounds like your business and knows what should happen next.</p>
          <ul><li><span>Answer</span> Calls, questions, and after-hours inquiries</li><li><span>Qualify</span> Intent, urgency, fit, and key details</li><li><span>Convert</span> Bookings, transfers, and clear follow-up</li></ul>
          <div className="servicesFeatureOutcome"><small>BUILT TO DELIVER</small><strong>More booked work.<br />Less missed revenue.</strong></div>
        </aside>
      </div>

      <IndustryFocus />
    </section>

    <section className="serviceSystem">
      <div className="serviceSectionIntro"><p className="eyebrow">THE AI REVENUE RECEPTIONIST</p><h2>One system from first ring<br />to the right next step.</h2><p>Call handling is only valuable when it moves the customer forward. Every part of the system is configured around your team’s real workflow.</p></div>
      <div className="systemRows">
        <ServiceRow n="01" href="/services/ai-call-answering" title="Answer" description="A natural, on-brand first response whenever your team is unavailable." features={["Inbound call coverage", "After-hours answering", "Custom greetings and FAQs"]}/>
        <ServiceRow n="02" href="/services/lead-qualification" title="Qualify" description="The right questions asked in the right order, without adding work for staff." features={["Custom intake", "Urgency and intent", "Lead routing rules"]}/>
        <ServiceRow n="03" href="/services/appointment-booking" title="Convert" description="Qualified conversations turned into appointments, transfers, and clear next steps." features={["Calendar booking", "Live transfers", "Instant team summaries"]}/>
        <ServiceRow n="04" href="/services/after-hours-answering" title="Follow up" description="Consistent communication that keeps valuable inquiries from going cold." features={["Missed-call recovery", "Lead follow-up", "Status notifications"]}/>
      </div>
    </section>

    <section className="implementation">
      <div className="implementationIntro"><p className="eyebrow">MANAGED FROM DAY ONE</p><h2>Built around your business.<br />Not handed to you as software.</h2></div>
      <div className="implementationTrack">
        <ProcessStep n="01" title="Map the workflow" text="We learn how your team answers, qualifies, schedules, and escalates calls."/>
        <ProcessStep n="02" title="Build the system" text="Your knowledge, scripts, routing rules, calendar, and integrations are configured."/>
        <ProcessStep n="03" title="Test real scenarios" text="We pressure-test common questions, urgent calls, edge cases, and handoffs."/>
        <ProcessStep n="04" title="Launch and improve" text="We monitor conversations and refine the system as your business evolves."/>
      </div>
    </section>

    <section className="growthServices">
      <div className="growthStage">
        <aside className="growthStatement">
          <p className="eyebrow">BEYOND THE FIRST CALL</p>
          <h2>Build the system around the conversation.</h2>
          <p>Once every inquiry gets a fast response, we can help strengthen the channels that create demand and keep prospects moving.</p>
          <a href="/#contact">Talk through your growth plan <span>↗</span></a>
        </aside>

        <div className="growthPortfolio">
          <GrowthPanel className="growthPanelPrimary" label="PIPELINE" title="Lead Generation & Follow-Up" text="Create a steadier flow of opportunities, then keep each one moving with coordinated phone, text, and email follow-up." outcome="More qualified conversations" detail="OUTREACH · NURTURE · REACTIVATION"/>
          <GrowthPanel label="DEMAND" title="Social & Paid Campaigns" text="Turn clear offers into managed campaigns built to reach the right local customers." outcome="More targeted inquiries" detail="CONTENT · PAID MEDIA · REPORTING"/>
          <GrowthPanel label="FOUNDATION" title="SEO Websites" text="Give prospects a faster, clearer path from search to contact with stronger local visibility." outcome="More discoverable online" detail="WEB · LOCAL SEO · CONVERSION"/>
        </div>
      </div>
    </section>

    <section className="servicesCta"><p className="eyebrow">SEE YOUR WORKFLOW IN ACTION</p><h2>Bring us one real call scenario.<br />We’ll show you how the AI handles it.</h2><p>No generic script. Your services, your questions, your routing, and your customer experience.</p><div><a className="button" href="/#contact">Book a tailored demo <span>↗</span></a><a href="tel:7146955646">(714) 695-5646</a></div></section>
  </main><SiteFooter/></>;
}

function ServiceRow({n, href, title, description, features}:{n:string;href:string;title:string;description:string;features:string[]}) { return <article className="systemRow"><span>{n}</span><h3><a href={href}>{title} <b>↗</b></a></h3><p>{description}</p><div>{features.map(feature => <small key={feature}>✓ {feature}</small>)}</div></article>; }
function ProcessStep({n, title, text}:{n:string;title:string;text:string}) { return <article className="processStep"><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>; }
function GrowthPanel({className="", label, title, text, outcome, detail}:{className?:string;label:string;title:string;text:string;outcome:string;detail:string}) { return <a className={`growthPanel ${className}`} href="/#contact"><div className="growthPanelTop"><span>{label}</span><b>↗</b></div><h3>{title}</h3><p>{text}</p><div className="growthPanelBottom"><small>{detail}</small><strong><i>✓</i>{outcome}</strong></div></a>; }
