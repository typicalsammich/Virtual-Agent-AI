import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteChrome";
import { SiteFooter } from "../components/SiteFooter";

const siteUrl = "https://virtual-agent-ai.typical-sammich.chatgpt.site";

export const metadata: Metadata = {
  title: "About Our Managed AI Receptionist Service",
  description: "Meet Virtual Agent AI, a Menifee-based team building managed AI receptionist systems for service businesses across the United States.",
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: { type: "website", url: `${siteUrl}/about`, title: "About Virtual Agent AI", description: "Managed AI call answering built around real service business workflows.", siteName: "Virtual Agent AI" },
};

const principles = [
  {
    title: "Sound like the business",
    text: "Every greeting, question, and handoff is shaped around how your team actually works, not a generic call-center script.",
  },
  {
    title: "Finish the next step",
    text: "A good conversation should end with progress: a qualified lead, a booked appointment, or a clear route to the right person.",
  },
  {
    title: "Make the system visible",
    text: "Calls, details, and outcomes stay organized so your team can see what happened and act without chasing context.",
  },
  {
    title: "Keep people at the center",
    text: "The technology works quietly in the background. Customers should feel heard, helped, and confident about what happens next.",
  },
];

export default function About() {
  return <>
    <SiteHeader />
    <main className="aboutPage">
      <section className="aboutHero">
        <div className="aboutHeroCopy">
          <p className="eyebrow">ABOUT VIRTUAL AGENT AI</p>
          <h1>Built for the moments your business can’t <em>afford to miss.</em></h1>
          <p className="aboutHeroLead">We help service businesses build an AI Agent that turns incoming calls into clear next steps, without asking a busy team to be everywhere at once.</p>
          <div className="aboutHeroActions">
            <a className="button" href="https://calendar.app.google/SDQkfwQwqctAsQd7A">See the AI in action <span>↗</span></a>
            <a className="aboutTextLink" href="/services">Explore our services <span>→</span></a>
          </div>
        </div>

        <aside className="aboutStandard" aria-label="Our service standard">
          <div className="aboutStandardMeta">
            <span>OUR STANDARD</span>
            <b><i /> AVAILABLE 24/7</b>
          </div>
          <blockquote>“A customer should never have to call twice just to be heard.”</blockquote>
          <p>That belief shapes the whole system, from the first hello to qualification, booking, routing, and follow-up.</p>
          <div className="aboutStandardFacts">
            <div><strong>24/7</strong><span>Response coverage</span></div>
            <div><strong>1</strong><span>Connected workflow</span></div>
            <div><strong>0</strong><span>Generic scripts</span></div>
          </div>
        </aside>
      </section>

      <section className="aboutStory">
        <div className="aboutStoryLead">
          <p className="eyebrow">WHY WE EXIST</p>
          <h2>The problem wasn’t a lack of demand. It was what happened after the phone rang.</h2>
        </div>
        <div className="aboutStoryBody">
          <p>For a service business, a phone call is rarely just a phone call. It can be an urgent repair, a new client, a time-sensitive question, or the beginning of a long-term customer relationship.</p>
          <p>But the people best equipped to help are often already doing the work. They are with a customer, on a job site, or focused on the next deadline. When nobody answers, the opportunity does not wait.</p>
          <p>Virtual Agent AI was built to close that gap. We create a managed response system that answers professionally, understands what the caller needs, and moves the conversation toward a real business outcome.</p>
        </div>
        <div className="aboutStoryRule">
          <span>THE IDEA IS SIMPLE</span>
          <strong>Answer faster. Understand the need. Complete the next step.</strong>
        </div>
      </section>

      <section className="aboutPrinciples">
        <div className="aboutPrinciplesIntro">
          <p className="eyebrow">HOW WE WORK</p>
          <h2>Technology should make the business feel more responsive, not less human.</h2>
          <p>We judge the work by the experience it creates for the caller and the clarity it gives the team behind the scenes.</p>
        </div>
        <div className="principleList">
          {principles.map((principle, index) => <article key={principle.title}>
            <span>0{index + 1}</span>
            <div>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </div>
          </article>)}
        </div>
      </section>

      <section className="aboutReach">
        <div className="aboutReachHeading">
          <p className="eyebrow">LOCAL ROOTS. NATIONAL REACH.</p>
          <h2>Based in Menifee.<br />Built for businesses nationwide.</h2>
          <p>We work with high-value service teams that depend on speed, trust, and a complete handoff to win the customer.</p>
        </div>
        <div className="aboutReachFacts">
          <div><small>HOME BASE</small><strong>Menifee, California</strong></div>
          <div><small>SERVICE AREA</small><strong>Businesses nationwide</strong></div>
          <div><small>TRUST</small><strong>BBB Accredited · A− Rating</strong></div>
        </div>
        <div className="aboutIndustries">
          <span>BUILT AROUND REAL-WORLD CALLS</span>
          <div><b>Home services</b><b>Law firms</b><b>Mortgage &amp; finance</b><b>Healthcare</b><b>Automotive</b><b>Professional services</b></div>
        </div>
      </section>

      <section className="aboutCta">
        <p className="eyebrow">A BETTER FIRST RESPONSE STARTS HERE</p>
        <h2>Bring us your hardest call scenario.</h2>
        <p>We’ll show you how Virtual Agent AI can answer it, qualify it, and move it forward in a live walkthrough built around your business.</p>
        <div>
          <a className="button" href="https://calendar.app.google/SDQkfwQwqctAsQd7A">Book a live demo <span>↗</span></a>
          <a href="tel:7146955646">Call the AI <span>→</span></a>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
