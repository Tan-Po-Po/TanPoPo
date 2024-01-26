import cl from "../page.module.scss";
import { IWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";
import { Typography, ContentCard, Carousel, CarouselItem } from "@/components";
import Image from "next/image";
import { carouselSettings } from "./carouselSettings";
import { getIconArtSrc } from "@/helpers";

export function Formats({
  windowMatchMedia,
}: {
  windowMatchMedia: IWindowMatchMedia;
}) {
  const { isTablet } = windowMatchMedia;

  const cards = (
    <div className={cl.cards}>
      <Carousel {...carouselSettings} renderCarousel={isTablet}>
        <ContentCard
          label={<Typography variant="subtitle1">ДОВІЛЬНИЙ ГРАФІК!</Typography>}
          labelBgColor="linear-gradient(180deg, #FFF383 0%, #FFDE89 100%)"
          className={cl.card}
          width="283px"
          height="235px"
        >
          <Image
            src={getIconArtSrc("girlStudent")}
            alt="Girl student"
            width={91}
            height={107}
            style={{ width: "91px", height: "auto" }}
          />
          <Typography variant="body2">
            Відеокурси та Аудіокурси для всіх прихильників{" "}
            <b>
              <u style={{ fontSize: "19px" }}>самостійного навчання.</u>
            </b>
          </Typography>
        </ContentCard>

        <ContentCard
          label={<Typography variant="subtitle1">2 уроки / ТИЖДЕНЬ</Typography>}
          labelBgColor="linear-gradient(180deg, #FFF383 0%, #FFDE89 100%)"
          className={cl.card}
          width="300px"
          height="290px"
        >
          <Image
            src={getIconArtSrc("boyAndGirl")}
            alt="Boy and girl with laptop"
            width={129}
            height={115}
            style={{ width: "129px", height: "auto" }}
          />
          <Typography variant="body2">
            <b>
              <u style={{ fontSize: "19px" }}>Заняття у Міні-групах </u>
            </b>
            <br />в живому онлайн-форматі з сенсеєм. З інтерактивним та
            індивідуальним підходом до кожного учня!
          </Typography>
        </ContentCard>

        <ContentCard
          label={
            <Typography variant="subtitle1">1-3 уроки / ТИЖДЕНЬ</Typography>
          }
          labelBgColor="linear-gradient(180deg, #FFF383 0%, #FFDE89 100%)"
          className={cl.card}
          width="283px"
          height="235px"
        >
          <Image
            src={getIconArtSrc("teacher")}
            alt="Teacher with laptop"
            width={130}
            height={105}
            style={{ width: "130px", height: "auto" }}
          />
          <Typography variant="body2">
            <b>
              <u style={{ fontSize: "19px" }}>Індивідуальні заняття </u>
            </b>
            <br />в живому онлайн-форматі разом з сенсеєм.
          </Typography>
        </ContentCard>
      </Carousel>
    </div>
  );

  return (
    <ContentCard width="1122px" className={cl.formats}>
      <Typography variant="h5">Формати Навчання:</Typography>
      <Typography variant="body2">
        Наша освітня програма пропонує усі можливі формати вивчення <br/>японської
        мови, щоб кожний зміг обрати те, що йому імпонує найбільше!
      </Typography>

      {cards}
    </ContentCard>
  );
}
