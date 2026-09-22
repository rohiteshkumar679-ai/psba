// components/home/HowItWorksSection.tsx

"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Handshake,
  MessageSquareText,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Start with a conversation",
    description:
      "Tell us about your current situation, responsibilities, challenges and business goals.",
    icon: MessageSquareText,
    details: [
      "Initial consultation",
      "Discuss your priorities",
      "Identify immediate concerns",
    ],
  },
  {
    number: "02",
    title: "Receive a tailored approach",
    description:
      "We assess what you need and recommend the right services, scope and working arrangement.",
    icon: ClipboardCheck,
    details: [
      "Clear service recommendation",
      "Defined scope of work",
      "Transparent next steps",
    ],
  },
  {
    number: "03",
    title: "Move forward with confidence",
    description:
      "Work with the PSBA team to improve compliance, financial clarity and business decision-making.",
    icon: Handshake,
    details: [
      "Professional onboarding",
      "Ongoing communication",
      "Practical financial guidance",
    ],
  },
];

export default function HowItWorksSection() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="relative isolate overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-3/4 -translate-x-1/2 rounded-full bg-[#287A7D]/5 blur-[130px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
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
                How it works
              </span>
            </div>

            <h2
              id="how-it-works-heading"
              className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#09243A] sm:text-4xl lg:text-5xl"
            >
              Getting the right support
              <span className="block text-[#277579]">
                should feel straightforward.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-xl text-sm leading-7 text-[#687980] sm:text-base lg:justify-self-end"
          >
            From the first conversation to ongoing support, PSBA follows a
            clear process designed to understand your needs and make every next
            step easy to follow.
          </motion.p>
        </div>

        {/* Process timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-12 overflow-hidden rounded-[1.75rem] bg-[#082338] shadow-[0_30px_80px_-35px_rgba(8,35,56,0.45)] lg:mt-16"
        >
          {/* Grid background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.045]
            [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
            [background-size:36px_36px]"
          />

          {/* Ambient glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 -top-32 size-80 rounded-full bg-[#2D8184]/20 blur-[100px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -right-32 size-80 rounded-full bg-[#D8BC6A]/10 blur-[100px]"
          />

          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[16.66%] right-[16.66%] top-[69px] hidden h-px bg-white/10 lg:block"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full origin-left bg-gradient-to-r from-[#2F8588] via-[#5FA5A2] to-[#D8BC6A]"
            />
          </div>

          <div className="relative grid lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <ProcessCard
                key={step.number}
                step={step}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#0A273F]/10 bg-[#F5F8F7] px-6 py-6 sm:flex-row sm:items-center sm:px-8"
        >
          <div className="flex items-start gap-4">
            <div className="hidden size-11 shrink-0 items-center justify-center rounded-xl bg-[#E3EFEE] text-[#1F696D] sm:flex">
              <PhoneCall aria-hidden="true" className="size-5" />
            </div>

            <div>
              <p className="text-base font-semibold text-[#09243A]">
                Ready to start the conversation?
              </p>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-[#718087]">
                Book an initial consultation and tell us where your business
                currently stands and where you want it to go.
              </p>
            </div>
          </div>

          <Link
            href="/book-a-consultation"
            className="group inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#09243A] px-5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(9,36,58,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#15435A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F696D] focus-visible:ring-offset-2 sm:w-auto"
          >
            Book a consultation

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

type ProcessCardProps = {
  step: ProcessStep;
  index: number;
};

function ProcessCard({ step, index }: ProcessCardProps) {
  const Icon = step.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.6,
        delay: 0.2 + index * 0.14,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative p-6 sm:p-8 lg:min-h-[440px] lg:p-10 ${
        index !== processSteps.length - 1
          ? "border-b border-white/10 lg:border-b-0 lg:border-r"
          : ""
      }`}
    >
      {/* Timeline marker */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex size-14 items-center justify-center rounded-full border border-white/10 bg-[#0C304A] shadow-[0_0_0_8px_#082338] transition-all duration-300 group-hover:border-[#D8BC6A]/30 group-hover:bg-[#D8BC6A] group-hover:text-[#082338]">
          <Icon
            aria-hidden="true"
            className="size-5 text-[#D8BC6A] transition-colors duration-300 group-hover:text-[#082338]"
          />
        </div>

        <span className="text-xs font-semibold tracking-[0.15em] text-white/25">
          STEP {step.number}
        </span>
      </div>

      <h3 className="mt-9 max-w-xs text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl">
        {step.title}
      </h3>

      <p className="mt-4 max-w-sm text-sm leading-7 text-white/50">
        {step.description}
      </p>

      <ul className="mt-7 space-y-3">
        {step.details.map((detail) => (
          <li
            key={detail}
            className="flex items-center gap-3 text-xs font-medium text-white/65 sm:text-sm"
          >
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#2F8588]/18">
              <Check
                aria-hidden="true"
                className="size-3 text-[#78BCB6]"
              />
            </span>

            {detail}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}