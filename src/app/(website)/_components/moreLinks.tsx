import cl from "../page.module.scss";
import { IWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";
import {
  Typography,
  ContentCard,
  Carousel,
  CarouselItem,
  Button,
} from "@/components";
import Image from "next/image";
import { carouselSettings } from "../page";
import { getIconArtSrc } from "@/helpers";

export function MoreLinks({
  windowMatchMedia,
}: {
  windowMatchMedia: IWindowMatchMedia;
}) {
  const { isTablet, isMobile, isPc } = windowMatchMedia;

  let cards;

  if (isTablet) {
    cards = (
      <Carousel
        {...carouselSettings}
        initialSlide={0}
        className={cl.carousel}
        rows={2}
        variableWidth={false}
      >
        <CarouselItem className={cl.carouselItem}>
          <ContentCard className={cl.link} width="375px" height="345px">
            <Typography variant="body1">
              Бажаєте дізнатись детальніше про наші курси, заняття,
              відеоматеріали та багато іншого?
            </Typography>
            <Image
              src={getIconArtSrc("temple")}
              alt="Temple"
              width={97}
              height={98}
              style={{ width: "97px", height: "auto" }}
            />
            <Button
              className={cl.button}
              variant="outlined"
              icon="bookPlay"
              style={{ background: "linear-gradient(#CCE0FF1A, #CCE0FF)" }}
            >
              <Typography variant="h6">Курси</Typography>
            </Button>
          </ContentCard>
        </CarouselItem>

        <CarouselItem>
          <ContentCard className={cl.link} width="375px" height="345px">
            <Typography variant="body1">
              Цікавить вартість курсів? Ми завжди намагаємось давати лише
              привабливі цінові пропозиції!
            </Typography>
            <Image
              src={getIconArtSrc("coinsStack")}
              alt="Stack of coins"
              width={109}
              height={84}
              style={{ width: "109px", height: "auto" }}
            />
            <Button
              className={cl.button}
              variant="outlined"
              icon="coinStack"
              style={{ background: "linear-gradient(#DFFFD81A, #DFFFD8)" }}
            >
              <Typography variant="h6"> Вартість</Typography>
            </Button>
          </ContentCard>
        </CarouselItem>

        <CarouselItem>
          <ContentCard className={cl.link} width="375px" height="345px">
            <Typography variant="body1">
              Маєте додаткові запитання? Тут, ми зібрали всю корисну інформацію,
              стосовно нашого навчання!
            </Typography>
            <Image
              src={getIconArtSrc("oldPhone")}
              alt="Phone"
              width={116}
              height={72}
              style={{ width: "116px", height: "auto" }}
            />
            <Button
              className={cl.button}
              variant="outlined"
              icon="contact"
              style={{ background: "linear-gradient(#FFF4CC1A, #FFF4CC)" }}
            >
              <Typography variant="h6"> Контакти</Typography>
            </Button>
          </ContentCard>
        </CarouselItem>

        <CarouselItem>
          <ContentCard className={cl.link}>
            <Typography variant="body2">
              Унікальні матеріали для ще цікавішого та ефекти-внішого вивчення
              мови:
            </Typography>
            <Image
              src={getIconArtSrc("diamond")}
              alt="Diamond icon"
              width={87}
              height={77}
              style={{ width: "87px", height: "auto" }}
            />
            <Button className={cl.button} variant="outlined" icon="video">
              <Typography variant="h6"> Авторський Контент</Typography>
            </Button>
          </ContentCard>
        </CarouselItem>

        <CarouselItem>
          <ContentCard className={cl.link}>
            <Typography variant="body2">
              Наша команда з якою ми разом формуємо якісний процес навчання:
            </Typography>
            <Image
              src={getIconArtSrc("team")}
              alt="Team icon"
              width={113}
              height={91}
              style={{ width: "113px", height: "auto" }}
            />
            <Button className={cl.button} variant="outlined" icon="person">
              <Typography variant="h6"> Команда TanPoPo</Typography>
            </Button>
          </ContentCard>
        </CarouselItem>

        <CarouselItem>
          <ContentCard className={cl.link}>
            <Typography variant="body2">
              Дізнайтеся, що кажуть наші учні про їхній досвід у школі TanPoPo:
            </Typography>
            <Image
              src={getIconArtSrc("lamp")}
              alt="Lamp icon"
              width={75}
              height={84}
              style={{ width: "75px", height: "auto" }}
            />
            <Button className={cl.button} variant="outlined" icon="personSpeak">
              <Typography variant="h6"> Відгуки про Школу</Typography>
            </Button>
          </ContentCard>
        </CarouselItem>
      </Carousel>
    );
  } else {
    cards = (
      <>
        <ContentCard className={cl.link} width="375px" height="345px">
          <Typography variant="body1">
            Бажаєте дізнатись детальніше про наші курси, заняття, відеоматеріали
            та багато іншого?
          </Typography>
          <Image
            src={getIconArtSrc("temple")}
            alt="Temple"
            width={97}
            height={98}
          />
          <Button
            className={cl.button}
            variant="outlined"
            icon="bookPlay"
            style={{ background: "linear-gradient(#CCE0FF1A, #CCE0FF)" }}
          >
            <Typography variant="h6">Курси</Typography>
          </Button>
        </ContentCard>

        <ContentCard className={cl.link} width="375px" height="345px">
          <Typography variant="body1">
            Цікавить вартість курсів? Ми завжди намагаємось давати лише
            привабливі цінові пропозиції!
          </Typography>
          <Image
            src={getIconArtSrc("coinsStack")}
            alt="Stack of coins"
            width={109}
            height={84}
          />
          <Button
            className={cl.button}
            variant="outlined"
            icon="coinsStack"
            style={{ background: "linear-gradient(#DFFFD81A, #DFFFD8)" }}
          >
            <Typography variant="h6"> Вартість</Typography>
          </Button>
        </ContentCard>

        <ContentCard className={cl.link} width="375px" height="345px">
          <Typography variant="body1">
            Маєте додаткові запитання? Тут, ми зібрали всю корисну інформацію,
            стосовно нашого навчання!
          </Typography>
          <Image
            src={getIconArtSrc("oldPhone")}
            alt="Phone"
            width={116}
            height={72}
          />
          <Button
            className={cl.button}
            variant="outlined"
            icon="contact"
            style={{ background: "linear-gradient(#FFF4CC1A, #FFF4CC)" }}
          >
            <Typography variant="h6"> Контакти</Typography>
          </Button>
        </ContentCard>

        {isMobile && (
          <>
            <ContentCard className={cl.link}>
              <Typography variant="body2">
                Унікальні матеріали для ще цікавішого та ефекти-внішого вивчення
                мови:
              </Typography>
              <Image
                src={getIconArtSrc("diamond")}
                alt="Diamond icon"
                width={87}
                height={77}
              />
              <Button
                className={cl.button}
                variant="outlined"
                icon="video"
                wrapperClass={cl.buttonWrapper}
              >
                <Typography variant="h6"> Авторський Контент</Typography>
              </Button>
            </ContentCard>

            <ContentCard className={cl.link}>
              <Typography variant="body2">
                Наша команда з якою ми разом формуємо якісний процес навчання:
              </Typography>
              <Image
                src={getIconArtSrc("team")}
                alt="Team icon"
                width={113}
                height={91}
              />
              <Button
                className={cl.button}
                variant="outlined"
                icon="person"
                wrapperClass={cl.buttonWrapper}
              >
                <Typography variant="h6"> Команда TanPoPo</Typography>
              </Button>
            </ContentCard>

            <ContentCard className={cl.link}>
              <Typography variant="body2">
                Дізнайтеся, що кажуть наші учні про їхній досвід у школі
                TanPoPo:
              </Typography>
              <Image
                src={getIconArtSrc("lamp")}
                alt="Lamp icon"
                width={75}
                height={84}
              />
              <Button
                className={cl.button}
                variant="outlined"
                icon="personSpeak"
                wrapperClass={cl.buttonWrapper}
              >
                <Typography variant="h6">Відгуки про Школу</Typography>
              </Button>
            </ContentCard>
          </>
        )}
      </>
    );
  }

  return (
    <section className={cl.moreLinks}>
      {!isPc && (
        <Typography variant="h4" align="center">
          Наші розділи, які цікаво відвідати:
        </Typography>
      )}
      {cards}
    </section>
  );
}
