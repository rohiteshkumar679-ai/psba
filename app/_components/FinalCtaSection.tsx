// components/home/FinalCtaSection.tsx

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="bg-white px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#082338] px-6 py-16 text-center text-white shadow-[0_35px_90px_-35px_rgba(8,35,56,0.5)] sm:px-10 sm:py-20 lg:px-20 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05]
          [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          [background-size:38px_38px]"
        />

        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[-16rem] size-[34rem] -translate-x-1/2 rounded-full bg-[#2F8588]/30 blur-[110px]"
        />

        <div className="relative mx-auto max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8BC6A]">
            Take the next step
          </span>

          <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            Make your next business decision with confidence.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            Speak with the PSBA team about your accounting, compliance or
            business advisory requirements.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/book-a-consultation"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D8BC6A] px-6 text-sm font-semibold text-[#082338] transition-all hover:-translate-y-0.5 hover:bg-[#E6CE89]"
            >
              Book a consultation

              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="tel:+6798065614"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10"
            >
              <Phone className="size-4 text-[#D8BC6A]" />
              Call (+679) 806 5614
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}