"use client";
import { ContentCard, Typography } from "@/components";
import cl from "../libraryItemCard.module.scss";
import { ILibraryItem } from "@/models/LibraryItem";
import CopyIcon from "/public/icons/copy.svg";
import { usePathname, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { SERVER_URL } from "@/config/config";

interface Props extends Pick<ILibraryItem, "hashtags"> {
  cardId: string;
}

export const Footer: React.FC<Props> = ({ hashtags, cardId }) => {
  const path = usePathname();
  const searchParams = useSearchParams();

  const handleCopyClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    navigator.clipboard.writeText(
      `${SERVER_URL}${path}?page=${searchParams.get("page")}&id=${cardId}`
    );
    toast("Посилання скопійовано💾");
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
