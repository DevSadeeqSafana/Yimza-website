import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap, FlaskConical, BookOpen, Network,
  CheckCircle2, ArrowRight, Sparkles, Laptop, ShieldCheck, Database, LayoutGrid
} from "lucide-react";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services | Yimza IT Consultancy Services",
  description: "Explore Yimza Consult's full range of IT services: training, academic support, R&D, and IT consultancy.",
};

const services = [
  {
    id: "taw",
    icon: GraduationCap,
    tag: "Service 01 / Talent Upskilling",
    title: "Training & Workshops",
    desc: "Highly interactive training programs designed to bridge the digital skills gap. We blend rigorous theory with hands-on, real-world case studies to ensure your workforce or students gain immediate job-ready competence.",
    whyChooseUs: "Yimza's training modules are crafted by industry professionals and academic researchers, ensuring that content is state-of-the-art and directly applicable to corporate environments.",
    coreOfferings: [
      {
        title: "Corporate Tech-Bootcamps",
        desc: "Tailored intensive programs in software engineering, advanced databases, and modern dev tools for technical teams.",
        icon: Laptop
      },
      {
        title: "Digital Transformation Clinics",
        desc: "Equipping non-technical staff with the critical skills required to operate in digital-first organizations."
      },
      {
        title: "Data Analytics & BI",
        desc: "Comprehensive modules on Excel modeling, SQL, Tableau/PowerBI, and statistical analysis for business decision makers.",
        icon: Database
      },
      {
        title: "Cybersecurity Fundamentals",
        desc: "Security awareness workshops covering threat vectors, email hygiene, safe remote work, and basic penetration concepts.",
        icon: ShieldCheck
      }
    ],
    deliverables: [
      "Custom curricula tailored to your business needs",
      "Hands-on labs, sandboxes, and project-based evaluation",
      "Comprehensive performance reports and certificates of completion",
      "Post-training mentorship and refresher sessions"
    ],
    process: ["Needs Assessment", "Curriculum Design", "Interactive Delivery", "Evaluation & Feedback"]
  },
  {
    id: "rad",
    icon: FlaskConical,
    tag: "Service 02 / Applied Research",
    title: "Research & Development",
    desc: "We partner with academic institutions, businesses, and government agencies to pioneer tech-driven research and develop physical and digital prototypes that solve complex socio-economic and industrial problems.",
    whyChooseUs: "We bridge the gap between academic research and commercial software, turning abstract concepts into functional prototypes and deployed products.",
    coreOfferings: [
      {
        title: "AI & Machine Learning Systems",
        desc: "Developing and deploying custom NLP, computer vision, and predictive models tailored for local business processes.",
        icon: Sparkles
      },
      {
        title: "IoT & Smart Devices",
        desc: "Designing and building physical microcontroller prototypes for environmental sensing, agritech, and automated tracking."
      },
      {
        title: "Tech Feasibility Research",
        desc: "Detailed technical audits, literature reviews, and proof-of-concept tests for novel technology investments."
      },
      {
        title: "Scientific Knowledge Sharing",
        desc: "Collaborating on scientific publications and whitepapers that detail technological impact and deployment frameworks."
      }
    ],
    deliverables: [
      "Working software and hardware prototypes (MVP)",
      "Technical blueprints, schematics, and clean documentation",
      "Feasibility reports and scientific impact analyses",
      "SLA-managed handovers and integration support"
    ],
    process: ["Literature Review", "Feasibility / POC", "Hardware/Software Prototyping", "Testing & Publications"]
  },
  {
    id: "as",
    icon: BookOpen,
    tag: "Service 03 / Scholarly Mentorship",
    title: "Academic Support",
    desc: "Supporting scholars, researchers, and institutions in their pursuit of academic excellence. We provide advisory services, tools, and technical resources from undergraduate to doctoral levels.",
    whyChooseUs: "Our academic support network consists of PhD supervisors and publishable researchers who maintain strict ethical standards and guide you toward scientific excellence.",
    coreOfferings: [
      {
        title: "Thesis Supervision & Guidance",
        desc: "Individualized mentoring sessions covering topic selection, research design, methodology, and outline review.",
        icon: GraduationCap
      },
      {
        title: "Data Analysis & Interpretation",
        desc: "Deep statistical processing using SPSS, Python, R, Stata, or MATLAB, complete with clear, academic results interpretations."
      },
      {
        title: "Academic Writing & Proposal Advisory",
        desc: "Assisting with structural edits, literature mapping, referencing styles, and compliance checks for proposal submissions."
      },
      {
        title: "Advanced Research Workshops",
        desc: "Group seminars focused on quantitative methods, scientific publication strategies, and defense preparation."
      }
    ],
    deliverables: [
      "Clean, annotated statistical datasets and code repositories",
      "Interactive charts, models, and data visualizations",
      "Detailed structural feedback reports on drafts",
      "Mock defense checklists and presentation guidance"
    ],
    process: ["Scope Definition", "Methodology & Coding", "Data Processing", "Review & Polish"]
  },
  {
    id: "gitc",
    icon: Network,
    tag: "Service 04 / Enterprise Strategy",
    title: "General IT Consultancy",
    desc: "Helping organizations navigate the fast-changing technology landscape with tailored strategies, optimized infrastructure, and full digital transformation consulting.",
    whyChooseUs: "We focus on technology as a business driver. Our recommendations are objective, vendor-agnostic, and calculated to maximize ROI and operational security.",
    coreOfferings: [
      {
        title: "IT Infrastructure Planning",
        desc: "Architecting reliable, scalable networks, servers, and storage solutions to support growing organizational demands.",
        icon: Network
      },
      {
        title: "Cloud Migration & Deployment",
        desc: "Assisting in secure transitions to AWS, GCP, Azure, or private cloud environments with minimal operational downtime."
      },
      {
        title: "Cybersecurity Audits & Assessments",
        desc: "Evaluating corporate networks for vulnerabilities, designing response protocols, and certifying policy compliance.",
        icon: ShieldCheck
      },
      {
        title: "Business Process Automation",
        desc: "Replacing repetitive manual workflows with modern digital platforms and custom CRM/ERP integrations.",
        icon: LayoutGrid
      }
    ],
    deliverables: [
      "Strategic IT roadmap and digital transformation briefs",
      "Infrastructure architecture diagrams and vendor briefs",
      "Detailed vulnerability scanner logs and risk registers",
      "Integration API documentation and operational guides"
    ],
    process: ["Discovery Audit", "Strategy Formulation", "System Engineering", "Deployment & Support"]
  }
];

