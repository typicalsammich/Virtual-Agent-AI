import { SiteHeader } from "./SiteChrome";
import { SiteFooter } from "./SiteFooter";

const siteUrl = "https://virtualagentai.org";
const bookingUrl = "https://calendar.app.google/SDQkfwQwqctAsQd7A";

export type SeoLandingData = {
  path: string;
  eyebrow: string;
  title: string;
  intro: string;
  promise: string;
  serviceType: string;
  benefits: { title: string; text: string }[];
  sectionTitle: string;
  sectionIntro: string;
  steps: { title: string; text: string }[];
  fitTitle: string;
  fitText: string;
  fitPoints: string[];
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string }[];
};

export function SeoLandingPage({ data }: { data: SeoLandingData }) {
  const canonical = `${siteUrl}${data.path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: data.serviceType,
        serviceType: data.serviceType,
        description: data.intro,
        url: canonical,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: { "@type": "Country", name: "United States" },
      },
      {
        "@type": "FAQPage",
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
          { "@type": "ListItem", position: 3, name: data.serviceType, item: canonical },
        ],
      },
    ],
  };

  return <>
    <SiteHeader />
    <main className="seoLanding">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="seoLandingHero">
        <div>
          <p className="eyebrow">{data.eyebrow}</p>
          <h1>{data.title}</h1>
          <p>{data.intro}</p>
          <div className="seoLandingActions"><a className="button" href={bookingUrl}>Book a tailored walkthrough <span>↗</span></a><a href="tel:7146955646">Call (714) 695-5646</a></div>
        </div>
        <aside>
          <small>THE BUSINESS OUTCOME</small>
          <strong>{data.promise}</strong>
          <span>Managed setup. Business-specific call flows. Clear team handoffs.</span>
        </aside>
      </section>

      <section className="seoLandingBenefits">
        {data.benefits.map((benefit, index) => <article key={benefit.title}><span>0{index + 1}</span><div><h2>{benefit.title}</h2><p>{benefit.text}</p></div></article>)}
      </section>

      <section className="seoLandingProcess">
        <div className="seoLandingProcessIntro"><p className="eyebrow">HOW THE SERVICE WORKS</p><h2>{data.sectionTitle}</h2><p>{data.sectionIntro}</p></div>
        <div className="seoLandingSteps">{data.steps.map((step, index) => <article key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
      </section>

      <section className="seoLandingFit">
        <div><p className="eyebrow">PRACTICAL FIT</p><h2>{data.fitTitle}</h2><p>{data.fitText}</p></div>
        <ul>{data.fitPoints.map((point) => <li key={point}><span>✓</span>{point}</li>)}</ul>
      </section>

      <section className="seoLandingFaq">
        <div><p className="eyebrow">COMMON QUESTIONS</p><h2>What businesses ask before getting started.</h2></div>
        <div>{data.faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="seoLandingRelated">
        <span>EXPLORE RELATED SOLUTIONS</span>
        <nav aria-label="Related AI receptionist services">{data.related.map((link) => <a key={link.href} href={link.href}>{link.label}<b>↗</b></a>)}</nav>
      </section>

      <section className="seoLandingCta"><p className="eyebrow">TURN THE NEXT CALL INTO A NEXT STEP</p><h2>See how this would work for your business.</h2><p>Bring one real call scenario. We will map the questions, routing, booking rules, and team handoff around the way your business already operates.</p><a className="button" href={bookingUrl}>Book a 15-minute call <span>↗</span></a></section>
    </main>
    <SiteFooter />
  </>;
}
