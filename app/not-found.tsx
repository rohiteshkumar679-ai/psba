// app/not-found.tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Hammer } from "lucide-react";

export default function NotFound() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative isolate flex min-h-[75vh] items-center justify-center overflow-hidden bg-[#F8FAFC] px-6 py-24">
      {/* Soft background colours */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#217C80]/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#B49A48]/10 blur-[90px]" />
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="w-full max-w-xl text-center"
      >
        {/* Floating construction icon */}
        <motion.div
          aria-hidden="true"
          animate={reduceMotion ? { y: 0 } : { y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative mx-auto mb-9 flex h-24 w-24 items-center justify-center rounded-3xl border border-white bg-white/80 shadow-[0_16px_50px_-15px_rgba(11,38,59,0.2)]"
        >
          <Hammer
            className="h-9 w-9 text-[#217C80]"
            strokeWidth={1.5}
          />

          <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#F8FAFC] bg-[#0B263B]">
            <span className="h-2 w-2 rounded-full bg-[#D8BC68]" />
          </span>
        </motion.div>

        <span className="inline-flex items-center gap-2 rounded-full border border-[#217C80]/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#217C80]">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-[#217C80]"
          />
          In development
        </span>

        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#0B263B] sm:text-5xl">
          Something useful
          <span className="block text-[#217C80]">is taking shape.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-md text-base leading-7 text-slate-600 sm:text-lg">
          We’re working on this part of the PSBA website.
          Please check back soon, or visit our homepage to explore
          how we can help.
        </p>

        {/* Decorative animation — does not represent actual progress */}
        <div
          aria-hidden="true"
          className="mx-auto mt-8 h-1 w-32 overflow-hidden rounded-full bg-[#217C80]/10"
        >
          <motion.div
            className="h-full w-12 rounded-full bg-[#217C80]"
            animate={
              reduceMotion
                ? { x: 40 }
                : { x: [-48, 128] }
            }
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.4,
            }}
          />
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#0B263B] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0B263B]/10 transition-colors hover:bg-[#17445C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#217C80]"
          >
            <ArrowLeft
              aria-hidden="true"
              className="h-4 w-4 transition-transform motion-safe:group-hover:-translate-x-1"
            />
            Back to homepage
          </Link>
        </div>
      </motion.div>
    </main>
  );
}