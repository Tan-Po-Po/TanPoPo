import { Typography as MuiTypography } from "@mui/material";

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
    | "subtitle2"
  align?: "center" | "inherit" | "justify" | "left" | "right";
  className?: string;
};

const Typography: React.FC<Properties> = ({
  children,
  variant,
  className,
  ...restProperties
}) => {
  return (
    <MuiTypography variant={variant} className={className} {...restProperties}>
      {children}
    </MuiTypography>
  );
};

export { Typography };
