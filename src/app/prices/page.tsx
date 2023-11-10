import { CourseCard, Typography, Divider } from "@/components";
import cl from "./page.module.scss";
import Course, { ICourse } from "@/models/Course";
import dbConnect from "@/config/dbConnect";
import mongoose from "mongoose";

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
      <h1>Prices page</h1>
      <Divider
        firsRow="онлайн-курси"
        secondRow="з сенсеєм"
        bgColor="linear-gradient(rgba(166, 196, 255, 1), rgba(232, 166, 255, 1))"
      />
      <div className={cl.courses}>
        {teacherCourses.map((course) => (
          <CourseCard course={course} key={course._id} />
        ))}
      </div>

      <Divider
        firsRow="ВІДЕОКУРСИ"
        bgColor="linear-gradient(rgba(255, 250, 139, 1), rgba(255, 111, 111, 1))"
      />
      <div className={cl.courses}>
        {videoCourses.map((course) => (
          <CourseCard course={course} key={course._id} />
        ))}
      </div>

      <Divider
        firsRow="АудіоКУРСИ"
        bgColor="linear-gradient(rgba(253, 255, 135, 1), rgba(108, 250, 165, 1))"
      />
      <div className={cl.courses}>
        {/* {teacherCourses.map((course) => (
          <CourseCard course={course} key={course._id} />
        ))} */}
      </div>
    </main>
  );
}
