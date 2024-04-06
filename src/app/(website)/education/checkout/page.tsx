"use client";
import { useEffect, useState } from "react";
import { ContentCard, Typography, Loading } from "@/components";
import { getIconSrc, getPaymentStatus, getValidClassNames } from "@/helpers";
import Image from "next/image";
import cl from "./page.module.scss";
import {
  CourseState,
  selectCourse,
  clearCourse,
} from "@/redux/slices/course/courseSlice";
import {
  clearDeliveryInfo,
  selectDeliveryInfo,
} from "@/redux/slices/deliveryInfo/deliveryInfoSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { CheckoutCard } from "./_checkoutCard/checkoutCard";

export default function Page() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("id");
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState<CourseState>();

  const courseRedux = useAppSelector(selectCourse);
  const studentInfo = useAppSelector(selectDeliveryInfo);

  useEffect(() => {
    document.title = "Навчання | Tanpopo";

    if (!orderId || !courseRedux.id || !studentInfo.name) {
      router.push("/prices");
      return;
    }

    const checkPaymentStatus = async () => {
      const orderStatus = await getPaymentStatus(orderId);

      if (!(orderStatus === "success")) {
        router.push("/education/payment?failedPayment=true");
        return;
      }

      const dataToSend = {
        ...courseRedux,
        courseName: courseRedux.name,
        ...studentInfo,
        orderId,
      };

      const sheetName = courseRedux.isGift ? "certificates" : "courses";
      const res = await fetch(`/api/email?sheetName=${sheetName}`, {
        method: "POST",
        body: JSON.stringify(dataToSend),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        return toast("Сталася помилка, будь-ласка,оновіть сторінку");
      }
      setCourse(courseRedux);
      dispatch(clearCourse());
      dispatch(clearDeliveryInfo());
      setLoading(false);
    };

    checkPaymentStatus();
  }, []);

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

        <Typography
          variant="h6"
          style={{ fontSize: "26px", marginTop: "80px" }}
        >
          Вітаємо, оплата пройшла успішно!
        </Typography>

        {course?.isGift && (
          <Typography variant="body2" className={cl.info}>
            {
              "Всю інформацію стосовно вашого замовлення було\nщойно надіслано на вашу електронну скриньку!"
            }
          </Typography>
        )}

        {course && <CheckoutCard course={course} />}

        <div className={cl.thanksBlock}>
          <Typography variant="h6">Дякуємо, що обрали</Typography>
          <Typography variant="h1">TanPoPo💛</Typography>
        </div>
      </div>
    </main>
  );
}
