import { ContentCard } from "@/components";
import cl from "./newLabel.module.scss";

export const NewLabel = () => {
  return (
    <ContentCard
      width="fit-content"
      cardBgColor="linear-gradient(180deg, #B4FF99 0%, #FDFF8E 100%)"
      className={cl.newLabel}
    >
      new!
    </ContentCard>
  );
};
