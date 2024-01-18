"use client";
import cl from "./startSelfEducation.module.scss";
import { Typography } from "../typography/typography";
import { ContentCard } from "../contentCard/contentCard";
import { Carousel } from "../carousel/carousel";
import { getIconArtSrc } from "@/helpers";
import TriangleButton from "public/icons/triangleButton.svg";
import Image from "next/image";
import Link from "next/link";
import { useWindowSize } from "@uidotdev/usehooks";

const StartSelfEducation: React.FC = () => {
  const { width } = useWindowSize();
  const renderCarousel = width! > 600 && width! < 1250;
  return (
    <>
      <div className={cl.start}>
        <div className={cl.startHeader}>
          <Typography variant="h5">
            Розпочати онлайн-навчання з сенсеєм
          </Typography>
          <Typography variant="h2">в школі TanPoPo дуже легко!</Typography>
        </div>

        <Typography
          variant="h6"
          align="center"
          style={{ maxWidth: "775px", marginTop: "42px" }}
        >
          За допомогою нашого сайту Ви можете розпочати навчання по будь-якому
          самостійному курсу прямо зараз:
        </Typography>

        <div className={cl.startCards}>
          <Carousel
            renderCarousel={renderCarousel}
            dots
            autoplay
            autoplaySpeed={3000}
            slidesToShow={1}
            infinite={false}
            arrows={false}
          >
            <ContentCard
              className={cl.card}
              width="330px"
              index="1"
              indexBgColor="rgba(255, 206, 200, 1)"
              cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #FFBEBE 100%)"
            >
              <Typography variant="h6">
                {" "}
                Оберіть бажаний онлайн-курс з сенсеєм
              </Typography>
              <Image
                src={getIconArtSrc("temple")}
                alt="Temple art"
                width={87}
                height={89}
              />
              <Typography variant="body2">
                Обирайте курс за вашим бажанням, форматом навчання і відповідним
                для вас рівнем мови та натискайте “Розпочати Навчання”.
              </Typography>
              {renderCarousel && <TriangleButton className={cl.triangleBtn} />}
            </ContentCard>

            {!renderCarousel && <TriangleButton className={cl.triangleBtn} />}

            <ContentCard
              className={cl.card}
              width="330px"
              index="2"
              indexBgColor="rgba(200, 242, 255, 1)"
              cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #C8F2FF 100%)"
            >
              <Typography variant="h6">
                {" "}
                Визначте зручний для Вас розклад занять!
              </Typography>
              <Image
                src={getIconArtSrc("paymentCard")}
                alt="Calendar art"
                width={83}
                height={71}
              />
              <Typography variant="body2">
                Оберіть, коли Ви можете приділяти час вивченню японської мови з
                сенсеєм онлайн, щоб ми змогли сформувати графік, враху-вавши
                ваші побажання!
              </Typography>
              {renderCarousel && <TriangleButton className={cl.triangleBtn} />}
            </ContentCard>

            {!renderCarousel && <TriangleButton className={cl.triangleBtn} />}

            <ContentCard
              className={cl.card}
              width="330px"
              index="3"
              indexBgColor="rgba(201, 255, 200, 1)"
              cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #C9FFC8 100%)"
            >
              <Typography variant="h6">
                {" "}
                Оплатіть курс та розпочніть навчання!
              </Typography>
              <Image
                src={getIconArtSrc("girlStudent")}
                alt="Boy and girl with laptop"
                width={81}
                height={96}
              />
              <Typography variant="body2">
                Оплачуйте обраний курс, в той час, як ми почнемо фо-рмувати ваш
                розклад і після його успішного погодження Ви відразу
                розпочинаєте вивчення японської мови!
              </Typography>
            </ContentCard>
          </Carousel>
        </div>
      </div>

      <div className={cl.senseiHeader}>
        <Typography variant="h1">3</Typography>
        <div>
          <Typography variant="h2">Види курсів</Typography>
          <Typography variant="body2">для самостійного вивчення:</Typography>
        </div>
      </div>
      <div className={cl.courses}>
        <ContentCard
          width="511px"
          height="210px"
          className={cl.course}
          label={
            <Link href="/courses#video" className={cl.link}>
              <Typography variant="body1">Відеокурси</Typography>
              <Typography variant="subtitle2">
                для самостійного вивчення
              </Typography>
            </Link>
          }
          labelClassName={cl.label}
          labelPosition="top"
          labelBgColor="linear-gradient(180deg, #FFFA8B 0.01%, #FF6F6F 100%)"
        >
          <Image
            className={cl.icon}
            src={getIconArtSrc("camera")}
            alt="Camera art"
            width={86}
            height={65}
          />
          <Typography variant="body1">
            Навчайся у власному темпі за допомогою ефективних відеокурсів!
          </Typography>
        </ContentCard>

        <ContentCard
          width="511px"
          height="210px"
          className={cl.course}
          label={
            <Link href="/courses#audio" className={cl.link}>
              <Typography variant="body1">Аудіокурси</Typography>
              <Typography variant="subtitle2">
                для самостійного вивчення
              </Typography>
            </Link>
          }
          labelClassName={cl.label}
          labelPosition="top"
          labelBgColor="linear-gradient(180deg, #FDFF87 0%, #6CFAA5 100%)"
        >
          <Image
            className={cl.icon}
            src={getIconArtSrc("headphones")}
            alt="Headphones art"
            width={68}
            height={70}
          />
          <Typography variant="body1">
            Чудовий спосіб вчити японську просто слухаючи!
          </Typography>
        </ContentCard>

        <ContentCard
          width="511px"
          height="210px"
          className={cl.course}
          label={
            <Link href="/courses#book" className={cl.link}>
              <Typography variant="body1">Книжкові мінікурси</Typography>
              <Typography variant="subtitle2">
                для самостійного вивчення
              </Typography>
            </Link>
          }
          labelClassName={cl.label}
          labelPosition="top"
          labelBgColor="linear-gradient(180deg, #FFDDA9 0%, #E8B8FF 100%)"
        >
          <Image
            className={cl.icon}
            src={getIconArtSrc("book1")}
            alt="Teacher art"
            width={82}
            height={60}
          />
          <Typography variant="body1">
            Захоплюючі історії, інтерактивні завдання та тести на перевірку!
          </Typography>
        </ContentCard>
      </div>
    </>
  );
};

export { StartSelfEducation };
