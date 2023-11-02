import styles from "./page.module.scss";
import { CourseCardMini } from "@/components";

export default function Home() {
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

  return (
    <main className={styles.main}>
      {courses.map((course) => (
        <CourseCardMini course={course} key={course.name} />
      ))}
    </main>
  );
}
