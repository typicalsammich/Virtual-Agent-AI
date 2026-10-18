Virtual Agent AI — Section 2, Task 8: Industry Service schema patch

Replace app/components/SeoContentPage.tsx in GitHub with the file in this ZIP.

- Adds Service schema to the 12 industry pages under /ai-receptionist-for-*.
- Identifies the service as AI receptionist and phone answering, provided by Virtual Agent AI (NOT the industry trade itself).
- Preserves existing Service schema for /services/* pages and existing WebPage and FAQPage markup.
- Does not add Service schema to blog posts or other general pages.
- No changes to page design, visible content, or blog files.

After deployment validate:
https://www.virtualagentai.org/ai-receptionist-for-roofers
https://www.virtualagentai.org/ai-receptionist-for-dentists
Confirm Service is detected and there are no errors.
