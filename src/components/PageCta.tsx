import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageCtas, type PageCtaVariant, siteConfig } from "@/lib/site";
import styles from "./PageCta.module.css";

export default function PageCta({ variant = "default" }: { variant?: PageCtaVariant }) {
  const cta = pageCtas[variant];
  const primaryIsExternal = cta.primary.href.startsWith("http");

  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.inner}>
          <div>
            <h2 className={styles.title}>{cta.title}</h2>
            <p className={styles.text}>{cta.text}</p>
          </div>
          <div className={styles.actions}>
            {primaryIsExternal ? (
              <a
                href={cta.primary.href}
                className={`btn ${variant === "contact" ? "btn-whatsapp" : "btn-primary"}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cta.primary.label} <ArrowRight size={16} />
              </a>
            ) : (
              <Link href={cta.primary.href} className="btn btn-primary">
                {cta.primary.label} <ArrowRight size={16} />
              </Link>
            )}
            {cta.secondary && (
              <Link href={cta.secondary.href} className="btn btn-outline">
                {cta.secondary.label}
              </Link>
            )}
            {variant !== "contact" && (
              <a
                href={siteConfig.whatsappUrl}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
