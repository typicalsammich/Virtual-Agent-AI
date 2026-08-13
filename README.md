# Virtual Agent AI Website

This is the complete multi-page Virtual Agent AI website, packaged as a standard Next.js project for GitHub and Vercel.

## Upload to GitHub

1. Extract this ZIP.
2. Create a new empty repository on GitHub.
3. Choose **uploading an existing file**.
4. Drag every file and folder from inside the extracted `virtual-agent-ai-vercel` folder into GitHub.
5. Commit the files to the `main` branch.

Do not upload the ZIP itself into the repository. Upload the files inside it.

## Deploy with Vercel

1. Sign in to Vercel with GitHub.
2. Select **Add New > Project**.
3. Import the GitHub repository you just created.
4. Vercel should detect **Next.js** automatically.
5. Keep the default build settings and select **Deploy**.

No environment variables are required for the website to work.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production domain

The SEO metadata, robots file, and sitemap are prepared for `https://virtualagentai.org`. After the Vercel deployment succeeds, connect that domain under **Project Settings > Domains**. If a different final domain will be used, replace `https://virtualagentai.org` throughout the project before launching.
