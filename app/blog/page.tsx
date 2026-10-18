import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteChrome";
import { SiteFooter } from "../components/SiteFooter";
import { BlogLibrary } from "./BlogLibrary";
import type { StandaloneBlogCard } from "./BlogLibrary";
import { blogPosts } from "./posts";

const standaloneGuides: StandaloneBlogCard[] = [
  {
    "slug": "ai-agents-vs-ai-assistants-vs-chatbots",
    "title": "AI Agents vs AI Assistants vs Chatbots",
    "excerpt": "Understand how assistants, chatbots, and agents differ in autonomy, tool use, and customer-facing workflows.",
    "category": "AI RECEPTIONIST GUIDE",
    "readTime": "5 min read"
  },
  {
    "slug": "ai-receptionist-for-24-7-businesses",
    "title": "AI Receptionist for 24/7 Businesses",
    "excerpt": "Explore how a 24/7 AI receptionist handles overnight calls, weekend inquiries, urgent requests, and appointment booking without a staffed desk.",
    "category": "AI RECEPTIONIST GUIDE",
    "readTime": "4 min read"
  },
  {
    "slug": "ai-receptionist-vs-human-receptionist",
    "title": "AI Receptionist vs Human Receptionist: Which Is Better?",
    "excerpt": "AI receptionist vs human receptionist: compare availability, cost, call handling, customer experience, and when a human handoff still matters.",
    "category": "AI RECEPTIONIST GUIDE",
    "readTime": "4 min read"
  },
  {
    "slug": "ai-receptionist-vs-virtual-receptionist",
    "title": "AI Receptionist vs Virtual Receptionist",
    "excerpt": "AI receptionist vs virtual receptionist: compare automated and human-supported answering, pricing, scheduling, transfers, and service fit.",
    "category": "AI RECEPTIONIST GUIDE",
    "readTime": "4 min read"
  },
  {
    "slug": "best-ai-receptionist-for-small-business",
    "title": "Best AI Receptionist for Small Business: 9 Things to Compare",
    "excerpt": "Compare AI receptionist options for small businesses. Learn what to check for call quality, booking, integrations, pricing, and support.",
    "category": "AI RECEPTIONIST GUIDE",
    "readTime": "4 min read"
  },
  {
    "slug": "can-ai-receptionist-book-appointments",
    "title": "Can an AI Receptionist Book Appointments? Yes — Here’s How",
    "excerpt": "Can an AI receptionist book appointments? Learn how scheduling rules, calendar availability, confirmations, and exceptions work during calls.",
    "category": "AI RECEPTIONIST GUIDE",
    "readTime": "4 min read"
  },
  {
    "slug": "can-ai-receptionist-handle-multiple-businesses",
    "title": "Can an AI Receptionist Handle Multiple Businesses?",
    "excerpt": "Can one AI receptionist handle multiple businesses? Learn how separate phone numbers, knowledge bases, call flows, and routing rules can work.",
    "category": "AI RECEPTIONIST GUIDE",
    "readTime": "4 min read"
  },
  {
    "slug": "can-ai-receptionist-take-messages",
    "title": "Can an AI Receptionist Take Messages?",
    "excerpt": "Can an AI receptionist take messages? See what caller details it can capture, how summaries are delivered, and when calls need human follow-up.",
    "category": "AI RECEPTIONIST GUIDE",
    "readTime": "4 min read"
  },
  {
    "slug": "can-ai-receptionist-transfer-calls",
    "title": "Can an AI Receptionist Transfer Calls? How Routing Works",
    "excerpt": "Can an AI receptionist transfer calls to a person? Learn how live transfers, escalation rules, and urgent call routing work for businesses.",
    "category": "AI RECEPTIONIST GUIDE",
    "readTime": "4 min read"
  },
  {
    "slug": "how-does-an-ai-receptionist-work",
    "title": "How Does an AI Receptionist Work? 4 Steps + Examples",
    "excerpt": "See how an AI receptionist answers calls, qualifies leads, books appointments, transfers callers, and hands useful context to your team.",
    "category": "AI RECEPTIONIST GUIDE",
    "readTime": "4 min read"
  },
  {
    "slug": "how-much-does-ai-answering-service-cost",
    "title": "How Much Does an AI Answering Service Cost?",
    "excerpt": "How much does an AI answering service cost? Understand monthly plans, setup fees, call usage, integrations, and pricing questions to ask.",
    "category": "BUYER’S GUIDE",
    "readTime": "4 min read"
  },
  {
    "slug": "how-much-does-ai-receptionist-cost-2026",
    "title": "AI Receptionist Cost in 2026: Pricing & What Changes It",
    "excerpt": "How much does an AI receptionist cost in 2026? Compare setup fees, monthly pricing, call volume, integrations, and what affects total cost.",
    "category": "BUYER’S GUIDE",
    "readTime": "4 min read"
  },
  {
    "slug": "what-does-an-ai-receptionist-do",
    "title": "What Does an AI Receptionist Do? 7 Real Call Tasks",
    "excerpt": "What does an AI receptionist do? Explore call answering, lead qualification, appointment booking, transfers, and the limits of automated phone support.",
    "category": "AI RECEPTIONIST GUIDE",
    "readTime": "4 min read"
  }
];

