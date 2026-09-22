// components/layout/AnnouncementBar.tsx

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.aside
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          aria-label="PSBA announcement"
          className="relative z-50 overflow-hidden border-b border-white/10 bg-[#071A2F] text-white"
        >
          {/* Subtle grid texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.06]
              [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
              [background-size:24px_24px]"
          />

          {/* Animated ambient glow */}
          <motion.div
            aria-hidden="true"
            animate={{
              x: ["-30%", "130%"],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -top-16 left-0 h-28 w-72 rounded-full bg-[#D6B45F]/15 blur-3xl"
          />

          <div className="relative mx-auto flex min-h-12 max-w-7xl items-center justify-center px-12 py-2.5 sm:px-16">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center">
              {/* Status indicator */}
              <div className="flex items-center gap-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#D6B45F] opacity-50" />

                  <span className="relative inline-flex size-2 rounded-full bg-[#E5C873]" />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E5C873] sm:text-[11px]">
                  Now booking
                </span>
              </div>

              <span
                aria-hidden="true"
                className="hidden h-4 w-px bg-white/20 sm:block"
              />

              <p className="text-xs font-normal leading-5 text-white/75 sm:text-[13px]">
                Build a stronger financial foundation for your business.
              </p>

              <Link
                href="/book-a-consultation"
                className="group inline-flex items-center gap-1.5 rounded-sm text-xs font-semibold text-white outline-none transition-colors hover:text-[#E5C873] focus-visible:ring-2 focus-visible:ring-[#E5C873] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071A2F] sm:text-[13px]"
              >
                Book a consultation

                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />

                <span className="absolute" />
              </Link>
            </div>

            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              aria-label="Dismiss announcement"
              className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full text-white/45 transition-all duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C873] sm:right-5"
            >
              <X aria-hidden="true" className="size-3.5" />
            </button>
          </div>

          {/* Gold gradient accent line */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D6B45F]/60 to-transparent"
          />
        </motion.aside>
      )}
    </AnimatePresence>
  );
}