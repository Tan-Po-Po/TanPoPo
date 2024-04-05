"use server";
//@ts-expect-error
import Liqpay from "liqpayjs-sdk";
import { LIQPAY_PRIVATE_KEY, LIQPAY_PUBLIC_KEY } from "@/config/config";

export type status =
  | "success"
  | "error"
  | "failure"
  | "processing"
  | "try_again";

export const getPaymentStatus = async (order_id: string): Promise<status> => {
  try {
    const liqpay = new Liqpay(LIQPAY_PUBLIC_KEY, LIQPAY_PRIVATE_KEY);
    return new Promise((resolve, reject) => {
      liqpay.api(
        "request",
        {
          action: "status",
          version: "3",
          order_id,
          language: "uk",
        },
        function (data: any) {
          console.log("====getPaymentStatus====");
          console.log(data.status);
          resolve(data.status);
        },
        function (error: any) {
          console.error(error);
          reject("error");
        }
      );
    });
  } catch (e) {
    console.error(e);
    return "error";
  }
};
