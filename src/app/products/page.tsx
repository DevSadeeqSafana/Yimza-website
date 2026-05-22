"use client";
import Image from "next/image";
import Link from "next/link";
import { 
  Shield, GraduationCap, CheckCircle2,
  Settings, Layers, RefreshCw, Smartphone, BarChart3, Database 
} from "lucide-react";
import styles from "./products.module.css";

export default function ProductsPage() {
  return (
    <div className={styles.wrapper}>
      {/* Hero Header */}
      <section className={styles.hero}>
        <div className="grid-bg" style={{ opacity: 0.2 }} />
        <div className="container">
          <div className={styles.heroInner}>
            <span className="badge animate-fade-up">Enterprise-Grade Solutions</span>
            <h1 className={styles.title}>
              White-Labelable <span>Management Systems</span> Built for Scale
            </h1>
            <p className={styles.subtitle}>
              We develop robust, responsive management systems designed to simplify complex operational workflows. Easily adapt, customize, and white-label our products to elevate your organization&apos;s digital experience.
            </p>
            <div className={styles.heroActions}>
              <Link href="#hms" className="btn btn-primary">YimzaCare (HMS)</Link>
              <Link href="#sms" className="btn btn-outline">YimzaEdu (SMS)</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Management System Section */}
      <section className={styles.productSection} id="yimzacare">
        <div className="container">
          <div className={styles.productGrid} id="hms">
            {/* Visual Column */}
            <div className={styles.visualColumn}>
              <div className={styles.logoRing}>
                <Image 
                  src="/YimzaCare.jpeg" 
                  alt="YimzaCare HMS Logo" 
                  width={220} 
                  height={220} 
                  className={styles.productLogo}
                  priority
                />
              </div>
              <div className={styles.accentBadge}>
                <Shield size={16} />
                <span>Secure & Compliant</span>
              </div>
            </div>

            {/* Content Column */}
            <div className={styles.contentColumn}>
              <span className={styles.tag}>Healthcare System</span>
              <h2 className={styles.productTitle}>YimzaCare</h2>
              <h3 className={styles.productSubtitle}>Comprehensive Hospital Management System</h3>
              <p className={styles.productDesc}>
                YimzaCare is a state-of-the-art Hospital Management System designed to digitize healthcare ecosystems. It streamlines the patient care journey from admission to recovery, enabling doctors, nurses, pharmacists, and administrators to collaborate on a single secure dashboard.
              </p>

              <div className={styles.featuresGrid}>
                <div className={styles.featureCard}>
                  <CheckCircle2 className={styles.checkIcon} size={18} />
                  <div>
                    <h4>Electronic Medical Records (EMR)</h4>
                    <p>Highly secure patient data storage with histories, lab logs, and diagnosis logs.</p>
                  </div>
                </div>
                <div className={styles.featureCard}>
                  <CheckCircle2 className={styles.checkIcon} size={18} />
                  <div>
                    <h4>Appointment Booking</h4>
                    <p>Streamlined slots scheduling for physicians with automatic SMS or email alerts.</p>
                  </div>
                </div>
                <div className={styles.featureCard}>
                  <CheckCircle2 className={styles.checkIcon} size={18} />
                  <div>
                    <h4>Pharmacy & Inventory</h4>
                    <p>Track prescription pipelines, stock alerts, and automated reorder milestones.</p>
                  </div>
                </div>
                <div className={styles.featureCard}>
                  <CheckCircle2 className={styles.checkIcon} size={18} />
                  <div>
                    <h4>Billing & Ward Logs</h4>
                    <p>Detailed ward allocation tracking, insurance integration, and invoice generation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Management System Section */}
      <section className={styles.productSection} style={{ background: "var(--navy-light)" }} id="yimzaedu">
        <div className="container">
          <div className={styles.productGrid} id="sms">
            {/* Content Column */}
            <div className={`${styles.contentColumn} ${styles.order2}`}>
              <span className={styles.tag}>Education System</span>
              <h2 className={styles.productTitle}>YimzaEdu</h2>
              <h3 className={styles.productSubtitle}>Comprehensive School Management System</h3>
              <p className={styles.productDesc}>
                YimzaEdu is an interactive, unified School Management System designed to empower educational institutions. It facilitates administrative workflows, automates fee tracking, provides portal access for teachers and parents, and delivers insights to elevate educational experiences.
              </p>

              <div className={styles.featuresGrid}>
                <div className={styles.featureCard}>
                  <CheckCircle2 className={styles.checkIcon} size={18} />
                  <div>
                    <h4>Student & Parent Portals</h4>
                    <p>Interactive portals for viewing grades, attendance, homework, and schedules in real-time.</p>
                  </div>
                </div>
                <div className={styles.featureCard}>
                  <CheckCircle2 className={styles.checkIcon} size={18} />
                  <div>
                    <h4>Academics & Gradebooks</h4>
                    <p>Flexible grade tracking, report cards builder, and curriculum mapping interfaces.</p>
                  </div>
                </div>
                <div className={styles.featureCard}>
                  <CheckCircle2 className={styles.checkIcon} size={18} />
                  <div>
                    <h4>Finance & Fee Tracking</h4>
                    <p>Automate invoice distribution, fee collections, receipting, and financial audits.</p>
                  </div>
                </div>
                <div className={styles.featureCard}>
                  <CheckCircle2 className={styles.checkIcon} size={18} />
                  <div>
                    <h4>Admissions & Registry</h4>
                    <p>Complete digital applicant tracking system, online enrollment, and unified directories.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className={`${styles.visualColumn} ${styles.order1}`}>
              <div className={styles.logoRing}>
                <Image 
                  src="/YimzaEdu.jpeg" 
                  alt="YimzaEdu SMS Logo" 
                  width={220} 
                  height={220} 
                  className={styles.productLogo}
                />
              </div>
              <div className={styles.accentBadge}>
                <GraduationCap size={16} />
                <span>Next-Gen Academics</span>
              </div>
            </div>
          </div>
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
              <h4>bespoke Reports</h4>
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
