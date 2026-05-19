"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FaqSection.module.css";

const faqs = [
  {
    q: "What services does Yimza Consult offer?",
    a: "We provide a comprehensive range of services including IT consultancy, tailored training programs, academic support, and innovative research & development solutions to help individuals, institutions, and organizations succeed in the digital world.",
  },
  {
    q: "Who are your services designed for?",
    a: "Our services are designed for individuals, educational institutions, and businesses looking to enhance their digital capabilities, streamline operations, or gain practical IT skills across all experience levels.",
  },
  {
    q: "What training programs do you offer?",
    a: "We offer customized training in software development, data analysis, digital transformation, cybersecurity, AI & emerging technologies, project management, and other IT-related fields—suited for beginners, professionals, and organizations.",
  },
  {
    q: "How do I get started with Yimza Consult?",
    a: "Simply reach out through our contact page, email, or phone. Our team will guide you through a consultation to understand your needs and recommend the best programs or services that fit your goals.",
  },
  {
    q: "Can services be customized for our organization?",
    a: "Absolutely. We tailor our training, consultancy, and research services to meet the unique requirements of each organization, ensuring maximum impact and measurable results for your specific context.",
  },
  {
    q: "Do you offer remote or online training?",
    a: "Yes, our training programs are available both in-person and online, providing flexible, high-quality learning experiences that accommodate different schedules and geographic locations.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={`section ${styles.faq}`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.header}>
            <span className="section-label">FAQ</span>
            <div className="gold-line" />
            <h2 className="section-title">
              Frequently Asked <span>Questions</span>
            </h2>
            <p className="section-subtitle" style={{ marginTop: 16 }}>
              Have questions? We&apos;ve compiled answers to the most common things people ask about our services and approach.
            </p>
          </div>

          <div className={styles.list}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`${styles.item} ${open === i ? styles.active : ""}`}
              >
                <button
                  className={styles.question}
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className={`${styles.chevron} ${open === i ? styles.rotated : ""}`} />
                </button>
                <div className={`${styles.answer} ${open === i ? styles.answerOpen : ""}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
