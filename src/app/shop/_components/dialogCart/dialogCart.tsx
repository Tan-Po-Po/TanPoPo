"use client";

import { Button, Dialog, Typography } from "@/components";
import cl from "./dialogCart.module.scss";
import Image from "next/image";
import { getIconArtSrc } from "@/helpers";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  closeCartDialog,
  openCartDialog,
  selectCartDialog,
} from "@/redux/slices/cartDialog/cartDialogSlice";
import { Cart } from "../cart/cart";

export const DialogCart = () => {
  const isOpen = useAppSelector(selectCartDialog).isOpen;

  const dispatch = useAppDispatch();

  const handleDialogClose = () => {
    console.log("closing");

    dispatch(closeCartDialog());
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleDialogClose}
      className={cl.dialog}
      contentClassName={cl.content}
      // scroll="paper"
      title={
        (
          <>
            <Typography variant="h3">Кошик</Typography>
            <Image
              alt=""
              src={getIconArtSrc("shopCart")}
              width={500}
              height={300}
              style={{ width: "45px", height: "auto" }}
            />
          </>
        ) as any
      }
    >
      <Cart />

      <Button
        variant="outlined"
        href="/shop/checkout"
        wrapperClass={cl.buttonWrapper}
        className={cl.button}
      >
        <Typography variant="h6">Оформити Замовлення</Typography>
      </Button>
    </Dialog>
  );
};
