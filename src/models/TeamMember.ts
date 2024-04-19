import mongoose from "mongoose";
import Media from "./Media";
export interface ITeamMember {
  _id: string;
  label: { value: string; color: string };
  name: string;
  order: number;
  image: {
    filename: string;
  };
  video?: string;
  certificates: {
    keyPoints: string[];
    description: {
      _id: string;
      label: string;
      image: {
        filename: string;
      };
      caption: string;
    }[];
  };
  education: {
    level: string;
    university: string;
    trainings: string;
  };
  about: {
    _id: string;
    text: string;
    color: string;
  }[];
}

const TeamMemberSchema = new mongoose.Schema<ITeamMember>(
  {
    label: {
      value: { type: String, required: true },
      color: { type: String, required: true },
    },
    name: { type: String, required: true },
    order: { type: Number, required: true, defaultValues: 0 },
    image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Media && "Media",
      required: true,
    },
    video: { type: String, required: false },
    certificates: {
      keyPoints: { type: [String], required: true },
      description: [
        {
          label: { type: String, required: true },
          image: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Media && "Media",
            required: true,
          },
          caption: { type: String, required: true },
        },
      ],
    },
    education: {
      level: { type: String, required: true },
      university: { type: String, required: true },
      trainings: { type: String, required: true },
    },
    about: [
      {
        text: { type: String, required: true },
        color: { type: String, required: true },
      },
    ],
  },
  { collection: "team-members" }
);

export default mongoose.models.TeamMember ||
  mongoose.model("TeamMember", TeamMemberSchema);
