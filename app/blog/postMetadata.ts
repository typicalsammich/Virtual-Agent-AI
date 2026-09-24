import type { Metadata } from "next";
import type { BlogPost } from "./posts";

const siteUrl = "https://www.virtualagentai.org";

export function createPostMetadata(post: BlogPost): Metadata {
  const url = `${siteUrl}/blog/${post.slug}`;
  return {
    title: post.seoTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      url,
      title: post.seoTitle,
      description: post.description,
      siteName: "Virtual Agent AI",
      publishedTime: post.publishedISO,
      modifiedTime: post.publishedISO,
      images: [{ url: "/og-image.png", width: 1024, height: 1024, alt: `${post.title} — Virtual Agent AI` }],
    },
    twitter: { card: "summary_large_image", title: post.seoTitle, description: post.description, images: ["/og-image.png"] },
  };
}
