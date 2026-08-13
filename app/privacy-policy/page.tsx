import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";
const siteUrl = "https://virtualagentai.org";
export const metadata: Metadata = { title: "Privacy Policy", description: "Read the Virtual Agent AI privacy policy and learn how website inquiry information is handled.", alternates: { canonical: `${siteUrl}/privacy-policy` }, robots: { index: false, follow: true } };
export default function Page() { return <LegalPage eyebrow="PRIVACY" title="Privacy Policy" updated="August 13, 2026">
  <h2>Information we collect</h2><p>When you contact Virtual Agent AI, we may receive the name, business name, email address, phone number, and message you choose to provide. Basic technical information may also be processed by the website hosting platform to operate, secure, and improve the site.</p>
  <h2>How information is used</h2><p>We use inquiry information to respond to requests, explain our services, prepare demonstrations, provide support, and maintain business records. We do not sell personal information submitted through this website.</p>
  <h2>Service providers</h2><p>We may use service providers for website hosting, scheduling, communications, analytics, and business operations. Those providers process information according to their own terms and privacy practices.</p>
  <h2>Data choices</h2><p>You may ask to review, correct, or delete information you submitted by emailing <a href="mailto:virtualagentai@gmail.com">virtualagentai@gmail.com</a>. Some information may be retained when required for legal, security, or recordkeeping purposes.</p>
  <h2>Contact</h2><p>Questions about this policy may be sent to <a href="mailto:virtualagentai@gmail.com">virtualagentai@gmail.com</a> or discussed by calling <a href="tel:7146955646">(714) 695-5646</a>.</p>
  <p className="legalNotice">This policy is a general website notice and does not replace any separate agreement that applies to a customer service.</p>
</LegalPage>; }
