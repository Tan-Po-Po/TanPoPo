"use client";

import { Typography, ContentCard, Button, Dialog } from "@/components";
import Image from "next/image";
import Link from "next/link";
import cl from "./page.module.scss";
import { getIconArtSrc } from "@/helpers";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

import { Opportunities } from "./_components/opportunities";
import { Author } from "./_components/author";
import { Formats } from "./_components/formats";
import { CabinetCards } from "./_components/cabinetCards";
import { Ahead } from "./_components/ahead";
import { StartEducation } from "./_components/startEducation";
import { MoreLinks } from "./_components/moreLinks";

export default function Home() {
  const searchParams = useSearchParams();
  const renderedTime = Date.now();
  const [open, setOpen] = useState(true);

  const { width } = useWindowSize();
  const isPc = Boolean(width && width >= 1024);
  const isTablet = Boolean(width && width < 1024 && width >= 768);
  const isMobile = Boolean(width && width < 768);
  const windowMatchMedia = { isPc, isTablet, isMobile };
  return (
    <main className={cl.main}>
      <Suspense fallback={<></>}>
        {searchParams.get("redirected") && (
          <Dialog
            open={open}
            onClose={() => {
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
                  І якнайшвидше почнемо формувати розклад занять для вашого
                  курсу і обов’язково сконтактуємось разом з Вами, щоб фінально
                  узгодити всі деталі!
                </Typography>
              </ContentCard>
              <Typography variant="body1" style={{ fontSize: "20px" }}>
                Дякуємо, що обрали TanPoPo💛
              </Typography>
            </>
          </Dialog>
        )}
      </Suspense>

      <div className={cl.intro}>
        <div className={cl.header}>
          <Typography variant="h5" align="center">
            TanPoPo{" "}
            <Typography variant="body1" align="center">
              - найкращий досвід вивчення японської мови!
            </Typography>
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
          Це місце для всіх, хто хоче вдоско<span>-</span>налити свої знання
          японської мови! Наша навчальна онлайн-платформа забезпечує зручне,
          інтерактивне середовище для вивчення мови у спосіб, який найкраще
          підходить для кожної людини.
        </Typography>
      </div>

      <Opportunities windowMatchMedia={windowMatchMedia} />

      <Author windowMatchMedia={windowMatchMedia} />

      {isPc && (
        <section className={cl.links}>
          <ContentCard className={cl.link}>
            <Typography variant="body1">
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
              <Button
                className={cl.button}
                variant="outlined"
                icon="video"
                wrapperClass={cl.buttonWrapper}
              >
                <Typography variant="body1" style={{ fontSize: "20px" }}>
                  {" "}
                  Авторський Контент
                </Typography>
              </Button>
            </Link>
          </ContentCard>

          <ContentCard className={cl.link}>
            <Typography variant="body1">
              Наша команда з якою ми разом формуємо якісний процес навчання:
            </Typography>

            <Image
              src={getIconArtSrc("team")}
              alt="Team icon"
              width={113}
              height={91}
            />

            <Link href="/about#team">
              <Button
                className={cl.button}
                variant="outlined"
                icon="person"
                wrapperClass={cl.buttonWrapper}
              >
                <Typography variant="body1" style={{ fontSize: "23px" }}>
                  {" "}
                  Команда TanPoPo
                </Typography>
              </Button>
            </Link>
          </ContentCard>

          <ContentCard className={cl.link}>
            <Typography variant="body1" style={{ fontSize: "21px" }}>
              Дізнайтеся, що кажуть наші учні про їхній досвід у школі TanPoPo:
            </Typography>

            <Image
              src={getIconArtSrc("lamp")}
              alt="Lamp icon"
              width={75}
              height={84}
            />

            <Link href="/about#reviews">
              <Button
                className={cl.button}
                variant="outlined"
                icon="personSpeak"
                wrapperClass={cl.buttonWrapper}
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
        <Typography variant="h3" align="center">
          Усі можливі види курсів:
        </Typography>
        <div className={cl.cards}>
          <Link href="/courses#teacher">
            <ContentCard
              className={cl.card}
              width="511px"
              height="fit-content"
              label={
                <>
                  <Typography variant="h6" className={cl.label1}>
                    Онлайн курси
                  </Typography>
                  <Typography variant="body1" className={cl.label2}>
                    з сенсеєм
                  </Typography>
                </>
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
                Для тих, хто полюбляє живе спілкування та навчання разом з
                сенсеєм онлайн!
              </Typography>
            </ContentCard>
          </Link>
          <Link href="/courses#video">
            <ContentCard
              className={cl.card}
              width="511px"
              height="fit-content"
              label={
                <>
                  <Typography variant="h6" className={cl.label1}>
                    Відеокурси
                  </Typography>
                  <Typography variant="body1" className={cl.label2}>
                    для самостійного вивчення
                  </Typography>
                </>
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
          </Link>
          <Link href="/courses#audio">
            <ContentCard
              className={cl.card}
              width="511px"
              height="fit-content"
              label={
                <>
                  <Typography variant="h6" className={cl.label1}>
                    Аудіокурси
                  </Typography>
                  <Typography variant="body1" className={cl.label2}>
                    для самостійного вивчення
                  </Typography>
                </>
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
          </Link>

          <Link href="/courses#book">
            <ContentCard
              className={cl.card}
              width="511px"
              height="fit-content"
              label={
                <>
                  <Typography variant="h6" className={cl.label1}>
                    Книжкові мінікурси
                  </Typography>
                  <Typography variant="body1" className={cl.label2}>
                    для самостійного вивчення
                  </Typography>
                </>
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
          </Link>
        </div>
      </section>

      <section className={cl.personalCabinet}>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h2" style={{ fontSize: "38px" }}>
            Заходь у свій Особистий Кабінет!
          </Typography>
          <Typography variant="body1" style={{ marginTop: "24px" }}>
            Навчайся з будь-якого девайсу на єдиній інтерактивній платформі.
          </Typography>
        </div>

        <Image
          src="/images/boyWithLaptop.jpg"
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

      <div className={cl.orderWrapper}>
        <section>
          <Typography
            variant="h4"
            align="center"
            className={cl.freeCourseHeader}
          >
            Безкоштовний мінікурс для початківців!
          </Typography>
          <ContentCard
            className={cl.freeCourse}
            width="840px"
            height="fit-content"
          >
            <Typography variant="h4" align="center">
              Безкоштовний мінікурс для початківців!
            </Typography>
            <Image
              src={getIconArtSrc("megaPresent")}
              alt="Gift"
              width={144}
              height={138}
              style={{ margin: "10px 0" }}
            />
            <Typography
              variant="body1"
              style={{ marginBottom: "20px", lineHeight: "26px" }}
              align="center"
            >
              Скористайтесь всіма перевагами нашого навчання та
              <br /> спробуйте наш мінікурс просто зараз! Дізнайтесь більше про{" "}
              <br />
              те, як розпочати навчання на інтерактивній платформі:
            </Typography>
            <Button variant="outlined" wrapperClass={cl.buttonWrapper}>
              <Typography variant="body1">Дізнатись більше!</Typography>
            </Button>
          </ContentCard>
        </section>

        <StartEducation windowMatchMedia={windowMatchMedia} />
      </div>
      <MoreLinks windowMatchMedia={windowMatchMedia} />
    </main>
  );
}
