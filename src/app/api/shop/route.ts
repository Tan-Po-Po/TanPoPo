import { NextResponse } from "next/server";
import { OrderData } from "./type";
import { checkOrder, googleDto } from "./helpers";
import {
  GOOGLE_SCRIPT_URL,
  SERVER_URL,
  MONOPAY_API_URL,
  MONOPAY_KEY,
} from "@/config/config";
import { sendEmail } from "../_helpers/sendEmail";
import Orders from "@/models/Orders";
import dbConnect from "@/config/dbConnect";

export async function POST(req: Request) {
  const formData = (await req.json()) as OrderData;

  const orderCheck = await checkOrder(formData);
  if (!orderCheck.success) {
    return NextResponse.json(orderCheck, { status: 422 });
  }

  try {
    // Save order data in google sheets
    const googleData = {
      sheetName: "orders",
      formData: googleDto(formData),
    };

    const google = await fetch(GOOGLE_SCRIPT_URL as string, {
      method: "POST",
      body: JSON.stringify(googleData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const orderId = await google.text();

    if (formData.payAfter) {
      // Send email if payment is set to later
      const mailResult = await sendEmail("orders", formData, orderId);
      if (!mailResult.success) throw Error(mailResult.error);

      return NextResponse.json({ success: true, orderId });
    } else {
      // Save order in DB to send email after payment request from bank API
      await dbConnect();
      await Orders.create({
        orderId,
        data: JSON.stringify(formData),
      });

      // Generate monopay link
      const invoiceData = {
        amount: formData.totalPrice.final * 100,
        ccy: 980,
        action: "pay",
        currency: "UAH",
        merchantPaymInfo: {
          reference: orderId,
          destination: `Замовлення ${orderId}`,
          comment: `Замовлення ${orderId}`,
        },
        redirectUrl: `${SERVER_URL}/shop/checkout/thanks?id=${orderId}`,
        webHookUrl: `${SERVER_URL}/api/paymentStatus?sheetName=orders`,
        // webHookUrl: `https://c253-46-219-10-12.ngrok-free.app/api/paymentStatus?sheetName=orders`,
      };

      const monopayResponse = await fetch(MONOPAY_API_URL.CREATE_PAYMENT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Token": MONOPAY_KEY ? MONOPAY_KEY : "",
        },
        body: JSON.stringify(invoiceData),
      });
      const { pageUrl, invoiceId } = await monopayResponse.json();

      return NextResponse.json({
        success: true,
        monopayLink: pageUrl,
        invoiceId,
      });
    }
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      {
        message: "Помилка при формуванні замовлення, спробуйте ще раз пізніше",
      },
      { status: 400 }
    );
  }
}
