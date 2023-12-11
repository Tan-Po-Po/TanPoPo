"use server";

import dbConnect from "@/config/dbConnect";
import { validateDate } from "@/helpers";
import PromoCode, { IPromoCode, IPromoCodeDocument } from "@/models/PromoCode";

export const getPromoCode = async (
  code: string
): Promise<IPromoCode | null> => {
  await dbConnect;

  const codeDB = (await PromoCode.findOne({
    code: code,
  })) as IPromoCodeDocument | undefined;

  if (!codeDB || !validateDate(codeDB.date)) {
    return null;
  }

  return JSON.parse(JSON.stringify(codeDB));
};
