import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/content";

const title = "Terms of Service";
const description = `Terms of Service for ${site.name}, including the terms of our SMS text messaging program.`;
const effectiveDate = "August 24, 2026";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/terms` },
  openGraph: { title, description, url: `${site.url}/terms` },
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title={title} effectiveDate={effectiveDate}>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website located at{" "}
        <a href={site.url}>{site.url}</a>{" "}
        (the &quot;Site&quot;) and any related communications, including the free assessment form and our SMS text
        messaging program, offered by Scout Labs (&quot;Scout Labs,&quot; &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;). By using the Site, submitting a form, or opting in to receive text messages from us, you
        agree to these Terms. If you do not agree, please do not use the Site or opt in to our communications.
      </p>

      <h2>1. Who we are</h2>
      <p>
        Scout Labs helps growing, owner-led service businesses evaluate and adopt AI and automation. The Site
        describes our services and lets you request a free assessment of opportunities in your business.
      </p>

      <h2>2. Use of the Site</h2>
      <p>
        You may use the Site for lawful purposes only. You agree not to misuse the Site, interfere with its normal
        operation, attempt to gain unauthorized access to it or any related systems, or submit false, misleading, or
        fraudulent information through the assessment form or any other feature.
      </p>

      <h2>3. Assessment requests and communications</h2>
      <p>
        When you submit the assessment form, you are asking Scout Labs to contact you about your request. You agree
        that the information you provide is accurate and that you are authorized to provide any contact details you
        submit, including the phone number and email address of the person we should contact. We will typically
        respond by email or phone; if you provide a mobile phone number and consent to text messages as described
        below, we may also respond by SMS.
      </p>

      <h2>4. SMS text messaging program</h2>
      <p>
        This section describes the terms of the Scout Labs SMS text messaging program (the &quot;Program&quot;) and
        applies whenever you provide a mobile phone number and consent to receive text messages from us, including
        through the assessment form on the Site.
      </p>
      <h3>Program description</h3>
      <p>
        By opting in, you agree to receive text messages from Scout Labs related to the assessment request or
        inquiry you submitted, including follow-up questions, scheduling, and updates about your engagement with us.
        These are conversational, one-to-one business messages — we do not send bulk marketing text blasts.
      </p>
      <h3>Consent and opt-in</h3>
      <p>
        You opt in to the Program by voluntarily providing your mobile phone number through the assessment form (or
        another Scout Labs intake channel) and indicating your consent to be contacted by text at the point of
        collection. Consent to receive text messages is not required as a condition of purchasing any goods or
        services, and providing a phone number without also providing SMS consent means we will not text you.
      </p>
      <h3>Message frequency</h3>
      <p>
        Message frequency varies depending on your interactions with us and is generally limited to messages
        reasonably related to your specific request — typically a few messages around the time you submit a request
        through the point your inquiry is resolved.
      </p>
      <h3>Message and data rates</h3>
      <p>Message and data rates may apply, depending on your mobile carrier and plan.</p>
      <h3>Opting out</h3>
      <p>
        You can opt out of the Program at any time by replying <strong>STOP</strong> to any text message you receive
        from us, or by emailing <a href={`mailto:${site.email}`}>{site.email}</a> and asking us to stop texting you.
        After you opt out, we will send one final message confirming your opt-out, and you will not receive further
        text messages from us unless you opt in again.
      </p>
      <h3>Getting help</h3>
      <p>
        For help, reply <strong>HELP</strong> to any text message from us, or contact us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <h3>Carrier disclaimer</h3>
      <p>
        Carriers are not liable for delayed or undelivered messages. We are not responsible for any delays or
        failures in your receipt of text messages, as delivery depends on factors outside our control, such as your
        mobile carrier&apos;s coverage area or network availability.
      </p>
      <h3>No sale or third-party marketing use of SMS data</h3>
      <p>
        Mobile opt-in information and consent collected through the Program will not be shared with, or sold to,
        third parties or affiliates for their own marketing or promotional purposes. See our{" "}
        <a href="/privacy">Privacy Policy</a> for further detail on how we handle information collected through the
        Program.
      </p>

      <h2>5. Intellectual property</h2>
      <p>
        The Site, including its text, graphics, logos, and design, is owned by Scout Labs or its licensors and is
        protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative
        works from the Site without our prior written consent, other than for ordinary personal, non-commercial use
        of the Site.
      </p>

      <h2>6. Disclaimers</h2>
      <p>
        The Site and any assessment, recommendation, or communication we provide are offered on an &quot;as
        is&quot; and &quot;as available&quot; basis, without warranties of any kind, express or implied. We do not
        guarantee that any particular business outcome will result from information or recommendations shared
        through the Site or the Program.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Scout Labs will not be liable for any indirect, incidental,
        consequential, or special damages arising out of or relating to your use of the Site or the Program, even if
        we have been advised of the possibility of such damages.
      </p>

      <h2>8. Indemnification</h2>
      <p>
        You agree to indemnify and hold Scout Labs harmless from any claims, losses, or damages, including
        reasonable attorneys&apos; fees, arising from your misuse of the Site, your violation of these Terms, or the
        information you submit to us.
      </p>

      <h2>9. Third-party links</h2>
      <p>
        The Site may link to third-party websites or services that are not owned or controlled by Scout Labs. We are
        not responsible for the content or practices of any third-party sites.
      </p>

      <h2>10. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. The &quot;Effective date&quot; above reflects the date of the
        most recent revision. Continued use of the Site or the Program after changes take effect constitutes
        acceptance of the updated Terms.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These Terms are governed by the laws of the Commonwealth of Virginia, without regard to its conflict-of-law
        principles, and any dispute arising from these Terms or the Site will be subject to the exclusive
        jurisdiction of the state and federal courts located in Virginia.
      </p>

      <h2>12. Contact us</h2>
      <p>
        Questions about these Terms or the Program can be sent to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
