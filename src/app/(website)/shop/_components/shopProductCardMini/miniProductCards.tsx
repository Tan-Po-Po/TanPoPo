"use client";
import cl from "./shopProductCardMini.module.scss";
import { useEffect, useState } from "react";
import { ShopProductCardMini } from "./shopProductCardMini";
import { getShopItems } from "@/helpers";
import { IShopProduct } from "@/models/ShopProduct";
import { useAppSelector } from "@/redux/hooks";
import { selectWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";
import { Carousel, CarouselItem, Loading } from "@/components";

const MiniProductCards = ({
  shopProducts,
}: {
  shopProducts: IShopProduct[];
}) => {
  // const shopItems = await getShopItems();
  const [shopItems, setShopItems] = useState<IShopProduct[]>(shopProducts);

  const { isMobile } = useAppSelector(selectWindowMatchMedia);

  // useEffect(() => {
  //   const getItems = async () => {
  //     const items = await getShopItems();
  //     setShopItems(items);
  //   };
  //   getItems();
  // }, []);

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
