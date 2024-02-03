"use client";

import { Button, Carousel, ContentCard, Typography } from "@/components";
import { textContent } from "../../../textContent";
import cl from "./linkCardsBlock.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { selectWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";

export const LinkCardsBlock = () => {
  const { isTablet } = useAppSelector(selectWindowMatchMedia);

  let cards;

  cards = (
    <Carousel
      className={cl.carousel}
      slidesToShow={1}
      arrows={false}
      renderCarousel={isTablet}
    >
      {textContent.linkCardsBlock.map((card, i) => (
        <ContentCard width="376px" key={i} className={cl.contentCard}>
          <Typography variant="body1">{card.title}</Typography>
          <Image
            alt=""
            src={card.image}
            width={500}
            height={300}
            className={cl.artIcon}
          />
          <Button
            variant="outlined"
            icon={card.button.icon}
            className={cl.button}
            wrapperClass={cl.btnWrapper}
          >
            <Link href={card.button.href} style={{ textDecoration: "none" }}>
              <Typography variant="h6">{card.button.text}</Typography>
            </Link>
          </Button>
        </ContentCard>
      ))}
    </Carousel>
  );

  return (
    <div className={cl.linkCardsBlock}>
      <div className={cl.header}>Наші розділи, які цікаво відвідати:</div>
      <div className={cl.linkCards}>{cards}</div>
    </div>
  );
};
