import mongoose from "mongoose";

const CourseMediaSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  mimeType: { type: String },
  width: { type: Number },
  height: { type: Number },
});

export default mongoose.models.CourseMedia ||
  mongoose.model("CourseMedia", CourseMediaSchema);
