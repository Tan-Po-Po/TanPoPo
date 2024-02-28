"use server";
import Question, { IQuestion } from "@/models/Question";
import dbConnect from "@/config/dbConnect";
import { location } from "./faqBlock";

export const getQuestions = async (location: location) => {
  try {
    await dbConnect();

    const questions = await Question.findOne({ location });
    return JSON.parse(JSON.stringify(questions)) as IQuestion;
  } catch (err: any) {
    console.log(err);
  }
};
