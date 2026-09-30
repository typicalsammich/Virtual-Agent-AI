import { BlogArticle } from "../BlogArticle";
import { createPostMetadata } from "../postMetadata";
import { postsBySlug } from "../posts";
const post = postsBySlug["what-is-an-ai-call-center"];
export const metadata = createPostMetadata(post);
export default function Page() { return <BlogArticle post={post} />; }
