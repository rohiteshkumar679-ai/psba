// components/services/ServiceDetailPage.tsx

"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeDollarSign,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FileText,
  Landmark,
  MessageSquareText,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import type { Service, ServiceIcon } from "@/data/serviceData";
import { services } from "@/data/serviceData";

const iconMap: Record<ServiceIcon, LucideIcon> = {
  bookkeeping: BookOpenCheck,
  tax: Landmark,
  payroll: ReceiptText,
  reporting: BarChart3,
  cfo: BriefcaseBusiness,
  startup: Building2,
  governance: ShieldCheck,
  grants: BadgeDollarSign,
};

type ServiceDetailPageProps = {
  service: Service;
};

export default function ServiceDetailPage({
  service,
}: ServiceDetailPageProps) {
  const Icon = iconMap[service.icon];

  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#F5F8F7] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28 lg:pt-20">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[-30rem] -z-20 h-[58rem] w-[80rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(39,117,121,0.16),transparent_65%)]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.25]
          [background-image:linear-gradient(to_right,rgba(9,36,58,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,36,58,0.06)_1px,transparent_1px)]
          [background-size:48px_48px]
          [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />

        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium text-[#718087]"
          >
            <Link href="/" className="transition-colors hover:text-[#1F696D]">
              Home
            </Link>

            <ChevronRight className="size-3.5" />

            <Link
              href="/services"
              className="transition-colors hover:text-[#1F696D]"
            >
              Services
            </Link>

            <ChevronRight className="size-3.5" />

            <span className="text-[#1F696D]">{service.shortTitle}</span>
          </nav>

          <div className="mt-12 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[#E1EDEB] text-[#1F696D]">
                  <Icon className="size-[18px]" />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8D7535]">
                  Service {service.number}
                </span>
              </div>

              <h1 className="mt-7 max-w-3xl text-balance text-4xl font-semibold leading-[1.07] tracking-[-0.045em] text-[#09243A] sm:text-5xl lg:text-[4.2rem]">
                {service.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#687980] sm:text-lg">
                {service.description}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/book-a-consultation"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#09243A] px-6 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(9,36,58,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#15435A]"
                >
                  Discuss your requirements

                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#0A273F]/15 bg-white/70 px-6 text-sm font-semibold text-[#09243A] backdrop-blur-md transition-colors hover:bg-white"
                >
                  <ArrowLeft className="size-4" />
                  All services
                </Link>
              </div>
            </motion.div>

            {/* Hero service summary */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden rounded-[1.75rem] bg-[#082338] p-7 text-white shadow-[0_35px_80px_-30px_rgba(8,35,56,0.45)] sm:p-9"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.045]
                [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
                [background-size:32px_32px]"
              />

              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 size-60 rounded-full bg-[#2F8588]/25 blur-[80px]"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#D8BC6A]">
                    <Icon className="size-5" />
                  </div>

                  <span className="text-xs font-semibold tracking-[0.15em] text-white/25">
                    PSBA
                  </span>
                </div>

                <h2 className="mt-9 text-2xl font-semibold tracking-[-0.03em]">
                  What this service can include
                </h2>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.included.slice(0, 6).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs leading-5 text-white/60"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#D8BC6A]/12">
                        <Check className="size-3 text-[#D8BC6A]" />
                      </span>

                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-xs leading-6 text-white/45">
                    Your final service scope will be tailored to your
                    organisation, records and requirements.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
              Service overview
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#09243A] sm:text-4xl">
              {service.overviewTitle}
            </h2>

            <div className="mt-6 space-y-4">
              {service.overview.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-7 text-[#687980] sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: (index % 2) * 0.08 }}
                className="rounded-2xl border border-[#0A273F]/10 bg-[#F8FAF9] p-6 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-[#E3EFED] text-[#1F696D]">
                    <CheckCircle2 className="size-[18px]" />
                  </span>

                  <span className="text-xs font-semibold text-[#A0AAAE]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-semibold text-[#09243A]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#718087]">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="relative overflow-hidden bg-[#082338] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.045]
          [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          [background-size:40px_40px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8BC6A]">
                What’s included
              </span>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Support built around your requirements.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/55 lg:justify-self-end">
              The exact scope depends on your organisation and engagement. A
              tailored service plan can include the following areas.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {service.included.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex min-h-28 items-center gap-4 bg-[#082338] p-6"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#D8BC6A]/12 text-[#D8BC6A]">
                  <Check className="size-4" />
                </span>

                <p className="text-sm font-medium leading-6 text-white/70">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <ServiceProcess />

      {/* Ideal clients */}
      <section className="bg-[#F5F8F7] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
              Who this is for
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#09243A] sm:text-4xl">
              This service may be suitable for:
            </h2>

            <ul className="mt-8 space-y-3">
              {service.idealFor.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[#0A273F]/10 bg-white p-4 text-sm font-medium text-[#405962]"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#E3EFED]">
                    <Check className="size-3.5 text-[#1F696D]" />
                  </span>

                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
              Related services
            </span>

            <div className="mt-5 space-y-3">
              {relatedServices.map((related) => {
                const RelatedIcon = iconMap[related.icon];

                return (
                  <Link
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-[#0A273F]/10 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[#1F696D]/25 hover:shadow-lg"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#E3EFED] text-[#1F696D]">
                      <RelatedIcon className="size-5" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-[#09243A]">
                        {related.title}
                      </p>

                      <p className="mt-1 line-clamp-1 text-xs text-[#718087]">
                        {related.description}
                      </p>
                    </div>

                    <ArrowUpRight className="size-4 text-[#9AA6AA] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1F696D]" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#082338] px-6 py-16 text-center text-white sm:px-10 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.05]
            [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
            [background-size:38px_38px]"
          />

          <div className="relative mx-auto max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8BC6A]">
              Speak with PSBA
            </span>

            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Need help with {service.shortTitle.toLowerCase()}?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55">
              Tell us about your current requirements and we’ll help determine
              the right approach for you or your organisation.
            </p>

            <Link
              href="/book-a-consultation"
              className="group mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D8BC6A] px-6 text-sm font-semibold text-[#082338] transition-colors hover:bg-[#E6CE89]"
            >
              Book a consultation

              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceProcess() {
  const steps = [
    {
      number: "01",
      title: "Initial conversation",
      description:
        "We discuss your situation, current concerns and the support you require.",
      icon: MessageSquareText,
    },
    {
      number: "02",
      title: "Information review",
      description:
        "We review the relevant records, responsibilities and engagement requirements.",
      icon: FileText,
    },
    {
      number: "03",
      title: "Tailored service plan",
      description:
        "You receive a clear recommended scope, process and next steps.",
      icon: ClipboardCheck,
    },
  ];

  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
            Our process
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#09243A] sm:text-4xl lg:text-5xl">
            A clear path from conversation to support.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-[#0A273F]/10 bg-[#F8FAF9] p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[#E3EFED] text-[#1F696D]">
                    <Icon className="size-5" />
                  </span>

                  <span className="text-xs font-semibold tracking-[0.12em] text-[#A0AAAE]">
                    STEP {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold text-[#09243A]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#718087]">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}