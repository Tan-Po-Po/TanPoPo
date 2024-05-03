import { ContentCard, Typography } from "@/components";
import cl from "../libraryItemCard.module.scss";
import { Props } from "../props";
import { CardFooter } from "../cardFooter/cardFooter";
import { AudioButton } from "@/components/audioButton/audioButton";
import { getValidClassNames } from "@/helpers";
import { ILibraryItemContent } from "@/models/LibraryItem";
import Link from "next/link";

export const MusicCard: React.FC<Props> = (props) => {
  const { content, labelColor } = props;

  const getParagraph = (item: ILibraryItemContent) => {
    return item.paragraph!.map((item, i) => (
      <Typography
        key={item.id}
        variant={"body2"}
        className={getValidClassNames(cl.contentParagraph)}
        style={{
          lineHeight: "normal",
          whiteSpace: "pre-line",
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
              />
            );
        }
      })}
      <CardFooter item={props} />
    </ContentCard>
  );
};
