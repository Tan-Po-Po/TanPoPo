import mongoose from "mongoose";

const LibraryMediaSchema = new mongoose.Schema(
  {
    filename: { type: String, required: true },
    mimeType: { type: String },
    width: { type: Number },
    height: { type: Number },
  },
  { collection: "library-medias" }
);

export default mongoose.models.LibraryMedia ||
  mongoose.model("LibraryMedia", LibraryMediaSchema);