// app/insights/page.tsx

import type { Metadata } from "next";
import InsightsPageContent from "@/app/_components/pages/insights/InsightsPageContent";
import FinalCtaSection from "@/app/_components/FinalCtaSection";

export const metadata: Metadata = {
  title: "Accounting, Tax & Business Insights Fiji | PSBA",
  description:
    "Explore practical accounting, tax, compliance, cash-flow and business advisory insights from Pacifika Smart Business Advisory.",

  alternates: {
    canonical: "/insights",
  },

  openGraph: {
    title: "Accounting & Business Insights | PSBA",
    description:
      "Practical financial knowledge to help individuals and businesses across Fiji make informed decisions.",
    url: "/insights",
    type: "website",
  },
};

export default function InsightsPage() {
  return (
    <main>
      <InsightsPageContent />
      <FinalCtaSection />
    </main>
  );
}