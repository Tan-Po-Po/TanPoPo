"use client";
import { textContent } from "../../textContent";
import { ContentCard, Typography, Carousel, CarouselItem } from "@/components";
import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import cl from "./cardsBlock.module.scss";

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
            <ContentCard width="376px" className={cl.card}>
              <Typography variant="h6">{card.title}</Typography>
              <Image
                alt=""
                src={card.image}
                width={500}
                height={300}
                style={{ maxWidth: "90px", height: "auto" }}
              />
              <Typography variant="body2">{card.caption}</Typography>
            </ContentCard>
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  );
};

export { CardsBlock };
