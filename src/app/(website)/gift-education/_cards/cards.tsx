"use client";
import { Typography, ContentCard, Carousel } from "@/components";
import { getIconArtSrc } from "@/helpers";
import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import cl from "./cards.module.scss";

const Cards = () => {
  const { width } = useWindowSize();
  const renderCarousel = width! < 1200 && width! > 500;

  return (
    <div className={cl.startCards}>
      <Carousel renderCarousel={renderCarousel} arrows={false} slidesToShow={1} infinite={false}>
        <ContentCard
          className={cl.card}
          width="365px"
          index="1"
          indexBgColor="rgba(255, 206, 200, 1)"
          cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #FFBEBE 100%)"
        >
          <Typography variant="h6"> Оберіть навчальний курс.</Typography>
          <Image
            src={getIconArtSrc("temple")}
            alt="Temple art"
            width={87}
            height={89}
          />
          <Typography variant="body2">
            Будь-який наш курс можна подарувати! Тому обирайте, що найкраще
            підійде за форматом навчання та рівнем мови для майбутнього учня!
          </Typography>
        </ContentCard>

        <ContentCard
          className={cl.card}
          width="365px"
          index="2"
          indexBgColor="rgba(200, 242, 255, 1)"
          cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #C8F2FF 100%)"
        >
          <div>
            <Typography
              variant="h6"
              style={{ fontSize: "23px", fontWeight: 700 }}
            >
              Натискайте
            </Typography>
            <Typography variant="body1" style={{ fontWeight: 700 }}>
              Подарунковий Сертифікат”
            </Typography>
          </div>
          <Image
            src={getIconArtSrc("certificate4")}
            alt="Calendar art"
            width={112}
            height={83}
          />
          <Typography variant="body2">
            Обравши курс та визначившись з Форматом Навчання, в таблиці обраного
            курсу обирайте: “К-сть Уроків & Ціна” та натискайте “Подарунковий
            Сертифікат”
          </Typography>
        </ContentCard>

        <ContentCard
          className={cl.card}
          width="365px"
          index="3"
          indexBgColor="rgba(201, 255, 200, 1)"
          cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #C9FFC8 100%)"
        >
          <Typography variant="h6">
            {" "}
            Оплатіть курс та розпочніть навчання!
          </Typography>
          <Image
            src={getIconArtSrc("book3")}
            alt="Boy and girl with laptop"
            width={96}
            height={81}
          />
          <Typography variant="body2">
            Ви можете обрати будь-яку к-сть уроків серед запропо-нованих! Після
            чого натискайте на клавішу, що з’явилась: “Навчання у Подарунок”!
          </Typography>
        </ContentCard>
      </Carousel>
    </div>
  );
};

export { Cards };
