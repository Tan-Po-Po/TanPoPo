import { type NextRequest, NextResponse } from "next/server";
import {
  GOOGLE_SCRIPT_URL,
  MONOPAY_KEY,
  MONOPAY_API_URL,
  SERVER_URL,
} from "@/config/config";
import crypto from "crypto";
import { sheetName } from "../_helpers/type";
import { type paymentStatus } from "@/helpers/getPaymentStatus";
import Orders from "@/models/Orders";
import dbConnect from "@/config/dbConnect";

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const sheetName = url.searchParams.get("sheetName") as sheetName;
  if (!sheetName) return NextResponse.json({ success: false });

  const jsonData = await req.json();
  const xSign = req.headers.get("X-Sign");

  if (!jsonData || !xSign) {
    return getResponse(false, 400);
  }

  const passVerification = await verify(xSign, JSON.stringify(jsonData));
  if (!passVerification) {
    return getResponse(false, 400);
  }

  let paymentStatus = "";
  switch (jsonData.status as paymentStatus) {
    case "success":
      paymentStatus = "Успішно";
      break;
    case "expired":
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
    id: jsonData.reference,
    status: paymentStatus,
  };
  try {
    await fetch(GOOGLE_SCRIPT_URL as string, {
      method: "POST",
      body: JSON.stringify(googleData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (paymentStatus === "success") {
      if (sheetName === "orders") {
        await dbConnect();
        const orderDataResponse = await Orders.findOne({
          orderId: jsonData.reference,
        });

        const orderData = JSON.parse(JSON.stringify(orderDataResponse)) as {
          orderId: string;
          data: string;
        };

        if (orderData.orderId) {
          const parsedData = {
            orderId: orderData.orderId,
            ...JSON.parse(orderData.data),
          };
          const mailResponse = await fetch(
            `${SERVER_URL}/api/email?sheetName=orders`,
            {
              method: "POST",
              body: JSON.stringify(parsedData),
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          );

          if (mailResponse.ok) {
            await Orders.deleteOne({
              orderId: jsonData.reference,
            });
          }
        }
      }
      return getResponse(true);
    }
  } catch (error) {
    console.error(error);
    return getResponse(false, 500);
  }
}

const verify = async (xSign: string, invoiceData: string) => {
  const pubKeyResponse = await fetch(MONOPAY_API_URL.GET_PUBKEY, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Token": MONOPAY_KEY ? MONOPAY_KEY : "",
    },
  });
  const { key: pubKey } = await pubKeyResponse.json();
  const signatureBuf = Buffer.from(xSign, "base64");
  const publicKeyBuf = Buffer.from(pubKey, "base64");
  const verify = crypto.createVerify("SHA256");
  verify.write(invoiceData);
  verify.end();
  const result = verify.verify(publicKeyBuf, signatureBuf);
  return result;
};

const getResponse = (success: boolean, status: number = 200) => {
  const response = NextResponse.json({ success }, { status });
  response.headers.set("X-Sign", MONOPAY_KEY || "");
  return response;
};
