import {
  Typography,
  ContentCard,
  Divider,
  CourseFormats,
  Certificates,
} from "@/components";
import { Cards } from "./_cards/cards";
import { getIconArtSrc, getValidClassNames } from "@/helpers";
import Image from "next/image";
import cl from "./page.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Подарунковий сертифікат з японської мови від TanPoPo",
  description:
    "Ідеальний подарунок для дітей та дорослих і для всіх, хто бажає вивчати та вдосконалювати японську мову! Подарувати вивчення мови як ніколи просто!",
};

export default function Home() {
  return (
    <main className={cl.main}>
      <div className={cl.wrapper}>
        <Image
          alt=""
          src="/logo/colorConfettiLeft.png"
          width={466}
          height={599}
          className={getValidClassNames(cl.confetti, cl.confettiLeft)}
        />
        <Image
          alt=""
          src="/logo/colorConfettiRight.png"
          width={466}
          height={599}
          className={getValidClassNames(cl.confetti, cl.confettiRight)}
        />
        <div className={cl.header}>
          <Typography variant="h6">Навчання разом з</Typography>
          <Typography variant="h2" style={{ fontSize: "44px" }}>
            TanPoPo💛
          </Typography>
        </div>

        <ContentCard width="716px" className={cl.card}>
          <Typography variant="h4">Найкращий подарунок - це знання!</Typography>
          <Image
            src={getIconArtSrc("presentBox3")}
            alt="Present box"
            width={121}
            height={101}
          />
          <Typography variant="subtitle1">
            Ідеальний подарунок для дітей та дорослих і для всіх, хто просто
            бажає вивчати та вдосконалювати японську мову! В нашій школі TanPoPo
            лише відбірні навчальні матеріали та найкращі кваліфіковані сенсеї -
            тобто є все, що потрібно для якісного, швидкісного та ефективного
            навчання!
          </Typography>
        </ContentCard>

        <Image
          className={cl.confettiImage}
          src="/icons/confetti.png"
          alt="Confetti"
          width={150}
          height={138}
        />
      </div>

      <div className={cl.start}>
        <div className={cl.startHeader}>
          <Typography variant="h2">
            Подарувати навчання японської мови як ніколи просто:
          </Typography>

          <Typography
            variant="h6"
            align="center"
            style={{ maxWidth: "775px", marginTop: "42px" }}
          >
            На нашому сайті Ви можете оформити подарунковий сертифікат для
            будь-якого курсу прямо зараз:
          </Typography>
        </div>
        <Cards />
      </div>

      <Certificates header={2} />

      <Divider
        firstRow="НАШІ КУРСИ:"
        className={cl.divider}
        bgColor="linear-gradient(180deg, #FDFF87 0%, #FAD26C 100%)"
      />

      <CourseFormats className={cl.formats} coursesHref />
    </main>
  );
}
