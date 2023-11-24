import mongoose from "mongoose";

export interface IShopItem {
  _id: string;
  name: string;
  small: {
    label?: {
      text: string;
      bgColor: string;
    };
    image: string;
    caption: string;
  };
  large?: {
    available: boolean;
    images: {
      type: string;
      href: string;
    }[];
    price: number;
    sale?:
      | {
          price: number;
          until: string;
        }
      | undefined;
    caption: string;
    hashtags: string[];
    select: {
      placeholder: string;
      values: string[];
    };
    likes: number;
  };
}

const ShopItemSchema = new mongoose.Schema<IShopItem>(
  {
    name: { type: String, required: true },
    small: {
      label: {
        text: { type: String },
        bgColor: { type: String },
      },
      image: { type: String, required: true },
      caption: { type: String, required: true },
    },
    large: {
      available: { type: Boolean },
      images: [
        {
          type: { type: String },
          href: { type: String },
        },
      ],
      price: { type: Number },
      sale: {
        price: { type: Number },
        until: { type: String },
      },
      caption: { type: String },
      hashtags: { type: [String] },
      select: {
        placeholder: { type: String },
        values: { type: [String] },
      },
      likes: { type: Number },
    },
  },
  { collection: "shop items" }
);

export default mongoose.models.ShopItem ||
  mongoose.model("ShopItem", ShopItemSchema);
