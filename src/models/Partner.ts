import mongoose from "mongoose";

export interface IPartner {
  _id: string;
  src: string;
}

const PartnerSchema = new mongoose.Schema<IPartner>({
  src: { type: String, required: true },
});

export default mongoose.models.Partner ||
  mongoose.model("Partner", PartnerSchema);
