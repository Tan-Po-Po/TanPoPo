import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme/theme";
import "@/scss/globals.scss";
import localFont from "next/font/local";
import { Providers } from "@/redux/providers";

const comfortaa = localFont({
  src: [
    {
      path: "../scss/fonts/Comfortaa-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../scss/fonts/Comfortaa-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../scss/fonts/Comfortaa-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../scss/fonts/Comfortaa-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../scss/fonts/Comfortaa-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-comfortaa",
});

const heisei = localFont({
  src: [
    {
      path: "../scss/fonts/HeiseiMaruGothic-W4.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../scss/fonts/HeiseiMaruGothic-W8.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-heisei",
});

export const metadata: Metadata = {
  title: "TanPoPo",
  description: "Japanese language school",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heisei.variable} ${comfortaa.variable}`}>
      <link rel="icon" href="/logo/favicon.png" />
      <body style={{ paddingTop: "70px" }}>
        <Providers>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
