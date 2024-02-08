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

const VideoGuides = () => {
  const { width } = useWindowSize();
  const dispatch = useAppDispatch();

  return (
    <>
      <DialogGallery />
      {width && width < 600 ? (
        <Carousel
          initialSlide={0}
          slideAmount={textContent.videoGuidesBlock.cards.length}
          useNumbers
          dots={false}
          slidesToShow={1}
          className={cl.carousel}
          infinite={false}
          centerMode
        >
          {textContent.videoGuidesBlock.cards.map((card, i) => (
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
                <Typography variant="body2">{card.caption}</Typography>
              </ContentCard>
            </CarouselItem>
          ))}
        </Carousel>
      ) : (
        <div className={cl.videoGuidesBlock}>
          {textContent.videoGuidesBlock.cards.map((card, i) => (
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
                <PlayButtonIcon />
              </div>
              <Typography variant="body2">{card.caption}</Typography>
            </ContentCard>
          ))}
        </div>
      )}
    </>
  );
};

export { VideoGuides };
