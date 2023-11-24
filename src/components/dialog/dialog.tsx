import { DialogProps, Dialog as MUIDialog } from "@mui/material";
import cl from "./dialog.module.scss";
import XIcon from "./plus.svg";
import { getValidClassNames } from "@/helpers";

export const Dialog: React.FC<DialogProps> = ({
  children,
  onClose,
  className,
  ...resProps
}) => {
  return (
    <MUIDialog
      onClose={onClose}
      {...resProps}
      className={getValidClassNames(cl.dialog, className)}
    >
      <XIcon className={cl.close} onClick={onClose} />

      {children}
    </MUIDialog>
  );
};
