import { ContentCard } from "@/components";
import cl from "../libraryItemCard.module.scss";
import { Props } from "../props";
import { getLibraryItemContent } from "@/helpers/getLibraryItemContent";
import { getColor } from "@/helpers/getLibraryItemColors";
import { Footer } from "../footer/footer";

export const PodcastCard: React.FC<Props> = ({
  _id,
  content,
  type,
  labelColor,
  label,
  hashtags,
}) => {
  return (
    <ContentCard
      width="626px"
      label={label}
      labelBgColor={labelColor}
      className={cl.podcast}
    >
      <div className={cl.content}>
        {getLibraryItemContent(content!, type, labelColor)}
      </div>
      <Footer hashtags={hashtags} cardId={_id!} />
    </ContentCard>
  );
};
