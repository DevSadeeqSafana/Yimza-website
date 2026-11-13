import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Training Terms & Conditions",
  description: `Terms for ${siteConfig.brand} professional training registration and participation.`,
  openGraph: {
    title: `Training Terms | ${siteConfig.brand}`,
    url: `${siteConfig.url}/training-terms`,
  },
};

export default function TrainingTermsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="badge">Training</span>
          <h1 className={styles.title}>Training Terms &amp; Conditions</h1>
          <p className={styles.updated}>Last updated: November 2026 · Draft for client review</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.prose}>
            <p>
              These Training Terms apply when you register for a {siteConfig.brand} programme
              operated by {siteConfig.legalName}. They sit alongside our{" "}
              <Link href="/privacy">Privacy Policy</Link> and{" "}
              <Link href="/terms">Terms of Service</Link>.
            </p>

            <h2>1. Registration</h2>
            <p>
              Submitting the registration form expresses interest in a programme. A place is
              confirmed only after we verify details and you complete any required payment or
              enrolment steps we communicate to you.
            </p>

            <h2>2. Fees and payment</h2>
            <p>
              Programme fees are shared during or after a short intro call / confirmation message.
              Payment instructions are sent by email or WhatsApp. Online payment is not processed
              on this website at this time.
            </p>

            <h2>3. Personal data</h2>
            <p>
              We ask for contact details so admissions can reach you about schedule, payment, and
              materials. WhatsApp is optional but recommended for faster confirmation in Nigeria.
              See our <Link href="/privacy">Privacy Policy</Link> for how data is stored and
              protected.
            </p>

            <h2>4. Attendance and conduct</h2>
            <ul>
              <li>Attend scheduled sessions or notify us if you cannot</li>
              <li>Respect trainers and fellow participants</li>
              <li>Do not share paid course materials without permission</li>
            </ul>

            <h2>5. Certificates</h2>
            <p>
              Participants who complete assessments to the required standard receive a{" "}
              <strong>Yimza Professional Training Certificate</strong> issued by{" "}
              {siteConfig.brand}. This is our organisational certificate; it is not an external
              accreditation unless we state otherwise for a specific programme.
            </p>

            <h2>6. Changes and cancellations</h2>
            <p>
              We may reschedule cohorts for operational reasons and will notify registered
              participants. Refund or transfer rules for paid seats will be stated in your
              enrolment confirmation.
            </p>

            <h2>7. Contact</h2>
            <p>
              Training questions:{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> ·{" "}
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </p>

            <p className={styles.note}>
              Draft for {siteConfig.brand} review. Update fee, refund, and schedule clauses once
              commercial terms are finalised.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
