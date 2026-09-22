// components/home/HeroSection.tsx

"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDollarSign,
  FileCheck2,
  LayoutDashboard,
  ReceiptText,
  TrendingUp,
  Users2,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logoWhite from '@/public/psbaLogoWhite.png'
import iconWhite from '@/public/psbaconWhite.png'

const dashboardNavigation = [
  { name: "Overview", icon: LayoutDashboard, active: true },
  { name: "Financials", icon: CircleDollarSign, active: false },
  { name: "Compliance", icon: FileCheck2, active: false },
  { name: "Documents", icon: ReceiptText, active: false },
];

const chartData = [
  { month: "Jan", height: "38%" },
  { month: "Feb", height: "52%" },
  { month: "Mar", height: "45%" },
  { month: "Apr", height: "68%" },
  { month: "May", height: "61%" },
  { month: "Jun", height: "82%" },
  { month: "Jul", height: "72%" },
  { month: "Aug", height: "92%" },
];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F5F7F8]">
      {/* Main background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#F8FAFB_0%,#EDF4F5_55%,#E7F0F1_100%)]"
      />

      {/* Top radial glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[-22rem] -z-20 h-[48rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(39,116,121,0.16)_0%,rgba(39,116,121,0.05)_42%,transparent_70%)] blur-2xl"
      />

      {/* Left ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -left-52 top-40 -z-20 size-[34rem] rounded-full bg-[#D7C48B]/15 blur-[130px]"
      />

      {/* Right ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -right-56 top-20 -z-20 size-[38rem] rounded-full bg-[#2A777B]/10 blur-[140px]"
      />

      {/* Grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-[0.28]
        [background-image:linear-gradient(to_right,rgba(13,39,80,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(13,39,80,0.06)_1px,transparent_1px)]
        [background-size:48px_48px]
        [mask-image:linear-gradient(to_bottom,black,transparent_82%)]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Hero copy */}
        <div className="mx-auto flex max-w-5xl flex-col items-center pb-16 pt-10 text-center sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-22">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#1F696D]/15 bg-white/70 px-3 py-1.5 shadow-[0_8px_30px_rgba(13,39,80,0.06)] backdrop-blur-md"
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-[#1F696D]">
              <Check aria-hidden="true" className="size-3 text-white" />
            </span>

            <span className="text-xs font-semibold tracking-wide text-[#24484A] sm:text-[13px]">
              Accounting and business advisory in Fiji
            </span>

            <ChevronRight
              aria-hidden="true"
              className="size-3.5 text-[#1F696D]/60"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.045em] text-[#0A2138] sm:text-6xl lg:text-[3.75rem]"
          >
            Clarity for your numbers.
            <span className="block bg-gradient-to-r from-[#1B666B] via-[#297D80] to-[#AA8E42] bg-clip-text text-transparent">
              Confidence for every decision.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-2xl text-pretty text-base leading-7 text-[#52636E] sm:text-lg sm:leading-8"
          >
            PSBA provides reliable accounting, tax, compliance and strategic
            advisory services that help individuals and businesses across Fiji
            understand their finances and move forward with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            <Link
              href="/book-a-consultation"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0A273F] px-6 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(10,39,63,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#143B56] hover:shadow-[0_18px_40px_rgba(10,39,63,0.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F696D] focus-visible:ring-offset-2 sm:w-auto"
            >
              Book a consultation

              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#0A273F]/15 bg-white/70 px-6 text-sm font-semibold text-[#0A273F] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1F696D]/30 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F696D] focus-visible:ring-offset-2 sm:w-auto"
            >
              Explore our services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-[#62737B]"
          >
            {[
              "30+ years combined experience",
              "Fijian tax knowledge",
              "Personalised support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <Check
                  aria-hidden="true"
                  className="size-3.5 text-[#1F696D]"
                />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        <DashboardPreview />
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-52 bg-gradient-to-t from-white to-transparent"
      />
    </section>
  );
}

function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.85,
        delay: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto max-w-6xl pb-10"
    >
      {/* Dashboard glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-10 -z-10 h-72 w-[80%] -translate-x-1/2 rounded-full bg-[#277479]/20 blur-[100px]"
      />

      {/* Browser frame */}
      <div className="overflow-hidden rounded-t-[1.4rem] border border-[#0D2750]/10 bg-white/80 p-1.5 shadow-[0_40px_100px_-35px_rgba(13,39,80,0.35)] backdrop-blur-xl sm:rounded-t-[1.8rem] sm:p-2">
        <div className="overflow-hidden rounded-t-[1.05rem] border border-[#0D2750]/10 bg-white sm:rounded-t-[1.35rem]">
          {/* Browser controls */}
          <div className="flex h-11 items-center border-b border-[#0D2750]/8 bg-[#FAFBFB] px-4 sm:h-12">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-[#E5A8A1]" />
              <span className="size-2.5 rounded-full bg-[#E3C578]" />
              <span className="size-2.5 rounded-full bg-[#8DC9A5]" />
            </div>

            <div className="mx-auto hidden w-full max-w-xs rounded-md border border-[#0D2750]/8 bg-white px-3 py-1 text-center text-[10px] text-[#718087] sm:block">
              portal.psba.com.fj
            </div>

            <div className="w-10 sm:w-[46px]" />
          </div>

          {/* Dashboard */}
          <div className="flex h-[480px] bg-[#F5F7F8] sm:h-[560px] lg:h-[620px]">
            {/* Sidebar */}
            <aside className="hidden w-52 shrink-0 border-r border-[#0D2750]/8 bg-[#09243A] p-4 text-white md:block lg:w-60 lg:p-5">
              <div className="flex items-center gap-2.5 px-2">

                <div className='flex flex-col gap-2'>
                  <div className='flex w-full items-center'>
                    <Image src={iconWhite} alt='logoIcon' width={40} height={40}/>
                    <Image src={logoWhite} alt="logo" width={100} />
                  </div>
                  <p className="text-[9px] uppercase tracking-[0.14em] text-white/45">
                    Client portal
                  </p>
                </div>
              </div>

              <nav className="mt-8 space-y-1">
                {dashboardNavigation.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.name}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium ${
                        item.active
                          ? "bg-white/10 text-white"
                          : "text-white/50"
                      }`}
                    >
                      <Icon className="size-4" />
                      {item.name}
                    </div>
                  );
                })}
              </nav>

              <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex size-8 items-center justify-center rounded-lg bg-[#D7BC72]/15">
                  <CalendarDays className="size-4 text-[#D7BC72]" />
                </div>

                <p className="mt-3 text-xs font-semibold">Need assistance?</p>

                <p className="mt-1 text-[10px] leading-4 text-white/45">
                  Schedule a meeting with your PSBA advisor.
                </p>

                <button className="mt-3 w-full rounded-md bg-white px-3 py-2 text-[10px] font-semibold text-[#09243A]">
                  Contact advisor
                </button>
              </div>
            </aside>

            {/* Main dashboard content */}
            <div className="min-w-0 flex-1 overflow-hidden p-4 sm:p-6 lg:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1F696D] sm:text-xs">
                    Business overview
                  </p>

                  <h2 className="mt-1 text-lg font-semibold tracking-tight text-[#0A273F] sm:text-2xl">
                    Good morning, Alex
                  </h2>

                  <p className="mt-1 hidden text-xs text-[#728088] sm:block">
                    Here’s the latest financial activity for your business.
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#0D2750]/10 bg-white py-1.5 pl-1.5 pr-3 shadow-sm">
                  <div className="flex size-7 items-center justify-center rounded-full bg-[#1F696D] text-[9px] font-bold text-white">
                    AB
                  </div>

                  <span className="hidden text-[10px] font-semibold text-[#334D5A] sm:block">
                    Alex Brown
                  </span>
                </div>
              </div>

              {/* Metric cards */}
              <div className="mt-5 grid grid-cols-2 gap-2.5 lg:mt-7 lg:grid-cols-4 lg:gap-4">
                <MetricCard
                  icon={WalletCards}
                  label="Revenue"
                  value="$48,240"
                  change="+12.4%"
                />

                <MetricCard
                  icon={ReceiptText}
                  label="Expenses"
                  value="$21,680"
                  change="-3.2%"
                />

                <MetricCard
                  icon={TrendingUp}
                  label="Net profit"
                  value="$26,560"
                  change="+8.7%"
                />

                <MetricCard
                  icon={Users2}
                  label="Receivables"
                  value="$8,920"
                  change="+4.1%"
                />
              </div>

              <div className="mt-3 grid gap-3 lg:mt-4 lg:grid-cols-[1.65fr_1fr] lg:gap-4">
                {/* Chart */}
                <div className="rounded-xl border border-[#0D2750]/8 bg-white p-3.5 shadow-[0_8px_30px_rgba(13,39,80,0.04)] sm:p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xs font-semibold text-[#17384B] sm:text-sm">
                        Financial performance
                      </h3>

                      <p className="mt-1 text-[9px] text-[#819096] sm:text-[10px]">
                        Revenue over the last eight months
                      </p>
                    </div>

                    <span className="rounded-md bg-[#EFF5F4] px-2 py-1 text-[9px] font-semibold text-[#1F696D]">
                      2026
                    </span>
                  </div>

                  <div className="mt-5 flex h-28 items-end gap-2 sm:h-40 sm:gap-3 lg:h-48">
                    {chartData.map((item, index) => (
                      <div
                        key={item.month}
                        className="flex h-full flex-1 flex-col justify-end gap-2"
                      >
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: item.height }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.7,
                            delay: 0.6 + index * 0.06,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className={`w-full rounded-t-sm ${
                            index === chartData.length - 1
                              ? "bg-gradient-to-t from-[#1B5E62] to-[#4C9697]"
                              : "bg-[#DCE9E8]"
                          }`}
                        />

                        <span className="text-center text-[8px] text-[#879399] sm:text-[9px]">
                          {item.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compliance card */}
                <div className="hidden rounded-xl border border-[#0D2750]/8 bg-white p-5 shadow-[0_8px_30px_rgba(13,39,80,0.04)] lg:block">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-[#17384B]">
                        Compliance
                      </h3>

                      <p className="mt-1 text-[10px] text-[#819096]">
                        Upcoming obligations
                      </p>
                    </div>

                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#ECF5F1]">
                      <FileCheck2 className="size-4 text-[#1F696D]" />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <ComplianceItem
                      title="VAT return"
                      date="Due 28 September"
                      status="In progress"
                    />

                    <ComplianceItem
                      title="Payroll filing"
                      date="Due 30 September"
                      status="Ready"
                    />

                    <ComplianceItem
                      title="Income tax"
                      date="Due 31 March"
                      status="Upcoming"
                    />
                  </div>

                  <div className="mt-5 rounded-lg bg-[#F5F8F7] p-3">
                    <div className="flex items-center gap-2">
                      <div className="flex size-6 items-center justify-center rounded-full bg-[#DDF0E5]">
                        <Check className="size-3 text-[#237049]" />
                      </div>

                      <p className="text-[10px] font-semibold text-[#35505A]">
                        Your records are up to date
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-[10px] text-[#728088] sm:text-xs">
        Concept preview of the future PSBA client experience
      </p>
    </motion.div>
  );
}

type MetricCardProps = {
  icon: React.ElementType;
  label: string;
  value: string;
  change: string;
};

function MetricCard({
  icon: Icon,
  label,
  value,
  change,
}: MetricCardProps) {
  return (
    <div className="rounded-xl border border-[#0D2750]/8 bg-white p-3 shadow-[0_8px_30px_rgba(13,39,80,0.04)] sm:p-4">
      <div className="flex items-center justify-between">
        <div className="flex size-7 items-center justify-center rounded-lg bg-[#EDF4F3] sm:size-8">
          <Icon className="size-3.5 text-[#1F696D] sm:size-4" />
        </div>

        <span className="text-[8px] font-semibold text-[#2C8259] sm:text-[9px]">
          {change}
        </span>
      </div>

      <p className="mt-3 text-[9px] text-[#78878D] sm:text-[10px]">{label}</p>

      <p className="mt-0.5 text-sm font-semibold tracking-tight text-[#17384B] sm:text-lg">
        {value}
      </p>
    </div>
  );
}

type ComplianceItemProps = {
  title: string;
  date: string;
  status: string;
};

function ComplianceItem({
  title,
  date,
  status,
}: ComplianceItemProps) {
  return (
    <div className="flex items-center justify-between border-b border-[#0D2750]/6 pb-3 last:border-0">
      <div>
        <p className="text-[11px] font-semibold text-[#294654]">{title}</p>
        <p className="mt-1 text-[9px] text-[#879399]">{date}</p>
      </div>

      <span className="rounded-full bg-[#EFF5F4] px-2 py-1 text-[8px] font-semibold text-[#1F696D]">
        {status}
      </span>
    </div>
  );
}