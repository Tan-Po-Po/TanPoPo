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
        labelWhenSelected?: string;
        link?: string;
      }[];
  checkbox?: boolean;
  checkboxLabel?: string;
  setGift?: () => void;
  gift?: boolean;
  className?: string;
  handleSelect?: (value: string, link?: string) => void;
  isDisabled?: boolean;
  setValue?: UseFormSetValue<any>;
  name?: string;
  onClick?: () => void;
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
  onClick,
}) => {
  const [option, setOption] = useState<{ value: string; label: string }>(
    (placeHolder && {
      value: "",
      label: placeHolder,
    }) ||
      (typeof menuItems[0] === "string"
        ? { value: menuItems[0], label: menuItems[0] }
        : {
            value: menuItems[0].value,
            label:
              menuItems[0].labelWhenSelected || (menuItems[0].label as string),
          })
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectClick = () => {
    !isDisabled && setIsOpen((prev) => !prev);
  };

  const handleOptionClick = ({
    value,
    label,
    link,
  }: {
    value: string;
    label: string;
    link?: string;
  }) => {
    handleSelect && (link ? handleSelect(value, link) : handleSelect(value));
    name && setValue && setValue(name, value);
    setOption({ value, label });
    setIsOpen(false);
  };

  return (
    <div
      className={getValidClassNames(cl.mainContainer, className)}
      onClick={onClick}
    >
      <div
        className={getValidClassNames(
          cl.selectContainer,
          isDisabled && cl.disabled,
          isOpen && cl.containerOpen,
          option.value && cl.selected
        )}
      >
        <div
          className={getValidClassNames(
            cl.selectWrapper,
            isOpen && cl.selectOpen
          )}
        >
          <div className={cl.select} onClick={handleSelectClick}>
            <div className={cl.value}>{option.label}</div>
          </div>
          <ArrowIcon width={15} height={15} alt="" className={cl.arrow} />
        </div>
        {isOpen && (
          <div className={cl.dropdown}>
            {menuItems.map((item, index) => (
              <SelectItem
                key={index}
                item={item}
                setOption={handleOptionClick}
                isSelected={
                  typeof item === "string"
                    ? option.value === item
                    : option.value === item.value
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
