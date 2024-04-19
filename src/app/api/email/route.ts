import { NextResponse } from "next/server";
import { sendEmail } from "../_helpers/sendEmail";
import { sheetName } from "../_helpers/type";

export async function POST(req: Request) {
  const url = new URL(req.url);
  const sheetName = url.searchParams.get("sheetName") as sheetName;
  const formData = await req.json();

  try {
    await sendEmail(sheetName, formData, formData.orderId);
    return NextResponse.json({ status: 200 });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(
      {
        message: "Помилка при відправці листа, будь ласка,оновіть сторінку",
      },
      { status: 400 }
    );
  }
}
