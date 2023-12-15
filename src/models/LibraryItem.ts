import mongoose, { Schema } from "mongoose";

export interface ILibraryItemContent {
  type: "paragraph" | "header" | "image" | "text" | "link";
  value: string;
  href?: string;
}

export interface ILibraryItem {
  label: string;
  type: "article" | "articleSmall" | "reels" | "music" | "podcast";
  labelColor: string;
  audioColor?: string;
  gallery?: {
    _id: string;
    value?: string;
    type: "image" | "video";
    image: string;
    video?: string;
  }[];
  content?: ILibraryItemContent[];
  hashtags: { _id: string; value: string; color?: string }[];
}

export type ILibraryItemDocument = ILibraryItem & Document;

const ContentSchema = new Schema<ILibraryItemContent>({
  type: { type: String, enum: ["paragraph", "header", "image", "link", "text"], required: true },
  value: { type: String, required: true },
  href: String,
});

const LibraryItemSchema = new Schema<ILibraryItemDocument>(
  {
    label: { type: String, required: true },
    type: {
      type: String,
      enum: ["article", "articleSmall", "reels", "music", "podcast"],
      required: true,
    },
    labelColor: { type: String, required: true },
    audioColor: { type: String },
    gallery: [
      {
        value: { type: String },
        type: { type: String, enum: ["image", "video"], required: true },
        image: { type: String, required: true },
        video: { type: String },
      },
    ],
    content: [ContentSchema],
    hashtags: [{ value: { type: String, required: true }, color: String }],
  },
  { collection: "library-items" }
);

export default mongoose.models.LibraryItem ||
  mongoose.model<ILibraryItemDocument>("LibraryItem", LibraryItemSchema);
