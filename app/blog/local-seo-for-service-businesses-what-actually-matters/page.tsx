import { BlogArticle } from "../BlogArticle";
import { createPostMetadata } from "../postMetadata";
import { postsBySlug } from "../posts";
const post = postsBySlug["local-seo-for-service-businesses-what-actually-matters"];
export const metadata = createPostMetadata(post);
export default function Page() { return <BlogArticle post={post} />; }
