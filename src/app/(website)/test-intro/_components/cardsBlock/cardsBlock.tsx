"use client";
import { textContent } from "../../textContent";
import { ContentCard, Typography, Carousel, CarouselItem } from "@/components";
import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import cl from "./cardsBlock.module.scss";
import Link from "next/link";

const CardsBlock = () => {
  const { width } = useWindowSize();
  return (
    <section className={cl.cardsBlock}>
      <Carousel
        initialSlide={0}
        dots
        slidesToShow={1}
        autoplay={true}
        arrows={false}
        renderCarousel={width! < 1200}
      >
        {textContent.cardsBlock.map((card, i) => (
          <CarouselItem
            key={i}
            className={cl.carouselItem}
            isHoverEventActive={false}
          >
            <Link href="/test-intro#start">
              <ContentCard width="376px" className={cl.card}>
                <Typography
                  variant="h3"
                  style={{ fontSize: "24px", lineHeight: "1.6" }}
                >
                  {card.title}
                </Typography>
                <Image
                  alt=""
                  src={card.image}
                  width={500}
                  height={300}
                  style={{
                    maxWidth: `${i == 1 ? "120px" : "90px"}`,
                    height: "auto",
                  }}
                />
                <Typography variant="body2">{card.caption}</Typography>
              </ContentCard>{" "}
            </Link>
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  );
};

export { CardsBlock };
