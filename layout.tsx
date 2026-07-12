import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const limits: Record<string, number> = {
  service: 120,
  business: 160,
  name: 120,
  email: 320,
  phone: 40,
  location: 240,
  squareFootage: 40,
  timing: 120,
  details: 3000,
};

function clean(value: unknown, max = 2000) {
  return String(value ?? "").trim().slice(0, max);
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 320;
}

export async function POST(request: Request) {
  try {
    if (!request.headers.get("content-type")?.includes("application/json")) {
      return NextResponse.json({ error: "Unsupported request format." }, { status: 415 });
    }

    const body = await request.json();

    // Honeypot and minimum-completion-time checks suppress basic automated submissions.
    if (clean(body.companyWebsite)) return NextResponse.json({ ok: true });
    const startedAt = Number(body.startedAt);
    if (Number.isFinite(startedAt) && Date.now() - startedAt < 1500) {
      return NextResponse.json({ ok: true });
    }

    const required = ["service", "business", "name", "email", "phone", "location", "details"];
    for (const field of required) {
      if (!clean(body[field], limits[field])) {
        return NextResponse.json({ error: `Please complete the ${field} field.` }, { status: 400 });
      }
    }

    const email = clean(body.email, limits.email);
    if (!validEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.QUOTE_TO_EMAIL;

    if (!apiKey || !from || !to) {
      return NextResponse.json(
        { error: "The quote form is not connected yet. Add the three Resend environment variables in Vercel." },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const rows = [
      ["Service", clean(body.service, limits.service)],
      ["Business", clean(body.business, limits.business)],
      ["Name", clean(body.name, limits.name)],
      ["Email", email],
      ["Phone", clean(body.phone, limits.phone)],
      ["Location", clean(body.location, limits.location)],
      ["Approx. square footage", clean(body.squareFootage, limits.squareFootage) || "Not provided"],
      ["Preferred timing", clean(body.timing, limits.timing) || "Not provided"],
      ["Project details", clean(body.details, limits.details)],
    ];

    const html = `
      <h1>New BuffSnap quote request</h1>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif">
        ${rows.map(([label, value]) => `<tr><td style="border-bottom:1px solid #ddd;font-weight:bold;width:190px">${escapeHtml(label)}</td><td style="border-bottom:1px solid #ddd">${escapeHtml(value)}</td></tr>`).join("")}
      </table>`;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `BuffSnap quote: ${clean(body.business, 120)} — ${clean(body.service, 120)}`,
      html,
    });

    if (error) {
      console.error("Resend error", error);
      return NextResponse.json({ error: "The request could not be delivered. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong while sending the request." }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}