export default function ServicesPage() {
  return (
    <div className={styles.wrapper}>
      {/* Hero section */}
      <section className={styles.hero}>
        <div className="grid-bg" />
        <div className={styles.heroGlow} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={styles.heroContent}>
            <span className="badge"><Sparkles size={12} /> Dynamic IT Expertise</span>
            <h1 className={styles.heroTitle}>
              Tailored Solutions built on <br />
              <span className="gold-text">Research &amp; Engineering</span>
            </h1>
            <p className={styles.heroSubtext}>
              We empower organizations, support scholars, and engineer custom hardware and software systems to solve complex technological challenges across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Services List section */}
      <section className={styles.servicesGridSection}>
        <div className="container">
          {services.map(({ id, icon: Icon, tag, title, desc, whyChooseUs, coreOfferings, deliverables, process }, i) => (
            <div key={id} id={id} className={styles.serviceBlock}>
              
              {/* Header Grid */}
              <div className={styles.serviceHeader}>
                <div className={styles.headerTitleColumn}>
                  <span className={styles.serviceTag}>{tag}</span>
                  <h2 className={styles.serviceTitle}>{title}</h2>
                  <p className={styles.serviceDesc}>{desc}</p>
                </div>
                <div className={styles.headerInfoColumn}>
                  <div className={styles.badgeWrapper}>
                    <Icon size={28} className={styles.bigIcon} />
                  </div>
                  <h4 className={styles.whyTitle}>Why Yimza</h4>
                  <p className={styles.whyText}>{whyChooseUs}</p>
                </div>
              </div>

              {/* Elaboration Row: Core Offerings Grid & Details */}
              <div className={styles.elaborationGrid}>
                {/* Core Offerings Cards */}
                <div className={styles.offeringsColumn}>
                  <h3 className={styles.subSectionTitle}>Core Focus Areas</h3>
                  <div className={styles.offeringsGrid}>
                    {coreOfferings.map((offering) => {
                      const SubIcon = offering.icon || CheckCircle2;
                      return (
                        <div key={offering.title} className={styles.offeringCard}>
                          <div className={styles.offeringHeader}>
                            <SubIcon size={18} className={styles.offeringIcon} />
                            <h4>{offering.title}</h4>
                          </div>
                          <p>{offering.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Deliverables & Process Column */}
                <div className={styles.deliverablesColumn}>
                  <div className={styles.deliverablesBox}>
                    <h3 className={styles.subSectionTitle}>Key Deliverables</h3>
                    <ul className={styles.deliverablesList}>
                      {deliverables.map((item) => (
                        <li key={item} className={styles.deliverableItem}>
                          <CheckCircle2 size={16} className={styles.bulletIcon} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process Roadmap */}
                  <div className={styles.processBox}>
                    <h4 className={styles.processTitle}>Our Process</h4>
                    <div className={styles.processSteps}>
                      {process.map((step, idx) => (
                        <div key={step} className={styles.processStep}>
                          <div className={styles.stepNum}>{idx + 1}</div>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.actionRow}>
                <Link href="/contact" className="btn btn-primary">
                  Inquire About {title} <ArrowRight size={16} />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Stats section */}
      <section className={styles.statsBanner}>
        <div className="grid-bg" style={{ opacity: 0.3 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={styles.statsContent}>
            <div>
              <span className="section-label">Delivering Results</span>
              <h2 className="section-title">Scale. Stability. <span>Success.</span></h2>
              <p className={styles.statsSubtitle}>
                Whether training professionals, coding machine learning backends, or setting up security architectures, we maintain international engineering standards.
              </p>
            </div>
            <div className={styles.statsGrid}>
              {[
                { v: "500+", l: "Professionals Trained" },
                { v: "100%", l: "SLA Custom Solutions" },
                { v: "24/7", l: "Architect Support" }
              ].map(({ v, l }) => (
                <div key={l} className={styles.statBox}>
                  <div className={styles.statVal}>{v}</div>
                  <div className={styles.statLabel}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
