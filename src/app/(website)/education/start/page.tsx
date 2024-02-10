"use client";

import React, { Suspense, useEffect } from "react";
import {
  ContentCard,
  Divider,
  Typography,
  Checkbox,
  Button,
} from "@/components";
import { Steps } from "./_steps/steps";
import { getIconArtSrc } from "@/helpers";
import Link from "next/link";
import Image from "next/image";

import { toast } from "react-toastify";
import cl from "./page.module.scss";
import { useAppSelector } from "@/redux/hooks";

export default function Page() {
  const [isAccepted, setIsAccepted] = React.useState(false);
  const course = useAppSelector((state) => state.course);
  useEffect(() => {
    document.title = "Старт навчання | Tanpopo";
  }, []);
  
  return (
    <main className={cl.main}>
      <div className={cl.pageHeader}>
        <Typography variant="h5" align="center">
          Розпочати онлайн-навчання з сенсеєм
        </Typography>
        <Typography variant="h3" align="center">
          {" "}
          в школі TanPoPo дуже легко!
        </Typography>
      </div>

      <Typography variant="h6" align="center" className={cl.headerParagraph}>
        За допомогою нашого сайту Ви можете обрати власний розклад та записатись
        на заняття абсолютно самостійно прямо зараз:
      </Typography>

      <Steps />

      <Divider
        className={cl.divider}
        firstRow="1. Ознайомтесь із необхідною інормацією"
        bgColor="linear-gradient(180deg, #FFE352 0%, #FFED72 70%)"
        width="555px"
      />

      <Suspense fallback={<></>}>
        {course.format === "Міні-група" ? (
          <ContentCard width="850px" className={cl.reminder}>
            <Typography variant="h6" align="center">
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
                Заняття онлайн з сенсеєм у міні-групі проходять двічі на
                тиждень. Після узгодження графіку навчання, він стає фіксованим.
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
                щоб кожному учневі в групі приділялася достатня кількість часу
                на будь-які його запитання по матеріалу та на всі аспекти
                вивчення японської мови!
              </li>
              <li>
                Не хвилюйтеся про вашу відсутність! Навіть якщо Вам не вдалось
                відвідати заняття, Вам буде наданий повний відеозапис
                онлайн-уроку з сенсеєм за вашою програмою, усі навчальні
                матеріали та домашні завдання!
              </li>
              <li>
                Усі заняття в будь-якому випадку відбуваються за розкладом та
                автоматично сплачуються з вашого придбаного курсу, оскільки Ви
                завжди(навіть за вашої відсутності на занятті) матимете доступ
                до запису уроку та всіх навчальних матеріалів!
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
                Індивідуальні заняття онлайн з сенсеєм проходять від 1 до 3
                разів на тиждень. На наступній сторінці Ви зможете обрати бажану
                к-сть занять на тиждень.
              </li>
              <li>
                Заняття відбуваються при умові вашої присутності на уроці. У
                випадку вашої відсутності на заздалегіть заплановане заняття -
                воно вважається “пропущеним” і оплата за нього не повертається.
                Щоб не допускати таких ситуацій, просимо Вас заздалегіть
                повідомляти (мінімум за 1 день до запланового заняття) про вашу
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
                записується (з платформи Zoom) та зберігається в архіві на нашій
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
      </Suspense>

      <div className={cl.checkboxWrapper}>
        <Checkbox
          className={cl.checkbox}
          isChecked={isAccepted}
          onClick={() => {
            setIsAccepted((prev) => !prev);
          }}
        />
        <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>
          Продовжуючи, Я приймаю умови{" "}
          <Link target="_blank" href="/contacts/oferta">
            <u>Публічної {"\n"}Оферти</u>
          </Link>{" "}
          та{" "}
          <Link target="_blank" href="/contacts/confidentialityPolicy">
            <u>Політики Конфідеційності</u>.
          </Link>
        </Typography>
      </div>

      <div className={cl.continue}>
        <div className={cl.line}></div>
        {isAccepted ? (
          <Link href="/education/start/schedule">
            <Button
              className={cl.btn}
              icon="triangleButtonRight"
              variant="outlined"
            >
              Продовжити
            </Button>
          </Link>
        ) : (
          <Button
            className={cl.btn}
            icon="triangleButtonRight"
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
