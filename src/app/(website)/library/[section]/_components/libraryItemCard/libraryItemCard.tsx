"use client";
import { ILibraryItem } from "@/models/LibraryItem";
import cl from "./libraryItemCard.module.scss";
import { ArticleCard } from "./cards/articleCard";
import { Props } from "./props";
import { PodcastCard } from "./cards/podcastCard";
import { ReelsCard } from "./cards/reelsCard";
import { MusicCard } from "./cards/musicCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const LibraryItemCard: React.FC<Props> = (props) => {
  let card: React.ReactNode;

  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  console.log("card path", path);

  const handelClick = () => {
    if (
      props.type === "reels" ||
      (props.type === "music" && !props.content![0].href?.includes("youtube"))
    ) {
      return window.open(
        props!.gallery![0].video! || props!.content![0].href!,
        "_ blank"
      );
    }
    router.push(`${path}?page=${searchParams.get("page")}&id=${props._id}`, {
      scroll: false,
    });
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
