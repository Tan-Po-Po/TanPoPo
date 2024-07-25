import { NextResponse } from "next/server";
import {
  MONOPAY_API_URL,
  MONOPAY_KEY,
  SERVER_URL,
} from "@/config/config";

type Data = {
  amount: number;
  comment: string;
};

export async function POST(req: Request) {
  const formData = (await req.json()) as Data;

  try {
    // Generate monopay link
    const orderId = Date.now().toString();
    const invoiceData = {
      amount: formData.amount * 100,
      ccy: 980,
      action: "pay",
      currency: "UAH",
      merchantPaymInfo: {
        reference: orderId,
        destination: formData.comment,
        comment: formData.comment,
      },
      redirectUrl: `${SERVER_URL}/contacts/requisites?id=${orderId}`,
    };

    const monopayResponse = await fetch(MONOPAY_API_URL.CREATE_PAYMENT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Token": MONOPAY_KEY ? MONOPAY_KEY : "",
      },
      body: JSON.stringify(invoiceData),
    });
    const response = await monopayResponse.json();
    console.log(response)
    const { pageUrl, invoiceId } = response;

    return NextResponse.json({
      success: true,
      monopayLink: pageUrl,
      invoiceId,
    });
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
