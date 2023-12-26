import cl from "./selectItem.module.scss";
import { getValidClassNames } from "@/helpers";

interface Props {
  item:
    | string
    | {
        label: string | React.ReactElement;
        value: string;
        labelWhenSelected?: string;
        link?: string;
      };
  isSelected: boolean;
  setOption: ({
    value,
    label,
    link,
  }: {
    value: string;
    label: string;
    link?: string;
  }) => void;
}

const SelectItem: React.FC<Props> = ({ item, setOption, isSelected }) => {
  const handleClick = () => {
    typeof item === "string"
      ? setOption({ value: item, label: item })
      : setOption({
          value: item.value,
          label: item.labelWhenSelected || (item.label as string),
          link: item.link,
        });
  };
  return (
    <div
      className={getValidClassNames(cl.selectItem, isSelected && cl.selected)}
      onClick={handleClick}
    >
      <div className={cl.value}>
        {typeof item === "string" ? item : item.label}
      </div>
    </div>
  );
};

export { SelectItem };
