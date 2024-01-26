"use client";
import { ContentCard } from "@/components";
import cl from "./newLabel.module.scss";
import { getValidClassNames } from "@/helpers";

interface Props {
  className?: string;
  position?: "right" | "center";
}

export const NewLabel: React.FC<Props> = ({
  className,
  position = "right",
}) => {

  return (
    <ContentCard
      width="fit-content"
      cardBgColor="linear-gradient(180deg, #B4FF99 0%, #FDFF8E 100%)"
      className={getValidClassNames(
        cl.newLabel,
        position === "center" && cl.center,
        className
      )}
    >
      new!
    </ContentCard>
  );
};
