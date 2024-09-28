import dbConnect from "@/config/dbConnect";
import LibraryItem, { ILibraryItem } from "@/models/LibraryItem";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const articleUrl = searchParams.get("url");

    const itemDb = (await LibraryItem.findOne({ url: articleUrl })
      .populate("media.image")
      .populate("content.images.image")
      .lean()) as ILibraryItem | undefined;

    return NextResponse.json(itemDb);
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
