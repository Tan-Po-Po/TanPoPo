import mongoose from "mongoose";

const MediaSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  mimeType: { type: String },
  width: { type: Number },
  height: { type: Number },
});

export default mongoose.models.Media ||
  mongoose.model("Media", MediaSchema);
