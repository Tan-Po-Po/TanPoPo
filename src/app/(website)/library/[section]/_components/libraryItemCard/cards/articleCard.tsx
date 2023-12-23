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
  const { type, label, labelColor, gallery, hashtags, content, isNew } = props;

  const [isHovered, setIsHovered] = useState(false);

  const cardWidth = type === "articleSmall" ? "384px" : "626px";
  const galleryWidth = type === "articleSmall" ? "274px" : "506px";

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
        {isNew && <NewLabel />}
        {gallery!.length === 1 ? (
          <ContentCard
            width="fit-content"
            className={getValidClassNames(
              cl.imageContainer,
              gallery![0].type === "video" && cl.video
            )}
          >
            <Image
              alt=""
              src={gallery![0].image}
              width={1920}
              height={1080}
              style={{
                maxWidth: `${galleryWidth}`,
                width: "100%",
                height: "auto",
              }}
            />
            {gallery![0].type === "video" && (
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
            {gallery!.map((image) => (
              <CarouselItem
                key={image.id || image._id}
                className={cl.carouselItem}
                isOutlined={true}
              >
                <Image
                  alt=""
                  src={image.image}
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

  for (let i = 0; preview.length < 3; i++) {
    if (content[i].type === "image") {
      continue;
    }

    if (content[i].type === "paragraph") {
      preview.push(
        <div>
          {content[i].paragraph!.map((item) => {
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
          key={content[i]._id || content[i].id}
          variant={content[i].type === "header" ? "body1" : "subtitle1"}
        >
          {content[i].value}
        </Typography>
      );
    }
  }
  return preview;
}
