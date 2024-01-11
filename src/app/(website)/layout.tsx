import { Footer, Header } from "@/components";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo/logo.svg" />
      <body style={{ paddingTop: "70px" }}>
        <Header />
        {children}
        <Footer />

        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={true}
          theme="dark"
        />
      </body>
    </html>
  );
}
