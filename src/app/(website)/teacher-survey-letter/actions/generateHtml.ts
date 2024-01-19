import dayjs from "dayjs";
import { IFormInputs } from "../formInputs";

export const generateHtml = (data: IFormInputs) => {
  let levelsArr = [];
  for (let i = 1; i < 5; i++) {
    let key = `n${i}` as "n1" | "n2" | "n3" | "n4";

    if (data[key]) {
      levelsArr.push(key.toUpperCase());
    }
  }
  const levels = levelsArr.join(", ");

  const birthDate = dayjs(data.birthDate).format("DD/MM/YYYY");

  const visitedJp = (() => {
    if (data.visitedJpAsStudent) {
      return "Так, навчання в японському університеті";
    }
    if (data.visitedJpAsTourist) {
      return "Так, подорожі";
    }
    if (data.visitedJpOther) {
      return "Так, але інше";
    }
    if (data.didNotVisitJp) {
      return "Ні, не було такого досвіду";
    }
  })();

  const speakingExp = data.speakingExpYes ? "Так" : "Ні, поки не доводилось";

  const daysAmount = (() => {
    if (data.d34) {
      return "3-4";
    }
    if (data.d45) {
      return "4-5";
    }
    if (data.d56) {
      return "5-6";
    }
    if (data.d67) {
      return "6-7";
    }
  })();

  const dayWeekAvailable = (() => {
    if (data.weekDaysAvailableYesAlmostAnytime) {
      return "Так, практично будь-коли";
    }
    if (data.weekDaysAvailableNoNotAnyDay) {
      return "Ні, не у всі дні тижня";
    }
    if (data.weekDaysAvailableYseAnyDayNotAnyHour) {
      return "У будь-який день тижня, але не всі годині вільні";
    }
  })();

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
        font-size: 18px;
        text-align: start;
      }

        .block{
        max-width: 817px;
        width: 100%;
        padding: 20px;
        border-radius: 10px;
        border: 1px solid black;
        margin-bottom: 50px;
      }

      .questionBlock{
        margin-bottom: 25px;
      }

      .answer{
        margin-bottom: 25px;
      }

      .question{
        font-size: 22px;
        text-align: center;
        margin-bottom: 15px;
      }

      .additional{
        fon-size: 20px;
      }
    </style>
      </head>
      <body>
        <div class="block">
          <div class="questionBlock">
            <p>Контактні данні</p>
            <div class="answer">
              <p>Ім'я: ${data.name}</p>
              <p>Прізвище: ${data.surname}</p>
              <p>По-батькові: ${data.patronymic}</p>
              <p>Дата народження: ${birthDate}</p>
              <p>Email: ${data.email}</p>
              <p>Телефон: ${data.phone}</p>
            </div>
          </div>

          <div class="questionBlock">
            <div class="question">
              За цим номером телефону є можливість користуватись:
            </div>
            <div class="answer">
            <p>${data.telegram ? "Телеграм" : "Вайбер"}</p>
            </div>
          </div>

          <div class="questionBlock">
            <div class="question">
              Де ви проживаєте? (населений пункт та країна)
            </div>
            <div class="answer"><p>${data.livingPlace}</p></div>
          </div>
        </div>

        <div class="block">
          <div class="questionBlock">
            <div class="question">
              1. Яким рівнем володієте за кваліфікаційним іспитом з японської
              мови JLPT?
            </div>
            <div class="answer">
            <p>${levels} </p>
            </div>
            <div class="question">Дата складання іспиту</div>
            <div class="answer"><p>${data.dateOfExam}</p></div>
          </div>

          <div class="questionBlock">
            <div class="question">
              2. Чи маєте вищу освіту з японської філології або перекладу? Якщо
              так, то який заклад та ступінь?
            </div>
            <div class="answer"><p>${data.education}</p></div>
          </div>

          <div class="questionBlock">
            <div class="question">3. Чи відвідували Ви Японію?</div>
            <div class="answer">
            <p>${visitedJp}</p>
            </div>
            <div class="question additional">Доповнення відповіді</div>
            <div class="answer">
            <p>
              ${
                data.visitedJpAdditional
                  ? data.visitedJpAdditional
                  : "Дпоповнення відсутнє"
              }
              </p>
            </div>
          </div>

          <div class="questionBlock">
            <div class="question">
              4. Чи був досвід спілкування з японцями?
            </div>
            <div class="answer">
              <p>${speakingExp}</p>
            </div>
            <div class="question additional">Доповнення відповіді</div>
            <div class="answer">
            <p>
              ${
                data.visitedJpAdditional
                  ? data.speakingExpAdditional
                  : "Дпоповнення відсутнє"
              }
              </p>
            </div>
          </div>

          <div class="questionBlock">
            <div class="question">
              5. Чи був у Вас досвід викладання офлайн/онлайн?
            </div>
            <div class="answer">
              <p>${data.teachingExp}</p>
            </div>
          </div>

          <div class="questionBlock">
            <div class="question">6. Який ще досвід роботи у Вас був?</div>
            <div class="answer">
              <p>${data.workExp}</p>
            </div>
          </div>

          <div class="questionBlock">
            <div class="question">
              7. Чи є у Вас ноутбук в робочому стані та чи Ви маєте
              стабільне/гарне з’єднання до мережі Інтернет?
            </div>
            <div class="answer">
              <p>${data.notebookInternetIsAvailable}</p>
            </div>
          </div>

          <div class="questionBlock">
            <div class="question">
              8. Якби робочий день складався б з 5-7 робочих годин,скільки днів
              на тиждень в такому випадку Ви були б готові працювати?
            </div>
            <div class="answer">
              <p>${daysAmount}</p>
            </div>
          </div>

          <div class="questionBlock">
            <div class="question">
              9. Чи маєте зараз можливість працювати в будь-який день тижня за
              різними годинами?
            </div>
            <div class="answer">
              <p>
                ${dayWeekAvailable}
              </p>
            </div>

            <div class="question additional">Доповнення відповіді</div>
            <div class="answer">
            <p>
              ${
                data.visitedJpAdditional
                  ? data.visitedJpAdditional
                  : "Дпоповнення відсутнє"
              }
              </p>
            </div>
          </div>
        </div>

        <div class="block">
          <div class="questionBlock">
            <div class="question">
              10. Чим Вас зацікавила наша вакансія?
            </div>
            <div class="answer">
              <p>${data.vacancyInterest}</p>
            </div>
          </div>

          <div class="questionBlock">
            <div class="question">
              11. Що особисто для Вас важливо для комфортного та приємного
              проведення робочих годин?
            </div>
            <div class="answer">
              <p>${data.workComfort}</p>
            </div>
          </div>

          <div class="questionBlock">
            <div class="question">
              12. Чи маєте Ви додаткові вміння/навички, які могли б бути
              корисними при роботі викладачем?
            </div>
            <div class="answer">
              <p>${data.skills}</p>
            </div>
          </div>

          <div class="questionBlock">
            <div class="question">
              13. Які маєте очікування від роботи в нашому освітньому просторі?
            </div>
            <div class="answer">
              <p>${data.expectations}</p>
            </div>
          </div>

          <div class="questionBlock">
            <div class="question">
              14. Що слугує найбільшою мотивацією для Вас - бути викладачем?
            </div>
            <div class="answer">
              <p>${data.motivation}</p>
            </div>
          </div>
        </div>
      </body>
    </html>`;
};
