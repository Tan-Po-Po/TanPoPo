import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error | Tanpopo",
};
export default function Home() {
  throw new Error();
  return <main>Error page</main>;
}
