"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "inherit",
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: 45,
      fontWeight: 700,
    },
    h2: {
      fontSize: 40,
      fontWeight: 700,
    },
    h3: {
      fontSize: 36,
      fontWeight: 700,
    },
    h4: {
      fontSize: 30,
      fontWeight: 700,
    },
    h5: {
      fontSize: 26,
      fontWeight: 700,
    },
    h6: {
      fontSize: 24,
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
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 400,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle2: "span",
          subtitle1: "span",
        },
      },
    },
  },
});

export { theme };
