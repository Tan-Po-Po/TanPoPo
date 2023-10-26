import { Button as MuiButton, type ButtonProps } from "@mui/material";
import cl from "./button.module.scss";
import Image from "next/image";

type Properties = ButtonProps & {
  icon?: string;
};

const Button: React.FC<Properties> = ({ icon, children, ...props }) => {
  const iconUrl = `/icons/${icon}.svg`;
  const smallPadding = icon ? undefined : cl.smallPadding;

  return (
    <div className={cl.buttonWrapper}>
      {icon && (
        <Image
          src={iconUrl}
          alt=""
          width={14}
          height={14}
          className={cl.image}
        />
      )}
      <MuiButton className={[cl.button, smallPadding].join(" ")} {...props}>
        {children}
      </MuiButton>
    </div>
  );
};

export { Button };
