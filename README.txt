Virtual Agent AI — obsolete HTML meta keywords cleanup

Replace these three files at the same repository paths:
app/layout.tsx
app/blog/page.tsx
app/blog/postMetadata.ts

Only the Next.js Metadata 'keywords' entries were removed.
The blog post keyword data and JSON-LD Article keywords were intentionally preserved.

IMPORTANT: This patch is based on the uploaded ZIP dated October 18.
If you've edited any of these three files in GitHub since creating that ZIP,
apply the one-line deletions manually instead of overwriting newer changes.

After Vercel deploys, check View Source on the homepage, /blog, and a blog article.
Searching for name="keywords" should return zero matches.
