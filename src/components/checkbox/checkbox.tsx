import {
  Checkbox as MuiCheckbox,
  type CheckboxProps,
  FormControlLabel,
} from "@mui/material";
import sl from "./checkbox.module.scss";
import { getValidClassNames } from "@/helpers";

import Image from "next/image";
import Check from "./check.svg";

type Properties = CheckboxProps & {
  label?: string | React.ReactNode;
  isChecked?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
};

const icon = <span className={sl.checkboxIcon} />;
const iconChecked = (
  <span className={getValidClassNames(sl.checkboxIcon, sl.checkboxIconChecked)}>
    <Image src={Check} alt="Checkbox icon" />
  </span>
);

const Checkbox: React.FC<Properties> = ({
  label,
  isChecked,
  isDisabled,
  isRequired,
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
      className={sl.label}
      label={label}
    />
  ) : (
    <MuiCheckbox
      className={sl.checkbox}
      {...props}
      checked={isChecked}
      required={isRequired}
      disabled={isDisabled}
      icon={icon}
      checkedIcon={iconChecked}
    />
  );
};

export { Checkbox };
