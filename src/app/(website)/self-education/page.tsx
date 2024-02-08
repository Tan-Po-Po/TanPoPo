import { Typography, ContentCard } from "@/components";
import Image from "next/image";
import cl from "./page.module.scss";
import { getIconArtSrc } from "@/helpers";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Самостійне навчання | Tanpopo',
}

export default function Home() {
  return (
    <main className={cl.main}>
      <Typography variant="h4" className={cl.header} align="center">
        Самостійне Навчання
      </Typography>

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
                Усі навчальні матеріали курсу (а також тести на перевірку та
                інтерактивні домашні завдання) зберігаються на Інтерактивній
                Платформі і є доступними в Особистому Кабінеті учня протягом 
                <u className={cl.gold}>Навчального Періоду.</u>
              </Typography>
            </li>

            <li>
              <Typography
                variant="body1"
                style={{ fontSize: "18px", lineHeight: "24px" }}
              >
                Усі можливості нашої Бібліотеки TanPoPo, а також знижки на всі
                наші авторські продукти та товари від наших партнерів надаються
                на весь 
                <u className={cl.gold}>Навчальний Період</u>
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
          <Typography variant="subtitle1">
            Дуже легко визначається за формулою:
          </Typography>

          <Typography variant="h6" className={cl.gold}>
            К-сть придбаних уроків * 5 днів
          </Typography>

          <Typography
            variant="subtitle1"
            className={cl.explanation}
            style={{ lineHeight: "21px" }}
          >
            Наприклад: якщо Ви придбали 10 уроків, тоді 10 * 5 = 50 днів доступу
            до курсу <br />
            та всіх можливостей нашого навчання!
          </Typography>
        </ContentCard>
      </div>
    </main>
  );
}
