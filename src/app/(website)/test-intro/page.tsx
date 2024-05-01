import cl from "./page.module.scss";
import { textContent } from "./textContent";
import Image from "next/image";
import { Button, ContentCard, Typography } from "@/components";
import ArrowLongIcon from "/public/icons/arrowLong.svg";
import { CardsBlock } from "./_components/cardsBlock/cardsBlock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Онлайн-тест з японської мови - визначити рівень JLPT",
  description:
    "Безкоштовний комплексний онлайн-тест, який допоможе визначити ваш поточний рівень володіння мовою. Визначити рівень володіння японської мови JLPT.",
};

export default function TestIntro() {
  return (
    <main className={cl.testIntro}>
      <section className={cl.bigImageBlock}>
        <Typography
          variant="h1"
          style={{ textAlign: "center", fontSize: "36px", lineHeight: "1.2" }}
        >
          ОНЛАЙН-ТЕСТ
        </Typography>

        <div
          style={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            align="center"
            style={{
              // display: "contents",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "1.6",
            }}
          >
            {" "}
            Наш онлайн-тест допоможе визначити Ваш рівень японської мови!
          </Typography>
        </div>

        <Image
          alt=""
          src={"/images/laptop.png"}
          width={1920}
          height={1080}
          style={{ width: "850px", height: "auto", maxWidth: "100%" }}
        />
        <div
          className={cl.imageContainer}
          style={{ backgroundImage: "url(/images/laptop.png)" }}
        ></div>
      </section>

      <CardsBlock />

      <section className={cl.levelsBlock}>
        <Typography
          variant="h2"
          style={{ whiteSpace: "pre", lineHeight: "1.334", fontSize: "26px" }}
        >
          {textContent.levelsBlock.header}
        </Typography>
        <div className={cl.levelsWrapper}>
          <ContentCard width="1010px" className={cl.ruler}>
            {textContent.levelsBlock.levels.map((level, i) => {
              if (!(i % 2)) {
                return (
                  <div key={i} className={cl.mark}>
                    <Typography variant="h3">{level.level}</Typography>
                    <div className={cl.line}></div>
                    <Typography
                      variant="subtitle2"
                      style={{ whiteSpace: "pre" }}
                    >
                      {level.label}
                    </Typography>
                  </div>
                );
              } else {
                return (
                  <ContentCard
                    className={cl.pill}
                    key={i}
                    cardBgColor={level.background}
                    width="63px"
                    style={{ padding: "0" }}
                  >
                    <Typography variant="h6">{level.level}</Typography>
                  </ContentCard>
                );
              }
            })}
          </ContentCard>

          <div className={cl.wrapper}>
            <ContentCard className={cl.titleCard}>
              <Typography variant="body1">
                {textContent.levelsBlock.titleCard}
              </Typography>
            </ContentCard>
            <div className={cl.cardsWrapper}>
              <ContentCard width="473px" className={cl.card}>
                <Typography variant="h6">
                  {textContent.levelsBlock.card1.title}
                </Typography>
                <Image
                  alt=""
                  src={textContent.levelsBlock.card1.image}
                  width={500}
                  height={300}
                  style={{ width: "auto", maxHeight: "82px" }}
                />
                <Typography variant="body1">
                  {textContent.levelsBlock.card1.caption}
                </Typography>
              </ContentCard>
              <ContentCard width="473px" className={cl.card}>
                <Typography variant="h6">
                  {textContent.levelsBlock.card2.title}
                </Typography>
                <Image
                  alt=""
                  src={textContent.levelsBlock.card2.image}
                  width={500}
                  height={300}
                  style={{ width: "auto", height: "82px" }}
                />
                <Typography variant="body1">
                  {textContent.levelsBlock.card2.caption}
                </Typography>
              </ContentCard>
            </div>
          </div>
        </div>
      </section>

      <section className={cl.beginTestBlock} id="start">
        <ContentCard width="792px" className={cl.card}>
          <Typography
            variant="h2"
            style={{ fontSize: "30px", lineHeight: "1.23" }}
          >
            {textContent.beginTestBlock.title}
          </Typography>
          <Image
            alt=""
            src={textContent.beginTestBlock.image}
            width={500}
            height={300}
            style={{ width: "83px", height: "auto" }}
          />
          <Typography variant="body2">
            {textContent.beginTestBlock.caption}
          </Typography>
          <Button
            type="button"
            variant="outlined"
            className={cl.button}
            icon={textContent.beginTestBlock.button.icon}
            href={textContent.beginTestBlock.button.href}
          >
            <Typography variant="h6">
              {textContent.beginTestBlock.button.text}
            </Typography>
          </Button>
        </ContentCard>
        <div className={cl.icon}>
          <ArrowLongIcon />
        </div>
      </section>
    </main>
  );
}
