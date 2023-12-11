import { CourseCardDescription, Typography } from "@/components";
import cl from "./page.module.scss";
import Course, { ICourse } from "@/models/Course";
import dbConnect from "@/config/dbConnect";
import mongoose from "mongoose";

async function getCourse(id: string): Promise<ICourse> {
  await dbConnect();

  const course = (await Course.findById(id)) as mongoose.Document<ICourse>;
  return JSON.parse(JSON.stringify(course));
}

export default async function Page({ params }: { params: { id: string } }) {
  const course = await getCourse(params.id);

  return (
    <main className={cl.main}>
      <Typography variant="h3" className={cl.header}>
        Детальний опис курсу:
      </Typography>
      <CourseCardDescription course={course} />
    </main>
  );
}
