import mongoose from "mongoose";
import { IPolicy } from "./interface";

const ConfidentialityPolicySchema = new mongoose.Schema<IPolicy>(
  {
    content: [
      {
        title: String,
        text: { type: String, required: true },
      },
    ],
  },
  { collection: "confidentiality-policies" }
);

export default mongoose.models.ConfidentialityPolicy ||
  mongoose.model("ConfidentialityPolicy", ConfidentialityPolicySchema);
