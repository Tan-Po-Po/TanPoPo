import dbConnect from "@/config/dbConnect";
import LibraryItem, { ILibraryItem } from "@/models/LibraryItem";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const itemDb = (await LibraryItem.findById(id).lean()) as
      | ILibraryItem
      | undefined;

    return NextResponse.json(itemDb);
  } catch (err: any) {
    console.log();
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
