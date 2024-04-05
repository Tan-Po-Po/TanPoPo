import { type NextRequest, NextResponse } from "next/server";
import {
  GOOGLE_SCRIPT_URL,
  LIQPAY_PRIVATE_KEY,
  LIQPAY_PUBLIC_KEY,
} from "@/config/config";
//@ts-expect-error
import Liqpay from "liqpayjs-sdk";
import { sheetName } from "../_helpers/type";

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const sheetName = url.searchParams.get("sheetName") as sheetName;
  if (!sheetName) return NextResponse.json({ success: false });

  const formData = await req.formData();
  const data = formData.get("data")?.toString();
  const signature = formData.get("signature");

  const liqpay = new Liqpay(LIQPAY_PUBLIC_KEY, LIQPAY_PRIVATE_KEY);
  const dataString = LIQPAY_PRIVATE_KEY! + data + LIQPAY_PRIVATE_KEY;
  const serverSignature: string = liqpay.str_to_sign(dataString);

  if (!(serverSignature === signature)) {
    return NextResponse.json({ success: false }, { status: 403 });
  }

  const decodedData = JSON.parse(Buffer.from(data!, "base64").toString());
  console.log("+++PAYMENT STATUS+++");
  console.log(decodedData);
  let paymentStatus = "";
  switch (decodedData.status) {
    case "success":
      paymentStatus = "Виконано";
      break;
    case "error":
      paymentStatus = "Відхилено";
      break;
    case "failure":
      paymentStatus = "Відхилено";
      break;
    default:
      paymentStatus = "Очікує";
  }

  // Save order status in google sheets
  const googleData = {
    sheetName,
    id: decodedData.order_id,
    status: paymentStatus,
  };

  try {
    fetch(GOOGLE_SCRIPT_URL as string, {
      method: "POST",
      body: JSON.stringify(googleData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
