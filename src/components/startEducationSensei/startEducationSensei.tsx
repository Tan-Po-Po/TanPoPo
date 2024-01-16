"use client";
import cl from "./startEducationSensei.module.scss";
import { Typography } from "../typography/typography";
import { ContentCard } from "../contentCard/contentCard";
import { Carousel } from "../carousel/carousel";
import { getIconArtSrc, getIconSrc } from "@/helpers";
import TriangleButton from "public/icons/triangleButton.svg";
import Image from "next/image";
import Link from "next/link";
import { useWindowSize } from "@uidotdev/usehooks";

const StartEducationSensei: React.FC = () => {
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
          style={{ maxWidth: "745px", marginTop: "42px" }}
        >
          За допомогою нашого сайту Ви можете записатись на заняття абсолютно
          самостійно прямо зараз:
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
                src={getIconArtSrc("calendar3")}
                alt="Calendar art"
                width={88}
                height={93}
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
                src={getIconArtSrc("boyAndGirl")}
                alt="Boy and girl with laptop"
                width={103}
                height={91}
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
        <Typography variant="h3">Лише найкращі сенсеї</Typography>
        <Typography variant="h5">для найкращих результатів!</Typography>
      </div>

      <ContentCard
        width="511px"
        className={cl.sensei}
        label={
          <Link href="/courses#teacher" className={cl.link}>
            <Typography variant="body1">Онлайн-курси</Typography>
            <Typography variant="subtitle2">з сенсеєм</Typography>
          </Link>
        }
        labelClassName={cl.label}
        labelPosition="top"
        labelBgColor="linear-gradient(180deg, #A6C4FF 0%, #E8A6FF 100%)"
      >
        <Image
          className={cl.icon}
          src={getIconArtSrc("teacher")}
          alt="Teacher art"
          width={88}
          height={71}
        />
        <Typography variant="body1">
          Для тих, хто полюбляє живе спілкування та навчання разом з сенсеєм
          онлайн!
        </Typography>
        <Image
          className={cl.arrow}
          src={getIconSrc("arrowLong")}
          alt="Arrow"
          width={100}
          height={80}
        />
      </ContentCard>
    </>
  );
};

export { StartEducationSensei };
