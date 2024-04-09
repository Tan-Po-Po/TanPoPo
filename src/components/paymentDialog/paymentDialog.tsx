"use client";
import { Dialog, Typography } from "@/components";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import cl from "./paymentDialog.module.scss";
import Link from "next/link";
import Image from "next/image";
import { getIconArtSrc, getValidClassNames } from "@/helpers";
import { socialLinks } from "@/config/config";

type Params = {
  useParams?: boolean;
  variant?: "course" | "gift";
};
const PaymentDialog = ({ useParams = true, variant }: Params) => {
  const searchParams = useSearchParams();
  const renderedTime = Date.now();
  const [open, setOpen] = useState(
    useParams ? (searchParams.get("failedPayment") ? true : false) : true
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
      closeIconClassName={cl.closeIcon}
      contentClassName={cl.dialog}
    >
      <>
        <Typography variant="h6" align="center">
          Схоже, оплату не вдалось здійснити. Спробуйте ще раз.
        </Typography>
        <Image
          src={getIconArtSrc("gears")}
          alt="Зображення невдалого платежу"
          width={149}
          height={118}
          style={{ margin: "40px 0 30px 0" }}
        />
        {Boolean(variant) && (
          <Typography
            variant="body1"
            align="center"
            style={{ fontSize: "21px", fontWeight: "700" }}
          >
            Звертаємо вашу увагу: не зробивши оплати{" "}
            {variant === "course" ? "по обраному" : "подарункового"} курсу, ваша
            заявка не буде повністю сформована!
          </Typography>
        )}
        <Typography
          variant="subtitle1"
          align="center"
          className={getValidClassNames(variant && cl.greyText)}
        >
          У разі повторних складнощів з оплатою: просимо зв’язатись з нашою
          службою Турботи:
          <br />
          <Link
            href={socialLinks.telegram}
            style={{ fontSize: "18px", fontWeight: "800" }}
          >
            <u>Telegram</u>
          </Link>
          /
          <Link
            href={socialLinks.viber}
            style={{ fontSize: "18px", fontWeight: "800" }}
          >
            <u>Viber</u>
          </Link>
          .
        </Typography>
      </>
    </Dialog>
  );
};

export { PaymentDialog };
