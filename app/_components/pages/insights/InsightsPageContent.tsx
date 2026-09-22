// components/insights/InsightsPageContent.tsx

"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Building2,
  Calculator,
  ChartNoAxesCombined,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileBarChart,
  Landmark,
  Lightbulb,
  ReceiptText,
  Search,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const categories = [
  "All",
  "Business Startup",
  "Tax & Compliance",
  "Accounting",
  "Business Advisory",
  "Governance",
] as const;

type Category = (typeof categories)[number];

type Article = {
  title: string;
  excerpt: string;
  category: Exclude<Category, "All">;
  readTime: string;
  href: string;
  icon: LucideIcon;
  featured?: boolean;
};

const articles: Article[] = [
  {
    title: "Registering a Business in Fiji: What You Need to Know",
    excerpt:
      "A practical introduction to business registration, tax setup and the financial foundations every new Fiji business should consider.",
    category: "Business Startup",
    readTime: "7 min read",
    href: "/insights/registering-a-business-in-fiji",
    icon: Building2,
    featured: true,
  },
  {
    title: "Important Tax Responsibilities for Fiji Businesses",
    excerpt:
      "Understand common tax obligations, important records and why planning ahead can make compliance easier.",
    category: "Tax & Compliance",
    readTime: "6 min read",
    href: "/insights/fiji-business-tax-responsibilities",
    icon: Calculator,
  },
  {
    title: "How Better Cash-Flow Planning Supports Business Growth",
    excerpt:
      "Learn how monitoring incoming and outgoing cash can help your business prepare for commitments and future opportunities.",
    category: "Business Advisory",
    readTime: "5 min read",
    href: "/insights/cash-flow-planning",
    icon: TrendingUp,
  },
  {
    title: "What Your Financial Statements Are Really Telling You",
    excerpt:
      "A clearer look at the information contained in your financial statements and how it supports decision-making.",
    category: "Accounting",
    readTime: "7 min read",
    href: "/insights/understanding-financial-statements",
    icon: FileBarChart,
  },
  {
    title: "Bookkeeping Mistakes That Can Cost Small Businesses Time",
    excerpt:
      "Discover common record-keeping problems and the practical steps that can help prevent them.",
    category: "Accounting",
    readTime: "5 min read",
    href: "/insights/common-bookkeeping-mistakes",
    icon: BookOpenCheck,
  },
  {
    title: "When Should a Growing Business Consider an Outsourced CFO?",
    excerpt:
      "Understand when bookkeeping is no longer enough and your business may benefit from higher-level financial leadership.",
    category: "Business Advisory",
    readTime: "6 min read",
    href: "/insights/when-to-consider-outsourced-cfo",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Why Internal Controls Matter for Growing Organisations",
    excerpt:
      "Learn how effective controls can protect assets, improve financial information and strengthen accountability.",
    category: "Governance",
    readTime: "6 min read",
    href: "/insights/importance-of-internal-controls",
    icon: ShieldCheck,
  },
  {
    title: "Understanding Payroll Records and Responsibilities",
    excerpt:
      "An overview of the records and recurring processes businesses should consider when managing payroll.",
    category: "Tax & Compliance",
    readTime: "5 min read",
    href: "/insights/payroll-records-responsibilities",
    icon: ReceiptText,
  },
  {
    title: "How to Prepare Financial Projections for a New Business",
    excerpt:
      "Explore the basic components of revenue, expense and cash-flow projections for a startup or funding application.",
    category: "Business Startup",
    readTime: "8 min read",
    href: "/insights/startup-financial-projections",
    icon: Landmark,
  },
];

