"use client";

import { Pagination } from "@/components";

export default function Home() {
  return (
    <main>
      <Pagination pages={5} section={"youtube-japan"} />
    </main>
  );
}
