import { MapPin, Layers, Users, Award } from "lucide-react";
import styles from "./StatsSection.module.css";

const stats = [
  { icon: Users, value: "500+", label: "Professionals trained", desc: "Across Nigeria programmes" },
  { icon: Layers, value: "4", label: "Core service areas", desc: "Training, R&D, academic, IT" },
  { icon: MapPin, value: "3", label: "Delivery locations", desc: "Gusau · Abuja · Online" },
  { icon: Award, value: "Yimza", label: "Training certificate", desc: "Issued on programme completion" },
];

export default function StatsSection() {
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map(({ icon: Icon, value, label, desc }) => (
            <div key={label} className={styles.card}>
              <div className={styles.iconWrap}>
                <Icon size={20} />
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
