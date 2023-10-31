import { Button as MuiButton, type ButtonProps } from "@mui/material";
import cl from "./button.module.scss";
import Image from "next/image";
import { getValidClassNames } from "@/helpers";
import { MutableRefObject } from "react";

type Properties = ButtonProps & {
  icon?: string;
  isParentHovered?: boolean;
};

const Button: React.FC<Properties> = ({
  icon,
  children,
  className,
  isParentHovered,
  ...props
}) => {
  const iconUrl = `/icons/${icon}.svg`;

  return (
    <div
      className={getValidClassNames(
        cl.buttonWrapper,
        isParentHovered && cl.isParentHovered
      )}
    >
      {icon && (
        <Image
          src={iconUrl}
          alt=""
          width={14}
          height={14}
          className={cl.image}
        />
      )}
      <MuiButton
        className={getValidClassNames(cl.button, className)}
        {...props}
      >
        {children}
      </MuiButton>
    </div>
  );
};

export { Button };
