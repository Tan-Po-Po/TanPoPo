import { CourseCardMini, Faq, Divider, Typography } from "@/components";
import { LibraryCard } from "@/components/libraryCard/libraryCard";
import Image from "next/image";
import cl from "./page.module.scss";
import Course, { ICourse } from "@/models/Course";
import dbConnect from "@/config/dbConnect";
import mongoose from "mongoose";

import CourseList from "@/components/courseList/courseList";
import { LibraryTable } from "@/components/libraryTable/libraryTable";

// const courses = [
//   {
//     type: "teacher" as "teacher",
//     name: "Основи імперії",
//     // nameJapanese: "桜の花",
//     level: "N1",
//     description: "Середній рівень",
//     backgroundColor:
//       "linear-gradient(rgba(255, 230, 143, 0.2), rgba(255, 230, 143, 1))",
//     label: "BESTseller!",
//     labelColor: "#FFF383",
//   },
//   {
//     type: "video" as "video",
//     name: "Аніме герої мови",
//     nameJapanese: "言語伝説の英雄たち",
//     level: "N5-N3",
//     description:
//       "Це не просто мовний курс, це ваш персональний гід у світ японської мови через улюблених персонажів аніме!",
//     backgroundColor:
//       "linear-gradient(130deg, rgba(255, 175, 175, 1), rgba(238, 192, 242, 1), rgba(175, 212, 255, 1), rgba(255, 242, 175, 1))",
//     label: "BESTseller!",
//     labelColor: "#FFF383",
//   },
//   {
//     type: "audio" as "audio",
//     name: "Японська на Хвилях",
//     nameJapanese: "日本語波の上で",
//     level: "N5",
//     description: "Від основ до розмовних фраз в новому форматі!",
//     backgroundColor:
//       "linear-gradient(rgba(197, 255, 202, 1), rgba(202, 214, 255, 1))",
//     label: "BESTseller!",
//     labelColor: "#FFF383",
//   },
//   {
//     type: "book" as "book",
//     name: "Основи імперії",
//     nameJapanese: "桜の花",
//     level: "N1",
//     description: `Занурьтеся в чарівний світ японської мови та культури з нашими авторськими "Казками Японії"`,
//     backgroundColor:
//       "linear-gradient(rgba(202, 233, 255, 1), rgba(202, 255, 252, 1))",
//     label: "BESTseller!",
//     labelColor: "#FFF383",
//   },
// ];

async function getCourses(): Promise<ICourse[]> {
  await dbConnect();

  const courses = (await Course.find()) as mongoose.Document<ICourse>[];

  return courses.map((course) => course.toObject());
}

export default async function Courses() {
  const coursesDB = await getCourses();

  return (
    <main className={cl.main}>
      <section className={cl.intro}>
        <Typography variant="h3">Курси японської мови</Typography>
        <Image
          src="/images/coursesLibrary.png"
          alt="Library image"
          width={1200}
          height={585}
        />
        <Typography variant="body1">
          Кожен наш курс створений так, щоб ви отримали максимум знань та
          навичок для впевненого та вільного володіння японською мовою! Ми
          використовуємо найновітніші методики, інтерактивні завдання та лише
          відбірні навчальні матеріали для найкращих результатів. Оберіть курс
          за вашим рівнем мови та форматом навчання і перетворіть вивчення
          японської мови на захоплюючу подорож!
        </Typography>
      </section>

      <CourseList courses={coursesDB} />

      <Divider
        firstRow="бібліотека tanpopo"
        bgColor="linear-gradient(rgba(196, 169, 255, 1), rgba(255, 165, 165, 1))"
      />
      <LibraryTable />

      <Divider
        firstRow="актуальні питання"
        bgColor="linear-gradient(rgba(253, 255, 135, 1), rgba(250, 210, 108, 1))"
      />
      <section className={cl.questions}>
        <Faq
          question="Чи входять у вартість курсу додаткові матеріали або книги?"
          answer="Вартість стандартного курсу включає всі необхідні навчальні матеріали. Додаткові книги або матеріали можна придбати за окрему плату."
        />
        <Faq
          question="Ваші курси мають вікові обмеження?"
          answer="Наші курси створені та розроблені для УСІХ, хто бажає вивчати цю чудову мову!"
        />
        <Faq
          question="Чи проводяться екзамени після завершення курсу?"
          answer="Так, після кожного курсу проводиться завершальний екзамен для оцінки ваших знань."
        />
        <Faq
          question="Чи отримую я сертифікат після завершення курсу?"
          answer="Так, всі наші учні отримують сертифікат після успішного завершення курсу."
        />
        <Faq
          question="Чи є у вас курси із зануренням у культуру Японії?"
          answer="Так, деякі з наших курсів акцентують увагу на культурі, звичаях та історії Японії."
        />
        <Faq
          question="Який розклад занять для курсів?"
          answer="Розклад може варіюватися, але зазвичай ми пропонуємо заняття двічі на тиждень по 70 хвилин."
        />
      </section>
    </main>
  );
}
