"use client";
import { ContentCard, Typography } from "@/components";
import cl from "./cartButton.module.scss";
import Image from "next/image";
import { getIconArtSrc } from "@/helpers";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectShopCart } from "@/redux/slices/shopCart/shopCartSlice";
import { Cart } from "../cart/cart";
import { usePathname } from "next/navigation";
import { Dialog } from "@mui/material";
import { openCartDialog } from "@/redux/slices/cartDialog/cartDialogSlice";
import { selectWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";

export const CartButton = () => {
  const [amount, setAmount] = useState(0);

  const cartItemsAmount = useAppSelector(selectShopCart).items.reduce(
    (total, item) => total + item.amount,
    0
  );

  const buttonRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();

  const dispatch = useAppDispatch();

  const { isMobile } = useAppSelector(selectWindowMatchMedia);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const { scrollTop } = document.documentElement;
      if (buttonRef.current) {
        buttonRef.current.style.top = `${18 + scrollTop}px`;
      }
    });
  }, [pathname]);

  useEffect(() => {
    setAmount(cartItemsAmount);
  }, [cartItemsAmount]);

  const handleDialogOpen = () => {
    dispatch(openCartDialog());
  };

  return (
    <div className={cl.background} ref={buttonRef} onClick={handleDialogOpen}>
      <ContentCard width="210px" className={cl.cartButton}>
        <Image
          alt=""
          width={500}
          height={300}
          style={{ width: "45px", height: "auto" }}
          src={getIconArtSrc("shopCart")}
          className={cl.cartIcon}
        />

        <Typography
          variant="body1"
          style={{ fontWeight: "700" }}
          className={cl.text}
        >
          Кошик
        </Typography>
        <ContentCard width="30px" className={cl.amount}>
          {amount}
        </ContentCard>
      </ContentCard>
    </div>
  );
};
