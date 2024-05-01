import { CourseFormats, Advantages } from "@/components";
import cl from "./page.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Додаткові переваги навчання японської мови | TanPoPo",
  description:
    "Окрім крутих матеріалів, сучасних методик та всіх переваг нашого навчання японської мови Ви також отримуєте 6 додаткових переваг навчання в школі TanPoPo!",
};

export default function Home() {
  return (
    <main className={cl.main}>
      <Advantages className={cl.advantages} />
      <CourseFormats />
    </main>
  );
}
