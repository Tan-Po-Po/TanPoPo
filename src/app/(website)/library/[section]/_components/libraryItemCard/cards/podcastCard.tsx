import { ContentCard, Typography } from "@/components";
import cl from "../libraryItemCard.module.scss";
import { Props } from "../props";
import { LibraryItemContent } from "@/app/(website)/library/[section]/_components/libraryItemContent/libraryItemContent";
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
      label={<Typography variant="body1">{label}</Typography>}
      labelBgColor={labelColor}
      className={cl.podcast}
    >
      <div className={cl.content}>
        <LibraryItemContent
          content={content!}
          cardType={type}
          color={labelColor}
        />
      </div>
      <Footer hashtags={hashtags} cardId={_id!} />
    </ContentCard>
  );
};
