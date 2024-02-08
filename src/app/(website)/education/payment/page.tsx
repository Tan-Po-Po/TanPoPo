"use client";
import { useEffect, useState } from "react";
import {
  ContentCard,
  Divider,
  Dialog,
  Typography,
  Button,
  Loading,
  RequisitesSmall,
} from "@/components";
import { getIconArtSrc } from "@/helpers";
import Image from "next/image";
import cl from "./page.module.scss";
import { CourseState, selectCourse } from "@/redux/slices/course/courseSlice";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Оплата навчання | Tanpopo',
}
export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState<CourseState>();

  const courseRedux = useAppSelector(selectCourse);

  useEffect(() => {
    if (courseRedux) {
      setCourse(courseRedux);
    } else {
      return router.push("/");
    }
    setLoading(false);
  }, [courseRedux, router]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className={cl.main}>
      <Divider
        className={cl.divider}
        firstRow={
          course?.isGift
            ? "2. Оплатіть обраний курс та"
            : "3. Оплатіть курс та розпочніть навчання!"
        }
        secondRow={course?.isGift ? " отримайте ваш сертифікат!" : ""}
        bgColor="linear-gradient(180deg, #FFE352 0%, #FFED72 70%)"
        width="555px"
      />
      <Typography
        className={cl.infoHeader}
        variant="h5"
        style={{ textAlign: "center" }}
      >
        Основна інформація про обраний курс:
      </Typography>

      <div className={cl.courseWrapper}>
        <ContentCard
          width="855px"
          className={cl.courseInfo}
          labelPosition="top"
          label={
            <>
              <Typography variant="h5">
                {course?.name || "Course name"}
              </Typography>
              <Typography variant="body2">
                {course?.japanName || "Course japanese name"}
              </Typography>
            </>
          }
          labelBgColor="rgba(255, 192, 215, 1)"
        >
          <ContentCard
            className={cl.card}
            width="345px"
            height="135px"
            cardBgColor="rgba(255, 192, 215, 1)"
          >
            <Typography variant="body1">Формат навчання:</Typography>
            <Typography variant="body1">
              <b>
                {course?.format === "Міні-група"
                  ? "Онлайн-курс з Сенсеєм (Міні-група 2-5 чол.)"
                  : "Індивідуально"}
              </b>
            </Typography>
          </ContentCard>

          <ContentCard
            className={cl.card}
            width="345px"
            height="135px"
            cardBgColor="rgba(255, 192, 215, 1)"
          >
            {course?.isGift ? (
              <>
                <Typography variant="body1">Обрана к-сть уроків:</Typography>
                <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
                  <b>{`${course?.lessons} онлайн-уроків\n(${
                    course?.lessons! / (course?.lessonsPerWeek || 2)
                  }тижнів навчання)`}</b>
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="body1" style={{ fontSize: "19px" }}>
                  Занять в тиждень:
                </Typography>
                <Typography variant="body1">
                  <b>
                    {course?.format === "Міні-група"
                      ? 2
                      : course?.lessonsPerWeek || "Lessons per week"}{" "}
                    заняття <br />в тиждень
                  </b>
                </Typography>
              </>
            )}
          </ContentCard>

          <ContentCard
            className={cl.card}
            width="345px"
            height="135px"
            cardBgColor="rgba(255, 192, 215, 1)"
          >
            <Typography variant="body1">Тривалість онлайн-уроку:</Typography>
            <Typography variant="body1">
              <b>70 хвилин / заняття (рівень: JLPT {course?.level})</b>
            </Typography>
          </ContentCard>

          <ContentCard
            className={cl.card}
            width="345px"
            height="135px"
            cardBgColor="rgba(255, 192, 215, 1)"
          >
            {course?.isGift ? (
              <>
                <Typography variant="body1">Вид сертифікату:</Typography>
                {course?.certificateType === "Електронний сертифікат" ? (
                  <Typography variant="body1">
                    <b>{"Електронний\nподарунковий сертифікат"}</b>
                  </Typography>
                ) : (
                  <Typography variant="body1">
                    <b>{"Іменний Друкований\n+120грн(друк та доставка)"}</b>
                  </Typography>
                )}
              </>
            ) : (
              <>
                <Typography variant="body1">
                  Обрана кількість уроків:
                </Typography>

                <Typography variant="body1">
                  <b>
                    {course?.lessons} онлайн-уроків <br />(
                    {course?.lessons! / (course?.lessonsPerWeek || 2)}
                    тижнів навчання)
                  </b>
                </Typography>
              </>
            )}
          </ContentCard>
        </ContentCard>
        <div className={cl.line}></div>
        <ContentCard width="410px" className={cl.priceCard}>
          <Typography variant="h6">Сума до сплати:</Typography>
          <ContentCard
            className={cl.totalSum}
            width="175px"
            cardBgColor="linear-gradient(91deg, rgba(255, 156, 156, 0.75) 0%, rgba(255, 239, 156, 0.75) 28.13%, rgba(156, 219, 255, 0.75) 71.35%, rgba(255, 156, 233, 0.75) 100%)"
          >
            <Typography variant="h5">
              {course?.price || "Curse price"}
            </Typography>
          </ContentCard>
          <Typography variant="subtitle1" style={{ lineHeight: "16px" }}>
            {course?.isGift
              ? "Просимо в призначені платежу\nвказати ваше прізвище та ініціали.\n(якщо Ви оплачуєте не зі своєї картки)"
              : "Просимо в призначені платежу вказати прізвище та ініціали учня."}
          </Typography>
        </ContentCard>
      </div>

      <RequisitesSmall />

      {course?.isGift ? (
        <Link href="/education/checkout">
          <ContentCard width="585px" className={cl.thanks}>
            <div>
              <Typography variant="h5">З моменту здійснення оплати</Typography>
              <Typography variant="body1">
                отримуйте сертифікат протягом дня
              </Typography>
            </div>

            <Image
              src={getIconArtSrc("certificate4")}
              alt="Certificate"
              width={106}
              height={79}
            />

            <Link href="/education/checkout" target="_blank">
              <div className={cl.btnWrapper}>
                <Button
                  className={cl.thanksBtn}
                  variant="outlined"
                  style={{ width: "auto" }}
                >
                  <Typography variant="body1">
                    {"Подарунковий\nсертифікат"}
                  </Typography>
                </Button>
                <Image
                  src="/icons/arrowLong.svg"
                  alt="arrow"
                  width={65}
                  height={55}
                  className={cl.arrow}
                />
              </div>
            </Link>
          </ContentCard>
        </Link>
      ) : (
        <>
          <Typography variant="h6" align="center" className={cl.thanksHeader}>
            Після того, як ми побачимо вашу оплату по обраному курсу, ми
            якнайшвидше розпочнемо формувати графік занять і сконтактуємось з
            вами для його підтвердження!
          </Typography>

          <ContentCard width="600px" className={cl.thanks}>
            <Typography variant="body1">
              Ми бачимо і цінуємо ваше бажання навчатись разом з нами! Після
              оплати та успішного формування/погодження розкладу, Ви відразу
              розпочинаєте вивчення японської мови!
            </Typography>
            <Image
              src={getIconArtSrc("clock")}
              alt="Clock icon"
              width={125}
              height={100}
            />

            <Typography variant="body1">
              Всю інформацію стосовно навчального курсу було щойно надіслано на
              вашу електронну скриньку!
            </Typography>
          </ContentCard>

          <div className={cl.thanksBlock}>
            <Typography variant="h6">Дякуємо, що обрали</Typography>
            <Typography variant="h1">TanPoPo💛</Typography>
          </div>
        </>
      )}
    </main>
  );
}
