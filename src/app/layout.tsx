import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme/theme";
import { Comfortaa } from "next/font/google";
import "@/scss/globals.scss";
import { Providers } from "@/redux/providers";
import { WindowMatchMediaProvider } from "@/components/";

const font = Comfortaa({ subsets: ["latin", "cyrillic"], display: "swap" });

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
    <html lang="en">
      <link rel="icon" href="/logo/favicon.png" />
      <body className={font.className} style={{ paddingTop: "70px" }}>
        <Providers>
          <ThemeProvider theme={theme}>
            <WindowMatchMediaProvider>{children}</WindowMatchMediaProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
