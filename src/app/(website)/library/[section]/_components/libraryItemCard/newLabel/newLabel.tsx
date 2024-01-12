import { ContentCard } from "@/components";
import cl from "./newLabel.module.scss";
import { getValidClassNames } from "@/helpers";

export const NewLabel = ({ className }: { className?: string }) => {
  return (
    <ContentCard
      width="fit-content"
      cardBgColor="linear-gradient(180deg, #B4FF99 0%, #FDFF8E 100%)"
      className={getValidClassNames(cl.newLabel, className)}
    >
      new!
    </ContentCard>
  );
};
