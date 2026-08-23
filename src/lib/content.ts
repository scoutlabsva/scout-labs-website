export const site = {
  name: "Scout Labs",
  tagline: "Operations consulting for owner-led service businesses",
  email: "hello@getscoutlabs.com",
  url: "https://getscoutlabs.com",
} as const;

export const share = {
  label: "Share Scout Labs",
  title: "Scout Labs — Practical AI for Growing Service Businesses",
  text: "Scout Labs helps growing, owner-led businesses use AI and automation to increase sales, reduce operating costs, and serve customers better.",
} as const;

export const navLinks = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Why Scout Labs", href: "#why-scout-labs" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Practical AI & Automation",
  headlineLines: [
    "Powerful AI is within reach.",
    "The challenge is knowing where to start.",
  ] as const,
  subhead:
    "Capabilities once reserved for large companies are now accessible to growing businesses. Scout Labs helps you choose and implement the right AI, automation, or software opportunity.",
  principle: "Increase sales. Reduce operating costs. Serve customers better.",
  primaryCta: { label: "Get a free assessment", href: "#contact" },
  secondaryCta: { label: "See what's possible", href: "#what-we-do" },
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
} as const;

export const whyScoutLabs = {
  eyebrow: "Why Scout Labs",
  headline: "Enterprise experience. Small-business practicality.",
  description:
    "Before founding Scout Labs, Michael Coulter spent a decade building software and leading products at a Fortune 100 company. He now helps growing, owner-led businesses put AI and automation to work—without enterprise-sized teams or budgets.",
} as const;

export const contact = {
  eyebrow: "Free Assessment",
  headline: "Where could AI create value in your business?",
  description:
    "Tell us what you want to improve. We'll help you understand what is possible and identify a practical next step.",
  note: "We respond personally, usually within one business day.",
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
  },
  nextLabel: "Next",
  backLabel: "Back",
  submitLabel: "Send assessment request",
  submittingLabel: "Sending…",
  successHeading: "Thanks — that's on its way.",
  successBody: "We've received your assessment request and respond personally, usually within one business day.",
  errorBody: "Something went wrong sending this. Please try again, or email us directly at hello@getscoutlabs.com.",
} as const;

export const footer = {
  copyright: `© ${new Date().getFullYear()} Scout Labs. Serving owner-led service businesses nationwide.`,
} as const;

export const privacy = {
  note:
    "This site uses anonymous, first-party analytics — no cookies, no third-party trackers — to understand which topics and services are useful. Contact information is collected only if you submit the assessment form voluntarily, and general analytics events never include form contents or personal identifiers. If you arrive from a marketing link, that source may be attached to an assessment request you submit.",
} as const;
