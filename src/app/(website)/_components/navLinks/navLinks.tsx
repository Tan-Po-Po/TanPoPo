"use client";
import cl from "./navLinks.module.scss";
import { Typography, ContentCard, Dialog } from "@/components";
import { getIconArtSrc, getValidClassNames } from "@/helpers";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, useState } from "react";
import ArrowIcon from "public/icons/arrowThinDown.svg";

export function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<null | ReactElement>(null);

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={cl.dialog}
      >
        {content}
      </Dialog>
      <section className={cl.navLinks}>
        <Link href="#personalCabinet" scroll>
          <ContentCard className={cl.card} width="283px" height="261px">
            <Image
              src={getIconArtSrc("laptop2")}
              width={126}
              height={87}
              alt="Laptop icon"
              style={{ marginTop: "5px" }}
            />
            <Typography
              variant="body1"
              style={{ fontSize: "17px", lineHeight: "21px", width: "255px" }}
              align="center"
            >
              Усі матеріали до курсів розташовані на сучасній
              навчально-інтерактивній <u>онлайн-платформі</u>.
            </Typography>
          </ContentCard>
        </Link>

        <Link href="#courseFormats">
          <ContentCard className={cl.card} width="283px" height="261px">
            <Image
              src={getIconArtSrc("boyAndGirl")}
              width={105}
              height={93}
              alt="Boy and girl with laptop icon"
            />
            <Typography
              variant="h3"
              style={{ fontSize: "17px", lineHeight: "21px" }}
              align="center"
            >
              <u>Усі можливі види курсів</u>: онлайн-курси з сенсеєм,
              відеокурси, аудіокурси, книжкові курси.
            </Typography>
          </ContentCard>
        </Link>

        <ContentCard
          className={cl.card}
          width="283px"
          height="261px"
          onClick={() => {
            setContent(scheduleContent);
            setIsOpen(true);
          }}
        >
          <Image
            src={getIconArtSrc("calendar3")}
            width={94}
            height={102}
            alt="Calendar icon"
          />
          <Typography
            variant="body1"
            style={{ fontSize: "17px", lineHeight: "21px" }}
            align="center"
          >
            Зручне <u>формування власного графіку</u> навчання на будь-який курс
            прямо на сайті!
          </Typography>
        </ContentCard>

        <ContentCard
          className={cl.card}
          width="283px"
          height="261px"
          onClick={() => {
            setContent(designContent);
            setIsOpen(true);
          }}
        >
          <Image
            src={getIconArtSrc("cellphone")}
            width={50}
            height={98}
            alt="Cellphone icon"
          />
          <Typography
            variant="body1"
            style={{ fontSize: "17px", lineHeight: "21px" }}
            align="center"
          >
            Вивчення японської <br />
            <u>на будь-якому девайсі</u>: комп’ютер / ноутбук /телефон /
            планшет.
          </Typography>
        </ContentCard>

        <Link href="/library">
          <ContentCard className={cl.card} width="283px" height="261px">
            <Image
              src={getIconArtSrc("university")}
              width={105}
              height={90}
              alt="University icon"
              style={{ marginTop: "5px" }}
            />
            <Typography
              variant="body1"
              style={{ fontSize: "17px", lineHeight: "21px" }}
              align="center"
            >
              Онлайн-Бібліотека додаткових матеріалів,{" "}
              <u>безкоштовних мінікурсів</u>, навчального контенту.
            </Typography>
          </ContentCard>
        </Link>

        <Link href="#learningFormats">
          <ContentCard className={cl.card} width="283px" height="261px">
            <Image
              src={getIconArtSrc("teacher")}
              width={124}
              height={101}
              alt="Teacher icon"
            />
            <Typography
              variant="h1"
              style={{ fontSize: "17px", lineHeight: "21px" }}
              align="center"
            >
              Навчання японської <u>онлайн з сенсеєм</u>
              ,
              <br /> в міні-групах(2-5 осіб)
              <br />
              або індивідуально.
            </Typography>
          </ContentCard>
        </Link>

        <ContentCard
          className={cl.card}
          width="283px"
          height="261px"
          onClick={() => {
            setContent(paymentContent);
            setIsOpen(true);
          }}
        >
          <Image
            src={getIconArtSrc("paymentCard")}
            width={107}
            height={84}
            alt="Payment card icon"
            style={{ marginTop: "5px" }}
          />
          <Typography
            variant="body1"
            style={{ fontSize: "17px", lineHeight: "21px" }}
            align="center"
          >
            Швидка та безпечна <u>онлайн-оплата уроків</u> та будь-якого нашого
            курсу <br />в декілька кліків!
          </Typography>
        </ContentCard>

        <Link href="/shop">
          <ContentCard className={cl.card} width="283px" height="261px">
            <Image
              src={getIconArtSrc("store")}
              width={102}
              height={106}
              alt="Store icon"
            />
            <Typography
              variant="body1"
              style={{ fontSize: "17px", lineHeight: "21px" }}
              align="center"
            >
              Крамничка <u>авторських навчальних продуктів</u> по вивченню
              японської мови екслюзивно українською!
            </Typography>
          </ContentCard>
        </Link>

        <Link href="/test-intro">
          <ContentCard className={cl.card} width="283px" height="261px">
            <Image
              src={getIconArtSrc("testBlank")}
              width={73}
              height={98}
              alt="Test blank icon"
            />
            <Typography
              variant="body1"
              style={{ fontSize: "17px", lineHeight: "21px" }}
              align="center"
            >
              Онлайн-тест, який допоможе визначити <br />
              <u>ваш поточний рівень</u> володіння мовою.
            </Typography>
          </ContentCard>
        </Link>
      </section>
    </>
  );
}

