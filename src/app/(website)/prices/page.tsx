import {
  Typography,
  Divider,
  Faq,
  FaqBlock,
  DialogGallery,
} from "@/components";
import { CoursesBlock } from "./_coursesBlock/coursesBlock";
import cl from "./page.module.scss";
import Course, { ICourse } from "@/models/Course";
import dbConnect from "@/config/dbConnect";
import mongoose from "mongoose";
import { Suspense } from "react";

async function getCourses(): Promise<ICourse[]> {
  await dbConnect();
  const courses = (await Course.find().populate({
    path: "images",
    populate: {
      path: "image",
    },
  })) as mongoose.Document<ICourse>[];

  return courses.map((course) => JSON.parse(JSON.stringify(course)));
}
export const revalidate = 86400;

export default async function Home() {
  const coursesDB = await getCourses();

  const teacherCourses = coursesDB.filter(
    (course) => course.type === "teacher" && !course.inDevelopment
  );
  const videoCourses = coursesDB.filter(
    (course) => course.type === "video" && !course.inDevelopment
  );
  const bookCourses = coursesDB.filter(
    (course) => course.type === "book" && !course.inDevelopment
  );
  const audioCourses = coursesDB.filter(
    (course) => course.type === "audio" && !course.inDevelopment
  );
  const megaCourses = coursesDB.filter(
    (course) => course.type === "mega" && !course.inDevelopment
  );

  return (
    <main className={cl.main}>
      <DialogGallery />

      <Typography variant="h3" className={cl.header}>
        Вартість навчання
      </Typography>

      <Divider
        style={{ marginBottom: "50px" }}
        className={cl.divider}
        firstRow="онлайн-курси"
        secondRow="з сенсеєм"
        bgColor="linear-gradient(rgba(166, 196, 255, 1), rgba(232, 166, 255, 1))"
      />

      <CoursesBlock courses={teacherCourses} />

      <Divider
        className={cl.divider}
        style={{ margin: "100px 0 75px" }}
        firstRow="ВІДЕОКУРСИ"
        bgColor="linear-gradient(rgba(255, 250, 139, 1), rgba(255, 111, 111, 1))"
      />

      <CoursesBlock courses={videoCourses} />

      <Divider
        className={cl.divider}
        style={{ margin: "100px 0 75px" }}
        firstRow="АудіоКУРСИ"
        bgColor="linear-gradient(rgba(253, 255, 135, 1), rgba(108, 250, 165, 1))"
      />

      <CoursesBlock courses={audioCourses} />

      <Divider
        className={cl.divider}
        style={{ margin: "100px 0 75px" }}
        firstRow="Книжкові мінікурси"
        bgColor="linear-gradient(rgba(255, 221, 169, 1), rgba(239, 204, 255, 1))"
      />

      <CoursesBlock courses={bookCourses} />

      <Divider
        className={cl.divider}
        style={{ margin: "100px 0 75px" }}
        firstRow="Мегакурси"
        bgColor="linear-gradient(rgba(152, 236, 255, 1), rgba(179, 143, 255, 1))"
      />

      <CoursesBlock courses={megaCourses} />

      <Divider
        className={cl.divider}
        style={{ margin: "100px 0 75px" }}
        firstRow="Актуальні питання"
        bgColor="linear-gradient(rgba(253, 255, 135, 1), rgba(250, 210, 108, 1))"
      />
      <section className={cl.questions}>
        <Suspense
          fallback={
            <>
              <Faq question="Loading" answer="Loading" />
              <Faq question="Loading" answer="Loading" />
              <Faq question="Loading" answer="Loading" />
              <Faq question="Loading" answer="Loading" />
            </>
          }
        >
          <FaqBlock location="prices" />
        </Suspense>
      </section>
    </main>
  );
}
