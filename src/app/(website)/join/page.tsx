"use client";
import React from "react";
import PlayButtonIcon from "/public/icons/playButton.svg";
import {
  Typography,
  ContentCard,
  Button,
  Checkbox,
  Dialog,
  DialogGallery,
} from "@/components";
import Image from "next/image";
import cl from "./page.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { openGalleryDialog } from "@/redux/slices/galleryDialog/galleryDialogSlice";

export default function Join() {
  const router = useRouter();
  const dispatch = useAppDispatch();
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
      <DialogGallery />

      <section className={cl.benefits}>
        <Typography variant="h6" className={cl.header} align="center">
          Реєструючись на платформі нашої школи
        </Typography>
        <Typography variant="h3" align="center">
          Ви автоматично отримуєте:
        </Typography>
        <div className={cl.cards}>
          <div className={cl.cardWrapper}>
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
                Бажаєте подивитись “зсередини” на навчальну платформу?
                Зазирність нанаш безкоштовний мінікурс у вигляді відеоуроків з
                сенсеєм, інтерактивними завданнями, тестами для самоперевірки та
                самі переконайтесь в якості поданих навчальних матеріалів!
              </Typography>
            </ContentCard>

            <div className={cl.video}>
              <div
                className={cl.videoWrapper}
                onClick={() =>
                  dispatch(
                    openGalleryDialog({
                      type: "video",
                      src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    })
                  )
                }
              >
                <Image
                  src="/images/selfEducation.jpg"
                  alt="Japanese courses"
                  width={1920}
                  height={1080}
                  style={{ maxWidth: "100%", width: "392px", height: "auto" }}
                />
                <PlayButtonIcon className={cl.playBtn} />
              </div>
            </div>
          </div>

          <div className={cl.cardWrapper}>
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
                наші товари поверх будь-якої акції або вже наявної знижки на
                нашу продукцію! В Особистому Кабінеті Ви знайдете промокод на
                знижку та зможете скористатись ним під час оформлення
                замовлення!
              </Typography>
            </ContentCard>

            <div
              className={cl.video}
              onClick={() =>
                dispatch(
                  openGalleryDialog({
                    type: "video",
                    src: "https://www.youtube.com/watch?v=fNFzfwLM72c",
                  })
                )
              }
            >
              <div className={cl.videoWrapper}>
                <Image
                  src="/images/selfEducation.jpg"
                  alt="Japanese courses"
                  width={1920}
                  height={1080}
                  style={{ maxWidth: "100%", width: "392px", height: "auto" }}
                />
                <PlayButtonIcon className={cl.playBtn} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cl.register}>
        <Typography variant="h2" align="center">
          Створення Особистого Кабінету
        </Typography>
        <Typography variant="h6" align="center">
          Усе навчання на єдиній інтерактивній платформі.
        </Typography>
        <Image
          className={cl.img}
          src="/images/boyWithLaptop.svg"
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
          <Checkbox onClick={handleCheckboxClick} />
          <Typography variant="body2" className={cl.checkText}>
            Я ознайомився та приймаю умови{" "}
            <Link href="/contacts/oferta">
              <u>Публічної Оферти</u>
            </Link>{" "}
            та{" "}
            <Link href="/contacts/confidentialityPolicy">
              <u>Політики Конфідеційності</u>
            </Link>
            .
          </Typography>
        </div>
      </section>
    </main>
  );
}
