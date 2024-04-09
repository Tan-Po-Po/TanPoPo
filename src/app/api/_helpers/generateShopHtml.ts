import { socialLinks } from "@/config/config";
import { Data } from "../shop/type";

export const generateShopHtml = (orderData: Data, orderId: string) => {
  return `<html lang="en">
  <head>
    <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
      }
      *,
      body {
        margin: 0;
        padding: 0;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        width: 100%;
        text-align: center;
      }
      h3 {
        font-size: 24px;
      }
      h6 {
        font-size: 22px;
        margin: 5px 0px;
      }
      p {
        font-size: 22px;
        text-align: center;
      }
      .ii a[href],
      a {
        color: #000 !important;
        text-decoration: none;
      }
      .img {
        display: flex;
        margin: 25px auto;
      }
      u {
        color: #454545;
      }
      .day {
        margin: auto;
      }
      .time {
        box-sizing: border-box;
        width: 110px;
        height: 40px;
        padding: 5px;
        text-align: center;
        margin: 5px;
        border: 2px solid black;
        border-radius: 10px;
      }
      .time p {
        width: 100%;
        margin: 0;
        font-size: 16px;
      }
      .inappropriate {
        background: #e1edff;
      }
      .maybe {
        background: #fff48d;
      }
      .perfect {
        background: #caffbd;
      }
      .card {
        max-width: 950px;
        margin: 50px auto 0;
        text-align: center;
        border-radius: 10px;
        border: 2px solid #000;
        justify-content: center;
        align-items: center;
        padding: 33px;
        gap: 29px;
      }
      .container {
        text-align: center;
        border-radius: 10px;
        border: 2px solid #000;
      }
      .contact p,
      .course p {
        text-align: start;
        margin-top: 30px;
      }
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .btn {
        width: 220px;
        padding: 10px 15px;
        font-size: 24px;
        font-weight: 700;
        text-decoration: none;
        border-radius: 10px;
        border: 2px solid var(--main-black, #000);
        background: #c4ffb6;
        color: black;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        cursor: pointer;
      }
      .btn:hover {
        background: #affa9c;
      }
      .socials {
        margin: 10px;
      }
    </style>
  </head>
  <body>
    <h1 style="white-space: pre-line">
      Вітаємо! Ваше замовлення успішно створено!
    </h1>
    <img class="img" src="cid:store" width="137px" height="142px" />
    <div class="card" style="width: 390px">
      <p>Номер замовлення: <b>${orderId}</b></p>
    </div>

    <div class="card" style="display: flex; max-width: 800px; min-width: 800px">
      <div style="margin-right: 30px;">
        <p>Обрані товари</p>
        ${orderData.items
          .map((item) => {
            return `
        <div
          class="card"
          style="display: flex; padding: 0; overflow: hidden; margin-top: 30px; max-width: 400px; height: 72px"
        >
          <img class="img" src='${
            item.images[0]
          }' width="auto" height="72px" style="margin: 0"/>
          <div style="height: fit-content; margin: auto; padding: 10px 20px">
            <p style="font-size: 18px; width: 300px;">
              <b>${item.name.replace("\n", " ")}</b>
            </p>
            ${
              item.label
                ? `
            <p style="font-size: 18px"><b>${item.label}</b></p>
            `
                : ""
            }
          </div>
        </div>
        `;
          })
          .join("")} ${
    orderData.promoCode
      ? `
        <p style="margin-top: 30px;">Промокод на знижку</p>
        <p>
          <b>${orderData.promoCode.code} (-${orderData.promoCode.perCent}%)</b>
        </p>
        `
      : ""
  }
      </div>
      <div style="margin: 0 50px 0 auto;">
        <p>Кількість</p>
        ${orderData.items
          .map((item) => {
            return `
        <div class="card" style="padding: 20px; height: 32px; margin-top: 30px">
          <p style="margin: auto; font-size: 18px">${item.amount}шт.</p>
        </div>
        `;
          })
          .join("")}
      </div>
      <div>
        <p>Ціна</p>
        ${orderData.items
          .map((item) => {
            if (item.price.sale) {
              return `
        <div class="card" style="padding: 10px 20px; height: 52px; margin-top: 30px">
          <p style="color: grey; font-size: 18px"><s>${item.price.original}</s></p>
          <p style="font-size: 18px"><b>${item.price.sale}</b></p>
        </div>
        `;
            } else {
              return `
        <div class="card" style="padding: 20px; height: 32px; margin-top: 30px">
          <p style="font-size: 18px"><b>${item.price.original}</b></p>
        </div>
        `;
            }
          })
          .join("")}
        <p style="margin-top: 30px;">Разом:</p>
          ${
            orderData.totalPrice.original === orderData.totalPrice.final
              ? `
               <div class="card" style="background-color: #ffec6a; margin-top: 10px; padding: 20px 30px; height: 32px">
                <p><b>${orderData.totalPrice.final}</b></p>
              </div>`
              : `
              <div class="card" style="background-color: #ffec6a; margin-top: 10px; padding: 10px 30px; height: 52px">
                <p style="color: grey; font-size: 18px"><s>${orderData.totalPrice.original}</s></p>
                <p style="font-size: 18px"><b>${orderData.totalPrice.final}</b></p>
               </div> `
          }
      </div>
    </div>

    <div class="card contact">
      <h1><b>Ваші контактні дані:</b></h1>
      <div style="display: flex; margin-top: 20px">
        <div style="width: 50%">
          <p><u>Ім'я</u>: ${orderData.name}</p>
          <p><u>Прізвище</u>: ${orderData.surname}</p>
        </div>
        <div style="width: 50%">
          <p><u>Телефон</u>: ${orderData.phone}</p>
          <p><u>Email</u>: ${orderData.email}</p>
        </div>
      </div>
    </div>

    <div class="card course">
      <h1 style="font-size: 27px">Місце доставки сертифікату Новою Поштою:</h1>
      <p>
        <u>Область/місто</u>: ${orderData.region} обл., м.
        ${orderData.city.label}.
      </p>
      ${
        orderData.isDepartmentDelivery
          ? `
      <p><u>№ Відділення/поштомату</u>: ${orderData.department}</p>
      `
          : `
      <p><u>Адреса</u>: ${orderData.address}</p>
      `
      }
      <p><u>Спосіб оплати</u>: ${
        orderData.payNow
          ? "Онлайн оплата на сайті"
          : "Післяоплата на Новій Пошті"
      }</p>
      ${orderData.comment ? `<p><u>Коментар</u>: ${orderData.comment}</p>` : ""}
    </div>

    ${
      orderData.payNow
        ? `
    <div class="card" style="max-width: 450px">
      <h1 style="font-size: 27px; color: #454545">Сума замовлення:</h1>
      <h1 style="font-size: 27px">${orderData.totalPrice.final} грн</h1>

      <div style="margin: 30px 0;">
        <span class="btn" style="cursor: inherit"
          >Оплата успішна!</span
        >
      </div>
    </div>
    `
        : ``
    }

    <div class="card" style="max-width: 450px">
      <h1>Дякуємо, що обрали \nTanPoPo💛</h1>
      <img class="img" src="cid:girl" width="170px" height="177px" />
      <div>
        <a href="${socialLinks.instagram}" class="socials"
          ><img src="cid:instagram" width="43px" height="43px"
        /></a>
        <a href="${socialLinks.tikTok}" class="socials"
          ><img src="cid:tikTok" width="43px" height="43px"
        /></a>
        <a href="${socialLinks.youTube}" class="socials"
          ><img src="cid:youtube" width="50px"
        /></a>
        <a href="${socialLinks.telegram}" class="socials"
          ><img src="cid:telegram" width="45px"
        /></a>
        <a href="${socialLinks.viber}" class="socials"
          ><img src="cid:viber" width="42px"
        /></a>
      </div>
      <p style="font-size: 18px">Онлайн-школа японської мови.</p>
      <p style="font-size: 15px">© 2024 TanPoPo. Всі права захищено.</p>
    </div>
  </body>
</html>

`;
};
