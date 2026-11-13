import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export function getMailConfig() {
  return {
    to: process.env.FORM_TO_EMAIL || siteConfig.email,
    from: process.env.FORM_FROM_EMAIL || "Yimza Consult <onboarding@resend.dev>",
  };
}

export async function sendFormEmail(opts: {
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const resend = getResend();
  const { to, from } = getMailConfig();

  if (!resend) {
    if (process.env.NODE_ENV === "development") {
      console.info("[email:dev]", { to, subject: opts.subject, html: opts.html });
      return { ok: true as const, mode: "dev-log" as const };
    }
    return {
      ok: false as const,
      error: "Email is not configured. Set RESEND_API_KEY.",
    };
  }

  const { error } = await resend.emails.send({
    from,
    to: [to],
    subject: opts.subject,
    html: opts.html,
    replyTo: opts.replyTo,
  });

  if (error) {
    return { ok: false as const, error: error.message };
  }

  return { ok: true as const, mode: "resend" as const };
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
