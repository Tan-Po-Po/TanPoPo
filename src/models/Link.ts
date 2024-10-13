import mongoose, { Schema } from "mongoose";


export interface ILink{
  _id?: string;
  label: string;
  originalUrl: string;
  slug: string;
  tabTitle: string; // metadata
  pageDescription: string; // metadata
}


const LinkSchema = new Schema<ILink>(
  {
    label: { type: String, required: false },
    originalUrl: { type: String, required: true },
    slug: { type: String, required: true },
    tabTitle: { type: String, required: true },
    pageDescription: { type: String, required: true },
  },
  { collection: "links" }
);

export default mongoose.models.Link ||
  mongoose.model<ILink>("Link", LinkSchema);
