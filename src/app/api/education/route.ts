import { NextResponse } from "next/server";
import { Data } from "./type";
import { parseData } from "./parseData";
import { checkCoursePrice } from "../_helpers";
//@ts-expect-error
import Liqpay from "liqpayjs-sdk";
import {
  LIQPAY_PRIVATE_KEY,
  LIQPAY_PUBLIC_KEY,
  GOOGLE_SCRIPT_URL,
  SERVER_URL,
} from "@/config/config";
import { generateLiqpayLink } from "@/helpers";

export async function POST(req: Request) {
  const formData = (await req.json()) as Data;

  const priceCheck = await checkCoursePrice(formData);
  if (!priceCheck.success) {
    return NextResponse.json(priceCheck, { status: 422 });
  }

  const googleData = {
    sheetName: "courses",
    formData: parseData(formData),
  };


  try {
    const google = await fetch(GOOGLE_SCRIPT_URL as string, {
      method: "POST",
      body: JSON.stringify(googleData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const orderId = await google.text();
    console.log(orderId)
    // Generate liqpay link
    const liqpay = new Liqpay(LIQPAY_PUBLIC_KEY, LIQPAY_PRIVATE_KEY);
    const json_string = {
      version: "3",
      action: "pay",
      amount: priceCheck.price,
      currency: "UAH",
      description: `Вивчення мови ${orderId}`,
      order_id: orderId,
      language: "uk",
      result_url: `${SERVER_URL}/education/checkout?id=${orderId}`, 
      server_url: `${SERVER_URL}/api/paymentStatus?sheetName=courses`,
    };
    const { data, signature } = liqpay.cnb_object(json_string);
    const liqpayLink = generateLiqpayLink(data, signature);
    return NextResponse.json({ success: true, liqpayLink });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
