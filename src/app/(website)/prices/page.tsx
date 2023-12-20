import { CourseCard, Typography, Divider, Faq, FaqBlock } from "@/components";
import cl from "./page.module.scss";
import Course, { ICourse } from "@/models/Course";
import dbConnect from "@/config/dbConnect";
import mongoose from "mongoose";
import { Suspense } from "react";

async function getCourses(): Promise<ICourse[]> {
  await dbConnect();
  const courses = (await Course.find()) as mongoose.Document<ICourse>[];

  return courses.map((course) => JSON.parse(JSON.stringify(course)));
}

export default async function Home() {
  const coursesDB = await getCourses();

  const teacherCourses = coursesDB.filter(
    (course) => course.type === "teacher"
  );
  const videoCourses = coursesDB.filter((course) => course.type === "video");
  const bookCourses = coursesDB.filter((course) => course.type === "book");
  const audioCourses = coursesDB.filter((course) => course.type === "audio");

  return (
    <main className={cl.main}>
      <Typography variant="h3" className={cl.header}>
        Вартість навчання
      </Typography>
      <Divider
        firstRow="онлайн-курси"
        secondRow="з сенсеєм"
        bgColor="linear-gradient(rgba(166, 196, 255, 1), rgba(232, 166, 255, 1))"
      />
      <div className={cl.courses}>
        {coursesDB
          .filter((course) => course.type === "teacher")
          .map((course) => (
            <CourseCard course={course} key={course._id} />
          ))}
      </div>

      <Divider
        firstRow="ВІДЕОКУРСИ"
        bgColor="linear-gradient(rgba(255, 250, 139, 1), rgba(255, 111, 111, 1))"
      />
      <div className={cl.courses}>
        {videoCourses.map((course) => (
          <CourseCard course={course} key={course._id} />
        ))}
      </div>

      <Divider
        firstRow="АудіоКУРСИ"
        bgColor="linear-gradient(rgba(253, 255, 135, 1), rgba(108, 250, 165, 1))"
      />
      <div className={cl.courses}>
        {audioCourses.map((course) => (
          <CourseCard course={course} key={course._id} />
        ))}
      </div>

      <Divider
        firstRow="Книжкові мінікурси"
        bgColor="rgba(255, 221, 169, 1), rgba(239, 204, 255, 1))"
      />
      <div className={cl.courses}>
        {bookCourses.map((course) => (
          <CourseCard course={course} key={course._id} />
        ))}
      </div>

      <Divider
        firstRow="Мегакурси"
        bgColor="linear-gradient(rgba(152, 236, 255, 1), rgba(179, 143, 255, 1))"
      />
      <div className={cl.courses}>
        {teacherCourses.map((course) => (
          <CourseCard course={course} key={course._id} />
        ))}
      </div>

      <Divider
        firstRow="Актуальні питання"
        bgColor="linear-gradient(rgba(253, 255, 135, 1), rgba(250, 210, 108, 1))"
      />
      <section className={cl.questions}>
        <Suspense
          fallback={
            // Замінити на скелетони
            <>
              <Faq
                question="Loading"
                answer="Loading"
                style={{ width: "900px", maxWidth: "100%" }}
              />
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
