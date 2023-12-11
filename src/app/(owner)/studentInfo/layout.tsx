import type { Metadata } from "next";
import "@/scss/globals.scss";
import "react-toastify/dist/ReactToastify.css";

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
      <body >
        {children}
      </body>
    </html>
  );
}
