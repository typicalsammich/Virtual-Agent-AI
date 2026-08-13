import { SiteHeader } from "./components/SiteChrome";
import { SiteFooter } from "./components/SiteFooter";
import { RevenueCalculator } from "./components/RevenueCalculator";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">THE AI REVENUE RECEPTIONIST</p>
          <h1>Stop Losing Business to Missed Calls and Slow Follow-Up.</h1>
          <p className="lead">Virtual Agent AI is a managed 24/7 AI receptionist and phone answering service that qualifies leads, books appointments, routes urgent calls, and follows up without adding another front-desk employee.</p>
          <div className="heroActions">
            <a className="button" href="/demo">See the AI in Action <span>→</span></a>
            <a className="outline" href="https://calendar.app.google/SDQkfwQwqctAsQd7A">Book a Live Demo <span>→</span></a>
          </div>
          <p className="fine">The AI is the mechanism. Revenue recovery and business efficiency are the outcome.</p>
        </div>
        <CallPanel />
      </section>

      <section className="stats">
        <Stat value="24/7" label="Calls answered, every hour" />
        <Stat value="<30s" label="Average response time" />
        <Stat value="0" label="Calls missed" />
        <Stat value="$150+" label="Avg. opportunity value recovered" />
      </section>

      <RevenueCalculator />

      <section className="systems">
        <div className="systemsIntro">
          <p className="eyebrow">THE AI REVENUE RECEPTIONIST</p>
          <h2>A communication system, not just a chatbot.</h2>
          <p>Our virtual receptionist handles inbound calls, lead capture, scheduling, and routing while giving your staff the context needed for every follow-up.</p>
        </div>
        <div className="serviceGrid">
          <FeatureCard icon="phone" title="Answers Inbound Calls" problem="Calls ring out or hit voicemail when staff are busy or off-shift." outcome="Every call is answered consistently, 24/7, so opportunities stop slipping away." />
          <FeatureCard icon="target" title="Qualifies Leads" problem="Staff waste time on tire-kickers and answering the same questions." outcome="Captures service type, urgency, and budget before a human gets involved." />
          <FeatureCard icon="calendar" title="Books Appointments" problem="Back-and-forth scheduling delays and loses hot prospects." outcome="Turns inbound calls into scheduled appointments right on the call." />
          <FeatureCard icon="message" title="Follows Up Automatically" problem="Leads go cold when nobody follows up quickly or consistently." outcome="Stays in front of prospects automatically so valuable leads keep moving." />
          <FeatureCard icon="route" title="Escalates Important Calls" problem="Urgent or high-value calls can get lost in the noise." outcome="Hot leads and emergencies transfer instantly to you or your team." />
          <FeatureCard icon="bell" title="Notifies Your Team" problem="Owners and staff do not know what happened during a call." outcome="Every conversation is summarized and sent to the right people immediately." />
        </div>
        <nav className="homeSearchLinks" aria-label="Popular AI receptionist solutions">
          <a href="/ai-receptionist-for-small-business"><span>AI RECEPTIONIST</span><strong>For small businesses</strong><b>↗</b></a>
          <a href="/ai-answering-service-for-home-services"><span>AI ANSWERING</span><strong>For home services</strong><b>↗</b></a>
          <a href="/ai-receptionist-for-law-firms"><span>LEGAL INTAKE</span><strong>For law firms</strong><b>↗</b></a>
          <a href="/services/after-hours-answering"><span>24/7 COVERAGE</span><strong>After-hours answering</strong><b>↗</b></a>
        </nav>
      </section>

      <section className="reviews">
        <div className="reviewsIntro">
          <div>
            <p className="eyebrow">CUSTOMER RESULTS</p>
            <h2>Trusted where every call matters.</h2>
          </div>
          <div className="ratingSummary">
            <strong>5.0</strong>
            <div><span>★★★★★</span><small>Customer feedback</small></div>
          </div>
        </div>
        <div className="reviewGrid">
          <ReviewCard initials="XM" quote="Great service. Saving me a ton of cash with minimal hassle." name="Xavier Marshall" role="Business Owner" />
          <ReviewCard initials="SC" quote="Great team, great system. Wish I started sooner." name="Squeakie Cleaning Services" role="Cleaning Business" />
          <ReviewCard initials="LS" quote="The 24/7 calling support has been a game changer. We never miss leads anymore." name="Local Service Pro" role="Home Services" />
        </div>
        <a className="googleReviews" href="https://www.google.com/maps?cid=0x41aac8fe32c01059:0xeaf9d3f5cde90090" target="_blank" rel="noreferrer">
          <span className="googleMark">G</span><span>View all reviews on Google</span><b>↗</b>
        </a>
      </section>

      <section className="experience">
        <div className="experienceShell">
          <div className="experienceCopy">
            <p className="eyebrow">EXPERIENCE THE AI</p>
            <h2>See how your next call could be handled.</h2>
            <p className="experienceLead">Hear the AI answer, qualify, and move a real customer conversation forward, then see how it would be tailored to your business.</p>
            <div className="experienceActions">
              <a className="button" href="/demo">Hear the AI in Action <span>→</span></a>
              <a className="experiencePhone" href="tel:7146955646"><PhoneIcon /><span>Call the AI</span></a>
            </div>
            <div className="experienceTrust"><span>✓ No commitment</span><span>✓ Built for your business</span><span>✓ 15-minute walkthrough</span></div>
          </div>

          <div className="demoBrief">
            <div className="demoBriefHead">
              <div><span className="liveDot" /> YOUR LIVE WALKTHROUGH</div>
              <b>15 MIN</b>
            </div>
            <div className="demoSteps">
              <div className="demoStep"><span>01</span><div><strong>Hear your custom greeting</strong><p>See how the AI represents your business from the first second.</p></div></div>
              <div className="demoStep"><span>02</span><div><strong>Test a real caller scenario</strong><p>Try questions, objections, scheduling, or an urgent request.</p></div></div>
              <div className="demoStep"><span>03</span><div><strong>See the complete handoff</strong><p>Watch qualification, booking, summaries, and team alerts work together.</p></div></div>
            </div>
            <div className="demoBriefFoot"><span>●</span> Built around your workflow, not a generic script.</div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactShell">
          <div className="contactIntro">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>Let’s make every<br />call count.</h2>
            <p>Tell us where calls are slipping through and what a strong first response should look like for your business. We’ll map out a practical approach.</p>
            <div className="contactDetails">
              <a href="tel:7146955646"><small>CALL</small><strong>(714) 695-5646</strong></a>
              <a href="mailto:virtualagentai@gmail.com"><small>EMAIL</small><strong>virtualagentai@gmail.com</strong></a>
            </div>
            <p className="responseNote"><span /> Typical response within one business day.</p>
          </div>

          <form className="contactForm" action="mailto:virtualagentai@gmail.com" method="post" encType="text/plain">
            <div className="formHeading"><span>Start a conversation</span><small>ALL FIELDS REQUIRED</small></div>
            <div className="formGrid">
              <label><span>Full name</span><input name="Full name" type="text" placeholder="Jane Smith" required /></label>
              <label><span>Business name</span><input name="Business name" type="text" placeholder="Acme Corp" required /></label>
              <label><span>Phone number</span><input name="Phone number" type="tel" placeholder="(555) 000-0000" required /></label>
              <label><span>Email address</span><input name="Email address" type="email" placeholder="jane@acmecorp.com" required /></label>
              <label className="messageField"><span>What would you like the AI to handle?</span><textarea name="Message" placeholder="A few details about your call volume, business, and what you want to improve..." required /></label>
            </div>
            <button className="sendButton" type="submit"><span>Send message</span><b>↗</b></button>
            <p className="formPrivacy">Your information is only used to respond to this inquiry.</p>
          </form>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function PhoneIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6.6 10.8c1.5 3 3.9 5.4 6.9 6.9l2.3-2.3c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.4 22 2 13.6 2 3.3c0-.6.4-1 1-1h4.2c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-1.9 2.6Z"/></svg>;
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div><b>{value}</b><span>{label}</span></div>;
}

