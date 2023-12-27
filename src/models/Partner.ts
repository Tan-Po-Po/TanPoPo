import mongoose from "mongoose";
import Media from "./Media";

export interface IPartner {
  _id: string;
  image: {
    type: typeof mongoose.Schema.Types.ObjectId;
    ref: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
  };
}

// console.log(Media);

const PartnerSchema = new mongoose.Schema<IPartner>({
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Media && "Media",
    required: true,
  },
});

export default mongoose.models.Partner ||
  mongoose.model("Partner", PartnerSchema);
