import { CourseCardDescription, Typography, DialogGallery } from "@/components";
import cl from "./page.module.scss";
import Course, { ICourse } from "@/models/Course";
import dbConnect from "@/config/dbConnect";
import mongoose from "mongoose";
import { notFound } from "next/navigation";

async function getCourse(id: string): Promise<ICourse> {
  await dbConnect();

  try {
    const course = (await Course.findById(id).populate({
      path: "images",
      populate: {
        path: "image",
      },
    })) as mongoose.Document<ICourse>;
    return JSON.parse(JSON.stringify(course));
  } catch (error) {
    notFound();
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const course = await getCourse(params.id);

  return (
    <main className={cl.main}>
      <DialogGallery />
      <Typography
        variant="h3"
        className={cl.header}
        style={{ textAlign: "center" }}
      >
        Детальний опис курсу:
      </Typography>
      <CourseCardDescription course={course} />
    </main>
  );
}
