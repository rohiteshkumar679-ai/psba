// app/who-we-help/page.tsx

import type { Metadata } from "next";
import FinalCtaSection from "@/app/_components/FinalCtaSection";
import WhoWeHelpSection from "@/app/_components/WhoWeHelpSection";

export const metadata: Metadata = {
  title: "Who We Help | Accounting & Business Support | PSBA",
  description:
    "Discover how PSBA supports individuals, startups, SMEs and established organisations across Fiji.",

  alternates: {
    canonical: "/who-we-help",
  },
};

export default function WhoWeHelpPage() {
  return (
    <main>
      <WhoWeHelpSection />
      <FinalCtaSection />
    </main>
  );
}