import { PageClient } from "./pageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Найбільша освітня платформа японської мови | TanPoPo",
  description:
    "Долучайтесь до найбільшої української освітньої платформи з вивчення японської мови та спробуйте наш Безкоштовний мовно-культурний мінікурс з японської мови!",
};

export default function Join() {
  return <PageClient />;
}
