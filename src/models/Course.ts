import mongoose from "mongoose";

export interface ICourse {
  _id: string;
  type: "teacher" | "video" | "audio" | "book";
  name: string;
  nameJapanese: string;
  level: string;
  prices: {
    lessons: number;
    price: number;
  }[];
  small: {
    label: string;
    labelColor: string;
    bgColor: string;
    description: string;
  };
  medium: {
    labels: string[];
    labelColor: string;
    bgColor: string;
    description: string[];
  };
  large: {
    labels: string[];
    labelColor: string;
    bgColor: string;
    description: {
      icon: string;
      text: string;
    }[];
  };
}

const CoursesSchema = new mongoose.Schema<ICourse>(
  {
    name: { type: String, required: true },
    nameJapanese: { type: String, required: true },
    level: { type: String, required: true },
    prices: {
      lessons: { type: Number, required: true },
      price: [{ type: Number, required: true }],
    },
    small: {
      label: { type: String, required: true },
      labelColor: { type: String, required: true },
      bgColor: { type: String, required: true },
      description: { type: String, required: true },
    },
    medium: {
      labels: [{ type: String, required: true }],
      labelColor: { type: String, required: true },
      bgColor: { type: String, required: true },
      description: [{ type: String, required: true }],
    },
    large: {
      labels: [{ type: String, required: true }],
      labelColor: { type: String, required: true },
      bgColor: { type: String, required: true },
      description: [
        {
          icon: { type: String, required: true },
          text: { type: String, required: true },
        },
      ],
    },
  },
  { collection: "courses" }
);

export default mongoose.models.Courses ||
  mongoose.model("Courses", CoursesSchema);