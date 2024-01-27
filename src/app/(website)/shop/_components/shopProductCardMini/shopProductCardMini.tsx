"use client";

import { IShopProduct } from "@/models/ShopProduct";
import cl from "./shopProductCardMini.module.scss";
import { Button, ContentCard, Typography } from "@/components";
import Image from "next/image";
import { IMAGE_BASE_URL } from "@/config/config";

type Props = Exclude<IShopProduct, "large">;

export const ShopProductCardMini: React.FC<Props> = ({ _id, name, small }) => {
  const { label, caption, image } = small;

  const handleClick = () => {
    const item = document.getElementById(_id!);
    const products = document.getElementById("products");

    products?.scrollIntoView({ behavior: "smooth" });
    item?.click();
  };

  return (
    <div onClick={handleClick}>
      <ContentCard
        width="271px"
        label={label?.text}
        labelBgColor={label?.bgColor}
        className={cl.shopItemMini}
      >
        <Typography variant="body1">{caption}</Typography>
        <Image
          alt=""
          src={`${IMAGE_BASE_URL}/${image?.filename}`}
          width={500}
          height={300}
          style={{ width: "auto", maxHeight: "65px" }}
        />
        <Button
          variant="outlined"
          type="button"
          style={{ scrollBehavior: "smooth" }}
          wrapperClass={cl.btnWrapper}
        >
          <Typography variant="body1">{name}</Typography>
        </Button>
      </ContentCard>
    </div>
  );
};
