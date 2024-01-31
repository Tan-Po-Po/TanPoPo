"use client";
import {
  Button,
  Carousel,
  CarouselItem,
  ContentCard,
  Typography,
} from "@/components";
import cl from "./reelsBlock.module.scss";
import { textContent } from "../../../textContent";
import { getValidClassNames } from "@/helpers";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { selectWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";
import mcl from "../../../page.module.scss";

export const ReelsBlock = () => {
  const { isMobile, isPc } = useAppSelector(selectWindowMatchMedia);

  return (
    <div className={cl.reelsBlock}>
      <ContentCard
        className={getValidClassNames(mcl.carouselCard, cl.reelsBlock)}
        width="1238px"
      >
        <Typography variant="h3">{textContent.reelsBlock.header}</Typography>
        {isMobile && (
          <Typography variant="body1">
            {textContent.reelsBlock.caption}
          </Typography>
        )}
        <Carousel
          autoplay={true}
          initialSlide={3}
          arrows={isPc}
          centerPadding="40px"
          responsive={[
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {textContent.reelsBlock.images.map((image, i) => (
            <Link
              key={i}
              href={image.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <CarouselItem
                isOutlined={true}
                className={cl.carouselItem}
                type="video"
              >
                <Image
                  alt=""
                  src={image.image}
                  width={500}
                  height={300}
                  style={{ width: "100%", height: "auto" }}
                />
              </CarouselItem>
            </Link>
          ))}
        </Carousel>
        {!isMobile && (
          <Typography variant="body1">
            {textContent.reelsBlock.caption}
          </Typography>
        )}
        <Button
          variant="outlined"
          icon="bank"
          className={cl.button}
          wrapperClass={cl.btnWrapper}
        >
          <Typography variant="h6">{textContent.reelsBlock.button}</Typography>
        </Button>
      </ContentCard>
    </div>
  );
};
