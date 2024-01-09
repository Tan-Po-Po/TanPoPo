import { IFeedbackFormInput as Data } from "@/app/(website)/contacts/_components/feedbackForm/feedbackForm";

export const generateHtml = (formData: Data, questionId: number) => {
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
      h5 {
        font-size: 26px;
      }
      h6 {
        font-size: 22px;
        margin: 5px 0px;
        margin-bottom: 50px;
      }
      p {
        white-space: pre-line;
        font-size: 22px;
        text-align: start;
      }
      u {
        color: #454545;
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
      .question {
        margin-top: 50px;
      }
    </style>
  </head>
  <body>
    <h5 style="white-space: pre-line">Звернення до школи TanPoPo🎌</h5>

    <div class="card">
      <h6>Номер звернення: TPQ_${questionId}</h6>
      <p><u>Ім’я</u>:${formData.name}</p>
      <p><u>Телефон</u>:${formData.phone}</p>
      <p><u>E-mail</u>:${formData.email}</p>
      <p class="question"><u>Питання</u>:${formData.question}</p>
    </div>
  </body>
</html>

`;
};
