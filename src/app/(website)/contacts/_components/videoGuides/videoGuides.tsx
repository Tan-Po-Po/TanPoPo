"use client";
import PlayButtonIcon from "/public/icons/playButton.svg";
import { ContentCard, Typography, Carousel, CarouselItem } from "@/components";
import { textContent } from "../../textContent";
import Link from "next/link";
import cl from "./videoGuides.module.scss";
import { useWindowSize } from "@uidotdev/usehooks";

const VideoGuides = () => {
  const { width } = useWindowSize();

  return width && width < 600 ? (
    <Carousel
      initialSlide={0}
      slideAmount={textContent.videoGuidesBlock.cards.length}
      useNumbers
      dots={false}
      slidesToShow={1}
      className={cl.carousel}
      infinite={false}
      centerMode
      id="videoGuides"
    >
      {textContent.videoGuidesBlock.cards.map((card, i) => (
        <CarouselItem key={i}>
          <Link
            href={
              card.href ||
              "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
            }
          >
            <ContentCard
              width="384px"
              cardBgColor={card.background}
              className={cl.videoCard}
            >
              <div className={cl.icon}>
                <PlayButtonIcon style={{ width: "50px", height: "auto" }} />
              </div>
              <Typography variant="body2">{card.caption}</Typography>
            </ContentCard>
          </Link>
        </CarouselItem>
      ))}
    </Carousel>
  ) : (
    <div className={cl.videoGuidesBlock} id="videoGuides">
      {textContent.videoGuidesBlock.cards.map((card, i) => (
        <Link
          href={
            card.href ||
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
          }
          key={i}
        >
          <ContentCard
            width="384px"
            cardBgColor={card.background}
            className={cl.videoCard}
          >
            <div className={cl.icon}>
              <PlayButtonIcon />
            </div>
            <Typography variant="body2">{card.caption}</Typography>
          </ContentCard>
        </Link>
      ))}
    </div>
  );
};

export { VideoGuides };
