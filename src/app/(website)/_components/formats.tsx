import cl from "../page.module.scss";
import { IWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";
import { Typography, ContentCard, Carousel, CarouselItem } from "@/components";
import Image from "next/image";
import { carouselSettings } from "../page";
import { getIconArtSrc } from "@/helpers";

export function Formats({
  windowMatchMedia,
}: {
  windowMatchMedia: IWindowMatchMedia;
}) {
  const { isTablet } = windowMatchMedia;

  let cards;

  if (isTablet) {
    cards = (
      <Carousel {...carouselSettings}>
        <CarouselItem>
          <ContentCard className={cl.card} width="283px" height="235px">
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
                <u>самостійного навчання.</u>
              </b>
            </Typography>
          </ContentCard>
        </CarouselItem>

        <CarouselItem>
          <ContentCard className={cl.card} width="300px" height="290px">
            <Image
              src={getIconArtSrc("boyAndGirl")}
              alt="Boy and girl with laptop"
              width={129}
              height={115}
              style={{ width: "129px", height: "auto" }}
            />
            <Typography variant="body2">
              <b>
                <u>Заняття у Міні-групах </u>
              </b>
              <br />в живому онлайн-форматі з сенсеєм. З інтерактивним та
              індивідуальним підходом до кожного учня!
            </Typography>
          </ContentCard>
        </CarouselItem>

        <CarouselItem>
          <ContentCard className={cl.card} width="283px" height="235px">
            <Image
              src={getIconArtSrc("teacher")}
              alt="Teacher with laptop"
              width={130}
              height={105}
              style={{ width: "130px", height: "auto" }}
            />
            <Typography variant="body2">
              <b>
                <u>Індивідуальні заняття </u>
              </b>
              <br />в живому онлайн-форматі разом з сенсеєм.
            </Typography>
          </ContentCard>
        </CarouselItem>
      </Carousel>
    );
  } else {
    cards = (
      <div className={cl.cards}>
        <ContentCard className={cl.card} width="283px" height="235px">
          <Image
            src={getIconArtSrc("girlStudent")}
            alt="Girl student"
            width={91}
            height={107}
          />
          <Typography variant="body2">
            Відеокурси та Аудіокурси для всіх прихильників{" "}
            <b>
              <u>самостійного навчання.</u>
            </b>
          </Typography>
        </ContentCard>

        <ContentCard className={cl.card} width="300px" height="290px">
          <Image
            src={getIconArtSrc("boyAndGirl")}
            alt="Boy and girl with laptop"
            width={129}
            height={115}
          />
          <Typography variant="body2">
            <b>
              <u>Заняття у Міні-групах </u>
            </b>
            <br />в живому онлайн-форматі з сенсеєм. З інтерактивним та
            індивідуальним підходом до кожного учня!
          </Typography>
        </ContentCard>

        <ContentCard className={cl.card} width="283px" height="235px">
          <Image
            src={getIconArtSrc("teacher")}
            alt="Teacher with laptop"
            width={130}
            height={105}
          />
          <Typography variant="body2">
            <b>
              <u>Індивідуальні заняття </u>
            </b>
            <br />в живому онлайн-форматі разом з сенсеєм.
          </Typography>
        </ContentCard>
      </div>
    );
  }

  return (
    <ContentCard width="1122px" className={cl.formats}>
      <Typography variant="h5">Формати Навчання:</Typography>
      <Typography variant="body1">
        Наша освітня програма пропонує усі можливі формати вивчення японської
        мови, щоб кожний зміг обрати те, що йому імпонує найбільше!
      </Typography>

      {cards}
    </ContentCard>
  );
}
