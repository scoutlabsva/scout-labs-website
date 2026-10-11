// Shared site-wide copy and homepage copy. Copy for the other marketing
// pages lives alongside it in src/lib/pages/, one file per page.

export const site = {
  name: "Scout Labs",
  tagline: "Practical AI and automation consulting for small businesses",
  email: "hello@getscoutlabs.com",
  // Display and dialable forms of the same business line. Keep this
  // identical to the number on the Google Business Profile.
  phone: "(540) 783-7004",
  phoneE164: "+15407837004",
  url: "https://getscoutlabs.com",
  // Service-area business: the city is public, the street address is not.
  locality: "Forest",
  region: "VA",
  serviceAreas: ["Lynchburg", "Forest", "Bedford", "Amherst", "Campbell County"],
  founder: "Michael Coulter",
} as const;

export const routes = {
  home: "/",
  lynchburg: "/ai-consulting-lynchburg-va",
  automation: "/business-process-automation",
  examples: "/automation-examples",
  assessment: "/assessment",
  guides: "/guides",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export const primaryCtaLabel = "Get a free automation assessment";

export const share = {
  label: "Share Scout Labs",
  title: "Scout Labs: Practical AI and automation for small businesses",
  text: "Scout Labs helps small businesses in Lynchburg and across Central Virginia cut repetitive work with practical AI and automation.",
} as const;

// Root-relative ("/#section") rather than bare "#section": these links
// render on every page via the shared Header/Footer. A bare "#section" on a
// page without that section just appends the hash and goes nowhere.
export const navLinks = [
  { label: "Services", href: routes.automation },
  { label: "Examples", href: routes.examples },
  { label: "Lynchburg, VA", href: routes.lynchburg },
  { label: "About", href: "/#about" },
] as const;

export const footerLinks = [
  { label: "AI consulting in Lynchburg, VA", href: routes.lynchburg },
  { label: "Business process automation", href: routes.automation },
  { label: "Automation examples", href: routes.examples },
  { label: "Free automation assessment", href: routes.assessment },
  { label: "Guides", href: routes.guides },
  { label: "About Scout Labs", href: "/#about" },
] as const;

export const headerCta = { label: "Get a free assessment", href: routes.assessment } as const;

export const hero = {
  eyebrow: "AI & automation consulting · Central Virginia",
  headlineLines: [
    "Practical AI for Lynchburg businesses.",
    "We'll show you where to start.",
  ] as const,
  subhead:
    "Scout Labs helps businesses in Lynchburg, Forest, Bedford, and surrounding communities eliminate repetitive work, streamline operations, and make better use of AI. We work directly with owners to find the opportunities worth pursuing, then build them.",
  principle: "Increase sales. Reduce operating costs. Serve customers better.",
  // The homepage has the assessment form inline, so its hero CTA scrolls
  // there rather than leaving the page.
  primaryCta: { label: primaryCtaLabel, href: "/#contact" },
  secondaryCta: { label: "See what we can automate", href: routes.examples },
} as const;

export const problems = {
  eyebrow: "Sound familiar?",
  headline: "The work behind the work is taking over.",
  description:
    "Most small businesses don't need a big technology project. They need the same handful of time-consuming tasks to stop eating the week. These are the kinds of problems we solve.",
  items: [
    {
      problem: "Customer inquiries that someone has to retype",
      solution:
        "Requests from your website, email, and voicemail land in one organized list, with the details already filled in.",
    },
    {
      problem: "Quotes and estimates buried in admin work",
      solution:
        "Customer and job details flow into your estimate template, so you aren't copying the same information again.",
    },
    {
      problem: "Follow-ups that slip through the cracks",
      solution:
        "Open requests are tracked, and reminders go out on schedule instead of depending on someone's memory.",
    },
    {
      problem: "Invoices and paperwork processed by hand",
      solution:
        "AI reads incoming documents, pulls out the information you need, and files it, flagging anything uncertain for review.",
    },
    {
      problem: "Reports that take hours to assemble",
      solution:
        "Recurring reports build themselves from your existing systems and arrive when you need them.",
    },
    {
      problem: "Information copied between systems",
      solution:
        "The tools you already pay for are connected, so information entered once shows up everywhere it's needed.",
    },
  ],
  link: { label: "Explore automation examples", href: routes.examples },
} as const;

export const whatWeDo = {
  eyebrow: "What We Do",
  headline: "Turn AI's potential into a practical advantage.",
  items: [
    {
      title: "Increase sales",
      description: "Improve lead response, follow-up, quoting, and customer communication.",
    },
    {
      title: "Reduce operating costs",
      description: "Automate repetitive work and connect information that currently moves by hand.",
    },
    {
      title: "Serve customers better",
      description: "Use AI and automation to provide faster answers, clearer updates, and more reliable service.",
    },
  ],
  closing:
    "Sometimes the right answer is AI. Sometimes it is automation, existing software, or a stronger process. We help you determine what is worth pursuing.",
  link: { label: "How business process automation works", href: routes.automation },
} as const;

// Shared by the homepage, the Lynchburg page, and the automation page, so
// the process is described the same way everywhere.
export const processSteps = {
  eyebrow: "How It Works",
  headline: "A clear, low-pressure process.",
  steps: [
    {
      title: "Talk through your business",
      description:
        "We start with how work actually moves through your business: where the time goes, what gets dropped, and which tools you already use. In person around Lynchburg, or by phone or video.",
    },
    {
      title: "Get a clear recommendation",
      description:
        "We identify the few opportunities most worth pursuing, explain the trade-offs in plain language, and tell you what each would take. Sometimes the answer is a simpler process, not new technology.",
    },
    {
      title: "Build, test, and hand off",
      description:
        "We build on your existing tools where possible, test against real work, and make sure your team knows how it runs. We stay available to adjust as your business changes.",
    },
  ],
} as const;

export const localPresence = {
  eyebrow: "Local and In Person",
  headline: "Based in Forest. Working with businesses across Central Virginia.",
  description:
    "Scout Labs works directly with business owners in Lynchburg, Forest, Bedford, Amherst, and Campbell County. We're glad to meet at your office, shop, or job site, because seeing how the work actually happens is often the fastest way to find what's worth improving.",
  remote:
    "Outside Central Virginia? We also work with businesses anywhere in the U.S. by phone and video.",
  link: { label: "AI consulting in Lynchburg, VA", href: routes.lynchburg },
} as const;

export const whyScoutLabs = {
  eyebrow: "About Scout Labs",
  headline: "Enterprise experience. Small-business practicality.",
  description:
    "Before founding Scout Labs, Michael Coulter spent a decade building software and leading products at a Fortune 100 company. He now helps growing, owner-led businesses put AI and automation to work, without enterprise-sized teams or budgets.",
  principles: [
    {
      title: "Plain language",
      description: "No jargon. You'll understand what we recommend and why.",
    },
    {
      title: "Honest recommendations",
      description: "If something isn't worth automating, we'll say so.",
    },
    {
      title: "Start small",
      description: "Begin with one well-chosen improvement, using the tools you already have.",
    },
  ],
} as const;

export const contact = {
  eyebrow: "Free Assessment",
  headline: "Where could automation save your business time?",
  description:
    "Tell us what you want to improve. We'll help you understand what is possible and identify a practical next step. There's no cost and no obligation.",
  note: "We respond personally, usually within one business day.",
} as const;

export const ctaBand = {
  headline: "Find out what's worth automating in your business.",
  description:
    "The free assessment is a short, no-obligation conversation about where your time goes and what could realistically be improved.",
  secondaryLabel: "Explore automation examples",
} as const;

export const assessmentForm = {
  step1: {
    heading: "About the opportunity",
    improveFocus: {
      question: "What would you most like to improve?",
      options: [
        { value: "repetitive_admin", label: "Reduce repetitive administrative work" },
        { value: "handoffs_followup", label: "Improve handoffs and follow-up" },
        { value: "connect_tools", label: "Connect existing tools" },
        { value: "specific_ai_use", label: "Explore a specific use of AI" },
        { value: "understand_options", label: "Understand the available options" },
        { value: "something_else", label: "Something else" },
      ],
    },
    businessArea: {
      question: "Which area of the business is most involved?",
      options: [
        { value: "customer_intake", label: "Customer intake" },
        { value: "scheduling", label: "Scheduling" },
        { value: "service_delivery", label: "Service delivery" },
        { value: "job_project_management", label: "Job or project management" },
        { value: "invoicing_payment", label: "Invoicing and payment" },
        { value: "customer_communication", label: "Customer communication" },
        { value: "reporting", label: "Reporting" },
        { value: "another_area", label: "Another area" },
      ],
    },
    teamSize: {
      question: "Approximately how large is the team?",
      options: [
        { value: "just_me", label: "Just me" },
        { value: "2_5", label: "2–5" },
        { value: "6_15", label: "6–15" },
        { value: "16_50", label: "16–50" },
        { value: "more_than_50", label: "More than 50" },
        { value: "prefer_not_to_say", label: "Prefer not to say" },
      ],
    },
    frustration: {
      question: "If you could remove one recurring frustration from the business, what would it be?",
      helper: "Optional.",
    },
  },
  step2: {
    heading: "Contact details",
    preferredNextStep: {
      question: "Preferred next step",
      options: [
        { value: "initial_recommendation", label: "Send me an initial recommendation" },
        { value: "schedule_conversation", label: "Schedule a conversation" },
        { value: "still_exploring", label: "I'm still exploring" },
      ],
    },
    additionalContext: {
      question: "Is there anything else you'd like to share or ask?",
      helper: "Optional. Include any additional context or questions that would be helpful before we speak.",
      placeholder: "Anything else you'd like us to know?",
    },
    smsConsent: {
      label:
        "I agree to receive text messages from Scout Labs about my assessment request. Message frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP for help.",
      phoneRequiredError: "Add a phone number above to receive texts, or uncheck this box.",
    },
  },
  nextLabel: "Next",
  backLabel: "Back",
  submitLabel: "Send assessment request",
  submittingLabel: "Sending…",
  reassurance: "Free and no obligation. Takes about two minutes.",
  successHeading: "Thanks, that's on its way.",
  successBody: "We've received your assessment request and respond personally, usually within one business day.",
  errorBody: "Something went wrong sending this. Please try again, or email us directly at hello@getscoutlabs.com.",
} as const;

export const footer = {
  description:
    "Practical AI and automation consulting for small businesses. Based in Forest, Virginia, serving Lynchburg and Central Virginia in person and clients nationwide remotely.",
  copyright: `© ${new Date().getFullYear()} Scout Labs. Forest, Virginia.`,
} as const;

export const privacy = {
  note:
    "This site uses anonymous, first-party analytics (no cookies, no third-party trackers) to understand which topics and services are useful. Contact information is collected only if you submit the assessment form voluntarily, and general analytics events never include form contents or personal identifiers. If you arrive from a marketing link, that source may be attached to an assessment request you submit.",
} as const;
