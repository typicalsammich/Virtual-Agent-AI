import { BlogArticle } from "../BlogArticle";
import { createPostMetadata } from "../postMetadata";
import { postsBySlug } from "../posts";
const post = postsBySlug["how-to-turn-more-inbound-calls-into-booked-calls"];
export const metadata = createPostMetadata(post);
export default function Page() { return <BlogArticle post={post} />; }
