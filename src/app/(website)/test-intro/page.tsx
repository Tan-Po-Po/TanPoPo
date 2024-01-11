import cl from "./page.module.scss";
import { textContent } from "./textContent";
import Image from "next/image";
import { Button, ContentCard, Typography } from "@/components";
import ArrowLongIcon from "/public/icons/arrowLong.svg";
import { CardsBlock } from "./_components/cardsBlock/cardsBlock";

export default function TestIntro() {
  return (
    <main className={cl.testIntro}>
      <section className={cl.bigImageBlock}>
        <Typography variant="h3" style={{ textAlign: "center" }}>
          {textContent.bigImageBlock.header}
        </Typography>
        <Typography variant="h6" style={{ textAlign: "center" }}>
          {textContent.bigImageBlock.title}
        </Typography>
        <Image
          alt=""
          src={textContent.bigImageBlock.image}
          width={1920}
          height={1080}
          style={{ width: "850px", height: "auto", maxWidth: "100%" }}
        />
        <div
          className={cl.imageContainer}
          style={{ backgroundImage: `url(${textContent.bigImageBlock.image})` }}
        ></div>
      </section>

      <CardsBlock />

      <section className={cl.levelsBlock}>
        <Typography variant="h5" style={{ whiteSpace: "pre" }}>
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

      <section className={cl.beginTestBlock}>
        <ContentCard width="792px" className={cl.card}>
          <Typography variant="h4">
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
