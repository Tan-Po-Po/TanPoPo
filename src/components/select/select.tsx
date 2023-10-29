"use client";

import React, { useState } from "react";
import cl from "./select.module.scss";
import Image from "next/image";
import SelectItem from "./selectItem/selectItem";
import { getValidClassNames } from "@/helpers";

interface SelectProps {
  placeHolder?: string;
  menuItems: string[];
}

const Select: React.FC<SelectProps> = ({ placeHolder, menuItems }) => {
  const [value, setValue] = useState<string>(placeHolder || menuItems[0]);
  const [isOpen, setIsOpen] = useState(false);

  const iconUrl = "/icons/arrowDown.svg";

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={cl.mainContainer}>
      <div className={cl.selectContainer}>
        <div
          className={getValidClassNames(
            cl.selectWrapper,
            isOpen && cl.selectOpen
          )}
        >
          <div className={cl.select} onClick={handleSelectClick}>
            <div className={cl.value}>{value}</div>
          </div>
          <Image
            src={iconUrl}
            width={15}
            height={15}
            alt=""
            className={cl.arrow}
          />
        </div>
        {isOpen && (
          <div className={cl.dropdown}>
            {menuItems.map((item) => (
              <SelectItem
                key={item}
                item={item}
                setValue={setValue}
                isSelected={value === item}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
