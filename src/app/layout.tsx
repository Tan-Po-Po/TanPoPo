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
  description: "Школа японської мови",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${heisei.variable} ${comfortaa.variable}`}>
      <meta name="mobile-web-app-capable" content="yes" />
      <link rel="icon" href="/icon.png" sizes="any" />
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <link
        rel="apple-touch-icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />  
      <body>
        <Providers>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
