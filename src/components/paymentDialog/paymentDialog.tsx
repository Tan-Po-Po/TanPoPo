"use client";
import { Dialog, Typography } from "@/components";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import cl from "./paymentDialog.module.scss";
import Link from "next/link";
import Image from "next/image";
import { getIconArtSrc } from "@/helpers";

const PaymentDialog = ({ useParams = true }: { useParams?: boolean }) => {
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
        <Typography variant="subtitle1" align="center">
          У разі повторних складнощів з оплатою: просимо зв’язатись з нашою {""}
          <Link href="/contacts#feedback">
            <u>службою Турботи</u>
          </Link>
          .
        </Typography>
      </>
    </Dialog>
  );
};

export { PaymentDialog };
