import { PageTemplate } from "../pageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Розклад навчання японської мови | Міні-групи | TanPoPo",
  description:
    "Сформуйте Ваш бажаний розклад навчання японської мови у нас на сайті після чого ми сконтактуємось з Вами, щоб фінально узгодити всі тонкощі навчання!",
};

export default function Page() {
  return <PageTemplate educationFormat="Міні-група" />;
}
