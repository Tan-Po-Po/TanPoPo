import { Typography as MuiTypography } from "@mui/material";
import { CSSProperties } from "react";

type Properties = {
  children: React.ReactNode;
  variant:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";
  align?: "center" | "inherit" | "justify" | "left" | "right";
  className?: string;
  style?: CSSProperties;
  id?: string;
};

const Typography: React.FC<Properties> = ({
  children,
  variant,
  className,
  id,
  ...restProperties
}) => {
  return (
    <MuiTypography
      variant={variant}
      className={className}
      id={id}
      {...restProperties}
    >
      {children}
    </MuiTypography>
  );
};

export { Typography };
