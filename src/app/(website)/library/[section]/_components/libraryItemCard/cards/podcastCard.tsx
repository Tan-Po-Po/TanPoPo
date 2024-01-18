import { ContentCard, Typography } from "@/components";
import cl from "../libraryItemCard.module.scss";
import { Props } from "../props";
import { LibraryItemContent } from "@/app/(website)/library/[section]/_components/libraryItemContent/libraryItemContent";
import { CardFooter } from "../cardFooter/cardFooter";

export const PodcastCard: React.FC<Props> = (props) => {
  const { labelColor, label } = props;
  return (
    <ContentCard
      width="626px"
      label={<Typography variant="body1">{label}</Typography>}
      labelBgColor={labelColor}
      className={cl.podcast}
      labelClassName={cl.label}
    >
      <div className={cl.content}>
        <LibraryItemContent item={props} />
      </div>
      <CardFooter item={props} />
    </ContentCard>
  );
};
