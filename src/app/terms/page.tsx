import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of the ${siteConfig.brand} website and services.`,
  openGraph: {
    title: `Terms of Service | ${siteConfig.brand}`,
    url: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="badge">Legal</span>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.updated}>Last updated: November 2026 · Draft for client review</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.prose}>
            <p>
              These Terms govern your use of the {siteConfig.brand} website and related services
              operated by {siteConfig.legalName}.
            </p>

            <h2>1. Acceptance</h2>
            <p>
              By accessing this site or submitting a form, you agree to these Terms and our{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </p>

            <h2>2. Services</h2>
            <p>
              We provide IT consultancy, training, academic support, research collaboration, and
              software products (including YimzaCare and YimzaEdu). Specific engagements are
              governed by separate proposals, statements of work, or contracts.
            </p>

            <h2>3. Website content</h2>
            <p>
              Content on this site is for general information. We aim for accuracy but do not
              warrant that all content is complete or current. Product features and training
              offerings may change.
            </p>

            <h2>4. Enquiries and demos</h2>
            <p>
              Submitting a contact or demo request does not create a binding contract. We will
              respond using the details you provide.
            </p>

            <h2>5. Acceptable use</h2>
            <ul>
              <li>Do not misuse the site or attempt unauthorised access</li>
              <li>Do not submit unlawful, harmful, or misleading content</li>
              <li>Do not scrape or copy substantial content without permission</li>
            </ul>

            <h2>6. Intellectual property</h2>
            <p>
              Branding, site content, and product materials belong to {siteConfig.legalName} or
              its licensors. You may not use them without written permission.
            </p>

            <h2>7. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by Nigerian law, we are not liable for indirect or
              consequential losses arising from use of this website. Nothing excludes liability
              that cannot lawfully be excluded.
            </p>

            <h2>8. Governing law</h2>
            <p>
              These Terms are governed by the laws of the Federal Republic of Nigeria. Disputes
              are subject to the courts of Nigeria.
            </p>

            <h2>9. Contact</h2>
            <p>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> ·{" "}
              <Link href="/contact">Contact page</Link>
            </p>

            <p className={styles.note}>
              Draft for review by {siteConfig.brand}. Training programmes have additional{" "}
              <Link href="/training-terms">Training Terms</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
