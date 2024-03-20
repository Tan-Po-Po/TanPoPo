export const textContent = {
  contactsBlock: {
    header: "НАШІ КОНТАКТИ",
    image: "/images/contacts.png",
    card1: {
      section1: {
        tittle: "Консультація:",
        caption1: "+38 (068) 798 78 78",
        caption2: "ПН-СБ: з 8:00 до 19:00",
      },
      section2: {
        tittle: "Актуальні Питання",
        links: [
          {
            text: "Курси",
            link: "/courses#faq",
          },
          {
            text: "Про школу",
            link: "/contacts#faq",
          },
          {
            text: "Оплата",
            link: "/prices#faq",
          },
        ],
      },
    },
    card2: {
      tittle: "E-mail:",
      caption1: "tanpopo.touch@gmail.com",
      caption2: (
        <>
          Онлайн-школа японської мови.{" "}
          <span style={{ fontSize: "14px" }}>
            ©2023 TanPoPo. Всі права захищено.
          </span>
        </>
      ),
    },
    card3: {
      section1: {
        tittle: "Реквізити Школи",
        href: "/contacts/requisites",
      },
      section2: {
        tittle: "Публічна Оферта",
        href: "/contacts/oferta",
      },
      section3: {
        tittle: "Сторінка Розробників",
        href: "/contacts/developers",
      },
      section4: {
        tittle: "Долучитись до Команди",
        href: "/teacher-survey-letter",
      },
      section5: {
        tittle: "Політика Конфідеційності",
        href: "/contacts/confidentialityPolicy",
      },
    },
  },
  videoGuidesBlock: {
    divider: {
      line1: "ВІДЕОГАЙДИ",
      line2: "по користуванню сайтом".toUpperCase(),
    },
    cards: [
      {
        caption: (
          <>
            ЯК ПРОХОДИТЬ НАВЧАННЯ
            <br />
            НА НАШІЙ ПЛАТФОРМІ У ФОРМАТІ:
            <br />
            {
              <b>
                <u>ОНЛАЙН-КУРСИ З СЕНСЕЯМИ?</u>
              </b>
            }
          </>
        ),
        href: "https://www.youtube.com/watch?v=8ypRvNZhocU",
        background:
          "linear-gradient(180deg, #FFEDAD 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
      {
        caption: (
          <>
            <b>
              <u>КУРСИ ДЛЯ САМОСТІЙНОГО ВИВЧЕННЯ:</u>
            </b>{" "}
            ОПЛАТА, РЕЄСТРАЦІЯ ТА ПОЧАТОК НАВЧАННЯ.
          </>
        ),
        href: "https://www.youtube.com/watch?v=8ypRvNZhocU",
        background:
          "linear-gradient(180deg, #FFADB7 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
      {
        caption: (
          <>
            <b>
              <u>ОНЛАЙН-КУРСИ З СЕНСЕЄМ:</u>
            </b>{" "}
            ОПЛАТА, РЕЄСТРАЦІЯ ТА <br /> ПОЧАТОК НАВЧАННЯ.
          </>
        ),
        href: "https://www.youtube.com/watch?v=8ypRvNZhocU",
        background:
          "linear-gradient(180deg, #E5ADFF 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
      {
        caption: (
          <>
            <b>
              <u>АКТИВАЦІЯ</u>
            </b>{" "}
            ТА <br />{" "}
            <b>
              <u>ЗАМОРОЗКА</u>
            </b>{" "}
            КУРСІВ <br /> В ОСОБИСТОМУ КАБІНЕТІ
          </>
        ),
        href: "https://www.youtube.com/watch?v=8ypRvNZhocU",
        background:
          "linear-gradient(180deg, #DBFFAD 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
      {
        caption: (
          <>
            ЯК КОРИСТУВАТИСЬ <br /> НАШОЮ ПЛАТФОРМОЮ <br />
            <b>
              <u>TANPOPO ALL-IN-ONE?</u>
            </b>
          </>
        ),
        href: "https://www.youtube.com/watch?v=8ypRvNZhocU",
        background:
          "linear-gradient(180deg, #F4ADFF 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
      {
        caption: (
          <>
            <b>
              <u>КОМУНІКАЦІЯ З СЕНСЕЄМ</u>
            </b>{" "}
            <br /> ТА ПЕРЕВІРКА ДОМАШНІХ <br /> ЗАВДАНЬ НА НАШІЙ ПЛАТФОРМІ
          </>
        ),
        href: "https://www.youtube.com/watch?v=8ypRvNZhocU",
        background:
          "linear-gradient(180deg, #ADBFFF 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
      {
        caption: (
          <>
            ЯК СКОРИСТАТИСЯ <br />{" "}
            <b>
              <u>ЗНИЖКАМИ НА ТОВАРИ</u>
            </b>{" "}
            <br /> НАШИХ ПАРТНЕРІВ?
          </>
        ),
        href: "https://www.youtube.com/watch?v=8ypRvNZhocU",
        background:
          "linear-gradient(180deg, #ADF5FF 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
      {
        caption: (
          <>
            ЯК СКОРИСТАТИСЯ <br />{" "}
            <b>
              <u>ПРОМОКОДАМИ НА ЗНИЖКУ</u>
            </b>{" "}
            <br />
            ДЛЯ ПРОДУКЦІЇ TANPOPO?
          </>
        ),
        href: "https://www.youtube.com/watch?v=8ypRvNZhocU",
        background:
          "linear-gradient(180deg, #ADFFCE 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
      {
        caption: (
          <>
            ЯК ПРИДБАТИ ТА АКТИВУВАТИ <br />
            <b>
              <u>ПОДАУРНКОВИЙ СЕРТИФІКАТ</u>
            </b>
            <br />
            НА ОБРАНИЙ КУРС?
          </>
        ),
        href: "https://www.youtube.com/watch?v=8ypRvNZhocU",
        background:
          "linear-gradient(180deg, #FDFFAD 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
    ],
  },
  faqBlock: {
    divider: { line1: "АКТУАЛЬНІ ПИТАННЯ" },
  },
};
