import cl from "../dialogArticle.module.scss";
import { ContentCard, Carousel, CarouselItem } from "@/components";
import { getEmbedYouTubeLink, getValidClassNames } from "@/helpers";
import { ILibraryItem } from "@/models/LibraryItem";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks";
import { openGalleryDialog } from "@/redux/slices/galleryDialog/galleryDialogSlice";
import { useSearchParams } from "next/navigation";

interface Props {
  item: ILibraryItem;
}

export const Media: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();

  const searchParams = useSearchParams();

  if (item.media.length === 1) {
    return item.media[0].type === "video" ? (
      <ContentCard
        width="fit-content"
        style={{ padding: 0, overflow: "hidden" }}
      >
        <iframe
          width="666"
          height="376"
          src={getEmbedYouTubeLink(
            item.media[0].video!,
            searchParams.get("autoplay") as "0" | "1" | null
          )}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </ContentCard>
    ) : (
      <ContentCard
        width="666px"
        className={getValidClassNames(cl.imageContainer)}
        onClick={() =>
          dispatch(
            openGalleryDialog({
              type: item.media![0].type,
              src: item.media![0].image!,
            })
          )
        }
      >
        <Image
          alt=""
          src={item.media[0].image!}
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
        slidesToShow={2}
        centerMode={false}
        focusOnSelect={false}
        className={cl.carousel}
      >
        {item.media.map((image) => (
          <CarouselItem
            key={image.id || image._id}
            className={cl.carouselItem}
            isOutlined={true}
            onClick={() =>
              dispatch(
                openGalleryDialog({
                  type: image.type,
                  src: image.image!,
                })
              )
            }
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
    );
  }
};