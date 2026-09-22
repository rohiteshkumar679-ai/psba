// components/layout/Header.tsx

"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpenText,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  CircleDollarSign,
  FileCheck2,
  Landmark,
  Menu,
  ReceiptText,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from '@/public/psbaLogo.png'
import icon from '@/public/psbaIcon.png'

const services = [
  {
    title: "Accounting & Bookkeeping",
    description: "Clear and accurate financial records.",
    href: "/services/accounting-bookkeeping",
    icon: ReceiptText,
  },
  {
    title: "Tax & Compliance",
    description: "Stay compliant with Fijian tax requirements.",
    href: "/services/tax-compliance",
    icon: FileCheck2,
  },
  {
    title: "Payroll",
    description: "Reliable payroll processing and support.",
    href: "/services/payroll",
    icon: Users,
  },
  {
    title: "Financial Advisory",
    description: "Insights that support better decisions.",
    href: "/services/financial-reporting-advisory",
    icon: CircleDollarSign,
  },
  {
    title: "Outsourced CFO",
    description: "Senior financial guidance as you grow.",
    href: "/services/outsourced-cfo",
    icon: BriefcaseBusiness,
  },
  {
    title: "Business Startup Support",
    description: "Start with the right financial structure.",
    href: "/services/business-startup-support",
    icon: Building2,
  },
];

const whoWeHelp = [
  {
    title: "Startups",
    description: "Build a strong financial foundation.",
    href: "/who-we-help/startups",
  },
  {
    title: "Small businesses",
    description: "Simplify finances and support growth.",
    href: "/who-we-help/small-businesses",
  },
  {
    title: "Established businesses",
    description: "Improve reporting, control and strategy.",
    href: "/who-we-help/established-businesses",
  },
  {
    title: "Individuals",
    description: "Personal tax and financial assistance.",
    href: "/who-we-help/individuals",
  },
];

type DesktopMenu = "services" | "who-we-help" | null;

export default function Header() {
  const pathname = usePathname();

  const [desktopMenu, setDesktopMenu] = useState<DesktopMenu>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileWhoWeHelpOpen, setMobileWhoWeHelpOpen] = useState(false);

  const session = false

  // Close menus whenever the route changes.
  useEffect(() => {
    setDesktopMenu(null);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileWhoWeHelpOpen(false);
  }, [pathname]);

  // Prevent the page behind the mobile menu from scrolling.
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#0A273F]/8 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">
          {/* Brand logo */}
          <Link
            href="/"
            aria-label="PSBA home"
            className="relative z-10 flex shrink-0 items-center focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F696D] focus-visible:ring-offset-4"
          >
            <Image src={icon} alt='logo-Icon' width={60} height={60} />
            <Image
              src={logo}
              alt="Pac Wheels Smartvelte Business Advisory"
              width={110}
              height={60}
              priority
              className="-ml-2 pt-2"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            <NavLink href="/about" active={isActive("/about")}>
              About
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setDesktopMenu("services")}
              onMouseLeave={() => setDesktopMenu(null)}
            >
              <DropdownButton
                label="Services"
                active={isActive("/services")}
                expanded={desktopMenu === "services"}
                onClick={() =>
                  setDesktopMenu((current) =>
                    current === "services" ? null : "services",
                  )
                }
              />

              <AnimatePresence>
                {desktopMenu === "services" && <ServicesDropdown />}
              </AnimatePresence>
            </div>

            <NavLink href="/outsourcing" active={isActive("/outsourcing")}>
              Outsourcing
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setDesktopMenu("who-we-help")}
              onMouseLeave={() => setDesktopMenu(null)}
            >
              <DropdownButton
                label="Who we help"
                active={isActive("/who-we-help")}
                expanded={desktopMenu === "who-we-help"}
                onClick={() =>
                  setDesktopMenu((current) =>
                    current === "who-we-help" ? null : "who-we-help",
                  )
                }
              />

              <AnimatePresence>
                {desktopMenu === "who-we-help" && <WhoWeHelpDropdown />}
              </AnimatePresence>
            </div>

            <NavLink href="/insights" active={isActive("/insights")}>
              Insights
            </NavLink>
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 lg:flex">
            {session ? <Link
              href="/dashboard"
              className="rounded-full px-4 py-2.5 text-sm font-semibold text-[#0A273F] transition-colors hover:bg-[#0A273F]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F696D]"
            >
              Dashboard
            </Link> : <Link
              href="/client-portal"
              className="rounded-full px-4 py-2.5 text-sm font-semibold text-[#0A273F] transition-colors hover:bg-[#0A273F]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F696D]"
            >
              Client portal
            </Link>}

            <Link
              href="/book-a-consultation"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0A273F] px-5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(10,39,63,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#143B56] hover:shadow-[0_14px_32px_rgba(10,39,63,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F696D] focus-visible:ring-offset-2"
            >
              Book a consultation

              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            className="flex size-11 items-center justify-center rounded-full border border-[#0A273F]/10 bg-white text-[#0A273F] transition-colors hover:bg-[#F2F6F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F696D] lg:hidden"
          >
            <Menu aria-hidden="true" className="size-5" />
          </button>
        </div>
      </header>

      <MobileMenu
        open={mobileMenuOpen}
        servicesOpen={mobileServicesOpen}
        whoWeHelpOpen={mobileWhoWeHelpOpen}
        onClose={() => setMobileMenuOpen(false)}
        onToggleServices={() =>
          setMobileServicesOpen((current) => !current)
        }
        onToggleWhoWeHelp={() =>
          setMobileWhoWeHelpOpen((current) => !current)
        }
      />
    </>
  );
}

