import ShopItem from "@/models/ShopProduct";
import { NextResponse } from "next/server";
import dbConnect from "@/config/dbConnect";

export async function GET() {
  await dbConnect();
  console.log("db connected")
  try {
    const shopItems = await ShopItem.find();
    console.log(shopItems)
    return NextResponse.json(shopItems.map((item) => JSON.parse(JSON.stringify(item))));
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
