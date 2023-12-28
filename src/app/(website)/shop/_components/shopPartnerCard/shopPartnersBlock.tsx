import { ShopPartnerCard } from "./shopPartnerCard";
import { getShopPartners } from "@/helpers";

const ShopPartnersBlock = async () => {
  const shopPartners = await getShopPartners();

  return (
    <>
      {shopPartners.map((partner) => (
        <ShopPartnerCard key={partner._id} partner={partner} />
      ))}
    </>
  );
};

export { ShopPartnersBlock };
