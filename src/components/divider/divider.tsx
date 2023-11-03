import React from "react";
import { Typography, ContentCard } from "@/components";

import cl from "./divider.module.scss";

type Properties = {
  firsRow: string;
  secondRow?: string;
  bgColor: string;
};

const Divider: React.FC<Properties> = ({ firsRow, secondRow, bgColor }) => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.divider}></div>
      <ContentCard className={cl.card} cardBgColor={bgColor}>
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
