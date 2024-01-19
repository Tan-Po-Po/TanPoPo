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
  shopProducts: IShopProduct[];
}) => {
  const [shopItems, setShopItems] = useState<IShopProduct[]>(shopProducts);

  const { width } = useWindowSize();

  if (!shopItems) {
    return <Loading />;
  }

  return (
    <Carousel
      className={cl.carousel}
      slidesToShow={1}
      centerPadding="0px"
      dots={false}
      useNumbers
      slideAmount={shopItems.length}
      infinite={false}
      renderCarousel={width! < 1420}
      focusOnSelect={false}
      // adaptiveHeight={true}
    >
      {shopItems.map((item, i) =>
        item.large.inDevelopment ? (
          ""
        ) : (
          <ShopProductCardLarge key={i} {...item} />
        )
      )}
    </Carousel>
  );
};

export { LargeProductCards };
