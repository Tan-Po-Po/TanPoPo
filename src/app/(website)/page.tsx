import { Typography, ContentCard, Button } from "@/components";
import Image from "next/image";
import Link from "next/link";
import cl from "./page.module.scss";
import { getIconArtSrc, getValidClassNames } from "@/helpers";
import { Suspense } from "react";

import { Opportunities } from "./_components/opportunities";
import { Author } from "./_components/author";
import { Formats } from "./_components/formats";
import { CabinetCards } from "./_components/cabinetCards";
import { Ahead } from "./_components/ahead";
import { StartEducation } from "./_components/startEducation";
import { MoreLinks } from "./_components/moreLinks";
import { NavLinks } from "./_components/navLinks/navLinks";
import { RedirectDialog } from "./_components/redirectDialog";

export default function Home() {
  return (
    <main className={cl.main}>
      <Suspense fallback={<></>}>
        <RedirectDialog />
      </Suspense>

      <div className={cl.intro}>
        <div className={cl.header}>
          <Typography variant="h5" align="center">
            українська <span className={cl.gradient}>Smart</span> платформа{" "}
            <span>для вивчення японської мови!</span>
          </Typography>
        </div>

        <NavLinks />

        <Image
          src="/images/homePage.png"
          alt="Home page"
          width={940}
          height={653}
          blurDataURL="/images/HomeReduced.jpg"
          placeholder="blur"
          style={{ maxWidth: "940px", width: "100%", height: "auto" }}
        />
        <Typography variant="h6" className={cl.about}>
          Це місце для всіх, хто хоче вдоско<span>-</span>налити свої знання
          японської мови! Наша навчальна онлайн-платформа забезпечує зручне,
          інтерактивне середовище для вивчення мови у спосіб, який найкраще
          підходить для кожної людини.
        </Typography>
      </div>

      <Opportunities />

      <Author />

      <section className={getValidClassNames(cl.links, cl.pcOnly)}>
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

      <Ahead />

      <Formats />

      <section className={cl.courses} id="courseFormats">
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

      <section className={cl.personalCabinet} id="personalCabinet">
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

      <CabinetCards />

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
            <Link href="/join">
              <Button variant="outlined" wrapperClass={cl.buttonWrapper}>
                <Typography variant="body1">Дізнатись більше!</Typography>
              </Button>
            </Link>
          </ContentCard>
        </section>

        <StartEducation />
      </div>
      <MoreLinks />
    </main>
  );
}
