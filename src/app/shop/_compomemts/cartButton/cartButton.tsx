"use client";
import { ContentCard, Typography } from "@/components";
import cl from "./cartButton.module.scss";
import Image from "next/image";
import { getIconArtSrc } from "@/helpers";
import { useEffect, useRef } from "react";

export const CartButton = () => {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;
      console.log("scrollHeight", scrollHeight);
      console.log("scrollTop", scrollTop);
      console.log("clientHeight", clientHeight);
      buttonRef.current!.style.top = `${18 + scrollTop}px`;
    });
  }, []);
  return (
    <div className={cl.background} ref={buttonRef}>
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
          5
        </ContentCard>
      </ContentCard>
    </div>
  );
};
