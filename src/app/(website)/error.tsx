"use client";

import { Typography, Button, ContentCard } from "@/components";
import cl from "./page.module.scss";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { getIconArtSrc, getValidClassNames } from "@/helpers";

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
    <main className={cl.errorPage}>
      <Image
        src={getIconArtSrc("tower2")}
        alt="Tower icon"
        width={122}
        height={159}
        style={{ maxWidth: "122px", width: "100%", height: "auto" }}
      />
      <Typography variant="h4" align="center" style={{ marginTop: "60px" }}>
        Не вдалось під’єднатись до серверу.
      </Typography>
      <Typography
        variant="body2"
        align="center"
        style={{
          fontWeight: "100",
          fontSize: "18px",
          maxWidth: "500px",
          marginTop: "60px",
        }}
      >
        Вибачте за тимчасові незручності, ми вже працюємо над вирішенням цієї
        проблеми!
      </Typography>
      <ContentCard
        label={<Typography variant="body1">Ви можете спробувати:</Typography>}
        labelBgColor="linear-gradient(#FFFCF3, #FFFAD0)"
        cardBgColor="linear-gradient(#FFFFFF, #FFFBF1)"
        className={cl.errorCard}
        width="470px"
      >
        <Typography variant="body1">1. Перезавантажити сторінку:</Typography>
        <Button
          onClick={() => reset()}
          variant="outlined"
          className={cl.errorBtn}
        >
          <Typography variant="body1" style={{ fontSize: "19px" }}>
            Спробувати ще раз ✅
          </Typography>
        </Button>

        <Typography variant="body1" style={{ marginTop: "35px" }}>
          2. Повернутись на Головну сторінку:
        </Typography>
        <Button variant="outlined" className={cl.errorBtn}>
          <Link href="/">
            <Typography variant="body1" style={{ fontSize: "19px" }}>
              Повернутись на Головну 🌐
            </Typography>
          </Link>
        </Button>
      </ContentCard>
      <Typography
        variant="subtitle2"
        align="center"
        className={cl.feedback}
      >
        У разі повторних/частих помилок, просимо повідомити про це нашій{" "}
        <Link href="/contacts#feedback">
          <u>службі Турботи.</u>
        </Link>
      </Typography>
    </main>
  );
}
