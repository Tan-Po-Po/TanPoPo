"use server";

import dbConnect from "@/config/dbConnect";
import { getCartItemImages } from "@/helpers";
import ShopItem, { IShopProduct } from "@/models/ShopProduct";
import mongoose from "mongoose";
import { ICartItem } from "./shopCartSlice";

export const getShopItemFromDb = async (id: string, value: string) => {
  await dbConnect();

  const productDB = (await ShopItem.findById(id)
    .select("name large.variants large.gallery ")
    .populate("large.gallery.image")) as mongoose.Document<
    Partial<IShopProduct>
  >;

  if (!productDB) {
    return undefined;
  }

  const product: Partial<IShopProduct> = JSON.parse(JSON.stringify(productDB));

  const variant = product.large?.variants.find(
    (variant) => variant.value === value
  );

  let images = getCartItemImages({
    gallery: product.large!.gallery,
    itemValue: variant!.value,
  });

  const cartItem: ICartItem = {
    _id: variant!.id!,
    name: product.name!,
    label: variant!.label,
    amount: 1,
    images,
    price: {
      original: variant!.price!,
      sale: variant!.sale?.price || 0,
    },
  };

  return cartItem;
};
