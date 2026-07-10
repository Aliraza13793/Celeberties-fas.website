import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, portfolio, category, topic, sample } = body;

    if (!name || !email || !topic || !sample) {
      return NextResponse.json(
        { error: "Name, email, topic, and sample are required" },
        { status: 400 }
      );
    }

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #e11d48, #8b5cf6); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #4b5563; }
          .value { background: white; padding: 10px; border-radius: 5px; border: 1px solid #e5e7eb; margin-top: 5px; }
          .footer { text-align: center; padding: 15px; color: #6b7280; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Write For Us Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${email}</div>
            </div>
            ${portfolio ? `<div class="field"><div class="label">Portfolio:</div><div class="value">${portfolio}</div></div>` : ""}
            ${category ? `<div class="field"><div class="label">Category:</div><div class="value">${category}</div></div>` : ""}
            <div class="field">
              <div class="label">Proposed Topic:</div>
              <div class="value">${topic}</div>
            </div>
            <div class="field">
              <div class="label">Writing Sample:</div>
              <div class="value">${sample.replace(/\n/g, "<br>")}</div>
            </div>
          </div>
          <div class="footer">
            <p>This submission was sent via the Celebrity Fashion Write For Us page.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const result = await sendEmail({
      to: process.env.CONTACT_EMAIL || "razaali13793@gmail.com",
      subject: `[Write For Us] ${topic}`,
      html,
      replyTo: email,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: "Failed to send submission. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Submission sent successfully! We'll review it and get back to you." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Write for us error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
