import { BlogArticle } from "../BlogArticle";
import { createPostMetadata } from "../postMetadata";
import { postsBySlug } from "../posts";
const post = postsBySlug["ai-follow-up-with-leads-without-sounding-robotic"];
export const metadata = createPostMetadata(post);
export default function Page() { return <BlogArticle post={post} />; }
