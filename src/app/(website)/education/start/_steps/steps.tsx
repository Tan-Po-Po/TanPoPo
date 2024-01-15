"use client";
import { ContentCard, Typography, Carousel } from "@/components";
import { getIconArtSrc } from "@/helpers";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import TriangleButton from "public/icons/triangleButton.svg";
import cl from "./steps.module.scss";

const Steps = () => {
  const { width } = useWindowSize();
  const renderCarousel = width! > 600 && width! < 1250;
  return (
    <div className={cl.steps}>
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
          height="355px"
          width="330px"
          index="1"
          indexBgColor="#FFCEC8"
          cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #FFBEBE 100%)"
        >
          <Typography variant="body1">
            {" "}
            Ознайомтесь із необхідною інормацією
          </Typography>
          <Image
            src={getIconArtSrc("temple")}
            alt="Temple art"
            width={87}
            height={89}
          />
          <Typography variant="body2">
            На цій веб-сторінці Ви можете дізнатись про всі особливості обраного
            вами курсу та формату навчання в нашій онлайн-школі японської мови
            TanPoPo!
          </Typography>
          {renderCarousel && <TriangleButton className={cl.triangleBtn} />}
        </ContentCard>

        {!renderCarousel && <TriangleButton className={cl.triangleBtn} />}

        <ContentCard
          className={cl.card}
          height="355px"
          width="330px"
          index="2"
          indexBgColor="rgba(200, 242, 255, 1)"
          cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #C8F2FF 100%)"
        >
          <Typography variant="body1">
            Заповніть контактні дані та ваш розклад.
          </Typography>
          <Image
            src={getIconArtSrc("calendar3")}
            alt="Calendar art"
            width={88}
            height={93}
          />
          <Typography variant="body2">
            Вкажіть ваші контактні дані та оберіть, коли Ви можете приділяти час
            вивченню японської мови з сенсеєм онлайн, щоб ми змогли сформувати
            ваш графік!
          </Typography>
          {renderCarousel && <TriangleButton className={cl.triangleBtn} />}
        </ContentCard>

        {!renderCarousel && <TriangleButton className={cl.triangleBtn} />}

        <ContentCard
          className={cl.card}
          height="355px"
          width="330px"
          index="3"
          indexBgColor="rgba(201, 255, 200, 1)"
          cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #C9FFC8 100%)"
        >
          <Typography variant="body1">
            Оплатіть курс та розпочніть навчання!
          </Typography>
          <Image
            src={getIconArtSrc("school")}
            alt="School icon"
            width={102}
            height={87}
          />
          <Typography variant="body2">
            Оплачуйте обраний курс, в той час, як ми почнемо фо-рмувати ваш
            розклад і після його успішного погодження Ви відразу розпочинаєте
            вивчення японської мови!
          </Typography>
        </ContentCard>
      </Carousel>
    </div>
  );
};

export { Steps };
