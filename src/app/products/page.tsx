"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Shield, GraduationCap, CheckCircle2,
  Settings, Layers, RefreshCw, Smartphone, BarChart3, Database,
  ArrowRight, Activity, Calendar, FileText, ShoppingCart, UserCheck, BookOpen, CreditCard, Laptop
} from "lucide-react";
import styles from "./products.module.css";

const yimzaCareModules = [
  {
    icon: FileText,
    title: "Electronic Medical Records (EMR)",
    desc: "A highly secure database that tracks complete patient journeys. Store clinical histories, laboratory results, past prescriptions, and diagnostic notes in compliance with medical data privacy standard practices.",
    features: ["Clinical templates for doctors", "ICD-10 diagnostic coding support", "Vitals history charts", "Lab and imaging order logging"]
  },
  {
    icon: Calendar,
    title: "Smart Appointment & Queue Engine",
    desc: "Optimize doctor schedules and reduce patient wait times. Patients can book slots online, which dynamically populate the department waitlist. The system automatically alerts patients via SMS/email.",
    features: ["Physician slot configurator", "Walk-in & online reservation merge", "Real-time queue dashboards", "Automated appointment reminders"]
  },
  {
    icon: ShoppingCart,
    title: "Pharmacy & Inventory Suite",
    desc: "Avoid critical stock-outs with live pharmacy inventory management. Monitor drug batches, track purchase invoice records, and configure auto-reorder thresholds for critical medications.",
    features: ["Batch expiration date alerts", "Prescription fulfillment checks", "Supplier purchase order logs", "Multi-store pharmacy tracking"]
  },
  {
    icon: Activity,
    title: "Ward & Bed Allocation Manager",
    desc: "Provide clinical staff with a visual dashboard of ward occupancy. Seamlessly track patient admission timelines, record daily doctor visits, and automate billing calculations based on ward types.",
    features: ["Visual bed status panels", "Ward nurse duty logs", "Ward transfer history records", "Discharge clearance workflows"]
  }
];

