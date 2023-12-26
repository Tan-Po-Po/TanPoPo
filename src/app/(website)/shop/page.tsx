import cl from "./page.module.scss";
import { getIconArtSrc } from "@/helpers";
import {
  ContentCard,
  Divider,
  Typography,
  DialogGallery,
  Loading,
} from "@/components";
import {
  MiniShopProductSkeleton,
  ShopPartnerSkeleton,
} from "@/components/skeletons";
import Image from "next/image";
import { textContent } from "./textContent";
import {
  DialogCart,
  CartButton,
  MiniProductCards,
  LargeProductCards,
  ShopPartnersBlock,
} from "./_components/components";
import React, { Suspense } from "react";

export default function Shop() {
  return (
    <main className={cl.storeMain} id="storeMain">
      <CartButton />
      <Typography variant="h3">КРАМНИЦЯ</Typography>
      <section className={cl.introBlock}>
        <Suspense
          fallback={new Array(8).fill(null).map((_, index) => (
            <MiniShopProductSkeleton key={index} />
          ))}
        >
          <MiniProductCards />
        </Suspense>

        <Image
          alt=""
          src={"/images/storeIntro.png"}
          width={688}
          height={688}
          className={cl.image}
          id="image"
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
        firstRow="МАГАЗИНИ ПАРТНЕРІВ"
        bgColor="linear-gradient(180deg, #FFE39A 0%, #C1A4FF 100%)"
      />

      <section className={cl.shopPartnersBlock}>
        <Suspense
          fallback={new Array(3).fill(null).map((_, index) => (
            <ShopPartnerSkeleton key={index} />
          ))}
        >
          <ShopPartnersBlock />
        </Suspense>
      </section>

      <Divider
        firstRow="ПРОДУКЦІЯ TANPOPO"
        bgColor="linear-gradient(180deg, #F0FF93 0%, #FFC683 100%)"
      />

      <Suspense fallback={<Loading />}>
        <section className={cl.shopProductsBlock}>
          <LargeProductCards />
        </section>
      </Suspense>

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
      <DialogCart />
    </main>
  );
}
