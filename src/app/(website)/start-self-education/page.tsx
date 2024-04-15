import { StartSelfEducation } from "@/components";
import { Metadata } from "next";
import cl from "./page.module.scss";

export const metadata: Metadata = {
  title: "Розпочати навчання | Tanpopo",
};

export default function Page() {
  return (
    <main className={cl.main}>
      <StartSelfEducation />
    </main>
  );
}
