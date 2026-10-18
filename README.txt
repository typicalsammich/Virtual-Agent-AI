Virtual Agent AI — Service schema fix (Task 7)

Replace app/components/SeoContentPage.tsx at its exact repository path.

Adds Service JSON-LD to pages rendered by SeoContentPage only when data.path starts with /services/.
Preserves existing WebPage and FAQPage schemas, visible content and styling.
Blog pages do not receive Service schema.

After deployment, test:
https://www.virtualagentai.org/services/ai-call-center
https://www.virtualagentai.org/services/lead-generation-follow-up
https://www.virtualagentai.org/services/social-media-marketing
https://www.virtualagentai.org/services/paid-ad-campaigns
https://www.virtualagentai.org/services/seo-websites

Note: This patch is based on the full website ZIP supplied in this chat.
