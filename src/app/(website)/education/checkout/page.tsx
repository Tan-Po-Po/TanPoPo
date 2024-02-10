"use client";
import { useEffect, useState } from "react";
import { ContentCard, Typography, Loading } from "@/components";
import { getIconSrc, getValidClassNames } from "@/helpers";
import Image from "next/image";
import cl from "./page.module.scss";
import { CourseState, selectCourse } from "@/redux/slices/course/courseSlice";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState<CourseState>();

  const courseRedux = useAppSelector(selectCourse);
  
  useEffect(() => {
    document.title = "Навчання | Tanpopo";
  }, []);

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
      <div className={cl.wrapper}>
        <Image
          alt=""
          src="/logo/colorConfettiLeft.png"
          width={466}
          height={599}
          className={getValidClassNames(cl.confetti, cl.confettiLeft)}
        />
        <Image
          alt=""
          src="/logo/colorConfettiRight.png"
          width={466}
          height={599}
          className={getValidClassNames(cl.confetti, cl.confettiRight)}
        />
        <Typography variant="body2" className={cl.info}>
          {
            "Всю інформацію стосовно вашого замовлення було\nщойно надіслано на вашу електронну скриньку!"
          }
        </Typography>

        <ContentCard
          className={cl.card}
          width="680px"
          cardBgColor="linear-gradient(91deg, rgba(255, 156, 156, 0.75) 0%, rgba(255, 239, 156, 0.75) 28.13%, rgba(156, 219, 255, 0.75) 71.35%, rgba(255, 156, 233, 0.75) 100%)"
        >
          <Typography
            variant="h6"
            style={{ fontSize: "22px", whiteSpace: "pre-line" }}
          >
            {course?.certificateType === "Електронний сертифікат"
              ? "Протягом дня з моменту успішної оплати \nми надішлимо ваш електронний подарунковий\nсертифікат та промокод для активації курсу!"
              : "Протягом дня з моменту успішної оплати ми надішлимо копію електронного іменного сертифікату та промокоду для активації курсу!"}
          </Typography>

          <Image
            src={getIconSrc("present")}
            alt="Gift"
            width={60}
            height={65}
          />

          <Typography variant="body2">
            Активувати подарунковий курс за допомогою отриманого промокоду дуже
            легко! Ви можете переглянути коротку інструкцію по активації курсу
            на сторінці “Контакти”. <br />
            Тепер залишилось лише подарувати навчання!
          </Typography>
        </ContentCard>

        <div className={cl.thanksBlock}>
          <Typography variant="h6">Дякуємо, що обрали</Typography>
          <Typography variant="h1">TanPoPo💛</Typography>
        </div>
      </div>
    </main>
  );
}
