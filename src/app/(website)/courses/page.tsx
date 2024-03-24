import {
  Faq,
  Divider,
  Typography,
  FaqBlock,
  LibraryTable,
  CourseList,
} from "@/components";
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

  const courses = (await await Course.find().sort({
    order: -1,
  })) as mongoose.Document<ICourse>[];

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

      <CourseList courses={coursesDB} />

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
        id="faq"
      />
      <section className={cl.questions}>
        <Suspense
          fallback={
            <>
              <Faq
                question="Loading"
                answer={[{ text: "Loading" }]}
                style={{ width: "900px", maxWidth: "100%" }}
              />
              <Faq question="Loading" answer={[{ text: "Loading" }]} />
              <Faq question="Loading" answer={[{ text: "Loading" }]} />
              <Faq question="Loading" answer={[{ text: "Loading" }]} />
            </>
          }
        >
          <FaqBlock location="courses" />
        </Suspense>
      </section>
    </main>
  );
}
