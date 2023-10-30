import { getValidClassNames } from "@/helpers";
import cl from "./contentCard.module.scss";

interface Props {
  children: React.ReactNode;
  index?: string;
  label?: string;
  labelPosition?: "top" | "bottom";
  indexBgColor?: string;
  cardBgColor?: string;
  labelBgColor?: string;
  width?: string;
}

const ContentCard: React.FC<Props> = ({
  index,
  label,
  labelPosition,
  children,
  indexBgColor,
  cardBgColor,
  width,
}) => {
  return (
    <div
      className={cl.contentCard}
      style={{ maxWidth: width, backgroundColor: cardBgColor }}
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
