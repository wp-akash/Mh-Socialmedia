import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { saveInquiry } from "@/lib/inquiry-store";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Save to local store
    saveInquiry({
      type: 'Contact',
      name,
      email,
      message,
    });

    // Check env values
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      console.error("Missing email environment variables");
      return NextResponse.json(
        { error: "Email configuration is missing" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      // service: "gmail",
      host: "smtp.zoho.com",  
      port: 587,                   
      secure: false,
      // port: 465,                   
      // secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter
    await transporter.verify().catch((err) => {
      console.error("Transporter verify failed:", err);
      throw new Error("Transporter verification failed");
    });

    // Send email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
      html: `<p><b>From:</b> ${name} (${email})</p><p>${message}</p>`,
    });

    return NextResponse.json({ success: true, message: "Email sent!" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(" Contact API error:", error.message);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    console.error("Contact API unknown error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