const yimzaEduModules = [
  {
    icon: UserCheck,
    title: "Unified Student Information Registry",
    desc: "A secure repository storing student files from initial application to graduation. Generate digital transcripts, track student disciplinary notes, and maintain full family-student mapping.",
    features: ["Digital application pipeline", "Biodata & medical record storage", "Alumni tracking database", "Automatic student ID generator"]
  },
  {
    icon: BookOpen,
    title: "Academic Gradebooks & Exams",
    desc: "Simplify terminal reporting for teachers. Define customized grading rubrics, record continuous assessment scores, calculate GPAs, and export premium PDF report sheets with a single click.",
    features: ["Custom grading scale builder", "Mass grade entry interfaces", "Subject performance analytics", "Parent/Student grade release control"]
  },
  {
    icon: CreditCard,
    title: "Fee Collections & Billing Auditor",
    desc: "Automate tuition collection and reduce administrative overhead. Send automated fee invoices to parent emails, accept payments via credit cards or mobile banking, and generate daily reconciliation logs.",
    features: ["Installment payment plans", "Automated late fee alerts", "Bank statement reconcilers", "Auditable revenue dashboards"]
  },
  {
    icon: Smartphone,
    title: "Parent & Teacher Portal Apps",
    desc: "Bridge the communication gap. Parents can track attendance, download newsletters, view invoices, and message teachers directly through secure, cross-device portals.",
    features: ["Attendance tracking alerts", "Assignment submission panels", "School calendar updates", "In-app direct messaging logs"]
  }
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<"care" | "edu">("care");

  return (
    <div className={styles.wrapper}>
      {/* Hero Header */}
      <section className={styles.hero}>
        <div className="grid-bg" style={{ opacity: 0.2 }} />
        <div className="container">
          <div className={styles.heroInner}>
            <span className="badge animate-fade-up">Enterprise-Grade Systems</span>
            <h1 className={styles.title}>
              White-Labelable <span>Management Platforms</span> Built for Scale
            </h1>
            <p className={styles.subtitle}>
              We develop robust, responsive management systems designed to simplify complex operational workflows. Easily adapt, customize, and white-label our products to elevate your organization&apos;s digital experience.
            </p>
            <div className={styles.heroActions}>
              <button 
                onClick={() => {
                  setActiveTab("care");
                  document.getElementById("modules-section")?.scrollIntoView({ behavior: "smooth" });
                }} 
                className={`btn ${activeTab === "care" ? "btn-primary" : "btn-outline"}`}
              >
                YimzaCare (HMS)
              </button>
              <button 
                onClick={() => {
                  setActiveTab("edu");
                  document.getElementById("modules-section")?.scrollIntoView({ behavior: "smooth" });
                }} 
                className={`btn ${activeTab === "edu" ? "btn-primary" : "btn-outline"}`}
              >
                YimzaEdu (SMS)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tabbed Core Modules Section */}
      <section className={styles.modulesSection} id="modules-section">
        <div className="container">
          <div className={styles.tabsHeader}>
            <span className="section-label">System Breakdown</span>
            <div className="gold-line center" />
            <h2 className="section-title text-center" style={{ textAlign: "center" }}>
              Explore <span>Core System</span> Modules
            </h2>
            <p className="section-subtitle text-center" style={{ margin: "16px auto 0", textAlign: "center" }}>
              Click on a platform below to inspect the deep architectural modules and workflows engineered for each system.
            </p>
          </div>

          {/* Tabs Selector */}
          <div className={styles.tabsSelector}>
            <button 
              className={`${styles.tabBtn} ${activeTab === "care" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("care")}
            >
              <Shield size={18} /> YimzaCare (Hospital Management)
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === "edu" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("edu")}
            >
              <GraduationCap size={18} /> YimzaEdu (School Management)
            </button>
          </div>

          {/* YimzaCare Platform Details */}
          {activeTab === "care" && (
            <div className={styles.platformDetails}>
              <div className={styles.platformHeader}>
                <div className={styles.platformLogoCol}>
                  <Image 
                    src="/YimzaCare.jpeg" 
                    alt="YimzaCare HMS Logo" 
                    width={180} 
                    height={180} 
                    className={styles.productLogo}
                    priority
                  />
                  <div className={styles.accentBadge}>
                    <Shield size={14} />
                    <span>Secure & HIPAA-Compliant</span>
                  </div>
                </div>
                <div className={styles.platformDescCol}>
                  <span className={styles.tag}>Clinical Ecosystem</span>
                  <h3 className={styles.platformName}>YimzaCare HMS</h3>
                  <p className={styles.platformText}>
                    YimzaCare is a comprehensive hospital information management platform designed to automate clinical, financial, and inventory processes. It provides medical directors, doctors, nurses, and pharmacists with unified patient dashboards, ensuring clinical decisions are backed by real-time health metrics.
                  </p>
                </div>
              </div>

              {/* Modules Grid */}
              <div className={styles.modulesGrid}>
                {yimzaCareModules.map((mod) => {
                  const Icon = mod.icon;
                  return (
                    <div key={mod.title} className={styles.moduleCard}>
                      <div className={styles.moduleHeader}>
                        <div className={styles.iconBox}>
                          <Icon size={20} />
                        </div>
                        <h4>{mod.title}</h4>
                      </div>
                      <p className={styles.moduleDesc}>{mod.desc}</p>
                      <ul className={styles.subFeatures}>
                        {mod.features.map((feat) => (
                          <li key={feat}>
                            <CheckCircle2 size={13} className={styles.checkIcon} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* YimzaEdu Platform Details */}
          {activeTab === "edu" && (
            <div className={styles.platformDetails}>
              <div className={styles.platformHeader}>
                <div className={styles.platformLogoCol}>
                  <Image 
                    src="/YimzaEdu.jpeg" 
                    alt="YimzaEdu SMS Logo" 
                    width={180} 
                    height={180} 
                    className={styles.productLogo}
                  />
                  <div className={styles.accentBadge}>
                    <GraduationCap size={14} />
                    <span>Next-Gen Academic Engine</span>
                  </div>
                </div>
                <div className={styles.platformDescCol}>
                  <span className={styles.tag}>Educational Portal</span>
                  <h3 className={styles.platformName}>YimzaEdu SMS</h3>
                  <p className={styles.platformText}>
                    YimzaEdu is a robust school information system engineered to unify administrators, teachers, parents, and students. By automating tuition invoicing, gradebook compilations, and parent attendance alerts, it allows educational institutions to refocus resources on pedagogical success.
                  </p>
                </div>
              </div>

              {/* Modules Grid */}
              <div className={styles.modulesGrid}>
                {yimzaEduModules.map((mod) => {
                  const Icon = mod.icon;
                  return (
                    <div key={mod.title} className={styles.moduleCard}>
                      <div className={styles.moduleHeader}>
                        <div className={styles.iconBox}>
                          <Icon size={20} />
                        </div>
                        <h4>{mod.title}</h4>
                      </div>
                      <p className={styles.moduleDesc}>{mod.desc}</p>
                      <ul className={styles.subFeatures}>
                        {mod.features.map((feat) => (
                          <li key={feat}>
                            <CheckCircle2 size={13} className={styles.checkIcon} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* White-Label Capabilities Section */}
      <section className={styles.whiteLabelSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-label">Adaptable & Rebranding Ready</span>
            <div className="gold-line center" />
            <h2 className="section-title text-center" style={{ textAlign: "center" }}>
              Our <span>White-Labeling</span> Advantage
            </h2>
            <p className="section-subtitle text-center" style={{ margin: "16px auto 0", textAlign: "center" }}>
              All our software packages are designed to act as starting frameworks that can be fully customized, white-labeled, and adapted to meet unique client-specific corporate workflows.
            </p>
          </div>

          <div className={styles.wlGrid}>
            <div className={styles.wlCard}>
              <div className={styles.wlIconBox}>
                <Settings size={22} />
              </div>
              <h4>Custom Brand Identity</h4>
              <p>Rebrand our management platforms entirely with your institution&apos;s logo, themes, favicons, corporate colors, and visual styling.</p>
            </div>
            
            <div className={styles.wlCard}>
              <div className={styles.wlIconBox}>
                <Layers size={22} />
              </div>
              <h4>Modular Adaptability</h4>
              <p>Opt to add custom features, specific analytics reporting layouts, or third-party CRM integration models to perfectly suit your operations.</p>
            </div>
            
            <div className={styles.wlCard}>
              <div className={styles.wlIconBox}>
                <Smartphone size={22} />
              </div>
              <h4>Multi-Device Layout</h4>
              <p>Your custom system runs flawlessly across smartphones, tablets, laptops, and desktop browsers with reactive layouts.</p>
            </div>
            
            <div className={styles.wlCard}>
              <div className={styles.wlIconBox}>
                <Database size={22} />
              </div>
              <h4>Private Cloud Hosting</h4>
              <p>We deploy your white-labeled application on completely isolated servers or private clouds, ensuring strict data sovereignty and compliance.</p>
            </div>
            
            <div className={styles.wlCard}>
              <div className={styles.wlIconBox}>
                <BarChart3 size={22} />
              </div>
              <h4>Bespoke Reports</h4>
              <p>We build customized reporting templates, metrics tracking grids, and key performance dashboards matching your audit requirements.</p>
            </div>
            
            <div className={styles.wlCard}>
              <div className={styles.wlIconBox}>
                <RefreshCw size={22} />
              </div>
              <h4>Continuous Support</h4>
              <p>Enjoy direct priority server monitoring, technical system backups, updates patching, and ongoing advisory workshops.</p>
            </div>
          </div>

          {/* White-Label Customization Process Roadmap */}
          <div className={styles.processRoadmap}>
            <h3 className={styles.roadmapTitle}>Rebranding & Customization Journey</h3>
            <div className={styles.roadmapSteps}>
              {[
                { t: "1. Audit Consultation", d: "We review your business logic, specific department workflows, and brand identity guides." },
                { t: "2. Visual Mocking", d: "Our design team creates interactive mocks of the rebranded UI with your logo and colors." },
                { t: "3. Modular Integration", d: "Yimza developers integrate custom database fields, local payment APIs, and unique modules." },
                { t: "4. Sandbox Validation", d: "We deploy the custom build to a testing server where your staff runs audit verification checks." },
                { t: "5. Private Cloud Launch", d: "Your platform is deployed on private, secure cloud instances with active backups and SLA monitoring." }
              ].map((step, index) => (
                <div key={step.t} className={styles.roadmapStep}>
                  <div className={styles.roadmapStepNum}>{index + 1}</div>
                  <div className={styles.roadmapStepInfo}>
                    <h5>{step.t}</h5>
                    <p>{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2>Ready to Adapt Yimza Platforms to Your Business Needs?</h2>
            <p>Our expert developers are on standby to deploy a rebranded, highly functional instance of YimzaCare or YimzaEdu tailored specifically to your organization.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn-primary">Schedule a Live Demo</Link>
              <Link href="/contact" className="btn btn-outline" style={{ borderColor: "var(--white)", color: "var(--white)" }}>Talk to an IT Architect</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
