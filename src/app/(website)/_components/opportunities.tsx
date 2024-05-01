"use client";
import cl from "../page.module.scss";
import { Typography, ContentCard, Carousel, CarouselItem } from "@/components";
import Image from "next/image";
import { carouselSettings } from "./carouselSettings";
import { getIconArtSrc } from "@/helpers";
import { useWindowSize } from "@uidotdev/usehooks";

export function Opportunities() {
  const { width } = useWindowSize();
  const isTablet = Boolean(width && width < 1024 && width >= 768);

  let cards;

  if (isTablet) {
    cards = (
      <Carousel {...carouselSettings}>
        <CarouselItem>
          <ContentCard
            width="283px"
            height="260px"
            className={cl.opportunityCard}
          >
            <Image
              src={getIconArtSrc("temple")}
              alt="Temple icon"
              width={96}
              height={95}
              style={{ width: "96px", height: "auto" }}
            />
            <div>
              <Typography variant="h3">20+</Typography>
              <Typography variant="body2">
                навчальних курсів на вибір для усіх рівнів та форматів навчання!
              </Typography>
            </div>
          </ContentCard>
        </CarouselItem>

        <CarouselItem>
          <ContentCard
            width="300px"
            height="290px"
            className={cl.opportunityCard}
          >
            <Image
              src={getIconArtSrc("clock")}
              alt="Temple icon"
              width={137}
              height={106}
              style={{ width: "137px", height: "auto" }}
            />
            <Typography variant="h3">
              480+
              <Typography variant="body2">
                унікальних уроків на нашій інтерактивній платформі для
                бездоганного вивчення японської мови!
              </Typography>
            </Typography>
          </ContentCard>
        </CarouselItem>

        <CarouselItem>
          <ContentCard
            width="283px"
            height="260px"
            className={cl.opportunityCard}
          >
            <Image
              src={getIconArtSrc("books4")}
              alt="Temple icon"
              width={107}
              height={76}
              style={{ width: "107px", height: "auto" }}
            />
            <Typography variant="h3">
              160+
              <Typography variant="body2">
                додаткових корисних матеріалів в нашій Бібліотеці TanPoPo!
              </Typography>
            </Typography>
          </ContentCard>
        </CarouselItem>
      </Carousel>
    );
  } else {
    cards = (
      <div className={cl.opportunityCards}>
        <ContentCard
          width="283px"
          height="260px"
          className={cl.opportunityCard}
        >
          <Image
            src={getIconArtSrc("temple")}
            alt="Temple icon"
            width={96}
            height={95}
          />
          <div>
            <Typography variant="h3">20+</Typography>
            <Typography variant="body2">
              навчальних курсів на <br />
              вибір для усіх рівнів та форматів навчання!
            </Typography>
          </div>
        </ContentCard>

        <ContentCard
          width="300px"
          height="290px"
          className={cl.opportunityCard}
        >
          <Image
            src={getIconArtSrc("clock")}
            alt="Temple icon"
            width={137}
            height={106}
          />
          <Typography variant="h3">480+</Typography>
          <Typography variant="body2">
            унікальних уроків на нашій інтерактивній платформі для бездоганного
            вивчення японської мови!
          </Typography>
        </ContentCard>

        <ContentCard
          width="283px"
          height="260px"
          className={cl.opportunityCard}
        >
          <Image
            src={getIconArtSrc("books4")}
            alt="Temple icon"
            width={107}
            height={76}
          />
          <Typography variant="h3">160+</Typography>
          <Typography variant="body2">
            додаткових корисних матеріалів в нашій Бібліотеці TanPoPo!
          </Typography>
        </ContentCard>
      </div>
    );
  }

  return (
    <ContentCard width="1132px" className={cl.opportunities}>
      <Typography variant="h5">Безмежні можливості разом з TanPoPo!</Typography>
      <Typography
        variant="h2"
        style={{ marginBottom: "20px", lineHeight: "21px" }}
      >
        Лише відбірні та ефективні матеріали для вивчення японської мови:
      </Typography>
      {cards}
    </ContentCard>
  );
}
