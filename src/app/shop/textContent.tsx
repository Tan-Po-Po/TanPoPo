import { getIconArtSrc } from "@/helpers";

export const textContent = {
  dealBlock: {
    titleCard: "Для учнів школи\nTanPoPo💛",
    cards: [
      {
        title: (
          <>
            Знижка <b>10%</b> на ВСІ наші\nавторські продукти!
          </>
        ),
        image: getIconArtSrc("presentBox3"),
        caption: (
          <>
            Поверх будь-якої акції або наявної знижки на продукти TanPoPo наші
            учні отримують <u> додаткові 10%</u> знижки на всі наявні товари!
            Обирайте бажаний курс, реєструйтеся та оплачуйте свої перші заняття,
            після чого в Особистому Кабінеті Ви знайдете промо-код на знижку та
            зможете скористатись ним під час оформлення замовлення!
          </>
        ),
      },
      {
        title: "Знижки на товари\nнаших партнерів!",
        image: getIconArtSrc("shopCart"),
        caption: (
          <>
            Отримуйте додаткові <u> знижки на ВЕСЬ асортимент товарів</u> наших
            партнерів! Ви можете стежити за цікавим для вас магазинчиком в соц.
            меражах, щоб не пропустити нових надходжень або взяти участь в
            крутих розіграшах! Промокоди на знижки знаходьте в Особистому
            Кабінеті після активації обраного курсу!
          </>
        ),
      },
    ],
  },
  shopProductBlock: {
    certificates: {
      name: "Подарунковий\nсертифікат",

      large: {
        available: true,
        gallery: [
          {
            type: "image" as "image",
            image: "/certificates/certificateE.png",
          },
          {
            type: "image" as "image",
            image: "/certificates/certificateP.jpg",
          },
        ],
        caption: [
          "Подарунковий сертифікат на навчання японської мови від TanPoPo - Ідеальний Подарунок для Дітей та Дорослих!",
          "Чи хотіли ви коли-небудь вивчити японську мову? Або можливо ви вже це робите і хочете підтягнути свої навички? Тепер у вас є унікальна можливість здійснити свою мрію чи подарувати цю можливість вашим близьким завдяки нашому подарунковому сертифікату на навчання японської мови!",
          "Наша онлайн школа надає найкращий спосіб вивчати японську мову зручно та ефективно. Ми пропонуємо різні курси для всіх рівнів - від початківців до досвідчених лінгвістів. Наші кваліфіковані викладачі, інтерактивні уроки та багатий навчальний матеріал допоможуть вам швидко та легко освоїти японську мову, культуру та багато-багато іншого!",
        ],
        hashtags: [
          "Ідея на\nсвято🎁",
          "Миттєвий\nподарунок🚀",
          "Вся японська\nв одному місці🎌",
          "Вивчай з\nTanPoPo💛",
        ],
        likes: 0,

        variants: [
          {
            price: -1,
            value: "electro",
            label: "Електронний Подарунковий",
          },
          {
            price: -1,
            value: "paper",
            label: "Іменний Друкований",
          },
        ],
      },
    },
  },
};
