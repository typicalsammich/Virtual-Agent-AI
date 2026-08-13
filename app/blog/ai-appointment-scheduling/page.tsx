import { BlogArticle } from "../BlogArticle";
import { createPostMetadata } from "../postMetadata";
import { postsBySlug } from "../posts";
const post = postsBySlug["ai-appointment-scheduling"];
export const metadata = createPostMetadata(post);
export default function Page() { return <BlogArticle post={post} />; }
