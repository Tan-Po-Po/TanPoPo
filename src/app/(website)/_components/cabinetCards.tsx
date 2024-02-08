import cl from "../page.module.scss";
import { IWindowMatchMedia } from "./matchMedia";
import { ContentCard, Carousel, CarouselItem, Typography } from "@/components";
import Image from "next/image";
import { carouselSettings } from "./carouselSettings";
import { getIconArtSrc } from "@/helpers";

export function CabinetCards({
  windowMatchMedia,
}: {
  windowMatchMedia: IWindowMatchMedia;
}) {
  const { isTablet } = windowMatchMedia;

  if (isTablet)
    return (
      <Carousel
        {...carouselSettings}
        initialSlide={0}
        className={cl.cabinetCardsCarousel}
      >
        <CarouselItem className={cl.card} isHoverEventActive={false}>
          <ContentCard width="376px" height="343px">
            <Image
              src={getIconArtSrc("house")}
              alt="House"
              width={106}
              height={79}
              style={{ width: "106px", height: "auto" }}
            />
            <ul>
              <li>навчальні матеріали, презентації, посібники та інше;</li>
              <li>оголошення, рекомендації, комунікація з нашою школою;</li>
              <li>персональні промокоди та знижки на круті товари;</li>
              <li>ключ до Бібліотеки TanPoPo;</li>
              <li>зручна оплата курсів та уроків!</li>
            </ul>
          </ContentCard>
        </CarouselItem>

        <CarouselItem className={cl.card} isHoverEventActive={false}>
          <ContentCard width="376px" height="343px">
            <Image
              src={getIconArtSrc("calendar2")}
              alt="Calendar"
              width={86}
              height={81}
              style={{ width: "86px", height: "auto" }}
            />
            <ul>
              <li>курси, уроки, власний розклад занять;</li>
              <li>домашні завдання, тести для самоперевірки;</li>
              <li>коментарі від сенсеїв до уроку або по домашній роботі;</li>
              <li>сертифікати від нашої школи;</li>
              <li>навчання з будь-якого девайсу!</li>
            </ul>
          </ContentCard>
        </CarouselItem>

        <CarouselItem className={cl.card} isHoverEventActive={false}>
          <ContentCard width="376px" height="343px">
            <Image
              src={getIconArtSrc("book1")}
              alt="Book"
              width={100}
              height={74}
              style={{ width: "100px", height: "auto" }}
            />
            <ul>
              <li>завантаження навчальних матеріалів до курсу навчання;</li>
              <li>пряма комунікація з вчителем для онлайн-курсів з сенсеєм;</li>
              <li>зручні відеогайди для навігації;</li>
              <li>простий та інтуїтивний інтерфейс платформи;</li>
              <li>та багато іншого!</li>
            </ul>
          </ContentCard>
        </CarouselItem>
      </Carousel>
    );

  return (
    <section className={cl.cabinetCards}>
      <ContentCard className={cl.card} width="376px" height="343px">
        <Image
          src={getIconArtSrc("house")}
          alt="House"
          width={106}
          height={79}
        />
        <ul>
          <li>навчальні матеріали, презентації, посібники та інше;</li>
          <li>оголошення, рекомендації, комунікація з нашою школою;</li>
          <li>персональні промокоди та знижки на круті товари;</li>
          <li>ключ до Бібліотеки TanPoPo;</li>
          <li>зручна оплата курсів та уроків!</li>
        </ul>
      </ContentCard>

      <Typography variant="body1" className={cl.plus}>+</Typography>

      <ContentCard className={cl.card} width="376px" height="343px">
        <Image
          src={getIconArtSrc("calendar2")}
          alt="Calendar"
          width={86}
          height={81}
        />
        <ul>
          <li>курси, уроки, власний розклад занять;</li>
          <li>домашні завдання, тести для самоперевірки;</li>
          <li>коментарі від сенсеїв до уроку або по домашній роботі;</li>
          <li>сертифікати від нашої школи;</li>
          <li>навчання з будь-якого девайсу!</li>
        </ul>
      </ContentCard>

      <Typography variant="body1" className={cl.plus}>+</Typography>

      <ContentCard className={cl.card} width="376px" height="343px">
        <Image
          src={getIconArtSrc("book1")}
          alt="Book"
          width={100}
          height={74}
        />
        <ul>
          <li>завантаження навчальних матеріалів до курсу навчання;</li>
          <li>пряма комунікація з вчителем для онлайн-курсів з сенсеєм;</li>
          <li>зручні відеогайди для навігації;</li>
          <li>простий та інтуїтивний інтерфейс платформи;</li>
          <li>та багато іншого!</li>
        </ul>
      </ContentCard>
    </section>
  );
}
