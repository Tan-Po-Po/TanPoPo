import { getIconArtSrc } from "@/helpers";
export const cards = [
  {
    title:
      "Цікавить вартість курсів? Ми завжди намагаємось давати лише привабливі цінові пропозиції!",
    image: getIconArtSrc("coinsStack"),
    button: {
      text: "Вартість",
      href: "/prices",
      icon: "coinsStack",
    },
  },
  {
    title:
      "Бажаєте дізнатись детальніше про наші курси, заняття, відеоматеріали та багато іншого?",
    image: getIconArtSrc("temple"),
    button: {
      text: "Курси",
      href: "/courses",
      icon: "bookPlay",
    },
  },
  {
    title:
      "Завітайте до нашої крамниці, де знайдете багато крутих і корисних навчальних продуктів!",
    image: getIconArtSrc("store"),
    button: {
      text: "Крамниця",
      href: "/store",
      icon: "shop",
    },
  },
  {
    title:
      "Унікальні матеріали для ще цікавішого та ефекти-внішого вивчення мови:",
    image: getIconArtSrc("diamond"),
    button: {
      text: "Авторський Контент",
      href: "/about#content",
      icon: "video",
    },
  },
  {
    title: "Дізнайтеся, що кажуть наші учні про їхній досвіду школі TanPoPo:",
    image: getIconArtSrc("lamp"),
    button: {
      text: "Відгуки про Школу",
      href: "/about#feedbacks",
      icon: "personSpeak",
    },
  },
  {
    title: "Наша команда з якою ми разом формуємо якісний процес навчання:",
    image: getIconArtSrc("team"),
    button: {
      text: "Команда TanPoPo",
      href: "/about#team",
      icon: "person",
    },
  },
];
