"use client";
import React from "react";
import { Typography, ContentCard, Button, Checkbox } from "@/components";
import Image from "next/image";
import cl from "./page.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Join() {
  const router = useRouter();
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxClick = () => {
    setIsChecked((prev) => !prev);
  };

  const handleButtonClick = () => {
    isChecked
      ? router.push("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
      : alert(
          "Для продовження ви маєте прийняти умови публічної оферти та політики конфіденційності"
        );
  };
  return (
    <main className={cl.main}>
      <section className={cl.benefits}>
        <Typography variant="h6" className={cl.header}>
          Реєструючись на платформі нашої школи
        </Typography>
        <Typography variant="h3">Ви автоматично отримуєте:</Typography>
        <div className={cl.cards}>
          <ContentCard width="465px" className={cl.card}>
            <Typography variant="h6">
              Безкоштовний міні-курс для початківців!
            </Typography>
            <Image
              src="/icons/art/megaPresent.png"
              alt="Present"
              width={102}
              height={98}
            />
            <Typography variant="body1">
              Бажаєте подивитись “зсередини” на навчальну платформу? Зазирність
              нанаш безкоштовний мінікурс у вигляді відеоуроків з сенсеєм,
              інтерактивними завданнями, тестами для самоперевірки та самі
              переконайтесь в якості поданих навчальних матеріалів!
            </Typography>
          </ContentCard>

          <ContentCard width="465px" className={cl.card}>
            <Typography variant="h6">
              Знижку 5% на ВСІ наші авторські продукти!
            </Typography>
            <Image
              src="/icons/art/shopCart.png"
              alt="Present"
              width={97}
              height={87}
            />
            <Typography variant="body1">
              Реєструючись на платформі отримуйте додаткові 5% знижки на всі
              наші товари поверх будь-якої акції або вже наявної знижки на нашу
              продукцію! В Особистому Кабінеті Ви знайдете промокод на знижку та
              зможете скористатись ним під час оформлення замовлення!
            </Typography>
          </ContentCard>
        </div>
      </section>

      <section className={cl.register}>
        <Typography variant="h2">Створення Особистого Кабінету</Typography>
        <Typography variant="h6">
          Усе навчання на єдиній інтерактивній платформі.
        </Typography>
        <Image
          className={cl.img}
          src="/images/boyWithLaptop.svg"
          alt="Boy with laptop"
          width={1126}
          height={512}
        />
        <Button
          onClick={handleButtonClick}
          className={cl.button}
          variant="outlined"
          icon="hat"
          style={{
            background:
              "linear-gradient(rgba(255, 250, 249, 1), rgba(255, 251, 216, 1))",
          }}
        >
          Реєстрація
        </Button>
        <div className={cl.check}>
          <Checkbox onClick={handleCheckboxClick} />
          <Typography variant="body2" className={cl.checkText}>
            Я ознайомився та приймаю умови <Link href="">Публічної Оферти</Link>{" "}
            та <Link href="">Політики Конфідеційності</Link>.
          </Typography>
        </div>
      </section>
    </main>
  );
}
