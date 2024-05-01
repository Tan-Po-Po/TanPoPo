import { PageClientContent } from "./pageClientContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Онлайн-тест з японської мови - визначити рівень JLPT",
  description:
    "Безкоштовний комплексний онлайн-тест, який допоможе визначити ваш поточний рівень володіння мовою. Визначити рівень володіння японської мови JLPT.",
};

export default function Test() {
  return <PageClientContent />;
}
