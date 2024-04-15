import { ContentCard, Typography } from "@/components";
import cl from "../libraryItemCard.module.scss";
import { Props } from "../props";
import { CardFooter } from "../cardFooter/cardFooter";
import { useOpenLibraryItem } from "@/hooks/useOpenLibraryCard";
import { ILibraryItemContent } from "@/models/LibraryItem";
import { getValidClassNames } from "@/helpers";
import Link from "next/link";
import Image from "next/image";
import { IMAGE_BASE_URL } from "@/config/config";
import { AudioButton } from "@/components/audioButton/audioButton";

export const PodcastCard: React.FC<Props> = (item) => {
  const { content, labelColor } = item;
  const { openLibraryItem } = useOpenLibraryItem({ item, autoplay: "1" });

  const handlePodcastClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openLibraryItem();
  };

  const getParagraph = (item: ILibraryItemContent) => {
    return item.paragraph!.map((item, i) => (
      <Typography
        key={item.id}
        variant={"subtitle1"}
        className={getValidClassNames(cl.contentPara)}
        style={{
          fontSize: "15px",
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

  const getImage = (itemContent: ILibraryItemContent) => {
    return (
      <ContentCard
        key={itemContent.id || itemContent._id}
        style={{ padding: "0" }}
        className={getValidClassNames(
          cl.image, cl.contentImagePodcast
        )}
        width="666px"
      >
        <Image
          alt=""
          src={`${IMAGE_BASE_URL}/${item.media[0].image?.filename}`}
          fill
          style={{ objectFit: "cover" }}
        />
      </ContentCard>
    );
  };

  return (
    <ContentCard width="626px" className={cl.podcast}>
      <div className={cl.content}>
        {content!.map((item, index) => {
          if (index >= 5) return;
          switch (item.type) {
            case "paragraph":
              return (
                <div key={item.id} className={cl.para}>
                  {getParagraph(item)}
                </div>
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
              return getImage(item);

            case "audio":
              return (
                <AudioButton
                  key={item.id || item._id}
                  isPodcast={true}
                  color={labelColor}
                  className={cl.audioButton}
                  onClick={handlePodcastClick}
                />
              );
          }
        })}
      </div>
      <CardFooter item={item} />
    </ContentCard>
  );
};