const siteUrl = "https://www.virtualagentai.org";

export const metadata: Metadata = {
  title: "AI Receptionist Guides for Service Businesses",
  description: "Practical guides to AI receptionists, 24/7 call answering, lead qualification, appointment scheduling, and missed-call recovery for service businesses.",
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
          <p>Clear, practical guides for service businesses that want to answer faster, qualify consistently, book more work, and understand where an AI Agent fits into a customer response system.</p>
        </div>
        <a className="featuredPost" href={`/blog/${featured.slug}`}>
          <div className="featuredPostTop"><span>START HERE</span><b>{featured.readTime}</b></div>
          <small>{featured.category}</small>
          <h2>{featured.title}</h2>
          <p>{featured.excerpt}</p>
          <strong>Read the complete guide <span></span></strong>
        </a>
      </section>

      <BlogLibrary posts={blogPosts} extraPosts={standaloneGuides} />

      <section className="seoLandingRelated"><span>COMMERCIAL AI RECEPTIONIST GUIDES</span><nav>
        <a href="/blog/what-is-an-ai-call-center">What is an AI call center? <b></b></a>
        <a href="/blog/ai-lead-generation-for-service-businesses">AI lead generation for service businesses <b></b></a>
        <a href="/blog/how-much-does-ai-receptionist-cost-2026">AI receptionist cost in 2026 <b></b></a>
        <a href="/blog/ai-receptionist-vs-human-receptionist">AI vs human receptionist <b></b></a>
        <a href="/blog/ai-receptionist-vs-virtual-receptionist">AI vs virtual receptionist <b></b></a>
        <a href="/blog/best-ai-receptionist-for-small-business">Best AI receptionist for small business <b></b></a>
        <a href="/blog/ai-receptionist-for-small-business-is-it-worth-it">AI receptionist for small business: is it worth it? <b></b></a>
        <a href="/blog/how-does-an-ai-receptionist-work">How an AI receptionist works <b></b></a>
        <a href="/blog/can-ai-receptionist-book-appointments">Can AI book appointments? <b></b></a>
        <a href="/blog/can-ai-receptionist-transfer-calls">Can AI transfer calls? <b></b></a>
        <a href="/blog/ai-receptionist-for-24-7-businesses">AI receptionist for 24/7 businesses <b></b></a>
        <a href="/blog/ai-agents-vs-ai-assistants-vs-chatbots">AI agents vs assistants vs chatbots <b></b></a>
      </nav></section>

      <section className="blogSeoStatement">
        <div><p className="eyebrow">ONE CONNECTED SYSTEM</p><h2>Traffic matters.<br />What happens after the call matters more.</h2></div>
        <div><p>Useful content can bring the right customer to your business. A complete response workflow helps make sure that customer is answered, understood, and moved toward a real next step.</p><a href="/services">Explore the AI receptionist system <span></span></a></div>
      </section>

      <section className="blogCta">
        <p className="eyebrow">SEE IT IN A REAL CONVERSATION</p>
        <h2>Bring the call your team keeps missing.</h2>
        <p>We’ll build a live walkthrough around your business, your questions, and the outcome you want the caller to reach.</p>
        <a className="button" href="/#contact">Book a live demo <span></span></a>
      </section>
    </main>
    <SiteFooter />
  </>;
}
