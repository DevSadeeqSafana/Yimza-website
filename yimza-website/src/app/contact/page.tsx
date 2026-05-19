"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2 } from "lucide-react";
import styles from "./contact.module.css";

const contactDetails = [
  { icon: Mail, label: "Email Us", value: "info@yimzaconsult.com", href: "mailto:info@yimzaconsult.com" },
  { icon: Phone, label: "Call Us", value: "+234 701 102 1667", href: "tel:+2347011021667" },
  { icon: MapPin, label: "Location", value: "Nigeria, Africa", href: "#" },
  { icon: Clock, label: "Working Hours", value: "Mon – Fri, 9AM – 6PM WAT", href: "#" },
];

const services = [
  "Training & Workshops",
  "Research & Development",
  "Academic Support",
  "General IT Consultancy",
  "Other / General Inquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="grid-bg" />
        <div className={styles.heroGlow} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={styles.heroContent}>
            <span className="badge"><MessageSquare size={12} /> Get In Touch</span>
            <h1 className={styles.heroTitle}>
              Let&apos;s Build the Future<br /><span className="gold-text">Together</span>
            </h1>
            <p className={styles.heroSubtext}>
              Ready to transform your digital journey? Reach out to our team and let&apos;s discuss
              how Yimza Consult can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.grid}>
            {/* Info Panel */}
            <div className={styles.infoPanel}>
              <h2 className={styles.infoTitle}>Contact Information</h2>
              <p className={styles.infoSubtext}>
                We&apos;re here to help. Reach out through any of the channels below and
                our team will respond promptly.
              </p>

              <div className={styles.contactCards}>
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} className={styles.contactCard}>
                    <div className={styles.contactCardIcon}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className={styles.contactCardLabel}>{label}</div>
                      <div className={styles.contactCardValue}>{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className={styles.infoNote}>
                <CheckCircle2 size={14} style={{ color: "#B89640", flexShrink: 0 }} />
                <span>We typically respond within 24 business hours.</span>
              </div>
            </div>

            {/* Form */}
            <div className={styles.formPanel}>
              {submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>
                    <CheckCircle2 size={40} style={{ color: "#B89640" }} />
                  </div>
                  <h3 className={styles.successTitle}>Message Sent!</h3>
                  <p className={styles.successText}>
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Send Another Message</button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <h2 className={styles.formTitle}>Send Us a Message</h2>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="name">Full Name *</label>
                      <input
                        id="name" type="text" required
                        className={styles.input}
                        placeholder="Your full name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="email">Email Address *</label>
                      <input
                        id="email" type="email" required
                        className={styles.input}
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="phone">Phone Number</label>
                      <input
                        id="phone" type="tel"
                        className={styles.input}
                        placeholder="+234 xxx xxx xxxx"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="service">Service of Interest</label>
                      <select
                        id="service"
                        className={styles.select}
                        value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                      >
                        <option value="">Select a service</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="message">Message *</label>
                    <textarea
                      id="message" required rows={5}
                      className={styles.textarea}
                      placeholder="Tell us about your goals, challenges, or how we can help..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
