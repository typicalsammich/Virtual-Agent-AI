import { BlogArticle } from "../BlogArticle";
import { createPostMetadata } from "../postMetadata";
import { postsBySlug } from "../posts";
const post = postsBySlug["after-hours-answering-service"];
export const metadata = createPostMetadata(post);
export default function Page() { return <BlogArticle post={post} />; }
