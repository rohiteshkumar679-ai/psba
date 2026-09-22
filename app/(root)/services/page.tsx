// app/services/page.tsx

import type { Metadata } from "next";
import ServicesSection from "@/app/_components/ServicesSection";
import FinalCtaSection from "@/app/_components/FinalCtaSection";

export const metadata: Metadata = {
  title: "Accounting & Business Advisory Services in Fiji | PSBA",
  description:
    "Explore PSBA accounting, tax, payroll, financial advisory, outsourced CFO and business support services.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-[#F5F8F7] px-5 pb-8 pt-16 text-center sm:px-8 sm:pt-20 lg:px-10 lg:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
          PSBA services
        </p>

        <h1 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.045em] text-[#09243A] sm:text-5xl lg:text-6xl">
          Professional support for stronger financial decisions.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#687980]">
          Explore accounting, tax, compliance and advisory services designed
          around the needs of individuals and businesses across Fiji.
        </p>
      </section>

      <ServicesSection />
      <FinalCtaSection />
    </main>
  );
}