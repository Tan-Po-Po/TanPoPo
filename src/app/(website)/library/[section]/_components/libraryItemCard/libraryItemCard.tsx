"use client";
import { ILibraryItem } from "@/models/LibraryItem";
import cl from "./libraryItemCard.module.scss";
import { ArticleCard } from "./cards/articleCard";
import { Props } from "./props";
import { PodcastCard } from "./cards/podcastCard";
import { ReelsCard } from "./cards/reelsCard";
import { MusicCard } from "./cards/musicCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useOpenLibraryItem } from "@/hooks/useOpenLibraryCard";

export const LibraryItemCard: React.FC<Props> = (props) => {
  let card: React.ReactNode;

  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const { openLibraryItem } = useOpenLibraryItem({ item: props });

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
    <div onClick={handelClick} id={props._id}>
      {card}
    </div>
  );
};
