// components/layout/Footer.tsx

import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  {
    label: "Accounting & Bookkeeping",
    href: "/services/accounting-bookkeeping",
  },
  {
    label: "Tax & Compliance",
    href: "/services/tax-compliance",
  },
  {
    label: "Payroll",
    href: "/services/payroll",
  },
  {
    label: "Financial Advisory",
    href: "/services/financial-reporting-advisory",
  },
  {
    label: "Outsourced CFO",
    href: "/services/outsourced-cfo",
  },
  {
    label: "Startup Support",
    href: "/services/business-startup-support",
  },
];

const companyLinks = [
  { label: "About PSBA", href: "/about" },
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Use", href: "/legal/terms-of-use" },
  {
    label: "Professional Disclaimer",
    href: "/legal/professional-disclaimer",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#061C2E] px-5 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Main footer */}
        <div className="grid gap-12 border-b border-white/10 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_0.7fr_1.1fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="PSBA home">
              <Image
                src="/images/psba-logo-white.svg"
                alt="Pacifika Smart Business Advisory"
                width={210}
                height={64}
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              Practical accounting, compliance and advisory support for
              individuals and businesses across Fiji.
            </p>

            <Link
              href="/book-a-consultation"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#D8BC6A]"
            >
              Book a consultation

              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Services */}
          <FooterColumn title="Services" links={serviceLinks} />

          {/* Company */}
          <FooterColumn title="Company" links={companyLinks} />

          {/* Contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Contact
            </h2>

            <div className="mt-6 space-y-5">
              <ContactItem icon={MapPin}>
                Suite 32, Halka Flats,
                <br />
                32 Disraeli Road, Suva
              </ContactItem>

              <ContactItem icon={MapPin}>
                Level 1, Ganga Singh Building,
                <br />
                Ganga Singh Street, Ba
              </ContactItem>

              <ContactItem icon={Phone}>
                <a
                  href="tel:+6798065614"
                  className="transition-colors hover:text-white"
                >
                  (+679) 806 5614
                </a>
              </ContactItem>

              <ContactItem icon={Mail}>
                <a
                  href="mailto:donish.lal@pasifikaadvisory.com"
                  className="break-all transition-colors hover:text-white"
                >
                  donish.lal@pasifikaadvisory.com
                </a>
              </ContactItem>

              <ContactItem icon={Clock3}>
                Monday–Friday, 8:00 AM–5:00 PM
              </ContactItem>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col gap-5 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Pacifika Smart Business Advisory. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
        {title}
      </h2>

      <ul className="mt-6 space-y-3.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

type ContactItemProps = {
  icon: React.ElementType;
  children: React.ReactNode;
};

function ContactItem({
  icon: Icon,
  children,
}: ContactItemProps) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 size-4 shrink-0 text-[#D8BC6A]" />

      <div className="text-xs leading-5 text-white/50">{children}</div>
    </div>
  );
}