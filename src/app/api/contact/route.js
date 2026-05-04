import { NextResponse } from "next/server";

import { resend } from "@/lib/resend";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message)
      return NextResponse.json({ success: false, error: "Missing fields" });

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "rifatahammed2222@gmail.com",
      subject: `New message from ${name}`,
      reply_to: email,
      html: `
        <p><b>Email :</b>${email}</p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Server Error" });
  }
}
