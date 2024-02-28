import mongoose from "mongoose";

export interface IQuestion {
  _id: string;
  location: "courses" | "prices" | "contacts";
  questionBlock: [
    {
      question: string;
      answer: [
        {
          text: string;
          link?: string;
        }
      ];
    }
  ];
}

const QuestionIdSchema = new mongoose.Schema<IQuestion>(
  {
    location: { type: String, required: true },
    questionBlock: [
      {
        question: { type: String, required: true },
        answer: [
          {
            text: { type: String, required: true },
            link: { type: String },
          },
        ],
      },
    ],
  },
  { collection: "questions" }
);

export default mongoose.models.Question ||
  mongoose.model("Question", QuestionIdSchema);
