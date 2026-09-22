// components/home/WhyPsbaSection.tsx

"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Handshake,
  Lightbulb,
  MapPinned,
} from "lucide-react";
import Link from "next/link";

type Reason = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const reasons: Reason[] = [
  {
    number: "01",
    title: "Local knowledge",
    description:
      "Advice informed by an understanding of Fiji’s tax requirements, regulations and business environment.",
    icon: MapPinned,
  },
  {
    number: "02",
    title: "Practical guidance",
    description:
      "Clear recommendations you can understand, apply and use to make stronger business decisions.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Experienced professionals",
    description:
      "A team with experience across private practice, corporations, listed entities and offshore businesses.",
    icon: BadgeCheck,
  },
  {
    number: "04",
    title: "Personalised support",
    description:
      "Services designed around your organisation, responsibilities, challenges and long-term goals.",
    icon: Handshake,
  },
];

export default function WhyPsbaSection() {
  return (
    <section
      aria-labelledby="why-psba-heading"
      className="relative isolate overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 -z-10 size-[32rem] rounded-full bg-[#287A7D]/6 blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#B4994C]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
              Why PSBA
            </span>
          </div>

          <h2
            id="why-psba-heading"
            className="mt-5 max-w-xl text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#09243A] sm:text-4xl lg:text-5xl"
          >
            More than accountants.
            <span className="block text-[#277579]">
              Partners in your progress.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-[#687980] sm:text-base">
            PSBA combines professional experience with practical local
            knowledge to help clients meet their responsibilities, understand
            their finances and plan their next move.
          </p>

          <Link
            href="/about"
            className="group mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#0A273F]/15 bg-white px-5 text-sm font-semibold text-[#09243A] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1F696D]/30 hover:bg-[#F2F7F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F696D] focus-visible:ring-offset-2"
          >
            Learn about PSBA

            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          {/* Experience panel */}
          <div className="relative mt-10 overflow-hidden rounded-2xl bg-[#09243A] p-6 sm:p-7">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 size-40 rounded-full bg-[#287A7D]/25 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.05]
              [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
              [background-size:28px_28px]"
            />

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
                    30+
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/50">
                    Years of combined professional experience
                  </p>
                </div>

                <div className="border-l border-white/10 pl-6">
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
                    Fiji
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/50">
                    Local tax and business knowledge
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5">
                <span className="flex size-5 items-center justify-center rounded-full bg-[#D8BC6A]/15">
                  <Check
                    aria-hidden="true"
                    className="size-3 text-[#D8BC6A]"
                  />
                </span>

                <p className="text-xs font-medium text-white/65">
                  Support for individuals and businesses of every size
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reasons */}
        <div className="divide-y divide-[#0A273F]/10 border-y border-[#0A273F]/10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group grid gap-5 py-7 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-6 sm:py-9"
              >
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#1F696D]/10 bg-[#EAF3F2] text-[#1F696D] transition-all duration-300 group-hover:bg-[#1F696D] group-hover:text-white">
                  <Icon aria-hidden="true" className="size-5" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#09243A] sm:text-xl">
                    {reason.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-7 text-[#718087]">
                    {reason.description}
                  </p>
                </div>

                <span className="hidden text-xs font-semibold tracking-[0.12em] text-[#A4AEB2] sm:block">
                  {reason.number}
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}