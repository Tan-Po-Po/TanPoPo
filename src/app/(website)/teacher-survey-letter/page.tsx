import { ClientPage } from "./clientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Кар'єра & Робота викладачем японської мови | TanPoPo",
  description:
    "Якщо Ви хочете отримувати задоволення від роботи викладачем японської мови та працювати в крутій команді, залишайте Вашу заявку на нашому сайті TanPoPo!",
};

const Page = () => {
  return <ClientPage />;
};

export default Page;
