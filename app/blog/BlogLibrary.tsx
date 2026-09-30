"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "./posts";

type TopicKey = "all" | "ai-receptionists" | "call-operations" | "lead-growth" | "industry-guides" | "websites-seo" | "revenue-marketing" | "buyer-guides";

const topics: { key: TopicKey; label: string }[] = [
  { key: "all", label: "All articles" },
  { key: "ai-receptionists", label: "AI receptionists" },
  { key: "call-operations", label: "Calls & booking" },
  { key: "lead-growth", label: "Leads & follow-up" },
  { key: "industry-guides", label: "Industry guides" },
  { key: "websites-seo", label: "Websites & SEO" },
  { key: "revenue-marketing", label: "Revenue & ads" },
  { key: "buyer-guides", label: "Buyer guides" },
];

function topicForPost(post: BlogPost): Exclude<TopicKey, "all"> {
  if (post.category === "INDUSTRY GUIDES") return "industry-guides";
  if (post.category === "WEBSITES & LANDING PAGES") return "websites-seo";
  if (post.category === "BUYER’S GUIDE") return "buyer-guides";
  if (["LEAD QUALIFICATION", "LEAD GENERATION & FOLLOW-UP"].includes(post.category)) return "lead-growth";
  if (["REVENUE OPERATIONS"].includes(post.category)) return "revenue-marketing";
  if (["AI CALL ANSWERING", "AI CALL CENTERS", "24/7 CALL COVERAGE", "APPOINTMENT BOOKING"].includes(post.category)) return "call-operations";
  return "ai-receptionists";
}


export function BlogLibrary({ posts }: { posts: BlogPost[] }) {
  const [activeTopic, setActiveTopic] = useState<TopicKey>("all");
  const visiblePosts = useMemo(
    () => activeTopic === "all" ? posts : posts.filter((post) => topicForPost(post) === activeTopic),
    [activeTopic, posts],
  );
  const activeLabel = topics.find((topic) => topic.key === activeTopic)?.label ?? "All articles";

  return <section className="blogLibrary" aria-labelledby="article-library-heading">
    <div className="blogLibraryHeading">
      <div>
        <p className="eyebrow">THE RESPONSE PLAYBOOK</p>
        <h2 id="article-library-heading">Useful answers, organized around the work.</h2>
      </div>
      <p>Choose a topic to see only the guides that apply. Every article is written to solve a specific response, booking, or customer-intake problem.</p>
    </div>

    <div className="blogFilterBar" role="tablist" aria-label="Filter articles by topic">
      {topics.map((topic) => {
        const count = topic.key === "all" ? posts.length : posts.filter((post) => topicForPost(post) === topic.key).length;
        return <button
          key={topic.key}
          type="button"
          role="tab"
          aria-selected={activeTopic === topic.key}
          className={activeTopic === topic.key ? "active" : ""}
          onClick={() => setActiveTopic(topic.key)}
        >
          <span>{topic.label}</span><b>{String(count).padStart(2, "0")}</b>
        </button>;
      })}
    </div>

    <div className="blogFilterStatus" aria-live="polite">
      <span>{String(visiblePosts.length).padStart(2, "0")} GUIDES</span>
      <p>Showing: <strong>{activeLabel}</strong></p>
    </div>

    <div className="blogLibraryGrid" key={activeTopic}>
      {visiblePosts.map((post, index) => <a className="blogLibraryCard" href={`/blog/${post.slug}`} key={post.slug}>
        <div className="blogCardTop">
          <span>{post.category}</span>
          <b>{String(index + 1).padStart(2, "0")}</b>
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <div className="blogCardBottom">
          <small>{post.readTime}</small>
          <strong>Read guide <span></span></strong>
        </div>
      </a>)}
    </div>
  </section>;
}
