import { Faq, Divider, Typography, FaqBlock, LibraryTable } from "@/components";
import { CourseBlock } from "./_coursesBlock/courseBlock";
import Image from "next/image";
import cl from "./page.module.scss";
import Course, { ICourse } from "@/models/Course";
import dbConnect from "@/config/dbConnect";
import mongoose from "mongoose";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Курси | Tanpopo",
};
async function getCourses(): Promise<ICourse[]> {
  await dbConnect();

  const courses = (await Course.find()) as mongoose.Document<ICourse>[];

  return courses.map((course) => JSON.parse(JSON.stringify(course)));
}
export const revalidate = 600;

export default async function Courses() {
  const coursesDB = await getCourses();

  return (
    <main className={cl.main}>
      <section className={cl.intro}>
        <Typography variant="h3" style={{ textAlign: "center" }}>
          Курси японської мови
        </Typography>
        <Image
          src="/images/coursesLibrary.png"
          alt="Library image"
          width={1200}
          height={585}
        />
        <Typography variant="body1" align="center">
          Кожен наш курс створений так, щоб ви отримали максимум знань та
          навичок для впевненого та вільного володіння японською мовою!{" "}
          <span>
            Ми використовуємо найновітніші методики, інтерактивні завдання та
            лише відбірні навчальні матеріали для найкращих результатів. Оберіть
            курс за вашим рівнем мови та форматом навчання і перетворіть
            вивчення японської мови на захоплюючу подорож!
          </span>
        </Typography>
      </section>

      <div className={cl.courseListMain}>
        <Divider
          wrapperClassName={cl.dividerWrapper}
          className={cl.divider}
          style={{ scrollMarginTop: "120px" }}
          id="teacher"
          firstRow="онлайн-курси"
          secondRow="з сенсеєм"
          bgColor="linear-gradient(rgba(166, 196, 255, 1), rgba(232, 166, 255, 1))"
        />
        <CourseBlock courses={coursesDB} courseType="teacher" />

        <Divider
          wrapperClassName={cl.dividerWrapper}
          className={cl.divider}
          style={{ scrollMarginTop: "120px" }}
          id="video"
          firstRow="Відеокурси"
          secondRow="для самостійного вивчення"
          bgColor="linear-gradient(rgba(255, 250, 139, 1), rgba(255, 111, 111, 1))"
        />
        <CourseBlock courses={coursesDB} courseType="video" />

        <Divider
          wrapperClassName={cl.dividerWrapper}
          className={cl.divider}
          style={{ scrollMarginTop: "120px" }}
          id="audio"
          firstRow="Аудіокурси"
          secondRow="для самостійного вивчення"
          bgColor="linear-gradient(rgba(253, 255, 135, 1), rgba(108, 250, 165, 1))"
        />
        <CourseBlock courses={coursesDB} courseType="audio" />

        <Divider
          wrapperClassName={cl.dividerWrapper}
          className={cl.divider}
          style={{ scrollMarginTop: "120px" }}
          id="book"
          firstRow="Книжкові мінікурси"
          secondRow="для самостійного вивчення"
          bgColor="linear-gradient(rgba(255, 221, 169, 1), rgba(232, 184, 255, 1))"
        />
        <CourseBlock courses={coursesDB} courseType="book" />
      </div>

      <Divider
        className={cl.divider}
        firstRow="бібліотека tanpopo"
        bgColor="linear-gradient(rgba(196, 169, 255, 1), rgba(255, 165, 165, 1))"
      />
      <LibraryTable />

      <Divider
        className={cl.divider}
        firstRow="актуальні питання"
        bgColor="linear-gradient(rgba(253, 255, 135, 1), rgba(250, 210, 108, 1))"
      />
      <section className={cl.questions}>
        <Suspense
          fallback={
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
          <FaqBlock location="courses" />
        </Suspense>
      </section>
    </main>
  );
}
