import { CourseFormats, Advantages } from "@/components";
import cl from "./page.module.scss";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Додаткові переваги | Tanpopo',
}
export default function Home() {
  return (
    <main className={cl.main}>
      <Advantages className={cl.advantages} />
      <CourseFormats />
    </main>
  );
}
