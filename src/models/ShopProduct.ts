import mongoose from "mongoose";
import ShopMedia from "./ShopMedia";
export interface IShopProduct {
  _id: string;
  name: string;
  small: {
    label?: {
      text: string;
      bgColor: string;
    };
    image: { filename: string };
    caption: string;
  };
  large: {
    available: boolean;
    inDevelopment: boolean;
    gallery: {
      id?: string;
      value?: string;
      type: "image" | "video";
      image: { filename: string };
      video?: string;
    }[];
    caption: string[];
    hashtags: string[];
    likes: number;
    variants: {
      id?: string;
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

const ShopProductSchema = new mongoose.Schema<IShopProduct>(
  {
    name: { type: String, required: true },
    small: {
      label: {
        text: { type: String },
        bgColor: { type: String },
      },
      image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ShopMedia && "ShopMedia",
        required: true,
      },
      caption: { type: String },
    },
    large: {
      available: { type: Boolean, required: true },
      gallery: [
        {
          type: { type: String, required: true },
          value: { type: String },
          image: {
            type: mongoose.Schema.Types.ObjectId,
            ref: ShopMedia && "ShopMedia",
            required: true,
          },
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
            until: { type: Date },
          },
        },
      ],
    },
  },
  { collection: "shop-products" }
);

export default mongoose.models.ShopProduct ||
  mongoose.model("ShopProduct", ShopProductSchema);
