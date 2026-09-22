// components/outsourcing/OutsourcingPageContent.tsx

"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  FileBarChart,
  FileCheck2,
  Handshake,
  Minus,
  Plus,
  ReceiptText,
  RefreshCcw,
  ShieldCheck,
  TrendingUp,
  UsersRound,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Item = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const benefits: Item[] = [
  {
    title: "Experienced support",
    description:
      "Access professional accounting and financial knowledge without recruiting a complete internal team.",
    icon: UsersRound,
  },
  {
    title: "Reduced workload",
    description:
      "Free your internal team from recurring financial administration so they can focus on core operations.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Flexible capacity",
    description:
      "Adjust the level of support as your business, reporting requirements and transaction volumes change.",
    icon: TrendingUp,
  },
  {
    title: "Greater visibility",
    description:
      "Receive structured financial information that helps management understand performance and obligations.",
    icon: BarChart3,
  },
];

const outsourcedServices: Item[] = [
  {
    title: "Bookkeeping",
    description:
      "Recording transactions, maintaining ledgers, reconciling accounts and organising financial documents.",
    icon: WalletCards,
  },
  {
    title: "Payroll support",
    description:
      "Payroll preparation, employee records, deductions and regular payroll reporting.",
    icon: ReceiptText,
  },
  {
    title: "Tax & compliance",
    description:
      "Support with tax preparation, VAT responsibilities, documentation and regulatory deadlines.",
    icon: FileCheck2,
  },
  {
    title: "Financial reporting",
    description:
      "Regular management reports, financial statements and clearer visibility over business performance.",
    icon: FileBarChart,
  },
  {
    title: "Cash-flow management",
    description:
      "Monitor incoming and outgoing cash and prepare forward-looking cash-flow information.",
    icon: CircleDollarSign,
  },
  {
    title: "Outsourced CFO",
    description:
      "Higher-level financial oversight, forecasting, strategy and decision support for management.",
    icon: ShieldCheck,
  },
];

const engagementModels = [
  {
    number: "01",
    title: "Ongoing finance function",
    description:
      "PSBA manages agreed recurring finance activities as an extension of your business.",
    suitableFor:
      "Businesses that need consistent monthly accounting and finance support.",
  },
  {
    number: "02",
    title: "Selected service support",
    description:
      "Outsource specific functions such as bookkeeping, payroll, reporting or compliance.",
    suitableFor:
      "Businesses that already manage some finance activities internally.",
  },
  {
    number: "03",
    title: "Project or catch-up support",
    description:
      "Receive temporary assistance for backlogs, system changes, reporting projects or business transitions.",
    suitableFor:
      "Businesses facing a short-term capacity or specialist knowledge gap.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We review your current processes, responsibilities, systems and reporting requirements.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Design",
    description:
      "We define the outsourced scope, workflow, communication method and responsibilities.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Transition",
    description:
      "Records, information and recurring activities are transferred through a structured onboarding process.",
    icon: RefreshCcw,
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "PSBA provides the agreed services, regular communication and ongoing financial support.",
    icon: Handshake,
  },
];

const workflowItems = [
  {
    title: "Monthly bookkeeping",
    detail: "Records updated",
    status: "Completed",
  },
  {
    title: "Payroll preparation",
    detail: "Next payroll cycle",
    status: "Scheduled",
  },
  {
    title: "Compliance calendar",
    detail: "Obligations monitored",
    status: "On track",
  },
  {
    title: "Management reporting",
    detail: "Monthly performance",
    status: "In progress",
  },
];

const faqs = [
  {
    question: "What finance activities can we outsource to PSBA?",
    answer:
      "Depending on the agreed engagement, support may include bookkeeping, payroll, tax preparation, compliance administration, financial reporting, cash-flow monitoring and outsourced CFO services.",
  },
  {
    question: "Do we need to outsource our entire finance function?",
    answer:
      "No. You can outsource only the activities your business needs help with. PSBA can work alongside your internal employees or provide a broader ongoing finance function.",
  },
  {
    question: "Will we still maintain control over our finances?",
    answer:
      "Yes. Outsourcing transfers agreed work and responsibilities, not ownership of your financial decisions. Management continues to approve important decisions and receives relevant information and reports.",
  },
  {
    question: "Can the service grow with our business?",
    answer:
      "The service scope can be reviewed as transaction volumes, employee numbers, reporting requirements and business complexity change.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing depends on the services required, transaction volume, reporting frequency, complexity and condition of the existing records. PSBA can provide a tailored proposal after an initial review.",
  },
];

