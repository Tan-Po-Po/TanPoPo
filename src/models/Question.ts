import mongoose from "mongoose";

export interface IQuestion {
  _id: string;
  location: "courses" | "prices" | "contacts";
  questionBlock: [{ question: string; answer: string }];
}

const QuestionIdSchema = new mongoose.Schema<IQuestion>(
  {
    location: { type: String, required: true },
    questionBlock: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
  },
  { collection: "questions" }
);

export default mongoose.models.Question ||
  mongoose.model("Question", QuestionIdSchema);
