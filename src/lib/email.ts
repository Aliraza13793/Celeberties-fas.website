import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, replyTo }: SendEmailOptions) {
  try {
    const info = await transporter.sendMail({
      from: `"Celebrity Fashion" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      html,
      replyTo,
    });

    console.log("Email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, error: "Failed to send email" };
  }
}

export function contactFormEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return `
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
          <h1>New Contact Form Message</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email}</div>
          </div>
          <div class="field">
            <div class="label">Subject:</div>
            <div class="value">${data.subject}</div>
          </div>
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${data.message.replace(/\n/g, "<br>")}</div>
          </div>
        </div>
        <div class="footer">
          <p>This message was sent via the Celebrity Fashion contact form.</p>
          <p>Reply directly to this email to respond to ${data.name}.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export function newsletterEmail(email: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #e11d48, #8b5cf6); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Newsletter Subscriber</h1>
        </div>
        <div class="content">
          <p><strong>${email}</strong> just subscribed to your newsletter!</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
