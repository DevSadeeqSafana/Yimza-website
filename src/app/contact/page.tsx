"use client";
import { useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import PageCta from "@/components/PageCta";
import styles from "./contact.module.css";

const services = [
  "Training & Workshops",
  "Research & Development",
  "Academic Support",
  "General IT Consultancy",
  "YimzaCare demo",
  "YimzaEdu demo",
  "Other / General Inquiry",
];

function intentToService(intent: string | null) {
  if (!intent) return "";
  if (intent.includes("demo-care") || intent === "demo") return "YimzaCare demo";
  if (intent.includes("demo-edu")) return "YimzaEdu demo";
  if (intent.includes("architect")) return "General IT Consultancy";
  if (intent.includes("corporate")) return "Training & Workshops";
  if (intent.includes("services")) return "General IT Consultancy";
  return "";
}

function ContactForm() {
  const searchParams = useSearchParams();
  const intent = searchParams.get("intent");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: intentToService(intent),
    message: "",
    website: "",
  });

  const intentLabel = useMemo(() => {
    if (!intent) return null;
    if (intent.includes("demo")) return "Product demo request";
    if (intent.includes("architect")) return "Talk to an IT architect";
    if (intent.includes("corporate")) return "Corporate training";
    return intent;
  }, [intent]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, intent: intent || "" }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error || "Something went wrong. Please try WhatsApp or email.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Network error. Please try WhatsApp or email.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.formPanel}>
      {submitted ? (
        <div className={styles.successState}>
          <div className={styles.successIcon}>
            <CheckCircle2 size={40} style={{ color: "#B89640" }} />
          </div>
          <h3 className={styles.successTitle}>Message sent</h3>
          <p className={styles.successText}>
            Thank you. Our team will get back to you within one business day. For faster
            replies, message us on WhatsApp.
          </p>
          <div className={styles.successActions}>
            <a
              href={siteConfig.whatsappUrl}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
            <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
              Send another
            </button>
          </div>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.formTitle}>Send a message</h2>
          {intentLabel && <p className={styles.intentNote}>Context: {intentLabel}</p>}

          <input
            type="text"
            name="website"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
            className="visually-hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="name">
                Full name *
              </label>
              <input
                id="name"
                type="text"
                required
                className={styles.input}
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">
                Email *
              </label>
              <input
                id="email"
                type="email"
                required
                className={styles.input}
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className={styles.input}
                placeholder="+234 xxx xxx xxxx"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="service">
                Service of interest
              </label>
              <select
                id="service"
                className={styles.select}
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="message">
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className={styles.textarea}
              placeholder="Tell us about your goals or how we can help..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          <p className={styles.privacyNote}>
            By sending this form you agree to our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>

          {error && <p className={styles.error}>{error}</p>}

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
            disabled={submitting}
          >
            {submitting ? "Sending..." : (
              <>
                Send message <Send size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  const contactDetails = [
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "Chat with us now",
      href: siteConfig.whatsappUrl,
      external: true,
      primary: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Phone,
      label: "Call",
      value: siteConfig.phone,
      href: `tel:+${siteConfig.phoneRaw}`,
    },
    {
      icon: MapPin,
      label: "Locations",
      value: siteConfig.addressLine,
      href: "#",
    },
    {
      icon: Clock,
      label: "Working hours",
      value: siteConfig.hours,
      href: "#",
    },
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className="grid-bg" />
        <div className={styles.heroGlow} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={styles.heroContent}>
            <span className="badge">
              <MessageSquare size={12} /> Get in touch
            </span>
            <h1 className={styles.heroTitle}>
              Let&apos;s build the next step
              <br />
              <span className="gold-text">together</span>
            </h1>
            <p className={styles.heroSubtext}>
              WhatsApp is often the fastest way to reach us in Nigeria. Or send a message — we
              typically reply within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.infoPanel}>
              <h2 className={styles.infoTitle}>Contact channels</h2>
              <p className={styles.infoSubtext}>
                Prefer a direct line? Start with WhatsApp, or use email and phone below.
              </p>

              <div className={styles.contactCards}>
                {contactDetails.map(({ icon: Icon, label, value, href, external, primary }) => {
                  const className = `${styles.contactCard} ${primary ? styles.contactCardPrimary : ""}`;
                  const inner = (
                    <>
                      <div className={styles.contactCardIcon}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className={styles.contactCardLabel}>{label}</div>
                        <div className={styles.contactCardValue}>{value}</div>
                      </div>
                    </>
                  );
                  if (href === "#") {
                    return (
                      <div key={label} className={className}>
                        {inner}
                      </div>
                    );
                  }
                  return (
                    <a
                      key={label}
                      href={href}
                      className={className}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {inner}
                    </a>
                  );
                })}
              </div>

              <div className={styles.infoNote}>
                <CheckCircle2 size={14} style={{ color: "#B89640", flexShrink: 0 }} />
                <span>
                  Website domain: yimzaconsult.com.ng · Mailbox currently listed as{" "}
                  {siteConfig.email}
                </span>
              </div>
            </div>

            <Suspense fallback={<div className={styles.formPanel}>Loading form…</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      <PageCta variant="contact" />
    </>
  );
}
