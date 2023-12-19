import mongoose from "mongoose";

export interface IQuestion {
  _id: string;
  value: string;
  count: number;
}

const QuestionSchema = new mongoose.Schema<IQuestion>(
  {
    value: { type: String, required: true },
    count: { type: Number, required: true },
  },
  { collection: "question-id" }
);

export default mongoose.models.Question ||
  mongoose.model("Question", QuestionSchema);
