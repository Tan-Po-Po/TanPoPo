import ShopItem from "@/models/ShopProduct";
import { NextResponse } from "next/server";
import dbConnect from "@/config/dbConnect";

export async function GET() {
  await dbConnect();

  try {
    const shopItems = await ShopItem.find().populate({
      path: "large",
      populate: { path: "gallery.image" },
    });

    return NextResponse.json(
      shopItems.map((item) => JSON.parse(JSON.stringify(item)))
    );
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}