"use client";
import { ContentCard, Typography } from "@/components";
import cl from "./cardFooter.module.scss";
import { ILibraryItem } from "@/models/LibraryItem";
import CopyIcon from "/public/icons/copy.svg";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { SERVER_URL } from "@/config/config";

interface Props {
  item: ILibraryItem;
}

export const CardFooter: React.FC<Props> = ({ item }) => {
  const { _id, hashtags, type, media } = item;

  const path = usePathname();

  const handleCopyClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    try {
      if (
        type === "reels" ||
        (type === "music" && !media![0].video?.includes("youtube"))
      ) {

        await navigator.clipboard.writeText(media[0].video!);
      } else {
        await navigator.clipboard.writeText(`${SERVER_URL}${path}?id=${_id}`);
      }
      toast("Посилання скопійовано💾");
    } catch (err) {
      console.log(err);
      toast("Не вдалося отримати посиллання");
    }
  };
  return (
    <div className={cl.footer}>
      <div className={cl.hashtags}>
        {hashtags &&
          hashtags.map((tag) => (
            <ContentCard
              key={tag._id || tag.id}
              width="fit-content"
              className={cl.hashtag}
              cardBgColor={tag.color}
            >
              <Typography
                variant="subtitle2"
                style={{
                  fontWeight: "700",
                  color: "rgba(0, 0, 0, 0.70)",
                  width: "fit-content",
                }}
              >
                {tag.value}
              </Typography>
            </ContentCard>
          ))}
      </div>
      <div className={cl.copyIcon} onClick={handleCopyClick}>
        <CopyIcon />
      </div>
    </div>
  );
};
