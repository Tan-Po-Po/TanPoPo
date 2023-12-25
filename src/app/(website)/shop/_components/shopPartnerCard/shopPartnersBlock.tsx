import { ShopPartnerCard } from "./shopPartnerCard";
import { getShopPartners } from "@/helpers";

const ShopPartnersBlock = async () => {
  const shopItems = await getShopPartners();

  return (
    <>
      {shopItems.map((partner) => (
        <ShopPartnerCard key={partner._id} partner={partner} />
      ))}
    </>
  );
};

export { ShopPartnersBlock };
