import { ContentCard, Typography } from "@/components";
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

interface Props {
  item: ILibraryItem;
  isDialog?: boolean;
}

export const LibraryItemContent: React.FC<Props> = ({ item, isDialog }) => {
  const { content, labelColor } = item;
  const dispatch = useAppDispatch();
  const isPodcast = item.type === "podcast";

  const { openLibraryItem } = useOpenLibraryItem({ item, autoplay: "1" });

  const handlePodcastClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openLibraryItem();
  };

  const getPara = (item: ILibraryItemContent) => {
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

  const getImage = (itemContent: ILibraryItemContent) => {
    if (isPodcast && isDialog) {
      return;
    }

    return (
      <ContentCard
        key={itemContent.id || itemContent._id}
        style={{ padding: "0" }}
        className={getValidClassNames(
          cl.image,
          isPodcast && cl.contentImagePodcast
        )}
        width="666px"
        onClick={() => {
          if (isPodcast) {
            return;
          }
          dispatch(
            openGalleryDialog({
              type: "image",
              src: `${IMAGE_BASE_URL}/${itemContent.image?.filename}`,
            })
          );
        }}
      >
        {isPodcast ? (
          <Image
            alt=""
            src={`${IMAGE_BASE_URL}/${item.media[0].image?.filename}`}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <Image
            alt=""
            src={`${IMAGE_BASE_URL}/${itemContent.image?.filename}`}
            width={1920}
            height={1080}
            style={{ width: "100%", height: "auto" }}
          />
        )}
      </ContentCard>
    );
  };

  return content!.map((item) => {
    switch (item.type) {
      case "paragraph":
        return (
          <div key={item.id} className={cl.para}>
            {getPara(item)}
          </div>
        );
      case "header":
        return (
          <Typography
            key={item.id || item._id}
            variant="body1"
            style={{ fontWeight: "700" }}
            className={cl.contentHeader}
          >
            {" "}
            {item.value}
          </Typography>
        );
      case "image":
        return getImage(item);

      case "audio":
        return (
          !isDialog && (
            <AudioButton
              key={item.id || item._id}
              isPodcast={isPodcast}
              href={item.value!}
              color={labelColor}
              className={cl.audioButton}
              onClick={handlePodcastClick}
            />
          )
        );
    }
  });
};
