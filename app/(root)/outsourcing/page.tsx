// app/outsourcing/page.tsx

import type { Metadata } from "next";
import OutsourcingPageContent from "@/app/_components/pages/outsourcing/OutsourcingPageContent";

export const metadata: Metadata = {
  title: "Finance & Accounting Outsourcing in Fiji | PSBA",
  description:
    "Outsource bookkeeping, payroll, financial reporting, compliance and finance operations to the experienced PSBA team.",

  alternates: {
    canonical: "/outsourcing",
  },

  openGraph: {
    title: "Finance & Accounting Outsourcing | PSBA",
    description:
      "Flexible outsourced accounting and finance support for growing businesses across Fiji.",
    url: "/outsourcing",
    type: "website",
  },
};

export default function OutsourcingPage() {
  return (
    <main>
      <OutsourcingPageContent />
    </main>
  );
}