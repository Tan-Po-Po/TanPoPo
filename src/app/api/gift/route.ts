import { NextResponse } from "next/server";
import { parseData } from "./parseData";
import { checkCoursePrice } from "../_helpers";
import { Data } from "./type";
import {
  MONOPAY_API_URL,
  MONOPAY_PUBLIC_KEY,
  GOOGLE_SCRIPT_URL,
  SERVER_URL,
} from "@/config/config";

export async function POST(req: Request) {
  const formData = (await req.json()) as Data;
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
    console.log(orderId);
    // Generate monopay link
    const invoiceData = {
      amount: priceCheck.price! * 100,
      ccy: 980,
      action: "pay",
      currency: "UAH",
      merchantPaymInfo: {
        reference: orderId,
        destination: `Вивчення мови ${orderId}`,
        comment: `Вивчення мови ${orderId}`,
      },
      redirectUrl: `${SERVER_URL}/education/checkout?id=${orderId}`,
      webHookUrl: `${SERVER_URL}/api/paymentStatus?sheetName=certificates`,
    };

    const monopayResponse = await fetch(MONOPAY_API_URL.CREATE_PAYMENT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Token": MONOPAY_PUBLIC_KEY ? MONOPAY_PUBLIC_KEY : "",
      },
      body: JSON.stringify(invoiceData),
    });
    const { pageUrl, invoiceId } = await monopayResponse.json();
    return NextResponse.json({
      success: true,
      monopayLink: pageUrl,
      invoiceId,
    });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
