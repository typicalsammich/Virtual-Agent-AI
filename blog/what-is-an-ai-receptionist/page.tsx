import { BlogArticle } from "../BlogArticle";
import { createPostMetadata } from "../postMetadata";
import { postsBySlug } from "../posts";
const post = postsBySlug["what-is-an-ai-receptionist"];
export const metadata = createPostMetadata(post);
export default function Page() { return <BlogArticle post={post} />; }
