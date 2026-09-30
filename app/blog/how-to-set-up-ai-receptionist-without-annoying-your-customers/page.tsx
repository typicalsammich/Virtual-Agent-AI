import { BlogArticle } from "../BlogArticle";
import { createPostMetadata } from "../postMetadata";
import { postsBySlug } from "../posts";
const post = postsBySlug["how-to-set-up-ai-receptionist-without-annoying-your-customers"];
export const metadata = createPostMetadata(post);
export default function Page() { return <BlogArticle post={post} />; }
