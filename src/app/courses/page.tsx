import { CourseCardMini, Faq, Divider, Typography } from "@/components";
import { LibraryCard } from "@/components/libraryCard/libraryCard";
import Image from "next/image";
import cl from "./page.module.scss";
import Course, { ICourse } from "@/models/Course";
import dbConnect from "@/config/dbConnect";
import mongoose from "mongoose";

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

export default async function Home() {
  const coursesDB = await getCourses();
  console.log(coursesDB);

  const teacherCourses = coursesDB.filter(
    (course) => course.type === "teacher"
  );
  const videoCourses = coursesDB.filter((course) => course.type === "video");
  const bookCourses = coursesDB.filter((course) => course.type === "book");
  const audioCourses = coursesDB.filter((course) => course.type === "audio");

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

      <Divider
        firsRow="онлайн-курси"
        secondRow="з сенсеєм"
        bgColor="linear-gradient(rgba(166, 196, 255, 1), rgba(232, 166, 255, 1))"
      />
      <section className={cl.courses}>
        {teacherCourses.map((course) => (
          <CourseCardMini course={course} key={course._id} />
        ))}
        {teacherCourses.length === 0 && (
          <Typography variant="h4">В розробці</Typography>
        )}
      </section>

      <Divider
        firsRow="Відеокурси"
        secondRow="для самостійного вивчення"
        bgColor="linear-gradient(rgba(255, 250, 139, 1), rgba(255, 111, 111, 1))"
      />
      <section className={cl.courses}>
        {videoCourses.map((course) => (
          <CourseCardMini course={course} key={course._id} />
        ))}
        {videoCourses.length === 0 && (
          <Typography variant="h4">В розробці</Typography>
        )}
      </section>

      <Divider
        firsRow="Аудіокурси"
        secondRow="для самостійного вивчення"
        bgColor="linear-gradient(rgba(253, 255, 135, 1), rgba(108, 250, 165, 1))"
      />
      <section className={cl.courses}>
        {audioCourses.map((course) => (
          <CourseCardMini course={course} key={course._id} />
        ))}
        {audioCourses.length === 0 && (
          <Typography variant="h4">В розробці</Typography>
        )}
      </section>

      <Divider
        firsRow="Книжкові мінікурси"
        secondRow="для самостійного вивчення"
        bgColor="linear-gradient(rgba(255, 221, 169, 1), rgba(232, 184, 255, 1))"
      />
      <section className={cl.courses}>
        {bookCourses.map((course) => (
          <CourseCardMini course={course} key={course._id} />
        ))}
        {bookCourses.length === 0 && (
          <Typography variant="h4">В розробці</Typography>
        )}
      </section>


      <Divider
        firsRow="бібліотека tanpopo"
        bgColor="linear-gradient(rgba(196, 169, 255, 1), rgba(255, 165, 165, 1))"
      />
      <section className={cl.library}>
        <LibraryCard
          href="/library"
          icon="rocket"
          body="Бонус Старт"
          bgColor="linear-gradient(rgba(255, 184, 184, 0.6), rgba(245, 255, 183, 0.8))"
          hoverBgColor="linear-gradient(rgba(255, 184, 184, 0.9), rgba(245, 255, 183, 1))"
        />
        <LibraryCard
          href="/library"
          icon="starShine"
          body="навчальні reels"
          bgColor="linear-gradient(rgba(255, 184, 197, 0.6), rgba(255, 252, 183, 0.8))"
          hoverBgColor="linear-gradient(rgba(255, 184, 197, 0.9), rgba(255, 252, 183, 1))"
        />
        <LibraryCard
          href="/library"
          icon="headphones"
          body="Світ Подкастів"
          bgColor="linear-gradient(rgba(255, 184, 222, 0.6), rgba(255, 243, 183, 0.8))"
          hoverBgColor="linear-gradient(rgba(255, 184, 222, 0.9), rgba(255, 243, 183, 1))"
        />
        <LibraryCard
          href="/library"
          icon="bookTriangle"
          body="JLPT Ресурси"
          bgColor="linear-gradient(rgba(255, 184, 244, 0.6), rgba(255, 235, 183, 0.8))"
          hoverBgColor="linear-gradient(rgba(255, 184, 244, 0.9), rgba(255, 235, 183, 1))"
          isPrivate
        />
        <LibraryCard
          href="/library"
          icon="boxesClose"
          body="ігри та додатки"
          bgColor="linear-gradient(rgba(254, 184, 255, 0.6), rgba(255, 226, 183, 0.8))"
          hoverBgColor="linear-gradient(rgba(254, 184, 255, 0.9), rgba(255, 226, 183, 1))"
          isPrivate
        />
        <LibraryCard
          href="/library"
          icon="bookStar"
          body="Книги & Манга"
          bgColor="linear-gradient(rgba(241, 184, 255, 0.6), rgba(255, 218, 183, 0.8))"
          hoverBgColor="linear-gradient(rgba(241, 184, 255, 0.9), rgba(255, 218, 183, 1))"
          isPrivate
        />
        <LibraryCard
          href="/library"
          icon="stikerSmile"
          body="Аніме & дорама List"
          bgColor="linear-gradient(rgba(215, 184, 255, 0.6), rgba(255, 213, 183, 0.8))"
          hoverBgColor="linear-gradient(rgba(215, 184, 255, 0.9), rgba(255, 213, 183, 1))"
          isPrivate
        />
        <LibraryCard
          href="/library"
          icon="document"
          body="Статті Огляди"
          bgColor="linear-gradient(rgba(194, 184, 255, 0.6), rgba(255, 205, 183, 0.8))"
          hoverBgColor="linear-gradient(rgba(194, 184, 255, 0.9), rgba(255, 205, 183, 1))"
        />
        <LibraryCard
          href="/library"
          icon="note"
          body="Музична хроніка"
          bgColor="linear-gradient(rgba(184, 187, 255, 0.6), rgba(255, 196, 183, 0.8))"
          hoverBgColor="linear-gradient(rgba(184, 187, 255, 0.9), rgba(255, 196, 183, 1))"
          isPrivate
        />
        <LibraryCard
          href="/library"
          icon="clopboard"
          body="quiz & Лексика"
          bgColor="linear-gradient(rgba(184, 187, 255, 0.6), rgba(255, 192, 183, 0.8))"
          hoverBgColor="linear-gradient(rgba(184, 187, 255, 0.9), rgba(255, 192, 183, 1))"
          isPrivate
        />
        <LibraryCard
          href="/library"
          icon="video"
          body="Ютюб Японії"
          bgColor="linear-gradient(rgba(198, 184, 255, 0.6), rgba(255, 183, 183, 0.8))"
          hoverBgColor="linear-gradient(rgba(198, 184, 255, 0.6), rgba(255, 183, 183, 1))"
        />
        <LibraryCard
          href="/library"
          icon="boxesSeparate"
          body="Мова в Таблицях"
          bgColor="linear-gradient(rgba(211, 184, 255, 0.6), rgba(255, 170, 165, 0.8))"
          hoverBgColor="linear-gradient(rgba(211, 184, 255, 0.8), rgba(255, 170, 165, 1))"
          isPrivate
        />
      </section>

      <Divider
        firsRow="актуальні питання"
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
