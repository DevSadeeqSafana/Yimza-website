import Link from "next/link";
import { ArrowRight, GraduationCap, Building2, School, HeartPulse } from "lucide-react";
import { audiencePaths } from "@/lib/site";
import styles from "./AudiencePaths.module.css";

const icons = {
  learners: GraduationCap,
  organisations: Building2,
  schools: School,
  hospitals: HeartPulse,
} as const;

export default function AudiencePaths() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Start here</span>
          <div className="gold-line" />
          <h2 className="section-title">
            Which path is <span>for you?</span>
          </h2>
          <p className="section-subtitle" style={{ marginTop: 14 }}>
            Pick the audience that matches you. We will take you to the right next step.
          </p>
        </div>

        <div className={styles.grid}>
          {audiencePaths.map((path) => {
            const Icon = icons[path.id as keyof typeof icons];
            return (
              <Link key={path.id} href={path.href} className={styles.card}>
                <div className={styles.iconWrap}>
                  <Icon size={22} />
                </div>
                <h3 className={styles.title}>{path.title}</h3>
                <p className={styles.desc}>{path.desc}</p>
                <span className={styles.cta}>
                  {path.cta} <ArrowRight size={15} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
