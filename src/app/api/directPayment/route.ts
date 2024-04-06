import { NextResponse } from "next/server";
//@ts-expect-error
import Liqpay from "liqpayjs-sdk";
import {
  LIQPAY_PRIVATE_KEY,
  LIQPAY_PUBLIC_KEY,
  SERVER_URL,
} from "@/config/config";
import { generateLiqpayLink } from "@/helpers";

type Data = {
  amount: number;
  comment: string;
};

export async function POST(req: Request) {
  const formData = (await req.json()) as Data;

  try {
    // Generate liqpay link
    const liqpay = new Liqpay(LIQPAY_PUBLIC_KEY, LIQPAY_PRIVATE_KEY);
    const orderId = Date.now();

    const json_string = {
      version: "3",
      action: "pay",
      amount: formData.amount,
      currency: "UAH",
      description: formData.comment,
      order_id: orderId,
      language: "uk",
      result_url: `${SERVER_URL}/contacts/requisites?id=${orderId}`, // Change
    };
    const { data, signature } = liqpay.cnb_object(json_string);
    const liqpayLink = generateLiqpayLink(data, signature);

    return NextResponse.json({ success: true, liqpayLink });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      {
        message: "Сталася помилка, спробуйте ще раз пізніше",
      },
      { status: 400 }
    );
  }
}
