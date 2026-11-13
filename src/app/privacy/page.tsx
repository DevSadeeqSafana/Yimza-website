import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.brand} collects, uses, and protects personal data under the Nigeria Data Protection Act 2023.`,
  openGraph: {
    title: `Privacy Policy | ${siteConfig.brand}`,
    url: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="badge">Legal</span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: November 2026 · Draft for client review</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.prose}>
            <p>
              This Privacy Policy explains how {siteConfig.legalName} (“{siteConfig.brand}”,
              “we”, “us”) collects and processes personal data when you use{" "}
              <a href={siteConfig.url}>{siteConfig.url}</a>, contact us, or register for training.
            </p>

            <h2>1. Who we are</h2>
            <p>
              Controller: {siteConfig.legalName}. Contact:{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> · {siteConfig.phone} ·{" "}
              {siteConfig.addressLine}.
            </p>

            <h2>2. Data we collect</h2>
            <ul>
              <li>Contact details: name, email, phone, WhatsApp number</li>
              <li>Enquiry details: service interest, message content</li>
              <li>
                Training registration: programme choice, preferred mode, learning goals, and
                optional WhatsApp number
              </li>
              <li>Technical data: basic server logs and analytics if enabled</li>
            </ul>

            <h2>3. Why we process data</h2>
            <ul>
              <li>Respond to enquiries and schedule demos</li>
              <li>Process training registrations and send enrolment details</li>
              <li>Provide services you request</li>
              <li>Meet legal and compliance obligations under the NDPA 2023</li>
            </ul>

            <h2>4. Lawful basis</h2>
            <p>
              We process data based on your consent (forms), contract (service delivery), and
              legitimate interests (improving our services and securing our systems), as applicable
              under the Nigeria Data Protection Act 2023.
            </p>

            <h2>5. Sharing</h2>
            <p>
              We do not sell personal data. We may share data with processors who help us operate
              email delivery and hosting, under appropriate agreements, or when required by law.
            </p>

            <h2>6. Retention</h2>
            <p>
              Enquiry and registration records are kept only as long as needed to respond, deliver
              services, and meet legal requirements, then deleted or anonymised.
            </p>

            <h2>7. Your rights</h2>
            <p>
              You may request access, correction, deletion, or restriction of your personal data,
              and you may withdraw consent where processing is consent-based. Contact{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. You may also lodge a
              complaint with the Nigeria Data Protection Commission.
            </p>

            <h2>8. Security</h2>
            <p>
              We apply reasonable technical and organisational measures to protect personal data.
              No method of transmission over the internet is fully secure.
            </p>

            <h2>9. Contact</h2>
            <p>
              Questions about this policy:{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or{" "}
              <Link href="/contact">Contact</Link>.
            </p>

            <p className={styles.note}>
              This page is a working draft prepared for {siteConfig.brand}. Have your counsel
              review and approve before relying on it as final legal advice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
