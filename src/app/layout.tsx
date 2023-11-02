import type { Metadata } from "next";
import { Footer, Header } from "@/components";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme/theme";
import { Comfortaa } from "next/font/google";
import "@/scss/globals.scss";

const font = Comfortaa({ subsets: ["latin", "cyrillic", "vietnamese"] });

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
