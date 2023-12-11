"use client";

import { IShopProduct } from "@/models/ShopProduct";
import cl from "./shopProductCardMini.module.scss";
import { Button, ContentCard, Typography } from "@/components";
import Image from "next/image";
import { useState } from "react";

type Props = Exclude<IShopProduct, "large">;

export const ShopProductCardMini: React.FC<Props> = ({ _id, name, small }) => {
  const { label, caption, image } = small;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    const item = document.getElementById(_id!);
    item?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ContentCard
        width="271px"
        label={label?.text}
        labelBgColor={label?.bgColor}
        className={cl.shopItemMini}
      >
        <Typography variant="body1">{caption}</Typography>
        <Image
          alt=""
          src={image}
          width={500}
          height={300}
          style={{ width: "auto", maxHeight: "65px" }}
        />
        <Button
          variant="outlined"
          type="button"
          isParentHovered={isHovered}
          style={{ scrollBehavior: "smooth" }}
        >
          <Typography variant="body1">{name}</Typography>
        </Button>
      </ContentCard>
    </div>
  );
};
