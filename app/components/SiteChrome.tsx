"use client";
/* eslint-disable @next/next/no-html-link-for-pages */

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Blog", "/blog"],
  ["Demo", "/demo"],
  ["Pricing", "/pricing"],
] as const;

function PhoneIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6.6 10.8c1.5 3 3.9 5.4 6.9 6.9l2.3-2.3c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.4 22 2 13.6 2 3.3c0-.6.4-1 1-1h4.2c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-1.9 2.6Z"/></svg>;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobileMenuOpen", menuOpen);
    return () => document.body.classList.remove("mobileMenuOpen");
  }, [menuOpen]);

  return <header className="siteHeader">
    <a className="logo" href="/" onClick={() => setMenuOpen(false)}><b>V</b>irtual Agent AI</a>
    <nav className={menuOpen ? "mobileNavOpen" : ""} aria-label="Main navigation" id="main-navigation">
      {navigation.map(([label, href]) => {
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return <a key={href} className={active ? "active" : ""} href={href} aria-current={active ? "page" : undefined} onClick={() => setMenuOpen(false)}>{label}</a>;
      })}
      <div className="mobileNavActions">
        <a href="tel:7146955646"><PhoneIcon /> Call (714) 695-5646</a>
        <a className="mobileBook" href="https://calendar.app.google/SDQkfwQwqctAsQd7A">Book a Demo <span>↗</span></a>
      </div>
    </nav>
    <a className="topPhone" href="tel:7146955646"><PhoneIcon />(714) 695-5646</a>
    <a className="book" href="https://calendar.app.google/SDQkfwQwqctAsQd7A">Book a Demo</a>
    <button className={menuOpen ? "mobileMenuButton open" : "mobileMenuButton"} type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMenuOpen((open) => !open)}>
      <span /><span /><span />
    </button>
    <button className={menuOpen ? "mobileNavBackdrop open" : "mobileNavBackdrop"} type="button" aria-label="Close navigation menu" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)} />
  </header>;
}
