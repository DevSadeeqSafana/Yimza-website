import { Search, Cpu, HeartHandshake } from "lucide-react";
import styles from "./HowWeWork.module.css";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Consult & Discover",
    desc: "We begin by understanding your goals, challenges, and current systems through detailed consultations and comprehensive needs assessments. Every solution starts with listening.",
    color: "#B89640",
  },
  {
    step: "02",
    icon: Cpu,
    title: "Design & Implement",
    desc: "Our team architects tailored IT solutions and executes them efficiently using best-in-class tools and methodologies, ensuring every deliverable aligns with your objectives.",
    color: "#D4AF5A",
  },
  {
    step: "03",
    icon: HeartHandshake,
    title: "Support & Grow",
    desc: "After deployment, we provide continuous support, updates, and improvements to keep your systems secure, efficient, and scalable as your business evolves.",
    color: "#B89640",
  },
];

export default function HowWeWork() {
  return (
    <section className="section" style={{ background: "var(--navy)" }}>
      <div className="grid-bg" style={{ opacity: 0.5 }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className={styles.header}>
          <span className="section-label">Our Process</span>
          <div className="gold-line" />
          <h2 className="section-title">
            How We <span>Work With You</span>
          </h2>
          <p className="section-subtitle" style={{ marginTop: 16 }}>
            A clear, structured approach that ensures every engagement delivers measurable results and lasting impact for your organization.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map(({ step, icon: Icon, title, desc, color }, i) => (
            <div key={step} className={styles.step}>
              {/* Connector line */}
              {i < steps.length - 1 && <div className={styles.connector} />}

              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>{step}</div>
                <div className={styles.iconRing} style={{ borderColor: `${color}33` }}>
                  <div className={styles.iconInner} style={{ background: `${color}15` }}>
                    <Icon size={26} style={{ color }} />
                  </div>
                </div>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepDesc}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
