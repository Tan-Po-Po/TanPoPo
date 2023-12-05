"use client";
import { useEffect, useState } from "react";
import {
  ContentCard,
  Divider,
  Dialog,
  Typography,
  Button,
  Loading,
} from "@/components";
import { getIconArtSrc } from "@/helpers";
import Image from "next/image";
import cl from "./page.module.scss";
import { CourseState, selectCourse } from "@/redux/slices/course/courseSlice";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
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
        secondRow={course?.isGift ? "отримайте ваш сертифікат!" : ""}
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
              {course?.format === "Міні-група"
                ? "Онлайн-курс з Сенсеєм (Міні-група 2-5 чол.)"
                : "Індивідуально"}
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
                <Typography variant="body1">
                  {`${course?.lessons} онлайн-уроків\n(${
                    course?.lessons! / (course?.lessonsPerWeek || 2)
                  }тижнів навчання)`}
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="body1">Занять в тиждень:</Typography>
                <Typography variant="body1">
                  {course?.format === "Міні-група"
                    ? 2
                    : course?.lessonsPerWeek || "Lessons per week"}{" "}
                  заняття в тиждень
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
              70 хвилин / заняття (рівень: JLPT {course?.level})
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
                    {"Електронний\nподарунковий сертифікат"}
                  </Typography>
                ) : (
                  <Typography variant="body1">
                    {"Іменний Друкований\n+120грн(друк та доставка)"}
                  </Typography>
                )}
              </>
            ) : (
              <>
                <Typography variant="body1">
                  {course?.lessons} онлайн-уроків (
                  {course?.lessons! / (course?.lessonsPerWeek || 2)}
                  тижнів навчання)
                </Typography>
              </>
            )}
          </ContentCard>
        </ContentCard>
        <div className={cl.line}></div>
        <ContentCard width="410px">
          <Typography variant="h6">Сума до сплати:</Typography>
          <ContentCard
            className={cl.totalSum}
            width="175px"
            cardBgColor="linear-gradient(91deg, rgba(255, 156, 156, 0.75) 0%, rgba(255, 239, 156, 0.75) 28.13%, rgba(156, 219, 255, 0.75) 71.35%, rgba(255, 156, 233, 0.75) 100%)"
          >
            <Typography variant="h5">
              {course?.price || "Cpurse price"}
            </Typography>
          </ContentCard>
          <Typography variant="subtitle1" style={{ lineHeight: "16px" }}>
            {course?.isGift
              ? "Просимо в призначені платежу\nвказати ваше прізвище та ініціали.\n(якщо Ви оплачуєте не зі своєї картки)"
              : "Просимо в призначені платежу вказати прізвище та ініціали учня."}
          </Typography>
        </ContentCard>
      </div>

      <Typography
        variant="h6"
        style={{ marginTop: "100px", textAlign: "center" }}
      >
        Швидка оплата за QR-кодом нашої школи:
      </Typography>

      <div className={cl.qrCodes}>
        <ContentCard width="250px">
          <Typography variant="body1">QR-код Monobank</Typography>
          <Image
            width={174}
            height={169}
            src="/qrCodes/mono.jpg"
            alt="Monobank QRCode"
          />
        </ContentCard>

        <ContentCard width="250px">
          <Typography variant="body1">QR-код Privat24</Typography>
          <Image
            width={161}
            height={161}
            src="/qrCodes/privat24.jpg"
            alt="Privat24 QRCode"
          />
        </ContentCard>
      </div>

      <Typography variant="h6">АБО</Typography>

      <ContentCard
        className={cl.requisites}
        width="515px"
        cardBgColor="linear-gradient(91deg, rgba(255, 156, 156, 0.75) 0%, rgba(255, 239, 156, 0.75) 28.13%, rgba(156, 219, 255, 0.75) 71.35%, rgba(255, 156, 233, 0.75) 100%)"
      >
        <Typography variant="h6">Наші реквізити для оплати:</Typography>
        <ContentCard className={cl.card} width="185px">
          <Typography variant="h6">ЕДРПОУ:</Typography>
          <Typography variant="body2">31485189</Typography>
        </ContentCard>

        <ContentCard className={cl.card} width="365px">
          <Typography variant="h6">IBAN:</Typography>
          <Typography variant="body2">UA354787040000026548054312944</Typography>
        </ContentCard>

        <Typography variant="body2">
          <u>Повні реквізити компанії</u>
        </Typography>
        <Typography variant="body2">
          <b>ФОП Селіверстова Тетяна Дмитрівна</b>
        </Typography>
      </ContentCard>

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
            <Link href="/education/checkout">
              <Button
                className={cl.thanksBtn}
                variant="outlined"
                style={{ width: "auto" }}
              >
                <Typography variant="body1">
                  {"Подарунковий\nсертифікат"}
                </Typography>
              </Button>
            </Link>
          </ContentCard>
        </Link>
      ) : (
        <ContentCard width="475px" className={cl.thanks}>
          <Typography variant="body1">
            Після оплати та успішного формування/погодження розкладу, Ви відразу
            розпочинаєте вивчення японської мови!
          </Typography>
          <Image
            src={getIconArtSrc("clock")}
            alt="Clock icon"
            width={125}
            height={100}
          />

          <Button
            onClick={() => setOpen(true)}
            className={cl.thanksBtn}
            variant="outlined"
          >
            {"Дякуємо, що обрали \nTanPoPo💛"}
          </Button>
        </ContentCard>
      )}

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className={cl.dialog}
        contentClassName={cl.content}
      >
        <Typography variant="body2" className={cl.info}>
          {
            "Всю інформацію стосовно навчального \nкурсу було щойно надіслано на вашу \nелектронну скриньку!"
          }
        </Typography>

        <ContentCard
          className={cl.card}
          width="615px"
          cardBgColor="linear-gradient(91deg, rgba(255, 156, 156, 0.75) 0%, rgba(255, 239, 156, 0.75) 28.13%, rgba(156, 219, 255, 0.75) 71.35%, rgba(255, 156, 233, 0.75) 100%)"
        >
          <Typography variant="h6">
            Ми бачимо і цінуємо ваше бажання навчатись разом з нами!{" "}
          </Typography>
          <Typography variant="body2">
            Після того, як ми побачимо вашу оплату по обраному курсу, Ми
            якнайшвидше розпочнемо формувати Ваш графік занять для обраного
            курсу і сконтактуємось разом з вами для його підтвердження!
          </Typography>
        </ContentCard>

        <div className={cl.thanksBlock}>
          <Typography variant="h6">Дякуємо, що обрали</Typography>
          <Typography variant="h1">TanPoPo💛</Typography>
        </div>
      </Dialog>
    </main>
  );
}
