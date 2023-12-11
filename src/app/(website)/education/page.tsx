import { ContentCard, Typography } from "@/components";
import { getIconArtSrc, getIconSrc } from "@/helpers";
import Link from "next/link";
import Image from "next/image";
import cl from "./page.module.scss";

export default async function Page() {
  return (
    <main className={cl.main}>
      <Typography variant="h3" className={cl.header}>
        Освітня програма
      </Typography>
      <Typography variant="h5" className={cl.headerFormat}>
        Будь ласка, оберіть формат навчання:
      </Typography>

      <div className={cl.formats}>
        <div className={cl.formatWrapper}>
          <Link href="/education/sensei">
            <ContentCard
              cardBgColor="linear-gradient(rgba(173, 240, 255, 1), rgba(235, 191, 255, 1))"
              width="450px"
              height="250px"
              className={cl.formatCard}
            >
              <Image
                src={getIconSrc("groupTwo")}
                alt="Two people icon"
                width={72}
                height={60}
              />
              <Typography variant="body1">
                {"онлайн-курси \n з сенсеєм:"}
              </Typography>
            </ContentCard>
          </Link>
          <div className={cl.line}></div>
          <ContentCard>
            <Typography variant="body2" className={cl.bottomCard}>
              Для тих, хто полюбляє живе спілкування та навчання разом з сенсеєм
              онлайн!
            </Typography>
          </ContentCard>
        </div>

        <div className={cl.formatWrapper}>
          <Link href="/education/self">
            <ContentCard
              cardBgColor="linear-gradient(rgba(253, 255, 173, 1), rgba(255, 191, 214, 1))"
              width="450px"
              height="250px"
              className={cl.formatCard}
            >
              <Image
                src={getIconSrc("pcAndPhone")}
                alt="Two people icon"
                width={72}
                height={60}
              />
              <Typography variant="body1">
                {"курси для \n самостійного вивчення"}
              </Typography>
            </ContentCard>
          </Link>
          <div className={cl.line}></div>
          <ContentCard className={cl.bottomCard}>
            <Typography variant="body2">
              Навчайся у власному темпі за допомогою ефективних самостійних
              курсів!
            </Typography>
          </ContentCard>
        </div>
      </div>

      <ContentCard className={cl.results} width="610px" height="360px">
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
