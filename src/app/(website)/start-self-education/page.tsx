import { StartSelfEducation } from "@/components";
import cl from "./page.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Розпочати самостійне навчання японської мови | TanPoPo",
  description:
    "За допомогою нашого сайту Ви можете обрати бажаний курс та розпочати навчання з японської мови абсолютно самостійно прямо зараз!",
};

export default function Page() {
  return (
    <main className={cl.main}>
      <StartSelfEducation />
    </main>
  );
}
