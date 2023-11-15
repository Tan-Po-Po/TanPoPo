"use server";

import { sendEmail } from "@/helpers/sendEmail";
import { IFeedbackFormInput } from "./feedbackForm";
import { SubmitHandler } from "react-hook-form";

export const sendFeedback: SubmitHandler<IFeedbackFormInput> = async (data) => {
  try {
    const message = `
    Name: ${data.name}
    Phone: ${data.phone}
    Email: ${data.email}
    Question: ${data.question}
        `;

    const isEmailSent = await sendEmail({
      subject: "Question",
      message,
    });

    if (!isEmailSent) {
      throw new Error("Couldn't send an email");
    }
    console.log("Email sent successfully ");
  } catch (err) {
    console.log(err);
  }
};
