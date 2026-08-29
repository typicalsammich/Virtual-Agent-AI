import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteChrome";
import { SiteFooter } from "../components/SiteFooter";
import { BlogLibrary } from "./BlogLibrary";
import { blogPosts } from "./posts";

const siteUrl = "https://virtual-agent-ai.typical-sammich.chatgpt.site";

export const metadata: Metadata = {
  title: "AI Receptionist Guides for Service Businesses",
  description: "Practical guides to AI receptionists, 24/7 call answering, lead qualification, appointment scheduling, and missed-call recovery for service businesses.",
  keywords: ["AI receptionist blog", "virtual agent AI", "AI call answering", "AI appointment scheduling", "AI lead qualification"],
  alternates: { canonical: `${siteUrl}/blog` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: `${siteUrl}/blog`,
    title: "AI Receptionist Guides for Service Businesses",
    description: "Practical, detailed guides for building a faster and more complete customer response system.",
    siteName: "Virtual Agent AI",
  },
};

export default function Blog() {
  const [featured] = blogPosts;
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Virtual Agent AI Insights",
    description: metadata.description,
    url: `${siteUrl}/blog`,
    publisher: { "@type": "Organization", name: "Virtual Agent AI", url: siteUrl },
    blogPost: blogPosts.map((post) => ({ "@type": "BlogPosting", headline: post.title, url: `${siteUrl}/blog/${post.slug}`, datePublished: post.publishedISO })),
  };

  return <>
    <SiteHeader />
    <main className="blogPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <section className="blogHero">
        <div className="blogHeroIntro">
          <p className="eyebrow">VIRTUAL AGENT AI INSIGHTS</p>
          <h1>The systems behind <em>better conversations.</em></h1>
          <p>Clear, practical guides for service businesses that want to answer faster, qualify consistently, book more work, and build a customer response system that holds up after hours.</p>
        </div>
        <a className="featuredPost" href={`/blog/${featured.slug}`}>
          <div className="featuredPostTop"><span>START HERE</span><b>{featured.readTime}</b></div>
          <small>{featured.category}</small>
          <h2>{featured.title}</h2>
          <p>{featured.excerpt}</p>
          <strong>Read the complete guide <span>↗</span></strong>
        </a>
      </section>

      <BlogLibrary posts={blogPosts} />

      <section className="blogSeoStatement">
        <div><p className="eyebrow">ONE CONNECTED SYSTEM</p><h2>Traffic matters.<br />What happens after the call matters more.</h2></div>
        <div><p>Useful content can bring the right customer to your business. A complete response workflow helps make sure that customer is answered, understood, and moved toward a real next step.</p><a href="/services">Explore the AI receptionist system <span>→</span></a></div>
      </section>

      <section className="blogCta">
        <p className="eyebrow">SEE IT IN A REAL CONVERSATION</p>
        <h2>Bring the call your team keeps missing.</h2>
        <p>We’ll build a live walkthrough around your business, your questions, and the outcome you want the caller to reach.</p>
        <a className="button" href="https://calendar.app.google/SDQkfwQwqctAsQd7A">Book a live demo <span>↗</span></a>
      </section>
    </main>
    <SiteFooter />
  </>;
}
