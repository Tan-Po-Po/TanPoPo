import dbConnect from "@/config/dbConnect";
import { ShopPartnerCard } from "./shopPartnerCard";
import ShopPartner, { IShopPartner } from "@/models/ShopPartner";

const getShopPartners = async () => {
  try {
    await dbConnect();

    const shopPartners = (await ShopPartner.find()
      .populate("items.image")
      .populate("logo")
      .lean()) as IShopPartner[];

    const partners: IShopPartner[] = shopPartners.map((partner) =>
      JSON.parse(JSON.stringify(partner))
    );

    return partners;
  } catch (err) {
    console.log(err);
  }
};

const ShopPartnersBlock = async () => {
  const shopPartners = await getShopPartners();

  return (
    <>
      {shopPartners &&
        shopPartners.map((partner) => (
          <ShopPartnerCard key={partner._id} partner={partner} />
        ))}
    </>
  );
};

export default ShopPartnersBlock;
