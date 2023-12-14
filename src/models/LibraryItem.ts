import mongoose, { Schema } from "mongoose";

export interface ILibraryItem {
  label: string;
  type: "topic" | "podcast/topic" | "music" | "reels";
  size?: "small" | "medium" | "large";
  gallery?: {
    _id?: string;
    value?: string;
    type: "image" | "video";
    image: string;
    video?: string;
  }[];
  text?: string;
  hashtags: string[];
}

export type ILibraryItemDocument = ILibraryItem & Document;

const LibraryItemsSchema = new mongoose.Schema<ILibraryItemDocument>({
  label: { type: String, required: true },
  type: {
    type: String,
    enum: ["topic", "podcast/topic", "music", "reels"],
    required: true,
  },
  size: { type: String, enum: ["small", "medium", "large"] },
  gallery: [
    {
      _id: { type: String },
      value: { type: String },
      type: { type: String, enum: ["image", "video"], required: true },
      image: { type: String, required: true },
      video: { type: String },
    },
  ],
  text: { type: String },
  hashtags: { type: [String], required: true },
});

export default mongoose.models.LibraryItem ||
  mongoose.model<ILibraryItemDocument>("LibraryItem", LibraryItemsSchema);
