import { BlogArticle } from "../BlogArticle";
import { createPostMetadata } from "../postMetadata";
import { postsBySlug } from "../posts";
const post = postsBySlug["google-ads-vs-local-seo-for-service-businesses"];
export const metadata = createPostMetadata(post);
export default function Page() { return <BlogArticle post={post} />; }
