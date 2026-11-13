"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Laptop,
  Award,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Send,
  Users,
  Code2,
  BrainCircuit,
  BarChart3,
  ShieldCheck,
  Cloud,
  Palette,
  Layers,
  Megaphone,
  BookOpenCheck,
  Monitor,
  Building2,
  Check,
  X,
  BookOpen,
  Target,
  ChevronRight,
  Trophy,
  Sparkles,
  CalendarCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import PageCta from "@/components/PageCta";
import styles from "./training.module.css";

interface ProgramDetail {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  duration: string;
  schedule: string;
  level: string;
  overview: string;
  whatYouWillLearn: string[];
  whatYouWillGain: string[];
  audience: string;
}

const programDetailsData: Record<string, ProgramDetail> = {
  "Software Development": {
    title: "Software Development",
    icon: Code2,
    duration: "12 Weeks",
    schedule: "Weekday & Weekend",
    level: "Beginner to Intermediate",
    overview:
      "Build full-stack web applications with HTML, CSS, JavaScript/TypeScript, React, Next.js, and Node.js.",
    whatYouWillLearn: [
      "HTML5, CSS3, responsive layouts",
      "JavaScript ES6+ and DOM",
      "React and Next.js fundamentals",
      "Node.js APIs and databases",
      "Git and deployment basics",
    ],
    whatYouWillGain: [
      "Portfolio projects",
      "Yimza Professional Training Certificate",
      "CV and interview coaching session",
    ],
    audience: "Students, graduates, and career switchers.",
  },
  "Artificial Intelligence": {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    duration: "10 Weeks",
    schedule: "Weekend & Evening",
    level: "Intermediate",
    overview: "Practical ML, LLM APIs, and AI integration for real products.",
    whatYouWillLearn: [
      "Python for data and AI",
      "Supervised learning basics",
      "LLM API integration",
      "Prompt engineering fundamentals",
    ],
    whatYouWillGain: [
      "Capstone AI project",
      "Yimza Professional Training Certificate",
    ],
    audience: "Developers and analysts moving into AI.",
  },
  "Data Analytics": {
    title: "Data Analytics",
    icon: BarChart3,
    duration: "8 Weeks",
    schedule: "Flexible",
    level: "Beginner to Intermediate",
    overview: "Turn organisational data into clear decisions with Excel, SQL, and dashboards.",
    whatYouWillLearn: [
      "Advanced Excel",
      "SQL querying",
      "Power BI / Tableau basics",
      "Python for wrangling",
    ],
    whatYouWillGain: [
      "Dashboard portfolio pieces",
      "Yimza Professional Training Certificate",
    ],
    audience: "Analysts, accountants, researchers, decision-makers.",
  },
  Cybersecurity: {
    title: "Cybersecurity",
    icon: ShieldCheck,
    duration: "10 Weeks",
    schedule: "Evening & Weekend",
    level: "Beginner to Intermediate",
    overview: "Defend systems and people against common cyber threats.",
    whatYouWillLearn: [
      "Networking and OS security",
      "Threat awareness and response",
      "Ethical hacking basics",
      "Security hygiene for organisations",
    ],
    whatYouWillGain: [
      "Hands-on lab experience",
      "Yimza Professional Training Certificate",
    ],
    audience: "IT admins and security enthusiasts.",
  },
  "Cloud Computing": {
    title: "Cloud Computing",
    icon: Cloud,
    duration: "8 Weeks",
    schedule: "Weekend Intensive",
    level: "Intermediate",
    overview: "Deploy and manage cloud infrastructure with AWS fundamentals and containers.",
    whatYouWillLearn: [
      "AWS core services",
      "Docker basics",
      "CI/CD introduction",
      "Cloud cost and security hygiene",
    ],
    whatYouWillGain: [
      "Cloud lab portfolio",
      "Yimza Professional Training Certificate",
    ],
    audience: "Developers and sysadmins scaling to cloud.",
  },
  "UI/UX Design": {
    title: "UI/UX Design",
    icon: Palette,
    duration: "8 Weeks",
    schedule: "Weekday & Weekend",
    level: "Beginner",
    overview: "Design usable product experiences in Figma.",
    whatYouWillLearn: [
      "User research basics",
      "Wireframing and IA",
      "Figma design systems",
      "Prototyping and handoff",
    ],
    whatYouWillGain: [
      "Case study portfolio",
      "Yimza Professional Training Certificate",
    ],
    audience: "Designers, PMs, and frontend developers.",
  },
  "Product Management": {
    title: "Product Management",
    icon: Layers,
    duration: "6 Weeks",
    schedule: "Weekend",
    level: "All Levels",
    overview: "Take products from discovery to delivery with agile practices.",
    whatYouWillLearn: [
      "Discovery and validation",
      "Agile / Scrum execution",
      "PRDs and roadmaps",
      "Metrics and prioritisation",
    ],
    whatYouWillGain: [
      "Capstone PRD",
      "Yimza Professional Training Certificate",
    ],
    audience: "Aspiring PMs and founders.",
  },
  "Digital Marketing": {
    title: "Digital Marketing",
    icon: Megaphone,
    duration: "6 Weeks",
    schedule: "Flexible Evening",
    level: "Beginner",
    overview: "Grow brands with SEO, social, ads, and email fundamentals.",
    whatYouWillLearn: [
      "SEO basics",
      "Paid ads foundations",
      "Content strategy",
      "Analytics intro",
    ],
    whatYouWillGain: [
      "Campaign practice",
      "Yimza Professional Training Certificate",
    ],
    audience: "Entrepreneurs, marketers, creators.",
  },
  "Research Methodology": {
    title: "Research Methodology",
    icon: BookOpenCheck,
    duration: "6 Weeks",
    schedule: "Flexible",
    level: "Intermediate to Advanced",
    overview: "Strengthen research design, analysis, and academic writing.",
    whatYouWillLearn: [
      "Problem formulation",
      "Literature review methods",
      "Quantitative / qualitative methods",
      "SPSS / R intro",
    ],
    whatYouWillGain: [
      "Research draft support",
      "Yimza Professional Training Certificate",
    ],
    audience: "Postgraduate scholars and lecturers.",
  },
  "ICT for Educators": {
    title: "ICT for Educators",
    icon: GraduationCap,
    duration: "4 Weeks",
    schedule: "Weekend / Evening",
    level: "Beginner",
    overview: "Use digital classrooms and teaching tools effectively.",
    whatYouWillLearn: [
      "LMS / Google Classroom",
      "AI assistants for lesson prep",
      "Interactive presentations",
      "Online assessment tools",
    ],
    whatYouWillGain: [
      "Digital educator toolkit",
      "Yimza Professional Training Certificate",
    ],
    audience: "Teachers and school administrators.",
  },
  "Computer Appreciation": {
    title: "Computer Appreciation",
    icon: Monitor,
    duration: "4 Weeks",
    schedule: "Weekday",
    level: "Beginner",
    overview: "Core digital literacy: Office suite, email, and safe browsing.",
    whatYouWillLearn: [
      "Hardware and OS basics",
      "Word, Excel, PowerPoint",
      "Email and cloud drives",
      "Online safety basics",
    ],
    whatYouWillGain: [
      "Digital literacy certificate",
      "Everyday computer confidence",
    ],
    audience: "Beginners and office support staff.",
  },
  "Corporate Digital Transformation": {
    title: "Corporate Digital Transformation",
    icon: Building2,
    duration: "Custom (4–8 Weeks)",
    schedule: "Tailored",
    level: "Corporate",
    overview: "Upskill teams and digitise workflows for digital-first operations.",
    whatYouWillLearn: [
      "Workflow automation tools",
      "Cloud collaboration",
      "Staff cybersecurity hygiene",
      "Change management basics",
    ],
    whatYouWillGain: [
      "Team competency report",
      "Process improvement map",
    ],
    audience: "Corporate teams and institutions.",
  },
};

