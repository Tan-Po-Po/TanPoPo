import mongoose from "mongoose";

export interface INotification {
  _id: string;
  isActive: boolean;
  pages: { page: string }[];
  content: [
    {
      _id: string;
      children: {
        text: string;
        children: {
          text: string;
        }[];
        linkType: "custom" | "local";
        newTab: boolean;
        type: "link";
        url: string;
      }[];
    }
  ];
  color: string;
  bgColor: string;
  appearTime: number;
  closeTime?: number;
}

const NotificationSchema = new mongoose.Schema<INotification>(
  {
    pages: [{ page: { type: String, required: true } }],
    content: [
      {
        children: [
          {
            text: { type: String, required: true },
            children: [{ text: { type: String, required: true } }],
            linkType: { type: String },
            newTab: { type: Boolean },
            type: { type: String },
            url: { type: String },
          },
        ],
      },
    ],
    color: { type: String, required: true },
    bgColor: { type: String, required: true },
    appearTime: { type: Number, required: true },
    closeTime: { type: Number, required: true },
  },
  { collection: "notifications" }
);

export default mongoose.models.Notification ||
  mongoose.model("Notification", NotificationSchema);