export default function InsightsPageContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const featuredArticle = articles.find((article) => article.featured);

  const filteredArticles = useMemo(() => {
    const normalisedSearch = searchTerm.trim().toLowerCase();

    return articles.filter((article) => {
      if (article.featured) return false;

      const matchesCategory =
        activeCategory === "All" || article.category === activeCategory;

      const matchesSearch =
        !normalisedSearch ||
        article.title.toLowerCase().includes(normalisedSearch) ||
        article.excerpt.toLowerCase().includes(normalisedSearch) ||
        article.category.toLowerCase().includes(normalisedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <>
      <InsightsHero />

      {featuredArticle && (
        <FeaturedArticle article={featuredArticle} />
      )}

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B4994C]" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
                  Latest insights
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#09243A] sm:text-4xl">
                Explore practical financial guidance.
              </h2>
            </div>

            {/* Search field */}
            <label className="relative block w-full lg:max-w-sm">
              <span className="sr-only">Search insights</span>

              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#829096]" />

              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search insights"
                className="h-12 w-full rounded-full border border-[#0A273F]/10 bg-[#F7F9F8] pl-11 pr-4 text-sm text-[#09243A] outline-none transition focus:border-[#1F696D]/40 focus:bg-white focus:ring-4 focus:ring-[#1F696D]/8"
              />
            </label>
          </div>

          {/* Category filters */}
          <div className="mt-10 overflow-x-auto pb-2">
            <div className="flex min-w-max gap-2">
              {categories.map((category) => {
                const active = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition-all ${
                      active
                        ? "border-[#1F696D] bg-[#1F696D] text-white shadow-[0_8px_20px_rgba(31,105,109,0.2)]"
                        : "border-[#0A273F]/10 bg-white text-[#60737B] hover:border-[#1F696D]/25 hover:text-[#1F696D]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Articles */}
          <motion.div
            layout
            className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, index) => (
                <ArticleCard
                  key={article.href}
                  article={article}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredArticles.length === 0 && (
            <div className="mt-10 rounded-2xl border border-[#0A273F]/10 bg-[#F7F9F8] px-6 py-16 text-center">
              <Search className="mx-auto size-6 text-[#9AA6AA]" />

              <h3 className="mt-4 text-lg font-semibold text-[#09243A]">
                No matching insights found
              </h3>

              <p className="mt-2 text-sm text-[#718087]">
                Try another search term or select a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
                className="mt-5 text-sm font-semibold text-[#1F696D]"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <TopicsCallout />
    </>
  );
}

function InsightsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F5F8F7] px-5 pb-20 pt-12 text-center sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28 lg:pt-20">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[-28rem] -z-20 h-[56rem] w-[78rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(39,117,121,0.16),transparent_65%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.25]
        [background-image:linear-gradient(to_right,rgba(9,36,58,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,36,58,0.06)_1px,transparent_1px)]
        [background-size:48px_48px]
        [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-center gap-2 text-xs font-medium text-[#718087]">
          <Link href="/" className="hover:text-[#1F696D]">
            Home
          </Link>

          <ChevronRight className="size-3.5" />

          <span className="text-[#1F696D]">Insights</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1F696D]/12 bg-white/65 px-3 py-1.5 backdrop-blur-md">
            <Lightbulb className="size-3.5 text-[#1F696D]" />

            <span className="text-xs font-semibold text-[#315A5E]">
              Knowledge from the PSBA team
            </span>
          </div>

          <h1 className="mt-7 text-balance text-4xl font-semibold leading-[1.07] tracking-[-0.045em] text-[#09243A] sm:text-5xl lg:text-[4.5rem]">
            Financial knowledge for
            <span className="block text-[#277579]">
              better business decisions.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#687980] sm:text-lg">
            Practical insights covering accounting, taxation, compliance,
            financial management and business growth in Fiji.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedArticle({ article }: { article: Article }) {
  const Icon = article.icon;

  return (
    <section className="bg-[#F5F8F7] px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#082338] text-white shadow-[0_35px_80px_-35px_rgba(8,35,56,0.5)] lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.045]
          [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          [background-size:36px_36px]"
        />

        {/* Graphic side */}
        <div className="relative flex min-h-72 items-center justify-center overflow-hidden border-b border-white/10 p-8 lg:min-h-[470px] lg:border-b-0 lg:border-r">
          <div className="absolute size-72 rounded-full bg-[#2F8588]/20 blur-[80px]" />

          <div className="relative">
            <div className="flex size-40 rotate-[-6deg] items-center justify-center rounded-[2.5rem] border border-white/10 bg-white/[0.05] shadow-2xl backdrop-blur-xl sm:size-48">
              <Icon className="size-16 text-[#D8BC6A] sm:size-20" />
            </div>

            <div className="absolute -bottom-5 -right-8 rounded-xl border border-white/10 bg-[#0E324C] px-4 py-3 shadow-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#D8BC6A]">
                Practical guide
              </p>
            </div>
          </div>
        </div>

        {/* Featured copy */}
        <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#D8BC6A]/12 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#D8BC6A]">
              Featured insight
            </span>

            <span className="text-xs text-white/35">{article.category}</span>
          </div>

          <h2 className="mt-7 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl lg:text-4xl">
            {article.title}
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
            {article.excerpt}
          </p>

          <div className="mt-7 flex items-center gap-2 text-xs text-white/35">
            <Clock3 className="size-3.5" />
            {article.readTime}
          </div>

          <Link
            href={article.href}
            className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#D8BC6A]"
          >
            Read featured insight

            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.article>
    </section>
  );
}

function ArticleCard({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  const Icon = article.icon;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.05, 0.2),
      }}
      className="group flex min-h-[390px] flex-col rounded-2xl border border-[#0A273F]/10 bg-[#F8FAF9] p-6 transition-shadow hover:shadow-[0_20px_50px_rgba(9,36,58,0.09)] sm:p-7"
    >
      <div className="flex items-start justify-between">
        <div className="flex size-11 items-center justify-center rounded-xl bg-[#E3EFED] text-[#1F696D] transition-colors group-hover:bg-[#1F696D] group-hover:text-white">
          <Icon className="size-5" />
        </div>

        <ArrowUpRight className="size-5 text-[#A0AAAE] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1F696D]" />
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
        <span className="flex items-center gap-1.5 text-[10px] text-[#89969B]">
          <Clock3 className="size-3.5" />
          {article.readTime}
        </span>

        <Link
          href={article.href}
          className="text-xs font-semibold text-[#1F696D]"
        >
          Read insight
        </Link>
      </div>
    </motion.article>
  );
}

function TopicsCallout() {
  const topics = [
    "Accounting",
    "Tax",
    "Compliance",
    "Cash flow",
    "Business growth",
    "Governance",
  ];

  return (
    <section className="bg-[#F5F8F7] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[1.75rem] border border-[#0A273F]/10 bg-white p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8D7535]">
            Explore by topic
          </span>

          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#09243A] sm:text-3xl">
            Find guidance relevant to your next decision.
          </h2>

          <div className="mt-6 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-[#0A273F]/10 bg-[#F5F8F7] px-3 py-1.5 text-xs font-medium text-[#52676F]"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <Link
          href="/book-a-consultation"
          className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#09243A] px-6 text-sm font-semibold text-white"
        >
          Speak with an advisor

          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}