const categoryList = Object.keys(programDetailsData);

export default function TrainingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    program: "Software Development",
    mode: "Physical (In-Person)",
    goals: "",
    agreed: false,
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [selectedProgramModal, setSelectedProgramModal] = useState<ProgramDetail | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      setError("Please accept the Training Terms & Conditions.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/training", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error || "Unable to submit. Try WhatsApp or email.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Network error. Please try again or use WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className="grid-bg" />

      <section className={styles.heroSection}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <span className={styles.badge}>Professional training</span>
              <h1 className={styles.title}>
                Register for practical <span className={styles.goldHighlight}>digital skills</span>
              </h1>
              <p className={styles.subtitle}>
                Fees and next intake dates are confirmed after a short intro call — so you know
                cost before you pay.
              </p>
              <p className={styles.description}>
                Programmes for students, professionals, educators, and teams. Delivered in Gusau,
                Abuja, and online.
              </p>

              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>
                    <GraduationCap size={18} />
                  </div>
                  <span>Expert trainers</span>
                </div>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>
                    <Laptop size={18} />
                  </div>
                  <span>Practical projects</span>
                </div>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>
                    <Award size={18} />
                  </div>
                  <span>Yimza certificate</span>
                </div>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>
                    <Clock size={18} />
                  </div>
                  <span>Online & physical</span>
                </div>
              </div>

              <div className={styles.imageWrapper}>
                <Image
                  src="/training_hero.png"
                  alt="Yimza professional training learners"
                  width={600}
                  height={300}
                  className={styles.heroImage}
                  priority
                />
              </div>

              <div className={styles.locationCard}>
                <MapPin size={28} className={styles.locationIcon} />
                <div>
                  <div className={styles.locationTitle}>Training locations</div>
                  <div className={styles.locationText}>{siteConfig.locations.join(" · ")}</div>
                </div>
              </div>
            </div>

            <div className={styles.formCard} id="registration-form">
              <div className={styles.formHeader}>
                <div className={styles.formHeaderIcon}>
                  <Send size={22} />
                </div>
                <div>
                  <h2 className={styles.formTitle}>Training registration</h2>
                  <p className={styles.formSub}>Seven fields. We confirm fees before payment.</p>
                </div>
              </div>

              {submitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>
                    <Check size={28} />
                  </div>
                  <h3>Registration received</h3>
                  <p>
                    Thank you, <strong>{formData.fullName}</strong>. We received your interest in{" "}
                    <strong>{formData.program}</strong>.
                  </p>
                  <p style={{ fontSize: "0.85rem", opacity: 0.85 }}>
                    Admissions will contact you via email ({formData.email})
                    {formData.whatsapp ? ` or WhatsApp (${formData.whatsapp})` : ""} with fees,
                    intake dates, and payment instructions.
                  </p>
                  <a
                    href={siteConfig.whatsappUrl}
                    className="btn btn-whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: 12 }}
                  >
                    Message us on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="visually-hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className={styles.formSection}>
                    <h3 className={styles.sectionHeading}>Your details</h3>
                    <div className={styles.fieldGrid}>
                      <div className={`${styles.inputGroup} ${styles.fieldGridFull}`}>
                        <label className={styles.label}>
                          Full name <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className={styles.input}
                        />
                      </div>
                      <div className={styles.inputGroup}>
                        <label className={styles.label}>
                          Email <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={styles.input}
                        />
                      </div>
                      <div className={styles.inputGroup}>
                        <label className={styles.label}>
                          Phone <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="080XXXXXXXX"
                          className={styles.input}
                        />
                        <span className={styles.helper}>
                          Used for enrolment confirmation and schedule updates.
                        </span>
                      </div>
                      <div className={`${styles.inputGroup} ${styles.fieldGridFull}`}>
                        <label className={styles.label}>WhatsApp (optional)</label>
                        <input
                          type="tel"
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          placeholder="Same as phone, or leave blank"
                          className={styles.input}
                        />
                        <span className={styles.helper}>
                          Optional. Recommended for faster confirmation in Nigeria.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.formSection}>
                    <h3 className={styles.sectionHeading}>Programme</h3>
                    <div className={styles.fieldGrid}>
                      <div className={`${styles.inputGroup} ${styles.fieldGridFull}`}>
                        <label className={styles.label}>
                          Training programme <span className={styles.required}>*</span>
                        </label>
                        <select
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          className={styles.select}
                          required
                        >
                          {siteConfig.trainingPrograms.map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className={`${styles.inputGroup} ${styles.fieldGridFull}`}>
                        <label className={styles.label}>Preferred mode</label>
                        <select
                          name="mode"
                          value={formData.mode}
                          onChange={handleChange}
                          className={styles.select}
                        >
                          <option value="Physical (In-Person)">Physical (In-Person)</option>
                          <option value="Online (Live Virtual)">Online (Live Virtual)</option>
                          <option value="Hybrid">Hybrid</option>
                        </select>
                      </div>
                      <div className={`${styles.inputGroup} ${styles.fieldGridFull}`}>
                        <label className={styles.label}>Learning goals (optional)</label>
                        <textarea
                          name="goals"
                          value={formData.goals}
                          onChange={handleChange}
                          placeholder="What do you want to achieve?"
                          className={styles.textarea}
                        />
                      </div>
                    </div>
                  </div>

                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="agreed"
                      checked={formData.agreed}
                      onChange={handleChange}
                      className={styles.checkbox}
                    />
                    <span>
                      I agree to the{" "}
                      <Link href="/training-terms" className={styles.termsLink}>
                        Training Terms
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className={styles.termsLink}>
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>

                  {error && <p className={styles.formError}>{error}</p>}

                  <button type="submit" disabled={submitting} className={styles.submitBtn}>
                    {submitting ? "Submitting..." : (
                      <>
                        <Send size={18} /> Submit registration
                      </>
                    )}
                  </button>
                  <p className={styles.formNote}>
                    Next step: we confirm fees and intake dates before payment instructions.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.whyHeader}>
            <span className="section-label">Why train with us</span>
            <h2 className={styles.whyTitle}>
              Built for practical <span className="gold-text">outcomes</span>
            </h2>
            <div className="gold-line center" />
          </div>
          <div className={styles.whyGrid}>
            {[
              {
                icon: Users,
                title: "Industry practitioners",
                desc: "Learn with trainers who work in academia and industry.",
              },
              {
                icon: Code2,
                title: "Hands-on projects",
                desc: "Build work you can show in a portfolio or workplace review.",
              },
              {
                icon: Clock,
                title: "Flexible delivery",
                desc: "Physical, online, or hybrid options around your schedule.",
              },
              {
                icon: Award,
                title: "Yimza certificate",
                desc: "Earn a Yimza Professional Training Certificate on completion.",
              },
              {
                icon: GraduationCap,
                title: "Career guidance",
                desc: "CV review and interview prep support on selected tracks.",
              },
              {
                icon: Building2,
                title: "Corporate cohorts",
                desc: "Custom programmes for organisations and institutions.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className={styles.whyCard}>
                <div className={styles.whyIconBox}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className={styles.whyCardTitle}>{title}</h3>
                  <p className={styles.whyCardDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.categoriesSection}>
        <div className="container">
          <div className={styles.categoriesHeader}>
            <span className="section-label">Programmes</span>
            <h2 className={styles.whyTitle}>
              Upcoming training <span className="gold-text">categories</span>
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#64748B", marginTop: 8 }}>
              Open a category for duration, level, and outcomes. Fees are confirmed after
              registration interest.
            </p>
            <div className="gold-line center" style={{ marginTop: 12 }} />
          </div>

          <div className={styles.categoriesGrid}>
            {categoryList.map((title) => {
              const detail = programDetailsData[title];
              const CatIcon = detail.icon;
              return (
                <div
                  key={title}
                  className={styles.categoryCard}
                  onClick={() => setSelectedProgramModal(detail)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setSelectedProgramModal(detail);
                  }}
                >
                  <div className={styles.categoryIcon}>
                    <CatIcon size={20} />
                  </div>
                  <div>
                    <div className={styles.categoryName}>{title}</div>
                    <div className={styles.categoryCardHint}>
                      View details <ChevronRight size={12} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PageCta variant="training" />

      {selectedProgramModal && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProgramModal(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderLeft}>
                <div className={styles.modalHeaderIcon}>
                  <selectedProgramModal.icon size={26} />
                </div>
                <div>
                  <h3 className={styles.modalTitle}>{selectedProgramModal.title}</h3>
                  <div className={styles.modalSubtitle}>Yimza Professional Training Track</div>
                </div>
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedProgramModal(null)}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalMetaGrid}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>
                    <Clock size={13} /> Duration
                  </span>
                  <span className={styles.metaVal}>{selectedProgramModal.duration}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>
                    <CalendarCheck size={13} /> Schedule
                  </span>
                  <span className={styles.metaVal}>{selectedProgramModal.schedule}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>
                    <Award size={13} /> Level
                  </span>
                  <span className={styles.metaVal}>{selectedProgramModal.level}</span>
                </div>
              </div>

              <div>
                <h4 className={styles.modalBlockTitle}>
                  <BookOpen size={18} className="gold-text" /> Overview
                </h4>
                <p className={styles.modalBlockDesc}>{selectedProgramModal.overview}</p>
              </div>

              <div>
                <h4 className={styles.modalBlockTitle}>
                  <Code2 size={18} className="gold-text" /> What you will learn
                </h4>
                <div className={styles.modalChecklist}>
                  {selectedProgramModal.whatYouWillLearn.map((item) => (
                    <div key={item} className={styles.checkItem}>
                      <CheckCircle2 size={16} className={styles.checkIcon} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className={styles.modalBlockTitle}>
                  <Trophy size={18} className="gold-text" /> What you will gain
                </h4>
                <div className={styles.modalChecklist}>
                  {selectedProgramModal.whatYouWillGain.map((item) => (
                    <div key={item} className={styles.checkItem}>
                      <Sparkles size={16} className={styles.checkIcon} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className={styles.modalBlockTitle}>
                  <Target size={18} className="gold-text" /> Who it is for
                </h4>
                <p className={styles.modalBlockDesc}>{selectedProgramModal.audience}</p>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button className="btn btn-outline" onClick={() => setSelectedProgramModal(null)}>
                Close
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    program: selectedProgramModal.title,
                  }));
                  setSelectedProgramModal(null);
                  document
                    .getElementById("registration-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Register for this programme <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
