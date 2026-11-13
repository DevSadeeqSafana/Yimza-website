import { NextResponse } from "next/server";
import { escapeHtml, sendFormEmail } from "@/lib/email";
import { siteConfig } from "@/lib/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name = "",
      email = "",
      phone = "",
      service = "",
      message = "",
      intent = "",
      website = "",
    } = body ?? {};

    // Honeypot
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      return NextResponse.json(
        { ok: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json({ ok: false, error: "Enter a valid email." }, { status: 400 });
    }

    const subject = `[Contact] ${intent || service || "General"} — ${name}`;
    const html = `
      <h2>New contact from ${siteConfig.brand} website</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
      <p><strong>Service:</strong> ${escapeHtml(service || "—")}</p>
      <p><strong>Intent:</strong> ${escapeHtml(intent || "—")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    `;

    const result = await sendFormEmail({
      subject,
      html,
      replyTo: email,
    });

    if (!result.ok) {
      return NextResponse.json({ ok: false, error: result.error }, { status: 502 });
    }

    return NextResponse.json({ ok: true, mode: result.mode });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to send message." }, { status: 500 });
  }
}
