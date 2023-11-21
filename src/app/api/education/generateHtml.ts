import {
  time,
  days,
  type ScheduleForm,
} from "@/app/education/start/schedule/common";

export const generateHtml = (formData: ScheduleForm) => {
  return `
<html lang="en">
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
      }
      h1 {
        color: #007BFF;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
      }
      h3 {
        color: #007BFF;
        font-size: 24px;
        text-transform: uppercase;
      }
      h6 {
        font-size: 22px;
        margin: 5px 0px;
      }
      p {
        font-size: 20px;
      }
      .schedule, .day, .time {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
    </style>
  </head>
  <body>
    <h1>Форма для початку навчання</h1>
    <div style="display: flex">
      <div style="width: 50%; margin-right: auto;">
        <h3>Майбутній студент</h3>
        <p><strong>Ім'я:</strong> ${formData.name}</p>
        <p><strong>Прізвище:</strong> ${formData.surname}</p>
        <p><strong>Телефон:</strong> ${formData.phone}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Вік:</strong> ${formData.age}</p>
      </div>
      <div style="width: 50%;">
        <h3>Контактна особа</h3>
      ${
        formData.contact
          ? `<p><strong>Ім'я:</strong> ${formData.contactName}</p>
        <p><strong>Прізвище:</strong> ${formData.contactSurname}</p>
        <p><strong>Телефон:</strong> ${formData.contactPhone}</p>
        <p><strong>Email:</strong> ${formData.contactEmail}</p>
        <p><strong>Ким є для студента:</strong> ${formData.contactRole}</p>`
          : ""
      }</div>
    </div>
    
    
    ${
      formData.comment
        ? `<p><strong>Коментар:</strong> ${formData.comment}</p>`
        : ``
    }
    <div style="display: flex; align-items: center; justify-content: center; width: 100%">${formData.schedule
      .map((day: string[], dayIndex: number) => {
        return `<div>
        <h6 style="text-align: center;">${days[dayIndex]}</h6>
        ${day
          .map((variant, index) => {
            switch (variant) {
              case "inappropriate":
                return `<div class="time inappropriate">
                  <p>${time[index]}</p>
                </div>`;
              case "maybe":
                return `<div class="time maybe">
                  <p>${time[index]}</p>
                </div>`;
              case "perfect":
                return `<div class="time perfect">
                  <p>${time[index]}</p>
                </div>`;
            }
          })
          .join("")}
      </div>`;
      })
      .join("")}</div>
  </body>
</html>
`;
};
