import { Typography, ContentCard, Advantages } from "@/components";
import Image from "next/image";
import cl from "./page.module.scss";
import { getIconSrc } from "@/helpers";
import Link from "next/link";

export default function Home() {
  return (
    <main className={cl.main}>
      <Advantages className={cl.advantages} />

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
    </main>
  );
}
