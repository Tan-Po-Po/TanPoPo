import { Typography, ContentCard } from "@/components";
import Image from "next/image";
import cl from "./page.module.scss";
import { getIconArtSrc } from "@/helpers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Навчальний Період | TanPoPo",
};

export default function Home() {
  return (
    <main className={cl.main}>
      <div className={cl.container}>
        <ContentCard width="850px" className={cl.card}>
          <div>
            <Typography variant="h5" style={{ fontSize: "28px" }}>
              Про навчальний період
            </Typography>
            <Typography
              variant="h6"
              style={{ fontSize: "23px", lineHeight: "25px" }}
            >
              {" "}
              для відеокурсів / аудіокурсів:
            </Typography>
          </div>

          <Image
            src={getIconArtSrc("girlStudent")}
            alt="Girl student"
            width={95}
            height={111}
          />

          <ul>
            <li>
              <Typography
                variant="body1"
                style={{ fontSize: "18px", lineHeight: "24px" }}
              >
                <u className={cl.gold}>Навчальний Період</u> - це к-сть днів
                доступу до обраного курсу на платформі.
              </Typography>
            </li>

            <li>
              <Typography
                variant="body1"
                style={{ fontSize: "18px", lineHeight: "24px" }}
              >
                Усі навчальні матеріали курсу, завдання та тести на
                самоперевірку зберігаються на Інтерактивній Платформі і є
                доступними в Особистому Кабінеті учня протягом всього{" "}
                <u className={cl.gold}>Навчального Періоду.</u>
              </Typography>
            </li>

            <li>
              <Typography
                variant="body1"
                style={{ fontSize: "18px", lineHeight: "24px" }}
              >
                Усі можливості нашої Бібліотеки TanPoPo, знижка 10% на ВСІ
                товари нашої Крамниці, а також ексклюзивні знижки на товари від
                наших партнерів надаються учневі на весь{" "}
                <u className={cl.gold}>Навчальний Період.</u>
              </Typography>
            </li>

            <li>
              <Typography
                variant="body1"
                style={{ fontSize: "18px", lineHeight: "24px" }}
              >
                Іменний Сертифікат про успішне проходження курсу буде завжди
                доступним на Інтерактивній Платформі в Особистому Кабінеті учня.
              </Typography>
            </li>
          </ul>
        </ContentCard>

        <div className={cl.line}></div>

        <ContentCard
          width="510px"
          label={
            <Typography
              variant="body1"
              style={{ fontSize: "19px", textTransform: "uppercase" }}
            >
              Навчальний Період
            </Typography>
          }
          labelBgColor="linear-gradient(180deg, #FDFF87 0%, #FAD26C 100%)"
          className={cl.formulaCard}
        >
          <Typography
            variant="subtitle1"
            className={cl.explanation}
            style={{ lineHeight: "21px" }}
          >
            В описі обраного вами курсу, Ви знайдете інформацію про к-сть днів
            доступу до курсу на навчальній платформі, у вигляді:
          </Typography>

          <Typography
            variant="body1"
            className={cl.gold}
            style={{ lineHeight: "21px", fontSize: "18px" }}
          >
            Навчальна платформа: __ днів доступу
          </Typography>
        </ContentCard>
      </div>
    </main>
  );
}
