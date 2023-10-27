import { useState } from "react";
import cl from "./selectItem.module.scss";
import { getValidClassNames } from "@/helpers";

interface Props {
  item: string;
  isSelected: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SelectItem: React.FC<Props> = ({ item, setValue, isSelected }) => {
  const handleClick = () => {
    setValue(item);
  };
  return (
    <div
      className={getValidClassNames(cl.selectItem, isSelected && cl.selected)}
      onClick={handleClick}
    >
      {item}
    </div>
  );
};

export default SelectItem;
