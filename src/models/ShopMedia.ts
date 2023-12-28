import mongoose from "mongoose";

const ShopMediaSchema = new mongoose.Schema(
  {
    filename: { type: String, required: true },
    mimeType: { type: String },
    width: { type: Number },
    height: { type: Number },
  },
  { collection: "shop-medias" }
);

export default mongoose.models.ShopMedia ||
  mongoose.model("ShopMedia", ShopMediaSchema);
