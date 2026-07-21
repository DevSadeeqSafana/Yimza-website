"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  UserPlus, GraduationCap, Laptop, Award, Clock, MapPin, CheckCircle2,
  ArrowRight, Send, Users, Code2, BrainCircuit, BarChart3, ShieldCheck,
  Cloud, Palette, Layers, Megaphone, BookOpenCheck, Monitor, Building2,
  Check, FileText, CreditCard, CalendarCheck, Trophy, Sparkles, X,
  HelpCircle, BookOpen, Target, ChevronRight
} from "lucide-react";
import styles from "./training.module.css";

interface ProgramDetail {
  title: string;
  icon: any;
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
    duration: "12 Weeks (3 Months)",
    schedule: "Weekday & Weekend Options",
    level: "Beginner to Intermediate",
    overview: "Master modern web and software development using HTML, CSS, JavaScript/TypeScript, React, Next.js, and Node.js. Build production-grade full-stack web applications from scratch.",
    whatYouWillLearn: [
      "HTML5, CSS3, & Modern Responsive Layouts",
      "JavaScript ES6+, Async Programming, & DOM",
      "React.js Component Architecture & State",
      "Next.js App Router & SSR/SSG Techniques",
      "Node.js & Express RESTful API Development",
      "Databases: SQL (PostgreSQL) & MongoDB",
      "Git, GitHub, & CI/CD Deployment Workflows"
    ],
    whatYouWillGain: [
      "2 Production-Ready Portfolio Projects",
      "Yimza Certified Software Engineer Credential",
      "1-on-1 GitHub Code & Resume Review",
      "Direct Interview & Internship Mentorship"
    ],
    audience: "Students, graduates, and career switchers aiming to become full-stack software engineers."
  },
  "Artificial Intelligence": {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    duration: "10 Weeks",
    schedule: "Weekend & Evening",
    level: "Intermediate",
    overview: "Dive into practical AI & Machine Learning. Learn how to train models, build predictive software, work with LLMs, prompt engineering, and integrate AI APIs into modern software.",
    whatYouWillLearn: [
      "Python Programming for Data & AI",
      "Supervised & Unsupervised Machine Learning",
      "Neural Networks & Deep Learning Basics",
      "OpenAI, Hugging Face, & LLM API Integration",
      "Prompt Engineering & Vector Databases",
      "Computer Vision & NLP Fundamentals"
    ],
    whatYouWillGain: [
      "Custom AI Application Capstone Project",
      "Yimza AI & Machine Learning Specialist Certificate",
      "Hands-on Experience with Real Datasets",
      "AI Engineering Portfolio Highlights"
    ],
    audience: "Software developers, tech enthusiasts, and analysts wanting to specialize in AI."
  },
  "Data Analytics": {
    title: "Data Analytics",
    icon: BarChart3,
    duration: "8 Weeks",
    schedule: "Flexible Schedule",
    level: "Beginner to Intermediate",
    overview: "Transform raw organizational data into actionable business intelligence. Master data cleaning, statistical analysis, and interactive dashboard creation.",
    whatYouWillLearn: [
      "Advanced Microsoft Excel (Pivot Tables, DAX, Formulas)",
      "SQL Querying, Database Extraction, & Joins",
      "Power BI & Tableau Interactive Dashboarding",
      "Python for Data Wrangling (Pandas & Seaborn)",
      "Statistical Hypothesis Testing & BI Reporting"
    ],
    whatYouWillGain: [
      "Interactive PowerBI & Tableau Portfolio Dashboards",
      "Certified Data Analyst Credentials",
      "Business Intelligence Problem-Solving Frameworks"
    ],
    audience: "Business analysts, accountants, researchers, and decision-makers."
  },
  "Cybersecurity": {
    title: "Cybersecurity",
    icon: ShieldCheck,
    duration: "10 Weeks",
    schedule: "Evening & Weekend",
    level: "Beginner to Intermediate",
    overview: "Learn to defend systems, networks, and enterprise data against cyber threats. Gain practical experience in vulnerability assessment, threat intelligence, and ethical hacking.",
    whatYouWillLearn: [
      "Computer Networking & OS Security Protocols",
      "Threat Detection, SIEM, & Incident Response",
      "Ethical Hacking & Penetration Testing Basics",
      "Firewalls, VPNs, & Cryptography Essentials",
      "Security Auditing & Compliance Standards"
    ],
    whatYouWillGain: [
      "Practical Hands-on Security Sandbox Experience",
      "Cybersecurity Practitioner Certificate",
      "Vulnerability Audit Report Writing Skills"
    ],
    audience: "IT administrators, system network officers, and security enthusiasts."
  },
  "Cloud Computing": {
    title: "Cloud Computing",
    icon: Cloud,
    duration: "8 Weeks",
    schedule: "Weekend Intensive",
    level: "Intermediate",
    overview: "Architect, deploy, and manage scalable cloud infrastructure. Learn core concepts of AWS, Microsoft Azure, Docker containerization, and automated deployment pipelines.",
    whatYouWillLearn: [
      "AWS Core Services (EC2, S3, RDS, IAM, CloudFront)",
      "Docker Containerization & Microservices",
      "CI/CD Pipeline Setup (GitHub Actions)",
      "Cloud Security & Cost Optimization",
      "Infrastructure as Code (Terraform Basics)"
    ],
    whatYouWillGain: [
      "Deploys Scalable Cloud Infrastructure Portfolio",
      "Cloud Practitioner Certification Preparation",
      "Hands-on Lab Sandbox Credentials"
    ],
    audience: "DevOps engineers, SysAdmins, and software developers scaling to the cloud."
  },
  "UI/UX Design": {
    title: "UI/UX Design",
    icon: Palette,
    duration: "8 Weeks",
    schedule: "Weekday & Weekend",
    level: "Beginner",
    overview: "Design intuitive, accessible, and stunning user experiences for web and mobile apps using industry-standard tools like Figma.",
    whatYouWillLearn: [
      "User Research, Persona Mapping, & User Journeys",
      "Wireframing, Information Architecture, & UX Copy",
      "Figma Design Systems, Auto-Layout, & Tokens",
      "High-Fidelity Interactive Prototyping",
      "Usability Testing & Developer Handoff"
    ],
    whatYouWillGain: [
      "2 Complete UI/UX Mobile & Web Case Studies",
      "Interactive Figma Design System Portfolio",
      "Certified UI/UX Product Designer Credential"
    ],
    audience: "Creative designers, product managers, and frontend developers."
  },
  "Product Management": {
    title: "Product Management",
    icon: Layers,
    duration: "6 Weeks",
    schedule: "Weekend",
    level: "All Levels",
    overview: "Guide tech products from initial vision to market launch. Master user stories, sprint planning, product roadmaps, and agile development frameworks.",
    whatYouWillLearn: [
      "Product Discovery & Problem Validation",
      "Agile & Scrum Framework Execution",
      "Roadmapping & PRD Writing (Product Requirements)",
      "User Metrics, KPIs, OKRs, & Product Analytics",
      "Cross-Functional Team Leadership"
    ],
    whatYouWillGain: [
      "Complete Capstone Product Requirements Document (PRD)",
      "Certified Product Manager Credential",
      "Product Pitch Deck Template"
    ],
    audience: "Aspiring product managers, project leaders, and startup founders."
  },
  "Digital Marketing": {
    title: "Digital Marketing",
    icon: Megaphone,
    duration: "6 Weeks",
    schedule: "Flexible Evening",
    level: "Beginner",
    overview: "Grow brands and scale businesses using modern digital marketing strategies across SEO, social media, paid advertising, and email funnels.",
    whatYouWillLearn: [
      "Search Engine Optimization (SEO & Technical SEO)",
      "Meta Ads & Google Search/Display Campaigns",
      "Social Media Content Strategy & Copywriting",
      "Email Marketing Automation & Lead Funnels",
      "Google Analytics 4 & Performance Conversion"
    ],
    whatYouWillGain: [
      "Live Paid Ad Campaign Management Experience",
      "Digital Marketing Specialist Certificate",
      "Growth Strategy Blueprint for Businesses"
    ],
    audience: "Entrepreneurs, marketers, content creators, and sales professionals."
  },
  "Research Methodology": {
    title: "Research Methodology",
    icon: BookOpenCheck,
    duration: "6 Weeks",
    schedule: "Flexible",
    level: "Intermediate to Advanced",
    overview: "Master rigorous quantitative and qualitative research methodologies, academic paper writing techniques, and statistical data processing.",
    whatYouWillLearn: [
      "Research Problem Formulation & Hypotheses",
      "Literature Review Mapping & Citation Styles",
      "Quantitative & Qualitative Data Collection",
      "Statistical Processing with SPSS & R",
      "Academic Publishing & Proposal Defense Prep"
    ],
    whatYouWillGain: [
      "Publishable Research Paper Draft",
      "Advanced Research Methodology Certificate",
      "Statistical Analysis Code Repository"
    ],
    audience: "Postgraduate scholars, academic researchers, and lecturers."
  },
  "ICT for Educators": {
    title: "ICT for Educators",
    icon: GraduationCap,
    duration: "4 Weeks",
    schedule: "Weekend / Evening",
    level: "Beginner",
    overview: "Transform traditional teaching methods with modern educational technology. Learn how to use digital classrooms, AI teaching tools, and interactive content.",
    whatYouWillLearn: [
      "Google Classroom & LMS Management",
      "AI Assistants for Lesson Planning & Assessment",
      "Interactive Digital Presentation Tools",
      "Online Quiz & Evaluation Systems",
      "Safe Digital Learning Environment Guidelines"
    ],
    whatYouWillGain: [
      "Digital Educator Specialist Certificate",
      "Custom E-Learning Lesson Bank",
      "School ICT Integration Strategy"
    ],
    audience: "Teachers, lecturers, school administrators, and tutors."
  },
  "Computer Appreciation": {
    title: "Computer Appreciation",
    icon: Monitor,
    duration: "4 Weeks",
    schedule: "Weekday Morning & Afternoon",
    level: "Beginner",
    overview: "Build strong digital literacy foundations. Learn essential computer operation, typing, Microsoft Office Suite, and safe internet browsing.",
    whatYouWillLearn: [
      "Computer Systems Hardware & OS Basics",
      "Microsoft Word Document Formatting",
      "Microsoft Excel Spreadsheet Essentials",
      "PowerPoint Presentation Design",
      "Safe Internet Browsing, Email, & Cloud Drive"
    ],
    whatYouWillGain: [
      "Digital Literacy Certificate",
      "Essential Office Computer Efficiency",
      "Confidence operating computer hardware & software"
    ],
    audience: "Beginners, office support staff, and individuals seeking core IT literacy."
  },
  "Corporate Digital Transformation": {
    title: "Corporate Digital Transformation",
    icon: Building2,
    duration: "Custom (4 to 8 Weeks)",
    schedule: "Tailored Executive Hours",
    level: "Corporate Leadership",
    overview: "Accelerate organizational efficiency by digitizing business workflows, adopting cloud solutions, and upskilling staff for digital-first operations.",
    whatYouWillLearn: [
      "Enterprise Workflow Automation Tools",
      "Cloud Collaboration (Google Workspace / Slack / Teams)",
      "Cybersecurity Hygiene for Employees",
      "Digital Change Management & Productivity KPIs",
      "Customer Relationship Management (CRM) Usage"
    ],
    whatYouWillGain: [
      "Corporate Digital Maturity Audit Report",
      "Employee Tech Competency Certification",
      "Optimized Business Process Workflow Map"
    ],
    audience: "Executive teams, corporate departments, and government institutions."
  }
};

