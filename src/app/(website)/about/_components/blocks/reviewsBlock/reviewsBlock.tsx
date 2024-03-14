"use client";
import {
  Carousel,
  CarouselItem,
  ContentCard,
  DialogGallery,
  Typography,
} from "@/components";
import cl from "./reviewsBlock.module.scss";
import { textContent } from "../../../textContent";
import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import { useAppDispatch } from "@/redux/hooks";
import { openGalleryDialog } from "@/redux/slices/galleryDialog/galleryDialogSlice";
import { IFeedback } from "@/models/Feedbacks";
import { IMAGE_BASE_URL } from "@/config/config";

type Properties = {
  feedbacks: IFeedback[];
};

export const ReviewsBlock: React.FC<Properties> = ({ feedbacks }) => {
  const dispatch = useAppDispatch();
  const { width } = useWindowSize();
  const isPc = Boolean(width && width >= 1024);
  const isMobile = Boolean(width && width < 678);
  const isTablet = Boolean(width && width >= 678 && width < 1024);

  if (!feedbacks.length) {
    return null;
  }

  return (
    <div
      className={cl.reviewsBlock}
      id="reviews"
      style={{ scrollMarginTop: "120px" }}
    >
      <DialogGallery />
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
          {getFeedbackImagesSrc(feedbacks).map((feedback, i) => (
            <CarouselItem
              key={i}
              isOutlined={true}
              type={i === 4 ? "video" : "image"}
              className={cl.carouselItem}
              onClick={() => {
                if (!feedback.link) {
                  dispatch(
                    openGalleryDialog({ type: "image", src: feedback.src })
                  );
                  return;
                }
                window.open(feedback.link, "_blank");
              }}
            >
              <Image
                alt=""
                src={feedback.src}
                width={500}
                height={300}
                style={{
                  minWidth: "100%",
                  maxWidth: "272px",
                  width: "100%",
                  height: "100%",
                  maxHeight: "436px",
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

function getFeedbackImagesSrc(feedbacks: IFeedback[]) {
  const images: { src: string; link?: string }[] = [];

  feedbacks.forEach((feedback) => {
    images.push({
      src: `${IMAGE_BASE_URL}/${feedback.image.filename}`,
      link: feedback.link,
    });
  });

  return images;
}
