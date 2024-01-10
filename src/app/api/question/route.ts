import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/config/nodemailer";
import { generateHtml } from "./generateHtml";
import { IFeedbackFormInput as Data } from "@/app/(website)/contacts/_components/feedbackForm/feedbackForm";
import Question from "@/models/QuestionId";
import dbConnect from "@/config/dbConnect";

export async function POST(req: Request) {
  const formData = (await req.json()) as Data;

  await dbConnect();
  const { count } = await Question.findOneAndUpdate(
    { value: "questionId" },
    { $inc: { count: 1 } }
  );

  const htmlContent = generateHtml(formData, count);
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `Нове запитання: TPQ_${count}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
