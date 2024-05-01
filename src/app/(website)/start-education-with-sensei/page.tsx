import { StartEducationSensei } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Розпочати онлайн-навчання японської мови з сенсеєм",
  description:
    "За допомогою нашого сайту Ви можете обрати власний розклад та записатись на заняття з японської мови абсолютно самостійно прямо зараз!",
};

export default function Page() {
  return (
    <main style={{ padding: "0 10px" }}>
      <StartEducationSensei />
    </main>
  );
}
