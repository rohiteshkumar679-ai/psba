// components/home/ServicesSection.tsx

"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeDollarSign,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  Landmark,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

type Service = {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  features: string[];
  featured?: boolean;
};

const services: Service[] = [
  {
    number: "01",
    title: "Accounting & Bookkeeping",
    description:
      "Reliable financial records that give you a clear, current understanding of your business performance.",
    href: "/services/accounting-bookkeeping",
    icon: BookOpenCheck,
    features: [
      "Day-to-day bookkeeping",
      "Account reconciliation",
      "Management accounts",
      "Financial record maintenance",
    ],
    featured: true,
  },
  {
    number: "02",
    title: "Tax & Compliance",
    description:
      "Practical support to help individuals and businesses meet their Fijian tax and regulatory obligations.",
    href: "/services/tax-compliance",
    icon: Landmark,
    features: [
      "Income tax returns",
      "VAT preparation",
      "Tax planning",
      "Regulatory compliance",
    ],
  },
  {
    number: "03",
    title: "Payroll Services",
    description:
      "Accurate and dependable payroll support that helps your team get paid correctly and on time.",
    href: "/services/payroll",
    icon: ReceiptText,
    features: [
      "Payroll processing",
      "Employee records",
      "Statutory deductions",
      "Payroll reporting",
    ],
  },
  {
    number: "04",
    title: "Financial Reporting & Advisory",
    description:
      "Turn financial information into practical insight for stronger planning and better decisions.",
    href: "/services/financial-reporting-advisory",
    icon: BarChart3,
    features: [
      "Financial statements",
      "Performance reporting",
      "Cash-flow analysis",
      "Budgeting and forecasting",
    ],
  },
  {
    number: "05",
    title: "Outsourced CFO",
    description:
      "Senior financial leadership and strategic guidance without the cost of hiring a full-time CFO.",
    href: "/services/outsourced-cfo",
    icon: BriefcaseBusiness,
    features: [
      "Financial strategy",
      "Board-level reporting",
      "Growth planning",
      "Cash-flow management",
    ],
  },
  {
    number: "06",
    title: "Business Startup Support",
    description:
      "Start your business with the right structure, registrations and financial systems from day one.",
    href: "/services/business-startup-support",
    icon: Building2,
    features: [
      "Business registration",
      "Entity structuring",
      "Financial setup",
      "Startup guidance",
    ],
  },
  {
    number: "07",
    title: "Governance & Internal Controls",
    description:
      "Strengthen accountability, manage risk and protect your organisation with effective internal systems.",
    href: "/services/governance-internal-controls",
    icon: ShieldCheck,
    features: [
      "Internal control reviews",
      "Risk assessments",
      "Policy development",
      "Governance support",
    ],
  },
  {
    number: "08",
    title: "Grants & SME Support",
    description:
      "Guidance for SMEs seeking funding opportunities, stronger systems and sustainable business growth.",
    href: "/services/grants-sme-support",
    icon: BadgeDollarSign,
    features: [
      "Grant application support",
      "Business planning",
      "Financial projections",
      "SME advisory",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative isolate overflow-hidden bg-[#F6F8F7] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-15rem] top-[-12rem] -z-10 size-[36rem] rounded-full bg-[#287A7D]/8 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-16rem] left-[-14rem] -z-10 size-[34rem] rounded-full bg-[#D4B55F]/8 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section introduction */}
        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
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
              <span className="h-px w-8 bg-[#B4994C]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
                What we do
              </span>
            </div>

            <h2
              id="services-heading"
              className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#09243A] sm:text-4xl lg:text-5xl"
            >
              Financial expertise for every stage of your business.
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
            <p className="max-w-xl text-sm leading-7 text-[#65777F] sm:text-base">
              From everyday accounting and compliance to strategic financial
              leadership, PSBA provides practical support designed around your
              responsibilities, challenges and ambitions.
            </p>

            <Link
              href="/services"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1F696D] transition-colors hover:text-[#09243A] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F696D] focus-visible:ring-offset-4"
            >
              Explore all services

              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-5 flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#0A273F]/10 bg-white px-6 py-6 shadow-[0_14px_40px_rgba(10,39,63,0.05)] sm:flex-row sm:items-center sm:px-8"
        >
          <div>
            <p className="text-base font-semibold text-[#09243A]">
              Not sure which service your business needs?
            </p>

            <p className="mt-1 text-sm leading-6 text-[#718087]">
              Tell us about your current challenges and we’ll help identify the
              right level of support.
            </p>
          </div>

          <Link
            href="/book-a-consultation"
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#09243A] px-5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(9,36,58,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#15435A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F696D] focus-visible:ring-offset-2"
          >
            Let’s talk

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

type ServiceCardProps = {
  service: Service;
  index: number;
};

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  if (service.featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: index * 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group relative isolate overflow-hidden rounded-2xl bg-[#09243A] p-6 shadow-[0_22px_60px_-24px_rgba(9,36,58,0.45)] md:col-span-2 sm:p-8 lg:p-9"
      >
        {/* Decorative grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]
          [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          [background-size:32px_32px]"
        />

        {/* Decorative glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 -z-10 size-64 rounded-full bg-[#2E8588]/25 blur-[80px]"
        />

        <div className="grid gap-10 sm:grid-cols-[1.15fr_0.85fr] sm:items-end">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-[#DFC477]">
                <Icon aria-hidden="true" className="size-5" />
              </div>

              <span className="text-xs font-semibold tracking-[0.12em] text-white/30">
                {service.number}
              </span>
            </div>

            <div className="mt-8">
              <span className="rounded-full border border-[#DFC477]/20 bg-[#DFC477]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#DFC477]">
                Core service
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                {service.title}
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/55">
                {service.description}
              </p>
            </div>
          </div>

          <div>
            <ul className="space-y-3">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-white/70"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#2E8588]/25">
                    <Check
                      aria-hidden="true"
                      className="size-3 text-[#8EC8C8]"
                    />
                  </span>

                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={service.href}
              aria-label={`Learn more about ${service.title}`}
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#DFC477] transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFC477]"
            >
              Learn more

              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-2xl border border-[#0A273F]/10 bg-white p-6 shadow-[0_14px_40px_rgba(10,39,63,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1F696D]/25 hover:shadow-[0_22px_50px_rgba(10,39,63,0.09)] sm:p-7"
    >
      {/* Hover line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[#1F696D] to-[#C2A453] transition-transform duration-500 group-hover:scale-x-100"
      />

      <div className="flex items-start justify-between">
        <div className="flex size-11 items-center justify-center rounded-xl border border-[#1F696D]/10 bg-[#EAF3F2] text-[#1F696D] transition-colors duration-300 group-hover:bg-[#1F696D] group-hover:text-white">
          <Icon aria-hidden="true" className="size-5" />
        </div>

        <span className="text-xs font-semibold tracking-[0.12em] text-[#9AA6AA]">
          {service.number}
        </span>
      </div>

      <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em] text-[#09243A]">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#718087]">
        {service.description}
      </p>

      <ul className="mt-6 space-y-2.5">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2.5 text-xs text-[#50666F]"
          >
            <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[#EAF3F2]">
              <Check
                aria-hidden="true"
                className="size-2.5 text-[#1F696D]"
              />
            </span>

            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={service.href}
        aria-label={`Learn more about ${service.title}`}
        className="mt-auto flex items-center justify-between border-t border-[#0A273F]/8 pt-5 text-sm font-semibold text-[#1F696D] focus-visible:outline-none"
      >
        Learn more

        <span className="flex size-8 items-center justify-center rounded-full border border-[#0A273F]/10 transition-all duration-300 group-hover:border-[#1F696D] group-hover:bg-[#1F696D] group-hover:text-white">
          <ArrowUpRight
            aria-hidden="true"
            className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </Link>
    </motion.article>
  );
}