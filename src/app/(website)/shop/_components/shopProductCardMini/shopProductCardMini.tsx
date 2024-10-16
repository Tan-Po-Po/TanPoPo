"use client";

import { IShopProduct } from "@/models/ShopProduct";
import cl from "./shopProductCardMini.module.scss";
import { Button, ContentCard, Typography } from "@/components";
import Image from "next/image";
import { IMAGE_BASE_URL } from "@/config/config";
import { toast } from "react-toastify";
import { getValidClassNames } from "@/helpers";
import { useWindowSize } from "@uidotdev/usehooks";

type Props = Exclude<IShopProduct, "large">;

export const ShopProductCardMini: React.FC<Props> = ({
  _id,
  name,
  small,
  large,
}) => {
  const { label, caption, image } = small;
  const { inDevelopment } = large;
  const { width } = useWindowSize();

  const handleClick = () => {
    if (inDevelopment) {
      return toast("Товар ще в розробці", {toastId: "productInDevelopment"});
    }
    const item = document.getElementById(_id!);
    const largeProductCards = document.getElementById("products");
    if (width! < 1420) {
      item?.click();
      largeProductCards?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      item?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div onClick={handleClick}>
      <ContentCard
        width="271px"
        label={label?.text}
        labelBgColor={label?.bgColor}
        className={getValidClassNames(
          cl.shopItemMini,
          inDevelopment && cl.inDevelopment
        )}
        labelClassName={cl.label}
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
