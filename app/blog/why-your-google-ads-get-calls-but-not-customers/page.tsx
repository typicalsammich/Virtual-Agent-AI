import { BlogArticle } from "../BlogArticle";
import { createPostMetadata } from "../postMetadata";
import { postsBySlug } from "../posts";
const post = postsBySlug["why-your-google-ads-get-calls-but-not-customers"];
export const metadata = createPostMetadata(post);
export default function Page() { return <BlogArticle post={post} />; }
