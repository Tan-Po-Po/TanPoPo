"use client";
import React, { useEffect } from "react";
import PlayButtonIcon from "/public/icons/playButton.svg";
import {
  Typography,
  ContentCard,
  Button,
  Checkbox,
  DialogGallery,
  Loading,
} from "@/components";
import Image from "next/image";
import cl from "./page.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { openGalleryDialog } from "@/redux/slices/galleryDialog/galleryDialogSlice";
import { toast } from "react-toastify";
import { getIconArtSrc, getIconSrc } from "@/helpers";

const PageClient = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleCheckboxClick = () => {
    setIsChecked((prev) => !prev);
  };

  const handleButtonClick = () => {
    isChecked
      ? (setLoading(true),
        setTimeout(
          () => router.push("https://school.tanpopo.com.ua/register"),
          3000
        ))
      : toast(
          "Для продовження ви маєте прийняти умови Публічної Оферти та Політики Конфіденційності"
        );
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <main className={cl.main}>
      <DialogGallery />

      <div>
        <Typography variant="h1" className={cl.mobileCaption} align="center">
          Долучайтесь до найбільшої <br />
          української освітньої платформи
          <br /> з вивчення японської мови!
        </Typography>
      </div>

      <section className={cl.joinBlock}>
        <div className={cl.left}>
          <Typography variant="h1" className={cl.caption} align="center">
            Долучайтесь до найбільшої <br />
            української освітньої платформи
            <br /> з вивчення японської мови!
          </Typography>

          <ContentCard width="535px" className={cl.card}>
            <Typography variant="h6" align="center">
              Створити свій Особистий Кабінет на навчальній онлайн-
              <br />
              платформі:
            </Typography>
            <Image
              alt=""
              src={getIconArtSrc("school")}
              width={300}
              height={500}
              style={{ width: "110px", height: "auto" }}
            />

            <div className={cl.buttonWrapper}>
              <Image
                src="/icons/arrowLong.svg"
                alt="arrow"
                width={65}
                height={55}
                className={cl.arrow}
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
            </div>

            <div className={cl.checkboxWrapper}>
              <Checkbox onClick={handleCheckboxClick} isChecked={isChecked} />
              <Typography variant="subtitle1">
                Я ознайомився та приймаю умови{" "}
                <Link
                  href={"/contacts/oferta"}
                  target="_blank"
                  style={{ textDecoration: "underline" }}
                >
                  Публічної Оферти
                </Link>{" "}
                та{" "}
                <Link
                  href={"/contacts/confidentialityPolicy"}
                  target="_blank"
                  style={{ textDecoration: "underline" }}
                >
                  {" "}
                  Політики Конфіденційності
                </Link>
                .
              </Typography>
            </div>
          </ContentCard>
        </div>
        <div className={cl.right}>
          <Image
            alt=""
            src="/images/library.png"
            width={541}
            height={541}
            style={{
              maxWidth: "541px",
              width: "100%",
              height: "auto",
              minWidth: "320px",
            }}
          />
        </div>
      </section>

      <section className={cl.linksBlock}>
        <Typography variant="h4" align="center">
          В нашій школі Ви знайдете ВСЕ необхідне:
        </Typography>
        <div className={cl.links}>
          <ContentCard
            width="530px"
            cardBgColor="linear-gradient(#FFFFFF, #FFFBF1)"
            className={cl.linksCard}
          >
            <Typography variant="body2">
              <Image
                src={getIconSrc("hat")}
                width={27}
                height={25}
                alt=""
                className={cl.icon}
              />
              всі можливі формати навчання на вибір
            </Typography>

            <Typography variant="body2">
              <Image
                src={getIconSrc("checkboxList")}
                width={27}
                height={25}
                alt=""
                className={cl.icon}
              />
              всі можливі види курсів японської мови
            </Typography>

            <Typography variant="body2">
              <Image
                src={getIconSrc("groupThree")}
                width={27}
                height={25}
                alt=""
                className={cl.icon}
              />
              професійна команда викладачів
            </Typography>

            <Typography variant="body2">
              <Image
                src={getIconSrc("magicPen")}
                width={27}
                height={25}
                alt=""
                className={cl.icon}
              />
              комплексна онлайн-перевірка рівня мови
            </Typography>

            <Typography variant="body2">
              <Image
                src={getIconSrc("pcAndPhone")}
                width={27}
                height={25}
                alt=""
                className={cl.icon}
              />
              усе навчання на інтерактивній платформі
            </Typography>
          </ContentCard>
          <div className={cl.line}></div>
          <ContentCard
            width="530px"
            cardBgColor="linear-gradient(#FFFFFF, #FFFBF1)"
            className={cl.linksCard}
          >
            <Typography variant="body2">
              <Image
                src={getIconSrc("calendar")}
                width={27}
                height={25}
                alt=""
                className={cl.icon}
              />
              зручне формування графіку навчання
            </Typography>

            <Typography variant="body2">
              <Image
                src={getIconSrc("checkCircle")}
                width={27}
                height={25}
                alt=""
                className={cl.icon}
              />
              онлайн-запис на сайті на будь-який курс
            </Typography>

            <Typography variant="body2">
              <Image
                src={getIconSrc("videoBox")}
                width={27}
                height={25}
                alt=""
                className={cl.icon}
              />
              відеогайди та детальний опис всіх курсів
            </Typography>

            <Typography variant="body2">
              <Image
                src={getIconSrc("books")}
                width={27}
                height={25}
                alt=""
                className={cl.icon}
              />
              додаткові корисні навчальні ресурси
            </Typography>

            <Typography variant="body2">
              <Image
                src={getIconSrc("brush")}
                width={27}
                height={25}
                alt=""
                className={cl.icon}
              />
              авторські продукти та багато іншого!
            </Typography>
          </ContentCard>
        </div>
      </section>

      <section className={cl.benefits}>
        <div className={cl.header}>
          <Typography
            variant="h6"
            className={cl.header}
            align="center"
            id="freeCourse"
          >
            Реєструючись на платформі нашої школи
          </Typography>
          <Typography variant="h3" align="center">
            {" "}
            Ви автоматично отримуєте:
          </Typography>
        </div>

        <div className={cl.cards}>
          <div className={cl.cardWrapper}>
            <ContentCard
              width="465px"
              className={cl.card}
              label={
                <Typography
                  variant="subtitle2"
                  style={{
                    fontSize: "13px",
                    lineHeight: "14px",
                    fontWeight: 700,
                  }}
                >
                  НЕЗАБАРОМ!
                </Typography>
              }
              labelClassName={cl.soonLabel}
              labelBgColor="linear-gradient(#FFF383, #FFDE89)"
            >
              <Typography
                variant="h3"
                style={{ fontSize: "26px", lineHeight: "29px" }}
              >
                Безкоштовний мінікурс “Японізація”
              </Typography>
              <Image
                src="/icons/art/megaPresent.png"
                alt="Present"
                width={102}
                height={98}
              />
              <Typography
                variant="body1"
                className={cl.freeCourseText}
                style={{ whiteSpace: "pre-line" }}
              >
                {
                  " Зазирність на наш безкоштовний \nмовно-культурний мінікурс у вигляді\n пізнавальних відеоуроків, інтерактивних \nзавданнь та тестів на самоперевірку!\nВ незалежності від володіння японської \n мови - курс зацікавить усіх бажаючих!\nЛекторка: Тетяна Селіверстова."
                }
              </Typography>
            </ContentCard>

            <div className={cl.video}>
              <div
                style={{ backgroundImage: "url('/photos/joinJapanCourse.png')" }}
                className={cl.videoWrapper}
                onClick={
                  () => toast("Цей курс ще в розробці⭐️")
                  // dispatch(
                  //   openGalleryDialog({
                  //     type: "video",
                  //     src: "https://www.youtube.com/watch?v=8ypRvNZhocU",
                  //   })
                  // )
                }
              >
                <PlayButtonIcon className={cl.playBtn} />
              </div>
            </div>
          </div>

          <div className={cl.cardWrapper}>
            <ContentCard width="465px" className={cl.card}>
              <Typography
                variant="h3"
                style={{ fontSize: "26px", lineHeight: "29px" }}
              >
                Знижку 5% на ВСІ товари в нашій Крамниці!
              </Typography>
              <Image
                src="/icons/art/shopCart.png"
                alt="Present"
                width={97}
                height={87}
              />
              <Typography variant="body1">
                Реєструючись на платформі <b>отримуйте додаткові 5%</b> знижки
                на всі наші товари поверх будь-якої акції або вже наявної знижки
                на нашу продукцію! В Особистому Кабінеті Ви знайдете промокод на
                знижку та зможете скористатись ним під час оформлення
                замовлення!
              </Typography>
            </ContentCard>

            <div className={cl.video}>
              <div
                className={cl.videoWrapper}
                style={{ backgroundImage: "url('/photos/joinStore.jpg')" }}
                onClick={() =>
                  dispatch(
                    openGalleryDialog({
                      type: "video",
                      src: "https://www.youtube.com/watch?v=t2wI-4klCXs",
                    })
                  )
                }
              >
                <PlayButtonIcon className={cl.playBtn} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cl.register}>
        <Typography variant="h2" align="center">
          Вивчення японської мови з будь-якого девайсу на єдиній інтерактивній
          платформі TanPoPo!
        </Typography>
        <Image
          className={cl.img}
          src="/images/boyWithLaptop.jpg"
          alt="Boy with laptop"
          width={1126}
          height={512}
          style={{
            width: "100%",
            maxWidth: "1126px",
            height: "auto",
          }}
        />

        <div className={cl.buttonWrapper}>
          <Image
            src="/icons/arrowLong.svg"
            alt="arrow"
            width={65}
            height={55}
            className={cl.arrow}
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
        </div>

        <div className={cl.check}>
          <Checkbox onClick={handleCheckboxClick} isChecked={isChecked} />
          <Typography variant="body2" className={cl.checkText}>
            Я ознайомився та приймаю умови{" "}
            <Link href="/contacts/oferta">
              <u>Публічної Оферти</u>
            </Link>{" "}
            та{" "}
            <Link href="/contacts/confidentialityPolicy">
              <u>Політики Конфіденційності</u>
            </Link>
            .
          </Typography>
        </div>
      </section>
    </main>
  );
};

export { PageClient };
