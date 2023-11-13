"use client";

import { getValidClassNames } from "@/helpers";
import cl from "./contentCard.module.scss";
import { CSSProperties } from "@mui/material/styles/createMixins";

interface Props {
  children: React.ReactNode;
  index?: string;
  label?: string | React.ReactNode;
  labelPosition?: "top" | "bottom";
  labelBgColor?: string;
  indexBgColor?: string;
  cardBgColor?: string;
  width?: string;
  height?: string;
  style?: CSSProperties;
  className?: string;
  labelClassName?: string;
  onClick?: () => void;
}

const ContentCard: React.FC<Props> = ({
  index,
  label,
  labelPosition,
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
}) => {
  return (
    <div
      className={getValidClassNames(cl.contentCard, className)}
      style={{
        ...style,
        maxWidth: width,
        maxHeight: height,
        background: cardBgColor,
      }}
      onClick={onClick && onClick}
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
