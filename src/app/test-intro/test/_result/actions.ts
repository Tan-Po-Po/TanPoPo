"use server";

import dbConnect from "@/config/dbConnect";
import Course, { ICourse } from "@/models/Course";
import mongoose from "mongoose";

export const getCourses = async (level: string) => {
  await dbConnect();
  const courses = (await Course.find({
    level: level,
  })) as mongoose.Document<ICourse>[];

  return courses.map((course) => JSON.parse(JSON.stringify(course)));
};
