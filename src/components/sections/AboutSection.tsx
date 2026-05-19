import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Target, Eye } from "lucide-react";
import styles from "./AboutSection.module.css";

const pillars = [
  "Practical, job-ready training programs",
  "AI-powered research & development",
  "Expert academic mentorship",
  "Tailored IT consultancy for businesses",
  "Cybersecurity audits & risk assessments",
  "Continuous post-project support",
];

export default function AboutSection() {
  return (
    <section className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Visual */}
          <div className={styles.visual}>
            <div className={styles.imageStack}>
              <div className={styles.imagePrimary}>
                <Image
                  src="/logo.jpeg"
                  alt="Yimza Consult Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.imageOverlay} />
              </div>

              {/* Mission card */}
              <div className={styles.missionCard}>
                <div className={styles.missionIcon}>
                  <Target size={20} />
                </div>
                <div>
                  <div className={styles.missionLabel}>Our Mission</div>
                  <div className={styles.missionText}>Empowering growth through technology & education</div>
                </div>
              </div>

              {/* Vision card */}
              <div className={styles.visionCard}>
                <div className={styles.visionIcon}>
                  <Eye size={20} />
                </div>
                <div>
                  <div className={styles.missionLabel}>Our Vision</div>
                  <div className={styles.missionText}>Leading IT force across Africa</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className={styles.decorDot1} />
            <div className={styles.decorDot2} />
            <div className={styles.decorLine} />
          </div>

          {/* Right Content */}
          <div className={styles.content}>
            <span className="section-label">About Yimza</span>
            <div className="gold-line" />
            <h2 className="section-title">
              Bridging Knowledge &amp;<br /><span>Technology in Africa</span>
            </h2>

            <p className={styles.description}>
              Yimza IT Consultancy Services is a dynamic firm dedicated to equipping individuals,
              institutions, and organizations with the tools to thrive in today&apos;s digital world.
              Through tailored training, innovative research, academic support, and expert IT
              consultancy, we transform ideas into impactful solutions.
            </p>

            <div className={styles.pillars}>
              {pillars.map((item) => (
                <div key={item} className={styles.pillar}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn btn-primary" style={{ marginTop: 8 }}>
              Discover Our Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
