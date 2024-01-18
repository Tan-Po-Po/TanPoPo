import { Footer, Header } from "@/components";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { CartButton, DialogCart } from "./shop/_components/components";
import { LocalizationProvider } from "@/components/localizationProvider/localizationProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LocalizationProvider>
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
      </LocalizationProvider>
    </>
  );
}
