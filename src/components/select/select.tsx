"use client";

import React, { useState } from "react";
import cl from "./select.module.scss";
import { SelectItem } from "./selectItem/selectItem";
import { Checkbox } from "../checkbox/checkbox";
import { getValidClassNames } from "@/helpers";
import ArrowIcon from "public/icons/arrowDown.svg";
import { UseFormSetValue } from "react-hook-form";

type SelectProps = {
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
  setValue?: UseFormSetValue<any>;
  name?: string;
};

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
  setValue,
  name,
}) => {
  const [value, setSelectValue] = useState<string>(placeHolder as string);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectClick = () => {
    !isDisabled && setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (value: string) => {
    handleSelect && handleSelect(value);
    name && setValue && setValue(name, value);
    setSelectValue(value);
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
