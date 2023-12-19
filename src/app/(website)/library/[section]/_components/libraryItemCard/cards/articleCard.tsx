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
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { Props } from "../props";
import { NewLabel } from "../newLabel/newLabel";
import { getColor } from "@/helpers/getLibraryItemColors";
import { Footer } from "../footer/footer";

export const ArticleCard: React.FC<Props> = ({
  _id,
  type,
  label,
  labelColor,
  gallery,
  hashtags,
  content,
  isNew,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardWidth = type === "articleSmall" ? "384px" : "626px";
  const galleryWidth = type === "articleSmall" ? "274px" : "506px";
  // const color = getColor(labelColor);

  // const path = usePathname();

  const handleMouseEnter = () => {
    setIsHovered(true);
    return;
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    return;
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
            {gallery![0].type === "video" && <PlayButtonIcon />}
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

        <Footer hashtags={hashtags} cardId={_id!} />
      </ContentCard>
    </div>
  );
};

function getPreview(content: ILibraryItemContent[]) {
  let preview: React.ReactNode[] = [];

  for (let i = 0; preview.length < 3; i++) {
    if (content[i].type === "link" || content[i].type === "image") {
      continue;
    }
    preview.push(
      <Typography
        key={content[i]._id || content[i].id}
        variant={content[i].type === "header" ? "body1" : "subtitle1"}
      >
        {content[i].value}
      </Typography>
    );
  }
  return preview;
}
