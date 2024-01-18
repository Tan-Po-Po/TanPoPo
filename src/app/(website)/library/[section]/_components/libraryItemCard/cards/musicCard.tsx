import { ContentCard } from "@/components";
import cl from "../libraryItemCard.module.scss";
import { Props } from "../props";
import { LibraryItemContent } from "@/app/(website)/library/[section]/_components/libraryItemContent/libraryItemContent";
import { CardFooter } from "../cardFooter/cardFooter";

export const MusicCard: React.FC<Props> = (props) => {
  const { label, labelColor, content, type } = props;
  return (
    <ContentCard
      className={cl.music}
      labelClassName={cl.label}
      label={label}
      labelBgColor={labelColor}
    >
      <LibraryItemContent item={props} />
      <CardFooter item={props} />
    </ContentCard>
  );
};
