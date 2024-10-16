import { Footer, Header } from "@/components";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { DialogCart } from "./shop/_components/components";
import { StyledEngineProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@/components/localizationProvider/localizationProvider";
import { NotificationProvider } from "@/components/notificationProvider/notificationProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocalizationProvider>
      <StyledEngineProvider injectFirst>
        <Header />
        <NotificationProvider>{children}</NotificationProvider>
        <Footer />

        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={true}
          theme="dark"
        />
        <DialogCart />
      </StyledEngineProvider>
    </LocalizationProvider>
  );
}
