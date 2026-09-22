// data/audiences.ts

export type AudienceIcon =
  | "startup"
  | "small-business"
  | "established-business"
  | "individual";

export type AudienceSupport = {
  title: string;
  description: string;
  href: string;
};

export type Audience = {
  slug: string;
  label: string;
  icon: AudienceIcon;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroHighlight: string;
  description: string;
  overviewTitle: string;
  overview: string[];
  challenges: string[];
  support: AudienceSupport[];
  outcomes: string[];
};

export const audiences: Audience[] = [
  {
    slug: "startups",
    label: "Startups & Entrepreneurs",
    icon: "startup",
    seoTitle: "Accounting Support for Startups in Fiji | PSBA",
    seoDescription:
      "Business registration, accounting setup, tax support, financial projections and practical advisory services for Fiji startups.",
    eyebrow: "For startups and entrepreneurs",
    heroTitle: "Build your business",
    heroHighlight: "on the right financial foundation.",
    description:
      "Get practical support with registration, financial systems, tax responsibilities and planning so you can begin with greater clarity.",
    overviewTitle: "Starting correctly can prevent expensive problems later.",
    overview: [
      "Launching a business involves decisions about registration, tax, record keeping, pricing, funding and financial management.",
      "PSBA helps entrepreneurs understand these responsibilities and establish practical systems that can support future growth.",
    ],
    challenges: [
      "Understanding registration and tax requirements",
      "Separating personal and business finances",
      "Creating reliable cash-flow projections",
      "Setting up bookkeeping and financial records",
      "Preparing business plans or funding applications",
      "Making decisions without historical financial data",
    ],
    support: [
      {
        title: "Business Startup Support",
        description:
          "Guidance with registration, structuring, planning and initial financial setup.",
        href: "/services/business-startup-support",
      },
      {
        title: "Accounting & Bookkeeping",
        description:
          "Establish organised financial records from the beginning.",
        href: "/services/accounting-bookkeeping",
      },
      {
        title: "Tax & Compliance",
        description:
          "Understand registrations, filing responsibilities and important deadlines.",
        href: "/services/tax-compliance",
      },
      {
        title: "Grants & SME Support",
        description:
          "Prepare business plans, projections and funding documentation.",
        href: "/services/grants-sme-support",
      },
    ],
    outcomes: [
      "A properly established business",
      "Clearer tax and compliance responsibilities",
      "Organised accounting records",
      "Practical financial projections",
      "Greater confidence when approaching funders",
      "Systems that can grow with the business",
    ],
  },
  {
    slug: "small-businesses",
    label: "Small & Medium Businesses",
    icon: "small-business",
    seoTitle: "Accounting Services for Small Businesses in Fiji | PSBA",
    seoDescription:
      "Bookkeeping, payroll, tax, compliance and financial advisory support for small and medium businesses across Fiji.",
    eyebrow: "For small and medium businesses",
    heroTitle: "Spend less time managing numbers",
    heroHighlight: "and more time growing your business.",
    description:
      "Receive reliable accounting, payroll, compliance and advisory support designed around the realities of running an SME.",
    overviewTitle: "Your finance function should support growth—not slow it down.",
    overview: [
      "Small and medium businesses often manage complex financial responsibilities with limited internal resources.",
      "PSBA provides practical support that reduces administrative pressure, improves financial visibility and helps business owners make informed decisions.",
    ],
    challenges: [
      "Bookkeeping taking time away from operations",
      "Unclear cash-flow position",
      "Recurring payroll and tax responsibilities",
      "Limited financial reporting",
      "Difficulty understanding business profitability",
      "Preparing for funding or future expansion",
    ],
    support: [
      {
        title: "Accounting & Bookkeeping",
        description:
          "Reliable day-to-day financial records and reconciliations.",
        href: "/services/accounting-bookkeeping",
      },
      {
        title: "Payroll Services",
        description:
          "Structured payroll processing, deductions and employee records.",
        href: "/services/payroll",
      },
      {
        title: "Tax & Compliance",
        description:
          "Support with returns, VAT, documentation and deadlines.",
        href: "/services/tax-compliance",
      },
      {
        title: "Financial Reporting & Advisory",
        description:
          "Clear reporting, cash-flow analysis and performance insight.",
        href: "/services/financial-reporting-advisory",
      },
    ],
    outcomes: [
      "More accurate financial records",
      "Reduced administrative workload",
      "Better visibility over cash flow",
      "Improved compliance readiness",
      "Clearer understanding of profitability",
      "More informed growth decisions",
    ],
  },
  {
    slug: "established-businesses",
    label: "Established Businesses",
    icon: "established-business",
    seoTitle: "Financial Advisory for Established Fiji Businesses | PSBA",
    seoDescription:
      "Advanced reporting, outsourced CFO, governance, internal control and tax support for established organisations in Fiji.",
    eyebrow: "For established businesses",
    heroTitle: "Strengthen financial control",
    heroHighlight: "and make better strategic decisions.",
    description:
      "Improve reporting, governance and financial oversight as your organisation becomes larger and more complex.",
    overviewTitle: "Greater complexity requires stronger financial oversight.",
    overview: [
      "Established organisations often need more than transactional accounting. Leaders require timely reports, reliable internal controls and experienced financial guidance.",
      "PSBA supports management and stakeholders with reporting, risk management, compliance and higher-level financial advisory services.",
    ],
    challenges: [
      "Complex reporting requirements",
      "Limited visibility across departments",
      "Weak or outdated internal controls",
      "Managing financial and operational risk",
      "Preparing information for boards or stakeholders",
      "Evaluating expansion and investment decisions",
    ],
    support: [
      {
        title: "Financial Reporting & Advisory",
        description:
          "Structured management reports, analysis and forecasting.",
        href: "/services/financial-reporting-advisory",
      },
      {
        title: "Outsourced CFO",
        description:
          "Senior financial leadership and strategic decision support.",
        href: "/services/outsourced-cfo",
      },
      {
        title: "Governance & Internal Controls",
        description:
          "Improve accountability, processes and risk management.",
        href: "/services/governance-internal-controls",
      },
      {
        title: "Tax & Compliance",
        description:
          "Support more complex tax and regulatory responsibilities.",
        href: "/services/tax-compliance",
      },
    ],
    outcomes: [
      "More reliable management reporting",
      "Stronger financial controls",
      "Clearer organisational accountability",
      "Better-informed leadership decisions",
      "Improved risk awareness",
      "Financial planning aligned with strategy",
    ],
  },
  {
    slug: "individuals",
    label: "Individuals",
    icon: "individual",
    seoTitle: "Personal Tax & Accounting Support in Fiji | PSBA",
    seoDescription:
      "Professional personal tax, financial record and business transition support for individuals across Fiji.",
    eyebrow: "For individuals",
    heroTitle: "Clear financial guidance",
    heroHighlight: "for important personal decisions.",
    description:
      "Receive professional assistance with personal tax responsibilities, financial records and the transition into business ownership.",
    overviewTitle: "Financial responsibilities should be easier to understand.",
    overview: [
      "Personal tax and financial matters can become difficult when records are incomplete, circumstances change or business activities are involved.",
      "PSBA provides practical assistance to help individuals understand requirements, organise information and identify the appropriate next steps.",
    ],
    challenges: [
      "Understanding personal tax responsibilities",
      "Preparing and organising tax information",
      "Managing incomplete financial records",
      "Starting a business or earning business income",
      "Responding to compliance requirements",
      "Knowing which professional service is required",
    ],
    support: [
      {
        title: "Personal Tax Support",
        description:
          "Assistance preparing tax information and understanding obligations.",
        href: "/services/tax-compliance",
      },
      {
        title: "Financial Record Support",
        description:
          "Help organise records and supporting financial documentation.",
        href: "/services/accounting-bookkeeping",
      },
      {
        title: "Business Startup Support",
        description:
          "Guidance when moving from an individual activity into a business.",
        href: "/services/business-startup-support",
      },
      {
        title: "Professional Consultation",
        description:
          "Discuss your circumstances and identify the appropriate next step.",
        href: "/book-a-consultation",
      },
    ],
    outcomes: [
      "A clearer understanding of obligations",
      "Better-organised financial records",
      "Reduced uncertainty around tax matters",
      "Professional support when circumstances change",
      "A structured transition into business",
      "Clear and practical next steps",
    ],
  },
];

export function getAudienceBySlug(slug: string) {
  return audiences.find((audience) => audience.slug === slug);
}