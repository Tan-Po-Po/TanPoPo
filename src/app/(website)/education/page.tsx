import { ContentCard, CourseFormats, Typography } from "@/components";
import { getIconArtSrc } from "@/helpers";
import Image from "next/image";
import cl from "./page.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Освітня програма з японської мови | TanPoPo",
  description:
    "Освітня програма з японської мови для онлайн-курсів з сенсеєм та для самостійних курсів. Лише відбірні навчальні матеріали для найкращих результатів!",
};

export default async function Page() {
  return (
    <main className={cl.main}>
      <Typography variant="h3" className={cl.header}>
        Освітня програма
      </Typography>
      <Typography variant="h5" className={cl.headerFormat}>
        Будь ласка, оберіть формат навчання:
      </Typography>

      <CourseFormats className={cl.formats} />

      <ContentCard className={cl.results} width="100%">
        <div>
          <Typography variant="h6">
            Лише відбірні навчальні матеріали
          </Typography>
          <Typography variant="h4">для найкращих результатів!</Typography>
        </div>
        <Image
          src={getIconArtSrc("awardTrophy2")}
          alt="Two people icon"
          width={81}
          height={97}
        />

        <Typography variant="body2">
          Уся освітня програма була створена власноруч командою TanPoPo та
          розроблена таким чином, щоб вивчити японську мову легко, цікаво,
          швидко та ефективно, не витрачаючи зайвого часу!
        </Typography>
      </ContentCard>
    </main>
  );
}
