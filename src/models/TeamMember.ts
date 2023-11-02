import mongoose from "mongoose";

export interface ITeamMember {
  _id: string;
  label: { _id?: string; value: string; color: string };
  name: string;
  image: string;
  certificates: {
    keyPoints: string[];
    description: {
      _id: string;
      label: string;
      image: string;
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
    image: { type: String, required: true },
    certificates: {
      keyPoints: { type: [String], required: true },
      description: [
        {
          label: { type: String, required: true },
          image: { type: String, required: true },
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
  { collection: "team members" }
);

export default mongoose.models.TeamMember ||
  mongoose.model("TeamMember", TeamMemberSchema);
