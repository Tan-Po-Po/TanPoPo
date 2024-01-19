"use client";

import inputCl from "@/components/input/input.module.scss";

import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";
import React, { forwardRef } from "react";

type Props = typeof DatePicker;

export const InputDate: React.FC<Props> = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    return <DatePicker className={inputCl.input} ref={ref} {...props} />;
  }
);

InputDate.displayName = "InputDate";
