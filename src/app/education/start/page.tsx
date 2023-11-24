"use client";

import React from "react";
import {
  ContentCard,
  Divider,
  Typography,
  Checkbox,
  Button,
} from "@/components";
import { getIconArtSrc, getValidClassNames } from "@/helpers";
import Link from "next/link";
import Image from "next/image";
import TriangleButton from "public/icons/triangleButton.svg";
import { toast } from "react-toastify";
import cl from "./page.module.scss";
import { useAppSelector } from "@/redux/hooks";

export default function Page() {
  const [isAccepted, setIsAccepted] = React.useState(false);
  const course = useAppSelector((state) => state.course);

  console.log(course);
  return (
    <main>
      <div className={cl.pageHeader}>
        <Typography variant="h6">Розпочати навчання з сенсеєм</Typography>
        <Typography variant="h1">
          <span>3</span> прості кроки:
        </Typography>
      </div>

      <div className={cl.steps}>
        <ContentCard
          className={cl.card}
          height="355px"
          width="330px"
          index="1"
          indexBgColor="#FFCEC8"
          cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #FFBEBE 100%)"
        >
          <Typography variant="body1">
            {" "}
            Ознайомтесь із необхідною інормацією
          </Typography>
          <Image
            src={getIconArtSrc("temple")}
            alt="Temple art"
            width={87}
            height={89}
          />
          <Typography variant="body2">
            {
              "Дізнайтесь про всі особли-вості обраного формату навчання в нашій онлайн-школі TanPoPo та натискайте ”Продовжити”, щоб перейти до наступного кроку!"
            }
          </Typography>
        </ContentCard>

        <TriangleButton className={cl.triangleBtn} />

        <ContentCard
          className={cl.card}
          height="355px"
          width="330px"
          index="2"
          indexBgColor="rgba(200, 242, 255, 1)"
          cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #C8F2FF 100%)"
        >
          <Typography variant="body1">
            Заповніть контактні дані та ваш розклад.
          </Typography>
          <Image
            src={getIconArtSrc("calendar3")}
            alt="Calendar art"
            width={88}
            height={93}
          />
          <Typography variant="body2">
            Вкажіть ваші контактні дані та оберіть, коли Ви можете приділяти час
            вивченню японської мови з сенсеєм онлайн, щоб ми змогли сформувати
            графік.
          </Typography>
        </ContentCard>

        <TriangleButton className={cl.triangleBtn} />

        <ContentCard
          className={cl.card}
          height="355px"
          width="330px"
          index="3"
          indexBgColor="rgba(201, 255, 200, 1)"
          cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #C9FFC8 100%)"
        >
          <Typography variant="body1">
            Оплатіть курс та розпочніть навчання!
          </Typography>
          <Image
            src={getIconArtSrc("school")}
            alt="School icon"
            width={102}
            height={87}
          />
          <Typography variant="body2">
            Оплачуйте обраний курс, в той час, як ми почнемо фо-рмувати ваш
            розклад і після його успішного погодження Ви відразу розпочинаєте
            вивчення японської мови!
          </Typography>
        </ContentCard>
      </div>

      <Divider
        className={cl.divider}
        firsRow="1. Ознайомтесь із необхідною інормацією"
        bgColor="linear-gradient(180deg, #FFE352 0%, #FFED72 70%)"
        width="555px"
      />

      {course.format === "Міні-група" ? (
        <ContentCard width="850px" className={cl.reminder}>
          <Typography variant="h6">
            Важливі пам’ятки про Заняття у Міні-групах:
          </Typography>

          <Image
            src={getIconArtSrc("boyAndGirl")}
            alt="Boy and girl icon"
            width={130}
            height={115}
          />

          <ul className={cl.list}>
            <li>
              Заняття онлайн з сенсеєм у міні-групі проходять двічі на тиждень.
              Після узгодження графіку навчання, він стає фіксованим.
            </li>
            <li>
              Усі матеріали з уроку, домашні завдання та кожне онлайн-заняття
              записується(з платформи Zoom) та зберігається в архіві на нашій
              інтерактивній навчальній платформі і є доступними для повторення
              матеріалу!
            </li>
            <li>
              В міні-групах одночасно може навчатись від 2 до 5 осіб. Усі наші
              курси ідеально збалансовані та ретельно розроблені таким чином,
              щоб кожному учневі в групі приділялася достатня кількість часу на
              будь-які його запитання по матеріалу та на всі аспекти вивчення
              японської мови!
            </li>
            <li>
              Не хвилюйтеся про вашу відсутність! Навіть якщо Вам не вдалось
              відвідати заняття, Вам буде наданий повний відеозапис онлайн-уроку
              з сенсеєм за вашою програмою, усі навчальні матеріали та домашні
              завдання!
            </li>
            <li>
              Усі заняття в будь-якому випадку відбуваються за розкладом та
              автоматично сплачуються з вашого придбаного курсу, оскільки Ви
              завжди(навіть за вашої відсутності на занятті) матимете доступ до
              запису уроку та всіх навчальних матеріалів!
            </li>
            <li>
              Повний доступ до можливостей навчальної платформи та Бібліотеки
              TanPoPo, а також знижки на всі наші авторські продукти та товари
              від наших партнерів надаються на весь період вашого навчання по
              обраному онлайн-курсу з сенсеєм.
            </li>
          </ul>
        </ContentCard>
      ) : (
        <ContentCard width="850px" className={cl.reminder}>
          <Typography variant="h6">
            Важливі пам’ятки про Індивідуальні Заняття:
          </Typography>

          <Image
            src={getIconArtSrc("teacher")}
            alt="Teacher icon"
            width={130}
            height={105}
          />

          <ul className={cl.list}>
            <li>
              Індивідуальні заняття онлайн з сенсеєм у проходять від 1 до 3
              разів на тиждень. На наступній сторінці Ви зможете обрати бажану
              к-сть занять на тиждень.
            </li>
            <li>
              Заняття відбуваються при умові вашої присутності на уроці. У
              випадку вашої відсутності на заздалегіть заплановане заняття -
              воно вважається “пропущеним” і оплата за нього не повертається.
              Щоб не допускати таких ситуацій, просимо Вас заздалегіть
              повідомляти(мінімум за 1 день до запланового заняття) про вашу
              неможливість його відвідати, щоб ми змогли перенести це заняття!
            </li>
            <li>
              Кожного календарного місяця Ви маєте змогу зробити не більше 2
              перенесень занять!
            </li>
            <li>
              У випадку неспроможності вашого сенсея провести заплановане
              заняття, відбудеться тимчасова заміна сенсея.
            </li>
            <li>
              Усі матеріали з уроку, домашні завдання та кожне онлайн-заняття
              записується(з платформи Zoom) та зберігається в архіві на нашій
              інтерактивній навчальній платформі і є доступними для повторення
              матеріалу!
            </li>
            <li>
              Повний доступ до можливостей навчальної платформи та Бібліотеки
              TanPoPo, а також знижки на всі наші авторські продукти та товари
              від наших партнерів надаються на весь період вашого навчання по
              обраному онлайн-курсу з сенсеєм.
            </li>
          </ul>
        </ContentCard>
      )}
      <div className={cl.checkboxWrapper}>
        <Checkbox
          className={cl.checkbox}
          isChecked={isAccepted}
          onClick={() => {
            setIsAccepted((prev) => !prev);
          }}
        />
        <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>
          Продовжуючи, Я приймаю умови
          <Link target="_blank" href="/">
            <u>Публічної {'\n'}Оферти</u>
          </Link>{" "}
          та{" "}
          <Link target="_blank" href="/">
            <u>Політики Конфідеційності</u>.
          </Link>
        </Typography>
      </div>
      <div className={cl.continue}>
        <div className={cl.line}></div>
        {isAccepted ? (
          <Link href="/education/start/schedule">
            <Button
              className={getValidClassNames(cl.btn)}
              icon="triangleButton"
              variant="outlined"
            >
              Продовжити
            </Button>
          </Link>
        ) : (
          <Button
            className={getValidClassNames(cl.btn)}
            icon="triangleButton"
            variant="outlined"
            onClick={() =>
              toast(
                "Щоб продовжити, прийміть \nумови Публічної Оферти та \nПолітику Конфідеційності!☑"
              )
            }
          >
            Продовжити
          </Button>
        )}
      </div>
    </main>
  );
}
