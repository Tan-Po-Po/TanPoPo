"use client";
import { LocalizationProvider as LocalizationProviderMui } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ukUA } from "@mui/x-date-pickers/locales";
import React from "react";

export const LocalizationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <LocalizationProviderMui
      dateAdapter={AdapterDayjs}
      localeText={
        ukUA.components.MuiLocalizationProvider.defaultProps.localeText
      }
    >
      {children}
    </LocalizationProviderMui>
  );
};
