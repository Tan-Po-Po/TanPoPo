import React from "react";
import { ContentCard } from "../contentCard/contentCard";
import { Typography } from "../typography/typography";
import { getIconSrc } from "@/helpers";
import Image from "next/image";
import Link from "next/link";
import cl from "./courseFormats.module.scss";

const CourseFormats = () => {
  return (
    <div className={cl.formats}>
      <div className={cl.formatWrapper}>
        <Link href="/education/sensei">
          <ContentCard
            cardBgColor="linear-gradient(rgba(173, 240, 255, 1), rgba(235, 191, 255, 1))"
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
        <ContentCard>
          <Typography variant="body2" className={cl.bottomCard}>
            Навчайся у власному темпі за допомогою ефективних самостійних
            курсів!
          </Typography>
        </ContentCard>
      </div>
    </div>
  );
};

export { CourseFormats };
