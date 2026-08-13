"use client";

import { useEffect } from "react";

export function PageTransition() {
  useEffect(() => {
    const body = document.body;

    const restorePage = () => body.classList.remove("pageLeaving");
    const handleNavigation = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("javascript:")) return;

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin) return;

      const samePage = destination.pathname === window.location.pathname && destination.search === window.location.search;
      if (samePage) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      event.preventDefault();
      if (body.classList.contains("pageLeaving")) return;
      body.classList.add("pageLeaving");
      window.setTimeout(() => window.location.assign(destination.href), 175);
    };

    document.addEventListener("click", handleNavigation);
    window.addEventListener("pageshow", restorePage);
    return () => {
      document.removeEventListener("click", handleNavigation);
      window.removeEventListener("pageshow", restorePage);
      body.classList.remove("pageLeaving");
    };
  }, []);

  return null;
}
