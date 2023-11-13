import cl from "./selectItem.module.scss";
import { getValidClassNames } from "@/helpers";

interface Props {
  item:
    | string
    | {
        label: string | React.ReactElement;
        value: string;
      };
  isSelected: boolean;
  setValue: (value: string) => void;
}

const SelectItem: React.FC<Props> = ({ item, setValue, isSelected }) => {
  const handleClick = () => {
    typeof item === "string" ? setValue(item) : setValue(item.value);
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