export default function OutsourcingPageContent() {
  return (
    <>
      <OutsourcingHero />
      <BenefitsStrip />
      <OutsourcingServices />
      <EngagementModels />
      <OutsourcingProcess />
      <IdealClients />
      <OutsourcingFaq />
      <OutsourcingCta />
    </>
  );
}

function OutsourcingHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F5F8F7] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28 lg:pt-20">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[-28rem] -z-20 h-[56rem] w-[78rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(39,117,121,0.16),transparent_65%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.25]
        [background-image:linear-gradient(to_right,rgba(9,36,58,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,36,58,0.06)_1px,transparent_1px)]
        [background-size:48px_48px]
        [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center gap-2 text-xs font-medium text-[#718087]">
          <Link href="/" className="hover:text-[#1F696D]">
            Home
          </Link>

          <ChevronRight className="size-3.5" />

          <span className="text-[#1F696D]">Outsourcing</span>
        </nav>

        <div className="mt-12 grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#B4994C]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
                Finance outsourcing
              </span>
            </div>

            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-[#09243A] sm:text-5xl lg:text-[4.25rem]">
              Outsource the workload.
              <span className="block text-[#277579]">
                Keep financial control.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#687980] sm:text-lg">
              Access flexible accounting and finance support without building
              an entire internal department. PSBA works as an extension of your
              business while you remain in control of every important decision.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-a-consultation"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#09243A] px-6 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(9,36,58,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#15435A]"
              >
                Discuss outsourcing

                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#outsourced-services"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#0A273F]/15 bg-white/70 px-6 text-sm font-semibold text-[#09243A] backdrop-blur-md transition-colors hover:bg-white"
              >
                Explore capabilities
              </Link>
            </div>
          </motion.div>

          <OutsourcingVisual />
        </div>
      </div>
    </section>
  );
}

function OutsourcingVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, scale: 0.97 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#287A7D]/20 blur-[90px]"
      />

      <div className="overflow-hidden rounded-[1.75rem] bg-[#082338] p-2 shadow-[0_35px_80px_-30px_rgba(8,35,56,0.45)]">
        <div className="rounded-[1.35rem] border border-white/10 bg-[#0A2941] p-5 sm:p-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#D8BC6A]/15 text-[#D8BC6A]">
                <BriefcaseBusiness className="size-[18px]" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Outsourced finance function
                </p>

                <p className="mt-0.5 text-[10px] text-white/40">
                  Example monthly workflow
                </p>
              </div>
            </div>

            <span className="rounded-full bg-[#72BE9D]/10 px-2.5 py-1 text-[9px] font-semibold text-[#83CBAE]">
              Active
            </span>
          </div>

          <div className="mt-5 space-y-3">
            {workflowItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.08 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                  <CheckCircle2 className="size-4 text-[#78C3A4]" />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-white">
                    {item.title}
                  </p>

                  <p className="mt-0.5 text-[9px] text-white/40">
                    {item.detail}
                  </p>
                </div>

                <span className="text-[9px] font-medium text-[#D8BC6A]">
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-[#D8BC6A]/15 bg-[#D8BC6A]/8 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D8BC6A]">
              Your business
            </p>

            <p className="mt-1.5 text-xs leading-5 text-white/50">
              Retain visibility and decision authority while PSBA manages the
              agreed finance workload.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BenefitsStrip() {
  return (
    <section className="bg-[#082338] px-5 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className={`py-8 sm:p-7 lg:py-10 ${
                index !== benefits.length - 1
                  ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <Icon className="size-5 text-[#D8BC6A]" />

              <h2 className="mt-4 text-sm font-semibold text-white">
                {benefit.title}
              </h2>

              <p className="mt-2 text-xs leading-5 text-white/45">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function OutsourcingServices() {
  return (
    <section
      id="outsourced-services"
      className="scroll-mt-28 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What you can outsource"
          title="Flexible support across your finance operations."
          description="Select the services you need now and adjust the scope as your business and internal capabilities change."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {outsourcedServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.07 }}
                className="group rounded-2xl border border-[#0A273F]/10 bg-[#F8FAF9] p-7 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_50px_rgba(9,36,58,0.09)]"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-[#E3EFED] text-[#1F696D] transition-colors group-hover:bg-[#1F696D] group-hover:text-white">
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-7 text-xl font-semibold text-[#09243A]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#718087]">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EngagementModels() {
  return (
    <section className="bg-[#F5F8F7] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Flexible engagement"
          title="Choose the level of support that fits."
          description="Outsourcing does not need to be all or nothing. PSBA can support a complete function, an individual process or a temporary project."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {engagementModels.map((model, index) => (
            <motion.article
              key={model.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-[#0A273F]/10 bg-white p-7 sm:p-8"
            >
              <span className="text-xs font-semibold tracking-[0.15em] text-[#8D7535]">
                MODEL {model.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold text-[#09243A]">
                {model.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#718087]">
                {model.description}
              </p>

              <div className="mt-7 border-t border-[#0A273F]/10 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1F696D]">
                  Best suited for
                </p>

                <p className="mt-2 text-xs leading-6 text-[#64777F]">
                  {model.suitableFor}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutsourcingProcess() {
  return (
    <section className="relative overflow-hidden bg-[#082338] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          dark
          eyebrow="The transition process"
          title="A structured path to dependable support."
          description="We define responsibilities and information flows before recurring work begins."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-[#082338] p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-white/[0.06] text-[#D8BC6A]">
                    <Icon className="size-5" />
                  </span>

                  <span className="text-xs font-semibold text-white/25">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-semibold">{step.title}</h3>

                <p className="mt-3 text-xs leading-6 text-white/45">
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

function IdealClients() {
  const clients = [
    "Growing businesses without a full internal finance team",
    "Companies with bookkeeping or reporting backlogs",
    "Organisations needing additional finance capacity",
    "Owners requiring better financial visibility",
    "Businesses improving internal systems",
    "Companies preparing for growth or transition",
  ];

  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
            Who it’s for
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#09243A] sm:text-4xl">
            Is outsourcing right for your business?
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#718087]">
            Outsourcing may be suitable when financial administration is taking
            time away from core operations or when the business needs skills it
            cannot justify hiring full-time.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center gap-3 rounded-xl border border-[#0A273F]/10 bg-[#F8FAF9] p-4"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#E3EFED]">
                <Check className="size-3.5 text-[#1F696D]" />
              </span>

              <p className="text-sm font-medium leading-6 text-[#405962]">
                {client}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutsourcingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F5F8F7] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
            Outsourcing FAQ
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#09243A] sm:text-4xl">
            Common questions about outsourcing.
          </h2>
        </div>

        <div className="divide-y divide-[#0A273F]/10 border-y border-[#0A273F]/10">
          {faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                  className="flex w-full items-start justify-between gap-5 py-6 text-left"
                >
                  <span className="text-base font-semibold text-[#09243A]">
                    {faq.question}
                  </span>

                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full border ${
                      open
                        ? "border-[#1F696D] bg-[#1F696D] text-white"
                        : "border-[#0A273F]/15 bg-white text-[#09243A]"
                    }`}
                  >
                    {open ? (
                      <Minus className="size-4" />
                    ) : (
                      <Plus className="size-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-7 pr-10 text-sm leading-7 text-[#687980]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OutsourcingCta() {
  return (
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
            Work with PSBA
          </span>

          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            Build the finance support your business needs.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55">
            Tell us which financial activities are creating pressure and we’ll
            help determine an appropriate outsourcing arrangement.
          </p>

          <Link
            href="/book-a-consultation"
            className="group mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D8BC6A] px-6 text-sm font-semibold text-[#082338] transition-colors hover:bg-[#E6CE89]"
          >
            Discuss your requirements

            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
};

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <span
        className={`text-xs font-semibold uppercase tracking-[0.18em] ${
          dark ? "text-[#D8BC6A]" : "text-[#8D7535]"
        }`}
      >
        {eyebrow}
      </span>

      <h2
        className={`mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-[#09243A]"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
          dark ? "text-white/55" : "text-[#687980]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}