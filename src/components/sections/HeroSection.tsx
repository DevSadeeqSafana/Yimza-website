import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="grid-bg" />
      <div className={styles.glow} />

      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <p className={styles.brand}>{siteConfig.brand}</p>
            <h1 className={styles.heading}>
              Practical IT, training, and software for Nigeria&apos;s next builders
            </h1>
            <p className={styles.subtext}>
              From skills programmes in Gusau and Abuja to consultancy and management systems
              for schools and hospitals — choose the path that fits you.
            </p>

            <div className={styles.actions}>
              <Link href="/training" className="btn btn-primary">
                Browse training <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Talk to us
              </Link>
            </div>

            <p className={styles.micro}>
              Locations: {siteConfig.locations.join(" · ")}
            </p>
          </div>

          <div className={styles.visual}>
            <div className={styles.visualFrame}>
              <Image
                src="/training_hero.png"
                alt="Learners in a Yimza Consult training session"
                fill
                priority
                className={styles.visualImage}
                sizes="(max-width: 900px) 100vw, 520px"
              />
            </div>
            <div className={styles.visualCaption}>
              Hands-on programmes · Gusau, Abuja &amp; Online
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
