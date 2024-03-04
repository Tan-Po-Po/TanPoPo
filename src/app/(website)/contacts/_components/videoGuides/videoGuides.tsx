"use client";
import PlayButtonIcon from "/public/icons/playButton.svg";
import {
  ContentCard,
  Typography,
  Carousel,
  CarouselItem,
  DialogGallery,
} from "@/components";
import { textContent } from "../../textContent";
import cl from "./videoGuides.module.scss";
import { useWindowSize } from "@uidotdev/usehooks";
import { useAppDispatch } from "@/redux/hooks";
import { openGalleryDialog } from "@/redux/slices/galleryDialog/galleryDialogSlice";
import { IGuides } from "@/models/Guides";

type Properties = {
  guides: IGuides[] | undefined;
};

const VideoGuides: React.FC<Properties> = ({ guides }) => {
  const { width } = useWindowSize();
  const dispatch = useAppDispatch();

  if (!guides) {
    return null;
  }

  return (
    <>
      <DialogGallery />
      {width && width < 780 ? (
        <Carousel
          initialSlide={0}
          slideAmount={guides.length}
          useNumbers
          dots={false}
          slidesToShow={1}
          className={cl.carousel}
          infinite={false}
          centerMode
        >
          {guides.map((card, i) => (
            <CarouselItem key={i}>
              <ContentCard
                width="384px"
                cardBgColor={card.background}
                className={cl.videoCard}
                onClick={() =>
                  dispatch(
                    openGalleryDialog({
                      type: "video",
                      src: card.href,
                    })
                  )
                }
              >
                <div className={cl.icon}>
                  <PlayButtonIcon style={{ width: "50px", height: "auto" }} />
                </div>
                <Typography variant="body2">
                  {card.textArray.map((item, idx) =>
                    item.isUnderlined ? <u key={idx}>{item.text}</u> : item.text
                  )}
                </Typography>
              </ContentCard>
            </CarouselItem>
          ))}
        </Carousel>
      ) : (
        <div className={cl.videoGuidesBlock}>
          {guides.map((card, i) => (
            <ContentCard
              key={i}
              width="384px"
              cardBgColor={card.background}
              className={cl.videoCard}
              onClick={() =>
                dispatch(
                  openGalleryDialog({
                    type: "video",
                    src: card.href,
                  })
                )
              }
            >
              <div className={cl.icon}>
                <PlayButtonIcon style={{ width: "50px", height: "auto" }} />
              </div>
              <Typography variant="body2">
                {card.textArray.map((item, idx) =>
                  item.isUnderlined ? <u key={idx}>{item.text}</u> : item.text
                )}
              </Typography>
            </ContentCard>
          ))}
        </div>
      )}
    </>
  );
};

export { VideoGuides };
