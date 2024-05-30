import { StartSelfEducation } from "@/components";
import cl from "./page.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Самостійні онлайн-курси японської мови | TanPoPo",
  description:
    "Усі можливі формати та види курсів для самостійного навчання японської мови: відеокурси, аудіокурси, книжкові курси, аніме-курси!",
};

export default function Page() {
  return (
    <main className={cl.main}>
      <StartSelfEducation />
    </main>
  );
}
