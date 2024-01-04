"use client";
import React from "react";
import {
  Dialog as MuiDialog,
  DialogContent,
  DialogTitle,
  DialogProps,
} from "@mui/material";
import { getValidClassNames } from "@/helpers";
import XIcon from "./plus.svg";

import cl from "./dialog.module.scss";

type Properties = {
  children?: React.ReactNode;
  title?: React.ReactNode;
  content?: React.ReactNode;
  open?: boolean;
  titleClassName?: string;
  contentClassName?: string;
  closeIcon?: boolean;
  onClose: () => void;
} & DialogProps;

const Dialog: React.FC<Properties> = ({
  children,
  title,
  open,
  onClose,
  className,
  titleClassName,
  contentClassName,
  closeIcon = true,
  ...props
}) => {
  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      {...props}
      className={getValidClassNames(cl.dialog, className)}
    >
      {closeIcon && <XIcon className={cl.close} onClick={onClose} />}
      {title && (
        <DialogTitle className={getValidClassNames(cl.title, titleClassName)}>
          {title}
        </DialogTitle>
      )}
      <DialogContent
        className={getValidClassNames(cl.content, contentClassName)}
      >
        {children}
      </DialogContent>
    </MuiDialog>
  );
};

export { Dialog };
