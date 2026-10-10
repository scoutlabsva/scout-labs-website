import { routes } from "@/lib/content";

/**
 * "illustrative" examples describe workflows Scout Labs can build; they are
 * not past client work. When a real, client-approved project exists, add
 * it with kind "case-study" (and optionally an outcome). The page labels
 * each entry by kind, so the two can never be confused.
 */
export type ExampleKind = "illustrative" | "case-study";

export type AutomationExample = {
  id: string;
  kind: ExampleKind;
  industry: string;
  title: string;
  problem: string;
  manual: readonly string[];
  automated: readonly string[];
  benefits: readonly string[];
  considerations: readonly string[];
  /** Case studies only: a verified, client-approved result. */
  outcome?: string;
};

export const examplesPage = {
  path: routes.examples,
  meta: {
    title: "Automation Examples for Small Businesses",
    description:
      "Step-by-step automation examples for HVAC, landscaping, accounting, property management, professional services, and contracting businesses.",
  },
  breadcrumb: "Automation examples",
  hero: {
    eyebrow: "Automation Examples",
    title: "What automation can look like in a small business",
    lead: "Concrete examples of workflows Scout Labs can build for owner-led service businesses. Each one shows the manual process, what an automated version could look like, and what to think about before building it.",
  },
  notice:
    "These are illustrative examples based on common small-business workflows. They aren't descriptions of past client projects. Your version would be designed around your own tools and the way your business actually works.",
  kindLabels: {
    illustrative: "Illustrative example",
    "case-study": "Client case study",
  } satisfies Record<ExampleKind, string>,
  sectionLabels: {
    problem: "The problem",
    manual: "The manual workflow today",
    automated: "An automated workflow",
    benefits: "Potential benefits",
    considerations: "Things to consider",
    outcome: "Result",
  },
  cta: {
    headline: "Don't see your business here?",
    description:
      "Most small businesses have a few workflows like these. The free assessment is a quick way to find yours.",
  },
} as const;

