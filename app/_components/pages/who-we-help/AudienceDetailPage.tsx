// components/who-we-help/AudienceDetailPage.tsx

"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronRight,
  CircleAlert,
  Factory,
  Lightbulb,
  Rocket,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import type { Audience, AudienceIcon } from "@/data/audiences";
import { audiences } from "@/data/audiences";

const iconMap: Record<AudienceIcon, LucideIcon> = {
  startup: Rocket,
  "small-business": Building2,
  "established-business": Factory,
  individual: UserRound,
};

type AudienceDetailPageProps = {
  audience: Audience;
};

export default function AudienceDetailPage({
  audience,
}: AudienceDetailPageProps) {
  const Icon = iconMap[audience.icon];

  const relatedAudiences = audiences.filter(
    (item) => item.slug !== audience.slug,
  );

  return (
    <>
      <AudienceHero audience={audience} icon={Icon} />
      <AudienceOverview audience={audience} />
      <ChallengesSection audience={audience} />
      <SupportSection audience={audience} />
      <OutcomesSection audience={audience} />
      <RelatedAudiences audiences={relatedAudiences} />
      <AudienceCta audience={audience} />
    </>
  );
}

type AudienceHeroProps = {
  audience: Audience;
  icon: LucideIcon;
};

function AudienceHero({ audience, icon: Icon }: AudienceHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#F5F8F7] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28 lg:pt-20">
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
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#718087]"
        >
          <Link href="/" className="hover:text-[#1F696D]">
            Home
          </Link>

          <ChevronRight className="size-3.5" />

          <Link href="/who-we-help" className="hover:text-[#1F696D]">
            Who we help
          </Link>

          <ChevronRight className="size-3.5" />

          <span className="text-[#1F696D]">{audience.label}</span>
        </nav>

        <div className="mt-12 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#E1EDEB] text-[#1F696D]">
                <Icon className="size-[18px]" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8D7535]">
                {audience.eyebrow}
              </span>
            </div>

            <h1 className="mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.07] tracking-[-0.045em] text-[#09243A] sm:text-5xl lg:text-[4.1rem]">
              {audience.heroTitle}
              <span className="block text-[#277579]">
                {audience.heroHighlight}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#687980] sm:text-lg">
              {audience.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-a-consultation"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#09243A] px-6 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(9,36,58,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#15435A]"
              >
                Discuss your needs

                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/who-we-help"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#0A273F]/15 bg-white/70 px-6 text-sm font-semibold text-[#09243A]"
              >
                <ArrowLeft className="size-4" />
                Who we help
              </Link>
            </div>
          </motion.div>

          {/* Hero outcomes card */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[1.75rem] bg-[#082338] p-7 text-white shadow-[0_35px_80px_-30px_rgba(8,35,56,0.45)] sm:p-9"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.045]
              [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
              [background-size:32px_32px]"
            />

            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 size-60 rounded-full bg-[#2F8588]/25 blur-[80px]"
            />

            <div className="relative">
              <div className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#D8BC6A]">
                <Icon className="size-5" />
              </div>

              <h2 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
                What we help you achieve
              </h2>

              <ul className="mt-6 space-y-3">
                {audience.outcomes.slice(0, 5).map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-center gap-3 text-sm text-white/60"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#D8BC6A]/12">
                      <Check className="size-3 text-[#D8BC6A]" />
                    </span>

                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AudienceOverview({ audience }: { audience: Audience }) {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
            Understanding your needs
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#09243A] sm:text-4xl">
            {audience.overviewTitle}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-5 border-l border-[#0A273F]/10 pl-6 sm:pl-10"
        >
          {audience.overview.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-8 text-[#687980] sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ChallengesSection({ audience }: { audience: Audience }) {
  return (
    <section className="bg-[#F5F8F7] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Common challenges"
          title={`Challenges facing ${audience.label.toLowerCase()}.`}
          description="These are some of the common areas where professional accounting and advisory support can provide greater clarity."
        />

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {audience.challenges.map((challenge, index) => (
            <motion.div
              key={challenge}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.06 }}
              className="flex min-h-28 items-center gap-4 rounded-2xl border border-[#0A273F]/10 bg-white p-5"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#F4EEDF] text-[#A3863D]">
                <CircleAlert className="size-[18px]" />
              </span>

              <p className="text-sm font-medium leading-6 text-[#405962]">
                {challenge}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportSection({ audience }: { audience: Audience }) {
  return (
    <section className="relative overflow-hidden bg-[#082338] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.045]
        [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
        [background-size:40px_40px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          dark
          eyebrow="How PSBA can help"
          title={`Support designed for ${audience.label.toLowerCase()}.`}
          description="Your final service scope will be based on your circumstances, responsibilities and goals."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          {audience.support.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="group flex min-h-64 flex-col bg-[#082338] p-7 transition-colors hover:bg-[#0B2D46] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.14em] text-[#D8BC6A]">
                  0{index + 1}
                </span>

                <ArrowUpRight className="size-5 text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D8BC6A]" />
              </div>

              <h3 className="mt-8 text-xl font-semibold">{service.title}</h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="mt-auto pt-7 text-sm font-semibold text-[#D8BC6A]"
              >
                Explore support
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutcomesSection({ audience }: { audience: Audience }) {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
            The desired outcome
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#09243A] sm:text-4xl">
            Clearer finances. More confident decisions.
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#718087]">
            Professional support should leave you with greater clarity,
            stronger systems and a better understanding of what comes next.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {audience.outcomes.map((outcome) => (
            <div
              key={outcome}
              className="flex items-center gap-3 rounded-xl border border-[#0A273F]/10 bg-[#F8FAF9] p-4"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#E3EFED]">
                <Check className="size-3.5 text-[#1F696D]" />
              </span>

              <p className="text-sm font-medium leading-6 text-[#405962]">
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedAudiences({
  audiences,
}: {
  audiences: Audience[];
}) {
  return (
    <section className="bg-[#F5F8F7] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#09243A]">
          Explore who else we help
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {audiences.map((audience) => {
            const Icon = iconMap[audience.icon];

            return (
              <Link
                key={audience.slug}
                href={`/who-we-help/${audience.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-[#0A273F]/10 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#E3EFED] text-[#1F696D]">
                  <Icon className="size-5" />
                </span>

                <span className="flex-1 text-sm font-semibold text-[#09243A]">
                  {audience.label}
                </span>

                <ArrowUpRight className="size-4 text-[#9AA6AA] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1F696D]" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AudienceCta({ audience }: { audience: Audience }) {
  return (
    <section className="bg-white px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#082338] px-6 py-16 text-center text-white sm:px-10 sm:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05]
          [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          [background-size:38px_38px]"
        />

        <div className="relative mx-auto max-w-3xl">
          <Lightbulb className="mx-auto size-6 text-[#D8BC6A]" />

          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Not sure which service is right for you?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55">
            Tell us about your situation and we’ll help identify the most
            appropriate support for {audience.label.toLowerCase()}.
          </p>

          <Link
            href="/book-a-consultation"
            className="group mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D8BC6A] px-6 text-sm font-semibold text-[#082338] hover:bg-[#E6CE89]"
          >
            Book a consultation

            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
};

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <span
        className={`text-xs font-semibold uppercase tracking-[0.18em] ${
          dark ? "text-[#D8BC6A]" : "text-[#8D7535]"
        }`}
      >
        {eyebrow}
      </span>

      <h2
        className={`mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-[#09243A]"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
          dark ? "text-white/55" : "text-[#687980]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}