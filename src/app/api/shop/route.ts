import { NextResponse } from "next/server";
import { Data } from "./type";
import { checkOrder, googleDto, generateLiqpayLink } from "./helpers";
import { GOOGLE_SCRIPT_URL, SERVER_URL } from "@/config/config";
//@ts-expect-error
import Liqpay from "liqpayjs-sdk";
import { LIQPAY_PRIVATE_KEY, LIQPAY_PUBLIC_KEY } from "@/config/config";
import { sendEmail } from "../_helpers/sendEmail";

export async function POST(req: Request) {
  const formData = (await req.json()) as Data;
  const orderCheck = await checkOrder(formData);
  if (!orderCheck.success) {
    return NextResponse.json(orderCheck, { status: 422 });
  }
  console.log(orderCheck);
  console.log(formData);

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
      // Generate liqpay link
      const liqpay = new Liqpay(LIQPAY_PUBLIC_KEY, LIQPAY_PRIVATE_KEY);

      const json_string = {
        version: "3",
        action: "pay",
        amount: formData.totalPrice.final,
        currency: "UAH",
        description: `Оплата замовлення ${orderId}`,
        order_id: orderId,
        language: "uk",
        result_url: `${SERVER_URL}/shop/checkout/thanks?id=${orderId}`,
        server_url: `${SERVER_URL}/api/paymentStatus?sheetName=orders`,
      };
      const { data, signature } = liqpay.cnb_object(json_string);
      // console.log(data);
      // console.log(signature);
      const liqpayLink = generateLiqpayLink(data, signature);
      return NextResponse.json({ success: true, liqpayLink });
    }
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(
      {
        message: "Помилка при формуванні замовлення, спробуйте ще раз пізніше",
      },
      { status: 400 }
    );
  }
}
