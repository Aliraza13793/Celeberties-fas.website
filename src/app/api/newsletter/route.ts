import { NextRequest, NextResponse } from "next/server";
import { sendEmail, newsletterEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const result = await sendEmail({
      to: process.env.CONTACT_EMAIL || "razaali13793@gmail.com",
      subject: `[Newsletter] New Subscriber: ${email}`,
      html: newsletterEmail(email),
    });

    if (!result.success) {
      return NextResponse.json(
        { error: "Failed to process subscription" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
