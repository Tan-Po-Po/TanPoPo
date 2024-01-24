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
  const [products] = useState<IShopProduct[] | undefined>(shopProducts);

  const { width } = useWindowSize();

  if (!products) {
    return <Loading />;
  }

  return (
    <Carousel
      className={cl.carousel}
      slidesToShow={1}
      centerPadding="0px"
      dots={false}
      useNumbers
      slideAmount={products.length}
      infinite={false}
      renderCarousel={width! < 1420}
      focusOnSelect={false}
      numbersClass={cl.numbers}
    >
      {products.map((item, i) =>
        !item.large.available ? "" : <ShopProductCardLarge key={i} {...item} />
      )}
    </Carousel>
  );
};

export { LargeProductCards };
