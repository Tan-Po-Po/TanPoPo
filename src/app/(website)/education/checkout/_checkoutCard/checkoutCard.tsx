import React from "react";
import Image from "next/image";
import { ContentCard, Typography } from "@/components";
import { CourseState } from "@/redux/slices/course/courseSlice";
import cl from "../page.module.scss";
import { getIconSrc } from "@/helpers";
type Props = { course: CourseState };

const CheckoutCard: React.FC<Props> = ({ course }) => {
  if (course.isGift) {
    return (
      <ContentCard
        className={cl.card}
        width="680px"
        cardBgColor="linear-gradient(91deg, rgba(255, 156, 156, 0.75) 0%, rgba(255, 239, 156, 0.75) 28.13%, rgba(156, 219, 255, 0.75) 71.35%, rgba(255, 156, 233, 0.75) 100%)"
      >
        <Typography
          variant="h6"
          style={{ fontSize: "21px", whiteSpace: "pre-line" }}
        >
          {course?.certificateType === "Електронний сертифікат"
            ? "Протягом дня ми надішлимо ваш електронний\nподарунковий сертифікат та промокод для\nактивації обраного курсу!"
            : "Зовсім скоро ми будемо друкувати ваш іменний\nподарунковий сертифікат та разом з промокодом\nдля активації курсу - відправляти на вашу адресу!"}
        </Typography>

        <Image
          src={getIconSrc("present")}
          alt="Подарунок"
          width={60}
          height={65}
        />

        <Typography variant="body2">
          {
            " Активувати подарунковий курс за допомогою отриманого\nпромокоду дуже легко! Ви можете переглянути коротку\nінструкцію по активації курсу насторінці “Контакти”."
          }
        </Typography>
      </ContentCard>
    );
  }

  return (
    <ContentCard
      className={cl.card}
      width="680px"
      cardBgColor="linear-gradient(91deg, rgba(255, 156, 156, 0.75) 0%, rgba(255, 239, 156, 0.75) 28.13%, rgba(156, 219, 255, 0.75) 71.35%, rgba(255, 156, 233, 0.75) 100%)"
    >
      <Typography
        variant="h6"
        style={{ fontSize: "22px", whiteSpace: "pre" }}
      >
        {
          " Заявку на навчання успішно сформовано! Наш відділ\nТурботи невдовзі зв’яжеться з вами, щоб узгодити\nвсі деталі стосовно вашого навчання!"
        }
      </Typography>

      <Image src={getIconSrc("clipboard")} alt="Курс" width={63} height={76} />

      <Typography variant="body2">
        {
          "Всю інформацію стосовно вашого замовлення було\nщойно надіслано на вашу електронну скриньку!"
        }
      </Typography>
    </ContentCard>
  );
};

export { CheckoutCard };
