import mongoose from "mongoose";
import ShopMedia from "./ShopMedia";
export interface IShopPartner {
  _id?: string;
  bgColor: string;
  href: string;
  labelTop: {
    text: string;
    bgColor: string;
  };
  labelBottom?: {
    text: string;
    bgColor: string;
  };
  logo: { filename: string };
  name: string;
  caption: string[];
  items: {
    id?: string;
    image: { filename: string };
    href: string;
  }[];
  hashtags: string[];
}

const ShopPartnerSchema = new mongoose.Schema(
  {
    bgColor: { type: String, required: true },
    href: { type: String, required: true },
    labelTop: {
      text: { type: String, required: true },
      bgColor: { type: String, required: true },
    },
    labelBottom: {
      text: { type: String, required: true },
      bgColor: { type: String, required: true },
    },
    logo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: ShopMedia && "ShopMedia",
      required: true,
    },
    name: { type: String, required: true },
    caption: { type: [String], required: true },
    items: {
      type: [
        {
          image: {
            type: mongoose.Schema.Types.ObjectId,
            ref: ShopMedia && "ShopMedia",
            required: true,
          },
          href: { type: String, required: true },
        },
      ],
      required: true,
    },
    hashtags: { type: [String], required: true },
  },
  { collection: "shop-partners" }
);

export default mongoose.models.ShopPartner ||
  mongoose.model("ShopPartner", ShopPartnerSchema);
