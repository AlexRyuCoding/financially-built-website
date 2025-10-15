import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface FormSubmission {
  type: "consult" | "question" | "newsletter";
  name?: string;
  email: string;
  phone?: string;
  childAge?: string;
  message?: string;
  question?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: FormSubmission = await request.json();

    // Validate required fields
    if (!data.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Send email notification via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const emailSubject = getEmailSubject(data.type);
        const emailBody = formatEmailBody(data);

        await resend.emails.send({
          from:
            process.env.EMAIL_FROM ||
            "FinanciallyBuilt <no-reply@info.financiallybuilt.com>",
          to: process.env.EMAIL_TO || "contact@financiallybuilt.com",
          subject: emailSubject,
          html: emailBody,
        });

        console.log("Email sent successfully for:", data.type);
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Continue even if email fails - don't block the user
      }
    } else {
      console.warn("RESEND_API_KEY not configured - email not sent");
    }

    // Log submission for backup
    console.log("Form submission received:", {
      type: data.type,
      timestamp: new Date().toISOString(),
      data: data,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Helper functions
function getEmailSubject(type: string): string {
  switch (type) {
    case "consult":
      return "🎯 New Consultation Request - Financially Built";
    case "question":
      return "❓ New Question Submitted - Financially Built";
    case "newsletter":
      return "📧 New Newsletter Signup - Financially Built";
    default:
      return "📨 New Form Submission - Financially Built";
  }
}

function formatEmailBody(data: FormSubmission): string {
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "full",
    timeStyle: "long",
  });

  if (data.type === "newsletter") {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0A3768;">New Newsletter Subscription</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Submitted:</strong> ${timestamp}</p>
        </div>
      </div>
    `;
  }

  if (data.type === "question") {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0A3768;">New Question Submitted</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Question:</strong></p>
          <p style="white-space: pre-wrap; background: white; padding: 15px; border-left: 4px solid #0A3768;">${data.question}</p>
          <p><strong>Submitted:</strong> ${timestamp}</p>
        </div>
        <p style="color: #666; font-size: 14px;">
          Reply to this inquiry at: <a href="mailto:${data.email}">${data.email}</a>
        </p>
      </div>
    `;
  }

  // Consultation request
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0A3768;">New Consultation Request</h2>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        ${
          data.childAge
            ? `<p><strong>Child's Age:</strong> ${data.childAge}</p>`
            : ""
        }
        ${
          data.message
            ? `
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: white; padding: 15px; border-left: 4px solid #0A3768;">${data.message}</p>
        `
            : ""
        }
        <p><strong>Submitted:</strong> ${timestamp}</p>
      </div>
      <p style="color: #666; font-size: 14px;">
        Contact this lead at: <a href="mailto:${data.email}">${
    data.email
  }</a> or ${data.phone}
      </p>
    </div>
  `;
}
