import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme/theme";
const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
