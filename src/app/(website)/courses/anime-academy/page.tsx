import { CourseCardDescription, Typography, DialogGallery } from "@/components";
import cl from "../page.module.scss";
import Course, { ICourse } from "@/models/Course";
import dbConnect from "@/config/dbConnect";
import mongoose from "mongoose";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ANIME_COURSE_ID } from "@/config/config";

export const metadata: Metadata = {
  title: "Аніме курс з японської мови | TanPoPo",
  description:
    "Вивчайте світ японської мови разом з улюбленими персонажами аніме: Totoro, Spy Family, Kiki's Delivery Service, Weathering with You, Demon Slayer.",
};

async function getCourse(): Promise<ICourse> {
  await dbConnect();

  try {
    const course = (await Course.findById(ANIME_COURSE_ID).populate({
      path: "images",
      populate: {
        path: "image",
      },
    })) as mongoose.Document<ICourse>;

    if (!course) {
      notFound();
    }
    return JSON.parse(JSON.stringify(course));
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default async function Page() {
  const course = await getCourse();

  return (
    <main className={cl.main}>
      <DialogGallery />
      <Typography
        variant="h3"
        className={cl.header}
        style={{ textAlign: "center", textTransform: "uppercase" }}
      >
        Детальний опис курсу:
      </Typography>
      <CourseCardDescription course={course} />
    </main>
  );
}
