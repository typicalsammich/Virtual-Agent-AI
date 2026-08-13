import { BlogArticle } from "../BlogArticle";
import { createPostMetadata } from "../postMetadata";
import { postsBySlug } from "../posts";
const post = postsBySlug["stop-missing-business-calls"];
export const metadata = createPostMetadata(post);
export default function Page() { return <BlogArticle post={post} />; }
