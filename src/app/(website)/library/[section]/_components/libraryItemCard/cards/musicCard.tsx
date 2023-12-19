import { ContentCard } from "@/components";
import cl from "../libraryItemCard.module.scss";
import { Props } from "../props";
import { getLibraryItemContent } from "@/helpers/getLibraryItemContent";
import { Footer } from "../footer/footer";

export const MusicCard: React.FC<Props> = ({
  label,
  labelColor,
  hashtags,
  content,
  type,
  _id,
}) => {
  return (
    <ContentCard className={cl.music} label={label} labelBgColor={labelColor}>
      {getLibraryItemContent(content!, type, labelColor)}
      <Footer hashtags={hashtags} cardId={_id!} />
    </ContentCard>
  );
};
