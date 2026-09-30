import { BlogArticle } from "../BlogArticle";
import { createPostMetadata } from "../postMetadata";
import { postsBySlug } from "../posts";
const post = postsBySlug["why-service-business-leads-go-cold-and-how-to-follow-up-faster"];
export const metadata = createPostMetadata(post);
export default function Page() { return <BlogArticle post={post} />; }
