import mongoose, { Schema } from "mongoose";

export interface ILibraryItemContent {
  id?: string;
  _id?: string;
  type: "paragraph" | "header" | "image" | "audio";
  value?: string;
  href?: string;
  paragraph: { id: string; text: string; href?: string }[];
}

export interface ILibraryItem {
  _id?: string;
  label: string;
  section: string;
  type: "article" | "articleSmall" | "reels" | "music" | "podcast";
  labelColor: string;
  hashtags: { _id?: string; id?: string; value: string; color?: string }[];

  media: {
    id?: string;
    _id?: string;
    type: "image" | "video";
    image?: string;
    video?: string;
  }[];
  content?: ILibraryItemContent[];
}

export type ILibraryItemDocument = ILibraryItem & Document;

const ContentSchema = new Schema<ILibraryItemContent>({
  type: {
    type: String,
    enum: ["text", "image", "link", "header", "paragraph"],
    required: true,
  },
  value: String,
  href: String,
  paragraph: [{ text: { type: String, required: true }, href: String }],
});

const LibraryItemSchema = new Schema<ILibraryItemDocument>(
  {
    label: { type: String, required: true },
    section: { type: String, required: true },
    type: {
      type: String,
      enum: ["article", "articleSmall", "reels", "music", "podcast"],
      required: true,
    },
    labelColor: { type: String, required: true },

    media: [
      {
        type: { type: String, enum: ["image", "video"], required: true },
        image: { type: String },
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
