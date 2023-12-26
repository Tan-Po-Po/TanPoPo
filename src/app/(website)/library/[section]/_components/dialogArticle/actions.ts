"use server";

import dbConnect from "@/config/dbConnect";
import LibraryItem from "@/models/LibraryItem";

export const getLibraryItem = async (id: string) => {
  await dbConnect();

  const item = await LibraryItem.findById(id).lean;

  if (!item) {
    return null;
  }

  return JSON.parse(JSON.stringify(item));
};
