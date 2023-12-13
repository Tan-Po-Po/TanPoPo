"use server";

import dbConnect from "@/config/dbConnect";
import PromoCode from "@/models/PromoCode";

export const deletePromoCode = async (id: string) => {
  dbConnect();

  await PromoCode.findByIdAndDelete(id);
};
