import { ContentCard, Typography } from "@/components";
import { ILibraryItemContent } from "@/models/LibraryItem";
import cl from "./libraryItemContent.module.scss";
import Image from "next/image";
import { getValidClassNames } from "../../../../../../helpers";
import Link from "next/link";
import { AudioButton } from "@/components/audioButton/audioButton";
import { useAppDispatch } from "@/redux/hooks";
import { openGalleryDialog } from "@/redux/slices/galleryDialog/galleryDialogSlice";

interface Props {
  content: ILibraryItemContent[];
  cardType: string;
  color: string;
  isDialog?: boolean;
}

export const LibraryItemContent: React.FC<Props> = ({
  content,
  cardType,
  color,
  isDialog,
}) => {
  const dispatch = useAppDispatch();
  const isPodcast = cardType === "podcast";

  const getPara = (item: ILibraryItemContent) => {
    console.log("para item", item);

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

  // const getImage = (item: ILibraryItemContent) => {
  //   if (!isPodcast) {
  //     return (
  //       <Image
  //         alt=""
  //         src={item.href!}
  //         width={1920}
  //         height={1080}
  //         style={{ width: "100%", height: "auto" }}
  //       />
  //     );
  //   }

  //   if (isPodcast && !isDialog) {
  //     return (
  //       <Image alt="" src={item.href!} fill style={{ objectFit: "cover" }} />
  //     );
  //   }

  //   return;
  // };
  const getImage = (item: ILibraryItemContent) => {
    if (isPodcast && isDialog) {
      return;
    }

    return (
      <ContentCard
        key={item.id || item._id}
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
              src: item.href!,
            })
          );
        }}
      >
        {isPodcast ? (
          <Image alt="" src={item.href!} fill style={{ objectFit: "cover" }} />
        ) : (
          <Image
            alt=""
            src={item.href!}
            width={1920}
            height={1080}
            style={{ width: "100%", height: "auto" }}
          />
        )}
      </ContentCard>
    );
  };

  return content.map((item) => {
    console.log("content type", item.type);

    switch (item.type) {
      case "paragraph":
        return <div className={cl.para}>{getPara(item)}</div>;
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
              href={item.href!}
              color={color}
              className={cl.audioButton}
            />
          )
        );
    }
  });
};