type NavLinkProps = {
  href: string;
  active: boolean;
  children: React.ReactNode;
};

function NavLink({ href, active, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`relative rounded-full px-3.5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F696D] ${
        active
          ? "text-[#1F696D]"
          : "text-[#475D67] hover:bg-[#0A273F]/5 hover:text-[#0A273F]"
      }`}
    >
      {children}

      {active && (
        <motion.span
          layoutId="active-navigation-item"
          className="absolute inset-x-4 -bottom-[21px] h-0.5 rounded-full bg-[#1F696D]"
        />
      )}
    </Link>
  );
}

type DropdownButtonProps = {
  label: string;
  active: boolean;
  expanded: boolean;
  onClick: () => void;
};

function DropdownButton({
  label,
  active,
  expanded,
  onClick,
}: DropdownButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={expanded}
      className={`flex items-center gap-1 rounded-full px-3.5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F696D] ${
        active || expanded
          ? "bg-[#0A273F]/5 text-[#1F696D]"
          : "text-[#475D67] hover:bg-[#0A273F]/5 hover:text-[#0A273F]"
      }`}
    >
      {label}

      <ChevronDown
        aria-hidden="true"
        className={`size-3.5 transition-transform duration-200 ${
          expanded ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}

function ServicesDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-1/2 top-full w-[620px] -translate-x-1/2 pt-4"
    >
      <div className="overflow-hidden rounded-2xl border border-[#0A273F]/10 bg-white p-2 shadow-[0_24px_70px_-20px_rgba(10,39,63,0.28)]">
        <div className="grid grid-cols-2 gap-1">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.href}
                href={service.href}
                className="group flex gap-3 rounded-xl p-3.5 transition-colors hover:bg-[#F2F7F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F696D]"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#1F696D]/10 bg-[#EAF3F2] text-[#1F696D] transition-colors group-hover:bg-[#1F696D] group-hover:text-white">
                  <Icon aria-hidden="true" className="size-[18px]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#0A273F]">
                    {service.title}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#718087]">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-2 flex items-center justify-between rounded-xl bg-[#09243A] px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-white">
              Explore every PSBA service
            </p>

            <p className="mt-0.5 text-xs text-white/55">
              Find the right support for your business.
            </p>
          </div>

          <Link
            href="/services"
            className="group flex items-center gap-1.5 text-xs font-semibold text-[#E2C574] hover:text-white"
          >
            View all services

            <ArrowRight
              aria-hidden="true"
              className="size-3.5 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function WhoWeHelpDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-1/2 top-full w-[360px] -translate-x-1/2 pt-4"
    >
      <div className="rounded-2xl border border-[#0A273F]/10 bg-white p-2 shadow-[0_24px_70px_-20px_rgba(10,39,63,0.28)]">
        {whoWeHelp.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[#F2F7F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F696D]"
          >
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#C2A453] transition-transform group-hover:scale-150" />

            <div>
              <p className="text-sm font-semibold text-[#0A273F]">
                {item.title}
              </p>

              <p className="mt-0.5 text-xs leading-5 text-[#718087]">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

type MobileMenuProps = {
  open: boolean;
  servicesOpen: boolean;
  whoWeHelpOpen: boolean;
  onClose: () => void;
  onToggleServices: () => void;
  onToggleWhoWeHelp: () => void;
};

function MobileMenu({
  open,
  servicesOpen,
  whoWeHelpOpen,
  onClose,
  onToggleServices,
  onToggleWhoWeHelp,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Dark page overlay */}
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#071A2F]/45 backdrop-blur-sm"
          />

          {/* Mobile navigation panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#F8FAFA] shadow-2xl"
          >
            <div className="flex h-[72px] items-center justify-between border-b border-[#0A273F]/8 px-5">
              <Link href="/" onClick={onClose} aria-label="PSBA home">
                <Image
                  src={logo}
                  alt="Pacifika Smart Business Advisory"
                  width={180}
                  height={52}
                  priority
                  className="h-15 w-auto object-contain"
                />
              </Link>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="flex size-11 items-center justify-center rounded-full border border-[#0A273F]/10 bg-white text-[#0A273F]"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <nav
              aria-label="Mobile navigation"
              className="flex-1 overflow-y-auto px-5 py-6"
            >
              <div className="space-y-1">
                <MobileLink href="/about">About</MobileLink>

                <MobileDropdownButton
                  label="Services"
                  open={servicesOpen}
                  onClick={onToggleServices}
                />

                <AnimatePresence initial={false}>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mb-2 ml-3 space-y-1 border-l border-[#1F696D]/15 pl-4">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block rounded-lg px-3 py-2.5 text-sm text-[#60737B] hover:bg-white hover:text-[#0A273F]"
                          >
                            {service.title}
                          </Link>
                        ))}

                        <Link
                          href="/services"
                          className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-[#1F696D]"
                        >
                          View all services
                          <ArrowRight className="size-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <MobileLink href="/outsourcing">Outsourcing</MobileLink>

                <MobileDropdownButton
                  label="Who we help"
                  open={whoWeHelpOpen}
                  onClick={onToggleWhoWeHelp}
                />

                <AnimatePresence initial={false}>
                  {whoWeHelpOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mb-2 ml-3 space-y-1 border-l border-[#1F696D]/15 pl-4">
                        {whoWeHelp.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block rounded-lg px-3 py-2.5 text-sm text-[#60737B] hover:bg-white hover:text-[#0A273F]"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <MobileLink href="/case-studies">Case studies</MobileLink>
                <MobileLink href="/insights">Insights</MobileLink>
                <MobileLink href="/careers">Careers</MobileLink>
                <MobileLink href="/contact">Contact</MobileLink>
              </div>
            </nav>

            <div className="border-t border-[#0A273F]/8 bg-white p-5">
              <Link
                href="/client-portal"
                className="mb-3 flex min-h-12 items-center justify-center rounded-full border border-[#0A273F]/12 text-sm font-semibold text-[#0A273F]"
              >
                Client portal
              </Link>

              <Link
                href="/book-a-consultation"
                className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0A273F] text-sm font-semibold text-white shadow-lg"
              >
                Book a consultation
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function MobileLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex min-h-12 items-center rounded-xl px-3 text-base font-medium text-[#233F4D] transition-colors hover:bg-white hover:text-[#1F696D]"
    >
      {children}
    </Link>
  );
}

function MobileDropdownButton({
  label,
  open,
  onClick,
}: {
  label: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      className="flex min-h-12 w-full items-center justify-between rounded-xl px-3 text-base font-medium text-[#233F4D] hover:bg-white"
    >
      {label}

      <ChevronDown
        aria-hidden="true"
        className={`size-4 transition-transform duration-200 ${
          open ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}