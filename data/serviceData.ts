// data/services.ts

export type ServiceIcon =
  | "bookkeeping"
  | "tax"
  | "payroll"
  | "reporting"
  | "cfo"
  | "startup"
  | "governance"
  | "grants";

export type ServiceFeature = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  icon: ServiceIcon;
  description: string;
  seoTitle: string;
  seoDescription: string;
  overviewTitle: string;
  overview: string[];
  features: ServiceFeature[];
  included: string[];
  idealFor: string[];
};

export const services: Service[] = [
  {
    slug: "accounting-bookkeeping",
    number: "01",
    title: "Accounting & Bookkeeping",
    shortTitle: "Accounting",
    icon: "bookkeeping",
    description:
      "Reliable financial records that give you a clear and current understanding of your business performance.",
    seoTitle: "Accounting & Bookkeeping Services in Fiji | PSBA",
    seoDescription:
      "Professional bookkeeping, reconciliations, account management and financial record services for businesses across Fiji.",
    overviewTitle: "Know exactly where your business stands.",
    overview: [
      "Accurate financial records are the foundation of every informed business decision. PSBA helps maintain organised, reliable and up-to-date accounts.",
      "Our accounting support can reduce administrative pressure, improve reporting and make it easier to meet tax and compliance responsibilities.",
    ],
    features: [
      {
        title: "Accurate record keeping",
        description:
          "Maintain clear records of income, expenses, assets, liabilities and business transactions.",
      },
      {
        title: "Account reconciliation",
        description:
          "Compare internal records with bank and supporting documents to identify discrepancies.",
      },
      {
        title: "Management accounts",
        description:
          "Receive regular financial information that helps you monitor business performance.",
      },
      {
        title: "Organised documentation",
        description:
          "Keep physical and electronic source documents structured and accessible.",
      },
    ],
    included: [
      "Transaction recording",
      "Bank reconciliations",
      "General ledger maintenance",
      "Accounts payable and receivable support",
      "Monthly management reports",
      "Source-document organisation",
    ],
    idealFor: [
      "Startups establishing their accounting system",
      "SMEs without an internal accounting team",
      "Businesses with overdue or disorganised records",
      "Organisations requiring ongoing bookkeeping support",
    ],
  },
  {
    slug: "tax-compliance",
    number: "02",
    title: "Tax & Compliance",
    shortTitle: "Tax & Compliance",
    icon: "tax",
    description:
      "Practical support for meeting Fijian tax responsibilities and maintaining regulatory compliance.",
    seoTitle: "Tax & Compliance Services in Fiji | PSBA",
    seoDescription:
      "Tax return preparation, VAT assistance, tax planning and regulatory compliance support for individuals and businesses in Fiji.",
    overviewTitle: "Stay compliant without losing focus on your business.",
    overview: [
      "Tax and regulatory responsibilities can be complex and time-sensitive. PSBA helps clients understand their obligations and prepare the required information.",
      "Our approach combines accurate preparation with practical guidance so that you understand what is required, when it is due and how it affects you.",
    ],
    features: [
      {
        title: "Tax return preparation",
        description:
          "Prepare accurate tax returns using the financial records and supporting information provided.",
      },
      {
        title: "VAT support",
        description:
          "Assist with VAT calculations, documentation and return preparation where applicable.",
      },
      {
        title: "Tax planning",
        description:
          "Consider future tax responsibilities when making financial and business decisions.",
      },
      {
        title: "Regulatory compliance",
        description:
          "Support compliance with relevant rules, standards, policies and legal requirements.",
      },
    ],
    included: [
      "Income tax return preparation",
      "VAT return assistance",
      "Tax registration support",
      "FRCS portal guidance",
      "Compliance reviews",
      "Tax planning discussions",
    ],
    idealFor: [
      "Individuals requiring tax assistance",
      "Newly registered businesses",
      "SMEs managing recurring tax obligations",
      "Organisations requiring compliance support",
    ],
  },
  {
    slug: "payroll",
    number: "03",
    title: "Payroll Services",
    shortTitle: "Payroll",
    icon: "payroll",
    description:
      "Accurate and dependable payroll support that helps employees get paid correctly and on time.",
    seoTitle: "Payroll Services for Fiji Businesses | PSBA",
    seoDescription:
      "Professional payroll processing, employee record management, deductions and payroll reporting for businesses in Fiji.",
    overviewTitle: "Reliable payroll for your business and your people.",
    overview: [
      "Payroll affects your employees, financial records and compliance responsibilities. Errors can quickly damage trust and create unnecessary administrative work.",
      "PSBA provides structured payroll assistance designed to improve accuracy, consistency and visibility over employee-related costs.",
    ],
    features: [
      {
        title: "Payroll processing",
        description:
          "Calculate employee earnings according to the agreed payroll period and employment information.",
      },
      {
        title: "Employee records",
        description:
          "Maintain organised payroll information for active employees and relevant changes.",
      },
      {
        title: "Deductions",
        description:
          "Calculate and record relevant statutory and authorised employee deductions.",
      },
      {
        title: "Payroll reporting",
        description:
          "Provide payroll summaries that support accounting and management reporting.",
      },
    ],
    included: [
      "Employee payroll setup",
      "Regular payroll calculations",
      "Leave and adjustment processing",
      "Deduction calculations",
      "Payroll summaries",
      "Accounting record integration",
    ],
    idealFor: [
      "Small businesses hiring their first employees",
      "Growing companies with recurring payroll",
      "Organisations replacing manual payroll processes",
      "Businesses outsourcing payroll administration",
    ],
  },
  {
    slug: "financial-reporting-advisory",
    number: "04",
    title: "Financial Reporting & Advisory",
    shortTitle: "Financial Advisory",
    icon: "reporting",
    description:
      "Turn financial information into practical insight for planning, performance management and better decisions.",
    seoTitle: "Financial Reporting & Advisory in Fiji | PSBA",
    seoDescription:
      "Financial statements, management reporting, cash-flow analysis, budgeting and business advisory support from PSBA.",
    overviewTitle: "Turn your financial data into business direction.",
    overview: [
      "Financial reports should do more than satisfy an obligation. They should help you understand performance, identify pressure points and make informed decisions.",
      "PSBA translates financial information into clear business insight through structured reporting, analysis and practical recommendations.",
    ],
    features: [
      {
        title: "Financial statements",
        description:
          "Prepare structured statements that clearly present your financial position and performance.",
      },
      {
        title: "Performance reporting",
        description:
          "Monitor revenue, expenditure, profitability and other important business indicators.",
      },
      {
        title: "Cash-flow analysis",
        description:
          "Understand cash movement and identify potential periods of financial pressure.",
      },
      {
        title: "Budgeting and forecasting",
        description:
          "Develop realistic plans and compare actual results against expectations.",
      },
    ],
    included: [
      "Financial statement preparation",
      "Management reporting",
      "Profitability analysis",
      "Financial health reviews",
      "Cash-flow forecasting",
      "Budget development",
    ],
    idealFor: [
      "Businesses preparing for growth",
      "Owners needing clearer financial visibility",
      "Organisations reporting to stakeholders",
      "Management teams making strategic decisions",
    ],
  },
  {
    slug: "outsourced-cfo",
    number: "05",
    title: "Outsourced CFO",
    shortTitle: "Outsourced CFO",
    icon: "cfo",
    description:
      "Senior financial leadership without the cost and commitment of employing a full-time internal CFO.",
    seoTitle: "Outsourced CFO Services in Fiji | PSBA",
    seoDescription:
      "Strategic financial planning, performance reporting, forecasting and outsourced CFO support for growing Fiji businesses.",
    overviewTitle: "Senior financial guidance when your business needs it.",
    overview: [
      "As a business grows, bookkeeping and annual statements may no longer provide enough information for complex decisions.",
      "An outsourced CFO relationship provides access to experienced financial thinking, structured reporting and ongoing strategic support without creating a full-time internal role.",
    ],
    features: [
      {
        title: "Financial strategy",
        description:
          "Connect financial planning with your wider business direction and long-term goals.",
      },
      {
        title: "Leadership reporting",
        description:
          "Provide decision-makers with timely, focused and understandable financial information.",
      },
      {
        title: "Growth planning",
        description:
          "Evaluate financial capacity, funding requirements and the effect of planned investments.",
      },
      {
        title: "Financial oversight",
        description:
          "Strengthen financial processes, accountability and management visibility.",
      },
    ],
    included: [
      "Strategic financial planning",
      "Management and board reporting",
      "Budget and forecast reviews",
      "Cash-flow oversight",
      "Business performance analysis",
      "Decision support",
    ],
    idealFor: [
      "Growing businesses facing complex decisions",
      "Companies without a full-time CFO",
      "Owner-managed businesses needing strategic support",
      "Organisations preparing for investment or expansion",
    ],
  },
  {
    slug: "business-startup-support",
    number: "06",
    title: "Business Startup Support",
    shortTitle: "Startup Support",
    icon: "startup",
    description:
      "Start with the right registration, financial structure, systems and practical guidance.",
    seoTitle: "Business Startup Support in Fiji | PSBA",
    seoDescription:
      "Business registration, tax registration, FRCS portal setup, business planning and startup financial support in Fiji.",
    overviewTitle: "Build your business on the right foundation.",
    overview: [
      "Starting a business involves more than registering a name. Your structure, financial systems and early decisions can affect compliance and future growth.",
      "PSBA helps entrepreneurs understand the setup process and establish practical systems for managing their finances from the beginning.",
    ],
    features: [
      {
        title: "Business registration",
        description:
          "Guidance through the relevant registration process and initial business requirements.",
      },
      {
        title: "Tax registration",
        description:
          "Support with relevant tax registrations and FRCS online portal setup.",
      },
      {
        title: "Business planning",
        description:
          "Develop a structured plan explaining the business model, market and financial direction.",
      },
      {
        title: "Financial setup",
        description:
          "Establish practical accounting, cash-flow and record-keeping processes.",
      },
    ],
    included: [
      "Business registration guidance",
      "Tax registration support",
      "FRCS portal setup assistance",
      "Business plan preparation",
      "Cash-flow projections",
      "Loan application support",
    ],
    idealFor: [
      "First-time business owners",
      "Entrepreneurs formalising an existing activity",
      "Startups preparing finance applications",
      "New businesses establishing financial systems",
    ],
  },
  {
    slug: "governance-internal-controls",
    number: "07",
    title: "Governance & Internal Controls",
    shortTitle: "Governance",
    icon: "governance",
    description:
      "Strengthen accountability, manage risk and protect your organisation through effective internal systems.",
    seoTitle: "Governance & Internal Control Services Fiji Outdoors | PSBA",
    seoDescription:
      "Internal control reviews, governance support, risk assessments and operational process improvement for Fiji organisations.",
    overviewTitle: "Protect your organisation through stronger systems.",
    overview: [
      "Internal controls help protect assets, improve the reliability of financial information and support compliance with organisational policies and laws.",
      "PSBA reviews existing processes, identifies areas of risk and helps management develop practical improvements suited to the organisation.",
    ],
    features: [
      {
        title: "Control reviews",
        description:
          "Assess whether key financial and operational controls are appropriately designed.",
      },
      {
        title: "Risk assessment",
        description:
          "Identify process weaknesses that could lead to errors, inefficiency or loss.",
      },
      {
        title: "Policy development",
        description:
          "Create clear policies and procedures that establish responsibility and consistency.",
      },
      {
        title: "Governance support",
        description:
          "Improve oversight, accountability and the quality of information available to decision-makers.",
      },
    ],
    included: [
      "Internal control assessments",
      "Process and risk reviews",
      "Policy and procedure development",
      "Governance framework support",
      "Internal audit support",
      "Improvement recommendations",
    ],
    idealFor: [
      "Growing organisations formalising their processes",
      "Businesses managing financial or operational risk",
      "Boards requiring stronger oversight",
      "Organisations preparing for external review",
    ],
  },
  {
    slug: "grants-sme-support",
    number: "08",
    title: "Grants & SME Support",
    shortTitle: "SME Support",
    icon: "grants",
    description:
      "Practical financial and planning support for SMEs seeking funding opportunities and sustainable growth.",
    seoTitle: "Grant & SME Business Support in Fiji | PSBA",
    seoDescription:
      "Grant applications, business planning, financial projections and advisory support for small and medium businesses in Fiji.",
    overviewTitle: "Prepare your business for opportunities and growth.",
    overview: [
      "Funding applications often require a clear business case, organised supporting information and credible financial projections.",
      "PSBA helps SMEs prepare their financial information, strengthen their plans and understand the responsibilities connected with funding.",
    ],
    features: [
      {
        title: "Opportunity assessment",
        description:
          "Review funding requirements and consider whether an opportunity is suitable for your business.",
      },
      {
        title: "Business planning",
        description:
          "Develop a clear explanation of your business, objectives and implementation approach.",
      },
      {
        title: "Financial projections",
        description:
          "Prepare forecasts that demonstrate expected income, expenditure and funding requirements.",
      },
      {
        title: "Application support",
        description:
          "Organise financial and business information required for a structured submission.",
      },
    ],
    included: [
      "Eligibility and requirement reviews",
      "Business plan assistance",
      "Cash-flow projections",
      "Financial statement preparation",
      "Application documentation support",
      "Post-funding reporting guidance",
    ],
    idealFor: [
      "SMEs exploring grant opportunities",
      "Businesses preparing loan applications",
      "Entrepreneurs requiring financial projections",
      "Organisations strengthening funding documentation",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}