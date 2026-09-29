"use client";
/* eslint-disable @next/next/no-html-link-for-pages */

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const services = [
  ["AI Call Answering", "/services/ai-call-answering"],
  ["Lead Qualification", "/services/lead-qualification"],
  ["Appointment Booking", "/services/appointment-booking"],
  ["After-Hours Answering", "/services/after-hours-answering"],
  ["AI Call Center", "/services/ai-call-center"],
  ["Lead Generation & Follow-Up", "/services/lead-generation-follow-up"],
  ["Social Media Marketing", "/services/social-media-marketing"],
  ["Paid Ad Campaigns", "/services/paid-ad-campaigns"],
  ["SEO Websites", "/services/seo-websites"],
] as const;

const navigation = [
  ["Home", "/"],
  ["Industries", "/industries"],
  ["Locations", "/locations"],
  ["Compare", "/compare"],
  ["Resources", "/resources"],
  ["Pricing", "/pricing"],
] as const;

function PhoneIcon() {
  return <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.5 3 3.9 5.4 6.9 6.9l2.3-2.3c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.4 22 2 13.6 2 3.3c0-.6.4-1 1-1h4.2c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-1.9 2.6Z"/></svg>;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobileMenuOpen", menuOpen);
    return () => document.body.classList.remove("mobileMenuOpen");
  }, [menuOpen]);

  const closeMenu = () => { setMenuOpen(false); setServicesOpen(false); };
  const servicesActive = pathname.startsWith("/services");

  return <header className="siteHeader">
    <a className="logo brandLogo" href="/" onClick={closeMenu}><img className="brandMarkImage" src="/virtual-agent-ai-logo-transparent.png" alt="Virtual Agent AI logo" /><span>Virtual Agent AI</span></a>
    <nav className={menuOpen ? "mobileNavOpen" : ""} aria-label="Main navigation" id="main-navigation">
      <a className={pathname === "/" ? "active" : ""} href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={closeMenu}>Home</a>
      <div className={`servicesNav ${servicesOpen ? "mobileServicesOpen" : ""}`}>
        <div className="servicesNavTriggerRow">
          <a className={servicesActive ? "active" : ""} href="/services" aria-current={servicesActive ? "page" : undefined} onClick={() => setMenuOpen(false)}>Services</a>
          <button type="button" className="servicesNavToggle" aria-label="Show services" aria-expanded={servicesOpen} onClick={() => setServicesOpen(v => !v)}><span>⌄</span></button>
        </div>
        <div className="servicesDropdown">
          <div className="servicesDropdownHead"><small>WHAT WE DO</small><strong>Explore all services</strong></div>
          <div className="servicesDropdownGrid">
            {services.map(([label, href]) => <a key={href} href={href} className={pathname === href ? "currentService" : ""} onClick={closeMenu}><span>{label}</span><b>↗</b></a>)}
          </div>
          <a className="servicesViewAll" href="/services" onClick={closeMenu}>View all services <span>→</span></a>
        </div>
      </div>
      {navigation.slice(1).map(([label, href]) => {
        const active = pathname.startsWith(href);
        return <a key={href} className={active ? "active" : ""} href={href} aria-current={active ? "page" : undefined} onClick={closeMenu}>{label}</a>;
      })}
      <div className="mobileNavActions">
        <a href="tel:7146955646"><PhoneIcon /> Call (714) 695-5646</a>
        <a className="mobileBook" href="/#contact">Book a Demo <span>↗</span></a>
      </div>
    </nav>
    <a className="topPhone" href="tel:7146955646"><PhoneIcon />(714) 695-5646</a>
    <a className="book" href="/#contact">Book a Demo</a>
    <button className={menuOpen ? "mobileMenuButton open" : "mobileMenuButton"} type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMenuOpen((open) => !open)}>
      <span /><span /><span />
    </button>
    <button className={menuOpen ? "mobileNavBackdrop open" : "mobileNavBackdrop"} type="button" aria-label="Close navigation menu" tabIndex={menuOpen ? 0 : -1} onClick={closeMenu} />
  </header>;
}
