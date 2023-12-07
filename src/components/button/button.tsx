import { Button as MuiButton, type ButtonProps } from "@mui/material";
import cl from "./button.module.scss";
import Image from "next/image";
import { getValidClassNames } from "@/helpers";

type Properties = ButtonProps & {
  icon?: string;
  isParentHovered?: boolean;
  wrapperClass?: string;
};

const Button: React.FC<Properties> = ({
  icon,
  children,
  className,
  isParentHovered,
  wrapperClass,
  disabled,
  style,
  ...props
}) => {
  const iconUrl = `/icons/${icon}.svg`;

  return (
    <div
      style={style}
      className={getValidClassNames(
        cl.buttonWrapper,
        props.variant === "outlined" && cl.outlined,
        isParentHovered && cl.isParentHovered,
        disabled && cl.disabled,
        wrapperClass
      )}
    >
      <MuiButton
        className={getValidClassNames(cl.button, className)}
        {...props}
      >
        <div className={cl.children}>
          {children}
          {icon && (
            <Image
              src={iconUrl}
              alt=""
              width={14}
              height={14}
              className={cl.image}
            />
          )}
        </div>
      </MuiButton>
    </div>
  );
};

export { Button };
