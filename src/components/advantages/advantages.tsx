"use client";
import Image from "next/image";
import { ContentCard, Typography, Carousel } from "..";
import cl from "./advantages.module.scss";
import { textContent } from "./textContent";
import { getValidClassNames } from "@/helpers";
import { useWindowSize } from "@uidotdev/usehooks";
type Properties = {
  className?: string;
};

const Advantages: React.FC<Properties> = ({ className }) => {
  const { width } = useWindowSize();
  const gradient =
    "linear-gradient(91deg, rgba(255, 156, 156, 0.75) 0%, rgba(255, 239, 156, 0.75) 28.13%, rgba(156, 219, 255, 0.75) 71.35%, rgba(255, 156, 233, 0.75) 100%)";
  return (
    <div className={getValidClassNames(cl.advantagesMain, className)}>
      <div className={cl.header}>
        <div className={cl.number}>6</div>
        <div className={cl.text}>
          <div className={cl.line1}>додаткових переваг</div>
          <div className={cl.line2}>нашого навчання!</div>
        </div>
      </div>

      <ContentCard width="fit-content" cardBgColor={gradient} className={cl.textBlock}>
        <Typography variant="body1">{textContent.title}</Typography>
      </ContentCard>

      <div className={cl.cards}>
        <Carousel
          renderCarousel={width! < 900}
          useNumbers
          slideAmount={textContent.cards.length}
          dots={false}
          infinite={false}
          initialSlide={0}
          slidesToShow={1}
        >
          {textContent.cards.map((card, i) => (
            <ContentCard
              width="362px"
              index={i + 1}
              indexBgColor={card.indexBg}
              className={cl.card}
              key={i}
            >
              <Typography variant="h6">{card.title}</Typography>
              <Image
                alt=""
                src={card.image}
                width={500}
                height={300}
                style={{ width: "auto", maxHeight: "100px" }}
              />
              <Typography variant="body2">{card.caption}</Typography>
            </ContentCard>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export { Advantages };
