import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { saveInquiry } from "@/lib/inquiry-store";

export async function POST(req: Request) {
  try {
    const {
      fullName,
      companyName,
      email,
      countryCode,
      phoneNumber,
      service,
      budget,
      projectDetails,
    } = await req.json();

    // Save to local store
    saveInquiry({
      type: 'Booking',
      name: fullName,
      company: companyName,
      email: email,
      phone: `${countryCode} ${phoneNumber}`,
      service: service,
      budget: budget,
      message: projectDetails,
    });

    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.EMAIL_TO
    ) {
      console.error("Missing email environment variables");
      return NextResponse.json(
        { error: "Email configuration is missing" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify().catch((err) => {
      console.error("Transporter verify failed:", err);
      throw new Error("Transporter verification failed");
    });

    const emailText = `
Name: ${fullName}
Company: ${companyName}
Email: ${email}
Phone: ${countryCode} ${phoneNumber}
Service: ${service}
Budget: ${budget}

Project Details:
${projectDetails}
`;

    const emailHtml = `
<p><strong>Name:</strong> ${fullName}</p>
<p><strong>Company:</strong> ${companyName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${countryCode} ${phoneNumber}</p>
<p><strong>Service:</strong> ${service}</p>
<p><strong>Budget:</strong> ${budget}</p>
<p><strong>Project Details:</strong><br/>${projectDetails.replace(
      /\n/g,
      "<br/>"
    )}</p>
`;

    await transporter.sendMail({
      from: `"Booking Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Booking Inquiry from ${fullName}`,
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, message: "Email sent!" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Booking API error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    console.error("Unknown error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
