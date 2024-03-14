import mongoose from "mongoose";
import Media from "./Media";

export interface IFeedback {
  _id: string;
  image: {
    type: typeof mongoose.Schema.Types.ObjectId;
    ref: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
  };
  link: string;
}

const FeedbackSchema = new mongoose.Schema<IFeedback>(
  {
    image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Media && "Media",
      required: true,
    },
    link: { type: String, required: true },
  },
  { collection: "feedbacks" }
);

export default mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema);
