import { Carousel, CarouselItem, ContentCard, Typography } from "@/components";
import { ILibraryItem, ILibraryItemContent } from "@/models/LibraryItem";
import cl from "./libraryItemContent.module.scss";
import Image from "next/image";
import { getValidClassNames } from "@/helpers";
import Link from "next/link";
import { AudioButton } from "@/components/audioButton/audioButton";
import { useAppDispatch } from "@/redux/hooks";
import { openGalleryDialog } from "@/redux/slices/galleryDialog/galleryDialogSlice";
import { useOpenLibraryItem } from "@/hooks/useOpenLibraryCard";
import { IMAGE_BASE_URL } from "@/config/config";
import { useWindowSize } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";

interface Props {
  item: ILibraryItem;
  isDialog?: boolean;
}

export const LibraryItemContent: React.FC<Props> = ({ item, isDialog }) => {
  const { content, labelColor } = item;
  const dispatch = useAppDispatch();
  const isPodcast = item.type === "podcast";
  const { width } = useWindowSize();

  const isMobile = Boolean(width && width < 678);

  const { openLibraryItem } = useOpenLibraryItem({ item, autoplay: "1" });

  const handlePodcastClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openLibraryItem();
  };

  const getParagraph = (item: ILibraryItemContent) => {
    return item.paragraph!.map((item, i) => (
      <Typography
        key={item.id}
        variant={isPodcast && !isDialog ? "subtitle2" : "subtitle1"}
        className={getValidClassNames(cl.contentPara)}
        style={{
          lineHeight: "normal",
          textIndent: `${i == 0 ? "16px !important" : "0"}`,
        }}
      >
        {item.href ? (
          <Link href={item.href} target="_blank">
            {item.text}
          </Link>
        ) : (
          item.text
        )}
      </Typography>
    ));
  };

  const getImage = (itemContent: ILibraryItemContent, index: number) => {
    if (isPodcast && index === 0) {
      return;
    }
    // If in content more than one image return slider
    if (itemContent.images && itemContent.images.length > 1) {
      return (
        <Carousel
          dots={false}
          slidesToShow={isMobile ? 1 : 2}
          centerMode={isMobile}
          focusOnSelect={false}
          className={cl.carousel}
          infinite={true}
        >
          {itemContent.images.map((item, index) => {
            return (
              <CarouselItem
                key={index}
                className={cl.carouselItem}
                isOutlined={true}
                onClick={() =>
                  dispatch(
                    openGalleryDialog({
                      type: "image",
                      src: `${IMAGE_BASE_URL}/${item.image.filename}`,
                    })
                  )
                }
              >
                <Image
                  alt=""
                  src={`${IMAGE_BASE_URL}/${item.image.filename}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </CarouselItem>
            );
          })}
        </Carousel>
      );
    } else {
      return (
        <ContentCard
          key={itemContent.id || itemContent._id}
          style={{ padding: "0", width: "fit-content" }}
          className={getValidClassNames(
            cl.image,
            isPodcast && cl.contentImagePodcast
          )}
          width="666px"
          onClick={() => {
            dispatch(
              openGalleryDialog({
                type: "image",
                src: `${IMAGE_BASE_URL}/${
                  itemContent.images![0].image.filename
                }`,
              })
            );
          }}
        >
          <Image
            alt=""
            src={`${IMAGE_BASE_URL}/${itemContent.images![0].image.filename}`}
            width={1920}
            height={1080}
            style={{
              maxWidth: "100%",
              width: itemContent.images![0].image.width,
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </ContentCard>
      );
    }
  };

  return content!.map((item, index) => {
    switch (item.type) {
      case "paragraph":
        return (
          <div key={item.id} className={cl.para}>
            {getParagraph(item)}
          </div>
        );
      case "header":
        return (
          <Typography
            key={item.id || item._id}
            variant="body1"
            style={{ fontWeight: "700" }}
            className={cl.contentHeader}
            align="center"
          >
            {item.href ? (
              <Link
                href={item.href}
                style={{ textDecoration: "underline" }}
                target="_blank"
              >
                {item.value}
              </Link>
            ) : (
              item.value
            )}
          </Typography>
        );
      case "image":
        return getImage(item, index);

      case "audio":
        if (isDialog) {
          if (item.value?.includes("youtube") && index === 0 || !item.value) {
            return;
          }

          return (
            <AudioButton
              key={item.id || item._id}
              isPodcast={!isMobile}
              color={labelColor}
              className={cl.audioButton}
              onClick={() => {
                if (item.value) {
                  window.open(item.value, "_blank")?.focus();
                }
              }}
            />
          );
        } else {
          return (
            <AudioButton
              key={item.id || item._id}
              isPodcast={isPodcast}
              color={labelColor}
              className={cl.audioButton}
              onClick={handlePodcastClick}
            />
          );
        }
    }
  });
};
