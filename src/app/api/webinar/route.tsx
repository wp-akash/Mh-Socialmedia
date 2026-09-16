import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, location, whatsapp, message } = body;

    // 1. Validate Environment Variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    // 2. Set up Zoho Transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Clean WhatsApp number for the CTA link
    const cleanWhatsapp = whatsapp ? whatsapp.replace(/\D/g, "") : "";

    // 4. Email Template (Branded for The ICT Hub)
    const mailOptions = {
      from: `"Webinar System" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Webinar Registration: ${name} (${company || 'Retailer'})`,
      html: `
        <div style="font-family: sans-serif; background-color: #F5F2E9; padding: 40px; color: #1A1614;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
            <div style="background-color: #FF3B51; padding: 30px; text-align: center; color: white;">
              <h1 style="margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">New Registration</h1>
            </div>
            
            <div style="padding: 40px;">
              <p style="margin-bottom: 20px; font-size: 16px;">You have a new inquiry from the <b>Webinar Landing Page</b>:</p>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><b>Name:</b></td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><b>Email:</b></td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${email}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><b>Company:</b></td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${company || "N/A"}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><b>Location:</b></td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${location || "N/A"}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><b>WhatsApp:</b></td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                  <a href="https://wa.me/${cleanWhatsapp}" style="color: #FF3B51; font-weight: bold; text-decoration: none;">${whatsapp}</a>
                </td></tr>
              </table>

              <div style="margin-top: 30px; padding: 20px; background-color: #F5F2E9; border-radius: 12px;">
                <p style="margin: 0 0 10px 0; font-weight: bold; color: #FF3B51;">User Message:</p>
                <p style="margin: 0; line-height: 1.5; color: #444;">${message}</p>
              </div>

              <div style="margin-top: 40px; text-align: center;">
                <a href="https://wa.me/${cleanWhatsapp}" style="background-color: #1A1614; color: white; padding: 15px 30px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 14px;">
                  REPLY VIA WHATSAPP
                </a>
              </div>
            </div>
          </div>
          <p style="text-align: center; color: #999; font-size: 11px; margin-top: 20px; letter-spacing: 3px;">THE ICT HUB • SYSTEM NOTIFICATION</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Success" });

  } catch (error: any) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}