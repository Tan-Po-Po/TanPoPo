import mongoose from "mongoose";

export interface IGuides {
  _id: string;
  background: string;
  href: string;
  textArray: [{ text: string; isUnderlined: boolean }];
}

const GuideSchema = new mongoose.Schema<IGuides>(
  {
    background: { type: String, required: true },
    href: { type: String, required: true },
    textArray: [
      {
        text: { type: String, required: true },
        isUnderlined: { type: Boolean, required: true },
      },
    ],
  },
  { collection: "guides" }
);

export default mongoose.models.Guide || mongoose.model("Guide", GuideSchema);
