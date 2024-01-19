import { Footer, Header } from "@/components";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { DialogCart } from "./shop/_components/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        theme="dark"
      />
      <DialogCart />
    </>
  );
}
