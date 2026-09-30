import { BlogArticle } from "../BlogArticle";
import { createPostMetadata } from "../postMetadata";
import { postsBySlug } from "../posts";
const post = postsBySlug["can-ai-answer-phone-calls-for-a-business"];
export const metadata = createPostMetadata(post);
export default function Page() { return <BlogArticle post={post} />; }
