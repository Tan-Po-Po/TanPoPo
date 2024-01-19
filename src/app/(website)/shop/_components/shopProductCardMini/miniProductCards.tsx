"use client";
import cl from "./shopProductCardMini.module.scss";
import { useState } from "react";
import { ShopProductCardMini } from "./shopProductCardMini";

import { IShopProduct } from "@/models/ShopProduct";
import { useAppSelector } from "@/redux/hooks";
import { selectWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";
import { Carousel, Loading } from "@/components";

const MiniProductCards = ({
  shopProducts,
}: {
  shopProducts: IShopProduct[];
}) => {
  const [shopItems, setShopItems] = useState<IShopProduct[]>(shopProducts);

  const { isMobile } = useAppSelector(selectWindowMatchMedia);

  if (!shopItems) {
    return <Loading />;
  }

  if (isMobile) {
    return (
      <Carousel
        className={cl.carousel}
        slidesToShow={1}
        rows={2}
        useNumbers={true}
        slideAmount={shopItems.length / 2}
        infinite={false}
        dots={false}
        variableWidth={false}
        centerPadding="0px"
      >
        {shopItems.map((item, i) => (
          <ShopProductCardMini key={i} {...item} />
        ))}
      </Carousel>
    );
  }

  return (
    <>
      {shopItems.map((item, i) => (
        <ShopProductCardMini key={i} {...item} />
      ))}
    </>
  );
};

export { MiniProductCards };
