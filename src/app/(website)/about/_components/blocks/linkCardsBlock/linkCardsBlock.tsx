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

  if (isTablet) {
    cards = (
      <Carousel className={cl.carousel} slidesToShow={1} arrows={false}>
        {textContent.linkCardsBlock.map((card, i) => (
          <ContentCard width="376px" key={i} className={cl.contentCard}>
            <Typography variant="body1">{card.title}</Typography>
            <Image
              alt=""
              src={card.image}
              width={500}
              height={300}
              style={{ maxWidth: "100px", height: "auto" }}
            />
            <Button
              variant="outlined"
              icon={card.button.icon}
              className={cl.button}
            >
              <Link href={card.button.href} style={{ textDecoration: "none" }}>
                <Typography variant="h6">{card.button.text}</Typography>
              </Link>
            </Button>
          </ContentCard>
        ))}
      </Carousel>
    );
  } else {
    cards = (
      <>
        {textContent.linkCardsBlock.map((card, i) => (
          <ContentCard width="376px" key={i}>
            <Typography variant="body1">{card.title}</Typography>
            <Image
              alt=""
              src={card.image}
              width={500}
              height={300}
              style={{ maxWidth: "100px", height: "auto" }}
            />
            <Button
              variant="outlined"
              icon={card.button.icon}
              className={cl.button}
            >
              <Link href={card.button.href} style={{ textDecoration: "none" }}>
                <Typography variant="h6">{card.button.text}</Typography>
              </Link>
            </Button>
          </ContentCard>
        ))}
      </>
    );
  }

  return <div className={cl.linkCardsBlock}>{cards}</div>;
};
