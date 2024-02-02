"use server";

import dbConnect from "@/config/dbConnect";
import { validateDate } from "@/helpers/validateDate";
import PromoCode, { IPromoCodeDocument } from "@/models/PromoCode";
import { cookies } from "next/headers";

export const validateKey = async (key: string) => {
  await dbConnect();

  const codeDb = (await PromoCode.findOne({
    code: key,
    location: "library",
  })) as IPromoCodeDocument;

  if (!codeDb) {
    return false;
  }

  return validateDate(codeDb.date);
};

export const setLibraryKeyToCookies = (key: string) => {
  let expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 30 * 24 * 60 * 60 * 1000);

  cookies().set("libraryKey", key, { expires: expirationDate });
};
