// components/home/FeaturedAdvisorySection.tsx

"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Check,
  CircleDollarSign,
  FileBarChart,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

type AdvisoryCapability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const capabilities: AdvisoryCapability[] = [
  {
    title: "Cash-flow planning",
    description:
      "Understand how money moves through your business and prepare for future commitments.",
    icon: CircleDollarSign,
  },
  {
    title: "Budgeting & forecasting",
    description:
      "Build realistic financial plans and compare actual performance against expectations.",
    icon: TrendingUp,
  },
  {
    title: "Management reporting",
    description:
      "Receive clear reports that highlight performance, risks and opportunities.",
    icon: FileBarChart,
  },
  {
    title: "Strategic CFO support",
    description:
      "Access senior financial guidance without employing a full-time internal CFO.",
    icon: Lightbulb,
  },
];

const chartPoints = [
  { quarter: "Q1", height: 42 },
  { quarter: "Q2", height: 56 },
  { quarter: "Q3", height: 64 },
  { quarter: "Q4", height: 82 },
];

export default function FeaturedAdvisorySection() {
  return (
    <section
      aria-labelledby="featured-advisory-heading"
      className="relative isolate overflow-hidden bg-[#F5F8F7] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 top-0 -z-10 size-[38rem] rounded-full bg-[#287A7D]/8 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-48 -z-10 size-[32rem] rounded-full bg-[#D8BC6A]/8 blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#B4994C]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
              Featured advisory
            </span>
          </div>

          <h2
            id="featured-advisory-heading"
            className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#09243A] sm:text-4xl lg:text-5xl"
          >
            More than accounting.
            <span className="block text-[#277579]">
              A clearer view of your business.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#687980] sm:text-base">
            Financial information is most valuable when it helps you decide
            what to do next. PSBA transforms your numbers into practical
            insight for planning, managing risk and growing sustainably.
          </p>

          {/* Capabilities */}
          <div className="mt-9 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <div key={capability.title} className="flex gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-[#1F696D]/10 bg-[#E5F0EF] text-[#1F696D]">
                    <Icon aria-hidden="true" className="size-4" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#09243A]">
                      {capability.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-[#718087]">
                      {capability.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services/financial-reporting-advisory"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#09243A] px-6 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(9,36,58,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#15435A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F696D] focus-visible:ring-offset-2"
            >
              Explore advisory services

              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/services/outsourced-cfo"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#0A273F]/15 bg-white px-6 text-sm font-semibold text-[#09243A] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1F696D]/30 hover:bg-[#EDF4F3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F696D] focus-visible:ring-offset-2"
            >
              Outsourced CFO
            </Link>
          </div>
        </motion.div>

        {/* Advisory visual */}
        <AdvisoryVisual />
      </div>
    </section>
  );
}

function AdvisoryVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      {/* Visual glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[75%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#287A7D]/20 blur-[90px]"
      />

      <div className="relative overflow-hidden rounded-[1.75rem] bg-[#082338] p-2 shadow-[0_35px_90px_-30px_rgba(8,35,56,0.45)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.045]
          [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          [background-size:32px_32px]"
        />

        <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0A2941]">
          {/* Visual header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#D8BC6A]/12 text-[#D8BC6A]">
                <BarChart3 aria-hidden="true" className="size-[18px]" />
              </div>

              <div>
                <p className="text-xs font-semibold text-white">
                  Business outlook
                </p>

                <p className="mt-0.5 text-[9px] text-white/40">
                  Illustrative advisory overview
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-[#70B59B]/15 bg-[#70B59B]/10 px-2.5 py-1">
              <span className="size-1.5 rounded-full bg-[#7BC7A7]" />

              <span className="text-[9px] font-semibold text-[#8ED0B4]">
                Updated
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            {/* Main chart card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 sm:p-5">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <p className="text-[10px] font-medium text-white/40">
                    Projected financial position
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <p className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                      Positive outlook
                    </p>

                    <span className="rounded-full bg-[#73BE9E]/10 px-2 py-1 text-[9px] font-semibold text-[#80CBAB]">
                      On track
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[9px] text-white/40">
                  <span className="size-1.5 rounded-full bg-[#D8BC6A]" />
                  Cash position
                </div>
              </div>

              {/* Chart */}
              <div className="relative mt-7 h-44 sm:h-52">
                {/* Horizontal lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[0, 1, 2, 3].map((line) => (
                    <span
                      key={line}
                      className="block h-px w-full bg-white/[0.06]"
                    />
                  ))}
                </div>

                <div className="absolute inset-x-0 bottom-0 top-2 flex items-end gap-4 sm:gap-6">
                  {chartPoints.map((point, index) => (
                    <div
                      key={point.quarter}
                      className="flex h-full flex-1 flex-col items-center justify-end"
                    >
                      <div className="relative flex h-full w-full items-end justify-center">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${point.height}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.75,
                            delay: 0.35 + index * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className={`relative w-full max-w-10 rounded-t-md ${
                            index === chartPoints.length - 1
                              ? "bg-gradient-to-t from-[#A98E45] to-[#E0C878]"
                              : "bg-gradient-to-t from-[#1E5D6B] to-[#3B8588]"
                          }`}
                        >
                          <div className="absolute inset-x-1 top-1 h-px rounded-full bg-white/20" />
                        </motion.div>
                      </div>

                      <span className="mt-2 text-[9px] font-medium text-white/35">
                        {point.quarter}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Business signals */}
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <SignalCard
                label="Cash position"
                value="Healthy"
                icon={CircleDollarSign}
                status="positive"
              />

              <SignalCard
                label="Growth plan"
                value="On track"
                icon={TrendingUp}
                status="positive"
              />

              <SignalCard
                label="Cost control"
                value="Review"
                icon={ShieldCheck}
                status="attention"
              />
            </div>

            {/* Advisor note */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="mt-4 flex items-start gap-3 rounded-xl border border-[#D8BC6A]/15 bg-[#D8BC6A]/8 p-4"
            >
              <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#D8BC6A]/15">
                <Lightbulb
                  aria-hidden="true"
                  className="size-3.5 text-[#D8BC6A]"
                />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#D8BC6A]">
                  Advisor insight
                </p>

                <p className="mt-1 text-xs leading-5 text-white/50">
                  Your projected position supports planned growth, but operating
                  costs should be reviewed before the next investment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-[10px] text-[#78888E]">
        Illustrative example of a PSBA advisory insight
      </p>
    </motion.div>
  );
}

type SignalCardProps = {
  label: string;
  value: string;
  icon: LucideIcon;
  status: "positive" | "attention";
};

function SignalCard({
  label,
  value,
  icon: Icon,
  status,
}: SignalCardProps) {
  const positive = status === "positive";

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
      <div className="flex items-center justify-between">
        <div className="flex size-7 items-center justify-center rounded-lg bg-white/[0.06]">
          <Icon
            aria-hidden="true"
            className={`size-3.5 ${
              positive ? "text-[#81C8AA]" : "text-[#D8BC6A]"
            }`}
          />
        </div>

        <span
          className={`size-1.5 rounded-full ${
            positive ? "bg-[#81C8AA]" : "bg-[#D8BC6A]"
          }`}
        />
      </div>

      <p className="mt-3 text-[9px] text-white/35">{label}</p>

      <p className="mt-0.5 text-xs font-semibold text-white">{value}</p>
    </div>
  );
}