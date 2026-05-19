import { TrendingUp, Users, Award, Globe } from "lucide-react";
import styles from "./StatsSection.module.css";

const stats = [
  { icon: Users, value: "500+", label: "Professionals Trained", desc: "Across Nigeria and Africa" },
  { icon: Award, value: "4+", label: "Core Service Areas", desc: "Comprehensive IT solutions" },
  { icon: TrendingUp, value: "98%", label: "Client Satisfaction", desc: "Consistently delivering value" },
  { icon: Globe, value: "3+", label: "Years of Excellence", desc: "Trusted by institutions" },
];

export default function StatsSection() {
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map(({ icon: Icon, value, label, desc }) => (
            <div key={label} className={styles.card}>
              <div className={styles.iconWrap}>
                <Icon size={22} />
              </div>
              <div className={styles.value}>{value}</div>
              <div className={styles.label}>{label}</div>
              <div className={styles.desc}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
