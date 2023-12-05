import dbConnect from "@/config/dbConnect";
import cl from "./page.module.scss";
import { getIconArtSrc } from "@/helpers";
import ShopItem, { IShopProduct } from "@/models/ShopProduct";
import { ContentCard, Divider, Typography } from "@/components";
import mongoose from "mongoose";
import Image from "next/image";
import { textContent } from "./textContent";
import ShopPartner, { IShopPartner } from "@/models/ShopPartner";
import { socialLinks } from "@/config/config";
import ShopPartnerCard from "./_compomemts/shopPartnerCard/shopPartnerCard";
import ShopProductCardLarge from "./_compomemts/shopProductCardLarge/shopProductCardLarge";
import { ShopProductCardMini } from "./_compomemts/shopProductCardMini/shopProductCardMini";
import { DialogGallery } from "@/components/dialogGallery/dialogGallery";
import { CartButton } from "./_compomemts/cartButton/cartButton";

const items: IShopProduct[] = [
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
    large: {
      available: true,
      gallery: [
        {
          type: "image",
          image: "/shop/flashcards/image1.png",
        },
        {
          type: "image",
          image: "/shop/flashcards/image2.png",
        },
        {
          type: "video",
          image: "/shop/flashcards/thumbnail.png",
          video: "https://www.youtube.com/watch?v=2Vcy8huku_Q",
        },
      ],

      caption: [
        "Відтепер - опанування ієрогліфіки - як ніколи просте! Ми зробили вивчення канджі як ніколи легким в запам’ятовуванні! Використовуючи мнемонічну техніку, нам вдолось створити унікальні японсько-українські мнемонічні картки, які значно допомагають поліпшити та спростити процес запам’ято-вування канджі.",
        "Завдяки використанню мнемонік можна значно поліпшити та спростити процес запам’ятовування інформації.",
        "Дана мнемонічна методика також використовується на кожному занятті в групі або на індивідуальному уроці!",
      ],
      hashtags: [
        "Мнемоніка\n& канджі🏮",
        "Якісний\nпапір💎",
        "Унікальний дизайн\nвсіх 100 карток🎨",
        "Made by\nTanPoPo💛",
      ],
      likes: 0,
      variants: [
        {
          price: 815,
          value: "n5",
          label: "Рівень 1 (JLPT N5)",
          sale: {
            price: 700,
            until: "30.11.2023",
          },
        },
        {
          price: 815,
          value: "n4",
          label: "Рівень 1 (JLPT N4)",
          sale: {
            price: 700,
            until: "30.11.2023",
          },
        },
        {
          price: 815,
          value: "n3",
          label: "Рівень 1 (JLPT N3)",
          sale: {
            price: 700,
            until: "30.11.2023",
          },
        },
      ],
    },
  },

  {
    name: 'Щотижневик\n"Отоко"',
    small: {
      image: getIconArtSrc("noteBookAndPen"),
      caption: "Вивчай японську щоразу, як робиш власні записи!",
    },
    large: {
      available: true,
      gallery: [
        {
          type: "image",
          value: "red",
          image: "/shop/diary/image.png",
        },
        {
          type: "image",
          value: "blue",
          image: "/shop/diary/imageBlue.png",
        },
        {
          type: "image",
          value: "yellow",
          image: "/shop/diary/imageYellow.png",
        },

        {
          type: "video",
          image: "/shop/diary/thumbnail.png",
          video: "https://www.youtube.com/watch?v=2Vcy8huku_Q",
        },
      ],

      caption: [
        "Це більше, ніж просто блокнот. Це засіб для самовираження, рефлексії та збереження унікальних моментів вашого життя. Однією з головних ідей японського щоденника є зосередження на моменті та відчуття внутрішнього спокою через ведення записів.",
        "Чому варто обрати японський щоденник?",
        "Моментальна рефлексія: Щоденник допоможе вам зупинитися, подивитися назад на день і спрямувати свої думки та емоції у потрібне русло.",
        "Творча свобода: Це ваш особистий простір для творчості. Малюйте, пишіть, діліться спогадами та враженнями!",
      ],
      hashtags: [
        "Мнемоніка\n& канджі🏮",
        "Якісний\nпапір💎",
        "Унікальний дизайн\nвсіх 100 карток🎨",
        "Made by\nTanPoPo💛",
      ],
      likes: 0,
      variants: [
        {
          price: 500,
          value: "yellow 300p",
          label: "Біло-жовтий(300ст)",
        },
        {
          price: 600,
          value: "red 500p",
          label: "Біло-червоний(500ст)",
          sale: {
            price: 450,
            until: "30.11.2023",
          },
        },
        {
          price: 400,
          value: "blue 200p",
          label: "Біло-синій(200ст)",
        },
      ],
    },
  },
  {
    name: "Фірмовий\nтермос",
    small: {
      image: getIconArtSrc("thermos"),
      caption: "Термос, який довго тримає тумпера-туру та любов💛",
    },
    large: {
      available: true,
      gallery: [
        {
          type: "image",
          image: "/shop/thermos/image1.png",
        },
        {
          type: "image",
          image: "/shop/thermos/image2.png",
        },
      ],

      caption: [
        "Передові технології утримання тепла: Японські термоси відомі своєю здатністю зберігати температуру напою протягом довгого часу. Це означає, що ви можете насолоджуватися гарячими або холодними напоями, коли забажаєте.",
        "Зручність в користуванні: Багато японських термосів оснащені зручними ручками та кнопками для відкривання.",
        "Елегантний дизайн: Японські термоси часто відзначаються елегантним та мінімалістичним дизайном. Наш термос - це чудовий супутник у ваших подорожах!",
      ],
      hashtags: [
        "Мнемоніка\n& канджі🏮",
        "Якісний\nпапір💎",
        "Унікальний дизайн\nвсіх 100 карток🎨",
        "Made by\nTanPoPo💛",
      ],
      likes: 0,
      variants: [
        {
          price: 715,
          value: "white 550ml",
          label: "Білий з лого(550мл)",
          sale: {
            price: 600,
            until: "30.11.2023",
          },
        },
        {
          price: 615,
          value: "white 350ml",
          label: "Білий з лого(350мл)",
          sale: {
            price: 500,
            until: "30.11.2023",
          },
        },

        {
          price: 815,
          value: "yellow 550ml",
          label: "Жовтий з лого(550мл)",
        },
      ],
    },
  },
  // {
  //   name: "Подарунковий\nсертифікат",
  //   small: {
  //     image: getIconArtSrc("promocode"),
  //     caption: "Подаруй вивчення японської мови своїм близьким! ",
  //     label: {
  //       text: "BEST seller!",
  //       bgColor: "linear-gradient(180deg, #FFF383 0%, #FFDE89 100%)",
  //     },
  //   },
  // },
  // {
  //   name: 'Ручка-олівець\n"Онніхон"',
  //   small: {
  //     image: getIconArtSrc("pen"),
  //     caption: "Ручка-олівець, створена для запи-сів японських канджі",
  //   },
  // },

  // {
  //   name: "Календар\nвдосконалення",
  //   small: {
  //     image: getIconArtSrc("calendar2"),
  //     caption: "Щоденні канджі, слова, фрази та багато іншого!",
  //     label: {
  //       text: "в розробці",
  //       bgColor: "#E8CAFF",
  //     },
  //   },
  // },
  // {
  //   name: "Сумка-\nнаплічник",
  //   small: {
  //     image: getIconArtSrc("backpack2"),
  //     caption: "Зручний наплічник в крутому японсько-му виконанні",
  //     label: {
  //       text: "незабаром",
  //       bgColor: "#C4FFB6",
  //     },
  //   },
  // },
  // {
  //   name: "Прописник\nперфекціоніста",
  //   small: {
  //     image: getIconArtSrc("calligraphy"),
  //     caption: "Відмінний калігра-фічний тренажер канджі та слів!",
  //     label: {
  //       text: "в розробці",
  //       bgColor: "#E8CAFF",
  //     },
  //   },
  // },
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

