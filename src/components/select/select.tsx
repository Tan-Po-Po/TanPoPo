"use client";

import React, { useState } from "react";
import cl from "./select.module.scss";
import Image from "next/image";
import { SelectItem } from "./selectItem/selectItem";
import { Checkbox } from "../checkbox/checkbox";
import { getValidClassNames } from "@/helpers";
import ArrowIcon from "public/icons/arrowDown.svg";

interface SelectProps {
  placeHolder?: string;
  menuItems:
    | string[]
    | {
        label: string | React.ReactElement;
        value: string;
      }[];
  checkbox?: boolean;
  checkboxLabel?: string;
  setGift?: () => void;
  gift?: boolean;
  className?: string;
  handleSelect?: (value: string) => void;
  isDisabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  placeHolder,
  menuItems,
  checkbox,
  checkboxLabel,
  setGift,
  gift,
  className,
  handleSelect,
  isDisabled,
}) => {
  const [value, setValue] = useState<string>(placeHolder as string);
  const [isOpen, setIsOpen] = useState(false);

  const iconUrl = "/icons/arrowDown.svg";

  const handleSelectClick = () => {
    !isDisabled && setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (value: string) => {
    handleSelect && handleSelect(value);
    setValue(value);
    setIsOpen(false);
  };

  return (
    <div className={getValidClassNames(cl.mainContainer, className)}>
      <div
        className={getValidClassNames(
          cl.selectContainer,
          isDisabled && cl.disabled
        )}
      >
        <div
          className={getValidClassNames(
            cl.selectWrapper,
            isOpen && cl.selectOpen
          )}
        >
          <div className={cl.select} onClick={handleSelectClick}>
            <div className={cl.value}>{value}</div>
          </div>
          {/* <Image
            src={iconUrl}
            width={15}
            height={15}
            alt=""
            className={cl.arrow}
          /> */}
          <ArrowIcon width={15} height={15} alt="" className={cl.arrow} />
        </div>
        {isOpen && (
          <div className={cl.dropdown}>
            {menuItems.map((item, index) => (
              <SelectItem
                key={index}
                item={item}
                setValue={handleOptionClick}
                isSelected={
                  typeof item === "string"
                    ? value === item
                    : value === item.value
                }
              />
            ))}
            {checkbox && (
              <Checkbox
                label={checkboxLabel}
                onClick={setGift}
                isChecked={gift}
                className={cl.checkbox}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { Select };
