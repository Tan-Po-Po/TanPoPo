"use client";
import { ContentCard, Dialog, Typography } from "@/components";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import cl from "../page.module.scss";

const RedirectDialog = () => {
  const searchParams = useSearchParams();
  const renderedTime = Date.now();
  const [open, setOpen] = useState(
    searchParams.get("redirected") ? true : false
  );
  return (
    <Dialog
      open={open}
      onClose={() => {
        const currentTime = Date.now();
        if (currentTime - renderedTime > 5000) {
          setOpen(false);
        }
      }}
      contentClassName={cl.dialog}
    >
      <>
        <Typography variant="h6" style={{ fontSize: "23px" }}>
          Ваш заповнений розклад занять вже у нас!🎉
        </Typography>
        <ContentCard
          width="590px"
          cardBgColor="linear-gradient(91deg, rgba(255, 156, 156, 0.75) 0%, rgba(255, 239, 156, 0.75) 28.13%, rgba(156, 219, 255, 0.75) 71.35%, rgba(255, 156, 233, 0.75) 100%)"
        >
          <Typography variant="h6" style={{ fontSize: "24px" }}>
            Ми бачимо і цінуємо ваше бажання навчатись разом з нами!
          </Typography>
          <Typography variant="body1" style={{ fontSize: "18px" }}>
            І якнайшвидше почнемо формувати розклад занять для вашого курсу і
            обов’язково сконтактуємось разом з Вами, щоб фінально узгодити всі
            деталі!
          </Typography>
        </ContentCard>
        <Typography variant="body1" style={{ fontSize: "20px" }}>
          Дякуємо, що обрали TanPoPo💛
        </Typography>
      </>
    </Dialog>
  );
};

export { RedirectDialog };