const getShopItems = async (): Promise<IShopProduct[]> => {
  await dbConnect();
  const items = (await ShopItem.find()) as mongoose.Document<IShopProduct>[];
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

  return (
    <main className={cl.storeMain} id="storeMain">
      <CartButton />
      <Typography variant="h3">КРАМНИЦЯ</Typography>
      <section className={cl.introBlock}>
        {shopItems.map((item, i) => (
          <ShopProductCardMini key={i} {...item} />
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
        firsRow="МАГАЗИНИ ПАРТНЕРІВ"
        bgColor="linear-gradient(180deg, #FFE39A 0%, #C1A4FF 100%)"
      />

      <section className={cl.shopPartnersBlock}>
        {shopPartners.map((partner) => {
          return <ShopPartnerCard key={partner._id} partner={partner} />;
        })}
      </section>

      <Divider
        firsRow="ПРОДУКЦІЯ TANPOPO"
        bgColor="linear-gradient(180deg, #F0FF93 0%, #FFC683 100%)"
      />

      <section className={cl.shopProductsBlock}>
        <ShopProductCardLarge {...textContent.shopProductBlock.certificates} />
        {shopItems.map((item) => (
          <ShopProductCardLarge key={item._id} {...item}></ShopProductCardLarge>
        ))}
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
