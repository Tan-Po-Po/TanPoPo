"use client";
import cl from "./shopProductCardMini.module.scss";
import { useState } from "react";
import { ShopProductCardMini } from "./shopProductCardMini";

import { IShopProduct } from "@/models/ShopProduct";
import { Carousel, Loading } from "@/components";
import { useWindowSize } from "@uidotdev/usehooks";

const MiniProductCards = ({
  shopProducts,
}: {
  shopProducts: IShopProduct[] | undefined;
}) => {
  const [products] = useState<IShopProduct[] | undefined>(shopProducts);
  const {width} = useWindowSize()
  const isMobile = Boolean(width && width < 678)


  if (!products) {
    return <Loading />;
  }

  if (isMobile) {
    return (
      <Carousel
        className={cl.carousel}
        slidesToShow={1}
        rows={2}
        useNumbers={true}
        slideAmount={products.length / 2}
        infinite={false}
        dots={false}
        variableWidth={false}
        centerPadding="40px"
        focusOnSelect={false}
      >
        {products.map((item, i) => (
          <ShopProductCardMini key={i} {...item} />
        ))}
      </Carousel>
    );
  }

  return (
    <>
      {products.map((item, i) => (
        <ShopProductCardMini key={i} {...item} />
      ))}
    </>
  );
};

export { MiniProductCards };
