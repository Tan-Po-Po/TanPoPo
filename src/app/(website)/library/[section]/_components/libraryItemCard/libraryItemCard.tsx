"use client";
import cl from "./libraryItemCard.module.scss";
import { ArticleCard } from "./cards/articleCard";
import { Props } from "./props";
import { PodcastCard } from "./cards/podcastCard";
import { ReelsCard } from "./cards/reelsCard";
import { MusicCard } from "./cards/musicCard";
import { useOpenLibraryItem } from "@/hooks/useOpenLibraryCard";
import { NewLabel } from "./newLabel/newLabel";
import { ContentCard } from "@/components";
import { useWindowSize } from "@uidotdev/usehooks";
import { getValidClassNames } from "@/helpers";

export const LibraryItemCard: React.FC<Props> = (props) => {
  let card: React.ReactNode;

  const { openLibraryItem } = useOpenLibraryItem({
    item: props,
    isNew: props.isNew,
  });

  const { width } = useWindowSize();
  const isMobile = width && width < 767;

  const handelClick = () => {
    openLibraryItem();
  };

  if (props.type === "article" || props.type === "articleSmall") {
    card = <ArticleCard {...props} />;
  } else if (props.type === "podcast") {
    card = <PodcastCard {...props} />;
  } else if (props.type === "reels") {
    card = <ReelsCard {...props} />;
  } else if (props.type === "music") {
    card = <MusicCard {...props} />;
  }

  return (
    <ContentCard
      onClick={handelClick}
      id={props._id}
      className={cl.libraryItemCard}
      label={
        <>
          {props.label}
          {props.isNew && isMobile && <NewLabel position="center" />}
        </>
      }
      labelBgColor={props.labelColor}
      labelClassName={getValidClassNames(
        cl.label,
        props.isNew && isMobile && cl.new
      )}
    >
      {props.isNew && !isMobile && <NewLabel />}
      {card}
    </ContentCard>
  );
};
