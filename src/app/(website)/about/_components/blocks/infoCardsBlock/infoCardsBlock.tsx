"use client";
import { Carousel, ContentCard, Typography } from "@/components";
import { textContent } from "../../../textContent";
import cl from "./infoCardsBlock.module.scss";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { selectWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";

export const InfoCardsBlock = () => {
  const { isTablet } = useAppSelector(selectWindowMatchMedia);

  let cards;

  if (isTablet) {
    cards = (
      <Carousel
        slidesToShow={1}
        arrows={false}
        initialSlide={1}
        centerPadding="35px"
      >
        {textContent.infoCards.map((card, i) => (
          <ContentCard key={i} width={"376px"} className={cl.infoCard}>
            <Typography variant="h6" className={cl.title}>
              {card.title}
            </Typography>
            <Image
              alt=""
              src={card.image}
              width={500}
              height={300}
              style={{ maxWidth: "88px", height: "auto" }}
            />
            <Typography variant="body2" className={cl.text}>
              {card.text}
            </Typography>
          </ContentCard>
        ))}
      </Carousel>
    );
  } else {
    cards = (
      <>
        {textContent.infoCards.map((card, i) => (
          <ContentCard
            key={i}
            width={"376px"}
            className={cl.infoCard}
            style={{ display: "flex" }}
          >
            <Typography variant="h6" className={cl.title}>
              {card.title}
            </Typography>
            <Image
              alt=""
              src={card.image}
              width={500}
              height={300}
              style={{ maxWidth: "88px", height: "auto" }}
            />
            <Typography variant="body2" className={cl.text}>
              {card.text}
            </Typography>
          </ContentCard>
        ))}
      </>
    );
  }

  return <div className={cl.infoCardsBlock}>{cards}</div>;
};
