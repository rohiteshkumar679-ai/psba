// components/home/AboutPreviewSection.tsx

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const strengths = [
  "Experience across public and private practice",
  "Knowledge of Fiji’s taxation environment",
  "Support for businesses of different sizes",
];

export default function AboutPreviewSection() {
  return (
    <section
      aria-labelledby="about-preview-heading"
      className="overflow-hidden bg-[#F5F8F7] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Team image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/4.4] overflow-hidden rounded-[1.75rem] bg-[#DCE7E6] sm:aspect-[4/3.8] lg:aspect-[4/4.5]">
            <Image
              src="/images/psba-team.jpg"
              alt="The Pacifika Smart Business Advisory team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#082338]/65 via-transparent to-transparent" />

            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-[#082338]/80 p-5 text-white shadow-2xl backdrop-blur-xl sm:inset-x-7 sm:bottom-7 sm:p-6">
              <p className="text-lg font-semibold tracking-[-0.02em]">
                Local understanding. Professional experience.
              </p>

              <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
                <MapPin className="size-3.5 text-[#D8BC6A]" />
                Serving clients from Suva and Ba
              </div>
            </div>
          </div>

          <div className="absolute -right-3 -top-5 rounded-2xl border border-[#0A273F]/10 bg-white px-5 py-4 shadow-[0_18px_50px_rgba(9,36,58,0.14)] sm:-right-7 sm:top-8">
            <p className="text-2xl font-semibold tracking-[-0.04em] text-[#09243A]">
              30+
            </p>

            <p className="mt-0.5 text-[10px] font-medium text-[#718087]">
              Years combined experience
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#B4994C]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
              About PSBA
            </span>
          </div>

          <h2
            id="about-preview-heading"
            className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#09243A] sm:text-4xl lg:text-5xl"
          >
            Experience you can trust.
            <span className="block text-[#277579]">
              Advice you can use.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-[#687980] sm:text-base">
            Pacifika Smart Business Advisory is a management consulting firm
            providing accounting and advisory solutions to individuals and
            businesses across Fiji.
          </p>

          <p className="mt-4 text-sm leading-7 text-[#687980] sm:text-base">
            We combine professional expertise with practical thinking to help
            clients understand their financial position, meet their obligations
            and make informed decisions.
          </p>

          <ul className="mt-8 space-y-4">
            {strengths.map((strength) => (
              <li
                key={strength}
                className="flex items-center gap-3 text-sm font-medium text-[#344F59]"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#E1EFEB]">
                  <Check className="size-3.5 text-[#1F696D]" />
                </span>

                {strength}
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="group mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#09243A] px-6 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(9,36,58,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#15435A]"
          >
            Meet the PSBA team

            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}