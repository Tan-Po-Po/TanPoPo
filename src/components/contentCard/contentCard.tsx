"use client";

import { getValidClassNames } from "@/helpers";
import cl from "./contentCard.module.scss";
import { CSSProperties } from "@mui/material/styles/createMixins";
import { RefObject } from "react";
interface Props {
  children: React.ReactNode;
  index?: string | number;
  label?: string | React.ReactNode;
  labelPosition?: "top" | "bottom";
  labelBgColor?: string;
  labelClassName?: string;
  indexBgColor?: string;
  cardBgColor?: string;
  width?: string;
  height?: string;
  style?: CSSProperties;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
  id?: string;
  ref?: RefObject<any>;
}

const ContentCard: React.FC<Props> = ({
  index,
  label,
  labelPosition = "top",
  labelBgColor,
  children,
  indexBgColor,
  cardBgColor,
  width,
  height,
  className,
  labelClassName,
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
  id,
  ref,
}) => {
  return (
    <div
      id={id}
      className={getValidClassNames(cl.contentCard, className)}
      style={{
        ...style,
        maxWidth: width,
        maxHeight: height,
        background: cardBgColor,
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {index && (
        <div className={cl.index} style={{ backgroundColor: indexBgColor }}>
          {index}
        </div>
      )}
      {label && (
        <div
          className={getValidClassNames(
            cl.label,
            labelPosition && cl[labelPosition],
            labelClassName
          )}
          style={{
            background: labelBgColor,
          }}
        >
          {label}
        </div>
      )}
      {children}
    </div>
  );
};

export { ContentCard };
