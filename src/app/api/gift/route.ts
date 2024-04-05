import { NextResponse } from "next/server";
import { parseData } from "./parseData";
import { checkCoursePrice } from "../_helpers";
import { Data } from "./type";
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
  console.log(formData);
  const priceCheck = await checkCoursePrice(formData);
  if (!priceCheck.success) {
    return NextResponse.json(priceCheck, { status: 422 });
  }

  const googleData = {
    sheetName: "certificates",
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
      result_url: `http://localhost:3000/education/checkout?id=${orderId}`, // change server_url
      server_url: `${SERVER_URL}/api/paymentStatus?sheetName=certificates`,
    };
    const { data, signature } = liqpay.cnb_object(json_string);
    const liqpayLink = generateLiqpayLink(data, signature);
    return NextResponse.json({ success: true, liqpayLink });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
