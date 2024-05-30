import { StartEducationSensei } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Курси японської мови з сенсеєм | TanPoPo",
  description:
    "Онлайн-курси з сенсеєм в школі TanPoPo - це не просто репетитори японської мови, а круті сенсеї разом з якими Ви зможете поринути у світ японської!",
};

export default function Page() {
  return (
    <main style={{ padding: "0 10px" }}>
      <StartEducationSensei />
    </main>
  );
}
