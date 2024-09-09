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
import { MiniProductCards, LargeProductCards } from "./_components/components";
import React, { Suspense, cache } from "react";
import dynamic from "next/dynamic";
import dbConnect from "@/config/dbConnect";
import { IShopProduct } from "@/models/ShopProduct";
import ShopProduct from "@/models/ShopProduct";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Японські навчальні товари - японські картки & ієрогліфи",
  description:
    "Авторські японські навчальні продукти. Мнемонічні картки для швидкісного вивчення канджі/ієрогліфів. Подарункові сертифікати з японської мови та інше!",
};
export const revalidate = 900;

const getShopItems = cache(async () => {
  try {
    await dbConnect();
    const shopProductsDb = (await ShopProduct.find()
      .sort({
        order: -1,
      })
      .populate("large.gallery.image")
      .populate("small.image")
      .lean()) as IShopProduct[];

    return shopProductsDb.map((item) =>
      JSON.parse(JSON.stringify(item))
    ) as IShopProduct[];
  } catch (err: any) {
    console.log(err);
    throw err;
  }
});

const DynamicShopPartnersBlock = dynamic(
  () => import("./_components/shopPartnerCard/shopPartnersBlock"),
  { loading: () => <Loading /> }
);

export default async function Shop() {
  const shopProducts = await getShopItems();

  if (!shopProducts?.length) {
    return;
  }

  return (
    <main className={cl.storeMain} id="storeMain">
      <Typography variant="h1" style={{ fontSize: "36px", lineHeight: "1.2" }}>
        КРАМНИЦЯ
      </Typography>
      <section className={cl.introBlock}>
        <Suspense>
          <MiniProductCards shopProducts={shopProducts} />
        </Suspense>

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
          <Typography
            variant="h2"
            style={{ fontSize: "26px", lineHeight: "1.33" }}
          >
            {"Для учнів школи\nTanPoPo💛"}
          </Typography>
        </ContentCard>
        <div className={cl.cardsWrapper}>
          <ContentCard width="465px" className={cl.card}>
            <Typography
              variant="h5"
              style={{ fontSize: "26px", lineHeight: "1.33" }}
            >
              Знижка <b>20%</b> на ВСІ товари <br />в нашій Крамниці!
            </Typography>
            <Image
              alt=""
              src={getIconArtSrc("presentBox3")}
              width={500}
              height={300}
              style={{ width: "auto", maxHeight: "95px" }}
            />
            <Typography variant="body2">
              Поверх будь-якої акції або наявної знижки на продукти TanPoPo наші
              учні отримують <u> додаткові 20%</u> знижки на всі наявні товари!
              Обирайте бажаний курс, реєструйтеся та оплачуйте свої перші
              заняття, після чого в Особистому Кабінеті Ви знайдете промо-код на
              знижку та зможете скористатись ним під час оформлення замовлення!
            </Typography>
          </ContentCard>

          <ContentCard width="465px" className={cl.card}>
            <Typography
              variant="h2"
              style={{ fontSize: "26px", lineHeight: "1.33" }}
            >
              {"Екслюзивні знижки на ВСІ\nтовари наших партнерів!"}
            </Typography>
            <Image
              alt=""
              src={getIconArtSrc("shopCart")}
              width={500}
              height={300}
              style={{ width: "auto", maxHeight: "95px" }}
            />
            <Typography variant="body2">
              Отримуйте додаткові <u> знижки на ВЕСЬ асортимент товарів</u>{" "}
              наших партнерів! Ви можете стежити за цікавим для вас магазинчиком
              в соц. меражах, щоб не пропустити нових надходжень або взяти
              участь в крутих розіграшах! Промокоди на знижки знаходьте в
              Особистому Кабінеті після активації обраного курсу!
            </Typography>
          </ContentCard>
        </div>
      </section>

      <DynamicShopPartnersBlock />

      <Divider
        className={cl.divider}
        wrapperClassName={cl.dividerWrapperProducts}
        firstRow="ПРОДУКЦІЯ TANPOPO"
        bgColor="linear-gradient(180deg, #F0FF93 0%, #FFC683 100%)"
        id="products"
        style={{ scrollMarginTop: "100px" }}
      />

      <section
        className={cl.shopProductsBlock}
        id="largeProductCards"
        style={{ scrollMarginTop: "100px" }}
      >
        <Suspense>
          <LargeProductCards shopProducts={shopProducts} />
        </Suspense>
      </section>

      <section className={cl.message}>
        <ContentCard width="898px" className={cl.messageCard}>
          <Typography variant="h5">Слова від авторів</Typography>
          <Image
            alt=""
            src={getIconArtSrc("flowers")}
            width={300}
            height={500}
            style={{ width: "69px", height: "auto" }}
          />
          <Typography variant="body2" style={{ maxWidth: "796px" }}>
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
