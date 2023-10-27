import { TextField, type TextFieldProps } from "@mui/material";
import sl from "./input.module.scss";
import { getValidClassNames } from "@/helpers";

type Properties = TextFieldProps & {
  width?: "small" | "default";
  placeholder?: string;
  className?: string;
  variant?: 'outlined' | 'standard' | 'filled';
};

const Input: React.FC<Properties> = ({
  placeholder,
  className,
  width = "default",
  variant = "outlined",
  ...props
}) => {
  return (
    <TextField
      placeholder={placeholder}
      {...props}
      variant={variant}
      className={getValidClassNames(
        sl.input,
        width === "small" && sl.small,
        className
      )}
    />
  );
};

export { Input };
