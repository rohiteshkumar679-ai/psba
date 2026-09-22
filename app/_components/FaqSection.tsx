// components/home/FaqSection.tsx

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What types of clients does PSBA work with?",
    answer:
      "PSBA supports individuals, startups, small and medium businesses, established organisations and other entities requiring accounting, compliance or business advisory assistance.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Bring any information that helps explain your situation, such as financial statements, tax records, business plans or a list of your current concerns. Our team can confirm the exact documents required before your meeting.",
  },
  {
    question: "Can PSBA manage our ongoing accounting and compliance?",
    answer:
      "Yes. PSBA can provide ongoing bookkeeping, financial reporting, payroll, tax and compliance support based on the requirements and size of your organisation.",
  },
  {
    question: "Does PSBA help new businesses get started?",
    answer:
      "Yes. Startup support may include business registration guidance, financial system setup, entity structuring, planning, forecasting and assistance understanding your obligations.",
  },
  {
    question: "What is an outsourced CFO service?",
    answer:
      "An outsourced CFO gives your business access to senior financial guidance without employing a full-time internal CFO. It can include forecasting, reporting, cash-flow planning and strategic decision support.",
  },
  {
    question: "Where is PSBA located?",
    answer:
      "PSBA currently serves clients through its offices in Suva and Ba, Fiji. Contact the team before visiting to confirm availability and arrange an appointment.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-[#F5F8F7] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#B4994C]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
              Frequently asked questions
            </span>
          </div>

          <h2
            id="faq-heading"
            className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#09243A] sm:text-4xl lg:text-5xl"
          >
            Questions before getting started?
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-[#687980]">
            Find answers to common questions about PSBA’s services and working
            process.
          </p>

          <Link
            href="/faq"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1F696D]"
          >
            View all questions

            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="divide-y divide-[#0A273F]/10 border-y border-[#0A273F]/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-answer-${index}`;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F696D] sm:py-7"
                >
                  <span className="text-base font-semibold leading-6 text-[#09243A] sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isOpen
                        ? "border-[#1F696D] bg-[#1F696D] text-white"
                        : "border-[#0A273F]/15 bg-white text-[#09243A]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="size-4" />
                    ) : (
                      <Plus className="size-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-7 pr-10 text-sm leading-7 text-[#687980] sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}