function ReviewCard({ initials, quote, name, role }: { initials: string; quote: string; name: string; role: string }) {
  return <article className="reviewCard">
    <div className="reviewTop"><span className="stars">★★★★★</span><span className="verified">✓ Verified</span></div>
    <blockquote>“{quote}”</blockquote>
    <div className="reviewer">
      <span className="reviewAvatar">{initials}</span>
      <div><strong>{name}</strong><small>{role}</small></div>
    </div>
  </article>;
}

function FeatureCard({ icon, title, problem, outcome }: { icon: string; title: string; problem: string; outcome: string }) {
  return <article className="featureCard">
    <div className="featureIcon"><FeatureIcon type={icon} /></div>
    <h3>{title}</h3>
    <p><span>The problem:</span> {problem}</p>
    <p className="outcome"><span>The outcome:</span> {outcome}</p>
  </article>;
}

function FeatureIcon({ type }: { type: string }) {
  if (type === "target") return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/></svg>;
  if (type === "calendar") return <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M8 15l2.5 2.5L16 12"/></svg>;
  if (type === "message") return <svg viewBox="0 0 24 24"><path d="M4 4h16v12H8l-4 4V4Z"/></svg>;
  if (type === "route") return <svg viewBox="0 0 24 24"><path d="M5 5h7a4 4 0 0 1 4 4v10M13 16l3 3 3-3M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>;
  if (type === "bell") return <svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/></svg>;
  return <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.5 3 3.9 5.4 6.9 6.9l2.3-2.3c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.4 22 2 13.6 2 3.3c0-.6.4-1 1-1h4.2c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-1.9 2.6Z"/></svg>;
}

function CallPanel() {
  return <div className="visual"><div className="callPanel">
    <div className="callHead">● ACTIVE CALL <b>02:14</b></div>
    <div className="callerName"><div className="avatar">V</div><div><strong>Virtual Agent AI</strong><small>AI Receptionist</small></div></div>
    <div className="wave">{Array.from({ length: 12 }).map((_, i) => <i key={i} />)}</div>
    <p className="listening">Listening to caller</p>
    <div className="transcript"><b>Business owner</b><p>“I’m missing calls when my staff is tied up. Can your AI answer them?”</p><b>Virtual Agent AI</b><p>“Yes. We answer, qualify, and book appointments 24/7 using your business information.”</p></div>
  </div></div>;
}
