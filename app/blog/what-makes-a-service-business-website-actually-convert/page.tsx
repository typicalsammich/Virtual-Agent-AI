import { BlogArticle } from "../BlogArticle";
import { createPostMetadata } from "../postMetadata";
import { postsBySlug } from "../posts";
const post = postsBySlug["what-makes-a-service-business-website-actually-convert"];
export const metadata = createPostMetadata(post);
export default function Page() { return <BlogArticle post={post} />; }
