import { getIconArtSrc, getIconSrc } from "@/helpers";

export const textContent = {
  cardsBlock: [
    {
      title: "Точність тесту.",
      image: getIconArtSrc("target"),
      caption:
        "Наш онлайн-тест достатньо добре визначає ваш наявний рівень володіння мовою від JLPT N5 до JLPT N1 за найбільш важливими параметрами: лексика(словниковий запас слів), читання, граматика та знання ієрогліфіки.",
    },
    {
      title: "Перевір свій рівень!",
      image: getIconArtSrc("mountain1"),
      caption:
        "Це безкоштовний комплексний онлайн тест, який допоможе визначити ваш поточний рівень володіння мовою. Тест є інтерактивно-адаптивним, тому Вам буде запропонована більша або менша кількість питань з різним рівнем складності, в залежності від ваших від повідей. Час проходження тесту: 5 - 15хв.",
    },
    {
      title: "Результати.",
      image: getIconArtSrc("megaphone"),
      caption:
        "Після проходження тесту Ви миттєво отримаєте результат, який максимально близько покаже ваш поточний рівень знань японської мови. Після чого ми зможемо запропонувати вам наявні навчальні курси, які найкраще підійдуть саме для Вас!",
    },
  ],
  levelsBlock: {
    header: "Рівні володіння японською мовою\nза міжнародним розподілом JLPT:",
    levels: [
      {
        level: "N5",
        label: "вступний\nрівень",
      },
      {
        level: "N5+",
        background: "#FFE796",
      },
      {
        level: "N4",
      },
      {
        level: "N4+",
        background: "#FFA2D9",
      },
      {
        level: "N3",
        label: "середній\nрівень",
      },
      {
        level: "N3+",
        background: "#FF9F9F",
      },
      {
        level: "N2",
      },
      {
        level: "",
        label: "Placeholder",
      },
      {
        level: "N1",
        label: "майстер\nрівень",
      },
    ],
    titleCard:
      "В нашій школі початкові курси\nрозподілені на 2 окремі частини.\nЧОМУ так краще? ",

    card1: {
      title: "1. Краща адаптація знань!",
      image: getIconArtSrc("dog"),
      caption:
        "Рівні в японській мові досить обʼємні, тому деяким підходить розпочинати зі старту, а людям, які вже вчили самостійно японську мову раніше або просто мають певні знання матимуть можливість розпочати навчання зі складнішої частини. ",
    },
    card2: {
      title: "2. Зручний трекінг прогресу!",
      image: getIconArtSrc("cat"),
      caption:
        "Така система сприяє кращій мотивації та зручнішому трекінгу успіхів кожного учня. А ще це означає, що в нашій школі Ви отримаєте 2 сертифікати замість 1, якщо матимете бажання повністю пройти рівні N5, N4 або N3 з нуля.",
    },
  },

  beginTestBlock: {
    title: "Проходьте онлайн-тест прямо зараз!",
    image: getIconArtSrc("testBlank"),
    caption:
      " Не потрібно жодної додаткової реєстрації! Просто починайте\nвідповідати на запитання і переходьте до наступних!\nВаш рівень ми повідомимо в кінці тесту! Бажаємо успіхів!",
    button: {
      text: "Розпочати Тест",
      icon: "pc",
      href: "/test-intro/test",
    },
  },
};
