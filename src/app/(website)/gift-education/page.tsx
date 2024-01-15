import {
  Typography,
  ContentCard,
  Divider,
  CourseFormats,
  Certificates,
} from "@/components";
import { Cards } from "./_cards/cards";
import { getIconArtSrc } from "@/helpers";
import Image from "next/image";
import cl from "./page.module.scss";

export default function Home() {
  return (
    <main className={cl.main}>
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
          Ідеальний подарунок для дітей та дорослих і для всіх, хто просто бажає
          вивчати та вдосконалювати японську мову! В нашій школі TanPoPo лише
          відбірні навчальні матеріали та найкращі кваліфіковані сенсеї - тобто
          є все, що потрібно для якісного, швидкісного та ефективного навчання!
        </Typography>
      </ContentCard>

      <Image
        className={cl.confetti}
        src="/icons/confetti.png"
        alt="Confetti"
        width={150}
        height={138}
      />

      <div className={cl.start}>
        <div className={cl.startHeader}>
          <Typography variant="h4">
            Подарувати навчання японської мови
          </Typography>
          <Typography variant="h4">як ніколи просто:</Typography>
        </div>
        <Cards />
      </div>

      <Certificates header={2}/>

      <Divider firstRow="НАШІ КУРСИ:" className={cl.divider} />

      <CourseFormats />
    </main>
  );
}
