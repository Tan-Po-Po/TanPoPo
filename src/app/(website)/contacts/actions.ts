"use server";
import Guides, { IGuides } from "@/models/Guides";
import dbConnect from "@/config/dbConnect";

export const getGuides = async () => {
  try {
    await dbConnect();

    const guides = await Guides.find();
    return JSON.parse(JSON.stringify(guides)) as IGuides[];
  } catch (err: any) {
    console.log(err);
  }
};
