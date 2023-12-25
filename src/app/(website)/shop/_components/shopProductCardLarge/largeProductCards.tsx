import { ShopProductCardLarge } from "./shopProductCardLarge";
import { getShopItems } from "@/helpers";

const LargeProductCards = async () => {
  const shopItems = await getShopItems();

  return (
    <>
      {shopItems.map((item, i) =>
        item.large.inDevelopment ? (
          ""
        ) : (
          <ShopProductCardLarge key={i} {...item} />
        )
      )}
    </>
  );
};

export { LargeProductCards };
