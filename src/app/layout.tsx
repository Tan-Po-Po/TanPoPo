import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";

const font = Comfortaa({ subsets: ["latin"] });

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
      <body className={font.className}>{children}</body>
    </html>
  );
}
