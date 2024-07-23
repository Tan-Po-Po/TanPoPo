"use server";

import { MONOPAY_API_URL, MONOPAY_KEY } from "@/config/config";

// export type statusOld =
//   | "success"
//   | "error"
//   | "failure"
//   | "processing"
//   | "try_again";
export type paymentStatus =
  | "created"
  | "processing"
  | "hold"
  | "success"
  | "failure"
  | "reversed"
  | "expired";

export const getPaymentStatus = async (
  invoiceId: string
): Promise<paymentStatus> => {
  try {
    const response = await fetch(`${MONOPAY_API_URL.GET_STATUS}${invoiceId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Token": MONOPAY_KEY ? MONOPAY_KEY : "",
      },
    });
    const data = await response.json();

    return data.status;
  } catch (e) {
    console.error(e);
    return "failure";
  }
};
