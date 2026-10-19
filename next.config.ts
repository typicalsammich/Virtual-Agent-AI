import type { NextConfig } from "next";
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
];
const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/admin/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }] },
      { source: "/favicon.svg", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/og-image.png", headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }] },
    ];
  },
  async redirects() {
    return [
      { source: "/ai-agent-for-plumbers", destination: "/ai-receptionist-for-plumbers", permanent: true },
      { source: "/ai-agent-for-hvac", destination: "/ai-receptionist-for-hvac", permanent: true },
      { source: "/ai-agent-for-roofers", destination: "/ai-receptionist-for-roofers", permanent: true },
      { source: "/ai-agent-for-dental-offices", destination: "/ai-receptionist-for-dentists", permanent: true },
      { source: "/:path*", has: [{ type: "host", value: "virtualagentai.org" }], destination: "https://www.virtualagentai.org/:path*", permanent: true }
    ];
  },
};
export default nextConfig;
