import cl from "./descriptionCard.module.scss";

interface Props {
  children: React.ReactNode;
  index?: string;
  label?: string;
  indexBgColor?: string;
  cardBgColor?: string;
  labelBgColor?: string;
  width?: string;
}

const DescriptionCard: React.FC<Props> = ({
  index,
  label,
  children,
  indexBgColor,
  cardBgColor,
  width,
}) => {
  return (
    <div
      className={cl.descriptionCard}
      style={{ maxWidth: width, backgroundColor: cardBgColor }}
    >
      {index && (
        <div className={cl.index} style={{ backgroundColor: indexBgColor }}>
          {index}
        </div>
      )}
      {label && <div className={cl.label}>{label}</div>}
      {children}
    </div>
  );
};

export default DescriptionCard;
