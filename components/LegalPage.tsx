import { SiteHeader } from "./SiteChrome";
import { SiteFooter } from "./SiteFooter";

export function LegalPage({ eyebrow, title, updated, children }: { eyebrow: string; title: string; updated: string; children: React.ReactNode }) {
  return <><SiteHeader /><main className="legalPage"><header><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><span>Last updated {updated}</span></header><article>{children}</article></main><SiteFooter /></>;
}
