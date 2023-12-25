import { ContentCard, Typography } from "@/components";
import cl from "../libraryItemCard.module.scss";
import { Props } from "../props";
import { LibraryItemContent } from "@/app/(website)/library/[section]/_components/libraryItemContent/libraryItemContent";
import { getColor } from "@/helpers/getLibraryItemColors";
import { Footer } from "../footer/footer";

export const PodcastCard: React.FC<Props> = (props) => {
  const { _id, content, type, labelColor, label, hashtags } = props;
  return (
    <ContentCard
      width="626px"
      label={<Typography variant="body1">{label}</Typography>}
      labelBgColor={labelColor}
      className={cl.podcast}
    >
      <div className={cl.content}>
        <LibraryItemContent item={props} />
      </div>
      <Footer item={props} />
    </ContentCard>
  );
};
