import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteChrome";
import { SiteFooter } from "../components/SiteFooter";

const siteUrl = "https://www.virtualagentai.org";

export const metadata: Metadata = {
  title: "Our Story | About Virtual Agent AI",
  description: "Discover the family-owned story behind Virtual Agent AI, built from firsthand business experience to help owners reclaim time and never miss an opportunity.",
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: { type: "website", url: `${siteUrl}/about`, title: "About Virtual Agent AI", description: "Built from experience. Designed to give business owners their time back.", siteName: "Virtual Agent AI" },
};

export default function About() {
  return <>
    <SiteHeader />
    <main className="aboutPage">
      <section className="aboutHero">
        <div className="aboutHeroCopy">
          <p className="eyebrow">ABOUT VIRTUAL AGENT AI</p>
          <h1>Built From Experience. <em>Designed to Give You Time Back.</em></h1>
          <p className="aboutHeroLead">Virtual Agent AI was built from firsthand experience running a business.</p>
          <div className="aboutHeroActions">
            <a className="button" href="/#contact">See the AI in action <span></span></a>
            <a className="aboutTextLink" href="/services">Explore our services <span></span></a>
          </div>
        </div>

        <aside className="aboutStandard" aria-label="Our service standard">
          <div className="aboutStandardMeta">
            <span>WHAT DRIVES US</span>
            <b><i /> AVAILABLE 24/7</b>
          </div>
          <blockquote>“We built the kind of solution we wished we had.”</blockquote>
          <p>We understand the challenges of running a business because we’ve experienced them ourselves.</p>
          <div className="aboutStandardFacts">
            <div><strong>24/7</strong><span>Response coverage</span></div>
            <div><strong>Family</strong><span>Owned business</span></div>
            <div><strong>More</strong><span>Time for your work</span></div>
          </div>
        </aside>
      </section>

      <section className="aboutStory">
        <div className="aboutStoryLead">
          <p className="eyebrow">OUR STORY</p>
          <h2>We know what it takes to run a business because we’ve lived it.</h2>
        </div>
        <div className="aboutStoryBody">
          <p>Our founder grew up working alongside his father, stepping into the business at just 14 years old. After college, he returned to continue building alongside his family, eventually bringing his fiancée into the business as well. Through years of hard work, discipline, and consistency, one thing became clear: running a successful business requires more than doing the work. It requires time, attention, and constant communication with clients.</p>
          <p>And too much of that time was being lost to the phone.</p>
          <p>Calls interrupted important work. Clients needed updates. Questions that could have been answered automatically took time away from the tasks that mattered most. Hiring additional staff or outsourcing calls came with significant costs, and the available solutions didn’t solve the problem the way we believed they should.</p>
          <p>So we set out to build a better solution.</p>
        </div>
        <div className="aboutStoryRule">
          <span>WHY WE BUILT IT</span>
          <strong>More time for the work that matters most.</strong>
        </div>
      </section>

      <section className="aboutPrinciples">
        <div className="aboutPrinciplesIntro">
          <p className="eyebrow">OUR PURPOSE</p>
          <h2>Built to help business owners reclaim their time.</h2>
          <p>Virtual Agent AI was created to help businesses take control of their calls, capture more opportunities, and reclaim valuable time without the unnecessary overhead.</p>
        </div>
        <div className="principleList">
          <article>
            <span>01</span>
            <div>
              <h3>We understand the challenge</h3>
              <p>We understand these challenges because we’ve experienced them ourselves. Our mission is to help business owners spend less time managing incoming calls and more time serving their customers, growing their businesses, and doing what they do best.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Family-owned, built on experience</h3>
              <p>We’re a family-owned business built on experience, hard work, and a commitment to finding better ways to work. We believe technology should make business simpler, communication smoother, and time more valuable.</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Time back where it belongs</h3>
              <p>We built the kind of solution we wished we had. Now, we’re here to help you put your time back where it belongs.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="aboutReach">
        <div className="aboutReachHeading">
          <p className="eyebrow">LOCAL ROOTS. NATIONAL REACH.</p>
          <h2>One expert team.<br />Built for businesses nationwide.</h2>
          <p>We work with high-value service teams that depend on speed, trust, and a complete handoff to win the customer.</p>
        </div>
        <div className="aboutReachFacts">
          <div><small>SERVICE AREA</small><strong>Businesses across the United States</strong></div>
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
          <a className="button" href="/#contact">Book a live demo <span></span></a>
          <a href="tel:7146955646">Call the AI <span></span></a>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
