"use server";

import dbConnect from "@/config/dbConnect";
import ShopProduct, { IShopProduct } from "@/models/ShopProduct";
import mongoose from "mongoose";

export const toggleLikeToShopProduct = async (
  _id: string,
  isLiked: boolean | undefined
) => {
  try {
    await dbConnect();

    const product = (await ShopProduct.findById(_id).select(
      "large.likes"
    )) as mongoose.Document<Partial<IShopProduct>>;

    if (isLiked) {
      // @ts-ignore
      product.large!.likes--;
    } else {
      // @ts-ignore
      product.large!.likes++;
    }

    await product.save();

    console.log("like product", product);
  } catch (err) {
    console.log(err);
  }
};
