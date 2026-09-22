// components/about/AboutPageContent.tsx

"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  Clock3,
  Eye,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Landmark,
  Laptop,
  Lightbulb,
  Medal,
  Scale,
  Sparkles,
  Target,
  UsersRound,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "One Team",
    description:
      "We work together, support one another and make decisions for the greater good of our clients and firm.",
    icon: UsersRound,
  },
  {
    title: "Action Oriented",
    description:
      "We take ownership, act with purpose and remain accountable for the quality of our work.",
    icon: Zap,
  },
  {
    title: "Confident",
    description:
      "We apply our knowledge with confidence while remaining approachable, positive and free from ego.",
    icon: Medal,
  },
  {
    title: "Active Learners",
    description:
      "We embrace new knowledge and technology to continually improve how we serve our clients.",
    icon: Lightbulb,
  },
  {
    title: "Wow Inspiring",
    description:
      "We aim to create a client experience defined by responsiveness, care and service excellence.",
    icon: Sparkles,
  },
];

const credentials = [
  "Chartered Accountants",
  "Members of recognised professional bodies",
  "Registered tax agents with Fiji Revenue and Customs Service",
  "Professionals with qualifications up to master’s level",
  "Over 30 years of combined public and private practice",
  "Experience with corporates, listed entities and offshore organisations",
];

const approaches = [
  {
    eyebrow: "How we work",
    title: "Efficient, informed and technology-enabled",
    description:
      "We use technology and efficient working methods while ensuring important decisions remain compliant with applicable laws and professional standards.",
    icon: Laptop,
  },
  {
    eyebrow: "Our culture",
    title: "People perform better with balance",
    description:
      "We value a supportive environment where professionals can perform at a high level while maintaining a healthy balance between work and family life.",
    icon: Clock3,
  },
  {
    eyebrow: "Who we serve",
    title: "Focused on meaningful client value",
    description:
      "Every engagement should provide visible value. Our work is designed around stakeholder needs, timely insights and stronger financial decision-making.",
    icon: HeartHandshake,
  },
];

const teamMembers = [
  {
    name: "Krishan Sharma",
    role: "Director",
    qualifications:
      "CA Fiji, CA Australia/New Zealand, CPP Australia, Registered Tax Agent, Approved BLP Advisor",
    image: "/images/team/krishan-sharma.jpg",
  },
  {
    name: "Narend Prasad",
    role: "Director",
    qualifications:
      "Master’s in Professional Accounting, PGD, B.A, CA, Registered Tax Agent",
    image: "/images/team/narend-prasad.jpg",
  },
  {
    name: "Sandhya",
    role: "Admin, HR & Training Officer",
    qualifications: "PGD-BA, B.Com, DTT, TAE",
    image: "/images/team/sandhya.jpg",
  },
  {
    name: "Avinesh Kumaran",
    role: "Accountant",
    qualifications: "D.A",
    image: "/images/team/avinesh-kumaran.jpg",
  },
  {
    name: "Shivendra Krishna",
    role: "Accountant",
    qualifications: "D.A",
    image: "/images/team/shivendra-krishna.jpg",
  },
  {
    name: "Simran Shintya Devi",
    role: "Administrative Officer",
    qualifications: "Administration and client support",
    image: "/images/team/simran-shintya-devi.jpg",
  },
];

export default function AboutPageContent() {
  return (
    <>
      <AboutHero />
      <CompanyIntroduction />
      <MissionAndVision />
      <CoreValues />
      <WhyChoosePsba />
      <OurApproach />
      <TeamSection />
    </>
  );
}

