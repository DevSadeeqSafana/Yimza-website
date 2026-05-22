import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Target, Eye, CheckCircle2, ArrowRight,
  Users, Lightbulb, Handshake, Globe
} from "lucide-react";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us | Yimza IT Consultancy Services",
  description:
    "Learn about Yimza Consult — our mission, vision, and commitment to empowering individuals and organizations through IT solutions, training, and academic support across Africa.",
};

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "We embrace emerging technologies and creative thinking to solve complex challenges." },
  { icon: Users, title: "Empowerment", desc: "We equip every client with the knowledge and tools to thrive independently." },
  { icon: Handshake, title: "Integrity", desc: "We operate with transparency, honesty, and unwavering commitment to our clients." },
  { icon: Globe, title: "Impact", desc: "Every solution we deliver is designed to create lasting, measurable positive change." },
];

const faqs = [
  { q: "Who can benefit from your services?", a: "Individuals, academic institutions, corporate organizations, and government agencies across Africa looking to leverage technology for growth and development." },
  { q: "Are services available nationwide?", a: "Yes. We serve clients across Nigeria and beyond, with both in-person and remote engagements available for maximum flexibility." },
  { q: "How do I start a project with Yimza?", a: "Simply reach out via our contact page. Our team will schedule a discovery call to understand your needs and recommend the best path forward." },
  { q: "Do you offer ongoing support after project delivery?", a: "Absolutely. We provide continuous post-project support, updates, and improvements to ensure your systems remain secure and efficient." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="grid-bg" />
        <div className={styles.heroGlow} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={styles.heroContent}>
            <span className="badge">About Yimza Consult</span>
            <h1 className={styles.heroTitle}>
              Bridging Knowledge &amp;<br /><span className="gold-text">Technology in Africa</span>
            </h1>
            <p className={styles.heroSubtext}>
              We are a dynamic IT consultancy firm committed to transforming how individuals,
              institutions, and organizations engage with technology — empowering growth through
              training, research, and expert digital solutions.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: 8 }}>
              Work With Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section" style={{ background: "var(--navy-light)" }}>
        <div className="container">
          <div className={styles.whatGrid}>
            <div className={styles.whatImage}>
              <Image src="/logo.jpeg" alt="Yimza Consult" fill style={{ objectFit: "cover" }} />
              <div className={styles.whatOverlay} />
              <div className={styles.whatBadge}>
                <span className={styles.whatBadgeNum}>3+</span>
                <span className={styles.whatBadgeLabel}>Years Serving Africa</span>
              </div>
            </div>

            <div className={styles.whatContent}>
              <span className="section-label">What We Do</span>
              <div className="gold-line" />
              <h2 className="section-title">
                Transforming Ideas Into <span>Impactful Solutions</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "1rem", marginTop: 16 }}>
                Yimza IT Consultancy Services is a dynamic firm dedicated to equipping individuals,
                institutions, and organizations with the tools to thrive in today&apos;s digital world.
                Through tailored training, innovative research, academic support, and expert IT
                consultancy, we transform ideas into impactful solutions that drive personal,
                educational, and business success.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.9, fontSize: "0.95rem", marginTop: 12 }}>
                With a passion for driving transformation, our services span across training
                workshops, research and development, academic support, and general IT consultancy —
                always with a focus on practical results and long-term value.
              </p>
              <div className={styles.checkList}>
                {["Practical, results-oriented approach", "Customized solutions for every client", "Continuous learning & support culture", "Africa-focused with global standards"].map((item) => (
                  <div key={item} className={styles.checkItem}>
                    <CheckCircle2 size={16} style={{ color: "#B89640", flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: "var(--navy)" }}>
        <div className="grid-bg" style={{ opacity: 0.4 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={styles.mvHeader}>
            <span className="section-label">Our Direction</span>
            <div className="gold-line center" />
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Guided by Mission, <span>Inspired by Vision</span>
            </h2>
          </div>
          <div className={styles.mvGrid}>
            <div className={`glass-card ${styles.mvCard}`}>
              <div className={styles.mvIconWrap} style={{ background: "rgba(184,150,64,0.12)" }}>
                <Target size={28} style={{ color: "#B89640" }} />
              </div>
              <h3 className={styles.mvTitle}>Our Mission</h3>
              <p className={styles.mvText}>
                To empower growth by delivering practical training, fostering innovation through
                research, and offering expert IT solutions that transform lives and organizations
                across Africa and beyond.
              </p>
            </div>
            <div className={`glass-card ${styles.mvCard} ${styles.mvCardAccent}`}>
              <div className={styles.mvIconWrap} style={{ background: "rgba(184,150,64,0.2)" }}>
                <Eye size={28} style={{ color: "#D4AF5A" }} />
              </div>
              <h3 className={styles.mvTitle}>Our Vision</h3>
              <p className={styles.mvText}>
                To be a leading force in IT consultancy and capacity building across Africa,
                shaping a future where knowledge and technology drive inclusive, sustainable
                development for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" style={{ background: "var(--navy-light)" }}>
        <div className="container">
          <div className={styles.valuesHeader}>
            <span className="section-label">What Drives Us</span>
            <div className="gold-line center" />
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Our Core <span>Values</span>
            </h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className={`glass-card ${styles.valueCard}`}>
                <div className="icon-box" style={{ width: 56, height: 56, marginBottom: 20 }}>
                  <Icon size={24} />
                </div>
                <h3 className={styles.valueTitle}>{title}</h3>
                <p className={styles.valueDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--navy)" }}>
        <div className="container">
          <div className={styles.faqHeader}>
            <span className="section-label">FAQ</span>
            <div className="gold-line center" />
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Common <span>Questions</span>
            </h2>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map(({ q, a }) => (
              <div key={q} className={`glass-card ${styles.faqCard}`}>
                <h4 className={styles.faqQ}>{q}</h4>
                <p className={styles.faqA}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
