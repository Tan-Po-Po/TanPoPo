import { PageTemplate } from "../pageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Індивідуальний розклад навчання японської мови | TanPoPo",
  description:
    "Сформуйте Ваш бажаний індивідуальний розклад навчання японської у нас на сайті після чого ми сконтактуємось з Вами, щоб фінально узгодити всі тонкощі навчання!",
};

export default function Page() {
  return <PageTemplate educationFormat="Індивідуально" />;
}
