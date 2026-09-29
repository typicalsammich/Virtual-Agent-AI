"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "./posts";

type TopicKey = "all" | "ai-receptionists" | "call-coverage" | "appointment-booking" | "lead-qualification";

const topics: { key: TopicKey; label: string }[] = [
  { key: "all", label: "All articles" },
  { key: "ai-receptionists", label: "AI receptionists" },
  { key: "call-coverage", label: "Call coverage" },
  { key: "appointment-booking", label: "Appointment booking" },
  { key: "lead-qualification", label: "Lead qualification" },
];

const postTopics: Record<string, Exclude<TopicKey, "all">> = {
  "what-is-an-ai-receptionist": "ai-receptionists",
  "ai-receptionist-vs-answering-service": "ai-receptionists",
  "stop-missing-business-calls": "call-coverage",
  "after-hours-answering-service": "call-coverage",
  "ai-appointment-scheduling": "appointment-booking",
  "ai-lead-qualification": "lead-qualification",
};

export function BlogLibrary({ posts }: { posts: BlogPost[] }) {
  const [activeTopic, setActiveTopic] = useState<TopicKey>("all");
  const visiblePosts = useMemo(
    () => activeTopic === "all" ? posts : posts.filter((post) => postTopics[post.slug] === activeTopic),
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
        const count = topic.key === "all" ? posts.length : posts.filter((post) => postTopics[post.slug] === topic.key).length;
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
          <strong>Read guide <span>↗</span></strong>
        </div>
      </a>)}
    </div>
  </section>;
}
