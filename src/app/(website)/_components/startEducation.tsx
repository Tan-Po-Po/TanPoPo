import cl from "../page.module.scss";
import { IWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";
import { Typography, ContentCard, Carousel, CarouselItem } from "@/components";
import Image from "next/image";
import { carouselSettings } from "../page";
import { getIconArtSrc } from "@/helpers";
import ArrowButton from "@/components/arrowButton/arrowButton";

export function StartEducation({
  windowMatchMedia,
}: {
  windowMatchMedia: IWindowMatchMedia;
}) {
  const { isTablet } = windowMatchMedia;

  let cards;

  if (isTablet) {
    cards = (
      <Carousel
        {...carouselSettings}
        slidesToShow={2}
        infinite={false}
        initialSlide={0}
        centerMode={false}
        autoplay={false}
        className={cl.carousel}
      >
        <CarouselItem isHoverEventActive={false} className={cl.card}>
          <ContentCard
            className={cl.card}
            width="290px"
            height="fit-content"
            index="1"
            indexBgColor="#CCE0FF"
          >
            <Image
              src={getIconArtSrc("toriGate2")}
              alt="Tore gate"
              width={96}
              height={96}
              style={{ width: "96px", height: "auto" }}
            />
            <Typography variant="body1">
              Обирайте навчальний курс за вашим бажанням, відповідним для вас
              рівнем мови та форматом навчання.
            </Typography>
          </ContentCard>
          <ArrowButton
            wrapperClassName={cl.arrow}
            direction="right"
            disableHover={true}
          />
        </CarouselItem>

        <CarouselItem isHoverEventActive={false} className={cl.card}>
          <ContentCard
            className={cl.card}
            width="290px"
            height="fit-content"
            index="2"
            indexBgColor="#DFFFD8"
          >
            <Image
              src={getIconArtSrc("honeyJar")}
              alt="Tore gate"
              width={96}
              height={96}
              style={{ width: "96px", height: "auto" }}
            />
            <Typography variant="body1">
              Переходьте на сторінку вартості курсів, обирайте формат, к-сть
              уроків та натискайте “Розпочати Навчання”.
            </Typography>
          </ContentCard>
          <ArrowButton
            wrapperClassName={cl.arrow}
            direction="right"
            disableHover={true}
          />
        </CarouselItem>

        <CarouselItem isHoverEventActive={false} className={cl.card}>
          <ContentCard
            className={cl.card}
            width="290px"
            height="fit-content"
            index="3"
            indexBgColor="#FFF4CC"
          >
            <Image
              src={getIconArtSrc("tower2")}
              alt="Tower"
              width={63}
              height={85}
              style={{ width: "63px", height: "auto" }}
            />
            <Typography variant="body1">
              Ознайомтесь із всією необхідною інформацію стосовно обраного курсу
              та розпочинайте навчання японської мови!
            </Typography>
          </ContentCard>
        </CarouselItem>
      </Carousel>
    );
  } else {
    cards = (
      <div className={cl.cards}>
        <ContentCard
          className={cl.card}
          width="290px"
          height="fit-content"
          index="1"
          indexBgColor="#CCE0FF"
        >
          <Image
            src={getIconArtSrc("toriGate2")}
            alt="Tore gate"
            width={96}
            height={96}
          />
          <Typography variant="body1">
            Обирайте навчальний курс за вашим бажанням, відповідним для вас
            рівнем мови та форматом навчання.
          </Typography>
        </ContentCard>

        <ArrowButton
          wrapperClassName={cl.arrow}
          direction="right"
          disableHover={true}
        />

        <ContentCard
          className={cl.card}
          width="290px"
          height="fit-content"
          index="2"
          indexBgColor="#DFFFD8"
        >
          <Image
            src={getIconArtSrc("honeyJar")}
            alt="Tore gate"
            width={96}
            height={96}
          />
          <Typography variant="body1">
            Переходьте на сторінку вартості курсів, обирайте формат, к-сть
            уроків та натискайте “Розпочати Навчання”.
          </Typography>
        </ContentCard>

        <ArrowButton
          wrapperClassName={cl.arrow}
          direction="right"
          disableHover={true}
        />

        <ContentCard
          className={cl.card}
          width="290px"
          height="fit-content"
          index="3"
          indexBgColor="#FFF4CC"
        >
          <Image
            src={getIconArtSrc("tower2")}
            alt="Tower"
            width={63}
            height={85}
          />
          <Typography variant="body1">
            Ознайомтесь із всією необхідною інформацію стосовно обраного курсу
            та розпочинайте навчання японської мови!
          </Typography>
        </ContentCard>
      </div>
    );
  }
  return (
    <ContentCard className={cl.start} width="1166px">
      <Typography variant="h4" align="center" style={{ fontSize: "32px" }}>
        Розпочати навчання прямо зараз - дуже просто!
      </Typography>
      <Typography
        variant="body1"
        align="center"
        style={{ fontSize: "24px", marginTop: "42px", maxWidth: "650px" }}
      >
        Записатись на будь-який курс можна абсолютно самостійно на нашому сайті:
      </Typography>
      {cards}
    </ContentCard>
  );
}
