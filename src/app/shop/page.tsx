import dbConnect from "@/config/dbConnect";
import cl from "./page.module.scss";
import { getIconArtSrc } from "@/helpers";
import ShopItem, { IShopItem } from "@/models/ShopItem";
import { Button, ContentCard, Divider, Typography } from "@/components";
import mongoose from "mongoose";
import Image from "next/image";
import { textContent } from "./textContent";
import { ShopItemMiniCard } from "./_compomemts/shopItemMiniCard/shopItemMiniCard";
import ShopPartner, { IShopPartner } from "@/models/ShopPartner";
import { socialLinks } from "@/config/config";
import ShopPartnerCard from "./_compomemts/shopPartnerCard/shopPartnerCard";

const items = [
  {
    name: "Мнемонічні\nкартки",
    small: {
      image: getIconArtSrc("flashcards"),
      caption: "Ефективний та веселий спосіб вивчення канджі!",
      label: {
        text: "BEST seller!",
        bgColor: "linear-gradient(180deg, #FFF383 0%, #FFDE89 100%)",
      },
    },
  },

  {
    name: "Подарунковий\nсертифікат",
    small: {
      image: getIconArtSrc("promocode"),
      caption: "Подаруй вивчення японської мови своїм близьким! ",
      label: {
        text: "BEST seller!",
        bgColor: "linear-gradient(180deg, #FFF383 0%, #FFDE89 100%)",
      },
    },
  },
  {
    name: 'Щотижневик\n"Отоко"',
    small: {
      image: getIconArtSrc("noteBookAndPen"),
      caption: "Вивчай японську щоразу, як робиш власні записи!",
    },
  },
  {
    name: 'Ручка-олівець\n"Онніхон"',
    small: {
      image: getIconArtSrc("pen"),
      caption: "Ручка-олівець, створена для запи-сів японських канджі",
    },
  },
  {
    name: "Фірмовий\nтермос",
    small: {
      image: getIconArtSrc("thermos"),
      caption: "Термос, який довго тримає тумпера-туру та любов💛",
    },
  },
  {
    name: "Календар\nвдосконалення",
    small: {
      image: getIconArtSrc("calendar2"),
      caption: "Щоденні канджі, слова, фрази та багато іншого!",
      label: {
        text: "в розробці",
        bgColor: "#E8CAFF",
      },
    },
  },
  {
    name: "Сумка-\nнаплічник",
    small: {
      image: getIconArtSrc("backpack2"),
      caption: "Зручний наплічник в крутому японсько-му виконанні",
      label: {
        text: "незабаром",
        bgColor: "#C4FFB6",
      },
    },
  },
  {
    name: "Прописник\nперфекціоніста",
    small: {
      image: getIconArtSrc("calligraphy"),
      caption: "Відмінний калігра-фічний тренажер канджі та слів!",
      label: {
        text: "в розробці",
        bgColor: "#E8CAFF",
      },
    },
  },
];

