"use client";
import { Button, Carousel, ContentCard, Typography } from "@/components";
import { textContent } from "../../../textContent";
import cl from "./infoCardsBlock.module.scss";
import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import Link from "next/link";

export const InfoCardsBlock = () => {
  const {width} = useWindowSize()
  const isTablet = Boolean(width && width >= 768 && width < 1024)
  const cards = (
    <Carousel
      slidesToShow={1}
      arrows={false}
      initialSlide={1}
      centerPadding="35px"
      renderCarousel={isTablet}
    >
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
            style={{
              maxWidth: "88px",
              height: "auto",
              maxHeight: "110px",
              width: "auto",
            }}
          />
          <Typography variant="body2" className={cl.text}>
            {card.text}
          </Typography>
          {i === 2 && (
            <Link href="/teacher-survey-letter">
              <Button
                variant="outlined"
                style={{ maxWidth: "210px", margin: "0 auto 0" }}
              >
                <Typography
                  variant="body1"
                  align="center"
                  style={{ fontSize: "19px" }}
                >
                  Долучитись до команди TanPoPo
                </Typography>
              </Button>
            </Link>
          )}
        </ContentCard>
      ))}
    </Carousel>
  );

  return <div className={cl.infoCardsBlock}>{cards}</div>;
};
