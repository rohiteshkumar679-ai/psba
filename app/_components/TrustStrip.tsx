// components/home/TrustStrip.tsx

"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Handshake,
  Landmark,
  MapPin,
} from "lucide-react";

const trustItems = [
  {
    value: "30+ years",
    label: "Combined professional experience",
    icon: BriefcaseBusiness,
  },
  {
    value: "Fiji-based",
    label: "Local tax and business expertise",
    icon: Landmark,
  },
  {
    value: "Suva & Ba",
    label: "Supporting clients across Fiji",
    icon: MapPin,
  },
  {
    value: "Personalised",
    label: "Advice built around every client",
    icon: Handshake,
  },
];

const borderStyles = [
  "border-b border-r lg:border-b-0",
  "border-b lg:border-b-0 lg:border-r",
  "border-r lg:border-r",
  "",
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Why clients trust PSBA"
      className="relative isolate overflow-hidden bg-[#082338] px-5 sm:px-8 lg:px-10"
    >
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]
        [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
        [background-size:38px_38px]"
      />

      {/* Teal glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-48 w-2/3 -translate-x-1/2 rounded-full bg-[#287A7D]/20 blur-[100px]"
      />

      {/* Gold top line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4B55F]/80 to-transparent"
      />

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  group border-white/10 px-4 py-8
                  sm:px-7 sm:py-10
                  lg:px-8 lg:py-12
                  ${borderStyles[index]}
                `}
              >
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-[#D4B55F] transition-all duration-300 group-hover:border-[#D4B55F]/30 group-hover:bg-[#D4B55F]/10">
                    <Icon aria-hidden="true" className="size-[17px]" />
                  </div>

                  <p className="mt-5 text-lg font-semibold tracking-[-0.025em] text-white sm:text-xl">
                    {item.value}
                  </p>

                  <p className="mt-1.5 max-w-[190px] text-xs leading-5 text-white/50 sm:text-[13px]">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}