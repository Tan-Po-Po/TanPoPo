import { Button as MuiButton, type ButtonProps } from "@mui/material";
import styles from "./styles.module.scss";

type Properties = ButtonProps & {
  icon?: React.ReactNode;
};

const Button: React.FC<Properties> = ({ icon, children, ...props }) => {
  return (
    <MuiButton className={styles.button} {...props}>
      {children}
    </MuiButton>
  );
};

export { Button };
