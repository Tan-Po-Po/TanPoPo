import { CourseCard, Typography, Divider, Faq } from "@/components";
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
      <Typography variant="h3" className={cl.header}>Вартість навчання</Typography>
      <Divider
        firstRow="онлайн-курси"
        secondRow="з сенсеєм"
        bgColor="linear-gradient(rgba(166, 196, 255, 1), rgba(232, 166, 255, 1))"
      />
      <div className={cl.courses}>
        {teacherCourses.map((course) => (
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
        <Faq
          question="Чи є знижки при оплаті кількох курсів вперед?"
          answer="Так, ми пропонуємо спеціальні знижки при оплаті двох та більше курсів вперед."
        />
        <Faq
          question="Які форми оплати ви приймаєте?"
          answer="Які форми оплати ви приймаєте?"
        />
        <Faq
          question={"Чи можу я отримати безкоштовний пробний урок перед \nоплатою курсу?"}
          answer="Так, ми пропонуємо один безкоштовний пробний урок для нових студентів."
        />
        <Faq
          question="Чи є можливість повернення коштів, після початку занять? "
          answer="Повернення коштів можливе лише, якщо Ви ще не почали проходити жодний з уроків, тобто якщо ви ще не розпочали навчання. Якщо курс активовано та розпочато, повернення коштів не відбувається."
        />
        <Faq
          question={"Якщо я пропустив декілька уроків, чи можу я отримати знижку \nабо компенсацію?"}
          answer=" У випадку пропущених уроків ми пропонуємо запис заняття, щоб ви могли переглянути/повторити його у зручний для вас час але повернення коштів не передбачено."
        />
        <Faq
          question="Чи входять у вартість курсу додаткові матеріали або книги?"
          answer=" Вартість стандартного курсу включає всі необхідні навчальні матеріали. Додаткові книги або матеріали можна придбати за окрему плату."
        />
        <Faq
          question={
            "Яка різниця в вартості між груповими та індивідуальними \nуроками?"
          }
          answer="Індивідуальні уроки зазвичай коштують більше через особистий підхід до учня. Детальну інформацію про ціни можна знайти на нашому сайті."
        />
      </section>
    </main>
  );
}
