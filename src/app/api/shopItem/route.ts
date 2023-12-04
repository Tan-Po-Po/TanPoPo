import dbConnect from "@/config/dbConnect";
import { getCartItemImages } from "@/helpers/getCartItemImages";
import ShopItem, { IShopProduct } from "@/models/ShopProduct";
import { ICartItem } from "@/redux/slices/shopCart/shopCartSlice";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await dbConnect();
    console.log("dbConnect add to cart");

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const value = searchParams.get("value");

    console.log("finding item");

    const productDB = (await ShopItem.findById(id).select(
      "name large.variants large.gallery "
    )) as mongoose.Document<Partial<IShopProduct>>;

    console.log("item is found", productDB);

    const product: Partial<IShopProduct> = await productDB.toObject();
    console.log("product", product);

    const variant = product.large?.variants.find(
      (variant) => variant.value === value
    );

    console.log("variant", variant);

    let images = getCartItemImages({
      gallery: product.large!.gallery,
      itemValue: variant!.value,
    });

    const cartItem: ICartItem = {
      _id: variant!._id!,
      name: product.name!,
      label: variant!.label,
      amount: 1,
      images,
      price: {
        original: variant!.price!,
        sale: variant!.sale?.price,
      },
    };

    console.log("sending item", cartItem);

    return NextResponse.json(cartItem);
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
