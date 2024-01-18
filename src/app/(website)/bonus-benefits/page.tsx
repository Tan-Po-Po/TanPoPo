import { CourseFormats, Advantages } from "@/components";
import cl from "./page.module.scss";

export default function Home() {
  return (
    <main className={cl.main}>
      <Advantages className={cl.advantages} />
      <CourseFormats />
    </main>
  );
}
