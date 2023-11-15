import cl from "./page.module.scss";
import { textContent } from "./textContent";
import Image from "next/image";
import { Button, ContentCard, Typography } from "@/components";
import ArrowLongIcon from "/public/icons/arrowLong.svg";

export default function Test() {
  return (
    <main className={cl.test}>
      <section className={cl.bigImageBlock}>
        <Typography variant="h3">{textContent.bigImageBlock.header}</Typography>
        <Typography variant="h6">{textContent.bigImageBlock.title}</Typography>
        <Image
          alt=""
          src={textContent.bigImageBlock.image}
          width={1920}
          height={1080}
          style={{ width: "850px", height: "auto" }}
        />
      </section>

      <section className={cl.cardsBlock}>
        {textContent.cardsBlock.map((card, i) => (
          <ContentCard width="376px" key={i}>
            <Typography variant="h6">{card.title}</Typography>
            <Image
              alt=""
              src={card.image}
              width={500}
              height={300}
              style={{ maxWidth: "90px", height: "auto" }}
            />
            <Typography variant="body2">{card.caption}</Typography>
          </ContentCard>
        ))}
      </section>

      <section className={cl.levelsBlock}>
        <Typography variant="h5" style={{ whiteSpace: "pre" }}>
          {textContent.levelsBlock.header}
        </Typography>
        <ContentCard width="1010px" className={cl.ruler}>
          {textContent.levelsBlock.levels.map((level, i) => {
            if (!(i % 2)) {
              return (
                <div key={i} className={cl.mark}>
                  <Typography variant="h3">{level.level}</Typography>
                  <div className={cl.line}></div>
                  <Typography variant="subtitle2" style={{ whiteSpace: "pre" }}>
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
        <ContentCard className={cl.titleCard} width="fit-content">
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
          >
            <Typography variant="h6">
              {textContent.beginTestBlock.button.text}
            </Typography>
            <div className={cl.icon}>
              <ArrowLongIcon />
            </div>
          </Button>
        </ContentCard>
      </section>
    </main>
  );
}
