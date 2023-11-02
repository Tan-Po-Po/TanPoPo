import { CourseCardMini,} from "@/components";
import { LibraryCard } from "@/components/libraryCard/libraryCard";
import { TeamMemberCard}  from "@/components/teamMemberCard/teamMemberCard"
import cl from "./page.module.scss";

const courses = [
  {
    type: "teacher" as "teacher",
    name: "Основи імперії",
    // nameJapanese: "桜の花",
    level: "N1",
    description: "Середній рівень",
    backgroundColor:
      "linear-gradient(rgba(255, 230, 143, 0.2), rgba(255, 230, 143, 1))",
    label: "BESTseller!",
    labelColor: "#FFF383",
  },
  {
    type: "video" as "video",
    name: "Аніме герої мови",
    nameJapanese: "言語伝説の英雄たち",
    level: "N5-N3",
    description:
      "Це не просто мовний курс, це ваш персональний гід у світ японської мови через улюблених персонажів аніме!",
    backgroundColor:
      "linear-gradient(130deg, rgba(255, 175, 175, 1), rgba(238, 192, 242, 1), rgba(175, 212, 255, 1), rgba(255, 242, 175, 1))",
    label: "BESTseller!",
    labelColor: "#FFF383",
  },
  {
    type: "audio" as "audio",
    name: "Японська на Хвилях",
    nameJapanese: "日本語波の上で",
    level: "N5",
    description: "Від основ до розмовних фраз в новому форматі!",
    backgroundColor:
      "linear-gradient(rgba(197, 255, 202, 1), rgba(202, 214, 255, 1))",
    label: "BESTseller!",
    labelColor: "#FFF383",
  },
  {
    type: "book" as "book",
    name: "Основи імперії",
    nameJapanese: "桜の花",
    level: "N1",
    description: `Занурьтеся в чарівний світ японської мови та культури з нашими авторськими "Казками Японії"`,
    backgroundColor:
      "linear-gradient(rgba(202, 233, 255, 1), rgba(202, 255, 252, 1))",
    label: "BESTseller!",
    labelColor: "#FFF383",
  },
];

const member = {
  label: { value: "test", color: "red" },
  name: "test",
  image: "/icons/apple.svg",
  certificates: {
    keyPoints: [],
    description: [
      {
        label: "string",
        image: "string",
        caption: "string",
      },
    ],
  },
  education: {
    level: "string",
    university: "string",
    trainings: "string",
  },
  about: [{ text: "test", color: "red" }],
};

export default function Home() {
  return (
    <main className={cl.main}>
      <section className={cl.main}>
        {courses.map((course) => (
          <CourseCardMini course={course} key={course.name} />
        ))}
      </section>
      <section>
        {/* <LibraryCard
          href="/library"
          icon="rocket"
          body="Бонус Старт"
          bgColor="linear-gradient(rgba(255, 184, 184, 0.6), rgba(245, 255, 183, 0.8))"
          hoverBgColor="linear-gradient(rgba(255, 184, 184, 0.9), rgba(245, 255, 183, 1))"
        /> */}
      </section>

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
    </main>
  );
}
