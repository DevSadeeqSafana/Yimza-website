import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    name: "Adewale Okonkwo",
    role: "Data Analyst",
    org: "Lagos",
    text: "Yimza's data analytics training was practical from day one. The case studies helped me apply skills at work immediately.",
  },
  {
    name: "Dr. Fatima Bello",
    role: "Academic Researcher",
    org: "Abuja",
    text: "From methodology to interpretation, their academic mentors were clear and rigorous. My thesis process became manageable.",
  },
  {
    name: "Emmanuel Chibuike",
    role: "IT Manager",
    org: "Port Harcourt",
    text: "Their consultancy team helped us prioritise cybersecurity fixes with a realistic roadmap our staff could follow.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">What clients say</span>
          <div className="gold-line center" />
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Stories from people we&apos;ve <span>worked with</span>
          </h2>
          <p className={styles.note}>
            Quotes below use names and roles as provided for the site. Photo verification can be
            added when client assets are supplied.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <article key={t.name} className={styles.card}>
              <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>
                    {t.role}, {t.org}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
