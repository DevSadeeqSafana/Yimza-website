import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Shield, Users, BookOpen } from "lucide-react";
import styles from "./HeroSection.module.css";

const highlights = [
  { icon: Shield, label: "Cybersecurity" },
  { icon: Users, label: "Corporate Training" },
  { icon: BookOpen, label: "Academic Support" },
  { icon: Sparkles, label: "AI & R&D" },
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Background elements */}
      <div className="grid-bg" />
      <div className={styles.gradientOrb1} />
      <div className={styles.gradientOrb2} />
      <div className={styles.gradientOrb3} />

      <div className="container">
        <div className={styles.inner}>
          {/* Left Content */}
          <div className={styles.content}>
            <div className="badge animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <Sparkles size={12} />
              Empowering Africa&apos;s Digital Future
            </div>

            <h1 className={styles.heading}>
              <span className={styles.headingLine}>Transform Your</span>
              <span className={`${styles.headingLine} gold-text`}>Digital Potential</span>
              <span className={styles.headingLine}>With Yimza</span>
            </h1>

            <p className={styles.subtext}>
              We provide top-notch IT consultancy, expert training, academic support, and
              innovative tech solutions to help individuals and businesses thrive in the digital world.
            </p>

            <div className={styles.actions}>
              <Link href="/services" className="btn btn-primary">
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="btn btn-outline">
                About Us
              </Link>
            </div>

            {/* Highlights */}
            <div className={styles.highlights}>
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className={styles.highlight}>
                  <Icon size={14} className={styles.highlightIcon} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className={styles.visual}>
            <div className={styles.logoCard}>
              <div className={styles.logoRing}>
                <div className={styles.logoRingInner}>
                  <Image
                    src="/logo.jpeg"
                    alt="Yimza Consult"
                    width={160}
                    height={160}
                    className={styles.logoImage}
                    priority
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className={`${styles.floatBadge} ${styles.badge1}`}>
                <Shield size={14} style={{ color: "#B89640" }} />
                <span>Cybersecurity</span>
              </div>
              <div className={`${styles.floatBadge} ${styles.badge2}`}>
                <Sparkles size={14} style={{ color: "#B89640" }} />
                <span>AI Solutions</span>
              </div>
              <div className={`${styles.floatBadge} ${styles.badge3}`}>
                <Users size={14} style={{ color: "#B89640" }} />
                <span>500+ Trained</span>
              </div>
            </div>

            {/* Orbit Rings */}
            <div className={styles.orbitRing1} />
            <div className={styles.orbitRing2} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollLine} />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
