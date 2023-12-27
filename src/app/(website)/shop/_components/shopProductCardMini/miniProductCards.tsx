import { ShopProductCardMini } from "./shopProductCardMini";
import { getShopItems } from "@/helpers";

const MiniProductCards = async () => {
  const shopItems = await getShopItems();

  return (
    <>
      {shopItems.map((item, i) => (
        <ShopProductCardMini key={i} {...item} />
      ))}
    </>
  );
};

export { MiniProductCards };
