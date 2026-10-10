import { routes } from "@/lib/content";

export const lynchburgPage = {
  path: routes.lynchburg,
  meta: {
    title: "AI Consulting & Business Automation in Lynchburg, VA",
    description:
      "Local AI consulting and business automation for Lynchburg-area small businesses. In-person help in Lynchburg, Forest, Bedford, Amherst, and Campbell County.",
  },
  breadcrumb: "AI consulting in Lynchburg, VA",
  hero: {
    eyebrow: "Lynchburg, Virginia",
    title: "AI consulting and business automation for Lynchburg businesses",
    lead: "Scout Labs helps owner-led businesses in Lynchburg and across Central Virginia spend less time on repetitive administrative work through practical automation, well-chosen AI tools, and better-connected systems. We're local, we meet in person, and we explain everything in plain language.",
    secondaryCta: { label: "See how it works", href: "#how-it-works" },
  },
  problems: {
    eyebrow: "Common Problems",
    headline: "Is the paperwork outgrowing the business?",
    description:
      "These are common problems in owner-led service businesses. If a few sound familiar, there's likely something worth automating.",
    items: [
      "Your team spends hours each week retyping information from emails, forms, and phone calls.",
      "Estimate requests and customer questions wait too long for a response.",
      "Follow-ups depend on someone remembering to make them.",
      "Your scheduling, invoicing, and customer records don't talk to each other.",
      "You'd like to grow, but hiring someone just to keep up with admin work doesn't make sense.",
      "You've heard AI could help, but you aren't sure where it fits, or whom to trust.",
    ],
  },
  solutions: {
    eyebrow: "What We Do",
    headline: "Practical AI and automation, not a science project.",
    description:
      "Most of what we build is straightforward: it takes a routine task off someone's plate and does it the same way every time.",
    items: [
      {
        title: "Automated customer intake",
        description:
          "Inquiries from your website, email, and voicemail land in one organized list with the details already filled in.",
      },
      {
        title: "Follow-up that doesn't rely on memory",
        description:
          "Reminders and check-ins go out on schedule, and you can see at a glance what's still waiting on a reply.",
      },
      {
        title: "Document processing",
        description:
          "AI reads invoices, forms, and PDFs, pulls out what you need, and files it, flagging anything uncertain for a person to check.",
      },
      {
        title: "Connected systems",
        description:
          "The tools you already pay for share information, so nothing has to be entered twice.",
      },
      {
        title: "Reporting on autopilot",
        description:
          "Weekly and monthly numbers assemble themselves from your existing systems.",
      },
      {
        title: "AI assistance where it fits",
        description:
          "Drafting replies, summarizing requests, and answering routine questions, always with a person in control of what goes out.",
      },
    ],
    link: { label: "More about business process automation", href: routes.automation },
  },
  workflows: {
    eyebrow: "Example Workflows",
    headline: "What this looks like in practice",
    description:
      "A few illustrative examples of the workflows we build for local service businesses. They aren't client case studies; yours would be designed around your own tools and process.",
    items: [
      {
        title: "Service calls become organized work orders",
        description:
          "For an HVAC or plumbing company: web forms, emails, and voicemails become draft service requests, with likely emergencies flagged first.",
        href: `${routes.examples}#hvac`,
      },
      {
        title: "Every estimate gets a follow-up",
        description:
          "For a landscaping or contracting business: estimate requests are tracked in one place, and unanswered estimates get a friendly, automatic follow-up.",
        href: `${routes.examples}#landscaping`,
      },
      {
        title: "Client documents sort themselves",
        description:
          "For an accounting or bookkeeping office: incoming documents are identified, renamed, filed by client, and checked against what's still missing.",
        href: `${routes.examples}#accounting`,
      },
    ],
    link: { label: "See all automation examples", href: routes.examples },
  },
  industries: {
    eyebrow: "Who We Help",
    headline: "Built for owner-led service businesses",
    description:
      "If your business runs on phone calls, email, spreadsheets, and paperwork, there's probably something worth automating. Good fits include:",
    items: [
      "HVAC, plumbing, and electrical",
      "Contractors and builders",
      "Landscaping and lawn care",
      "Property management",
      "Accounting and bookkeeping",
      "Insurance and financial offices",
      "Law and professional services",
      "Cleaning and home services",
    ],
  },
  serviceArea: {
    eyebrow: "Service Area",
    headline: "Serving Lynchburg and Central Virginia",
    paragraphs: [
      "Scout Labs is based in Forest and works with businesses throughout the Lynchburg region, including Lynchburg, Forest, Bedford, Amherst, and Campbell County.",
      "We're happy to meet in person at your office, shop, or job site, or over coffee. Seeing how the work actually happens is often the fastest way to spot what's worth improving. Phone and video work just as well if that's easier.",
      "Outside Central Virginia? We work remotely with small businesses anywhere in the U.S.",
    ],
    founder: {
      heading: "Who you'll work with",
      body: "Scout Labs was founded by Michael Coulter, who spent a decade building software and leading products at a Fortune 100 company. You'll work with him directly, from the first conversation through implementation.",
    },
  },
  faq: {
    eyebrow: "Questions",
    headline: "Frequently asked questions",
    items: [
      {
        question: "Do you meet with clients in person?",
        answer:
          "Yes. We meet with business owners across Lynchburg, Forest, Bedford, Amherst, and Campbell County, at your place of business or wherever is convenient. Phone and video calls are always an option too.",
      },
      {
        question: "Do I need to understand AI to work with you?",
        answer:
          "No. You know your business; we handle the technology. We explain recommendations in plain language and focus on the problem being solved, not the tools involved.",
      },
      {
        question: "What does it cost?",
        answer:
          "It depends on what's worth building. The initial assessment is free. If there's a project worth doing, you'll get a clear proposal with costs and scope before any work begins. Many projects start small.",
      },
      {
        question: "Will we have to replace our current software?",
        answer:
          "Usually not. We start with the tools you already use and connect or extend them. We only recommend new software when it clearly earns its cost.",
      },
      {
        question: "How do you handle our business data?",
        answer:
          "Carefully. We use your existing systems where possible, explain where information goes before anything is built, and avoid sending sensitive information to tools that don't need it.",
      },
      {
        question: "Do you work with businesses outside the Lynchburg area?",
        answer:
          "Yes. We're rooted in Central Virginia but work remotely with small businesses across the U.S.",
      },
    ],
  },
  cta: {
    headline: "Let's find the busywork worth eliminating.",
    description:
      "Start with a free, no-obligation automation assessment. We'll talk through how your business runs and where automation could realistically help.",
  },
} as const;
