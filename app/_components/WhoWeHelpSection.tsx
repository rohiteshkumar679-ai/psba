// components/home/WhoWeHelpSection.tsx

"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Factory,
  Rocket,
  UserRound,
} from "lucide-react";
import Link from "next/link";

type Audience = {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  needs: string[];
};

const audiences: Audience[] = [
  {
    number: "01",
    title: "Individuals",
    description:
      "Clear assistance with personal tax obligations, financial records and important financial decisions.",
    href: "/who-we-help/individuals",
    icon: UserRound,
    needs: [
      "Personal tax returns",
      "Tax compliance",
      "Financial guidance",
    ],
  },
  {
    number: "02",
    title: "Startups & Entrepreneurs",
    description:
      "The structure, systems and financial guidance needed to start correctly and grow with confidence.",
    href: "/who-we-help/startups",
    icon: Rocket,
    needs: [
      "Business registration",
      "Financial setup",
      "Planning and forecasting",
    ],
  },
  {
    number: "03",
    title: "Small & Medium Businesses",
    description:
      "Ongoing financial management and advisory support for businesses balancing daily operations with growth.",
    href: "/who-we-help/small-businesses",
    icon: Building2,
    needs: [
      "Accounting and payroll",
      "Tax and compliance",
      "Cash-flow management",
    ],
  },
  {
    number: "04",
    title: "Established Organisations",
    description:
      "Advanced reporting, governance and strategic financial support for larger or more complex organisations.",
    href: "/who-we-help/established-businesses",
    icon: Factory,
    needs: [
      "Financial reporting",
      "Internal controls",
      "Outsourced CFO support",
    ],
  },
];

export default function WhoWeHelpSection() {
  return (
    <section
      aria-labelledby="who-we-help-heading"
      className="relative isolate overflow-hidden bg-[#082338] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.045]
        [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
        [background-size:44px_44px]"
      />

      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-40 -z-10 size-[38rem] rounded-full bg-[#2F8588]/20 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -left-40 -z-10 size-[34rem] rounded-full bg-[#D8BC6A]/10 blur-[130px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#D8BC6A]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8BC6A]">
                Who we help
              </span>
            </div>

            <h2
              id="who-we-help-heading"
              className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              Support designed around where you are and where you’re going.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:justify-self-end"
          >
            <p className="max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Whether you are managing personal obligations, starting a new
              venture or leading an established organisation, PSBA can provide
              the right level of financial support.
            </p>
          </motion.div>
        </div>

        {/* Audience cards */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:mt-16">
          {audiences.map((audience, index) => (
            <AudienceCard
              key={audience.title}
              audience={audience}
              index={index}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-base font-semibold text-white">
              Your situation doesn’t fit neatly into a category?
            </p>

            <p className="mt-1 text-sm text-white/50">
              Speak with our team and we’ll help determine the right approach.
            </p>
          </div>

          <Link
            href="/book-a-consultation"
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#D8BC6A] px-5 text-sm font-semibold text-[#082338] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E5CD89] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#082338]"
          >
            Discuss your needs

            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

type AudienceCardProps = {
  audience: Audience;
  index: number;
};

function AudienceCard({ audience, index }: AudienceCardProps) {
  const Icon = audience.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.6,
        delay: (index % 2) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative bg-[#082338] p-6 transition-colors duration-500 hover:bg-[#0B2D46] sm:p-8 lg:min-h-[410px] lg:p-10"
    >
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 size-40 bg-[#2F8588]/0 blur-[70px] transition-colors duration-500 group-hover:bg-[#2F8588]/15"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between">
          <div className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[#D8BC6A] transition-all duration-300 group-hover:border-[#D8BC6A]/25 group-hover:bg-[#D8BC6A]/10">
            <Icon aria-hidden="true" className="size-5" />
          </div>

          <span className="text-xs font-semibold tracking-[0.14em] text-white/20">
            {audience.number}
          </span>
        </div>

        <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl">
          {audience.title}
        </h3>

        <p className="mt-3 max-w-lg text-sm leading-7 text-white/50">
          {audience.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {audience.needs.map((need) => (
            <span
              key={need}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium text-white/60 sm:text-xs"
            >
              {need}
            </span>
          ))}
        </div>

        <Link
          href={audience.href}
          aria-label={`Learn how PSBA helps ${audience.title}`}
          className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-semibold text-white lg:mt-auto"
        >
          See how we can help

          <span className="flex size-9 items-center justify-center rounded-full border border-white/10 text-[#D8BC6A] transition-all duration-300 group-hover:border-[#D8BC6A] group-hover:bg-[#D8BC6A] group-hover:text-[#082338]">
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </Link>
      </div>
    </motion.article>
  );
}