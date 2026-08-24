import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/content";

const title = "Privacy Policy";
const description = `Privacy Policy for ${site.name}, including how we handle information collected through our website and SMS text messaging program.`;
const effectiveDate = "August 24, 2026";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/privacy` },
  openGraph: { title, description, url: `${site.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title={title} effectiveDate={effectiveDate}>
      <p>
        This Privacy Policy explains how Scout Labs (&quot;Scout Labs,&quot; &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) collects, uses, and shares information when you visit{" "}
        <a href={site.url}>{site.url}</a>{" "}
        (the &quot;Site&quot;), submit our assessment form, or opt in to receive text messages from us. It applies to
        visitors and to anyone who contacts us through the Site.
      </p>

      <h2>1. Information we collect</h2>
      <p>We collect information in two ways:</p>
      <ul>
        <li>
          <strong>Information you provide.</strong> If you submit the assessment form, we collect the details you
          choose to share, which may include your name, business name, email address, phone number, and any
          information you write about your business or the opportunity you&apos;d like help with.
        </li>
        <li>
          <strong>Automatic analytics information.</strong> We use anonymous, first-party analytics to understand
          which pages and topics are useful. This does not use cookies or third-party trackers, and general
          analytics events never include the contents of the assessment form or other personal identifiers. If you
          arrive at the Site from a marketing link, the source of that link may be attached to an assessment request
          you go on to submit.
        </li>
      </ul>

      <h2>2. How we use information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to your assessment request and communicate with you about it, by email, phone, or text message;</li>
        <li>Understand which parts of the Site and which marketing sources are useful, in aggregate;</li>
        <li>Maintain the security and proper functioning of the Site; and</li>
        <li>Comply with legal obligations.</li>
      </ul>

      <h2>3. SMS text messaging data</h2>
      <p>
        If you provide your mobile phone number and consent to receive text messages, we use that number to send you
        messages related to your assessment request, as described in the SMS section of our{" "}
        <a href="/terms">Terms of Service</a>.
      </p>
      <p>
        <strong>
          We do not share mobile phone numbers or SMS opt-in consent with third parties or affiliates for their own
          marketing or promotional purposes.
        </strong>{" "}
        Text messaging originator opt-in data and consent are used only to operate our own text messaging program
        and are shared only with the service providers who help us send and receive text messages on our behalf (see
        Section 4), and as otherwise described in this Policy.
      </p>
      <p>You can withdraw consent to text messages at any time; see Section 4 of our Terms of Service for how.</p>

      <h2>4. How we share information</h2>
      <p>We do not sell your personal information. We share information only:</p>
      <ul>
        <li>
          <strong>With service providers</strong> who help us operate the Site, send email and text messages,
          process form submissions, and store data — for example, our website hosting, database, and messaging
          providers — under obligations to use it only to provide services to us;
        </li>
        <li>
          <strong>If required by law</strong>, such as in response to a valid legal process, or to protect the
          rights, safety, or property of Scout Labs or others; and
        </li>
        <li>
          <strong>With your direction</strong>, if you ask us to share information with someone else on your behalf.
        </li>
      </ul>

      <h2>5. Data retention</h2>
      <p>
        We retain information you submit through the assessment form for as long as reasonably necessary to respond
        to your request, maintain our business records, and comply with legal obligations, after which we delete or
        anonymize it.
      </p>

      <h2>6. Your choices and rights</h2>
      <p>You can:</p>
      <ul>
        <li>Ask us what information we hold about you, and ask us to correct or delete it;</li>
        <li>
          Opt out of text messages at any time by replying <strong>STOP</strong> to any message you receive from us;
          and
        </li>
        <li>Unsubscribe from any email communications using the link provided in those emails, or by contacting us.</li>
      </ul>
      <p>
        To exercise any of these choices, contact us at <a href={`mailto:${site.email}`}>{site.email}</a>. Depending
        on where you live, you may have additional rights under applicable privacy laws; we will honor requests
        consistent with those laws.
      </p>

      <h2>7. Children&apos;s privacy</h2>
      <p>
        The Site and the Program are intended for business owners and professionals. We do not knowingly collect
        information from children under 13.
      </p>

      <h2>8. Changes to this Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &quot;Effective date&quot; above reflects the date
        of the most recent revision. If we make material changes, we will update this page.
      </p>

      <h2>9. Contact us</h2>
      <p>
        Questions about this Privacy Policy, or requests regarding your information, can be sent to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
