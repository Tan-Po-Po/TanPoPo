"use client";
import { Suspense, useEffect, useState } from "react";
import {
  ContentCard,
  Divider,
  Typography,
  Button,
  Loading,
  PaymentDialog,
} from "@/components";
import { getIconArtSrc, getIconSrc } from "@/helpers";
import Image from "next/image";
import cl from "./page.module.scss";
import {
  CourseState,
  clearCourse,
  selectCourse,
} from "@/redux/slices/course/courseSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { CourseInfo } from "./_courseInfo/courseInfo";
import { CertificateBlock } from "./_cerificateBlock/certificateBlock";
import { selectDeliveryInfo } from "@/redux/slices/deliveryInfo/deliveryInfoSlice";

export default function Page() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const courseRedux = useAppSelector(selectCourse);
  const deliveryInfoRedux = useAppSelector(selectDeliveryInfo);
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState<CourseState>();

  useEffect(() => {
    document.title = "Оплата навчання | Tanpopo";
  }, []);

  useEffect(() => {
    if (courseRedux.id) {
      setCourse(courseRedux);
    } else {
      return router.push("/");
    }
    setLoading(false);
  }, [courseRedux, router]);

  const handleClick = async () => {
    const failedPayment = searchParams.get("failedPayment");
    if (failedPayment) {
      const apiEndpoint = courseRedux.isGift ? "gift" : "education";

      const data = {
        ...courseRedux,
        ...deliveryInfoRedux,
        courseName: courseRedux.name,
      };
      setLoading(true);
      scrollTo(0, 0);
      fetch(`/api/${apiEndpoint}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(async (res) => {
          const responseData = await res.json();

          // If price changed or course is not available anymore
          if (res.status === 422) {
            setLoading(false);
            dispatch(clearCourse());
            toast(responseData.message);
            return setTimeout(() => router.push("/prices"), 3000);
          }

          if (!res.ok) {
            setLoading(false);
            return toast("Сталася помилка, спробуйте ще раз пізніше");
          }

          router.push(responseData.liqpayLink);
          return;
        })
        .catch((error) => {
          setLoading(false);
          toast(
            "Сталася помилка при відправці розкладу, спробуйте ще раз пізніше"
          );
        });
    } else if (courseRedux.liqpayLink) {
      return router.push(courseRedux.liqpayLink);
    } else {
      toast("Щось пішло не так, спробуйте ще раз пізіше");
      return setTimeout(() => {
        router.push("/prices");
      }, 5000);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main className={cl.main}>
      <Suspense fallback={<></>}>
        <PaymentDialog variant={courseRedux.isGift ? "gift" : "course"} />
      </Suspense>

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
        {course && <CourseInfo course={course} />}

        <div className={cl.line}></div>
        <ContentCard width="300px" className={cl.priceCard}>
          <Typography variant="h6">Сума до сплати:</Typography>
          <ContentCard
            className={cl.totalSum}
            width="175px"
            cardBgColor={course?.backgroundColor || "rgba(255, 192, 215, 1)"}
          >
            <Typography variant="h5">
              {course?.price || "Ціна курсу"}
            </Typography>
          </ContentCard>
        </ContentCard>
      </div>

      {course?.isGift ? (
        <CertificateBlock
          certificateType={course.certificateType!}
          className={cl.thanks}
        />
      ) : (
        <ContentCard width="640px" className={cl.thanks}>
          <Typography
            variant="body1"
            style={{ fontSize: "20px", maxWidth: "494px" }}
          >
            Ми бачимо і цінуємо ваше бажання навчатись разом з нами! Після
            оплати вашу заявку на навчання буде сформовано!
          </Typography>
          <Image
            src={getIconArtSrc("clock")}
            alt="Clock icon"
            width={151}
            height={116}
            style={{ margin: "30px 0 20px" }}
          />

          <Typography
            variant="body1"
            style={{ fontSize: "18px", maxWidth: "575px", fontWeight: 400 }}
          >
            З моменту оплати/формування заявки на навчання ми почнемо її
            опрацьовувати, після чого з вами зв’яжеться наш відділ Турботи, щоб
            узгодити всі деталі стосовно розкладу до обраного курсу навчання з
            японської мови!
          </Typography>
        </ContentCard>
      )}

      <div className={cl.paymentWrapper}>
        <Button
          className={cl.paymentBtn}
          onClick={handleClick}
          wrapperClass={cl.btnWrapper}
        >
          <ContentCard
            className={cl.paymentCard}
            cardBgColor="linear-gradient(rgba(255, 229, 221, 0.1), rgba(255,248, 181, 1))"
          >
            <Image
              alt="Іконка кредитної картки"
              src={getIconArtSrc("paymentCard")}
              width={300}
              height={200}
              quality={100}
              style={{ width: "62px", height: "49px" }}
            />
            <div className={cl.paymentText}>
              <Typography variant="h6" style={{ lineHeight: "24px" }}>
                Сплатити онлайн
              </Typography>
              <Typography variant="body2" style={{ fontSize: "18px" }}>
                щоб сформувати заявку!
              </Typography>
            </div>
          </ContentCard>
          <span className={cl.shine}></span>
        </Button>

        <Image
          src={getIconSrc("arrowThinDown")}
          alt="Стрілка"
          width={51}
          height={25}
          style={{ rotate: "180deg", marginTop: "55px" }}
        />
      </div>
    </main>
  );
}
