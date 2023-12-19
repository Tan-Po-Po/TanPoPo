"use client";
import { ILibraryItem } from "@/models/LibraryItem";
import cl from "./libraryItemCard.module.scss";
import { ArticleCard } from "./cards/articleCard";
import { Props } from "./props";
import { PodcastCard } from "./cards/podcastCard";
import { ReelsCard } from "./cards/reelsCard";
import { MusicCard } from "./cards/musicCard";

export const LibraryItemCard: React.FC<Props> = (props) => {
  if (props.type === "article" || props.type === "articleSmall") {
    return <ArticleCard {...props} />;
  } else if (props.type === "podcast") {
    return <PodcastCard {...props} />;
  } else if (props.type === "reels") {
    return <ReelsCard {...props} />;
  } else if (props.type === "music") {
    return <MusicCard {...props} />;
  }
};
