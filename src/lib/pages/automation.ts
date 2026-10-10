import { routes } from "@/lib/content";

export const automationPage = {
  path: routes.automation,
  meta: {
    title: "Business Process Automation for Small Businesses",
    description:
      "Automate customer intake, document processing, follow-up, reporting, and duplicate data entry. Practical business process automation from Scout Labs.",
  },
  breadcrumb: "Business process automation",
  hero: {
    eyebrow: "Business Process Automation",
    title: "Automate the repetitive work that slows your business down",
    lead: "Business process automation means letting software handle the routine, rule-based steps your team repeats every day: capturing information, moving it between systems, sending reminders, and assembling reports. That frees people for the work that actually needs them.",
    secondaryCta: { label: "Explore automation examples", href: routes.examples },
  },
  explainer: {
    eyebrow: "The Basics",
    headline: "What automation is, and what it isn't",
    paragraphs: [
      "Most small businesses already have the pieces: a website form, an email inbox, a scheduling tool, accounting software, and a few spreadsheets. The time goes into moving information between them by hand. Automation connects those steps so they happen on their own.",
      "AI widens what can be automated. It can read an email or a scanned document, understand what it's asking for, and pull out the details. That work used to require a person.",
      "Not everything should be automated. Work that depends on judgment, relationships, or rare exceptions usually belongs with people. Part of our job is telling you which is which.",
    ],
  },
  areas: {
    eyebrow: "Where It Helps",
    headline: "Five places automation pays off for small businesses",
    items: [
      {
        id: "customer-intake",
        title: "Customer intake",
        problem:
          "Inquiries arrive through your website, email, phone, and social media. Someone has to read each one, retype the details, and decide who handles it.",
        solution:
          "New inquiries are captured automatically, key details are pulled out and organized, and each request is routed to the right person or added to your job list.",
        benefit: "Faster responses, fewer lost leads, and less time spent copying information.",
      },
      {
        id: "document-processing",
        title: "Document processing",
        problem:
          "Invoices, applications, intake forms, and receipts are opened, read, and keyed in by hand.",
        solution:
          "AI reads incoming documents, extracts the fields you care about, and files the information where it belongs, flagging anything it isn't sure about for a person to review.",
        benefit: "Less data entry, fewer typos, and documents that don't sit in a pile waiting.",
      },
      {
        id: "customer-follow-up",
        title: "Customer follow-up",
        problem:
          "Estimates go unanswered, reminders get forgotten, and no one is sure which customers are waiting on a reply.",
        solution:
          "Each open request is tracked, and follow-ups are scheduled automatically: a reminder after an estimate, a check-in after a job, a nudge when something has waited too long.",
        benefit: "Fewer opportunities slip through the cracks, and customers hear from you consistently.",
      },
      {
        id: "reporting",
        title: "Reporting",
        problem:
          "Someone spends hours every week or month pulling numbers from several systems into a spreadsheet.",
        solution:
          "Recurring reports are assembled automatically from the source data and delivered on schedule, in the format you already use.",
        benefit: "Current numbers without the manual effort, and fewer copy-and-paste errors.",
      },
      {
        id: "system-integration",
        title: "System integration",
        problem:
          "Your CRM, scheduling tool, accounting software, and spreadsheets each hold part of the picture, so the same information gets entered more than once.",
        solution:
          "We connect the tools you already use so information entered in one place flows to the others.",
        benefit: "One version of the truth, less duplicate entry, and fewer mismatches between systems.",
      },
    ],
  },
  approach: {
    eyebrow: "Our Approach",
    headline: "Practical over impressive",
    items: [
      {
        title: "Start with the problem",
        description: "We begin with what's costing you time, not with a tool we want to sell.",
      },
      {
        title: "Use what you already have",
        description:
          "We build on your existing software wherever we can, and suggest new tools only when they clearly earn their cost.",
      },
      {
        title: "Start small",
        description:
          "One well-chosen automation is usually a better first step than a large project, and it shows results sooner.",
      },
      {
        title: "Keep people in the loop",
        description:
          "Automations that touch customers or money include review steps and a clear way to override them.",
      },
      {
        title: "Leave you in control",
        description:
          "We document what we build and make sure your team understands how it works.",
      },
    ],
  },
  faq: {
    eyebrow: "Questions",
    headline: "Common questions about automation",
    items: [
      {
        question: "What does business process automation cost?",
        answer:
          "It depends on the scope. Many useful automations are small, focused projects. After the free assessment, you'll get a clear proposal with costs before any work begins, so there are no surprises.",
      },
      {
        question: "Which processes should we automate first?",
        answer:
          "The best candidates happen often, follow the same steps each time, and frustrate the people doing them. Work that happens many times a week, like intake, data entry, and follow-up reminders, is usually a good place to start.",
      },
      {
        question: "Do we need to replace our current software?",
        answer:
          "Usually not. Most of what we build connects or extends the tools you already use.",
      },
      {
        question: "Does every automation use AI?",
        answer:
          "No. Many of the most valuable automations are simple rules. We use AI when it handles something rules can't, like reading free-form emails or varied documents.",
      },
      {
        question: "How long does it take?",
        answer:
          "Small, focused automations can often be running within a few weeks. Larger integrations take longer. You'll get a realistic timeline in the proposal before anything starts.",
      },
      {
        question: "What happens if an automation breaks?",
        answer:
          "We design automations to fail safely, with alerts and a fallback to the manual process, and we show your team what to do. Ongoing support is available if you want it.",
      },
    ],
  },
  cta: {
    headline: "Not sure where to start?",
    description:
      "The free assessment helps you identify which of your workflows are worth automating and which aren't.",
  },
} as const;
