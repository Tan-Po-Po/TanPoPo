import { TextField, type TextFieldProps } from "@mui/material";
import cl from "./input.module.scss";
import { getValidClassNames } from "@/helpers";
import { forwardRef } from "react";

type Properties = TextFieldProps & {
  width?: "small" | "default";
  placeholder?: string;
  className?: string;
  variant?: "outlined" | "standard" | "filled";
};

const Input: React.FC<Properties> = forwardRef(
  (
    {
      placeholder,
      className,
      width = "default",
      variant = "outlined",
      ...props
    },
    ref
  ) => {
    return (
      <TextField
        ref={ref}
        placeholder={placeholder}
        {...props}
        variant={variant}
        className={getValidClassNames(
          cl.input,
          width === "small" && cl.small,
          className
        )}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
