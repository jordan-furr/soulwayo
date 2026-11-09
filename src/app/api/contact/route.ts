import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, interests, type, address } = body;
    const isOrder = type === "order";
    const hasItems = Array.isArray(interests) && interests.length > 0;

    if (!name || !email || (!message && !(isOrder && hasItems))) {
      return NextResponse.json(
        { ok: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    const isBooking = type === "booking";
    const subject = isOrder
      ? `New Order Request from ${name}`
      : isBooking
        ? `New Booking Request from ${name}`
        : `New Contact from ${name}`;

    const to = [
      process.env.CONTACT_EMAIL_1!,
      process.env.CONTACT_EMAIL_2!,
    ].filter(Boolean);

    const interestsList =
      interests && interests.length > 0
        ? isOrder
          ? `\n\nProducts:\n${interests.map((i: string) => `- ${i}`).join("\n")}`
          : `\nInterests: ${interests.join(", ")}`
        : "";

    const addressLine =
      isOrder && address ? `\n\nAddress:\n${address}` : "";

    const phoneLine = phone ? `\nPhone: ${phone}` : "";

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Soulwayo <noreply@soulwayo.com>",
      to,
      replyTo: email,
      subject,
      text: `Name: ${name}\nEmail: ${email}${phoneLine}${interestsList}${addressLine}\n\nMessage:\n${message || "(none)"}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}
