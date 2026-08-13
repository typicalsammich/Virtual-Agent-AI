import { BlogArticle } from "../BlogArticle";
import { createPostMetadata } from "../postMetadata";
import { postsBySlug } from "../posts";
const post = postsBySlug["ai-receptionist-vs-answering-service"];
export const metadata = createPostMetadata(post);
export default function Page() { return <BlogArticle post={post} />; }
