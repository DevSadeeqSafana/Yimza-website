import { NextResponse } from "next/server";
import { escapeHtml, sendFormEmail } from "@/lib/email";
import { siteConfig } from "@/lib/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName = "",
      email = "",
      phone = "",
      whatsapp = "",
      program = "",
      mode = "",
      goals = "",
      agreed = false,
      website = "",
    } = body ?? {};

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!fullName.trim() || !email.trim() || !phone.trim() || !program.trim()) {
      return NextResponse.json(
        { ok: false, error: "Name, email, phone, and programme are required." },
        { status: 400 }
      );
    }

    if (!agreed) {
      return NextResponse.json(
        { ok: false, error: "Please accept the Training Terms to continue." },
        { status: 400 }
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json({ ok: false, error: "Enter a valid email." }, { status: 400 });
    }

    const subject = `[Training] ${program} — ${fullName}`;
    const html = `
      <h2>New training registration</h2>
      <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>WhatsApp:</strong> ${escapeHtml(whatsapp || "—")}</p>
      <p><strong>Programme:</strong> ${escapeHtml(program)}</p>
      <p><strong>Mode:</strong> ${escapeHtml(mode || "—")}</p>
      <p><strong>Goals:</strong></p>
      <p>${escapeHtml(goals || "—").replace(/\n/g, "<br/>")}</p>
      <p><em>Source: ${siteConfig.url}/training</em></p>
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
    return NextResponse.json(
      { ok: false, error: "Unable to submit registration." },
      { status: 500 }
    );
  }
}
