import { BlogArticle } from "../BlogArticle";
import { createPostMetadata } from "../postMetadata";
import { postsBySlug } from "../posts";
const post = postsBySlug["ai-receptionist-pricing-what-should-a-business-pay-for"];
export const metadata = createPostMetadata(post);
export default function Page() { return <BlogArticle post={post} />; }
