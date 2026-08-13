import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";
const siteUrl = "https://virtualagentai.org";
export const metadata: Metadata = { title: "Website Terms of Service", description: "Review the terms that apply when using the Virtual Agent AI website.", alternates: { canonical: `${siteUrl}/terms-of-service` }, robots: { index: false, follow: true } };
export default function Page() { return <LegalPage eyebrow="TERMS" title="Website Terms of Service" updated="August 13, 2026">
  <h2>Website use</h2><p>This website provides general information about Virtual Agent AI and its services. You may use the site for lawful business research and to contact the company. You may not interfere with site operation, attempt unauthorized access, or misuse the content or contact features.</p>
  <h2>No automatic service agreement</h2><p>Submitting a form, scheduling a call, using an estimator, or viewing a demonstration does not create a customer relationship or guarantee service availability, performance, pricing, or a specific business result. Any paid service is governed by a separate written agreement.</p>
  <h2>Estimates and informational content</h2><p>Pricing estimates, revenue calculators, blog articles, examples, and call scenarios are provided for planning and education. Actual pricing, implementation, savings, revenue, and outcomes depend on the business, call volume, workflow, integrations, and customer behavior.</p>
  <h2>Intellectual property</h2><p>The site design, original text, branding, demonstrations, and other materials are owned by Virtual Agent AI or used with permission. They may not be copied, republished, or presented as another company&apos;s work without written authorization.</p>
  <h2>Contact</h2><p>Questions about these terms may be sent to <a href="mailto:virtualagentai@gmail.com">virtualagentai@gmail.com</a> or discussed by calling <a href="tel:7146955646">(714) 695-5646</a>.</p>
  <p className="legalNotice">These website terms are general information and may be updated as the website or services change.</p>
</LegalPage>; }
