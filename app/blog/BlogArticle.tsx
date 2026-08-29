/* eslint-disable @next/next/no-html-link-for-pages */
import { SiteHeader } from "../components/SiteChrome";
import { SiteFooter } from "../components/SiteFooter";
import { postsBySlug, type BlogPost } from "./posts";

const siteUrl = "https://virtual-agent-ai.typical-sammich.chatgpt.site";

export function BlogArticle({ post }: { post: BlogPost }) {
  const canonical = `${siteUrl}/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedISO,
    dateModified: post.publishedISO,
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: "Virtual Agent AI", url: siteUrl },
    publisher: { "@type": "Organization", name: "Virtual Agent AI", url: siteUrl },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: canonical },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };

  return <>
    <SiteHeader />
    <main className="articlePage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article>
        <header className="articleHero">
          <div className="articleHeroShell">
            <nav className="articleBreadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a><span>/</span><a href="/blog">Insights</a><span>/</span><b>{post.category}</b>
            </nav>
            <div className="articleHeroGrid">
              <div className="articleHeroTitle">
                <p className="eyebrow">{post.category}</p>
                <h1>{post.title}</h1>
              </div>
              <div className="articleHeroSummary">
                <p className="articleDek">{post.excerpt}</p>
                <div className="articleMeta"><span>Virtual Agent AI Editorial Team</span><span>{post.published}</span><span>{post.readTime}</span></div>
              </div>
            </div>
            <div className="articleHeroFoot"><span>Practical guide for service businesses</span><a href="#article-content">Start reading <b>↓</b></a></div>
          </div>
        </header>

        <div className="articleLayout" id="article-content">
          <aside className="articleToc" aria-label="On this page">
            <span>ON THIS PAGE</span>
            <ol>{post.sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`}><b>0{index + 1}</b>{section.heading}</a></li>)}</ol>
            <a className="articleTocCta" href="https://calendar.app.google/SDQkfwQwqctAsQd7A">See the AI in action <b>↗</b></a>
          </aside>

          <div className="articleBody">
            <p className="articleLead">{post.intro}</p>
            <section className="articleTakeaways" aria-labelledby="key-takeaways">
              <span>QUICK ANSWER</span>
              <h2 id="key-takeaways">Key takeaways</h2>
              <ul>{post.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>

            {post.sections.map((section, index) => <div key={section.id}>
              <section className="articleSection" id={section.id}>
                <span className="articleSectionNumber">0{index + 1}</span>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul className="articleBulletList">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                {section.steps && <div className="articleSteps">{section.steps.map((step, stepIndex) => <div key={step.title}><span>{String(stepIndex + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></div>)}</div>}
                {section.comparison && <div className="articleTableWrap"><table><thead><tr>{section.comparison.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{section.comparison.rows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>}
              </section>
              {index === 2 && <aside className="articleInlineCta">
                <div><span>PUT THE PLAYBOOK INTO PRACTICE</span><strong>See how Virtual Agent AI would handle a real call for your business.</strong></div>
                <a href="https://calendar.app.google/SDQkfwQwqctAsQd7A">Book a live walkthrough <b>↗</b></a>
              </aside>}
            </div>)}

            <section className="articleFaq" aria-labelledby="frequently-asked-questions">
              <p className="eyebrow">COMMON QUESTIONS</p>
              <h2 id="frequently-asked-questions">Frequently asked questions</h2>
              <div>{post.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
            </section>

            <section className="articleSection articleAgentChecklist" aria-labelledby="ai-agent-implementation-checklist">
              <span className="articleSectionNumber">FIELD NOTE</span>
              <h2 id="ai-agent-implementation-checklist">A practical AI Agent implementation check</h2>
              <p>An AI Agent performs best when the business defines the desired outcome before writing the call script. Start with the caller’s goal, the information your team needs, and the exact situations that require a human.</p>
              <p>Before launch, give the AI Agent realistic calls related to {post.focusKeyword}, including interruptions, incomplete answers, objections, and requests outside the approved scope. Testing only the easiest conversation creates false confidence.</p>
              <p>A useful AI Agent should finish with a clear action and a structured record. Review whether the booking, transfer, qualification result, or follow-up task matches what a strong employee would have done.</p>
              <p>Virtual Agent AI reviews real outcomes after launch so the AI Agent can improve without drifting away from the business rules. That ongoing refinement is what turns a voice demo into a dependable operating workflow.</p>
            </section>

            <div className="articleAuthor">
              <div className="articleAuthorMark">V</div>
              <div><span>WRITTEN BY</span><strong>Virtual Agent AI Editorial Team</strong><p>Practical guidance for service businesses improving call response, qualification, booking, and customer follow-up.</p></div>
            </div>

            <aside className="articleSources" aria-label="Independent resources">
              <span>INDEPENDENT RESOURCES</span>
              <p>For broader guidance on responsible AI use and truthful business information, review these primary sources.</p>
              <div>
                <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noreferrer">NIST AI Risk Management Framework <b>↗</b></a>
                <a href="https://www.ftc.gov/industry/technology/artificial-intelligence" target="_blank" rel="noreferrer">Federal Trade Commission AI guidance <b>↗</b></a>
                <a href="https://support.google.com/business/answer/3038177?hl=en" target="_blank" rel="noreferrer">Google Business Profile guidelines <b>↗</b></a>
              </div>
            </aside>
          </div>
        </div>

        <section className="relatedArticles">
          <div className="relatedHeading"><div><p className="eyebrow">KEEP READING</p><h2>Related insights</h2></div><a href="/blog">View all articles →</a></div>
          <div className="relatedGrid">{post.related.map((slug, index) => {
            const related = postsBySlug[slug];
            return <a href={`/blog/${related.slug}`} key={related.slug}><span>0{index + 1}</span><small>{related.category}</small><h3>{related.title}</h3><p>{related.excerpt}</p><b>Read article ↗</b></a>;
          })}</div>
        </section>
      </article>
    </main>
    <SiteFooter />
  </>;
}
