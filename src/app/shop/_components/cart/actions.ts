"use server";

import dbConnect from "@/config/dbConnect";
import { validateDate } from "@/helpers/validateDate";
import PromoCode, { IPromoCode, IPromoCodeDocument } from "@/models/PromoCode";

export const getPromoCode = async (
  code: string
): Promise<IPromoCode | null> => {
  await dbConnect;

  const codeDB = (await PromoCode.findOne({
    code: code,
  })) as IPromoCodeDocument | undefined;

  if (!codeDB) {
    return null;
  }
  if (codeDB.oneTimeUse || validateDate(codeDB.date)) {
    return JSON.parse(JSON.stringify(codeDB));
  }

  return null;
};
