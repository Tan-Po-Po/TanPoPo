import {
  Checkbox as MuiCheckbox,
  type CheckboxProps,
  FormControlLabel,
} from "@mui/material";
import cl from "./checkbox.module.scss";
import { getValidClassNames } from "@/helpers";

import Image from "next/image";

type Properties = CheckboxProps & {
  label?: string | React.ReactNode;
  isChecked?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  className?: string;
};

const icon = <span className={cl.checkboxIcon} />;
const iconChecked = (
  <span className={getValidClassNames(cl.checkboxIcon, cl.checkboxIconChecked)}>
    <Image
      src="/icons/checkboxIcon.svg"
      alt="Checkbox icon"
      width={10}
      height={10}
    />
  </span>
);

const Checkbox: React.FC<Properties> = ({
  label,
  isChecked,
  isDisabled,
  isRequired,
  className,
  ...props
}) => {
  return label ? (
    <FormControlLabel
      control={
        <MuiCheckbox
          {...props}
          checked={isChecked}
          required={isRequired}
          disabled={isDisabled}
          icon={icon}
          checkedIcon={iconChecked}
        />
      }
      className={getValidClassNames(cl.label, className)}
      label={label}
    />
  ) : (
    <MuiCheckbox
      className={getValidClassNames(cl.label, className)}
      {...props}
      checked={isChecked}
      required={isRequired}
      disabled={isDisabled}
      icon={icon}
      checkedIcon={iconChecked}
    />
  );
};

Checkbox.displayName = "Checkbox";
export { Checkbox };
