import { PageClient } from "./pageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Уроки японської мови на Освітній платформі TanPoPo",
  description:
    "Долучайтесь до найбільшої української освітньої платформи з вивчення японської мови та спробуйте наш Безкоштовний мовно-культурний мінікурс з японської мови!",
};

export default function Join() {
  return <PageClient />;
}
