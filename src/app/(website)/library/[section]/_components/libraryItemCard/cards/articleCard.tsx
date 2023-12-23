"use client";
import { Button, ContentCard, Typography } from "@/components";
import cl from "../libraryItemCard.module.scss";
import { ILibraryItem, ILibraryItemContent } from "@/models/LibraryItem";
import { getValidClassNames } from "@/helpers";
import Image from "next/image";
import Carousel from "@/components/carousel/carousel";
import PlayButtonIcon from "/public/icons/playButton.svg";
import { CarouselItem } from "@/components/carousel/carouselItem/carouselItem";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { Props } from "../props";
import { NewLabel } from "../newLabel/newLabel";
import { getColor } from "@/helpers/getLibraryItemColors";
import { Footer } from "../footer/footer";
import Link from "next/link";

import { useOpenLibraryItem } from "@/hooks/useOpenLibraryCard";

export const ArticleCard: React.FC<Props> = (props) => {
  const { type, label, labelColor, media, hashtags, content, isNew } = props;

  const [isHovered, setIsHovered] = useState(false);

  const cardWidth = type === "articleSmall" ? "384px" : "626px";
  const mediaWidth = type === "articleSmall" ? "274px" : "506px";

  const { openLibraryItem } = useOpenLibraryItem({
    item: props,
    autoplay: "1",
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
    return;
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    return;
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openLibraryItem();
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ContentCard
        className={getValidClassNames(cl[type])}
        label={<Typography variant="body1">{label}</Typography>}
        labelBgColor={labelColor}
        width={cardWidth}
      >
        {media!.length === 1 ? (
          <ContentCard
            width="fit-content"
            className={getValidClassNames(
              cl.imageContainer,
              media![0].type === "video" && cl.video
            )}
          >
            <Image
              alt=""
              src={media![0].image!}
              width={1920}
              height={1080}
              style={{
                maxWidth: `${mediaWidth}`,
                width: "100%",
                height: "auto",
              }}
            />
            {media![0].type === "video" && (
              <div className={cl.playButton} onClick={handleVideoClick}>
                <PlayButtonIcon />
              </div>
            )}
          </ContentCard>
        ) : (
          <Carousel
            dots={false}
            slidesToShow={2}
            centerMode={false}
            focusOnSelect={false}
            className={cl.carousel}
          >
            {media!.map((image) => (
              <CarouselItem
                key={image.id || image._id}
                className={cl.carouselItem}
                isOutlined={true}
              >
                <Image
                  alt=""
                  src={image.image!}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </CarouselItem>
            ))}
          </Carousel>
        )}

        <div className={cl.text}>
          <div className={cl.gradient}></div>
          {getPreview(content!)}
          <div className={cl.buttonOuterWrapper}>
            <Button
              variant="outlined"
              wrapperClass={cl.buttonWrapper}
              isParentHovered={isHovered}
            >
              Читати повністю...
            </Button>
          </div>
        </div>

        <Footer item={props} />
      </ContentCard>
    </div>
  );
};

function getPreview(content: ILibraryItemContent[]) {
  let preview: React.ReactNode[] = [];

  content.some((item, i) => {
    if (i === 3) {
      return true;
    }

    if (item.type === "image") {
      return false;
    }

    if (item.type === "paragraph") {
      preview.push(
        <div>
          {item.paragraph!.map((item) => {
            return (
              <Typography key={item.id} variant="subtitle1">
                {item.text}
              </Typography>
            );
          })}
        </div>
      );
    } else {
      preview.push(
        <Typography
          key={item._id || item.id}
          variant={item.type === "header" ? "body1" : "subtitle1"}
        >
          {item.value}
        </Typography>
      );
    }
  });

  return preview;
}
