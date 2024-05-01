import { ContentCard, Typography } from "@/components";
import cl from "../libraryItemCard.module.scss";
import { Props } from "../props";
import { LibraryItemContent } from "@/app/(website)/library/[section]/_components/libraryItemContent/libraryItemContent";
import { CardFooter } from "../cardFooter/cardFooter";
import { AudioButton } from "@/components/audioButton/audioButton";
import { useOpenLibraryItem } from "@/hooks/useOpenLibraryCard";
import { getValidClassNames } from "@/helpers";
import { ILibraryItemContent } from "@/models/LibraryItem";
import Link from "next/link";

export const MusicCard: React.FC<Props> = (props) => {
  const { content, labelColor } = props;
  const { openLibraryItem } = useOpenLibraryItem({
    item: props,
    autoplay: "1",
  });

  const handlePodcastClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openLibraryItem();
  };

  const getParagraph = (item: ILibraryItemContent) => {
    return item.paragraph!.map((item, i) => (
      <Typography
        key={item.id}
        variant={"body2"}
        className={getValidClassNames(cl.contentParagraph)}
        style={{
          lineHeight: "normal",
          whiteSpace: "pre",
          WebkitTextStrokeWidth: "0.4px"
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

  return (
    <ContentCard className={cl.music}>
      {content!.map((item, index) => {
        if (index > 1) return;
        switch (item.type) {
          case "paragraph":
            return (
              <div
                key={item.id}
                className={getValidClassNames(cl.musicParagraph, cl.text)}
              >
                <div className={cl.gradient}></div>
                {getParagraph(item)}
              </div>
            );
          case "audio":
            return (
              <AudioButton
                key={item.id || item._id}
                isPodcast={false}
                color={labelColor}
                className={cl.audioButton}
                onClick={handlePodcastClick}
              />
            );
        }
      })}
      <CardFooter item={props} />
    </ContentCard>
  );
};
