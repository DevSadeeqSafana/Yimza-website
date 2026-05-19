import { Quote, Star } from "lucide-react";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    name: "Adewale Okonkwo",
    role: "Data Analyst, Lagos",
    text: "Yimza's data analytics training completely transformed my career. The practical approach and real-world case studies gave me skills I could apply immediately. Highly recommended for anyone serious about data.",
    stars: 5,
  },
  {
    name: "Dr. Fatima Bello",
    role: "Academic Researcher, Abuja",
    text: "The academic support I received was outstanding. From research methodology to data interpretation, their mentors guided me at every step. My thesis was better than I ever imagined it could be.",
    stars: 5,
  },
  {
    name: "Emmanuel Chibuike",
    role: "IT Manager, Port Harcourt",
    text: "Our organization underwent a complete digital transformation with Yimza's consultancy. Their cybersecurity audit uncovered critical vulnerabilities and their team helped us address every one of them.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="grid-bg" style={{ opacity: 0.3 }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className={styles.header}>
          <span className="section-label">Testimonials</span>
          <div className="gold-line center" />
          <h2 className="section-title" style={{ textAlign: "center" }}>
            What Our Clients <span>Say About Us</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "16px auto 0", textAlign: "center" }}>
            Real stories from individuals and organizations who have experienced the Yimza difference.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={`glass-card ${styles.card}`}>
              <div className={styles.quoteIcon}>
                <Quote size={20} />
              </div>
              <div className={styles.stars}>
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={14} fill="#B89640" color="#B89640" />
                ))}
              </div>
              <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
