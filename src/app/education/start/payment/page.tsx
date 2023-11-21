"use client";
import React from "react";
import { ContentCard, Divider, Dialog, Typography, Button } from "@/components";
import { getIconArtSrc, getValidClassNames } from "@/helpers";
import Image from "next/image";
import { toast } from "react-toastify";
import cl from "./page.module.scss";

export default function Page() {
  const [open, setOpen] = React.useState(false);

  return (
    <main className={cl.main}>
      <Divider
        className={cl.divider}
        firsRow="3. Оплатіть курс та розпочніть навчання!"
        bgColor="linear-gradient(180deg, #FFE352 0%, #FFED72 70%)"
        width="555px"
      />
      <Typography className={cl.infoHeader} variant="h5">
        Основна інформація про обраний курс:
      </Typography>

      <div className={cl.courseWrapper}>
        <ContentCard
          width="855px"
          className={cl.courseInfo}
          labelPosition="top"
          label={
            <>
              <Typography variant="h5">МОВНИЙ НІНДЗЯ</Typography>
              <Typography variant="body2">言語の忍者</Typography>
            </>
          }
          labelBgColor="rgba(255, 192, 215, 1)"
        >
          <ContentCard
            width="345px"
            height="135px"
            cardBgColor="rgba(255, 192, 215, 1)"
          >
            <Typography variant="body1">Формат навчання:</Typography>
            <Typography variant="body1">
              Онлайн-курс з Сенсеєм (Міні-група 2-5 чол.)
            </Typography>
          </ContentCard>

          <ContentCard
            width="345px"
            height="135px"
            cardBgColor="rgba(255, 192, 215, 1)"
          >
            <Typography variant="body1">Занять в тиждень:</Typography>
            <Typography variant="body1">2 заняття в тиждень</Typography>
          </ContentCard>

          <ContentCard
            width="345px"
            height="135px"
            cardBgColor="rgba(255, 192, 215, 1)"
          >
            <Typography variant="body1">Тривалість онлайн-уроку:</Typography>
            <Typography variant="body1">
              70 хвилин / заняття (рівень: JLPT N4+)
            </Typography>
          </ContentCard>

          <ContentCard
            width="345px"
            height="135px"
            cardBgColor="rgba(255, 192, 215, 1)"
          >
            <Typography variant="body1">Обрана к-сть уроків:</Typography>
            <Typography variant="body1">
              15 онлайн-уроків (7.5 тижнів навчання)
            </Typography>
          </ContentCard>
        </ContentCard>
        <div className={cl.line}></div>
        <ContentCard width="410px" height="240px">
          <Typography variant="h6">Сума до сплати:</Typography>
          <ContentCard
            className={cl.totalSum}
            width="175px"
            cardBgColor="linear-gradient(91deg, rgba(255, 156, 156, 0.75) 0%, rgba(255, 239, 156, 0.75) 28.13%, rgba(156, 219, 255, 0.75) 71.35%, rgba(255, 156, 233, 0.75) 100%)"
          >
            <Typography variant="h5">4150 грн</Typography>
          </ContentCard>
          <Typography variant="subtitle1">
            Просимо в призначені платежу вказати прізвище та ініціали учня.
          </Typography>
        </ContentCard>
      </div>

      <Typography variant="h6" style={{ marginTop: "100px" }}>
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

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className={cl.dialog}
        contentClassName={cl.content}
      >
        <Typography variant="body2" className={cl.info}>
          {"Всю інформацію стосовно навчального \nкурсу було щойно надіслано на вашу \nелектронну скриньку!"}
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
