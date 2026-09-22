// app/page.tsx

import type { Metadata } from "next";
import HeroSection from "@/app/_components/HeroSection";
import TrustStrip from "../_components/TrustStrip";
import ServicesSection from "../_components/ServicesSection";
import WhyPsbaSection from "../_components/WhyPsbaSection";
import WhoWeHelpSection from "../_components/WhoWeHelpSection";
import FeaturedAdvisorySection from "../_components/FeaturedAdvisorySection";
import HowItWorksSection from "../_components/HowItWorksSection";
import AboutPreviewSection from "../_components/AboutPreviewSection";
import InsightsSection from "../_components/InsightsSection";
import FaqSection from "../_components/FaqSection";
import FinalCtaSection from "../_components/FinalCtaSection";
import { redirectIfAuth } from "@/utils/redirects";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = {
  title: "Accounting & Business Advisory Services in Fiji | PSBA",

  description:
    "PSBA provides professional accounting, tax, compliance and business advisory services for individuals and growing businesses across Fiji.",

  keywords: [
    "accounting services Fiji",
    "business advisory Fiji",
    "accountant Suva",
    "accountant Ba",
    "tax services Fiji",
    "bookkeeping Fiji",
    "financial advisory Fiji",
    "PSBA Fiji",
  ],

  alternates: {
    canonical: "https://www.pacifikaadvisory.com",
  },

  openGraph: {
    title: "Accounting & Business Advisory Services in Fiji | PSBA",
    description:
      "Reliable accounting, tax, compliance and strategic advisory support for businesses across Fiji.",
    url: "https://www.pacifikaadvisory.com",
    siteName: "Pacifika Smart Business Advisory",
    locale: "en_FJ",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Accounting & Business Advisory Services in Fiji | PSBA",
    description:
      "Reliable accounting, tax, compliance and strategic advisory support for businesses across Fiji.",
  },
};

export default async function HomePage() {

  const supabase = await createClient()

  const {data: {user}} = await supabase.auth.getUser()

  console.log(user)

  return (
  <>
  <HeroSection />
  <TrustStrip />
  <ServicesSection />
  <WhyPsbaSection />
  <WhoWeHelpSection />
  <FeaturedAdvisorySection />
  <HowItWorksSection />
  <AboutPreviewSection />
  <InsightsSection />
  <FaqSection />
  <FinalCtaSection />
  </>
  )
}