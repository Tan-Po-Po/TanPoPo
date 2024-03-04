import mongoose from "mongoose";

export interface IQuestionId {
  _id: string;
  value: string;
  count: number;
}

const QuestionIdSchema = new mongoose.Schema<IQuestionId>(
  {
    value: { type: String, required: true },
    count: { type: Number, required: true },
  },
  { collection: "question-id" }
);

export default mongoose.models.QuestionId ||
  mongoose.model("QuestionId", QuestionIdSchema);
