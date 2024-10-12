"use client";
import {
  Button,
  ContentCard,
  Typography,
  Carousel,
  CarouselItem,
} from "@/components";
import cl from "../libraryItemCard.module.scss";
import { ILibraryItemContent } from "@/models/LibraryItem";
import { getValidClassNames } from "@/helpers";
import Image from "next/image";
import PlayButtonIcon from "/public/icons/playButton.svg";
import { useState } from "react";
import { Props } from "../props";
import { CardFooter } from "../cardFooter/cardFooter";
import { useOpenLibraryItem } from "@/hooks/useOpenLibraryCard";
import { IMAGE_BASE_URL } from "@/config/config";
import { useWindowSize } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";

export const ArticleCard: React.FC<Props> = (props) => {
  const { type, media, content, isPreview } = props;
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
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
    isPreview ? router.push(`/library/${props.section}`) : openLibraryItem();
  };

  const { width } = useWindowSize();

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ContentCard className={getValidClassNames(cl[type])} width={cardWidth}>
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
              src={`${IMAGE_BASE_URL}/${media[0].image?.filename}`}
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
            slidesToShow={width && width < 612 ? 1 : 2}
            centerMode={width ? width < 612 : false}
            focusOnSelect={false}
            className={cl.carousel}
            infinite={true}
          >
            {media!.map((image) => (
              <CarouselItem
                key={image.id || image._id}
                className={cl.carouselItem}
                isOutlined={true}
                isHoverEventActive={false}
              >
                <Image
                  alt=""
                  src={`${IMAGE_BASE_URL}/${image.image?.filename}`}
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

        <CardFooter item={props} />
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

    if (item.type === "image" || item.type === "audio") {
      return false;
    }

    if (item.type === "paragraph") {
      preview.push(
        <div key={item.id}>
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
