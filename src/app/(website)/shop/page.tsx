import cl from "./page.module.scss";
import { getIconArtSrc } from "@/helpers";
import {
  ContentCard,
  Divider,
  Typography,
  DialogGallery,
  Loading,
} from "@/components";
import Image from "next/image";
import { textContent } from "./textContent";
import { MiniProductCards, LargeProductCards } from "./_components/components";
import React from "react";
import dynamic from "next/dynamic";
import dbConnect from "@/config/dbConnect";
import { IShopProduct } from "@/models/ShopProduct";
import ShopProduct from "@/models/ShopProduct";

export const revalidate = 0;

const getShopItems = async () => {
  try {
    await dbConnect();
    const shopProductsDb = (await ShopProduct.find()
      .populate("large.gallery.image")
      .populate("small.image")
      .lean()) as IShopProduct[];

    return shopProductsDb.map((item) =>
      JSON.parse(JSON.stringify(item))
    ) as IShopProduct[];
  } catch (err: any) {
    console.log(err);
  }
};

const DynamicShopPartnersBlock = dynamic(
  () => import("./_components/shopPartnerCard/shopPartnersBlock"),
  { loading: () => <Loading /> }
);

export default async function Shop() {
  const shopProducts = await getShopItems();

  return (
    <main className={cl.storeMain} id="storeMain">
      <Typography variant="h3">КРАМНИЦЯ</Typography>
      <section className={cl.introBlock}>
        <MiniProductCards shopProducts={shopProducts} />

        <Image
          alt=""
          src={"/images/storeIntro.png"}
          width={688}
          height={688}
          className={cl.image}
          id="image"
          style={{ minWidth: "356px", width: "100%", height: "auto" }}
        />
      </section>

      <section className={cl.dealBlock}>
        <ContentCard className={cl.titleCard} width="300px">
          <Typography variant="h5">
            {textContent.dealBlock.titleCard}
          </Typography>
        </ContentCard>
        <div className={cl.cardsWrapper}>
          {textContent.dealBlock.cards.map((card, i) => (
            <ContentCard key={i} width="465px" className={cl.card}>
              <Typography variant="h5">{card.title}</Typography>
              <Image
                alt=""
                src={card.image}
                width={500}
                height={300}
                style={{ width: "auto", maxHeight: "95px" }}
              />
              <Typography variant="body2">{card.caption}</Typography>
            </ContentCard>
          ))}
        </div>
      </section>

      <Divider
        className={cl.divider}
        firstRow="МАГАЗИНИ ПАРТНЕРІВ"
        bgColor="linear-gradient(180deg, #FFE39A 0%, #C1A4FF 100%)"
      />
      <Typography
        variant="body1"
        align="center"
        style={{ maxWidth: "765px", marginBottom: "42px" }}
      >
        Розпочинайте навчання в школі TanPoPo та знаходьте промокоди на знижки у
        своєму Особистому Кабінеті на весь асортимент товарів наших партнерів
        ексклюзивно для учнів нашої школи!
      </Typography>

      <section className={cl.shopPartnersBlock}>
        <DynamicShopPartnersBlock />
      </section>

      <Divider
        firstRow="ПРОДУКЦІЯ TANPOPO"
        bgColor="linear-gradient(180deg, #F0FF93 0%, #FFC683 100%)"
      />

      <section className={cl.shopProductsBlock}>
        <LargeProductCards shopProducts={shopProducts} />
      </section>

      <section className={cl.message}>
        <ContentCard width="898px">
          <Typography variant="h5">Слова від авторів</Typography>
          <Image
            alt=""
            src={getIconArtSrc("flowers")}
            width={300}
            height={500}
            style={{ width: "69px", height: "auto" }}
          />
          <Typography variant="body2">
            Побувавши по всій Японії та побачишвши японську культуру, ми дуже
            хочемо поділитись з вами незабутніми враженнями, краєвидами та
            внутрішнім спокоєм, яким наділена Японія. Тому в кожний наш продукт
            ми вкладаємо частинку пам’яті та вражень, які ми отримували гуляючи
            по вуличкам Токіо, дивлячись на гору Фуджі, спілкуючись з
            довгожителями планети Земля на острові Окінава та побувавши ще в
            багатьох незвичних місцях Японії. Саме тому ми віримо, що
            розроблюючи наші японсько-українські продукти, ми вкладаємо в них
            саму любов Японії 💛
          </Typography>
        </ContentCard>
      </section>

      <DialogGallery />
    </main>
  );
}
