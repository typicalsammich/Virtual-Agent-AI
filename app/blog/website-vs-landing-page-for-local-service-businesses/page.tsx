import { BlogArticle } from "../BlogArticle";
import { createPostMetadata } from "../postMetadata";
import { postsBySlug } from "../posts";
const post = postsBySlug["website-vs-landing-page-for-local-service-businesses"];
export const metadata = createPostMetadata(post);
export default function Page() { return <BlogArticle post={post} />; }
