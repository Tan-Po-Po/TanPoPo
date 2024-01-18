"use server";

import dbConnect from "@/config/dbConnect";
import { IFormInputs } from "../formInputs";
import { generateHtml } from "./generateHtml";
import { transporter, mailOptions } from "@/config/nodemailer";
import TeacherSurveyAmount, {
  ITeacherSurveyAmountDocument,
} from "@/models/TeacherSurveyAmount";

export const submitTeacherSurveyForm = async (data: IFormInputs) => {
  await dbConnect();

  const number =
    (await TeacherSurveyAmount.findOne()) as ITeacherSurveyAmountDocument;

  const html = generateHtml(data);

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `Нове резюме! Вчитель японської мови. [ № ${(number.amount += 1)} ]`,
      html,
    });

    await number.save();
    return true;
  } catch (err: any) {
    console.log(err.message);
    return false;
  }
};
