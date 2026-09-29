"use client";

import { useState } from "react";

export function CopyBlogButton({ target = ".articleBody" }: { target?: string }) {
  const [copied, setCopied] = useState(false);

  async function copyArticle() {
    const root = document.querySelector(target);
    if (!root) return;
    const clone = root.cloneNode(true) as HTMLElement;
    clone.querySelectorAll("button, .articleInlineCta, .seoLandingActions, .seoLandingCta, .seoLandingRelated").forEach((node) => node.remove());
    const text = (clone.innerText || clone.textContent || "").replace(/\n{3,}/g, "\n\n").trim();
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return <button type="button" className="copyBlogButton" onClick={copyArticle} aria-live="polite">
    <span aria-hidden="true">{copied ? "✓" : "▣"}</span>{copied ? "Copied entire article" : "Copy entire article"}
  </button>;
}
