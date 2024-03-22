"use client";

import cl from "./largeProductCards.module.scss";
import { useState } from "react";
import { ShopProductCardLarge } from "./shopProductCardLarge";
import { IShopProduct } from "@/models/ShopProduct";
import { Carousel, Loading } from "@/components";
import { useWindowSize } from "@uidotdev/usehooks";

const LargeProductCards = ({
  shopProducts,
}: {
  shopProducts: IShopProduct[] | undefined;
}) => {
  const availableProducts = shopProducts?.filter((item) => {
    return item.large.available;
  });
  const [products] = useState<IShopProduct[] | undefined>(availableProducts);

  const { width } = useWindowSize();

  if (!products) {
    return <Loading />;
  }

  return (
    <Carousel
      className={cl.largeCarousel}
      slidesToShow={1}
      centerPadding="0px"
      dots={false}
      useNumbers
      slideAmount={products.length}
      infinite={false}
      renderCarousel={width! < 1420}
      numbersClass={cl.numbers}
      variableWidth={true}
    >
      {products.map((item, i) => (
        <ShopProductCardLarge key={i} {...item} />
      ))}
    </Carousel>
  );
};

export { LargeProductCards };
