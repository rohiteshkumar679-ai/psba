// app/about/page.tsx

import FinalCtaSection from "@/app/_components/FinalCtaSection";
import AboutPageContent from "@/app/_components/pages/about/AboutPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PSBA | Accounting & Business Advisors in Fiji",
  description:
    "Learn about Pacifika Smart Business Advisory, our experienced team, professional values and commitment to supporting individuals and businesses across Fiji.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Pacifika Smart Business Advisory",
    description:
      "Meet the PSBA team and discover our approach to professional accounting, taxation and business advisory services in Fiji.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutPageContent />
      <FinalCtaSection />
    </main>
  );
}