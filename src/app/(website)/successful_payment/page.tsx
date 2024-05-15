import { ContentCard, Typography } from "@/components";
import { getIconSrc, getValidClassNames } from "@/helpers";
import Image from "next/image";
import cl from "./page.module.scss";

export const metadata = {
  title: "Початок навчання | TanPoPo",
  description: "Початок навчання в школі TanPoPo",
};

export default function Page() {
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
          style={{ fontSize: "26px", marginTop: "105px" }}
          align="center"
        >
          Вітаємо, оплата пройшла успішно!
        </Typography>

        <ContentCard
          className={cl.card}
          width="680px"
          cardBgColor="linear-gradient(91deg, rgba(255, 156, 156, 0.75) 0%, rgba(255, 239, 156, 0.75) 28.13%, rgba(156, 219, 255, 0.75) 71.35%, rgba(255, 156, 233, 0.75) 100%)"
        >
          <Typography variant="body1">
            {
              "Незабаром ми надамо доступ до уроків обраного \n курсу для вашого  Особистого Кабінету учня \n на навчальні платформі."
            }
          </Typography>

          <Image
            src={getIconSrc("clipboard")}
            alt="Курс"
            width={63}
            height={76}
          />

          <Typography variant="body1">
            Приємного навчання!
            <br />
            <b
              style={{
                fontSize: "23px",
                display: "inline-block",
                marginTop: "15px",
              }}
            >
              日本語の授業を楽しんでください！
            </b>
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
