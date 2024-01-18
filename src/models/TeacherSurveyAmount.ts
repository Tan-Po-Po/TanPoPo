import mongoose, { Document } from "mongoose";

export interface ITeacherSurveyAmount {
  amount: number;
}

export type ITeacherSurveyAmountDocument = ITeacherSurveyAmount & Document;

const TeacherSurveyAmountSchema = new mongoose.Schema<ITeacherSurveyAmount>(
  {
    amount: Number,
  },
  { collection: "teacher-survey-amount" }
);

export default mongoose.models.TeacherSurveyAmount ||
  mongoose.model("TeacherSurveyAmount", TeacherSurveyAmountSchema);
