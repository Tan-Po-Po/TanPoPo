import { CourseCardMini, Faq, Divider, Typography } from "@/components";
import { LibraryCard } from "@/components/libraryCard/libraryCard";
import Image from "next/image";
import cl from "./page.module.scss";
import Course, { ICourse } from "@/models/Course";
import dbConnect from "@/config/dbConnect";
import mongoose from "mongoose";

import CourseList from "@/components/courseList/courseList";

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
