import { routes } from "@/lib/content";

export const assessmentPage = {
  path: routes.assessment,
  meta: {
    title: "Free Business Automation Assessment",
    description:
      "Find out where your business could save time and reduce repetitive work. A free, no-obligation automation assessment from Scout Labs in Lynchburg, VA.",
  },
  breadcrumb: "Free automation assessment",
  hero: {
    eyebrow: "Free Assessment",
    title: "Free business automation opportunity assessment",
    lead: "Discover where your business could save time, reduce repetitive work, and improve efficiency. There's no cost and no obligation.",
  },
  form: {
    eyebrow: "Start Here",
    headline: "Tell us about your business",
    description:
      "A few quick questions help us come prepared. It takes about two minutes.",
    identifiesHeading: "What we'll look for",
    identifies: [
      "Repetitive workflows that eat up time each week",
      "Manual administrative tasks that could be handled automatically",
      "Specific automation opportunities, and which are worth pursuing",
      "How your current business systems could work together",
      "Practical next steps, sized to your business",
    ],
  },
  nextSteps: {
    eyebrow: "What Happens Next",
    headline: "What to expect after you submit",
    steps: [
      {
        title: "We review it personally",
        description:
          "A real person reads every request. We usually respond within one business day.",
      },
      {
        title: "A short conversation",
        description:
          "If it makes sense, we'll set up a conversation by phone, by video, or in person around Lynchburg to understand how your business runs today.",
      },
      {
        title: "An honest initial take",
        description:
          "You'll hear where automation could help, roughly what it would involve, and where it probably isn't worth it. What you do next is up to you.",
      },
    ],
    note: "This isn't a high-pressure sales pitch or an exhaustive audit. It's a focused conversation to find out whether there's an opportunity worth pursuing. If there isn't, we'll tell you.",
  },
  faq: {
    eyebrow: "Questions",
    headline: "About the assessment",
    items: [
      {
        question: "Is the assessment really free?",
        answer:
          "Yes. There's no cost and no obligation. If we find a project worth doing, we'll explain what it would involve, and the decision is yours.",
      },
      {
        question: "How much time does it take?",
        answer:
          "The form takes about two minutes. If we follow up with a conversation, it's usually under an hour.",
      },
      {
        question: "Do I need to prepare anything?",
        answer:
          "No. It helps to think about which tasks eat up the most time each week and which software tools you already use, but that's it.",
      },
      {
        question: "Do you only work with businesses near Lynchburg?",
        answer:
          "No. We meet in person with businesses around Lynchburg, Forest, Bedford, Amherst, and Campbell County, and work remotely with businesses anywhere in the U.S.",
      },
      {
        question: "What happens to the information I share?",
        answer:
          "It's used only to respond to your request. We don't sell it or share it for marketing. See our privacy policy for details.",
      },
    ],
  },
} as const;
