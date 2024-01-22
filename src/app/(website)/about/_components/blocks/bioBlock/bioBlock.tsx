"use client";
import { ContentCard, Typography } from "@/components";
import cl from "./bioBlock.module.scss";
import Image from "next/image";
import { Line } from "../../line/line";
import { textContent } from "../../../textContent";
import { getValidClassNames } from "@/helpers";
import { useAppSelector } from "@/redux/hooks";
import { selectWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";

export const BioBlock = () => {
  const { isPc, isMobile } = useAppSelector(selectWindowMatchMedia);

  let bioContent;

  if (isPc) {
    bioContent = (
      <>
        <Line />

        <ContentCard className={cl.bioContent} width="100%">
          <ContentCard className={cl.imageContent} width="433px">
            <Image
              alt=""
              src={"/photos/crossroads.png"}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </ContentCard>
          <div className={cl.paragraphs}>
            <Typography variant="body1">
              <b>{textContent.bioCards.card1.p1.bold}</b>{" "}
              {textContent.bioCards.card1.p1.normal}
            </Typography>
            <Typography variant="body1">
              <b>{textContent.bioCards.card1.p2.bold}</b>{" "}
              {textContent.bioCards.card1.p2.normal}
            </Typography>
            <Typography variant="body1">
              <b>{textContent.bioCards.card1.p3.bold}</b>{" "}
              {textContent.bioCards.card1.p3.normal}
            </Typography>
            <Typography variant="body1">
              <b>{textContent.bioCards.card1.p4.bold}</b>{" "}
              {textContent.bioCards.card1.p4.normal}
            </Typography>
            <Typography variant="body1">
              <b>{textContent.bioCards.card1.p5.bold}</b>{" "}
              {textContent.bioCards.card1.p5.normal}
            </Typography>
          </div>
        </ContentCard>

        <Line position="left" flag="ua" />

        <ContentCard
          className={getValidClassNames(cl.bioContent, cl.contentGrid)}
          width="100%"
        >
          <ContentCard
            className={getValidClassNames(cl.imageContent, cl.imgRight)}
          >
            <Image
              alt=""
              src={"/photos/table.png"}
              sizes="100vw"
              width={1920}
              height={1080}
              style={{ width: "100%", height: "auto" }}
            />
          </ContentCard>
          <ContentCard
            className={getValidClassNames(cl.imageContent, cl.imgLeft)}
          >
            <Image
              alt=""
              src={"/photos/tv.png"}
              sizes="100vw"
              fill
              style={{ objectFit: "cover" }}
            />
          </ContentCard>

          <Typography variant="body1" className={cl.p1}>
            <b>{textContent.bioCards.card2.p1.bold}</b>{" "}
            {textContent.bioCards.card2.p1.normal}
          </Typography>
          <Typography variant="body1" className={cl.p2}>
            <b>{textContent.bioCards.card2.p2.bold}</b>{" "}
            {textContent.bioCards.card2.p2.normal}
          </Typography>
          <Typography variant="body1" className={cl.p3}>
            <b>{textContent.bioCards.card2.p3.bold}</b>{" "}
            {textContent.bioCards.card2.p3.normal}
          </Typography>
          <Typography variant="body1" className={cl.p4}>
            <b>{textContent.bioCards.card2.p4.bold}</b>{" "}
            {textContent.bioCards.card2.p4.normal}
          </Typography>
        </ContentCard>

        <Line position="right" flag="jp" />

        <ContentCard className={cl.bioContent} width="100%">
          <div className={cl.paragraphs}>
            <Typography variant="body1">
              <b>{textContent.bioCards.card3.p1.bold}</b>{" "}
              {textContent.bioCards.card3.p1.normal}
            </Typography>
            <Typography variant="body1">
              <b>{textContent.bioCards.card3.p2.bold}</b>{" "}
              {textContent.bioCards.card3.p2.normal}
            </Typography>
            <Typography variant="body1">
              <b>{textContent.bioCards.card3.p3.bold}</b>{" "}
              {textContent.bioCards.card3.p3.normal}
            </Typography>
            <Typography variant="body1">
              <b>{textContent.bioCards.card3.p4.bold}</b>{" "}
              {textContent.bioCards.card3.p4.normal}
            </Typography>
          </div>
          <ContentCard
            className={cl.imageContent}
            width="auto"
            style={{ height: "fit-content" }}
          >
            <Image
              alt=""
              src={"/photos/beach.png"}
              sizes="100vw"
              width={1920}
              height={1080}
              style={{ width: "100%", height: "auto" }}
            />
          </ContentCard>
        </ContentCard>
      </>
    );
  } else {
    bioContent = (
      <>
        <ContentCard className={cl.bioContent} width="100%">
          <ContentCard className={cl.imageContent} width="433px">
            <Image
              alt=""
              src={"/photos/crossroads.png"}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </ContentCard>
          <div className={cl.paragraphs}>
            <Typography variant="body1">
              <b>{textContent.bioCards.card1.p1.bold}</b>{" "}
              {textContent.bioCards.card1.p1.normal}
            </Typography>
            <Typography variant="body1">
              <b>{textContent.bioCards.card1.p2.bold}</b>{" "}
              {textContent.bioCards.card1.p2.normal}
            </Typography>
            <Typography variant="body1">
              <b>{textContent.bioCards.card1.p3.bold}</b>{" "}
              {textContent.bioCards.card1.p3.normal}
            </Typography>
          </div>
        </ContentCard>

        <div className={cl.paragraphs}>
          <Typography variant="body1">
            <b>{textContent.bioCards.card1.p4.bold}</b>{" "}
            {textContent.bioCards.card1.p4.normal}
          </Typography>
          <Typography variant="body1">
            <b>{textContent.bioCards.card1.p5.bold}</b>{" "}
            {textContent.bioCards.card1.p5.normal}
          </Typography>
        </div>

        <ContentCard width="100%" className={cl.bioContent}>
          <div className={cl.paragraphs}>
            <Typography variant="body1" className={cl.p1}>
              <b>{textContent.bioCards.card2.p1.bold}</b>{" "}
              {textContent.bioCards.card2.p1.normal}
            </Typography>
            <Typography variant="body1" className={cl.p2}>
              <b>{textContent.bioCards.card2.p2.bold}</b>{" "}
              {textContent.bioCards.card2.p2.normal}
            </Typography>
          </div>
          <ContentCard
            className={getValidClassNames(cl.imageContent, cl.imgRight)}
          >
            <Image
              alt=""
              src={"/photos/table.jpg"}
              sizes="100vw"
              width={1920}
              height={1080}
              style={{ width: "100%", height: "auto" }}
            />
          </ContentCard>
        </ContentCard>

        <div className={cl.paragraphs}>
          <Typography variant="body1" className={cl.p3}>
            <b>{textContent.bioCards.card2.p3.bold}</b>{" "}
            {textContent.bioCards.card2.p3.normal}
          </Typography>
        </div>

        <ContentCard width="100%" className={cl.bioContent}>
          <ContentCard
            className={getValidClassNames(cl.imageContent, cl.imgLeft)}
          >
            <Image
              alt=""
              src={"/photos/tv.jpg"}
              sizes="100vw"
              fill
              style={{ objectFit: "cover" }}
            />
          </ContentCard>
          <div className={cl.paragraphs}>
            <Typography variant="body1" className={cl.p4}>
              <b>{textContent.bioCards.card2.p4.bold}</b>{" "}
              {textContent.bioCards.card2.p4.normal}
            </Typography>
          </div>
        </ContentCard>

        <div className={cl.paragraphs}>
          {" "}
          <Typography variant="body1">
            <b>{textContent.bioCards.card3.p1.bold}</b>{" "}
            {textContent.bioCards.card3.p1.normal}
          </Typography>
          <Typography variant="body1">
            <b>{textContent.bioCards.card3.p2.bold}</b>{" "}
            {textContent.bioCards.card3.p2.normal}
          </Typography>
        </div>

        <ContentCard className={cl.bioContent} width="100%">
          <div className={cl.paragraphs}>
            <Typography variant="body1">
              <b>{textContent.bioCards.card3.p3.bold}</b>{" "}
              {textContent.bioCards.card3.p3.normal}
            </Typography>
            <Typography variant="body1">
              <b>{textContent.bioCards.card3.p4.bold}</b>{" "}
              {textContent.bioCards.card3.p4.normal}
            </Typography>
          </div>
          <ContentCard
            className={cl.imageContent}
            width="auto"
            style={{ height: "fit-content" }}
          >
            <Image
              alt=""
              src={"/photos/beach.png"}
              sizes="100vw"
              width={1920}
              height={1080}
              style={{ width: "100%", height: "auto" }}
            />
          </ContentCard>
        </ContentCard>
      </>
    );
  }
  return (
    <div className={cl.bioBlock}>
      <ContentCard
        className={cl.imageContent}
        width="97%"
        labelPosition="bottom"
        labelBgColor="linear-gradient(180deg, #FDFF87 0%, #FAD26C 100%)"
        label={
          !isMobile && (
            <>
              <Typography variant="h3" className={cl.labelLine1}>
                Тетяна Селіверстова
              </Typography>
              <Typography variant="h6" className={cl.labelLine2}>
                Засновниця школи <b>TanPoPo</b>
              </Typography>
            </>
          )
        }
      >
        <Image
          alt=""
          src={"/photos/kids.png"}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className={cl.image}
        />
      </ContentCard>

      {isMobile && (
        <>
          <Line height="64px" />
          <ContentCard
            width="fit-content"
            className={cl.label}
            cardBgColor="linear-gradient(180deg, #FDFF87 0%, #FAD26C 100%)"
          >
            <Typography variant="h3" className={cl.labelLine1}>
              Тетяна Селіверстова
            </Typography>
            <Typography variant="h6" className={cl.labelLine2}>
              Засновниця школи <b>TanPoPo</b>
            </Typography>
          </ContentCard>
          <Line height="64px" />
        </>
      )}

      <>{bioContent}</>
    </div>
  );
};
