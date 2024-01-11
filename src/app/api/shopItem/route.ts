import dbConnect from "@/config/dbConnect";
import { getCartItemImages } from "@/helpers";
import ShopItem, { IShopProduct } from "@/models/ShopProduct";
import { ICartItem } from "@/redux/slices/shopCart/shopCartSlice";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const value = searchParams.get("value");

    const productDB = (await ShopItem.findById(id)
      .select("name large.variants large.gallery ")
      .populate("large.gallery.image")) as mongoose.Document<
      Partial<IShopProduct>
    >;

    const product: Partial<IShopProduct> = await productDB.toObject();

    const variant = product.large?.variants.find(
      (variant) => variant.value === value
    );


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
        sale: variant!.sale?.price || 0,
      },
    };

    return NextResponse.json(cartItem);
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
