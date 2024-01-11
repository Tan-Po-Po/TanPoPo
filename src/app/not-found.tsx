import Image from "next/image";
import { Typography, ContentCard, Header, Footer } from "@/components";
import { getIconArtSrc } from "@/helpers";
import { LinkCards } from "./_linkCards/linkCards";
import cl from "./not-found.module.scss";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={cl.main}>
        <div className={cl.header}>
          <Typography variant="h3">Error 404.</Typography>
          <Typography variant="h6">Сторінку не знайдено.</Typography>
        </div>

        <Image
          src={getIconArtSrc("toriGate2")}
          alt="Tori Gate"
          width={164}
          height={164}
        />

        <ContentCard
          className={cl.headerCard}
          cardBgColor="linear-gradient(91deg, rgba(255, 156, 156, 0.75) 0%, rgba(255, 239, 156, 0.75) 28.13%, rgba(156, 219, 255, 0.75) 71.35%, rgba(255, 156, 233, 0.75) 100%)"
        >
          <Typography variant="body1">
            Ми шукали цю сторінку по всій Україні та Японії але так нічого і не
            знайшли. Переконайтесь, що URL посилання вірне і спробуйте ще раз!
          </Typography>
        </ContentCard>

        <LinkCards />
      </main>
      <Footer />
    </>
  );
}
