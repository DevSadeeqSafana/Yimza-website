import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import styles from "./Footer.module.css";

const services = [
  "Training & Workshops",
  "Academic Support",
  "Research & Development",
  "General IT Consultancy",
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    href: "#",
    label: "Twitter/X",
  },
  {
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
      </svg>
    ),
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
      </svg>
    ),
    href: "#",
    label: "Facebook",
  },
  {
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/>
      </svg>
    ),
    href: "#",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* CTA Banner */}
      <div className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2 className={styles.ctaTitle}>Ready to Transform Your Digital Future?</h2>
              <p className={styles.ctaText}>Let&apos;s build something great together. Talk to our experts today.</p>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Start a Conversation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <Link href="/" className={styles.logo}>
                <Image src="/logo.jpeg" alt="Yimza Consult" width={48} height={48} className={styles.logoImg} />
                <div>
                  <div className={styles.logoName}>Yimza Consult</div>
                  <div className={styles.logoSub}>IT Consultancy Services</div>
                </div>
              </Link>
              <p className={styles.brandDesc}>
                Empowering individuals, institutions, and organizations through innovative IT solutions, expert training, and academic excellence across Africa.
              </p>
              <div className={styles.socials}>
                {socials.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} className={styles.socialIcon}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Services</h4>
              <ul className={styles.colList}>
                {services.map((s) => (
                  <li key={s}>
                    <Link href="/services" className={styles.colLink}>
                      <ArrowRight size={13} /> {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Company</h4>
              <ul className={styles.colList}>
                {company.map((c) => (
                  <li key={c.label}>
                    <Link href={c.href} className={styles.colLink}>
                      <ArrowRight size={13} /> {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Contact Us</h4>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <Mail size={15} className={styles.contactIcon} />
                  <a href="mailto:info@yimzaconsult.com" className={styles.contactLink}>info@yimzaconsult.com</a>
                </li>
                <li className={styles.contactItem}>
                  <Phone size={15} className={styles.contactIcon} />
                  <a href="tel:+2347011021667" className={styles.contactLink}>+234 701 102 1667</a>
                </li>
                <li className={styles.contactItem}>
                  <MapPin size={15} className={styles.contactIcon} />
                  <span className={styles.contactLink}>Nigeria, Africa</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className={styles.bottom}>
            <p className={styles.copyright}>© 2025 Yimza IT Consultancy Services. All rights reserved.</p>
            <div className={styles.bottomLinks}>
              <a href="#" className={styles.bottomLink}>Privacy Policy</a>
              <a href="#" className={styles.bottomLink}>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
