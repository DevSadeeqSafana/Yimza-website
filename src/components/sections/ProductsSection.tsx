"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, GraduationCap, Laptop } from "lucide-react";
import styles from "./ProductsSection.module.css";

const products = [
  {
    logo: "/YimzaCare.jpeg",
    id: "yimzacare",
    tag: "Hospital Management",
    title: "YimzaCare (HMS)",
    desc: "A state-of-the-art Hospital Management System designed to digitize healthcare workflows, manage patient records, and optimize administrative efficiency. Completely white-labelable to suit your health institution.",
    icon: Shield,
    features: [
      "Electronic Medical Records (EMR)",
      "Smart Appointment Scheduling",
      "Billing & Invoicing Workflows",
      "Pharmacy & Inventory Management",
    ],
  },
  {
    logo: "/YimzaEdu.jpeg",
    id: "yimzaedu",
    tag: "School Management",
    title: "YimzaEdu (SMS)",
    desc: "An robust, interactive School Management System enabling educational institutions to streamline admissions, manage academics, track finance, and support student success. Easy to white-label and customize.",
    icon: GraduationCap,
    features: [
      "Student & Teacher Portals",
      "Interactive Academic Gradebooks",
      "Fee Payment & Finance Tracking",
      "Admissions & Enrollment Panels",
    ],
  },
];

export default function ProductsSection() {
  return (
    <section className={`section ${styles.productsSection}`} id="products">
      <div className="grid-bg" style={{ opacity: 0.3 }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        
        <div className={styles.header}>
          <span className="section-label">Enterprise Products</span>
          <div className="gold-line center" />
          <h2 className="section-title text-center" style={{ textAlign: "center" }}>
            Software Built to <span>Empower Business</span>
          </h2>
          <p className="section-subtitle text-center" style={{ margin: "16px auto 0", textAlign: "center" }}>
            Introducing our premium, white-labelable enterprise solutions designed for seamless adaptation, rebranding, and scalability to meet any business demand.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map(({ logo, id, tag, title, desc, features }) => (
            <div key={id} className={`glass-card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <div className={styles.logoWrapper}>
                  <Image 
                    src={logo} 
                    alt={title} 
                    width={80} 
                    height={80} 
                    className={styles.productLogo}
                  />
                </div>
                <div className={styles.headerMeta}>
                  <span className={styles.tag}>{tag}</span>
                  <h3 className={styles.cardTitle}>{title}</h3>
                </div>
              </div>
              
              <p className={styles.cardDesc}>{desc}</p>
              
              <ul className={styles.features}>
                {features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.actionWrapper}>
                <Link href={`/products#${id}`} className="btn btn-outline" style={{ width: "100%", justifyContent: "center" }}>
                  Explore Features <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaIconBox}>
              <Laptop size={28} />
            </div>
            <div className={styles.ctaInfo}>
              <h4 className={styles.ctaTitle}>Need a custom white-label system?</h4>
              <p className={styles.ctaText}>All our products are completely modular and can be customized with your brand logo, corporate colors, and bespoke business workflows.</p>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Contact Sales <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
