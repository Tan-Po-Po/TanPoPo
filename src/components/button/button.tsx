import { Button as MuiButton, type ButtonProps } from "@mui/material";
import cl from "./button.module.scss";
import Image from "next/image";
import { getValidClassNames } from "@/helpers";

type Properties = ButtonProps & {
  icon?: string;
};

const Button: React.FC<Properties> = ({
  icon,
  children,
  className,
  ...props
}) => {
  const iconUrl = `/icons/${icon}.svg`;
  const smallPadding = !icon && cl.smallPadding;

  return (
    <div className={getValidClassNames(cl.buttonWrapper, className)}>
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
        className={getValidClassNames(cl.button, smallPadding)}
        {...props}
      >
        {children}
      </MuiButton>
    </div>
  );
};

export { Button };
