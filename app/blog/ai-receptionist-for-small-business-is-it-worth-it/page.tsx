import { BlogArticle } from "../BlogArticle";
import { createPostMetadata } from "../postMetadata";
import { postsBySlug } from "../posts";
const post = postsBySlug["ai-receptionist-for-small-business-is-it-worth-it"];
export const metadata = createPostMetadata(post);
export default function Page() { return <BlogArticle post={post} />; }
