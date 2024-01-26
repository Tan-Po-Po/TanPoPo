"use client";
import { Carousel, CarouselItem, ContentCard, Typography } from "@/components";
import cl from "./reviewsBlock.module.scss";
import { textContent } from "../../../textContent";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { selectWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";

export const ReviewsBlock = () => {
  const { isPc, isMobile, isTablet } = useAppSelector(selectWindowMatchMedia);

  return (
    <div
      className={cl.reviewsBlock}
      id="reviews"
      style={{ scrollMarginTop: "100px" }}
    >
      <Typography
        variant="h3"
        style={{ textAlign: "center" }}
        className={cl.header}
      >
        {textContent.reviewsBlock.header}
      </Typography>

      {isMobile && (
        <Typography
          variant="subtitle1"
          className={cl.caption}
          style={{ fontWeight: "700" }}
        >
          {textContent.reviewsBlock.caption}
        </Typography>
      )}

      <ContentCard width="1238px" className={cl.carouselCard}>
        <Carousel
          arrows={isPc}
          className={cl.carousel}
          autoplay={!isPc}
          initialSlide={4}
          responsive={[
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {getReviewImagesSrc().map((src, i) => (
            <CarouselItem
              key={i}
              isOutlined={true}
              type={i === 4 ? "video" : "image"}
              className={cl.carouselItem}
              onClick={() => {
                if (i != 4) {
                  return;
                }
                window.open(
                  "https://www.instagram.com/reel/Ct1AOQHOS6P/",
                  "_blank"
                );
              }}
            >
              <Image
                alt=""
                src={src}
                width={500}
                height={300}
                style={{
                  minWidth: "100%",
                  maxWidth: "272px",
                  width: "100%",
                  height: "100%",
                }}
              />
            </CarouselItem>
          ))}
        </Carousel>

        {!isMobile && (
          <Typography
            variant="h6"
            className={cl.caption}
            style={{
              textAlign: "center",
              maxWidth: `${isTablet ? "500px" : "auto"}`,
            }}
          >
            {textContent.reviewsBlock.caption}
          </Typography>
        )}
      </ContentCard>
    </div>
  );
};

function getReviewImagesSrc() {
  const reviews = [];

  for (let i = 1; i < 10; i++) {
    reviews.push(`/reviews/${i}.png`);
  }
  return reviews;
}
