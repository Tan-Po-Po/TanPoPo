"use client";

import { Typography, ContentCard, Button, Dialog } from "@/components";
import Image from "next/image";
import Link from "next/link";
import cl from "./page.module.scss";
import { getIconArtSrc } from "@/helpers";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { selectWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";

import { Opportunities } from "./_components/opportunities";
import { Author } from "./_components/author";
import { Formats } from "./_components/formats";
import { CabinetCards } from "./_components/cabinetCards";
import { Ahead } from "./_components/ahead";
import { StartEducation } from "./_components/startEducation";
import { MoreLinks } from "./_components/moreLinks";

export const carouselSettings = {
  dots: true,
  slidesToShow: 1,
  initialSlide: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

export default function Home() {
  const searchParams = useSearchParams();
  const isRedirected = searchParams.get("redirected");
  const renderedTime = Date.now();
  const [open, setOpen] = useState(true);

  const windowMatchMedia = useAppSelector(selectWindowMatchMedia);

  const { isPc } = windowMatchMedia;

  return (
    <main className={cl.main}>
      {isRedirected && (
        <Dialog
          open={open}
          onClose={() => {
            console.log(Date.now() - renderedTime);
            const currentTime = Date.now();
            if (currentTime - renderedTime > 5000) {
              setOpen(false);
            }
          }}
          contentClassName={cl.dialog}
        >
          <>
            <Typography variant="h6" style={{ fontSize: "23px" }}>
              Ваш заповнений розклад занять вже у нас!🎉
            </Typography>
            <ContentCard
              width="590px"
              cardBgColor="linear-gradient(91deg, rgba(255, 156, 156, 0.75) 0%, rgba(255, 239, 156, 0.75) 28.13%, rgba(156, 219, 255, 0.75) 71.35%, rgba(255, 156, 233, 0.75) 100%)"
            >
              <Typography variant="h6" style={{ fontSize: "24px" }}>
                Ми бачимо і цінуємо ваше бажання навчатись разом з нами!
              </Typography>
              <Typography variant="body1" style={{ fontSize: "18px" }}>
                І якнайшвидше почнемо формувати розклад занять для вашого курсу
                і обов’язково сконтактуємось разом з Вами, щоб фінально узгодити
                всі деталі!
              </Typography>
            </ContentCard>
            <Typography variant="body1" style={{ fontSize: "20px" }}>
              Дякуємо, що обрали TanPoPo💛
            </Typography>
          </>
        </Dialog>
      )}
      <div className={cl.intro}>
        <div className={cl.header}>
          <Typography variant="h5" align="center">
            <span style={{ fontWeight: "700" }}>TanPoPo</span> - найкращий
            досвід вивчення японської мови!
          </Typography>
        </div>
        <Image
          src="/images/homePage.png"
          alt="Home page"
          width={940}
          height={653}
          style={{ maxWidth: "940px", width: "100%", height: "auto" }}
        />
        <Typography variant="h6" className={cl.about}>
          Це місце для всіх, хто хоче вдосконалити свої знання японської мови!
          Наша навчальна онлайн-платформа забезпечує зручне, інтерактивне
          середовище для вивчення мови у спосіб, який найкраще підходить для
          кожної людини.
        </Typography>
      </div>

      <Opportunities windowMatchMedia={windowMatchMedia} />

      <Author windowMatchMedia={windowMatchMedia} />

      {isPc && (
        <section className={cl.links}>
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

            <Link href="/about#content">
              <Button className={cl.button} variant="outlined" icon="video">
                <Typography variant="h6"> Авторський Контент</Typography>
              </Button>
            </Link>
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

            <Link href="/about#team">
              <Button className={cl.button} variant="outlined" icon="person">
                <Typography variant="h6"> Команда TanPoPo</Typography>
              </Button>
            </Link>
          </ContentCard>

          <ContentCard className={cl.link}>
            <Typography variant="body2">
              Дізнайтеся, що кажуть наші учні про їхній досвід у школі TanPoPo:
            </Typography>

            <Image
              src={getIconArtSrc("lamp")}
              alt="Lamp icon"
              width={75}
              height={84}
            />

            <Link href="/about#feedbacks">
              <Button
                className={cl.button}
                variant="outlined"
                icon="personSpeak"
              >
                <Typography variant="h6"> Відгуки про Школу</Typography>
              </Button>
            </Link>
          </ContentCard>
        </section>
      )}

      <Ahead windowMatchMedia={windowMatchMedia} />

      <Formats windowMatchMedia={windowMatchMedia} />

      <section className={cl.courses}>
        <Typography variant="h4" align="center">
          Усі можливі види курсів:
        </Typography>
        <div className={cl.cards}>
          <ContentCard
            className={cl.card}
            width="511px"
            height="fit-content"
            label={
              <Link href="/courses#teacher">
                <Typography variant="h6" className={cl.label1}>
                  Олайн курси
                </Typography>
                <Typography variant="body1" className={cl.label2}>
                  з сенсеєм
                </Typography>
              </Link>
            }
            labelPosition="top"
            labelBgColor="linear-gradient(#A6C4FF, #E8A6FF)"
          >
            <Image
              src={getIconArtSrc("teacher")}
              alt="Teacher with laptop"
              width={88}
              height={71}
            />
            <Typography variant="body1">
              Для тих, хто полюбляє живе спілкування та навчання разом з сенсеєм
              онлайн!
            </Typography>
          </ContentCard>

          <ContentCard
            className={cl.card}
            width="511px"
            height="fit-content"
            label={
              <Link href="/courses#video">
                <Typography variant="h6" className={cl.label1}>
                  Відеокурси
                </Typography>
                <Typography variant="body1" className={cl.label2}>
                  для самостійного вивчення
                </Typography>
              </Link>
            }
            labelPosition="top"
            labelBgColor="linear-gradient(#FFFA8B, #FF6F6F)"
          >
            <Image
              src={getIconArtSrc("camera")}
              alt="Camera"
              width={86}
              height={65}
            />
            <Typography variant="body1">
              Навчайся у власному темпі за допомогою ефективних відеокурсів!
            </Typography>
          </ContentCard>

          <ContentCard
            className={cl.card}
            width="511px"
            height="fit-content"
            label={
              <Link href="/courses#audio">
                <Typography variant="h6" className={cl.label1}>
                  Аудіокурси
                </Typography>
                <Typography variant="body1" className={cl.label2}>
                  для самостійного вивчення
                </Typography>
              </Link>
            }
            labelPosition="top"
            labelBgColor="linear-gradient(#FDFF87, #6CFAA5)"
          >
            <Image
              src={getIconArtSrc("headphones")}
              alt="Headphones"
              width={68}
              height={70}
            />
            <Typography variant="body1">
              Чудовий спосіб вивчати японську мову просто слухаючи!
            </Typography>
          </ContentCard>

          <ContentCard
            className={cl.card}
            width="511px"
            height="fit-content"
            label={
              <Link href="/courses#book">
                <Typography variant="h6" className={cl.label1}>
                  Книжкові мінікурси
                </Typography>
                <Typography variant="body1" className={cl.label2}>
                  для самостійного вивчення
                </Typography>
              </Link>
            }
            labelPosition="top"
            labelBgColor="linear-gradient(#FFDDA9, #E8B8FF)"
          >
            <Image
              src={getIconArtSrc("book1")}
              alt="Books"
              width={82}
              height={60}
            />
            <Typography variant="body1">
              Захоплюючі історії, інтерактивні завдання та тести на перевірку!
            </Typography>
          </ContentCard>
        </div>
      </section>

      <section className={cl.personalCabinet}>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h2" style={{ fontSize: "38px" }}>
            Заходь у свій Особистий Кабінет!
          </Typography>
          <Typography variant="body1" style={{ marginTop: "34px" }}>
            Навчайся з будь-якого девайсу на єдиній інтерактивній платформі.
          </Typography>
        </div>

        <Image
          src="/images/boyWithLaptop.png"
          alt="Boy with a laptop"
          className={cl.boyLaptop}
          width={966}
          height={438}
          style={{
            maxWidth: "966px",
            width: "100%",

            objectFit: "cover",
          }}
        />
      </section>

      <CabinetCards windowMatchMedia={windowMatchMedia} />

      <ContentCard className={cl.freeCourse} width="840px" height="fit-content">
        <Typography variant="h4">
          Безкоштовний мінікурс для початківців!
        </Typography>
        <Image
          src={getIconArtSrc("megaPresent")}
          alt="Gift"
          width={144}
          height={138}
        />
        <Typography variant="body1">
          Скористайтесь всіма перевагами нашого навчання та спробуйте наш
          мінікурс просто зараз! Дізнайтесь більше про те, як розпочати навчання
          на інтерактивній платформі:
        </Typography>
        <Button variant="outlined">
          <Typography variant="body1">Дізнатись більше!</Typography>
        </Button>
      </ContentCard>

      <StartEducation windowMatchMedia={windowMatchMedia} />

      <MoreLinks windowMatchMedia={windowMatchMedia} />
    </main>
  );
}
