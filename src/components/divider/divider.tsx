import React from "react";
import { Typography } from "../typography/typography";
import { ContentCard } from "../contentCard/contentCard";

import cl from "./divider.module.scss";
import { getValidClassNames } from "@/helpers";

type Properties = {
  firsRow: string;
  secondRow?: string;
  bgColor: string;
  id?: string;
  width?: string;
  className?: string;
};

const Divider: React.FC<Properties> = ({
  firsRow,
  secondRow,
  bgColor,
  id,
  width,
  className,
}) => {
  return (
    <div className={cl.wrapper} id={id}>
      <div className={cl.divider}></div>
      <ContentCard
        className={getValidClassNames(cl.card, className)}
        cardBgColor={bgColor}
        width={width}
      >
        <Typography className={cl.firstRow} variant="body1">
          {firsRow}
        </Typography>
        {secondRow && (
          <Typography className={cl.secondRow} variant="body2">
            {secondRow}
          </Typography>
        )}
      </ContentCard>
    </div>
  );
};

export { Divider };
