import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import styles from "./Footer.module.css";

const socials = [
  {
    label: "Twitter/X",
    href: siteConfig.socials.twitter,
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: siteConfig.socials.facebook,
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: siteConfig.socials.instagram,
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
      </svg>
    ),
  },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Training", href: "/training" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <Link href="/" className={styles.logo}>
                <Image
                  src="/logo.jpeg"
                  alt={siteConfig.brand}
                  width={48}
                  height={48}
                  className={styles.logoImg}
                />
                <div>
                  <div className={styles.logoName}>{siteConfig.brand}</div>
                  <div className={styles.logoSub}>IT Consultancy Services</div>
                </div>
              </Link>
              <p className={styles.brandDesc}>
                Empowering individuals, institutions, and organisations through practical
                IT solutions, expert training, and academic support across Nigeria.
              </p>
              <div className={styles.socials}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className={styles.socialIcon}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Services</h4>
              <ul className={styles.colList}>
                {siteConfig.services.map((s) => (
                  <li key={s.label}>
                    <Link href={s.href} className={styles.colLink}>
                      <ArrowRight size={13} /> {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Products</h4>
              <ul className={styles.colList}>
                {siteConfig.products.map((p) => (
                  <li key={p.label}>
                    <Link href={p.href} className={styles.colLink}>
                      <ArrowRight size={13} /> {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

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

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Contact Us</h4>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <Mail size={15} className={styles.contactIcon} />
                  <a href={`mailto:${siteConfig.email}`} className={styles.contactLink}>
                    {siteConfig.email}
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <Phone size={15} className={styles.contactIcon} />
                  <a href={`tel:+${siteConfig.phoneRaw}`} className={styles.contactLink}>
                    {siteConfig.phone}
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <MapPin size={15} className={styles.contactIcon} />
                  <span className={styles.contactLink}>{siteConfig.addressLine}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.bottom}>
            <p className={styles.copyright}>
              © {year} {siteConfig.legalName}. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy" className={styles.bottomLink}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={styles.bottomLink}>
                Terms of Service
              </Link>
              <Link href="/training-terms" className={styles.bottomLink}>
                Training Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
