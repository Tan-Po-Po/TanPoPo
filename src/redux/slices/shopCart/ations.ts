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
  console.log("====PRODUCT AND VARIANT===");
  console.log(product);
  console.log(variant);
  console.log("==== END ===");
  let images = getCartItemImages({
    gallery: product.large!.gallery,
    itemValue: variant!.value,
  });

  const isOnSale = variant!.sale && new Date() < new Date(variant!.sale.until);
  const cartItem: ICartItem = {
    _id: id,
    variantId: variant!.id!,
    name: product.name!,
    label: variant!.label,
    amount: 1,
    images,
    price: {
      original: variant!.price!,
      sale: isOnSale ? variant!.sale?.price || 0 : 0,
    },
  };

  return cartItem;
};
