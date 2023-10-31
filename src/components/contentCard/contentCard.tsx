import { getValidClassNames } from "@/helpers";
import cl from "./contentCard.module.scss";

interface Props {
  children: React.ReactNode;
  index?: string;
  label?: string | React.ReactNode;
  labelPosition?: "top" | "bottom";
  indexBgColor?: string;
  cardBgColor?: string;
  labelBgColor?: string;
  width?: string;
  height?: string;
  className?: string;
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
}) => {
  return (
    <div
      className={getValidClassNames(cl.contentCard, className)}
      style={{
        maxWidth: width,
        maxHeight: height,
        background: cardBgColor,
      }}
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
