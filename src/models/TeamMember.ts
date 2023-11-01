import mongoose from "mongoose";

export interface TeamMembers {
  _id?: string;
  label: { value: string; color: string };
  name: string;
  image: string;
  certificates: {
    keyPoints: string[];
    description: { label: string; image: string; caption: string }[];
  };
  education: {
    level: string;
    university: string;
    trainings: string;
  };
  about: {
    text: string;
    color: string;
  }[];
}

const TeamMemberSchema = new mongoose.Schema<TeamMembers>(
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
