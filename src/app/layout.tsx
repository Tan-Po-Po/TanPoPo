import type { Metadata } from "next";
import { Footer, Header } from "@/components";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme/theme";
import { Comfortaa } from "next/font/google";
import "@/scss/globals.scss";

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
      <link rel="icon" href="/logo/logo.svg" />
      <body className={font.className}>
        <ThemeProvider theme={theme}>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
