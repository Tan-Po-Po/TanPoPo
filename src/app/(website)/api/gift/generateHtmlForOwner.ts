import { type FormData } from "@/components/orderForm/formData";
import { CourseState } from "@/redux/slices/course/courseSlice";

export type Data = { courseName: string; } & FormData &
  CourseState;

export const generateHtmlForOwner = (formData: Data) => {
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
        font-size: 22px;
        text-align: center;
      }
      .ii a[href],
      a {
        color: #000 !important;
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
      Навчання у Подарунок разом з TanPoPo🎉
    </h1>
    <img class="img" src="cid:present" width="160px" height="137px" />

    <div class="card contact">
      <h1><b>Контактні дані:</b></h1>
      <div style="display: flex; margin-top: 20px">
        <div style="width: 50%">
          <p><u>Ім'я</u>: ${formData.name}</p>
          <p><u>Прізвище</u>: ${formData.surname}</p>
        </div>
        <div style="width: 50%">
          <p><u>Телефон</u>: ${formData.phone}</p>
          <p><u>Email</u>: ${formData.email}</p>
        </div>
      </div>
    </div>

    <div class="card" style="width: 100%">
      <div>
        <h3>Обраний подарунковий курс:</h3>
        <h3>Мовний ніндзя</h3>
        <h3>(言語の忍者)</h3>
      </div>
      <div style="text-align: start; margin-top: 50px" class="course">
        <p><u>Формат Навчання</u>: ${formData.format}</p>
        ${
          formData.format == "Міні-група"
            ? `<p><u>Занять в тиждень</u>: 2 заняття в тиждень</p>`
            : ""
        }
        <p>
          <u>Тривалість онлайн-уроку</u>: 70 хвилин/заняття(рівень JLPT
          ${formData.level})
        </p>
        <p><u>Обрана к-сть уроків</u>: ${formData.lessons} онлайн-уроків</p>
        <p>
          <u>Вид сертифікату</u>: ${ formData.certificateType === "Друкований сертифікат" ? "Іменний" : "Електронний" } подарунковий сертифікат
        </p>
      </div>
    </div>

    ${ formData.certificateType === "Друкований сертифікат" ? `
    <div class="card course">
      <h1 style="color: #454545; font-size: 27px">
        Дані для іменного сертифікату:
      </h1>
      <p style="margin-top: 50px"><u>Ім’я</u>: ${formData.studentName}</p>
      <p><u>Прізвище</u>: ${formData.studentSurname}</p>

      <h1 style="font-size: 27px; margin-top: 50px">
        Місце доставки сертифікату Новою Поштою:
      </h1>
      <p>
        <u>Область/місто</u>: ${formData.region} обл., м.
        ${formData.city.label}.
      </p>
      ${ formData.isDepartmentDelivery ? `
      <p><u>№ Відділення/поштомату</u>: ${formData.department}</p>
      ` : `
      <p><u>Адреса</u>: ${formData.address}</p>
      ` }
      <p><u>Коментар</u>: ${formData.comment}</p>
    </div>
    ` : "" }

    <div class="card" style="max-width: 650px; margin-bottom: 50px">
      <h1 style="font-size: 27px; color: #454545">Вартість навчання:</h1>
      <h1 style="font-size: 27px">${formData.price}</h1>
    </div>
  </body>
</html>
`
};
