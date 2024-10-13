import { time, days } from "@/components/schedule/common";
import { Data } from "../education/type";

export const generateOwnerScheduleHtml = (formData: Data, orderId: string) => {
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
        white-space: pre-line;
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
        white-space: pre-line;
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
        width: 111px;
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
        white-space: nowrap;
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
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.35);
        justify-content: center;
        align-items: center;
        padding: 33px;
        gap: 29px;
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
        transition: all 0.3s ease-in-out;
      }
      .btn:hover {
        background: #affa9c;
        transform: translateY(5px);
      }
    </style>
  </head>
  <body>
    <h1 style="white-space: pre-line">Учень заповнив новий розклад навчання 🎉</h1>
    ${
      orderId
        ? `<div class="card" style="max-width: 400px;"><p>Навчальний номер:<b>${orderId}</b></p></div>`
        : ""
    }

    <div class="card contact">
      <h1><b>Контактні дані учня:</b></h1>
      <div style="display: flex; margin-top: 20px">
        <div style="width: 50%">
          <p><u>Ім'я:</u> ${formData.name}</p>
          <p><u>Прізвище:</u> ${formData.surname}</p>
          <p><u>Вік:</u> ${formData.age}</p>
        </div>
        <div style="width: 50%">
          <p><u>Телефон:</u> ${formData.phone}</p>
          <p><u>Email:</u> ${formData.email}</p>
          ${
            formData.format
              ? `<p><u>Формат навчаня:</u> ${formData.format}(${formData.lessonsPerWeek}р./тиждень)</p>`
              : ""
          }
        </div>
      </div>
      ${
        formData.contact
          ? `
          <h3 style="margin-top: 20px">Контактна особа</h3>
          <div style="display: flex">
            <div style="width: 50%">
              <p><u>Ім'я:</u> ${formData.contactName}</p>
              <p><u>Прізвище:</u> ${formData.contactSurname}</p>
              <p><u>Ким є для студента:</u> ${formData.contactRole}</p>
            </div>
            <div style="width: 50%">
              <p><u>Телефон:</u> ${formData.contactPhone}</p>
              <p><u>Email:</u> ${formData.contactEmail}</p>
            </div>
          </div>
      `
          : ""
      }
      ${
        formData.comment
          ? `
        <p style="margin-top: 20px;"><u>Коментар:</u> ${formData.comment}</p>
        `
          : ``
      } 
    </div>

    <div class="card" style="min-width: 1020px; padding: 33px 10px">
      <h3>Обраний розклад занять:</h3>
      <div style="display: flex; margin-top: 30px; width: auto; column-gap: 5px">
        ${formData.schedule
          .map((day: string[], dayIndex: number) => {
            return `
        <div class="day">
          <h6 style="text-align: center">${days[dayIndex]}</h6>
          ${day
            .map((variant, index) => {
              switch (variant) {
                case "inappropriate":
                  return `
          <div class="time inappropriate">
            <p style="font-weight: 600;">${time[index]}</p>
          </div>
          `;
                case "maybe":
                  return `
          <div class="time maybe">
            <p style="font-weight: 600;">${time[index]}</p>
          </div>
          `;
                case "perfect":
                  return `
          <div class="time perfect">
            <p style="font-weight: 600;">${time[index]}</p>
          </div>
          `;
              }
            })
            .join("")}
        </div>
        `;
          })
          .join("")}
      </div>
    </div>

    ${
      formData.courseName
        ? `<div class="card course">
      <h1 style="color: #454545; font-size: 27px">Обраний курс:</h1>
      <h1 style="font-size: 27px">${formData.courseName}</h1>
      <h1 style="font-size: 27px">(рівень JLPT ${formData.level})</h1>
      <p style="margin-top: 50px"><u>Формат Навчання</u>: ${
        formData.format === "Міні-група"
          ? "Онлайн курс з сенсеєм(міні-група 2-4 чол.)"
          : `Індивідуально (${formData.lessonsPerWeek} р./тиждень)`
      }</p>
      ${
        formData.format == "Міні-група"
          ? `<p><u>Занять в тиждень</u>: 2 заняття в тиждень</p>`
          : ""
      }
      <p><u>Обрана к-сть уроків</u>: ${formData.lessons} онлайн-уроків</p>
      <p><u>Вартість навчання</u>: ${formData.price}</p>
    </div>`
        : ""
    }
  </body>
</html>
`;
};
