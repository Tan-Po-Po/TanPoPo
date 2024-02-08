"use ";
import cl from "../dialogArticle.module.scss";
import { ContentCard, Carousel, CarouselItem } from "@/components";
import { getEmbedYouTubeLink, getValidClassNames } from "@/helpers";
import { ILibraryItem } from "@/models/LibraryItem";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { openGalleryDialog } from "@/redux/slices/galleryDialog/galleryDialogSlice";
import { useSearchParams } from "next/navigation";
import { IMAGE_BASE_URL } from "@/config/config";
import { Suspense } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

interface Props {
  item: ILibraryItem;
}

export const Media: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  const {width} = useWindowSize()
  const isMobile = Boolean(width && width < 678)

  if (item.media.length === 1) {
    return item.media[0].type === "video" ? (
      <ContentCard width="fit-content" className={cl.iFrameWrapper}>
        <Suspense fallback={<></>}>
          <iframe
            className={cl.iFrame}
            src={getEmbedYouTubeLink(
              item.media[0].video!,
              searchParams.get("autoplay") as "0" | "1" | null
            )}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Suspense>
      </ContentCard>
    ) : (
      <ContentCard
        width="666px"
        className={getValidClassNames(cl.imageContainer)}
        onClick={() =>
          dispatch(
            openGalleryDialog({
              type: item.media![0].type,
              src: `${IMAGE_BASE_URL}/${item.media[0].image?.filename}`,
            })
          )
        }
      >
        <Image
          alt=""
          src={`${IMAGE_BASE_URL}/${item.media[0].image?.filename}`}
          width={1920}
          height={1080}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </ContentCard>
    );
  } else {
    return (
      <Carousel
        dots={false}
        slidesToShow={isMobile ? 1 : 2}
        centerMode={isMobile}
        focusOnSelect={false}
        className={cl.carousel}
        infinite={false}
      >
        {item.media.map((media) => (
          <CarouselItem
            key={media.id || media._id}
            className={cl.carouselItem}
            isOutlined={true}
            onClick={() =>
              dispatch(
                openGalleryDialog({
                  type: media.type,
                  src: `${IMAGE_BASE_URL}/${media.image?.filename}`,
                })
              )
            }
          >
            <Image
              alt=""
              src={`${IMAGE_BASE_URL}/${media.image?.filename}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </CarouselItem>
        ))}
      </Carousel>
    );
  }
};
