import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap, FlaskConical, BookOpen, Network,
  CheckCircle2, ArrowRight, Sparkles
} from "lucide-react";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services | Yimza IT Consultancy Services",
  description: "Explore Yimza Consult full range of IT services: training, academic support, R&D, and IT consultancy.",
};

const services = [
  {
    id: "taw", icon: GraduationCap, tag: "Service 01",
    title: "Training & Workshops",
    desc: "Highly interactive training blending theory with real-world applications so learners gain practical, job-ready skills.",
    highlights: ["Digital Literacy & Transformation","Data Analytics & Business Intelligence","Cybersecurity Fundamentals","Software Engineering Best Practices","Emerging Technologies (AI, IoT, Cloud)","Project Management & Agile"],
    delivery: "Available in-person & online",
  },
  {
    id: "rad", icon: FlaskConical, tag: "Service 02",
    title: "Research & Development",
    desc: "Partnering with institutions and organizations to deliver research-driven, technology-powered solutions for real challenges.",
    highlights: ["AI-powered solutions deployment","Data-driven decision support","Smart devices & IoT prototyping","Feasibility studies for emerging tech","Research publications & knowledge sharing"],
    delivery: "Custom engagement models available",
  },
  {
    id: "as", icon: BookOpen, tag: "Service 03",
    title: "Academic Support",
    desc: "Supporting scholars and institutions in their pursuit of academic excellence from undergraduate to doctoral level.",
    highlights: ["Supervision & mentorship at all levels","Data analysis & results interpretation","Academic writing & proposal support","Advanced research methods workshops","Lab & digital resource setup"],
    delivery: "Remote & in-person sessions",
  },
  {
    id: "gitc", icon: Network, tag: "Service 04",
    title: "General IT Consultancy",
    desc: "Helping organizations navigate fast-changing technology with tailored strategies, from infrastructure to full digital transformation.",
    highlights: ["IT Infrastructure Planning","Cloud Migration & Deployment","Cybersecurity Audits & Assessments","Business Process Automation","Digital Transformation Roadmaps"],
    delivery: "Ongoing technical support included",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="grid-bg" />
        <div className={styles.heroGlow} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={styles.heroContent}>
            <span className="badge"><Sparkles size={12} /> Our Services</span>
            <h1 className={styles.heroTitle}>Empowering Growth Through<br /><span className="gold-text">Innovation &amp; Technology</span></h1>
            <p className={styles.heroSubtext}>Driven by passion for empowering individuals, advancing research, and delivering IT solutions that make a real difference.</p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--navy-light)", paddingBottom: 40 }}>
        <div className="container">
          {services.map(({ id, icon: Icon, tag, title, desc, highlights, delivery }, i) => (
            <div key={id} id={id} className={`${styles.serviceRow} ${i % 2 !== 0 ? styles.reversed : ""}`}>
              <div className={styles.serviceVisual}>
                <div className={styles.iconBig}><Icon size={48} style={{ color: "#B89640" }} /></div>
                <div className={styles.deliveryBadge}><CheckCircle2 size={14} style={{ color: "#B89640" }} />{delivery}</div>
              </div>
              <div className={styles.serviceContent}>
                <span className={styles.serviceTag}>{tag}</span>
                <h2 className={styles.serviceTitle}>{title}</h2>
                <p className={styles.serviceDesc}>{desc}</p>
                <ul className={styles.highlights}>
                  {highlights.map((h) => (
                    <li key={h} className={styles.highlight}>
                      <CheckCircle2 size={15} style={{ color: "#B89640", flexShrink: 0 }} /><span>{h}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn btn-primary" style={{ marginTop: 8 }}>Get Started <ArrowRight size={16} /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`section ${styles.techBanner}`}>
        <div className="grid-bg" style={{ opacity: 0.4 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={styles.techInner}>
            <div>
              <span className="section-label">The Technology You Need</span>
              <div className="gold-line" />
              <h2 className="section-title" style={{ marginTop: 16 }}>Smart Solutions <span>Built for You</span></h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "1rem", marginTop: 16, maxWidth: 520 }}>
                We deliver smart, scalable, and user-friendly solutions that help individuals and businesses grow faster. From training to technical guidance, we provide continuous support every step of the way.
              </p>
            </div>
            <div className={styles.techStats}>
              {[{v:"500+",l:"Professionals Trained"},{v:"100%",l:"Tailored Solutions"},{v:"4",l:"Core Service Areas"}].map(({v,l}) => (
                <div key={l} className={styles.techStat}>
                  <div className={styles.techStatVal}>{v}</div>
                  <div className={styles.techStatLabel}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