export const automationExamples: readonly AutomationExample[] = [
  {
    id: "hvac",
    kind: "illustrative",
    industry: "HVAC company",
    title: "Turning service inquiries into organized service requests",
    problem:
      "Service requests arrive by phone, voicemail, web form, and email. In busy season, details get lost and urgent calls can wait behind routine ones.",
    manual: [
      "Office staff check voicemail and email throughout the day.",
      "Customer name, address, equipment, and issue are retyped into the scheduling system.",
      "Urgent requests are spotted only if someone happens to read them first.",
    ],
    automated: [
      "Web forms, emails, and voicemail transcripts flow into one intake queue.",
      "AI pulls out the customer, address, equipment, and problem, and flags likely emergencies such as no heat or no cooling.",
      "A draft service request is created in the scheduling system for the office to confirm.",
      "The customer gets an immediate confirmation that the request was received.",
    ],
    benefits: [
      "Faster response to urgent calls",
      "Less retyping for office staff",
      "Fewer requests lost during busy periods",
    ],
    considerations: [
      "Works best when the scheduling software offers an integration or API",
      "A person should confirm each request before it's scheduled",
      "Voicemail transcription accuracy varies with call quality",
    ],
  },
  {
    id: "landscaping",
    kind: "illustrative",
    industry: "Landscaping company",
    title: "Capturing estimate requests and following up automatically",
    problem:
      "Estimate requests pile up in spring. Some never get a reply, and estimates that are sent often go unanswered with no follow-up.",
    manual: [
      "Requests come in by phone, text, the website, and social media.",
      "The owner keeps a mental or paper list of who needs an estimate.",
      "Follow-up happens only when there's time.",
    ],
    automated: [
      "Every estimate request lands in one list with contact details, property address, and services requested.",
      "Each request moves through clear stages: new, visit scheduled, estimate sent, won or lost.",
      "If an estimate hasn't been answered after a set number of days, a friendly follow-up goes out automatically.",
      "A weekly summary shows open estimates and anything waiting on a reply.",
    ],
    benefits: [
      "Fewer forgotten estimate requests",
      "Consistent, timely follow-up",
      "A clear view of upcoming work",
    ],
    considerations: [
      "Follow-up messages should sound like the business, not a robot",
      "Text messages require the customer's consent",
      "A spreadsheet or low-cost CRM is often enough to start",
    ],
  },
  {
    id: "accounting",
    kind: "illustrative",
    industry: "Accounting firm",
    title: "Extracting and organizing information from client documents",
    problem:
      "In tax season, client documents arrive by email, upload, and paper scan. Staff spend hours renaming, sorting, and keying in information.",
    manual: [
      "Staff download attachments and rename files by hand.",
      "Documents are sorted into client folders one at a time.",
      "Key figures are typed into spreadsheets or tax software.",
    ],
    automated: [
      "Incoming documents are collected from email and uploads automatically.",
      "AI identifies each document's type (W-2, 1099, bank statement, receipt) and which client it belongs to.",
      "Files are renamed and filed consistently, and key fields are extracted for review.",
      "A checklist shows which documents each client still needs to send.",
    ],
    benefits: [
      "Less time spent sorting and renaming files",
      "Consistent file organization across clients",
      "Easier tracking of missing documents",
    ],
    considerations: [
      "Sensitive financial data calls for careful tool selection and access controls",
      "Extracted figures should be reviewed before they're used",
      "Must fit with the firm's existing practice management software",
    ],
  },
  {
    id: "property-management",
    kind: "illustrative",
    industry: "Property management company",
    title: "Categorizing and routing maintenance requests",
    problem:
      "Tenant maintenance requests come in through calls, texts, emails, and portals, with inconsistent detail and urgency.",
    manual: [
      "A property manager reads each request and judges how urgent it is.",
      "Details are passed to the right vendor or technician by phone or email.",
      "Tenants call back to ask for status updates.",
    ],
    automated: [
      "Requests from every channel are collected in one place.",
      "AI categorizes each request (plumbing, electrical, appliance, HVAC), estimates urgency, and asks the tenant for missing details such as photos or access times.",
      "Routine requests are routed to the right vendor; possible emergencies alert a manager immediately.",
      "Tenants receive automatic status updates.",
    ],
    benefits: [
      "Faster handling of urgent issues",
      "Fewer status-check calls",
      "A clear record of every request, by property",
    ],
    considerations: [
      "Emergency rules should be conservative: when in doubt, alert a person",
      "Vendor routing rules need to reflect real vendor relationships",
      "Integration depends on the property management platform in use",
    ],
  },
  {
    id: "professional-services",
    kind: "illustrative",
    industry: "Professional services firm",
    title: "Automating recurring reports and administrative tasks",
    problem:
      "Staff spend the start of every week or month assembling the same reports and status updates.",
    manual: [
      "Numbers are exported from several systems.",
      "Data is pasted into a spreadsheet and formatted.",
      "A summary email is written and sent to partners or clients.",
    ],
    automated: [
      "Data is pulled from the source systems on a schedule.",
      "The report is assembled in the existing format.",
      "An AI-drafted summary highlights notable changes for a person to review and send.",
    ],
    benefits: [
      "Reports ready when the week starts",
      "Fewer copy-and-paste errors",
      "Staff time redirected to client work",
    ],
    considerations: [
      "Requires access to data exports or APIs from the source systems",
      "Report definitions should be agreed on before automating",
      "AI-drafted summaries should be reviewed before sending",
    ],
  },
  {
    id: "contractor",
    kind: "illustrative",
    industry: "General contractor",
    title: "Tracking estimates and follow-up activity",
    problem:
      "Bids and estimates are spread across email, spreadsheets, and notebooks, so it's hard to know what's still pending.",
    manual: [
      "Estimates are written and sent from email.",
      "Status is tracked in a spreadsheet, when someone remembers to update it.",
      "Follow-up calls depend on the owner's memory.",
    ],
    automated: [
      "Each estimate sent is logged automatically with the customer, amount, and date.",
      "Follow-up reminders are created at set intervals.",
      "When an estimate is accepted, a job record is created with the details already filled in.",
      "A simple dashboard shows open bids and what needs attention this week.",
    ],
    benefits: [
      "No forgotten bids",
      "Better visibility into upcoming work",
      "Less double entry when a job starts",
    ],
    considerations: [
      "Works best with consistent estimate templates",
      "The owner decides which follow-ups are automated and which stay personal",
      "Can start with tools already in use, like email and spreadsheets",
    ],
  },
];