function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F5F8F7] px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[-25rem] -z-20 h-[50rem] w-[75rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(39,117,121,0.15),transparent_65%)] blur-2xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.25]
        [background-image:linear-gradient(to_right,rgba(9,36,58,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,36,58,0.06)_1px,transparent_1px)]
        [background-size:48px_48px]
        [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#B4994C]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
              About PSBA
            </span>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#09243A] sm:text-5xl lg:text-[4.25rem]">
            Built on integrity.
            <span className="block text-[#277579]">
              Focused on your success.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#687980]">
            Pacifika Smart Business Advisory provides professional accounting
            and advisory support designed around the current and future needs
            of individuals and businesses across Fiji.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book-a-consultation"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#09243A] px-6 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(9,36,58,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#15435A]"
            >
              Work with PSBA

              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#team"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#0A273F]/15 bg-white/70 px-6 text-sm font-semibold text-[#09243A] backdrop-blur-md transition-colors hover:bg-white"
            >
              Meet our team
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          <div className="relative aspect-[4/3.5] overflow-hidden rounded-[1.75rem] bg-[#D9E5E4] shadow-[0_35px_80px_-30px_rgba(9,36,58,0.35)]">
            <Image
              src="/images/psba-team.jpg"
              alt="Pacifika Smart Business Advisory team"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#082338]/60 via-transparent to-transparent" />

            <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl border border-white/15 bg-[#082338]/75 p-5 text-white backdrop-blur-xl sm:inset-x-7 sm:bottom-7">
              <div>
                <p className="text-lg font-semibold">Professional expertise</p>
                <p className="mt-1 text-xs text-white/55">
                  Practical guidance for individuals and businesses
                </p>
              </div>

              <div className="hidden size-11 items-center justify-center rounded-xl bg-[#D8BC6A] text-[#082338] sm:flex">
                <BadgeCheck className="size-5" />
              </div>
            </div>
          </div>

          <div className="absolute -left-3 -top-5 rounded-2xl border border-[#0A273F]/10 bg-white px-5 py-4 shadow-xl sm:-left-7 sm:top-8">
            <p className="text-2xl font-semibold text-[#09243A]">30+</p>
            <p className="text-[10px] text-[#718087]">
              Years combined experience
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CompanyIntroduction() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
            Who we are
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#09243A] sm:text-4xl">
            A professional firm with a practical mindset.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="border-l border-[#0A273F]/10 pl-6 sm:pl-10"
        >
          <p className="text-lg leading-8 text-[#405962] sm:text-xl sm:leading-9">
            PSBA is a management consulting firm offering accounting solutions
            to individuals and small, medium and large local businesses.
          </p>

          <p className="mt-5 text-sm leading-7 text-[#718087] sm:text-base">
            Our services are designed around each client’s needs, enabling us
            to provide support that is efficient, effective and focused on
            meaningful value.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function MissionAndVision() {
  return (
    <section className="bg-[#F5F8F7] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
        <StatementCard
          label="Our mission"
          title="Professional service grounded in integrity."
          description="To provide exceptional financial services while maintaining high levels of integrity and professionalism, helping clients build long-term success and trusted professional relationships."
          icon={Target}
          dark
        />

        <StatementCard
          label="Our vision"
          title="To become Fiji’s accounting firm of choice."
          description="To be nationally recognised for comprehensive financial and professional services while creating an environment where our people can learn, grow and succeed."
          icon={Eye}
        />
      </div>
    </section>
  );
}

type StatementCardProps = {
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  dark?: boolean;
};

function StatementCard({
  label,
  title,
  description,
  icon: Icon,
  dark = false,
}: StatementCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-[1.75rem] p-7 sm:p-10 lg:min-h-[370px] ${
        dark
          ? "bg-[#082338] text-white"
          : "border border-[#0A273F]/10 bg-white text-[#09243A]"
      }`}
    >
      <div
        className={`flex size-12 items-center justify-center rounded-xl ${
          dark
            ? "bg-[#D8BC6A]/15 text-[#D8BC6A]"
            : "bg-[#E5F0EF] text-[#1F696D]"
        }`}
      >
        <Icon className="size-5" />
      </div>

      <p
        className={`mt-10 text-xs font-semibold uppercase tracking-[0.18em] ${
          dark ? "text-[#D8BC6A]" : "text-[#8D7535]"
        }`}
      >
        {label}
      </p>

      <h3 className="mt-4 max-w-lg text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
        {title}
      </h3>

      <p
        className={`mt-5 max-w-xl text-sm leading-7 ${
          dark ? "text-white/55" : "text-[#718087]"
        }`}
      >
        {description}
      </p>
    </motion.article>
  );
}

function CoreValues() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our core values"
          title="The principles behind how we work."
          description="Our values guide how we treat our clients, support our people and approach every professional engagement."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl border border-[#0A273F]/10 bg-[#F8FAF9] p-6 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-[#E5F0EF] text-[#1F696D]">
                  <Icon className="size-[18px]" />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#09243A]">
                  {value.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#718087]">
                  {value.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChoosePsba() {
  return (
    <section className="relative overflow-hidden bg-[#082338] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.045]
        [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
        [background-size:42px_42px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8BC6A]">
            Why choose PSBA
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            Qualified professionals with relevant local experience.
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-white/55">
            Our team combines professional qualifications, regulatory knowledge
            and experience across a range of organisations and industries.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {credentials.map((credential, index) => (
            <motion.div
              key={credential}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="flex gap-3 bg-[#082338] p-5 sm:p-6"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#D8BC6A]/15">
                <Check className="size-3.5 text-[#D8BC6A]" />
              </span>

              <p className="text-sm leading-6 text-white/70">{credential}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurApproach() {
  return (
    <section className="bg-[#F5F8F7] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our approach"
          title="Professional standards. Human relationships."
          description="We believe excellent service comes from combining efficient systems, responsible decision-making and genuine care for people."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {approaches.map((approach, index) => {
            const Icon = approach.icon;

            return (
              <motion.article
                key={approach.eyebrow}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-[#0A273F]/10 bg-white p-7 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-[#E5F0EF] text-[#1F696D]">
                    <Icon className="size-5" />
                  </div>

                  <span className="text-xs font-semibold text-[#A0AAAE]">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8D7535]">
                  {approach.eyebrow}
                </p>

                <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-[#09243A]">
                  {approach.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#718087]">
                  {approach.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section
      id="team"
      className="scroll-mt-28 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our people"
          title="Meet the team behind PSBA."
          description="A team of accounting, taxation, administration and business professionals committed to supporting client success."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (index % 3) * 0.07 }}
              className="group overflow-hidden rounded-2xl border border-[#0A273F]/10 bg-[#F8FAF9]"
            >
              <div className="relative aspect-[4/3.5] overflow-hidden bg-[#DCE7E6]">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role} at PSBA`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#082338]/35 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#09243A]">
                  {member.name}
                </h3>

                <p className="mt-1 text-xs font-semibold text-[#1F696D]">
                  {member.role}
                </p>

                <p className="mt-4 border-t border-[#0A273F]/10 pt-4 text-xs leading-6 text-[#718087]">
                  {member.qualifications}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl"
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-[#B4994C]" />

        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D7535]">
          {eyebrow}
        </span>
      </div>

      <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#09243A] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-[#687980] sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}