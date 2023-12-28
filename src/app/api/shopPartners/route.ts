import ShopPartner from "@/models/ShopPartner";
import { NextResponse } from "next/server";
import dbConnect from "@/config/dbConnect";

export async function GET() {
  await dbConnect();
  try {
    const ShopPartners = await ShopPartner.find()
      .populate("items.image")
      .populate("logo");


    return NextResponse.json(
      ShopPartners.map((item) => JSON.parse(JSON.stringify(item)))
    );
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
