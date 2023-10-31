import { getValidClassNames } from "@/helpers";
import cl from "./contentCard.module.scss";
import { CSSProperties } from "@mui/material/styles/createMixins";

interface Props {
  children: React.ReactNode;
  index?: string;
  label?: string;
  labelPosition?: "top" | "bottom";
  indexBgColor?: string;
  cardBgColor?: string;
  labelBgColor?: string;
  width?: string;
  style?: CSSProperties;
  className?: string;
}

const ContentCard: React.FC<Props> = ({
  index,
  label,
  labelPosition,
  children,
  indexBgColor,
  cardBgColor,
  width,
  style,
  className,
  labelBgColor,
}) => {
  return (
    <div
      className={getValidClassNames(cl.contentCard, className)}
      style={{ ...style, maxWidth: width, background: cardBgColor }}
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
            labelPosition && cl[labelPosition]
          )}
        >
          {label}
        </div>
      )}
      {children}
    </div>
  );
};

export default ContentCard;
