import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error | Tanpopo",
};
const getData = async () => {
  const data = "Some data";
  throw new Error();
  return data;
};

export default async function Home() {
  const result = await getData();
  return <main>Error page: {result}</main>;
}
