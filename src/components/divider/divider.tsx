import React from "react";
import { Typography } from "../typography/typography";
import { ContentCard } from "../contentCard/contentCard";

import cl from "./divider.module.scss";
import { getValidClassNames } from "@/helpers";

type Properties = {
  firstRow: string;
  secondRow?: string;
  bgColor?: string;
  id?: string;
  width?: string;
  className?: string;
  wrapperClassName?: string;
  style?: React.CSSProperties;
};

const Divider: React.FC<Properties> = ({
  firstRow,
  secondRow,
  bgColor,
  id,
  width,
  className,
  wrapperClassName,
  style,
}) => {
  return (
    <div
      className={getValidClassNames(cl.wrapper, wrapperClassName)}
      id={id}
      style={style}
    >
      <div className={cl.divider}></div>
      <ContentCard
        className={getValidClassNames(cl.card, className)}
        cardBgColor={bgColor || "#FDE543"}
        width={width}
      >
        <h3
          style={{
            display: "contents",
            fontSize: "inherit",
            lineHeight: "inherit",
            fontWeight: "inherit",
          }}
        >
          <Typography className={cl.firstRow} variant="body1">
            {firstRow}
          </Typography>
          {secondRow && (
            <Typography className={cl.secondRow} variant="body2">
              {secondRow}
            </Typography>
          )}
        </h3>
      </ContentCard>
    </div>
  );
};

export { Divider };
