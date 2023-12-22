import { ContentCard } from "@/components";
import cl from "../libraryItemCard.module.scss";
import { Props } from "../props";
import { LibraryItemContent } from "@/app/(website)/library/[section]/_components/libraryItemContent/libraryItemContent";
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
      <LibraryItemContent
        content={content!}
        cardType={type}
        color={labelColor}
      />
      <Footer hashtags={hashtags} cardId={_id!} />
    </ContentCard>
  );
};
