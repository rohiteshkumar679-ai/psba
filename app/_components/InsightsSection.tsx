// components/home/InsightsSection.tsx

"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  Calculator,
  ChartNoAxesCombined,
  Clock3,
} from "lucide-react";
import Link from "next/link";

const articles = [
  {
    category: "Tax & Compliance",
    title: "Important tax responsibilities every Fiji business should know",
    excerpt:
      "A practical overview of common tax and compliance obligations that business owners need to manage.",
    readTime: "6 min read",
    href: "/insights/fiji-business-tax-responsibilities",
    icon: Calculator,
  },
  {
    category: "Business Advisory",
    title: "How better cash-flow planning supports sustainable growth",
    excerpt:
      "Learn how a clearer understanding of cash movement can improve planning and reduce financial pressure.",
    readTime: "5 min read",
    href: "/insights/cash-flow-planning",
    icon: ChartNoAxesCombined,
  },
  {
    category: "Accounting",
    title: "What your financial reports are really telling you",
    excerpt:
      "Understand the key information inside your financial reports and how to use it when making decisions.",
    readTime: "7 min read",
    href: "/insights/understanding-financial-reports",
    icon: BookOpenText,
  },
];

export default function InsightsSection() {
  return (
    <section
      aria-labelledby="insights-heading"
      className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#B4994C]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
                Insights
              </span>
            </div>

            <h2
              id="insights-heading"
              className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-[#09243A] sm:text-4xl lg:text-5xl"
            >
              Practical knowledge for better business decisions.
            </h2>
          </motion.div>

          <Link
            href="/insights"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1F696D]"
          >
            View all insights

            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
          {articles.map((article, index) => {
            const Icon = article.icon;

            return (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group flex min-h-[390px] flex-col rounded-2xl border border-[#0A273F]/10 bg-[#F8FAF9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1F696D]/25 hover:bg-white hover:shadow-[0_22px_55px_rgba(9,36,58,0.09)] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-[#E5F0EF] text-[#1F696D] transition-colors group-hover:bg-[#1F696D] group-hover:text-white">
                    <Icon className="size-5" />
                  </div>

                  <ArrowUpRight className="size-5 text-[#9AA6AA] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1F696D]" />
                </div>

                <div className="mt-8">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8D7535]">
                    {article.category}
                  </span>

                  <h3 className="mt-3 text-xl font-semibold leading-snug tracking-[-0.025em] text-[#09243A]">
                    <Link href={article.href}>{article.title}</Link>
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#718087]">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-[#0A273F]/10 pt-5">
                  <div className="flex items-center gap-1.5 text-[10px] font-medium text-[#89969B]">
                    <Clock3 className="size-3.5" />
                    {article.readTime}
                  </div>

                  <Link
                    href={article.href}
                    className="text-xs font-semibold text-[#1F696D]"
                  >
                    Read article
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}