/* eslint-disable @next/next/no-html-link-for-pages */
const navigation = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Blog", "/blog"],
  ["Demo", "/demo"],
  ["Pricing", "/pricing"],
] as const;

export function SiteFooter() {
  return <footer className="siteFooter">
    <div className="footerCta">
      <div><small>READY TO STOP MISSING OPPORTUNITIES?</small><strong>Make the next call count.</strong></div>
      <a href="https://calendar.app.google/SDQkfwQwqctAsQd7A">Book a live demo <span>↗</span></a>
    </div>
    <div className="footerMain">
      <div className="footerBrand">
        <a className="logo" href="/"><b>V</b>irtual Agent AI</a>
        <p>A managed AI receptionist system built to answer calls, qualify leads, and keep service businesses moving.</p>
        <span className="bbbMark"><i>✓</i> BBB Accredited Business , A− Rating</span>
      </div>
      <div className="footerColumn"><h3>Explore</h3>{navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
      <div className="footerColumn"><h3>Solutions</h3><a href="/services/ai-call-answering">AI Call Answering</a><a href="/services/lead-qualification">Lead Qualification</a><a href="/services/appointment-booking">Appointment Booking</a><a href="/services/after-hours-answering">After-Hours Coverage</a></div>
      <div className="footerColumn footerContact"><h3>Contact</h3><a href="tel:7146955646">(714) 695-5646</a><a href="mailto:virtualagentai@gmail.com">virtualagentai@gmail.com</a><span>Menifee, California</span><a className="footerCall" href="tel:7146955646">Call the AI <b>↗</b></a></div>
    </div>
    <div className="footerBottom"><span>© 2026 Virtual Agent AI. All rights reserved.</span><div><a href="/privacy-policy">Privacy</a><a href="/terms-of-service">Terms</a><a href="https://www.bbb.org/us/ca/menifee/profile/business-services/virtual-agent-ai-1126-1000167203" target="_blank" rel="noreferrer">BBB Profile ↗</a></div></div>
  </footer>;
}
