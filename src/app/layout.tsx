import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme/theme";
import "@/scss/globals.scss";
import localFont from "next/font/local";
import { Providers } from "@/redux/providers";
import { SERVER_URL } from "@/config/config";
import { GoogleTagManager } from "@next/third-parties/google";

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
  metadataBase: SERVER_URL
    ? new URL(SERVER_URL)
    : new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${heisei.variable} ${comfortaa.variable}`}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta name="author" content="Школа Tanpopo" />

      <link
        href="/assets/apple-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="144x144"
        href="/assets/android-icon-144x144.png"
      />
      <GoogleTagManager gtmId="GTM-K6JP2FHH" />
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-xxxx"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        ></noscript>

        <Providers>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
