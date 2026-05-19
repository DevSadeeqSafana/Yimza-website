import Link from "next/link";
import {
  GraduationCap, FlaskConical, BookOpen, Network,
  ArrowRight, CheckCircle2
} from "lucide-react";
import styles from "./ServicesSection.module.css";

const services = [
  {
    icon: GraduationCap,
    id: "taw",
    tag: "01",
    title: "Training & Workshops",
    desc: "Highly interactive training programs blending theory with real-world applications. Learners gain practical, job-ready skills tailored for individuals, teams, and institutions.",
    highlights: [
      "Digital Literacy & Transformation",
      "Data Analytics & Business Intelligence",
      "Cybersecurity Fundamentals",
      "Emerging Technologies (AI, IoT, Cloud)",
    ],
  },
  {
    icon: FlaskConical,
    id: "rad",
    tag: "02",
    title: "Research & Development",
    desc: "We partner with academic institutions, government agencies, and private organizations to deliver research-driven, technology-powered solutions that address real challenges.",
    highlights: [
      "AI-powered solution deployment",
      "Data-driven decision support systems",
      "Smart devices & IoT prototyping",
      "Feasibility studies for emerging tech",
    ],
  },
  {
    icon: BookOpen,
    id: "as",
    tag: "03",
    title: "Academic Support",
    desc: "Expert mentorship and guidance for scholars, educators, and institutions pursuing academic excellence. We support every stage of the research journey.",
    highlights: [
      "Supervision & mentorship at all levels",
      "Data analysis & results interpretation",
      "Academic writing & proposal support",
      "Research methods workshops",
    ],
  },
  {
    icon: Network,
    id: "gitc",
    tag: "04",
    title: "General IT Consultancy",
    desc: "Tailored strategies helping organizations navigate fast-changing technology landscapes. We optimize infrastructure, strengthen security, and drive digital transformation.",
    highlights: [
      "IT Infrastructure Planning",
      "Cloud Migration & Deployment",
      "Cybersecurity Audits & Assessments",
      "Business Process Automation",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className={`section ${styles.servicesSection}`}>
      <div className="grid-bg" style={{ opacity: 0.4 }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className={styles.header}>
          <span className="section-label">What We Offer</span>
          <div className="gold-line center" />
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Services Built for <span>Real Impact</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "16px auto 0", textAlign: "center" }}>
            Driven by a passion for empowering individuals, advancing research, and delivering IT
            solutions that make a measurable difference.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map(({ icon: Icon, id, tag, title, desc, highlights }) => (
            <div key={id} className={`glass-card ${styles.card}`}>
              <div className={styles.cardTop}>
                <div className={styles.cardTag}>{tag}</div>
                <div className="icon-box" style={{ width: 60, height: 60 }}>
                  <Icon size={26} />
                </div>
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
              <ul className={styles.highlights}>
                {highlights.map((h) => (
                  <li key={h} className={styles.highlight}>
                    <CheckCircle2 size={14} className={styles.checkIcon} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/services#${id}`} className={styles.cardLink}>
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link href="/services" className="btn btn-outline">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
