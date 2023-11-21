import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/config/nodemailer";
import { type ScheduleForm } from "@/app/education/start/schedule/common";
import { generateHtml } from "./generateHTML";

export async function POST(req: Request) {
  const formData = (await req.json()) as ScheduleForm;
  const htmlContent = generateHtml(formData);

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "Початок навчання",
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
