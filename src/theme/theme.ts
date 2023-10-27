"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "inherit",
    h1: {
      fontSize: 40,
      fontWeight: 600,
    },
  },
});

export { theme };
