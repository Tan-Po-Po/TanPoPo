"use client";
import Link from "next/link";
import Image from "next/image";
import cl from "./linkCards.module.scss";
import { Typography, ContentCard, Button, Carousel } from "@/components";
import { cards } from "./cards";
import { getValidClassNames } from "@/helpers";
import { useWindowSize } from "@uidotdev/usehooks";

const LinkCards = () => {
  const { width } = useWindowSize();

  return (
    <section className={cl.interestingPages}>
      <Typography variant="h2">Сторінки, які цікаво відвідати:</Typography>

      <div className={cl.cardsContainer}>
        <Carousel
          dots={false}
          useNumbers
          slideAmount={cards.length}
          renderCarousel={width! < 700}
        >
          {cards.map((card, i) => (
            <ContentCard width="376px" key={i} className={cl.contentCard}>
              <Typography variant="body1">{card.title}</Typography>
              <Image
                alt=""
                src={card.image}
                width={500}
                height={300}
                style={{ maxWidth: "100px", height: "auto" }}
              />
              <Link href={card.button.href} style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  icon={card.button.icon}
                  className={getValidClassNames(
                    cl.button,
                    i > 2 && cl.smallerText
                  )}
                >
                  <Typography variant="h6">{card.button.text}</Typography>
                </Button>
              </Link>
            </ContentCard>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export { LinkCards };
