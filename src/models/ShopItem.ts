import mongoose from "mongoose";

export interface IShopItem {
  _id?: string;
  name: string;
  small: {
    label?: {
      text: string;
      bgColor: string;
    };
    image: string;
    caption: string;
  };
  large: {
    available: boolean;
    gallery: {
      _id?: string;
      value?: string;
      type: "image" | "video";
      image: string;
      video?: string;
    }[];
    caption: string[];
    hashtags: string[];
    likes?: number;
    variants: {
      value: string;
      label: string;
      price: number;
      sale?: {
        price: number;
        until: string;
      };
    }[];
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
      available: { type: Boolean, required: true },
      gallery: [
        {
          type: { type: String, required: true },
          value: { type: String },
          image: { type: String, required: true },
          video: { type: String },
        },
      ],

      caption: { type: [String], required: true },
      hashtags: { type: [String], required: true },
      likes: { type: Number, default: 0, required: true },
      variants: [
        {
          value: { type: String, required: true },
          label: { type: String, required: true },
          price: { type: Number, required: true },
          sale: {
            price: { type: Number },
            until: { type: String },
          },
        },
      ],
    },
  },
  { collection: "shop items" }
);

export default mongoose.models.ShopItem ||
  mongoose.model("ShopItem", ShopItemSchema);
