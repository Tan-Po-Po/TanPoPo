import mongoose from "mongoose";
import CourseMedia from "./CourseMedia";

export interface ICourse {
  _id: string;
  type: "teacher" | "video" | "audio" | "book" | "mega";
  inDevelopment: boolean;
  name: string;
  nameJapanese: string;
  secondName: string;
  secondNameJapanese: string;
  level: string[];
  images: [{ image: { filename: string } }];
  href: string;
  prices: {
    individual: {
      lessons: number;
      price: number;
      link: string;
    }[];
    group: {
      lessons: number;
      price: number;
      link: string;
    }[];
  };
  labels: string[];
  small: {
    label: string;
    labelColor: string;
    bgColor: string;
    description: string;
  };
  medium: {
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
    inDevelopment: { type: Boolean, required: true },
    name: { type: String, required: true },
    nameJapanese: { type: String, required: true },
    secondName: { type: String },
    secondNameJapanese: { type: String},
    level: [{ type: String, required: true }],
    images: [
      {
        image: {
          type: mongoose.Schema.Types.ObjectId,
          ref: CourseMedia && "CourseMedia",
          required: true,
        },
      },
    ],
    href: { type: String, required: false },
    prices: {
      individual: [
        {
          lessons: { type: Number, required: true },
          price: { type: Number, required: true },
          link: { type: String, required: true },
        },
      ],
      group: [
        {
          lessons: { type: Number, required: true },
          price: { type: Number, required: true },
          link: { type: String, required: true },
        },
      ],
    },
    labels: [{ type: String, required: true }],
    small: {
      label: { type: String, required: true },
      labelColor: { type: String, required: true },
      bgColor: { type: String, required: true },
      description: { type: String, required: true },
    },
    medium: {
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
