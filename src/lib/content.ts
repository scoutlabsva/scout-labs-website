export const site = {
  name: "Scout Labs",
  tagline: "Operations consulting for small businesses in Central Virginia",
  email: "hello@scoutlabs.com",
} as const;

export const navLinks = [
  { label: "Where We Start", href: "#problems" },
  { label: "What We Do", href: "#services" },
  { label: "How We Work", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Practical Operations & AI",
  headlineLines: [
    "Everyone is talking about AI.",
    "Few can tell you",
    "where to start.",
  ] as const,
  subhead:
    "Scout Labs helps owner-led service businesses find the practical starting point. We examine how work gets done, simplify what has become unnecessarily complicated, and use automation or AI only where it creates real value.",
  principle: "Better process first. Automation where it helps. AI only when it earns its place.",
  primaryCta: { label: "Get a free assessment", href: "#contact" },
  secondaryCta: { label: "See how we work", href: "#process" },
} as const;

export const hiddenWork = {
  eyebrow: "The Hidden Work",
  headline: "The work hiding inside the work.",
  paragraphs: [
    "As a business grows, extra work accumulates between the real work—information entered twice, completed jobs checked again, invoices reconstructed from emails, and decisions held together by memory.",
    "It rarely means the team is doing something wrong. More often, the process and tools have not kept pace with the business.",
    "Scout Labs finds that hidden work, removes what does not need to be there, and clarifies what should happen next.",
  ] as const,
  closing:
    "That may lead to a better process, straightforward automation, or AI. We recommend the simplest solution that earns its place.",
} as const;

export const outcomes = {
  eyebrow: "What Changes",
  headline: "What you should notice — not what we install.",
  items: [
    {
      label: "Less manual work",
      description:
        "Fewer hours spent re-typing, re-checking, and chasing down information by hand.",
    },
    {
      label: "Fewer costly mistakes",
      description:
        "Fewer things missed or dropped between people, tools, and follow-ups.",
    },
    {
      label: "Faster customer response",
      description:
        "Customers get answers and updates without waiting on a bottleneck.",
    },
    {
      label: "Healthier margins",
      description:
        "Time and money that were leaking out through inefficiency stay in the business.",
    },
  ],
} as const;

export const problems = {
  eyebrow: "Where We Start",
  headline: "Most operational problems aren't technology problems.",
  description:
    "Before we recommend anything — a process change, automation, or AI — we look at where time, money, and attention are actually going in your business.",
  items: [
    {
      title: "Repetitive work that eats hours",
      description:
        "Re-entering the same information across paper, email, and spreadsheets adds up to real money every week — and it's rarely anyone's fault. It's the process.",
    },
    {
      title: "Work that falls through the cracks",
      description:
        "Jobs, orders, and follow-ups pass between people with no clear handoff, so things get missed, delayed, or done twice.",
    },
    {
      title: "No clear place to start",
      description:
        "Every vendor has something to sell you. We help you figure out what's actually worth fixing first — before you spend a dollar.",
    },
  ],
} as const;

export const services = {
  eyebrow: "What We Do",
  headline: "We fix the workflow first. Technology comes second.",
  description:
    "Most of the time, the biggest improvement isn't a new tool — it's a clearer process. We only bring in automation or AI once we know it will pay off.",
  items: [
    {
      title: "Process improvement",
      description:
        "We map how work actually moves through your business and remove the steps that don't need to exist.",
    },
    {
      title: "Automation",
      description:
        "We connect the tools you already use so information moves on its own — quotes, invoicing, scheduling, follow-ups, reporting.",
    },
    {
      title: "AI, only when it pays off",
      description:
        "For specific, well-defined tasks — drafting, document handling, answering routine questions — we bring in AI carefully, and only when it creates real, measurable value.",
    },
  ],
} as const;

export const process = {
  eyebrow: "How We Work",
  headline: "A calm process, not a big transformation.",
  description:
    "No months-long discovery phases, no pressure to buy something new. We find the smallest change with the biggest payoff, then build from there.",
  steps: [
    {
      title: "Understand",
      description:
        "We spend time learning how your business runs today — where time goes, where things break down, and what's already working fine and should be left alone.",
    },
    {
      title: "Recommend",
      description:
        "We tell you plainly what's worth fixing and what isn't. If the honest answer is \"don't spend money on this,\" we'll say so.",
    },
    {
      title: "Implement",
      description:
        "We build the specific fix, test it against how your team actually works, and make sure you can run it without us.",
    },
  ],
} as const;

export const contact = {
  eyebrow: "Contact",
  headline: "Tell us how your business runs today.",
  description:
    "We'll ask about your day-to-day operations before we talk about any technology. If there's a practical improvement to make, we'll tell you plainly — and if there isn't, we'll tell you that too.",
  cta: { label: "Get a free assessment", href: "mailto:hello@scoutlabs.com" },
  note: "We're based in Central Virginia and respond personally, usually within a day.",
} as const;

export const footer = {
  copyright: `© ${new Date().getFullYear()} Scout Labs. Serving Lynchburg, Forest, Bedford, and Central Virginia.`,
} as const;
