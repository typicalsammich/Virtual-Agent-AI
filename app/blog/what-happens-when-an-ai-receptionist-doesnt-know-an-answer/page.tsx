import { BlogArticle } from "../BlogArticle";
import { createPostMetadata } from "../postMetadata";
import { postsBySlug } from "../posts";
const post = postsBySlug["what-happens-when-an-ai-receptionist-doesnt-know-an-answer"];
export const metadata = createPostMetadata(post);
export default function Page() { return <BlogArticle post={post} />; }
