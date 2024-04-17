import dbConnect from "@/config/dbConnect";
import { ShopPartnerCard } from "./shopPartnerCard";
import ShopPartner, { IShopPartner } from "@/models/ShopPartner";
import { Divider, Typography } from "@/components";
import cl from "./shopPartnersBlock.module.scss";

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

  if (!shopPartners || !shopPartners.length) {
    return null;
  }

  return (
    <>
      <Divider
        className={cl.divider}
        wrapperClassName={cl.dividerWrapperPartners}
        firstRow="МАГАЗИНИ ПАРТНЕРІВ"
        bgColor="linear-gradient(180deg, #FFE39A 0%, #C1A4FF 100%)"
      />
      <Typography
        variant="body1"
        align="center"
        style={{ maxWidth: "765px", margin: "-62px 0 -30px 0" }}
      >
        Розпочинайте навчання в школі TanPoPo та знаходьте промокоди на знижки у
        своєму Особистому Кабінеті на весь асортимент товарів наших партнерів
        ексклюзивно для учнів нашої школи!
      </Typography>

      <section className={cl.shopPartnersBlock}>
        {shopPartners.map((partner) => (
          <ShopPartnerCard key={partner._id} partner={partner} />
        ))}
      </section>
    </>
  );
};

export default ShopPartnersBlock;
