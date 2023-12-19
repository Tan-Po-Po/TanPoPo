import { ContentCard, Typography } from "@/components";
import { ILibraryItemContent } from "@/models/LibraryItem";
import cl from "@/app/(website)/library/[section]/_components/libraryItemCard/libraryItemCard.module.scss";
import Image from "next/image";
import { getValidClassNames } from ".";
import Link from "next/link";
import { AudioButton } from "@/components/audioButton/audioButton";

export const getLibraryItemContent = (
  content: ILibraryItemContent[],
  cardType: string,
  color: string
) => {
  const isPodcast = cardType === "podcast";

  return content.map((item) => {
    switch (item.type) {
      case "paragraph":
        return (
          <Typography
            key={item.id || item._id}
            variant={isPodcast ? "subtitle2" : "subtitle1"}
            className={getValidClassNames(cl.contentPara)}
            style={{ lineHeight: "normal" }}
          >
            {item.value}
          </Typography>
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
        return (
          <ContentCard
            key={item.id || item._id}
            style={{ padding: "0" }}
            className={getValidClassNames(isPodcast && cl.contentImagePodcast)}
          >
            {isPodcast ? (
              <Image
                alt=""
                src={item.href!}
                fill
                style={{ objectFit: "cover" }}
              />
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
      case "text":
        return (
          <Typography
            key={item.id || item._id}
            variant={isPodcast ? "subtitle2" : "subtitle1"}
          >
            {item.value}
          </Typography>
        );
      case "link":
        <Link key={item.id || item._id} href={item.href!}>
          <Typography variant={isPodcast ? "subtitle2" : "subtitle1"}>
            {item.value}
          </Typography>
        </Link>;
      case "audio":
        return (
          <AudioButton
            key={item.id || item._id}
            isPodcast={isPodcast}
            href={item.href!}
            color={color}
          />
        );
    }
  });
};