const shopPartners: IShopPartner[] = [
  {
    bgColor:
      "linear-gradient(180deg, rgba(231, 254, 216, 0.00) 0%, #F5FFEE 100%)",
    labelTop: {
      text: "Смаколики,\nРамени & Напої",
      bgColor: "linear-gradient(180deg, #EEFFD8 0%, #FBFFE4 100%)",
    },
    labelBottom: {
      text: "6% знижки для наших учнів!",
      bgColor: "linear-gradient(180deg, #FFF 0%, #F4FFEE 100%)",
    },
    logo: "/temp/shopPartner/logo.jpg",
    name: "asia_goods_store",
    href: socialLinks.instagram,
    caption: [
      "❤️ Найсмачніша азійська сторінка",
      "💌 Більш 22 000 вдячних клієнтів",
      "🌴 Весь асортимент Азії",
      "✈️ Відправляємо по всій Україні",
    ],
    items: [
      {
        image: "/temp/shopPartner/item1.png",
        href: socialLinks.instagram,
      },
      {
        image: "/temp/shopPartner/item2.png",
        href: socialLinks.instagram,
      },
      {
        image: "/temp/shopPartner/item3.png",
        href: socialLinks.instagram,
      },
      {
        image: "/temp/shopPartner/item4.png",
        href: socialLinks.instagram,
      },
    ],
    hashtags: [
      "#снеки",
      "#десерти",
      "#мочі",
      "#соджу",
      "#карі",
      "#лапша",
      "#та багато іншого!",
    ],
  },
  {
    bgColor:
      "linear-gradient(180deg, rgba(231, 254, 216, 0.00) 0%, #F5FFEE 100%)",
    labelTop: {
      text: "Смаколики,\nРамени & Напої",
      bgColor: "linear-gradient(180deg, #EEFFD8 0%, #FBFFE4 100%)",
    },
    labelBottom: {
      text: "6% знижки для наших учнів!",
      bgColor: "linear-gradient(180deg, #FFF 0%, #F4FFEE 100%)",
    },
    logo: "/temp/shopPartner/logo.jpg",
    name: "asia_goods_store",
    href: socialLinks.instagram,
    caption: [
      "❤️ Найсмачніша азійська сторінка",
      "💌 Більш 22 000 вдячних клієнтів",
      "🌴 Весь асортимент Азії",
      "✈️ Відправляємо по всій Україні",
    ],
    items: [
      {
        image: "/temp/shopPartner/item1.png",
        href: socialLinks.instagram,
      },
      {
        image: "/temp/shopPartner/item2.png",
        href: socialLinks.instagram,
      },
      {
        image: "/temp/shopPartner/item3.png",
        href: socialLinks.instagram,
      },
      {
        image: "/temp/shopPartner/item4.png",
        href: socialLinks.instagram,
      },
    ],
    hashtags: [
      "#снеки",
      "#десерти",
      "#мочі",
      "#соджу",
      "#карі",
      "#лапша",
      "#та багато іншого!",
    ],
  },
  {
    bgColor:
      "linear-gradient(180deg, rgba(231, 254, 216, 0.00) 0%, #F5FFEE 100%)",
    labelTop: {
      text: "Смаколики,\nРамени & Напої",
      bgColor: "linear-gradient(180deg, #EEFFD8 0%, #FBFFE4 100%)",
    },
    labelBottom: {
      text: "6% знижки для наших учнів!",
      bgColor: "linear-gradient(180deg, #FFF 0%, #F4FFEE 100%)",
    },
    logo: "/temp/shopPartner/logo.jpg",
    name: "asia_goods_store",
    href: socialLinks.instagram,
    caption: [
      "❤️ Найсмачніша азійська сторінка",
      "💌 Більш 22 000 вдячних клієнтів",
      "🌴 Весь асортимент Азії",
      "✈️ Відправляємо по всій Україні",
    ],
    items: [
      {
        image: "/temp/shopPartner/item1.png",
        href: socialLinks.instagram,
      },
      {
        image: "/temp/shopPartner/item2.png",
        href: socialLinks.instagram,
      },
      {
        image: "/temp/shopPartner/item3.png",
        href: socialLinks.instagram,
      },
      {
        image: "/temp/shopPartner/item4.png",
        href: socialLinks.instagram,
      },
    ],
    hashtags: [
      "#снеки",
      "#десерти",
      "#мочі",
      "#соджу",
      "#карі",
      "#лапша",
      "#та багато іншого!",
    ],
  },
];

const addShopItemsToDb = async () => {
  await dbConnect();

  items.forEach(async (item) => {
    const dbItem = new ShopItem(item);
    console.log("dbItem", dbItem);

    await dbItem.save();
  });
};

const addShopPartnersToDb = async () => {
  await dbConnect();

  shopPartners.forEach(async (item) => {
    const dbItem = new ShopPartner(item);
    console.log("dbItem", dbItem);

    await dbItem.save();
  });
};

const getShopItems = async (): Promise<IShopItem[]> => {
  await dbConnect();
  const items = (await ShopItem.find()) as mongoose.Document<IShopItem>[];
  return items.map((item) => JSON.parse(JSON.stringify(item)));
};

const getShopPartners = async (): Promise<IShopPartner[]> => {
  await dbConnect();
  const partners = (await ShopPartner.find().lean()) as IShopPartner[];

  return partners.map((item) => JSON.parse(JSON.stringify(item)));
};

export default async function Shop() {
  // await addShopItemsToDb();

  // await addShopPartnersToDb();

  const shopItems = await getShopItems();

  const shopPartners = await getShopPartners();
  // console.log("partners", shopPartners);
  console.clear();

  return (
    <main className={cl.storeMain}>
      <Typography variant="h3">КРАМНИЦЯ</Typography>
      <section className={cl.introBlock}>
        {shopItems.map((item, i) => (
          <ShopItemMiniCard key={i} {...item} />
        ))}
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
        firsRow="Магазини Партнерів"
        bgColor="linear-gradient(180deg, #FFE39A 0%, #C1A4FF 100%)"
      />

      <section className={cl.shopPartnersBlock}>
        {shopPartners.map((partner) => {
          return <ShopPartnerCard key={partner._id} partner={partner} />;
        })}
      </section>
    </main>
  );
}
