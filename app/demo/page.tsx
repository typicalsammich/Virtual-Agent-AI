import type { Metadata } from "next";
import { DemoExperience } from "./DemoExperience";

const siteUrl = "https://virtualagentai.org";

export const metadata: Metadata = {
  title: "Interactive AI Receptionist Demo and Call Plan",
  description: "Try an interactive AI receptionist demo for appointment booking, lead qualification, call answering, and after-hours coverage.",
  alternates: { canonical: `${siteUrl}/demo` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: `${siteUrl}/demo`,
    title: "Interactive AI Receptionist Demo and Call Plan",
    description: "See how an AI receptionist could answer, qualify, route, and book calls for your business.",
    siteName: "Virtual Agent AI",
  },
};

export default function Demo() {
  return <DemoExperience />;
}