const scheduleContent = (
  <div className={getValidClassNames(cl.dialogContainer, cl.scheduleDialog)}>
    <ContentCard
      cardBgColor="linear-gradient(#FFFFFF, #FFFBF1)"
      width="576px"
      height="329px"
      className={cl.dialogCard}
    >
      <Typography
        variant="body1"
        style={{ fontSize: "21px", lineHeight: "25px" }}
      >
        На нашому сайті можна легко формувати графік навчання на будь-який наш
        <br />
        онлайн-курс з сенсеєм!
      </Typography>

      <Image
        src={getIconArtSrc("calendar3")}
        width={98}
        height={106}
        alt="Calendar icon"
      />
      <Typography
        variant="body1"
        style={{ fontSize: "21px", lineHeight: "25px" }}
      >
        Оформлюючи курс, Ви можете самостійно обрати зручний для вас розклад!
      </Typography>
    </ContentCard>

    <div>
      <ArrowIcon
        style={{ stroke: "black", margin: "36px 0px" }}
        width={51}
        height={25}
        alt="Arrow icon"
      />
    </div>

    <Image className={cl.scheduleImage} src="" alt="Фото розкладу" />
    <Typography
      variant="subtitle1"
      align="center"
      style={{ lineHeight: "18px", marginTop: "30px" }}
      className={cl.scheduleText}
    >
      Обираючи бажаний онлайн-курс з сенсеєм, під час оформлення на нашому сайті
      Ви знайдете всю необхідну додаткову інформацію про те як легко сформувати
      ваш бажаний графік, а також всю важливу інформацію стосовно обраного вами
      курсу та формату навчання!
    </Typography>
  </div>
);

const designContent = (
  <div className={getValidClassNames(cl.dialogContainer, cl.designDialog)}>
    <ContentCard
      cardBgColor="linear-gradient(#FFFFFF, #FFFBF1)"
      width="576px"
      height="329px"
      className={cl.dialogCard}
    >
      <Typography
        variant="body1"
        style={{ fontSize: "21px", lineHeight: "25px" }}
      >
        Адаптивний дизайн сайту довзволяє вивчати японську на будь-якому вашому
        улюбленому пристрої!
      </Typography>
      <Image
        src={getIconArtSrc("cellphone")}
        width={50}
        height={98}
        alt="Cellphone icon"
        style={{ margin: "10px 0" }}
      />
      <Typography
        variant="body1"
        style={{ fontSize: "21px", lineHeight: "25px" }}
      >
        Навчайтесь коли і де Вам зручно, без прив’язки до конкретного девайсу!
      </Typography>
    </ContentCard>

    <div>
      <ArrowIcon
        style={{ stroke: "black", margin: "36px 0px" }}
        width={51}
        height={25}
        alt="Arrow icon"
      />
    </div>

    <Image
      src={"/images/adaptive.gif"}
      width={486}
      height={364}
      alt="Адаптивний дизайн"
      style={{
        width: "100%",
        maxWidth: "486px",
        height: "auto",
        borderRadius: "10px",
        border: "2px solid black",
      }}
    />
  </div>
);

const paymentContent = (
  <div className={getValidClassNames(cl.dialogContainer, cl.paymentDialog)}>
    <ContentCard
      cardBgColor="linear-gradient(#FFFFFF, #FFFBF1)"
      width="576px"
      height="329px"
      className={cl.dialogCard}
    >
      <Typography
        variant="body1"
        style={{ fontSize: "21px", lineHeight: "25px" }}
      >
        Легко здійснюйте
        <br /> онлайн-оплату за уроки та навчальні курси на нашому сайті в
        мінімум кліків!
      </Typography>
      <Image
        src={getIconArtSrc("paymentCard")}
        width={107}
        height={84}
        alt="Payment card icon"
        style={{ marginTop: "5px" }}
      />
      <Typography
        variant="body1"
        style={{ fontSize: "21px", lineHeight: "25px" }}
      >
        Швидка та безпечна оплата в зручний для Вас спосіб!
      </Typography>
    </ContentCard>

    <div>
      <ArrowIcon
        style={{ stroke: "black", margin: "36px 0px" }}
        width={51}
        height={25}
        alt="Arrow icon"
      />
    </div>

    <Image
      src={"/images/liqpay.png"}
      width={514}
      height={375}
      alt="Методи оплати"
      style={{
        width: "100%",
        maxWidth: "514px",
        height: "auto",
        borderRadius: "10px",
        border: "2px solid black",
      }}
    />
  </div>
);
