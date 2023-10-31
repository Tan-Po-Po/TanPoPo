"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "inherit",
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: 40,
      fontWeight: 600,
    },
    h3: {
      fontSize: 37,
      fontWeight: 600,
    },
    h5: {
      fontSize: 26,
      fontWeight: 700,
    },
    body1: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: "21px",
    },
    body2: {
      fontSize: 17,
      fontWeight: 500,
      lineHeight: "21px",
    }
  },
});

export { theme };