const programsList = [
  "Software Development",
  "Artificial Intelligence",
  "Data Analytics",
  "Cybersecurity",
  "Cloud Computing",
  "UI/UX Design",
  "Product Management",
  "Digital Marketing",
  "Research Methodology",
  "ICT for Educators",
  "Computer Appreciation",
  "Corporate Digital Transformation",
];

const statesInNigeria = [
  "Zamfara", "FCT Abuja", "Lagos", "Kano", "Kaduna", "Sokoto", "Katsina",
  "Kebbi", "Rivers", "Oyo", "Enugu", "Delta", "Edo", "Plateau", "Nasarawa", "Other"
];

export default function TrainingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    gender: "",
    dob: "",
    state: "Zamfara",
    lga: "",
    address: "",
    occupation: "",
    institution: "",
    qualification: "",
    program: "Software Development",
    mode: "Physical (In-Person)",
    schedule: "Weekday Morning",
    experience: "Beginner",
    source: "",
    goals: "",
    agreed: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedProgramModal, setSelectedProgramModal] = useState<ProgramDetail | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please accept the Training Terms & Conditions to proceed.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleOpenProgramModal = (title: string) => {
    const details = programDetailsData[title];
    if (details) {
      setSelectedProgramModal(details);
    }
  };

  const handleRegisterFromModal = (programTitle: string) => {
    setFormData((prev) => ({ ...prev, program: programTitle }));
    setSelectedProgramModal(null);
    const formElement = document.getElementById("registration-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* Background decor */}
      <div className="grid-bg" />

      {/* Hero & Registration Form Main Section */}
      <section className={styles.heroSection}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={styles.heroGrid}>
            
            {/* Left Hero Content */}
            <div className={styles.heroLeft}>
              <span className={styles.badge}>PROFESSIONAL TRAINING</span>
              <h1 className={styles.title}>
                Register for Professional <br />
                <span className={styles.goldHighlight}>Training</span>
              </h1>
              <p className={styles.subtitle}>
                Advance your career with industry-relevant digital skills.
              </p>
              <p className={styles.description}>
                Whether you&apos;re a student, graduate, teacher, civil servant, entrepreneur, or corporate professional, our hands-on training programs are designed to equip you with practical skills demanded by today&apos;s digital economy.
              </p>

              {/* Highlights Checklist */}
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}><GraduationCap size={18} /></div>
                  <span>Expert Trainers</span>
                </div>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}><Laptop size={18} /></div>
                  <span>Practical Projects</span>
                </div>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}><Award size={18} /></div>
                  <span>Industry Certificates</span>
                </div>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}><Clock size={18} /></div>
                  <span>Flexible Learning (Online &amp; Physical)</span>
                </div>
              </div>

              {/* Hero Image Graphic */}
              <div className={styles.imageWrapper}>
                <Image
                  src="/training_hero.png"
                  alt="Yimza Professional Training Learners"
                  width={600}
                  height={300}
                  className={styles.heroImage}
                  priority
                />
              </div>

              {/* Training Location Card */}
              <div className={styles.locationCard}>
                <MapPin size={28} className={styles.locationIcon} />
                <div>
                  <div className={styles.locationTitle}>Training Locations:</div>
                  <div className={styles.locationText}>Gusau, Abuja &amp; Online</div>
                </div>
              </div>
            </div>

            {/* Right Registration Form */}
            <div className={styles.formCard} id="registration-form">
              <div className={styles.formHeader}>
                <div className={styles.formHeaderIcon}>
                  <UserPlus size={24} />
                </div>
                <div>
                  <h2 className={styles.formTitle}>Training Registration Form</h2>
                  <p className={styles.formSub}>Fill in your details to get started</p>
                </div>
              </div>

              {submitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>
                    <Check size={28} />
                  </div>
                  <h3>Registration Submitted Successfully!</h3>
                  <p>
                    Thank you, <strong>{formData.fullName}</strong>. We have received your registration for <strong>{formData.program}</strong>.
                  </p>
                  <p style={{ fontSize: "0.85rem", opacity: 0.85 }}>
                    Our admissions team will contact you via Email (<strong>{formData.email}</strong>) or WhatsApp (<strong>{formData.whatsapp || formData.phone}</strong>) with enrollment confirmation and payment details.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        whatsapp: "",
                        gender: "",
                        dob: "",
                        state: "Zamfara",
                        lga: "",
                        address: "",
                        occupation: "",
                        institution: "",
                        qualification: "",
                        program: "Software Development",
                        mode: "Physical (In-Person)",
                        schedule: "Weekday Morning",
                        experience: "Beginner",
                        source: "",
                        goals: "",
                        agreed: false,
                      });
                    }}
                    className="btn btn-primary"
                    style={{ marginTop: "12px" }}
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Section 1: Personal Information */}
                  <div className={styles.formSection}>
                    <h3 className={styles.sectionHeading}>PERSONAL INFORMATION</h3>
                    <div className={styles.fieldGrid}>
                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Full Name <span className={styles.required}>*</span></label>
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
                        <label className={styles.label}>Email Address <span className={styles.required}>*</span></label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className={styles.input}
                        />
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Phone Number <span className={styles.required}>*</span></label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="080XXXXXXXX"
                          className={styles.input}
                        />
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.label}>WhatsApp Number <span className={styles.required}>*</span></label>
                        <input
                          type="tel"
                          name="whatsapp"
                          required
                          value={formData.whatsapp}
                          onChange={handleChange}
                          placeholder="080XXXXXXXX"
                          className={styles.input}
                        />
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Gender</label>
                        <select name="gender" value={formData.gender} onChange={handleChange} className={styles.select}>
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Date of Birth</label>
                        <input
                          type="date"
                          name="dob"
                          value={formData.dob}
                          onChange={handleChange}
                          className={styles.input}
                        />
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.label}>State</label>
                        <select name="state" value={formData.state} onChange={handleChange} className={styles.select}>
                          <option value="">Select State</option>
                          {statesInNigeria.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Local Government Area</label>
                        <input
                          type="text"
                          name="lga"
                          value={formData.lga}
                          onChange={handleChange}
                          placeholder="Select LGA / Enter LGA"
                          className={styles.input}
                        />
                      </div>

                      <div className={`${styles.inputGroup} ${styles.fieldGridFull}`}>
                        <label className={styles.label}>Residential Address</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Enter your address"
                          className={styles.input}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Professional Information */}
                  <div className={styles.formSection}>
                    <h3 className={styles.sectionHeading}>PROFESSIONAL INFORMATION</h3>
                    <div className={styles.fieldGrid}>
                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Occupation</label>
                        <input
                          type="text"
                          name="occupation"
                          value={formData.occupation}
                          onChange={handleChange}
                          placeholder="Your occupation"
                          className={styles.input}
                        />
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Institution / Organization</label>
                        <input
                          type="text"
                          name="institution"
                          value={formData.institution}
                          onChange={handleChange}
                          placeholder="Your institution/organization"
                          className={styles.input}
                        />
                      </div>

                      <div className={`${styles.inputGroup} ${styles.fieldGridFull}`}>
                        <label className={styles.label}>Highest Qualification</label>
                        <select name="qualification" value={formData.qualification} onChange={handleChange} className={styles.select}>
                          <option value="">Select Qualification</option>
                          <option value="Secondary School (SSCE)">Secondary School (SSCE)</option>
                          <option value="OND / HND">OND / HND</option>
                          <option value="Bachelor's Degree (B.Sc / B.Tech)">Bachelor&apos;s Degree (B.Sc / B.Tech)</option>
                          <option value="Master's Degree (M.Sc / MBA)">Master&apos;s Degree (M.Sc / MBA)</option>
                          <option value="Ph.D.">Ph.D.</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Select Training Program */}
                  <div className={styles.formSection}>
                    <h3 className={styles.sectionHeading}>SELECT TRAINING PROGRAM</h3>
                    <div className={styles.fieldGrid}>
                      <div className={`${styles.inputGroup} ${styles.fieldGridFull}`}>
                        <label className={styles.label}>Training Program <span className={styles.required}>*</span></label>
                        <select name="program" value={formData.program} onChange={handleChange} className={styles.select} required>
                          <option value="">Select Training Program</option>
                          {programsList.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Preferred Learning Mode</label>
                        <select name="mode" value={formData.mode} onChange={handleChange} className={styles.select}>
                          <option value="Physical (In-Person)">Physical (In-Person)</option>
                          <option value="Online (Live Virtual)">Online (Live Virtual)</option>
                          <option value="Hybrid">Hybrid</option>
                        </select>
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Preferred Schedule</label>
                        <select name="schedule" value={formData.schedule} onChange={handleChange} className={styles.select}>
                          <option value="Weekday Morning">Weekday Morning</option>
                          <option value="Weekday Evening">Weekday Evening</option>
                          <option value="Weekend Intensive">Weekend Intensive</option>
                        </select>
                      </div>

                      <div className={`${styles.inputGroup} ${styles.fieldGridFull}`}>
                        <label className={styles.label}>Experience Level</label>
                        <select name="experience" value={formData.experience} onChange={handleChange} className={styles.select}>
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Source */}
                  <div className={styles.formSection}>
                    <h3 className={styles.sectionHeading}>HOW DID YOU HEAR ABOUT US?</h3>
                    <div className={styles.inputGroup}>
                      <select name="source" value={formData.source} onChange={handleChange} className={styles.select}>
                        <option value="">Select an option</option>
                        <option value="Social Media (Facebook / LinkedIn / X)">Social Media (Facebook / LinkedIn / X)</option>
                        <option value="Friend / Referral">Friend / Referral</option>
                        <option value="Search Engine (Google)">Search Engine (Google)</option>
                        <option value="Billboard / Flyer">Billboard / Flyer</option>
                        <option value="School or Office Recommendation">School or Office Recommendation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Section 5: Additional Info */}
                  <div className={styles.formSection}>
                    <h3 className={styles.sectionHeading}>ADDITIONAL INFORMATION</h3>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Special learning goals or expectations</label>
                      <textarea
                        name="goals"
                        value={formData.goals}
                        onChange={handleChange}
                        placeholder="Tell us what you hope to achieve..."
                        className={styles.textarea}
                      />
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
                        I agree to the Training <a href="#" className={styles.termsLink}>Terms &amp; Conditions</a>.
                      </span>
                    </label>
                  </div>

                  <button type="submit" disabled={submitting} className={styles.submitBtn}>
                    {submitting ? "Processing Application..." : (
                      <>
                        <Send size={18} /> Register Now
                      </>
                    )}
                  </button>

                  <p className={styles.formNote}>
                    You will be redirected to complete your registration and payment.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Why Train with YIMZA Section */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.whyHeader}>
            <span className="section-label">WHY CHOOSE OUR PROGRAMS</span>
            <h2 className={styles.whyTitle}>
              Why Train with <span className="gold-text">YIMZA?</span>
            </h2>
            <div className="gold-line center" />
          </div>

          <div className={styles.whyGrid}>
            {[
              {
                icon: Users,
                title: "Industry Experts",
                desc: "Learn from experienced professionals working in academia and industry with real-world experience."
              },
              {
                icon: Code2,
                title: "Hands-on Projects",
                desc: "Build practical, production-ready projects you can directly showcase in your professional portfolio."
              },
              {
                icon: Clock,
                title: "Flexible Learning",
                desc: "Attend online or physical classes designed to fit around your work or academic schedule."
              },
              {
                icon: Award,
                title: "Certification",
                desc: "Receive a globally recognized professional certificate upon successful completion of assessments."
              },
              {
                icon: GraduationCap,
                title: "Career Support",
                desc: "Access 1-on-1 mentoring, CV review, interview preparation, and direct internship opportunities."
              },
              {
                icon: Building2,
                title: "Corporate Training",
                desc: "Customized digital skills programs designed for organizations, schools, and government institutions."
              }
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className={styles.whyCard}>
                <div className={styles.whyIconBox}>
                  <Icon size={24} />
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

      {/* Training Process Section */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.processHeader}>
            <span className="section-label">YOUR ROADMAP TO SUCCESS</span>
            <h2 className={styles.processTitle}>
              Training <span className="gold-text">Process</span>
            </h2>
            <div className="gold-line center" />
          </div>

          <div className={styles.processStepsGrid}>
            {[
              { num: 1, icon: FileText, title: "Register", desc: "Complete the online registration form." },
              { num: 2, icon: Send, title: "Confirmation", desc: "Receive confirmation via email or WhatsApp." },
              { num: 3, icon: CreditCard, title: "Payment", desc: "Complete your payment securely." },
              { num: 4, icon: CalendarCheck, title: "Join Training", desc: "Receive class schedule and learning materials." },
              { num: 5, icon: Laptop, title: "Complete Projects", desc: "Participate in practical sessions and assessments." },
              { num: 6, icon: Trophy, title: "Earn Certificate", desc: "Receive a YIMZA Professional Training Certificate." },
            ].map(({ num, icon: StepIcon, title, desc }, index, array) => (
              <div key={num} className={styles.processStepCard}>
                <div className={styles.stepCircleWrapper}>
                  <div className={styles.stepCircle}>
                    <StepIcon size={24} />
                  </div>
                  <div className={styles.stepNumber}>{num}</div>
                </div>

                {index < array.length - 1 && (
                  <ArrowRight className={styles.stepArrow} size={20} />
                )}

                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Training Categories Section */}
      <section className={styles.categoriesSection}>
        <div className="container">
          <div className={styles.categoriesHeader}>
            <span className="section-label">CURATED LEARNING PATHWAYS</span>
            <h2 className={styles.whyTitle}>
              Upcoming Training <span className="gold-text">Categories</span>
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#64748B", marginTop: "8px" }}>
              Click on any training category below to view detailed curriculum, duration, and key learning outcomes.
            </p>
            <div className="gold-line center" style={{ marginTop: "12px" }} />
          </div>

          <div className={styles.categoriesGrid}>
            {[
              { title: "Software Development", icon: Code2 },
              { title: "Artificial Intelligence", icon: BrainCircuit },
              { title: "Data Analytics", icon: BarChart3 },
              { title: "Cybersecurity", icon: ShieldCheck },
              { title: "Cloud Computing", icon: Cloud },
              { title: "UI/UX Design", icon: Palette },
              { title: "Product Management", icon: Layers },
              { title: "Digital Marketing", icon: Megaphone },
              { title: "Research Methodology", icon: BookOpenCheck },
              { title: "ICT for Educators", icon: GraduationCap },
              { title: "Computer Appreciation", icon: Monitor },
              { title: "Corporate Digital Transformation", icon: Building2 },
            ].map(({ title, icon: CatIcon }) => (
              <div
                key={title}
                className={styles.categoryCard}
                onClick={() => handleOpenProgramModal(title)}
                role="button"
                tabIndex={0}
              >
                <div className={styles.categoryIcon}>
                  <CatIcon size={20} />
                </div>
                <div>
                  <div className={styles.categoryName}>{title}</div>
                  <div className={styles.categoryCardHint}>
                    View Details <ChevronRight size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Callout Banner */}
      <section className={styles.ctaBannerSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaBoxIcon}>
              <GraduationCap size={36} />
            </div>
            <div className={styles.ctaTextGroup}>
              <h2 className={styles.ctaTitle}>Ready to Build Your Digital Skills?</h2>
              <p className={styles.ctaSubtitle}>
                Join hundreds of learners transforming their career through YIMZA Consultancy Services Ltd.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a href="#registration-form" className={styles.ctaGoldBtn}>
                Register Today <ArrowRight size={16} />
              </a>
              <Link href="/contact" className={styles.ctaOutlineBtn}>
                Request Corporate Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Interactive Modal */}
      {selectedProgramModal && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProgramModal(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderLeft}>
                <div className={styles.modalHeaderIcon}>
                  {selectedProgramModal.icon && <selectedProgramModal.icon size={26} />}
                </div>
                <div>
                  <h3 className={styles.modalTitle}>{selectedProgramModal.title}</h3>
                  <div className={styles.modalSubtitle}>Yimza Professional Certification Track</div>
                </div>
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedProgramModal(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className={styles.modalBody}>
              {/* Meta Grid */}
              <div className={styles.modalMetaGrid}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}><Clock size={13} /> Duration</span>
                  <span className={styles.metaVal}>{selectedProgramModal.duration}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}><CalendarCheck size={13} /> Schedule</span>
                  <span className={styles.metaVal}>{selectedProgramModal.schedule}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}><Award size={13} /> Experience Level</span>
                  <span className={styles.metaVal}>{selectedProgramModal.level}</span>
                </div>
              </div>

              {/* Course Overview */}
              <div>
                <h4 className={styles.modalBlockTitle}><BookOpen size={18} className="gold-text" /> Course Overview</h4>
                <p className={styles.modalBlockDesc}>{selectedProgramModal.overview}</p>
              </div>

              {/* What You Will Learn */}
              <div>
                <h4 className={styles.modalBlockTitle}><Code2 size={18} className="gold-text" /> What You Will Learn</h4>
                <div className={styles.modalChecklist}>
                  {selectedProgramModal.whatYouWillLearn.map((item) => (
                    <div key={item} className={styles.checkItem}>
                      <CheckCircle2 size={16} className={styles.checkIcon} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You Will Gain */}
              <div>
                <h4 className={styles.modalBlockTitle}><Trophy size={18} className="gold-text" /> What You Will Gain</h4>
                <div className={styles.modalChecklist}>
                  {selectedProgramModal.whatYouWillGain.map((item) => (
                    <div key={item} className={styles.checkItem}>
                      <Sparkles size={16} className={styles.checkIcon} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who Should Attend */}
              <div>
                <h4 className={styles.modalBlockTitle}><Target size={18} className="gold-text" /> Target Audience</h4>
                <p className={styles.modalBlockDesc}>{selectedProgramModal.audience}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className={styles.modalFooter}>
              <button
                className="btn btn-outline"
                onClick={() => setSelectedProgramModal(null)}
              >
                Close Details
              </button>
              <button
                className="btn btn-primary"
                onClick={() => handleRegisterFromModal(selectedProgramModal.title)}
              >
                Register for {selectedProgramModal.title} <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
