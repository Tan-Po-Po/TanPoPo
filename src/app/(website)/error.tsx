"use client";

import { Typography, Button } from "@/components";
import cl from "./page.module.scss";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={cl.main} style={{ gap: "0" }}>
      <Image
        src="/images/homePage.png"
        alt="Home page"
        width={940}
        height={653}
        style={{ maxWidth: "720px", width: "100%", height: "auto" }}
      />
      <Typography variant="h6">Схоже щось пішло не так</Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "42px",
          rowGap: "28px",
          marginTop: "20px",
        }}
      >
        <Button variant="outlined" onClick={() => reset()}>
          Спробувати ще раз
        </Button>
        <Link href="/">Повернутися на головну</Link>
      </div>
    </main>
  );
}
